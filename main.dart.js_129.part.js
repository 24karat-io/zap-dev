((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={
hSv(d,e){if(d==="failed"||d==="error"||d==="cancelled"||e!=null)return D.Ke
if(d==="submitted")return D.aCX
if(d==="completed")return D.Wc
return null},
Hu:function Hu(d,e){this.a=d
this.b=e},
awT:function awT(d){this.a=d},
hnI:function hnI(){},
hnH:function hnH(d){this.a=d},
iNO(d,e,f){return new C.a0q(e,f,d)},
a0q:function a0q(d,e,f){this.d=d
this.e=e
this.a=f},
cur:function cur(){var _=this
_.w=null
_.d=$
_.c=_.a=null},
h1A:function h1A(){},
h1B:function h1B(d,e){this.a=d
this.b=e},
h1z:function h1z(d){this.a=d},
h1y:function h1y(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[42],C)
D=c[157]
C.Hu.prototype={
U(){return"TradeTransactionState."+this.b}}
C.awT.prototype={}
C.a0q.prototype={
G(){return new C.cur()},
gbB(){return this.e}}
C.cur.prototype={
M(){this.S()
this.a7F()},
a7F(){var x=0,w=A.o(y.H),v,u=this,t,s,r,q,p
var $async$a7F=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:q=u.gu()
p=q.A($.hEG().$1(u.a.d),y.S).a.x
x=3
return A.e(new A.S(p,p.$ti.i("S<1>")).hD(0,new C.h1A()),$async$a7F)
case 3:if(e===D.Ke){x=1
break}x=4
return A.e(q.A($.bc(),y.U).mi("  query TradingTradeByTransactionId($transactionId: String!) {\n    tradingTradeByTransactionId(transaction_id: $transactionId) {\n      id\n      user_id\n      unit_price\n      amount_fiat\n      qty_token\n      side\n      created_at\n      token {\n        id\n        symbol\n        name\n        img\n        community {\n          id\n        }\n      }\n    }\n  }\n",A.u(["transactionId",u.a.d],y.N,y.z)),$async$a7F)
case 4:t=e
if(t!=null&&t.h(0,"tradingTradeByTransactionId")!=null){s=A.hW1(t.h(0,"tradingTradeByTransactionId"))
p=s.w
if(p==null)r=null
else{p=p.w
r=p==null?null:p.a}if(r!=null)q.A($.pu().$1(r),y.o).aq()
u.t(new C.h1B(u,s))}case 1:return A.m(v,w)}})
return A.n($async$a7F,w)},
p(d){var x,w,v,u=this,t=null
u.gu().P($.hEG().$1(u.a.d),y.S)
x=B.fy.ni(t)
w=A.a([A.f7(0,A.bz("assets/images/bg_trade_transaction.svg",t,t,t,B.an,t,t,t),t,0,0,0)],y.p)
v=u.w
if(v!=null)w.push(u.dwc(v))
else w.push(u.dby())
return A.ld(A.iG(!1,A.bq(t,t,new A.aV(B.a4,t,B.a0,B.v,w,t),t,t,t,!0,!1,!0,t,t,t,t,t),t,y.z),x,y.I)},
dby(){var x,w,v,u,t,s,r,q=this,p=null,o=q.c
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
w=A.a([new A.c9(3,B.ai,A.aK(218103808),new A.I(0,4),18),new A.c9(1,B.ai,A.aK(436207616),new A.I(0,10),14)],y.V)
u=A.cq("assets/anims/anim_card_paying.json",p,p,p,p,p,p,!0,250)
s=q.c
s.toString
s=A.j(v,p,p,p,p,p,p,p,p,A.i(s).ok.a.v(B.x,28),B.w,p,p,p,p,p)
r=q.c
r.toString
return A.aB(A.z(p,new A.F(1/0,p,A.D(A.a([u,B.a1,s,B.A,A.j(t,p,p,p,p,p,p,p,p,A.i(r).ok.z.v(B.W,14),B.w,p,p,p,p,p),B.as],y.p),B.i,p,B.d,B.m,0,B.k),p),B.f,p,new A.aJ(0,o,0,1/0),new A.H(B.n,p,p,x,w,p,p,B.p),p,p,p,B.ag,B.ag,p,p,p),p,p)},
dwc(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c
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
w=A.If(w==null?"0":w)
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
w=A.If(w==null?"0":w)
u=d.w
u=u==null?o:u.c
if(u==null)u=""
s=d.d
s="\xa5"+A.If(s==null?"0":s)
t=A.h(w+" "+u+" sold. "+s+" has been added to your wallet.",o,"messageTradeSellTransactionCompleted",A.a([w,u,s],x),o)
break
default:t=o
v=t}n=Math.min(350,0.8*n.a.a)
x=A.C(16)
w=A.a([new A.c9(3,B.ai,A.aK(218103808),new A.I(0,4),18),new A.c9(1,B.ai,A.aK(436207616),new A.I(0,10),14)],y.V)
u=A.cq("assets/anims/anim_success.json",o,o,o,o,o,o,!1,150)
s=p.c
s.toString
s=A.j(v,o,o,o,o,o,o,o,o,A.i(s).ok.a.v(B.x,28),B.w,o,o,o,o,o)
r=p.c
r.toString
r=A.j(t,o,o,o,o,o,o,o,o,A.i(r).ok.z.v(B.W,14),B.w,o,o,o,o,o)
q=p.c
q.toString
A.f(q,B.b,y.t).toString
return A.aB(A.z(o,new A.F(1/0,o,A.D(A.a([u,B.a1,s,B.A,r,B.eC,new A.F(1/0,o,A.bm(A.j(A.h("Back to community",o,"buttonBackToCommunity",A.a([],y.f),o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),new C.h1z(p),o),o)],y.p),B.i,o,B.d,B.m,0,B.k),o),B.f,o,new A.aJ(0,n,0,1/0),new A.H(B.n,o,o,x,w,o,o,B.p),o,o,o,B.ag,B.ag,o,o,o),o,o)}}
var z=a.updateTypes(["awT(b1,r)","U(Hu)","Hu?(r?{errorCode:@})"])
C.hnI.prototype={
$2(d,e){var x=new C.awT(A.bYk(d.P($.bc(),y.U),D.Wc,D.Ke,C.jmC(),d.P($.a2E(),y.k),D.aCX,e,D.cYb,y.c))
d.cj(new C.hnH(x))
return x},
$S:z+0}
C.hnH.prototype={
$0(){this.a.a.l()},
$S:0}
C.h1A.prototype={
$1(d){return d===D.Wc||d===D.Ke},
$S:z+1}
C.h1B.prototype={
$0(){this.a.w=this.b},
$S:0}
C.h1z.prototype={
$0(){var x=this.a.c
x.toString
A.an(x).fS(new C.h1y())},
$S:0}
C.h1y.prototype={
$1(d){return d.c.a==="BrandCommunityDetailRoute"||d.gdY()},
$S:13};(function installTearOffs(){var x=a.installStaticTearOff
x(C,"jmC",1,function(){return{errorCode:null}},["$2$errorCode","$1"],["hSv",function(d){return C.hSv(d,null)}],2,0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Hu,A.pY)
x(C.awT,A.X)
x(C.hnI,A.hd)
w(A.f1,[C.hnH,C.h1B,C.h1z])
x(C.a0q,A.iB)
x(C.cur,A.iL)
w(A.f0,[C.h1A,C.h1y])})()
A.f8(b.typeUniverse,JSON.parse('{"a0q":{"E":[],"p":[]},"cur":{"J":["a0q"]}}'))
var y=(function rtii(){var x=A.a7
return{U:x("lF"),V:x("Q<c9>"),f:x("Q<X>"),p:x("Q<p>"),w:x("i9"),t:x("ho"),N:x("r"),I:x("vd"),S:x("awT"),c:x("Hu"),o:x("Lq"),k:x("a0s"),z:x("@"),H:x("~")}})();(function constants(){D.cYb=new C.Hu(0,"waiting")
D.aCX=new C.Hu(1,"submitted")
D.Wc=new C.Hu(2,"completed")
D.Ke=new C.Hu(3,"failed")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"jMf","hEG",()=>B.em.Is(new C.hnI(),y.S,y.N))})()};
(a=>{a["/g+GfF6bB4safSXYSGkrC199iWw="]=a.current})($__dart_deferred_initializers__);