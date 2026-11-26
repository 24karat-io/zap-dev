((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={xF:function xF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},dob:function dob(d,e,f){this.a=d
this.b=e
this.c=f},do8:function do8(d,e){this.a=d
this.b=e},do9:function do9(d,e){this.a=d
this.b=e},doa:function doa(d,e){this.a=d
this.b=e},a1w:function a1w(d,e){this.a=d
this.b=e},cA9:function cA9(){},hjf:function hjf(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[96],B)
B.xF.prototype={
asN(d,e){return this.czc(d,e)},
czc(d,e){var x=0,w=A.o(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$asN=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:k=s.d
if(!(!k.b&&(k.a.a.a.a&30)===0)){x=1
break}u=4
o=y.y
x=7
return A.e(k.bt(new B.dob(s,d,e),o),$async$asN)
case 7:r=g
if(!(!k.b&&(k.a.a.a.a&30)===0)){x=1
break}n=r
if(n==null)n=null
else{n=J.Y(n,"userPermission")
n=n==null?null:J.Y(n,"map")}if(n!=null){n=r
n.toString
n=J.Y(J.Y(n,"userPermission"),"map")
m=n.h(0,"event")==null?null:A.eiA(o.a(n.h(0,"event")))
q=new B.a1w(m,n.h(0,"store")==null?null:A.eiA(o.a(n.h(0,"store"))))
A.at(s.a,q,k)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.M(j)
if(!(!k.b&&(k.a.a.a.a&30)===0)){x=1
break}A.ao().$1(J.a3(p))
A.at(s.a,new B.a1w(null,null),k)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$asN,w)},
Xe(d,e){return this.cyJ(d,e)},
cyJ(a1,a2){var x=0,w=A.o(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Xe=A.k(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:e={}
d=s.d
if(!(!d.b&&(d.a.a.a.a&30)===0)){x=1
break}e.a=null
u=4
j=null
x=a1!=null?7:9
break
case 7:x=10
return A.e(d.bt(new B.do8(s,a1),y.y),$async$Xe)
case 10:r=a4
if(!(!d.b&&(d.a.a.a.a&30)===0)){x=1
break}i=r
h=null
if(i==null)i=h
else{i=J.Y(i,"community")
if(i==null)i=h
else{i=J.Y(i,"brand")
i=i==null?null:J.Y(i,"id")}}if(i!=null){j=r
j.toString
g=J.Y(J.Y(J.Y(j,"community"),"brand"),"id")
e.a=g
j=g}x=8
break
case 9:x=a2!=null?11:12
break
case 11:x=13
return A.e(d.bt(new B.do9(s,a2),y.y),$async$Xe)
case 13:q=a4
if(!(!d.b&&(d.a.a.a.a&30)===0)){x=1
break}i=q
h=null
if(i==null)i=h
else{i=J.Y(i,"token")
if(i==null)i=h
else{i=J.Y(i,"brand")
i=i==null?null:J.Y(i,"id")}}if(i!=null){j=q
j.toString
g=J.Y(J.Y(J.Y(j,"token"),"brand"),"id")
e.a=g
j=g}case 12:case 8:if(j==null){A.at(s.b,!1,d)
x=1
break}j=y.y
x=14
return A.e(d.bt(new B.doa(e,s),j),$async$Xe)
case 14:p=a4
if(!(!d.b&&(d.a.a.a.a&30)===0)){x=1
break}if(p!=null&&p.h(0,"brand")!=null){o=p.h(0,"brand")
n=j.a(J.Y(o,"roles"))
m=J.t(J.Y(n,"admin"),!0)
if(m)A.at(s.b,!0,d)}u=2
x=6
break
case 4:u=3
a0=t.pop()
l=A.M(a0)
k=A.aO(a0)
if(!(!d.b&&(d.a.a.a.a&30)===0)){x=1
break}A.dk(l,k,"[GraphQL] "+("brand(id: "+A.d(e.a)))
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Xe,w)},
l(){this.d.l()
this.a.N()
this.b.N()}}
B.a1w.prototype={
H(){var x,w=this.a
w=w==null?null:A.b3X(w)
x=this.b
return A.u(["event",w,"store",x==null?null:A.b3X(x)],y.w,y.b)},
k(d,e){var x,w,v,u=this
if(e==null)return!1
if(u!==e){x=!1
if(J.aa(e)===A.y(u))if(e instanceof B.a1w){w=e.a
v=u.a
if(w==v||J.t(w,v)){x=e.b
w=u.b
x=x==w||J.t(x,w)}}}else x=!0
return x},
gn(d){return A.Z(A.y(this),this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"MapPermissionConfig(event: "+A.d(this.a)+", store: "+A.d(this.b)+")"},
$ilU:1}
B.cA9.prototype={}
var z=a.updateTypes(["~()","T<r,@>()","xF(b1,cM)"])
B.dob.prototype={
$0(){var x=this.a
return A.c5(x.c,"  query UserPermission($communityId: String, $tokenId: String) {\n    userPermission(community_id: $communityId, token_id: $tokenId) {\n      map {\n        event {\n          comment\n          create\n          view\n          vote\n        }\n        store {\n          comment\n          create\n          view\n          vote\n        }\n      }\n    }\n  }\n",C.aq,x.d,A.u(["communityId",this.b,"tokenId",this.c],y.w,y.b))},
$S:7}
B.do8.prototype={
$0(){var x=this.a
return A.c5(x.c,"  query Community($communityId: String!) {\n    community(id: $communityId) {\n      brand {\n        id\n        img\n        name\n      }\n    }\n  }\n",null,x.d,A.u(["communityId",this.b],y.w,y.b))},
$S:7}
B.do9.prototype={
$0(){var x=this.a
return A.c5(x.c,"  query Token($tokenId: ID) {\n    token(id: $tokenId) {\n      brand {\n        id\n        img\n        name\n      }\n    }\n  }\n",null,x.d,A.u(["tokenId",this.b],y.w,y.b))},
$S:7}
B.doa.prototype={
$0(){var x=this.b
return A.c5(x.c,"  query Brand($brandId: String!) {\n    brand(id: $brandId) {\n      roles {\n        admin\n        creator\n        tester\n      }\n    }\n  }\n",C.aq,x.d,A.u(["brandId",this.a.a],y.w,y.b))},
$S:7}
B.hjf.prototype={
$2(d,e){var x=d.P($.bc(),y.A),w=$.ay,v=e.b,u=e.a,t=new B.xF(A.bd(null,null,y.C),A.bW(!1,!1,y.e),x,new A.dL(new A.dN(new A.aA(new A.ah(w,y.E),y.D))))
t.asN(v,u)
t.Xe(v,u)
d.cj(t.gaS())
return t},
$S:z+2};(function installTearOffs(){var x=a._instance_0u
x(B.xF.prototype,"gaS","l",0)
x(B.a1w.prototype,"ga7","H",1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.X,[B.xF,B.cA9])
w(A.f1,[B.dob,B.do8,B.do9,B.doa])
v(B.a1w,B.cA9)
v(B.hjf,A.hd)
x(B.cA9,A.aT)})()
A.f8(b.typeUniverse,JSON.parse('{"a1w":{"lU":[]}}'))
var y={A:A.a7("lF"),C:A.a7("lU"),y:A.a7("T<r,@>"),w:A.a7("r"),D:A.a7("aA<~>"),E:A.a7("ah<~>"),e:A.a7("U"),b:A.a7("@"),v:A.a7("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"jK2","yO",()=>C.ba.dR(new B.hjf(),A.a7("xF"),A.a7("cM")))})()};
(a=>{a["WR4Zyqy7QWYSIcX1PN54TAFP34w="]=a.current})($__dart_deferred_initializers__);