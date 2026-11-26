((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
hWn(d){return d},
c5v(d){var x,w,v,u,t,s,r,q=null,p="created_by",o=A.R(d.h(0,"id")),n=A.R(d.h(0,"content")),m=A.R(d.h(0,"created_at"))
m=m!=null?A.dW(m).dh():q
x=A.R(d.h(0,"updated_at"))
x=x!=null?A.dW(x).dh():q
w=A.bs(d.h(0,"rating_score"))
if(w==null)w=q
v=A.c4(d.h(0,"liked"))
u=A.bs(d.h(0,"user_like_count"))
u=u==null?q:B.j.a0(u)
if(u==null)u=0
t=y.d.a(d.h(0,"images"))
if(t==null)t=q
else{t=J.az(t,new C.eiE(),y.w)
t=A.L(t,t.$ti.i("ab.E"))}s=d.h(0,p)==null?q:A.iy(y.y.a(d.h(0,p)))
r=d.h(0,"event")==null?q:A.b3W(y.y.a(d.h(0,"event")))
return new C.U0(o,n,m,x,w,v,u,t,s,r,d.h(0,"store")==null?q:A.Tx(y.y.a(d.h(0,"store"))))},
U0:function U0(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n},
cwP:function cwP(d,e,f){this.a=d
this.b=e
this.$ti=f},
eiE:function eiE(){},
cAe:function cAe(){}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[103],C)
D=c[164]
C.U0.prototype={
ghQ(){var x=this.w
if(x==null)return null
if(x instanceof A.br)return x
return new A.br(x,x,y.A)},
gct(){return new C.cwP(this,D.aM_,y.s)},
H(){var x,w,v,u,t,s=this,r=null,q=s.c
q=q==null?r:q.ca()
x=s.d
x=x==null?r:x.ca()
w=s.ghQ()
v=s.x
v=v==null?r:A.jw(v)
u=s.y
u=u==null?r:A.iQg(u)
t=s.z
t=t==null?r:A.hVR(t)
return A.u(["id",s.a,"content",s.b,"created_at",q,"updated_at",x,"rating_score",s.e,"liked",s.f,"user_like_count",s.r,"images",w,"created_by",v,"event",u,"store",t],y.w,y.b)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(u!==e){x=!1
if(J.aa(e)===A.y(u))if(e instanceof C.U0){w=e.a==u.a
if(w||w){w=e.b==u.b
if(w||w){w=e.c
v=u.c
if(w==v||J.t(w,v)){w=e.d
v=u.d
if(w==v||J.t(w,v)){w=e.e==u.e
if(w||w){w=e.f==u.f
if(w||w){w=e.r===u.r
if(w||w)if(B.L.aW(e.ghQ(),u.w)){w=e.x
v=u.x
if(w==v||J.t(w,v)){w=e.y
v=u.y
if(w==v||J.t(w,v)){x=e.z
w=u.z
x=x==w||J.t(x,w)}}}}}}}}}}}else x=!0
return x},
gn(d){var x=this
return A.Z(A.y(x),x.a,x.b,x.c,x.d,x.e,x.f,x.r,B.L.b_(x.w),x.x,x.y,x.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(d){var x=this
return"MapUserFeedback(id: "+A.d(x.a)+", content: "+A.d(x.b)+", createdAt: "+A.d(x.c)+", updatedAt: "+A.d(x.d)+", ratingScore: "+A.d(x.e)+", isLiked: "+A.d(x.f)+", userLikeCount: "+x.r+", images: "+A.d(x.ghQ())+", createdBy: "+A.d(x.x)+", event: "+A.d(x.y)+", store: "+A.d(x.z)+")"},
$iiE:1,
dIY(d){return this.gct().$1$store(d)},
dHU(d){return this.gct().$1$event(d)},
aBG(d,e){return this.gct().$2$isLiked$userLikeCount(d,e)},
gb9(){return this.a}}
C.cwP.prototype={
$4$event$isLiked$store$userLikeCount(d,e,f,g){var x=this.a,w=B.Y===e?x.f:A.c4(e),v=g==null?x.r:A.c8(g),u=B.Y===d?x.y:y.g.a(d),t=B.Y===f?x.z:y.c.a(f)
return this.b.$1(new C.U0(x.a,x.b,x.c,x.d,x.e,w,v,x.w,x.x,u,t))},
$0(){return this.$4$event$isLiked$store$userLikeCount(B.Y,B.Y,B.Y,null)},
$1$store(d){return this.$4$event$isLiked$store$userLikeCount(B.Y,B.Y,d,null)},
$1$event(d){return this.$4$event$isLiked$store$userLikeCount(d,B.Y,B.Y,null)},
$2$isLiked$userLikeCount(d,e){return this.$4$event$isLiked$store$userLikeCount(B.Y,d,B.Y,e)},
$1$isLiked(d){return this.$4$event$isLiked$store$userLikeCount(B.Y,d,B.Y,null)}}
C.cAe.prototype={}
var z=a.updateTypes(["T<r,@>()","0^(0^)<X?>"])
C.eiE.prototype={
$1(d){return A.b_(d)},
$S:1};(function installTearOffs(){var x=a.installStaticTearOff,w=a._instance_0u
x(C,"j7f",1,null,["$1$1","$1"],["hWn",function(d){return C.hWn(d,y.b)}],1,1)
w(C.U0.prototype,"ga7","H",0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.X,[C.cAe,C.cwP])
v(C.U0,C.cAe)
v(C.eiE,A.f0)
x(C.cAe,A.aT)})()
A.f8(b.typeUniverse,JSON.parse('{"U0":{"iE":[]}}'))
var y={A:A.a7("br<r>"),y:A.a7("T<r,@>"),w:A.a7("r"),s:A.a7("cwP<U0>"),b:A.a7("@"),d:A.a7("G<@>?"),g:A.a7("hH?"),c:A.a7("fe?")};(function constants(){D.aM_=new A.e2(C.j7f(),A.a7("e2<U0>"))})()};
(a=>{a["ewkEwBHhRZ9V5Z2uHVhnzHPY3wE="]=a.current})($__dart_deferred_initializers__);