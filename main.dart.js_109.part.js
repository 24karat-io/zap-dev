((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Qr:function Qr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=!1
_.w=!0
_.x=0},dyM:function dyM(d,e){this.a=d
this.b=e},dyN:function dyN(){},hjT:function hjT(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[50],B)
B.Qr.prototype={
aq(){var x=0,w=A.o(y.H),v,u=this
var $async$aq=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:v=u.Yp(!0)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$aq,w)},
bo(){var x=0,w=A.o(y.H),v,u=this,t
var $async$bo=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.b
if(!(!t.b&&(t.a.a.a.a&30)===0)||u.r||!u.w){x=1
break}++u.x
u.cXk()
case 1:return A.m(v,w)}})
return A.n($async$bo,w)},
aHx(d){return this.e2U(d)},
e2U(d){var x=0,w=A.o(y.H),v=this
var $async$aHx=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:x=2
return A.e(v.a.aZ("  mutation MapV2RemoveEvent($eventId: String!) {\n    mapV2RemoveEvent(eventId: $eventId) {\n      id\n    }\n  }\n",A.u(["eventId",d],y.N,y.z)),$async$aHx)
case 2:return A.m(null,w)}})
return A.n($async$aHx,w)},
Yp(d){return this.cyF(d)},
cXk(){return this.Yp(!1)},
cyF(d){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$Yp=A.k(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:l=s.b
if(!(!l.b&&(l.a.a.a.a&30)===0)||s.r){x=1
break}s.r=!0
if(d){s.x=0
s.w=!0
C.c.a5(s.f)}u=4
x=7
return A.e(l.bt(new B.dyM(s,d),y.P),$async$Yp)
case 7:r=f
if(!(!l.b&&(l.a.a.a.a&30)===0)){x=1
break}if(r!=null&&r.h(0,"mapV2MyEvents")!=null){o=J.az(y.j.a(r.h(0,"mapV2MyEvents")),new B.dyN(),y.t)
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
return A.n($async$Yp,w)},
l(){this.b.l()
this.e.N()}}
var z=a.updateTypes(["~()","Qr(b1,cM)"])
B.dyM.prototype={
$0(){var x,w,v=this.a,u=y.N,t=A.N(u,y.K),s="tokenId",r=v.c
if(r!=null)J.bZ(t,s,r)
x="communityId"
w=v.d
if(w!=null)J.bZ(t,x,w)
J.bZ(t,"perPage",10)
J.bZ(t,"page",v.x)
t=A.u(["params",t],u,y.z)
s=this.b?C.bl:null
return A.c5(v.a,"  query MapV2MyEvents($params: FindUserEventArgs!) {\n    mapV2MyEvents(params: $params) {\n      id\n      name\n      description\n      distance\n      token_id\n      community_id\n      bookmarked\n      updated_at\n      created_at\n      images\n      date_of_event {\n        end_time\n        start_time\n      }\n      location {\n        name\n        full_address\n        gmap_place_id\n        lat\n        lng\n      }\n      stats {\n        map {\n          user {\n            average_rating_score\n            comments_count\n          }\n        }\n      }\n    }\n  }\n",s,v.b,t)},
$S:7}
B.dyN.prototype={
$1(d){return A.b3W(d)},
$S:321}
B.hjT.prototype={
$2(d,e){var x=d.P($.bc(),y.U),w=$.ay,v=A.bd(null,null,y.f),u=J.c2(0,y.A),t=new B.Qr(x,new A.dL(new A.dN(new A.aA(new A.ah(w,y.D),y.h))),e.a,e.b,v,u)
t.Yp(!0)
d.cj(t.gaS())
return t},
$S:z+1};(function installTearOffs(){var x=a._instance_0u
x(B.Qr.prototype,"gaS","l",0)})();(function inheritance(){var x=a.inherit
x(B.Qr,A.X)
x(B.dyM,A.f1)
x(B.dyN,A.f0)
x(B.hjT,A.hd)})()
var y=(function rtii(){var x=A.a7
return{U:x("lF"),j:x("G<@>"),f:x("G<hH?>"),t:x("hH"),P:x("T<r,@>"),K:x("X"),N:x("r"),h:x("aA<~>"),D:x("ah<~>"),z:x("@"),A:x("hH?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"jKu","hpH",()=>C.ba.dR(new B.hjT(),A.a7("Qr"),A.a7("cM")))})()};
(a=>{a["KsHdeIwA9S9+AvlUYpBQeqGTDDM="]=a.current})($__dart_deferred_initializers__);