((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={bPK:function bPK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},aqW:function aqW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ijR(d,e,f){return new B.Vd(f,d,e)},
Vd:function Vd(d,e,f){this.d=d
this.e=e
this.a=f},
b4a:function b4a(){this.d=$
this.c=this.a=null},
emj:function emj(d,e){this.a=d
this.b=e},
emg:function emg(){},
emh:function emh(d){this.a=d},
emi:function emi(d){this.a=d}},E
J=c[1]
A=c[0]
C=c[2]
D=c[67]
B=a.updateHolder(c[4],B)
E=c[68]
B.bPK.prototype={}
B.aqW.prototype={
j(d){var x=this
return"NewMapStoreEditRouteArgs{key: "+A.d(x.a)+", place: "+x.b.j(0)+", tokenId: "+A.d(x.c)+", communityId: "+A.d(x.d)+"}"},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(!(e instanceof B.aqW))return!1
return x.b.k(0,e.b)&&x.c==e.c&&x.d==e.d},
gn(d){var x=this
return C.aa.gn(x.a)^x.b.gn(0)^J.as(x.c)^J.as(x.d)},
gbl(){return this.a}}
B.Vd.prototype={
F(){return new B.b4a()}}
B.b4a.prototype={
p(d){return new D.ad5(this.gd7D(),new B.emj(this,d),this.gcm7(),null)},
Pf(d,e,f){return this.cm8(d,e,f)},
cm8(d,e,f){var x=0,w=A.o(y.e),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$Pf=A.j(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:m=e.a
l=e.d
k=l==null
j=k?null:l.a
i=k?null:l.b
x=m!=null&&j!=null&&i!=null?3:5
break
case 3:r=s.gu().A($.hEy(),y.m)
if(!f)A.ch(d)
u=7
l=A.ji(j,i)
k=s.a
o=k.d
x=10
return A.e(r.Fl(l,m,k.e,o),$async$Pf)
case 10:q=a0
x=11
return A.e(A.aU(),$async$Pf)
case 11:if(J.bC(q)){A.aH(null,!1,new B.emg(),d,!1,!0,y.b)
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
return A.e(A.aU(),$async$Pf)
case 12:A.aH(null,!0,new B.emh(p),d,!1,!0,y.b)
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
return A.e(A.aU(),$async$Pf)
case 15:case 14:A.aH(null,!0,new B.emi(d),d,!1,!0,y.b)
v=!1
x=1
break
case 4:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$Pf,w)},
bsA(d){var x,w,v=this.c
v.toString
v=A.ao(v)
x=this.a
w=x.d
x=x.e
v.ah(new B.bPK("NewMapStoreEditRoute",new B.aqW(null,d,w,x),C.P,C.P,null,"",null),y.x)}}
var z=a.updateTypes(["aD<U>(w,mv,U)","~(mv)","Dl(w)"])
B.emj.prototype={
$0(){var x=0,w=A.o(y.v),v=this,u
var $async$$0=A.j(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:x=2
return A.e(A.ao(v.b).ah(D.htG(),y.F),$async$$0)
case 2:u=e
if(u!=null)v.a.bsA(u)
return A.m(null,w)}})
return A.n($async$$0,w)},
$S:6}
B.emg.prototype={
$1(d){return new E.Dl(null)},
$S:z+2}
B.emh.prototype={
$1(d){var x=null
return new A.cb(x,J.a2(this.a),x,x,x,x,x)},
$S:8}
B.emi.prototype={
$1(d){var x,w,v=null,u=this.a,t=y.q
A.f(u,C.b,t).toString
x=y.h
w=A.h("Invalid Address",v,"titleInvalidAddress",A.a([],x),v)
A.f(u,C.b,t).toString
return new A.cb(w,A.h("This address doesn\u2019t seem valid. Please choose a different location.",v,"messageInvalidAddress",A.a([],x),v),v,v,v,v,v)},
$S:8};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_1u
var v
x(v=B.b4a.prototype,"gcm7",0,3,null,["$3"],["Pf"],0,0,0)
w(v,"gd7D","bsA",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bPK,A.bE)
x(B.aqW,A.X)
x(B.Vd,A.iA)
x(B.b4a,A.iI)
x(B.emj,A.f1)
w(A.f0,[B.emg,B.emh,B.emi])})()
A.f9(b.typeUniverse,JSON.parse('{"bPK":{"bE":["aqW"]},"Vd":{"E":[],"p":[]},"b4a":{"J":["Vd"]}}'))
var y={F:A.a7("mv"),h:A.a7("Q<X>"),m:A.a7("Zb"),q:A.a7("hp"),e:A.a7("U"),b:A.a7("@"),x:A.a7("X?"),v:A.a7("~")}};
(a=>{a["iOpfG4o4c9OFsu3l5iWcBHay8Jk="]=a.current})($__dart_deferred_initializers__);