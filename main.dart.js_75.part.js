((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Bq:function Bq(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=!1
_.z=!0
_.Q=0},dnn:function dnn(d){this.a=d},dno:function dno(d,e){this.a=d
this.b=e},dnp:function dnp(){},hju:function hju(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[92],B)
D=c[103]
B.Bq.prototype={
a9p(){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a9p=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.w
if(!(!l.b&&(l.a.a.a.a&30)===0)){x=1
break}u=4
x=7
return A.e(l.bv(new B.dnn(s),y.P),$async$a9p)
case 7:r=e
if(!(!l.b&&(l.a.a.a.a&30)===0)){x=1
break}if(r!=null&&r.h(0,"mapV2Event")!=null){q=A.b3U(r.h(0,"mapV2Event"))
A.at(s.c,q,l)
n=s.b
if((n.a.a&30)===0)n.bD(q)}u=2
x=6
break
case 4:u=3
k=t.pop()
p=A.M(k)
o=A.aO(k)
if(!(!l.b&&(l.a.a.a.a&30)===0)){x=1
break}A.dn(p,o,"[GraphQL] "+("mapV2Event(id: "+s.x+")"))
A.fp(s.c,p,o,l)
l=s.b
if((l.a.a&30)===0)l.iz(p)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$a9p,w)},
ar(){var x=0,w=A.o(y.H),v,u=this,t
var $async$ar=A.j(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:t=u.w
if(!(!t.b&&(t.a.a.a.a&30)===0)){x=1
break}x=3
return A.e(A.cv(A.a([u.a9p(),u.QA(!0)],y.M),!1,y.H),$async$ar)
case 3:case 1:return A.m(v,w)}})
return A.n($async$ar,w)},
Am(){var x=0,w=A.o(y.H),v=this
var $async$Am=A.j(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:x=2
return A.e(v.r.aZ("  mutation MapV2CreateEventBookmark($eventId: String!) {\n    mapV2CreateEventBookmark(eventId: $eventId)\n  }\n",A.u(["eventId",v.x],y.N,y.z)),$async$Am)
case 2:return A.m(null,w)}})
return A.n($async$Am,w)},
Bm(){var x=0,w=A.o(y.H),v=this
var $async$Bm=A.j(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:x=2
return A.e(v.r.aZ("  mutation MapV2RemoveEventBookmark($eventId: String!) {\n    mapV2RemoveEventBookmark(eventId: $eventId)\n  }\n",A.u(["eventId",v.x],y.N,y.z)),$async$Bm)
case 2:return A.m(null,w)}})
return A.n($async$Bm,w)},
aI8(d){return this.e4u(d)},
e4u(d){var x=0,w=A.o(y.H),v=this,u
var $async$aI8=A.j(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=y.N
x=2
return A.e(v.r.aZ("  mutation MapV2ReportEvent($eventId: String!, $params: ReportMapInput!) {\n    mapV2ReportEvent(eventId: $eventId, params: $params)\n  }\n",A.u(["eventId",v.x,"params",A.u(["content",d],u,u)],u,y.z)),$async$aI8)
case 2:return A.m(null,w)}})
return A.n($async$aI8,w)},
aev(d,e){return this.dLi(d,e)},
dLi(d,e){var x=0,w=A.o(y.T),v,u=this,t,s,r,q,p,o,n,m,l
var $async$aev=A.j(function(f,g){if(f===1)return A.l(g,w)
for(;;)switch(x){case 0:o=new A.bq(Date.now(),0,!1)
n=A.dT("yyyyMMdd",null)
m=y.N
l=J.c3(0,m)
t=e.length,s="mapv2/events/"+u.x+"/",r=0
case 3:if(!(r<e.length)){x=5
break}x=6
return A.e(u.L9(e[r],s+n.bn(o)),$async$aev)
case 6:q=g
if(q!=null)l.push(q)
case 4:e.length===t||(0,A.ae)(e),++r
x=3
break
case 5:t=A.N(m,y.K)
t.m(0,"content",d)
if(l!=null&&l.length!==0)t.m(0,"images",l)
x=7
return A.e(u.r.aZ("  mutation MapV2CreateEventComment($eventId: String!, $params: CreateMapEventCommentInput!) {\n    mapV2CreateEventComment(eventId: $eventId, params: $params) {\n      id\n    }\n  }\n",A.u(["eventId",u.x,"params",t],m,y.z)),$async$aev)
case 7:p=g
if(p!=null&&p.h(0,"mapV2CreateEventComment")!=null){v=J.Y(p.h(0,"mapV2CreateEventComment"),"id")
x=1
break}v=null
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$aev,w)},
aiR(d,e,f){return this.e7C(d,e,f)},
e7C(d,e,f){var x=0,w=A.o(y.B),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$aiR=A.j(function(g,h){if(g===1)return A.l(h,w)
for(;;)switch(x){case 0:n=new A.bq(Date.now(),0,!1)
m=A.dT("yyyyMMdd",null)
l=y.N
k=J.c3(0,l)
t=f.length,s="mapv2/events/"+u.x+"/",r=0
case 3:if(!(r<f.length)){x=5
break}q=f[r]
x=q instanceof A.jN?6:8
break
case 6:x=9
return A.e(u.L9(q,s+m.bn(n)),$async$aiR)
case 9:p=h
if(p!=null)k.push(p)
x=7
break
case 8:if(typeof q=="string")k.push(q)
case 7:case 4:f.length===t||(0,A.ae)(f),++r
x=3
break
case 5:t=A.N(l,y.K)
t.m(0,"content",d)
if(k!=null&&k.length!==0)t.m(0,"images",k)
x=10
return A.e(u.r.aZ("  mutation MapV2UpdateEventComment(\n    $eventId: String!\n    $commentId: String!\n    $params: UpdateMapEventCommentInput!\n  ) {\n    mapV2UpdateEventComment(\n      eventId: $eventId\n      commentId: $commentId\n      params: $params\n    ) {\n      id\n      content\n      created_at\n      updated_at\n      rating_score\n      liked\n      user_like_count\n      images\n      created_by {\n        uid\n        wallet_address\n        mobile\n        nickname\n        email\n        profile_picture {\n          avatar_image\n          avatar_nft_item {\n            token {\n              id\n              symbol\n              img\n              name\n            }\n            title\n            thumbnail\n            type_id\n            url\n            serial_id\n            id\n            item_id\n            owner\n          }\n          cover_image\n        }\n      }\n    }\n  }\n",A.u(["eventId",u.x,"commentId",e,"params",t],l,y.z)),$async$aiR)
case 10:o=h
if(o!=null&&o.h(0,"mapV2UpdateEventComment")!=null){v=D.c5G(o.h(0,"mapV2UpdateEventComment"))
x=1
break}v=null
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$aiR,w)},
Jo(){var x=0,w=A.o(y.H),v,u=this
var $async$Jo=A.j(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:v=u.QA(!0)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$Jo,w)},
O8(d){var x,w,v,u,t=this,s=t.f,r=s.length
if(r===0)return
w=d.a
v=0
for(;;){if(!(v<r)){x=-1
break}u=s[v]
if(u!=null&&u.a==w){s[v]=d
x=v
break}++v}r=t.w
A.at(t.d,A.b9(s,!0,y.B),r)
if(x<10)A.at(t.e,C.c.bK(s,0,Math.min(s.length,10)),r)},
B8(){var x=0,w=A.o(y.H),v,u=this,t,s
var $async$B8=A.j(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:s=u.w
if(!(!s.b&&(s.a.a.a.a&30)===0)){x=1
break}x=u.z&&!u.y?3:4
break
case 3:++u.Q
t=u.f
t.push(null)
A.at(u.d,A.b9(t,!0,y.B),s)
x=5
return A.e(u.cUm(),$async$B8)
case 5:case 4:case 1:return A.m(v,w)}})
return A.n($async$B8,w)},
Di(d){return this.dVF(d)},
dVF(d){var x=0,w=A.o(y.H),v=this,u,t,s,r,q
var $async$Di=A.j(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:x=2
return A.e(v.r.aZ("  mutation MapV2LikeComment($commentId: String!) {\n    mapV2LikeComment(commentId: $commentId)\n  }\n",A.u(["commentId",d],y.N,y.z)),$async$Di)
case 2:t=v.f
s=t.length
r=0
for(;;){if(!(r<s)){u=-1
break}q=t[r]
if((q==null?null:q.a)===d){t[r]=q.aC3(!0,q.r+1)
u=r
break}++r}s=v.w
A.at(v.d,A.b9(t,!0,y.B),s)
if(u<10)A.at(v.e,C.c.bK(t,0,Math.min(10,t.length)),s)
return A.m(null,w)}})
return A.n($async$Di,w)},
DO(d){return this.e6X(d)},
e6X(d){var x=0,w=A.o(y.H),v=this,u,t,s,r,q
var $async$DO=A.j(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:x=2
return A.e(v.r.aZ("  mutation MapV2UnlikeComment($commentId: String!) {\n    mapV2UnlikeComment(commentId: $commentId)\n  }\n",A.u(["commentId",d],y.N,y.z)),$async$DO)
case 2:t=v.f
s=t.length
r=0
for(;;){if(!(r<s)){u=-1
break}q=t[r]
if((q==null?null:q.a)===d){t[r]=q.aC3(!1,Math.max(q.r-1,0))
u=r
break}++r}s=v.w
A.at(v.d,A.b9(t,!0,y.B),s)
if(u<10)A.at(v.e,C.c.bK(t,0,Math.min(10,t.length)),s)
return A.m(null,w)}})
return A.n($async$DO,w)},
afi(d,e,f,g,h,i,j,k,l,m,n){return this.dPr(d,e,f,g,h,i,j,k,l,m,n)},
dPr(d,e,f,g,h,i,j,a0,a1,a2,a3){var x=0,w=A.o(y.T),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$afi=A.j(function(a4,a5){if(a4===1)return A.l(a5,w)
for(;;)switch(x){case 0:n=new A.bq(Date.now(),0,!1)
m=A.dT("yyyyMMdd",null)
l=y.N
k=J.c3(0,l)
t=j.length,s="mapv2/events/"+a0+"/",r=0
case 3:if(!(r<j.length)){x=5
break}q=j[r]
x=q instanceof A.jN?6:8
break
case 6:x=9
return A.e(u.L9(q,s+m.bn(n)),$async$afi)
case 9:p=a5
if(p!=null)k.push(p)
x=7
break
case 8:if(typeof q=="string")k.push(q)
case 7:case 4:j.length===t||(0,A.ae)(j),++r
x=3
break
case 5:t=A.N(l,y.K)
t.m(0,"token_id",a3)
t.m(0,"location",A.u(["gmap_place_id",a0,"lat",g,"lng",h,"full_address",d,"name",a1],l,y.X))
t.m(0,"name",i)
t.m(0,"description",e)
if(k!=null&&k.length!==0)t.m(0,"images",k)
t.m(0,"date_of_event",A.u(["start_time",a2.cj(),"end_time",f.cj()],l,l))
x=10
return A.e(u.r.aZ("  mutation MapV2UpdateEvent($eventId: String!, $params: CreateMapEventInput!) {\n    mapV2UpdateEvent(eventId: $eventId, params: $params) {\n      id\n    }\n  }\n",A.u(["eventId",u.x,"params",t],l,y.z)),$async$afi)
case 10:o=a5
if(o!=null){l=o.h(0,"mapV2UpdateEvent")
l=(l==null?null:J.Y(l,"id"))!=null}else l=!1
if(l){l=o.h(0,"mapV2UpdateEvent")
v=l==null?null:J.Y(l,"id")
x=1
break}v=null
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$afi,w)},
QA(d){return this.cRG(d)},
cUm(){return this.QA(!1)},
cRG(d){var x=0,w=A.o(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$QA=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:k=s.w
if(!(!k.b&&(k.a.a.a.a&30)===0)||s.y){x=1
break}s.y=!0
if(d){s.Q=0
s.z=!0
C.c.a5(s.f)}u=4
x=7
return A.e(k.bv(new B.dno(s,d),y.P),$async$QA)
case 7:r=f
if(!(!k.b&&(k.a.a.a.a&30)===0)){x=1
break}if(r!=null&&r.h(0,"mapV2EventComments")!=null){n=J.az(y.j.a(r.h(0,"mapV2EventComments")),new B.dnp(),y.i)
m=A.L(n,n.$ti.i("ab.E"))
q=m
n=s.f
if(n.length!==0&&C.c.ga8(n)==null)n.pop()
if(J.aI(q)!==0)C.c.D(n,q)
if(J.aI(q)<10)s.z=!1
A.at(s.d,A.b9(n,!0,y.B),k)
if(s.Q===0)A.at(s.e,q,k)
if(s.Q===0&&s.z&&!k.b&&(k.a.a.a.a&30)===0){s.y=!1
s.B8()
x=1
break}}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.M(j)
o=A.aO(j)
if(!(!k.b&&(k.a.a.a.a&30)===0)){x=1
break}A.am().$1(J.a2(p))
A.fp(s.d,p,o,k)
x=6
break
case 3:x=2
break
case 6:s.y=!1
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$QA,w)},
l(){var x=this
x.w.l()
x.c.N()
x.d.N()
x.e.N()},
L9(d,e){return this.dAk(d,e)},
dAk(d,e){var x=0,w=A.o(y.T),v,u,t,s,r,q
var $async$L9=A.j(function(f,g){if(f===1)return A.l(g,w)
for(;;)switch(x){case 0:t=A.kC(d.b,$.k0().a).qa(1)[1]
x=3
return A.e(d.lC(),$async$L9)
case 3:s=g
r=$.bb
q=(r==null?$.bb=$.cT():r).cf("[DEFAULT]")
A.c0(q,$.d5(),!0)
x=4
return A.e(A.qf(new A.cP(q)).p7(e+"/"+C.d6.m9()+t).tP(s),$async$L9)
case 4:u=g
x=5
return A.e(A.p7(u.b,u.a.gu()).a.mX(),$async$L9)
case 5:v=g
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$L9,w)}}
var z=a.updateTypes(["~()","iC(@)","Bq(b2,r)"])
B.dnn.prototype={
$0(){var x=this.a
return A.c6(x.r,"  query MapV2Event($mapV2EventId: String!) {\n    mapV2Event(id: $mapV2EventId) {\n      id\n      name\n      description\n      distance\n      token_id\n      community_id\n      bookmarked\n      updated_at\n      created_at\n      images\n      date_of_event {\n        end_time\n        start_time\n      }\n      location {\n        name\n        full_address\n        gmap_place_id\n        lat\n        lng\n      }\n      stats {\n        map {\n          user {\n            average_rating_score\n            comments_count\n          }\n        }\n      }\n      created_by {\n        uid\n        wallet_address\n        mobile\n        nickname\n        email\n        profile_picture {\n          avatar_image\n          avatar_nft_item {\n            title\n            thumbnail\n            type_id\n            url\n            serial_id\n            id\n            item_id\n            owner\n          }\n        }\n      }\n    }\n  }\n",C.bk,x.w,A.u(["mapV2EventId",x.x],y.N,y.z))},
$S:7}
B.dno.prototype={
$0(){var x,w=this.a,v=y.N
v=A.u(["params",A.u(["eventId",w.x,"perPage",10,"page",w.Q],v,y.K)],v,y.z)
x=this.b?C.bk:null
return A.c6(w.r,"  query MapV2EventComments($params: FindMapEventCommentArgs!) {\n    mapV2EventComments(params: $params) {\n      id\n      content\n      created_at\n      updated_at\n      rating_score\n      liked\n      user_like_count\n      images\n      created_by {\n        uid\n        wallet_address\n        mobile\n        nickname\n        email\n        profile_picture {\n          avatar_image\n          avatar_nft_item {\n            title\n            thumbnail\n            type_id\n            url\n            serial_id\n            id\n            item_id\n            owner\n          }\n        }\n      }\n    }\n  }\n",x,w.w,v)},
$S:7}
B.dnp.prototype={
$1(d){return D.c5G(d)},
$S:z+1}
B.hju.prototype={
$2(d,e){var x,w,v=null,u=d.P($.bd(),y.U),t=$.ay,s=A.be(v,v,y.t),r=y.v,q=A.be(v,v,r)
r=A.be(v,v,r)
x=J.c3(0,y.B)
w=new B.Bq(new A.aA(new A.ai(t,y._),y.R),s,q,r,x,u,new A.dO(new A.dR(new A.aA(new A.ai(t,y.D),y.h))),e)
w.a9p()
w.QA(!0)
d.ck(w.gaT())
return w},
$S:z+2};(function installTearOffs(){var x=a._instance_0u
x(B.Bq.prototype,"gaT","l",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Bq,A.X)
w(A.f1,[B.dnn,B.dno])
x(B.dnp,A.f0)
x(B.hju,A.hb)})()
var y=(function rtii(){var x=A.a7
return{U:x("lD"),M:x("Q<aD<~>>"),j:x("G<@>"),v:x("G<iC?>"),t:x("hI"),i:x("iC"),P:x("T<r,@>"),K:x("X"),N:x("r"),R:x("aA<hI>"),h:x("aA<~>"),_:x("ai<hI>"),D:x("ai<~>"),z:x("@"),B:x("iC?"),X:x("X?"),T:x("r?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"jJ2","uq",()=>C.be.dT(new B.hju(),A.a7("Bq"),y.N))})()};
(a=>{a["bho2oKvCpesSX1c1MW7FAEvM1Vw="]=a.current})($__dart_deferred_initializers__);