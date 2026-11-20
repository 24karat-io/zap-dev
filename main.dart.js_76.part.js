((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
hWq(d){return d},
c5G(d){var x,w,v,u,t,s,r,q=null,p="created_by",o=A.R(d.h(0,"id")),n=A.R(d.h(0,"content")),m=A.R(d.h(0,"created_at"))
m=m!=null?A.ea(m).dD():q
x=A.R(d.h(0,"updated_at"))
x=x!=null?A.ea(x).dD():q
w=A.bv(d.h(0,"rating_score"))
if(w==null)w=q
v=A.c7(d.h(0,"liked"))
u=A.bv(d.h(0,"user_like_count"))
u=u==null?q:B.j.a0(u)
if(u==null)u=0
t=y.d.a(d.h(0,"images"))
if(t==null)t=q
else{t=J.az(t,new C.eiQ(),y.w)
t=A.L(t,t.$ti.i("ab.E"))}s=d.h(0,p)==null?q:A.iy(y.y.a(d.h(0,p)))
r=d.h(0,"event")==null?q:A.b3U(y.y.a(d.h(0,"event")))
return new C.U_(o,n,m,x,w,v,u,t,s,r,d.h(0,"store")==null?q:A.Tw(y.y.a(d.h(0,"store"))))},
U_:function U_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cwQ:function cwQ(d,e,f){this.a=d
this.b=e
this.$ti=f},
eiQ:function eiQ(){},
cAh:function cAh(){}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[103],C)
D=c[164]
C.U_.prototype={
ghR(){var x=this.w
if(x==null)return null
if(x instanceof A.br)return x
return new A.br(x,x,y.A)},
gct(){return new C.cwQ(this,D.aLP,y.s)},
H(){var x,w,v,u,t,s=this,r=null,q=s.c
q=q==null?r:q.cj()
x=s.d
x=x==null?r:x.cj()
w=s.ghR()
v=s.x
v=v==null?r:A.jy(v)
u=s.y
u=u==null?r:A.iPV(u)
t=s.z
t=t==null?r:A.hVU(t)
return A.u(["id",s.a,"content",s.b,"created_at",q,"updated_at",x,"rating_score",s.e,"liked",s.f,"user_like_count",s.r,"images",w,"created_by",v,"event",u,"store",t],y.w,y.b)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(u!==e){x=!1
if(J.aa(e)===A.x(u))if(e instanceof C.U_){w=e.a==u.a
if(w||w){w=e.b==u.b
if(w||w){w=e.c
v=u.c
if(w==v||J.t(w,v)){w=e.d
v=u.d
if(w==v||J.t(w,v)){w=e.e==u.e
if(w||w){w=e.f==u.f
if(w||w){w=e.r===u.r
if(w||w)if(B.M.aW(e.ghR(),u.w)){w=e.x
v=u.x
if(w==v||J.t(w,v)){w=e.y
v=u.y
if(w==v||J.t(w,v)){x=e.z
w=u.z
x=x==w||J.t(x,w)}}}}}}}}}}}else x=!0
return x},
gn(d){var x=this
return A.Z(A.x(x),x.a,x.b,x.c,x.d,x.e,x.f,x.r,B.M.b0(x.w),x.x,x.y,x.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(d){var x=this
return"MapUserFeedback(id: "+A.d(x.a)+", content: "+A.d(x.b)+", createdAt: "+A.d(x.c)+", updatedAt: "+A.d(x.d)+", ratingScore: "+A.d(x.e)+", isLiked: "+A.d(x.f)+", userLikeCount: "+x.r+", images: "+A.d(x.ghR())+", createdBy: "+A.d(x.x)+", event: "+A.d(x.y)+", store: "+A.d(x.z)+")"},
$iiC:1,
dJN(d){return this.gct().$1$store(d)},
dIN(d){return this.gct().$1$event(d)},
aC3(d,e){return this.gct().$2$isLiked$userLikeCount(d,e)},
gb9(){return this.a}}
C.cwQ.prototype={
$4$event$isLiked$store$userLikeCount(d,e,f,g){var x=this.a,w=B.V===e?x.f:A.c7(e),v=g==null?x.r:A.bY(g),u=B.V===d?x.y:y.g.a(d),t=B.V===f?x.z:y.c.a(f)
return this.b.$1(new C.U_(x.a,x.b,x.c,x.d,x.e,w,v,x.w,x.x,u,t))},
$0(){return this.$4$event$isLiked$store$userLikeCount(B.V,B.V,B.V,null)},
$1$store(d){return this.$4$event$isLiked$store$userLikeCount(B.V,B.V,d,null)},
$1$event(d){return this.$4$event$isLiked$store$userLikeCount(d,B.V,B.V,null)},
$2$isLiked$userLikeCount(d,e){return this.$4$event$isLiked$store$userLikeCount(B.V,d,B.V,e)},
$1$isLiked(d){return this.$4$event$isLiked$store$userLikeCount(B.V,d,B.V,null)}}
C.cAh.prototype={}
var z=a.updateTypes(["T<r,@>()","0^(0^)<X?>"])
C.eiQ.prototype={
$1(d){return A.b_(d)},
$S:1};(function installTearOffs(){var x=a.installStaticTearOff,w=a._instance_0u
x(C,"j6O",1,null,["$1$1","$1"],["hWq",function(d){return C.hWq(d,y.b)}],1,1)
w(C.U_.prototype,"ga7","H",0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.X,[C.cAh,C.cwQ])
v(C.U_,C.cAh)
v(C.eiQ,A.f0)
x(C.cAh,A.aV)})()
A.f9(b.typeUniverse,JSON.parse('{"U_":{"iC":[]}}'))
var y={A:A.a7("br<r>"),y:A.a7("T<r,@>"),w:A.a7("r"),s:A.a7("cwQ<U_>"),b:A.a7("@"),d:A.a7("G<@>?"),g:A.a7("hI?"),c:A.a7("ff?")};(function constants(){D.aLP=new A.dW(C.j6O(),A.a7("dW<U_>"))})()};
(a=>{a["iasRUYxP+MSR6QssCOYQFbLvhdE="]=a.current})($__dart_deferred_initializers__);