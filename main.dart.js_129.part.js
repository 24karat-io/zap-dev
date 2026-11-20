((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={
hSA(d,e){if(d==="failed"||d==="error"||d==="cancelled"||e!=null)return D.K9
if(d==="submitted")return D.aCQ
if(d==="completed")return D.Wa
return null},
Hu:function Hu(d,e){this.a=d
this.b=e},
awO:function awO(d){this.a=d},
ho_:function ho_(){},
hnZ:function hnZ(d){this.a=d},
iNr(d,e,f){return new C.a0o(e,f,d)},
a0o:function a0o(d,e,f){this.d=d
this.e=e
this.a=f},
cuq:function cuq(){var _=this
_.w=null
_.d=$
_.c=_.a=null},
h1V:function h1V(){},
h1W:function h1W(d,e){this.a=d
this.b=e},
h1U:function h1U(d){this.a=d},
h1T:function h1T(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[42],C)
D=c[157]
C.Hu.prototype={
U(){return"TradeTransactionState."+this.b}}
C.awO.prototype={}
C.a0o.prototype={
F(){return new C.cuq()},
gbB(){return this.e}}
C.cuq.prototype={
M(){this.S()
this.a7O()},
a7O(){var x=0,w=A.o(y.H),v,u=this,t,s,r,q,p
var $async$a7O=A.j(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:q=u.gu()
p=q.A($.hEL().$1(u.a.d),y.S).a.x
x=3
return A.e(new A.S(p,p.$ti.i("S<1>")).hD(0,new C.h1V()),$async$a7O)
case 3:if(e===D.K9){x=1
break}x=4
return A.e(q.A($.bd(),y.U).mi("  query TradingTradeByTransactionId($transactionId: String!) {\n    tradingTradeByTransactionId(transaction_id: $transactionId) {\n      id\n      user_id\n      unit_price\n      amount_fiat\n      qty_token\n      side\n      created_at\n      token {\n        id\n        symbol\n        name\n        img\n        community {\n          id\n        }\n      }\n    }\n  }\n",A.u(["transactionId",u.a.d],y.N,y.z)),$async$a7O)
case 4:t=e
if(t!=null&&t.h(0,"tradingTradeByTransactionId")!=null){s=A.hW4(t.h(0,"tradingTradeByTransactionId"))
p=s.w
if(p==null)r=null
else{p=p.w
r=p==null?null:p.a}if(r!=null)q.A($.pw().$1(r),y.o).ar()
u.t(new C.h1W(u,s))}case 1:return A.m(v,w)}})
return A.n($async$a7O,w)},
p(d){var x,w,v,u=this,t=null
u.gu().P($.hEL().$1(u.a.d),y.S)
x=B.fw.nj(t)
w=A.a([A.f3(0,A.by("assets/images/bg_trade_transaction.svg",t,t,t,B.am,t,t,t),t,0,0,0)],y.p)
v=u.w
if(v!=null)w.push(u.dx9(v))
else w.push(u.dcp())
return A.lc(A.ia(!1,A.bs(t,t,new A.aT(B.a4,t,B.a0,B.t,w,t),t,t,t,!0,!1,!0,t,t,t,t,t),t,y.z),x,y.I)},
dcp(){var x,w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
o=A.a9(o,p,y.w).w
switch(q.a.e.a){case 0:x=q.c
x.toString
w=y.t
A.f(x,B.b,w).toString
x=y.f
v=A.h("Processing your purchase...",p,"titleTradeBuyTransactionProcessing",A.a([],x),p)
u=q.c
u.toString
A.f(u,B.b,w).toString
t=A.h("Hang tight! We\u2019re securing your tokens.",p,"messageTradeBuyTransactionProcessing",A.a([],x),p)
break
case 1:x=q.c
x.toString
w=y.t
A.f(x,B.b,w).toString
x=y.f
v=A.h("Selling your tokens...",p,"titleTradeSellTransactionProcessing",A.a([],x),p)
u=q.c
u.toString
A.f(u,B.b,w).toString
t=A.h("We\u2019re processing your sale and adding the funds to your wallet.",p,"messageTradeSellTransactionProcessing",A.a([],x),p)
break
default:t=p
v=t}o=Math.min(350,0.8*o.a.a)
x=A.C(16)
w=A.a([new A.ca(3,B.ai,A.aK(218103808),new A.I(0,4),18),new A.ca(1,B.ai,A.aK(436207616),new A.I(0,10),14)],y.V)
u=A.cr("assets/anims/anim_card_paying.json",p,p,p,p,p,p,!0,250)
s=q.c
s.toString
s=A.k(v,p,p,p,p,p,p,p,p,A.i(s).ok.a.v(B.x,28),B.w,p,p,p,p,p)
r=q.c
r.toString
return A.aB(A.z(p,new A.F(1/0,p,A.D(A.a([u,B.a1,s,B.A,A.k(t,p,p,p,p,p,p,p,p,A.i(r).ok.z.v(B.X,14),B.w,p,p,p,p,p),B.as],y.p),B.i,p,B.d,B.m,0,B.k),p),B.f,p,new A.aJ(0,o,0,1/0),new A.H(B.n,p,p,x,w,p,p,B.p),p,p,p,B.af,B.af,p,p,p),p,p)},
dx9(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
n=A.a9(n,o,y.w).w
switch(p.a.e.a){case 0:x=p.c
x.toString
w=y.t
A.f(x,B.b,w).toString
x=y.f
v=A.h("Purchase Complete!",o,"titleTradeBuyTransactionCompleted",A.a([],x),o)
u=p.c
u.toString
A.f(u,B.b,w).toString
w=d.e
w=A.Ih(w==null?"0":w)
u=d.w
u=u==null?o:u.c
if(u==null)u=""
t=A.h(w+" "+u+" tokens have been added to your wallet.",o,"messageTradeBuyTransactionCompleted",A.a([w,u],x),o)
break
case 1:x=p.c
x.toString
w=y.t
A.f(x,B.b,w).toString
x=y.f
v=A.h("Sale Complete!",o,"titleTradeSellTransactionCompleted",A.a([],x),o)
u=p.c
u.toString
A.f(u,B.b,w).toString
w=d.e
w=A.Ih(w==null?"0":w)
u=d.w
u=u==null?o:u.c
if(u==null)u=""
s=d.d
s="\xa5"+A.Ih(s==null?"0":s)
t=A.h(w+" "+u+" sold. "+s+" has been added to your wallet.",o,"messageTradeSellTransactionCompleted",A.a([w,u,s],x),o)
break
default:t=o
v=t}n=Math.min(350,0.8*n.a.a)
x=A.C(16)
w=A.a([new A.ca(3,B.ai,A.aK(218103808),new A.I(0,4),18),new A.ca(1,B.ai,A.aK(436207616),new A.I(0,10),14)],y.V)
u=A.cr("assets/anims/anim_success.json",o,o,o,o,o,o,!1,150)
s=p.c
s.toString
s=A.k(v,o,o,o,o,o,o,o,o,A.i(s).ok.a.v(B.x,28),B.w,o,o,o,o,o)
r=p.c
r.toString
r=A.k(t,o,o,o,o,o,o,o,o,A.i(r).ok.z.v(B.X,14),B.w,o,o,o,o,o)
q=p.c
q.toString
A.f(q,B.b,y.t).toString
return A.aB(A.z(o,new A.F(1/0,o,A.D(A.a([u,B.a1,s,B.A,r,B.eC,new A.F(1/0,o,A.bn(A.k(A.h("Back to community",o,"buttonBackToCommunity",A.a([],y.f),o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),new C.h1U(p),o),o)],y.p),B.i,o,B.d,B.m,0,B.k),o),B.f,o,new A.aJ(0,n,0,1/0),new A.H(B.n,o,o,x,w,o,o,B.p),o,o,o,B.af,B.af,o,o,o),o,o)}}
var z=a.updateTypes(["awO(b2,r)","U(Hu)","Hu?(r?{errorCode:@})"])
C.ho_.prototype={
$2(d,e){var x=new C.awO(A.bYp(d.P($.bd(),y.U),D.Wa,D.K9,C.jlJ(),d.P($.a2B(),y.k),D.aCQ,e,D.cXr,y.c))
d.ck(new C.hnZ(x))
return x},
$S:z+0}
C.hnZ.prototype={
$0(){this.a.a.l()},
$S:0}
C.h1V.prototype={
$1(d){return d===D.Wa||d===D.K9},
$S:z+1}
C.h1W.prototype={
$0(){this.a.w=this.b},
$S:0}
C.h1U.prototype={
$0(){var x=this.a.c
x.toString
A.ao(x).fU(new C.h1T())},
$S:0}
C.h1T.prototype={
$1(d){return d.c.a==="BrandCommunityDetailRoute"||d.gdZ()},
$S:13};(function installTearOffs(){var x=a.installStaticTearOff
x(C,"jlJ",1,function(){return{errorCode:null}},["$2$errorCode","$1"],["hSA",function(d){return C.hSA(d,null)}],2,0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Hu,A.pZ)
x(C.awO,A.X)
x(C.ho_,A.hb)
w(A.f1,[C.hnZ,C.h1W,C.h1U])
x(C.a0o,A.iA)
x(C.cuq,A.iI)
w(A.f0,[C.h1V,C.h1T])})()
A.f9(b.typeUniverse,JSON.parse('{"a0o":{"E":[],"p":[]},"cuq":{"J":["a0o"]}}'))
var y=(function rtii(){var x=A.a7
return{U:x("lD"),V:x("Q<ca>"),f:x("Q<X>"),p:x("Q<p>"),w:x("i9"),t:x("hp"),N:x("r"),I:x("vd"),S:x("awO"),c:x("Hu"),o:x("Lw"),k:x("a0q"),z:x("@"),H:x("~")}})();(function constants(){D.cXr=new C.Hu(0,"waiting")
D.aCQ=new C.Hu(1,"submitted")
D.Wa=new C.Hu(2,"completed")
D.K9=new C.Hu(3,"failed")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"jLi","hEL",()=>B.em.IB(new C.ho_(),y.S,y.N))})()};
(a=>{a["f9eqQhyDzyYxkjxreukZQ3wMuYc="]=a.current})($__dart_deferred_initializers__);