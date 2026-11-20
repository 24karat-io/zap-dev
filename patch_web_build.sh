#!/bin/bash
# Patches Flutter web build output so browsers fetch fresh entry assets after deploy.
set -euo pipefail

WEB_DIR="${1:-.}"
cd "$WEB_DIR"

if [ ! -f version.json ]; then
  echo "version.json not found in $(pwd)" >&2
  exit 1
fi

if [ ! -f index.html ]; then
  echo "index.html not found in $(pwd)" >&2
  exit 1
fi

VERSION=$(python3 -c "import json; print(json.load(open('version.json'))['version'])")
BUILD=$(python3 -c "import json; print(json.load(open('version.json'))['build_number'])")
APP_VERSION="${VERSION}+${BUILD}"

python3 - <<PY
import json
from datetime import datetime, timezone

with open("version.json") as f:
    data = json.load(f)

data["deploy_date"] = datetime.now(timezone.utc).strftime("%m/%d/%Y %I:%M:%S %p (UTC)")

with open("version.json", "w") as f:
    json.dump(data, f, separators=(",", ":"))
PY

# Cache-bust bootstrap loader and icon font references in index.html.
perl -pi -e "s|bootstrap_loader\\.js(\\?v=[^\"'\\s>]*)?|bootstrap_loader.js?v=${BUILD}|g" index.html
perl -pi -e "s|assets/assets/fonts/Ionicons\\.ttf(\\?v=[^\"'\\s>]*)?|assets/assets/fonts/Ionicons.ttf?v=${BUILD}|g" index.html

if grep -q 'name="app-version"' index.html; then
  perl -pi -e "s|<meta name=\"app-version\" content=\"[^\"]*\"|<meta name=\"app-version\" content=\"${APP_VERSION}\"|" index.html
else
  perl -pi -e "s|<meta charset=\"UTF-8\">|<meta charset=\"UTF-8\">\n  <meta name=\"app-version\" content=\"${APP_VERSION}\">|" index.html
fi

# Ensure the entry files are fetched with a build-specific URL. The loader reads
# these from _flutter.buildConfig: main.dart.js for the dart2js build, plus
# main.dart.wasm / main.dart.mjs when the app was built with --wasm.
cache_bust_entry_paths() {
  perl -pi -e "s|\"mainJsPath\":\"main\\.dart\\.js(\\?v=[^\"]*)?\"|\"mainJsPath\":\"main.dart.js?v=${BUILD}\"|g" "$1"
  perl -pi -e "s|\"mainWasmPath\":\"main\\.dart\\.wasm(\\?v=[^\"]*)?\"|\"mainWasmPath\":\"main.dart.wasm?v=${BUILD}\"|g" "$1"
  perl -pi -e "s|\"jsSupportRuntimePath\":\"main\\.dart\\.mjs(\\?v=[^\"]*)?\"|\"jsSupportRuntimePath\":\"main.dart.mjs?v=${BUILD}\"|g" "$1"
}

for f in flutter_bootstrap.js flutter.js; do
  if [ -f "$f" ]; then
    cache_bust_entry_paths "$f"
  fi
done

# Cache-bust font files. Icon fonts (MaterialIcons, Lucide, ...) are tree-shaken
# to the glyphs the app uses, so each build ships a different file under the same
# URL. The CDN serves .ttf/.otf with a long browser cache (31 days), so a browser
# that cached an older subset shows blank icons for newly used glyphs. The engine
# fetches each "asset" from FontManifest.json as-is (query string kept), and
# FontManifest.json itself is only cached briefly, so add ?v=<build> there.
if [ -f assets/FontManifest.json ]; then
  BUILD="$BUILD" python3 - <<'PY'
import json, os

path = "assets/FontManifest.json"
build = os.environ["BUILD"]
with open(path) as f:
    families = json.load(f)

for family in families:
    for font in family.get("fonts", []):
        asset = font["asset"].split("?v=", 1)[0]
        font["asset"] = f"{asset}?v={build}"

with open(path, "w") as f:
    json.dump(families, f, separators=(",", ":"))
PY
fi

echo "Patched web build ${APP_VERSION}"
