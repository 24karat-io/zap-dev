((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={L8:function L8(d,e,f){var _=this
_.a=d
_.b=e
_.c=null
_.dy$=0
_.fr$=f
_.fy$=_.fx$=0},hmM:function hmM(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[76],B)
D=c[86]
B.L8.prototype={
z6(d,e){return this.dQ4(d,e)},
hZ(){return this.z6(!1,!1)},
dQ4(d,e){var x=0,w=A.o(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$z6=A.k(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
m=A.u(["showroomId",s.b],y.g,y.b)
l=e?C.bl:null
x=7
return A.e(s.a.eF("  query Showroom($showroomId: ID!) {\n    showroom(id: $showroomId) {\n      collaborators {\n        email\n        id\n        mobile\n        nickname\n        profile_img\n        uid\n        wallet_address\n        profile_picture {\n          avatar_image\n          avatar_nft_item {\n            id\n            url\n            type_id\n            thumbnail\n            title\n            item_id\n            owner\n            serial_id\n          }\n        }\n      }\n      cover_img\n      description\n      id\n      items {\n        artist {\n          email\n          id\n          mobile\n          nickname\n          profile_img\n          uid\n          wallet_address\n          verified\n        }\n        brand {\n          id\n          img\n          name\n        }\n        created_at\n        desc\n        desc_pdf {\n          name\n          size\n          url\n        }\n        fee\n        id\n        item_id\n        link\n        owner\n        supply\n        thumbnail\n        title\n        transaction_id\n        transferrable\n        type_id\n        unlockable\n        url\n      }\n      likes {\n        uid\n        wallet_address\n      }\n      owner\n      public\n      title\n    }\n  }\n",l,m),$async$z6)
case 7:r=g
if(r!=null){q=r.h(0,"showroom")
if(q!=null){p=D.hVO(q)
s.c=p
if(d)s.aD()
v=p
x=1
break}}u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.M(j)
n=A.aO(j)
A.dk(o,n,"[GraphQL] "+("showroom(id: "+s.b+")"))
m=J.a3(o)
throw A.B(m)
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$z6,w)}}
var z=a.updateTypes(["L8(b1,r)"])
B.hmM.prototype={
$2(d,e){return new B.L8(d.P($.bc(),y.k),e,$.ap())},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.L8,A.cJ)
x(B.hmM,A.hd)})()
A.f8(b.typeUniverse,JSON.parse('{"L8":{"cJ":[],"ba":[]}}'))
var y={k:A.a7("lF"),g:A.a7("r"),b:A.a7("@"),f:A.a7("Hb?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"jLC","It",()=>C.Z9.dR(new B.hmM(),A.a7("L8"),y.g))})()};
(a=>{a["/riqXNGicvUXsJ/1S9hhtyDKyrs="]=a.current})($__dart_deferred_initializers__);