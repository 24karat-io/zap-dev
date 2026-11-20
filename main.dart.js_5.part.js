((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Ld:function Ld(d,e){this.a=d
this.b=e},dZ3:function dZ3(){},
hTQ(d){return A.u(["cover_img",d.a,"description",d.b,"public",d.c,"title",d.d,"id",d.e],y.N,y.z)},
ay2:function ay2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cxm:function cxm(){},
hVR(d){var x,w,v,u,t,s,r=A.R(d.h(0,"id")),q=y.L,p=q.a(d.h(0,"collaborators"))
if(p==null)p=null
else{p=J.az(p,new B.eky(),y.g)
p=A.L(p,p.$ti.i("ab.E"))}x=A.R(d.h(0,"cover_img"))
w=A.R(d.h(0,"title"))
v=A.R(d.h(0,"description"))
u=q.a(d.h(0,"items"))
if(u==null)u=null
else{u=J.az(u,new B.ekz(),y.t)
u=A.L(u,u.$ti.i("ab.E"))}q=q.a(d.h(0,"likes"))
if(q==null)q=null
else{q=J.az(q,new B.ekA(),y.g)
q=A.L(q,q.$ti.i("ab.E"))}t=A.R(d.h(0,"owner"))
s=A.c7(d.h(0,"public"))
return new B.aBQ(r,p,x,w,v,u,q,t,s===!0)},
iQG(d){var x,w,v=d.gCC()
if(v==null)v=null
else{v=J.az(v,new B.ekB(),y.P)
v=A.L(v,v.$ti.i("ab.E"))}x=d.gjH()
if(x==null)x=null
else{x=J.az(x,new B.ekC(),y.P)
x=A.L(x,x.$ti.i("ab.E"))}w=d.gaF2()
if(w==null)w=null
else{w=J.az(w,new B.ekD(),y.P)
w=A.L(w,w.$ti.i("ab.E"))}return A.u(["id",d.a,"collaborators",v,"cover_img",d.c,"title",d.d,"description",d.e,"items",x,"likes",w,"owner",d.w,"public",d.x],y.N,y.z)},
aBQ:function aBQ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
eky:function eky(){},
ekz:function ekz(){},
ekA:function ekA(){},
ekB:function ekB(){},
ekC:function ekC(){},
ekD:function ekD(){},
cDw:function cDw(){},
hn2:function hn2(){},
hn1:function hn1(d){this.a=d}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[86],B)
B.Ld.prototype={
wl(d){return this.dQP(d)},
hZ(){return this.wl(!1)},
dQP(d){var x=0,w=A.o(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$wl=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
n=d?C.bk:C.dd
x=6
return A.e(t.b.MT("  query MyShowrooms {\n    myShowrooms {\n      collaborators {\n        email\n        mobile\n        nickname\n        profile_img\n        uid\n        wallet_address\n      }\n      cover_img\n      description\n      id\n      items {\n        artist {\n          wallet_address\n          uid\n          profile_img\n          nickname\n          mobile\n          email\n          verified\n        }\n        brand {\n          id\n          img\n          name\n          description\n        }\n        created_at\n        desc\n        desc_pdf {\n          name\n          size\n          url\n        }\n        id\n        item_id\n        link\n        owner\n        supply\n        thumbnail\n        title\n        transaction_id\n        transferrable\n        type_id\n        unlockable\n        url\n      }\n      likes {\n        uid\n        wallet_address\n      }\n      owner\n      public\n      title\n    }\n  }\n",n),$async$wl)
case 6:s=f
if(s!=null){r=s.h(0,"myShowrooms")
if(r!=null&&y.j.b(r)){n=J.az(r,new B.dZ3(),y.R)
m=A.L(n,n.$ti.i("ab.E"))
q=m
t.a.C(0,q)}}v=1
x=5
break
case 3:v=2
k=u.pop()
p=A.M(k)
o=A.aO(k)
A.dn(p,o,"[GraphQL] myShowrooms")
x=5
break
case 2:x=1
break
case 5:return A.m(null,w)
case 1:return A.l(u.at(-1),w)}})
return A.n($async$wl,w)},
ajl(d){return this.bTF(d)},
bTF(d){var x=0,w=A.o(y.T),v,u=this,t,s
var $async$ajl=A.j(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:x=3
return A.e(u.b.eF("  query ShowroomInvitation($showroomId: ID!) {\n    showroom(id: $showroomId) {\n      id\n      invitation_code\n    }\n  }\n",C.bk,A.u(["showroomId",d],y.N,y.z)),$async$ajl)
case 3:s=f
if(s!=null){t=s.h(0,"showroom")
if(t!=null){v=J.Y(t,"invitation_code")
x=1
break}}v=null
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$ajl,w)},
a18(d,e,f,g,h){return this.dPy(d,e,f,g,h)},
dPx(d,e,f){return this.a18(null,null,d,e,f)},
dPy(d,e,f,g,h){var x=0,w=A.o(y.H),v=this
var $async$a18=A.j(function(i,j){if(i===1)return A.l(j,w)
for(;;)switch(x){case 0:x=2
return A.e(v.b.aZ("  mutation Showroom($params: AddShowroomParams!) {\n    showroom(params: $params)\n  }\n",A.u(["params",B.hTQ(new B.ay2(d,e,g,h,f))],y.N,y.z)),$async$a18)
case 2:return A.m(null,w)}})
return A.n($async$a18,w)},
bDa(d,e){return this.b.aZ("  mutation AddShowroomItems($items: [String!], $showroomId: ID!) {\n    addShowroomItems(items: $items, showroomId: $showroomId)\n  }\n",A.u(["items",d,"showroomId",e],y.N,y.z))}}
B.ay2.prototype={
H(){var x=this
return A.u(["cover_img",x.a,"description",x.b,"public",x.c,"title",x.d,"id",x.e],y.N,y.z)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(v!==e){x=!1
if(J.aa(e)===A.x(v))if(e instanceof B.ay2){w=e.a==v.a
if(w||w){w=e.b==v.b
if(w||w){w=e.c===v.c
if(w||w){w=e.d===v.d
if(w||w){x=e.e==v.e
x=x||x}}}}}}else x=!0
return x},
gn(d){var x=this
return A.Z(A.x(x),x.a,x.b,x.c,x.d,x.e,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"AddShowroomParams(coverImg: "+A.d(x.a)+", description: "+A.d(x.b)+", public: "+x.c+", title: "+x.d+", id: "+A.d(x.e)+")"},
ghf(){return this.b},
gby(){return this.d},
gb9(){return this.e}}
B.cxm.prototype={}
B.aBQ.prototype={
gCC(){var x=this.b
if(x==null)return null
return new A.br(x,x,y.Q)},
gjH(){var x=this.f
if(x==null)return null
return new A.br(x,x,y.Z)},
gaF2(){var x=this.r
if(x==null)return null
return new A.br(x,x,y.Q)},
H(){return B.iQG(this)},
k(d,e){var x,w,v=this
if(e==null)return!1
if(v!==e){x=!1
if(J.aa(e)===A.x(v))if(e instanceof B.aBQ){w=e.a==v.a
if(w||w)if(C.M.aW(e.gCC(),v.b)){w=e.c==v.c
if(w||w){w=e.d==v.d
if(w||w){w=e.e==v.e
if(w||w)if(C.M.aW(e.gjH(),v.f))if(C.M.aW(e.gaF2(),v.r)){w=e.w==v.w
if(w||w){x=e.x===v.x
x=x||x}}}}}}}else x=!0
return x},
gn(d){var x=this
return A.Z(A.x(x),x.a,C.M.b0(x.b),x.c,x.d,x.e,C.M.b0(x.f),C.M.b0(x.r),x.w,x.x,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"Showroom(id: "+A.d(x.a)+", collaborators: "+A.d(x.gCC())+", coverImg: "+A.d(x.c)+", title: "+A.d(x.d)+", description: "+A.d(x.e)+", items: "+A.d(x.gjH())+", likes: "+A.d(x.gaF2())+", owner: "+A.d(x.w)+", public: "+x.x+")"},
$iHb:1,
gb9(){return this.a},
gby(){return this.d},
ghf(){return this.e}}
B.cDw.prototype={}
var z=a.updateTypes(["T<r,@>()","Hb(@)","Ld(b2)"])
B.dZ3.prototype={
$1(d){return B.hVR(d)},
$S:z+1}
B.eky.prototype={
$1(d){return A.iy(y.P.a(d))},
$S:216}
B.ekz.prototype={
$1(d){return A.mi(y.P.a(d))},
$S:136}
B.ekA.prototype={
$1(d){return A.iy(y.P.a(d))},
$S:216}
B.ekB.prototype={
$1(d){return A.jy(d)},
$S:473}
B.ekC.prototype={
$1(d){return A.oB(d)},
$S:474}
B.ekD.prototype={
$1(d){return A.jy(d)},
$S:473}
B.hn2.prototype={
$1(d){var x=d.P($.bd(),y.U),w=new B.Ld(A.be(null,null,y.W),x)
w.hZ()
d.ck(new B.hn1(w))
return w},
$S:z+2}
B.hn1.prototype={
$0(){this.a.a.N()},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ay2.prototype,"ga7","H",0)
x(B.aBQ.prototype,"ga7","H",0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.X,[B.Ld,B.cxm,B.cDw])
w(A.f0,[B.dZ3,B.eky,B.ekz,B.ekA,B.ekB,B.ekC,B.ekD,B.hn2])
v(B.ay2,B.cxm)
v(B.aBQ,B.cDw)
v(B.hn1,A.f1)
x(B.cxm,A.aV)
x(B.cDw,A.aV)})()
A.f9(b.typeUniverse,JSON.parse('{"aBQ":{"Hb":[]}}'))
var y=(function rtii(){var x=A.a7
return{Z:x("br<iD>"),Q:x("br<fs>"),U:x("lD"),W:x("G<Hb>"),j:x("G<@>"),P:x("T<r,@>"),t:x("iD"),R:x("Hb"),N:x("r"),g:x("fs"),z:x("@"),L:x("G<@>?"),T:x("r?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"jKE","AB",()=>A.jl(new B.hn2(),null,!1,null,null,A.a7("Ld")))})()};
(a=>{a["Z2Sg61igt9BATiDQhmJqNnBswFA="]=a.current})($__dart_deferred_initializers__);