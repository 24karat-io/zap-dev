((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={L7:function L7(d,e){this.a=d
this.b=e},dYV:function dYV(){},
hTO(d){return A.u(["cover_img",d.a,"description",d.b,"public",d.c,"title",d.d,"id",d.e],y.N,y.z)},
axZ:function axZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cxk:function cxk(){},
hVO(d){var x,w,v,u,t,s,r=A.R(d.h(0,"id")),q=y.L,p=q.a(d.h(0,"collaborators"))
if(p==null)p=null
else{p=J.az(p,new B.eko(),y.g)
p=A.L(p,p.$ti.i("ab.E"))}x=A.R(d.h(0,"cover_img"))
w=A.R(d.h(0,"title"))
v=A.R(d.h(0,"description"))
u=q.a(d.h(0,"items"))
if(u==null)u=null
else{u=J.az(u,new B.ekp(),y.t)
u=A.L(u,u.$ti.i("ab.E"))}q=q.a(d.h(0,"likes"))
if(q==null)q=null
else{q=J.az(q,new B.ekq(),y.g)
q=A.L(q,q.$ti.i("ab.E"))}t=A.R(d.h(0,"owner"))
s=A.c4(d.h(0,"public"))
return new B.aBP(r,p,x,w,v,u,q,t,s===!0)},
iR2(d){var x,w,v=d.gCt()
if(v==null)v=null
else{v=J.az(v,new B.ekr(),y.P)
v=A.L(v,v.$ti.i("ab.E"))}x=d.gjB()
if(x==null)x=null
else{x=J.az(x,new B.eks(),y.P)
x=A.L(x,x.$ti.i("ab.E"))}w=d.gaEH()
if(w==null)w=null
else{w=J.az(w,new B.ekt(),y.P)
w=A.L(w,w.$ti.i("ab.E"))}return A.u(["id",d.a,"collaborators",v,"cover_img",d.c,"title",d.d,"description",d.e,"items",x,"likes",w,"owner",d.w,"public",d.x],y.N,y.z)},
aBP:function aBP(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
eko:function eko(){},
ekp:function ekp(){},
ekq:function ekq(){},
ekr:function ekr(){},
eks:function eks(){},
ekt:function ekt(){},
cDu:function cDu(){},
hmL:function hmL(){},
hmK:function hmK(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[86],B)
B.L7.prototype={
wk(d){return this.dQ3(d)},
hZ(){return this.wk(!1)},
dQ3(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$wk=A.k(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
n=d?C.bl:C.db
x=6
return A.e(t.b.MS("  query MyShowrooms {\n    myShowrooms {\n      collaborators {\n        email\n        mobile\n        nickname\n        profile_img\n        uid\n        wallet_address\n      }\n      cover_img\n      description\n      id\n      items {\n        artist {\n          wallet_address\n          uid\n          profile_img\n          nickname\n          mobile\n          email\n          verified\n        }\n        brand {\n          id\n          img\n          name\n          description\n        }\n        created_at\n        desc\n        desc_pdf {\n          name\n          size\n          url\n        }\n        id\n        item_id\n        link\n        owner\n        supply\n        thumbnail\n        title\n        transaction_id\n        transferrable\n        type_id\n        unlockable\n        url\n      }\n      likes {\n        uid\n        wallet_address\n      }\n      owner\n      public\n      title\n    }\n  }\n",n),$async$wk)
case 6:s=f
if(s!=null){r=s.h(0,"myShowrooms")
if(r!=null&&y.j.b(r)){n=J.az(r,new B.dYV(),y.R)
m=A.L(n,n.$ti.i("ab.E"))
q=m
t.a.C(0,q)}}v=1
x=5
break
case 3:v=2
k=u.pop()
p=A.M(k)
o=A.aO(k)
A.dk(p,o,"[GraphQL] myShowrooms")
x=5
break
case 2:x=1
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$wk,w)},
aj_(d){return this.bT8(d)},
bT8(d){var x=0,w=A.o(y.T),v,u=this,t,s
var $async$aj_=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.b.eF("  query ShowroomInvitation($showroomId: ID!) {\n    showroom(id: $showroomId) {\n      id\n      invitation_code\n    }\n  }\n",C.bl,A.u(["showroomId",d],y.N,y.z)),$async$aj_)
case 3:s=f
if(s!=null){t=s.h(0,"showroom")
if(t!=null){v=J.Y(t,"invitation_code")
x=1
break}}v=null
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$aj_,w)},
a10(d,e,f,g,h){return this.dOP(d,e,f,g,h)},
dOO(d,e,f){return this.a10(null,null,d,e,f)},
dOP(d,e,f,g,h){var x=0,w=A.o(y.H),v=this
var $async$a10=A.k(function(i,j){if(i===1)return A.l(j,w)
for(;;)switch(x){case 0:x=2
return A.e(v.b.aZ("  mutation Showroom($params: AddShowroomParams!) {\n    showroom(params: $params)\n  }\n",A.u(["params",B.hTO(new B.axZ(d,e,g,h,f))],y.N,y.z)),$async$a10)
case 2:return A.m(null,w)}})
return A.n($async$a10,w)},
bCF(d,e){return this.b.aZ("  mutation AddShowroomItems($items: [String!], $showroomId: ID!) {\n    addShowroomItems(items: $items, showroomId: $showroomId)\n  }\n",A.u(["items",d,"showroomId",e],y.N,y.z))}}
B.axZ.prototype={
H(){var x=this
return A.u(["cover_img",x.a,"description",x.b,"public",x.c,"title",x.d,"id",x.e],y.N,y.z)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(v!==e){x=!1
if(J.aa(e)===A.y(v))if(e instanceof B.axZ){w=e.a==v.a
if(w||w){w=e.b==v.b
if(w||w){w=e.c===v.c
if(w||w){w=e.d===v.d
if(w||w){x=e.e==v.e
x=x||x}}}}}}else x=!0
return x},
gn(d){var x=this
return A.Z(A.y(x),x.a,x.b,x.c,x.d,x.e,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"AddShowroomParams(coverImg: "+A.d(x.a)+", description: "+A.d(x.b)+", public: "+x.c+", title: "+x.d+", id: "+A.d(x.e)+")"},
ghm(){return this.b},
gbw(){return this.d},
gb9(){return this.e}}
B.cxk.prototype={}
B.aBP.prototype={
gCt(){var x=this.b
if(x==null)return null
return new A.br(x,x,y.Q)},
gjB(){var x=this.f
if(x==null)return null
return new A.br(x,x,y.Z)},
gaEH(){var x=this.r
if(x==null)return null
return new A.br(x,x,y.Q)},
H(){return B.iR2(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(v!==e){x=!1
if(J.aa(e)===A.y(v))if(e instanceof B.aBP){w=e.a==v.a
if(w||w)if(C.L.aW(e.gCt(),v.b)){w=e.c==v.c
if(w||w){w=e.d==v.d
if(w||w){w=e.e==v.e
if(w||w)if(C.L.aW(e.gjB(),v.f))if(C.L.aW(e.gaEH(),v.r)){w=e.w==v.w
if(w||w){x=e.x===v.x
x=x||x}}}}}}}else x=!0
return x},
gn(d){var x=this
return A.Z(A.y(x),x.a,C.L.b_(x.b),x.c,x.d,x.e,C.L.b_(x.f),C.L.b_(x.r),x.w,x.x,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"Showroom(id: "+A.d(x.a)+", collaborators: "+A.d(x.gCt())+", coverImg: "+A.d(x.c)+", title: "+A.d(x.d)+", description: "+A.d(x.e)+", items: "+A.d(x.gjB())+", likes: "+A.d(x.gaEH())+", owner: "+A.d(x.w)+", public: "+x.x+")"},
$iHb:1,
gb9(){return this.a},
gbw(){return this.d},
ghm(){return this.e}}
B.cDu.prototype={}
var z=a.updateTypes(["T<r,@>()","Hb(@)","L7(b1)"])
B.dYV.prototype={
$1(d){return B.hVO(d)},
$S:z+1}
B.eko.prototype={
$1(d){return A.iy(y.P.a(d))},
$S:207}
B.ekp.prototype={
$1(d){return A.mF(y.P.a(d))},
$S:135}
B.ekq.prototype={
$1(d){return A.iy(y.P.a(d))},
$S:207}
B.ekr.prototype={
$1(d){return A.jw(d)},
$S:392}
B.eks.prototype={
$1(d){return A.pj(d)},
$S:393}
B.ekt.prototype={
$1(d){return A.jw(d)},
$S:392}
B.hmL.prototype={
$1(d){var x=d.P($.bc(),y.U),w=new B.L7(A.bd(null,null,y.W),x)
w.hZ()
d.cj(new B.hmK(w))
return w},
$S:z+2}
B.hmK.prototype={
$0(){this.a.a.N()},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.axZ.prototype,"ga7","H",0)
x(B.aBP.prototype,"ga7","H",0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.X,[B.L7,B.cxk,B.cDu])
w(A.f0,[B.dYV,B.eko,B.ekp,B.ekq,B.ekr,B.eks,B.ekt,B.hmL])
v(B.axZ,B.cxk)
v(B.aBP,B.cDu)
v(B.hmK,A.f1)
x(B.cxk,A.aT)
x(B.cDu,A.aT)})()
A.f8(b.typeUniverse,JSON.parse('{"aBP":{"Hb":[]}}'))
var y=(function rtii(){var x=A.a7
return{Z:x("br<iF>"),Q:x("br<fs>"),U:x("lF"),W:x("G<Hb>"),j:x("G<@>"),P:x("T<r,@>"),t:x("iF"),R:x("Hb"),N:x("r"),g:x("fs"),z:x("@"),L:x("G<@>?"),T:x("r?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"jLB","AB",()=>A.jm(new B.hmL(),null,!1,null,null,A.a7("L7")))})()};
(a=>{a["4O6/GWtMZsdvet0qsFg7LPOAugQ="]=a.current})($__dart_deferred_initializers__);