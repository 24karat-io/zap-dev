((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={bPz:function bPz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},aqZ:function aqZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ijU(d,e,f){return new B.Vc(f,d,e)},
Vc:function Vc(d,e,f){this.d=d
this.e=e
this.a=f},
b4d:function b4d(){this.d=$
this.c=this.a=null},
em9:function em9(d,e){this.a=d
this.b=e},
em6:function em6(){},
em7:function em7(d){this.a=d},
em8:function em8(d){this.a=d}},E
J=c[1]
A=c[0]
C=c[2]
D=c[67]
B=a.updateHolder(c[4],B)
E=c[68]
B.bPz.prototype={}
B.aqZ.prototype={
j(d){var x=this
return"NewMapStoreEditRouteArgs{key: "+A.d(x.a)+", place: "+x.b.j(0)+", tokenId: "+A.d(x.c)+", communityId: "+A.d(x.d)+"}"},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(!(e instanceof B.aqZ))return!1
return x.b.k(0,e.b)&&x.c==e.c&&x.d==e.d},
gn(d){var x=this
return C.a9.gn(x.a)^x.b.gn(0)^J.as(x.c)^J.as(x.d)},
gbm(){return this.a}}
B.Vc.prototype={
G(){return new B.b4d()}}
B.b4d.prototype={
p(d){return new D.ad6(this.gd6P(),new B.em9(this,d),this.gclr(),null)},
Pc(d,e,f){return this.cls(d,e,f)},
cls(d,e,f){var x=0,w=A.o(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$Pc=A.k(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:m=e.a
l=e.d
k=l==null
j=k?null:l.a
i=k?null:l.b
x=m!=null&&j!=null&&i!=null?3:5
break
case 3:r=s.gu().A($.hEt(),y.m)
if(!f)A.cg(d)
u=7
l=A.jk(j,i)
k=s.a
o=k.d
x=10
return A.e(r.Ff(l,m,k.e,o),$async$Pc)
case 10:q=a0
x=11
return A.e(A.aU(),$async$Pc)
case 11:if(J.bC(q)){A.aH(null,!1,new B.em6(),d,!1,!0,y.b)
v=!1
x=1
break}else{v=!0
x=1
break}u=2
x=9
break
case 7:u=6
h=t.pop()
p=A.M(h)
x=12
return A.e(A.aU(),$async$Pc)
case 12:A.aH(null,!0,new B.em7(p),d,!1,!0,y.b)
v=!1
x=1
break
x=9
break
case 6:x=2
break
case 9:x=4
break
case 5:x=f?13:14
break
case 13:x=15
return A.e(A.aU(),$async$Pc)
case 15:case 14:A.aH(null,!0,new B.em8(d),d,!1,!0,y.b)
v=!1
x=1
break
case 4:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Pc,w)},
bsa(d){var x,w,v=this.c
v.toString
v=A.an(v)
x=this.a
w=x.d
x=x.e
v.ah(new B.bPz("NewMapStoreEditRoute",new B.aqZ(null,d,w,x),C.P,C.P,null,"",null),y.x)}}
var z=a.updateTypes(["aD<U>(w,mv,U)","~(mv)","Dn(w)"])
B.em9.prototype={
$0(){var x=0,w=A.o(y.v),v=this,u
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:x=2
return A.e(A.an(v.b).ah(D.hts(),y.F),$async$$0)
case 2:u=e
if(u!=null)v.a.bsa(u)
return A.m(null,w)}})
return A.n($async$$0,w)},
$S:6}
B.em6.prototype={
$1(d){return new E.Dn(null)},
$S:z+2}
B.em7.prototype={
$1(d){var x=null
return new A.ca(x,J.a3(this.a),x,x,x,x,x)},
$S:8}
B.em8.prototype={
$1(d){var x,w,v=null,u=this.a,t=y.q
A.f(u,C.b,t).toString
x=y.h
w=A.h("Invalid Address",v,"titleInvalidAddress",A.a([],x),v)
A.f(u,C.b,t).toString
return new A.ca(w,A.h("This address doesn\u2019t seem valid. Please choose a different location.",v,"messageInvalidAddress",A.a([],x),v),v,v,v,v,v)},
$S:8};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_1u
var v
x(v=B.b4d.prototype,"gclr",0,3,null,["$3"],["Pc"],0,0,0)
w(v,"gd6P","bsa",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bPz,A.bE)
x(B.aqZ,A.X)
x(B.Vc,A.iB)
x(B.b4d,A.iL)
x(B.em9,A.f1)
w(A.f0,[B.em6,B.em7,B.em8])})()
A.f8(b.typeUniverse,JSON.parse('{"bPz":{"bE":["aqZ"]},"Vc":{"E":[],"p":[]},"b4d":{"J":["Vc"]}}'))
var y={F:A.a7("mv"),h:A.a7("Q<X>"),m:A.a7("Zd"),q:A.a7("ho"),e:A.a7("U"),b:A.a7("@"),x:A.a7("X?"),v:A.a7("~")}};
(a=>{a["c6bruiJIhDOLNdt5mZZtGMcqQN0="]=a.current})($__dart_deferred_initializers__);