((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Qv:function Qv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=!1
_.w=!0
_.x=0},dyR:function dyR(d,e){this.a=d
this.b=e},dyS:function dyS(){},hka:function hka(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[50],B)
B.Qv.prototype={
ar(){var x=0,w=A.o(y.H),v,u=this
var $async$ar=A.j(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:v=u.Yt(!0)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$ar,w)},
bo(){var x=0,w=A.o(y.H),v,u=this,t
var $async$bo=A.j(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.b
if(!(!t.b&&(t.a.a.a.a&30)===0)||u.r||!u.w){x=1
break}++u.x
u.cY5()
case 1:return A.m(v,w)}})
return A.n($async$bo,w)},
aHX(d){return this.e3V(d)},
e3V(d){var x=0,w=A.o(y.H),v=this
var $async$aHX=A.j(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:x=2
return A.e(v.a.aZ("  mutation MapV2RemoveEvent($eventId: String!) {\n    mapV2RemoveEvent(eventId: $eventId) {\n      id\n    }\n  }\n",A.u(["eventId",d],y.N,y.z)),$async$aHX)
case 2:return A.m(null,w)}})
return A.n($async$aHX,w)},
Yt(d){return this.czm(d)},
cY5(){return this.Yt(!1)},
czm(d){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Yt=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:l=s.b
if(!(!l.b&&(l.a.a.a.a&30)===0)||s.r){x=1
break}s.r=!0
if(d){s.x=0
s.w=!0
C.c.a5(s.f)}u=4
x=7
return A.e(l.bv(new B.dyR(s,d),y.P),$async$Yt)
case 7:r=f
if(!(!l.b&&(l.a.a.a.a&30)===0)){x=1
break}if(r!=null&&r.h(0,"mapV2MyEvents")!=null){o=J.az(y.j.a(r.h(0,"mapV2MyEvents")),new B.dyS(),y.t)
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
break}A.am().$1(J.a2(p))
x=6
break
case 3:x=2
break
case 6:s.r=!1
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Yt,w)},
l(){this.b.l()
this.e.N()}}
var z=a.updateTypes(["~()","Qv(b2,cM)"])
B.dyR.prototype={
$0(){var x,w,v=this.a,u=y.N,t=A.N(u,y.K),s="tokenId",r=v.c
if(r!=null)J.bU(t,s,r)
x="communityId"
w=v.d
if(w!=null)J.bU(t,x,w)
J.bU(t,"perPage",10)
J.bU(t,"page",v.x)
t=A.u(["params",t],u,y.z)
s=this.b?C.bk:null
return A.c6(v.a,"  query MapV2MyEvents($params: FindUserEventArgs!) {\n    mapV2MyEvents(params: $params) {\n      id\n      name\n      description\n      distance\n      token_id\n      community_id\n      bookmarked\n      updated_at\n      created_at\n      images\n      date_of_event {\n        end_time\n        start_time\n      }\n      location {\n        name\n        full_address\n        gmap_place_id\n        lat\n        lng\n      }\n      stats {\n        map {\n          user {\n            average_rating_score\n            comments_count\n          }\n        }\n      }\n    }\n  }\n",s,v.b,t)},
$S:7}
B.dyS.prototype={
$1(d){return A.b3U(d)},
$S:302}
B.hka.prototype={
$2(d,e){var x=d.P($.bd(),y.U),w=$.ay,v=A.be(null,null,y.f),u=J.c3(0,y.A),t=new B.Qv(x,new A.dO(new A.dR(new A.aA(new A.ai(w,y.D),y.h))),e.a,e.b,v,u)
t.Yt(!0)
d.ck(t.gaT())
return t},
$S:z+1};(function installTearOffs(){var x=a._instance_0u
x(B.Qv.prototype,"gaT","l",0)})();(function inheritance(){var x=a.inherit
x(B.Qv,A.X)
x(B.dyR,A.f1)
x(B.dyS,A.f0)
x(B.hka,A.hb)})()
var y=(function rtii(){var x=A.a7
return{U:x("lD"),j:x("G<@>"),f:x("G<hI?>"),t:x("hI"),P:x("T<r,@>"),K:x("X"),N:x("r"),h:x("aA<~>"),D:x("ai<~>"),z:x("@"),A:x("hI?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"jJx","hq0",()=>C.be.dT(new B.hka(),A.a7("Qv"),A.a7("cM")))})()};
(a=>{a["1AOB9nq6iOkboacoSYbNdzoM2FM="]=a.current})($__dart_deferred_initializers__);