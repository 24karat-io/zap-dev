((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Qx:function Qx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=!1
_.w=!0
_.x=0},dzC:function dzC(d,e){this.a=d
this.b=e},dzD:function dzD(){},hk4:function hk4(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[52],B)
B.Qx.prototype={
aq(){var x=0,w=A.o(y.H),v,u=this,t
var $async$aq=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.b
if(!(!t.b&&(t.a.a.a.a&30)===0)){x=1
break}v=u.Xd(!0)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$aq,w)},
bo(){var x=0,w=A.o(y.H),v,u=this,t
var $async$bo=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.b
if(!(!t.b&&(t.a.a.a.a&30)===0)){x=1
break}if(!u.r&&u.w){++u.x
u.cyE()}case 1:return A.m(v,w)}})
return A.n($async$bo,w)},
aHD(d){return this.e33(d)},
e33(d){var x=0,w=A.o(y.H),v=this
var $async$aHD=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:x=2
return A.e(v.a.aZ("  mutation MapV2RemoveStore($storeId: String!) {\n    mapV2RemoveStore(storeId: $storeId) {\n      id\n    }\n  }\n",A.u(["storeId",d],y.N,y.z)),$async$aHD)
case 2:return A.m(null,w)}})
return A.n($async$aHD,w)},
Xd(d){return this.cyG(d)},
cyE(){return this.Xd(!1)},
cyG(d){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Xd=A.k(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:l=s.b
if(!(!l.b&&(l.a.a.a.a&30)===0)||s.r){x=1
break}s.r=!0
if(d){s.x=0
s.w=!0
C.c.a5(s.f)}u=4
x=7
return A.e(l.bt(new B.dzC(s,d),y.P),$async$Xd)
case 7:r=f
if(!(!l.b&&(l.a.a.a.a&30)===0)){x=1
break}if(r!=null&&r.h(0,"mapV2MyStores")!=null){o=J.az(y.j.a(r.h(0,"mapV2MyStores")),new B.dzD(),y.k)
n=A.L(o,o.$ti.i("ab.E"))
q=n
o=s.f
if(o.length!==0&&C.c.ga8(o)==null)o.pop()
if(J.aI(q)!==0)C.c.D(o,q)
if(J.aI(q)<10)s.w=!1
A.at(s.e,o,l)}u=2
x=6
break
case 4:u=3
k=t.pop()
p=A.M(k)
if(!(!l.b&&(l.a.a.a.a&30)===0)){x=1
break}A.ao().$1(J.a3(p))
x=6
break
case 3:x=2
break
case 6:s.r=!1
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Xd,w)},
l(){this.b.l()
this.e.N()}}
var z=a.updateTypes(["~()","Qx(b1,cM)"])
B.dzC.prototype={
$0(){var x=this.a,w=y.N,v=A.N(w,y.K),u=x.c
if(u!=null)J.bZ(v,"tokenId",u)
u=x.d
if(u!=null)J.bZ(v,"communityId",u)
J.bZ(v,"perPage",10)
J.bZ(v,"page",x.x)
v=A.u(["params",v],w,y.z)
w=this.b?C.bl:null
return A.c5(x.a,"  query MapV2MyStores($params: FindUserStoreArgs!) {\n    mapV2MyStores(params: $params) {\n      id\n      name\n      description\n      distance\n      token_id\n      community_id\n      images\n      created_at\n      updated_at\n      bookmarked\n      is_new\n      location {\n        name\n        full_address\n        gmap_place_id\n        lat\n        lng\n      }\n      business_hours {\n        closing_time\n        open_days\n        opening_time\n      }\n      stats {\n        map {\n          user {\n            average_rating_score\n            comments_count\n          }\n        }\n      }\n      categories {\n        code\n        title\n        children {\n          code\n          title\n        }\n      }\n    }\n  }\n",w,x.b,v)},
$S:7}
B.dzD.prototype={
$1(d){return A.Tx(d)},
$S:191}
B.hk4.prototype={
$2(d,e){var x=d.P($.bc(),y.U),w=$.ay,v=A.bd(null,null,y.e),u=J.c2(0,y.u),t=new B.Qx(x,new A.dL(new A.dN(new A.aA(new A.ah(w,y.D),y.h))),e.a,e.b,v,u)
t.Xd(!0)
d.cj(t.gaS())
return t},
$S:z+1};(function installTearOffs(){var x=a._instance_0u
x(B.Qx.prototype,"gaS","l",0)})();(function inheritance(){var x=a.inherit
x(B.Qx,A.X)
x(B.dzC,A.f1)
x(B.dzD,A.f0)
x(B.hk4,A.hd)})()
var y=(function rtii(){var x=A.a7
return{U:x("lF"),j:x("G<@>"),e:x("G<fe?>"),P:x("T<r,@>"),K:x("X"),k:x("fe"),N:x("r"),h:x("aA<~>"),D:x("ah<~>"),z:x("@"),u:x("fe?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"jKG","hpK",()=>C.ba.dR(new B.hk4(),A.a7("Qx"),A.a7("cM")))})()};
(a=>{a["XBrl5IN3f96lGlkuMXhh80Key2Q="]=a.current})($__dart_deferred_initializers__);