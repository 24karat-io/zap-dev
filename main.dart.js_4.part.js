((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Le:function Le(d,e,f){var _=this
_.a=d
_.b=e
_.c=null
_.dy$=0
_.fr$=f
_.fy$=_.fx$=0},hn3:function hn3(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[76],B)
D=c[86]
B.Le.prototype={
zd(d,e){return this.dQQ(d,e)},
hZ(){return this.zd(!1,!1)},
dQQ(d,e){var x=0,w=A.o(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$zd=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
m=A.u(["showroomId",s.b],y.g,y.b)
l=e?C.bk:null
x=7
return A.e(s.a.eF("  query Showroom($showroomId: ID!) {\n    showroom(id: $showroomId) {\n      collaborators {\n        email\n        id\n        mobile\n        nickname\n        profile_img\n        uid\n        wallet_address\n        profile_picture {\n          avatar_image\n          avatar_nft_item {\n            id\n            url\n            type_id\n            thumbnail\n            title\n            item_id\n            owner\n            serial_id\n          }\n        }\n      }\n      cover_img\n      description\n      id\n      items {\n        artist {\n          email\n          id\n          mobile\n          nickname\n          profile_img\n          uid\n          wallet_address\n          verified\n        }\n        brand {\n          id\n          img\n          name\n        }\n        created_at\n        desc\n        desc_pdf {\n          name\n          size\n          url\n        }\n        fee\n        id\n        item_id\n        link\n        owner\n        supply\n        thumbnail\n        title\n        transaction_id\n        transferrable\n        type_id\n        unlockable\n        url\n      }\n      likes {\n        uid\n        wallet_address\n      }\n      owner\n      public\n      title\n    }\n  }\n",l,m),$async$zd)
case 7:r=g
if(r!=null){q=r.h(0,"showroom")
if(q!=null){p=D.hVR(q)
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
A.dn(o,n,"[GraphQL] "+("showroom(id: "+s.b+")"))
m=J.a2(o)
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
return A.n($async$zd,w)}}
var z=a.updateTypes(["Le(b2,r)"])
B.hn3.prototype={
$2(d,e){return new B.Le(d.P($.bd(),y.k),e,$.ap())},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.Le,A.cI)
x(B.hn3,A.hb)})()
A.f9(b.typeUniverse,JSON.parse('{"Le":{"cI":[],"ba":[]}}'))
var y={k:A.a7("lD"),g:A.a7("r"),b:A.a7("@"),f:A.a7("Hb?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"jKF","Ix",()=>C.Ze.dT(new B.hn3(),A.a7("Le"),y.g))})()};
(a=>{a["ulFxPLKNIeLlf/PzWcm7iZZ/POk="]=a.current})($__dart_deferred_initializers__);