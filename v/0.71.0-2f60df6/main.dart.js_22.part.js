((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,E,A={wz:function wz(d,e){this.a=d
this.b=e},a0g:function a0g(d){this.a=d},anO:function anO(d){this.a=d},amA:function amA(d,e){this.a=d
this.b=e},
o9(d,e,f,g){var x
if(g)x=d<0||e<0
else x=d<1||e<1
if(x)throw C.o(C.bP("Invalid image dimensions "+d+"x"+e))
if(f>0&&d*e>f)throw C.o(C.bP("Image dimensions "+d+"x"+e+" exceed the maximum of "+f+" pixels"))},
Aw:function Aw(d){this.a=d
this.c=0},
cMV(d){var x,w,v=new A.aZ6()
if(!A.cMW(d))C.X(C.bP("Not a bitmap file."))
d.d+=2
x=d.Y()
w=$.he()
w.$flags&2&&C.z(w)
w[0]=x
x=$.kv()
d.d+=4
w[0]=d.Y()
v.b=x[0]
return v},
cMW(d){if(d.c-d.d<2)return!1
return A.df(d,null,0).a6()===19778},
d8q(d,e){var x,w,v,u,t=e==null?A.cMV(d):e,s=d.d,r=d.Y(),q=d.Y(),p=$.he()
p.$flags&2&&C.z(p)
p[0]=q
q=$.kv()
x=q[0]
p[0]=d.Y()
q=q[0]
w=d.a6()
v=d.a6()
u=d.Y()
if(u>=14)C.X(C.bP("Unsupported BMP compression type: "+u))
u=B.Y7[u]
d.Y()
p[0]=d.Y()
p[0]=d.Y()
p=d.Y()
d.Y()
s=new A.zh(t,x,q,r,w,v,u,p,s)
s.aSO(d,e)
return s},
mq:function mq(d,e){this.a=d
this.b=e},
aZ6:function aZ6(){this.b=$},
zh:function zh(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
d8p(d,e){return new A.amD(d,e==null?268435456:e)},
amD:function amD(d,e){var _=this
_.a=$
_.b=null
_.c=d
_.d=e},
aZ5:function aZ5(d,e){this.a=d
this.b=e},
aZ3:function aZ3(d,e){this.a=d
this.b=e},
aZ2:function aZ2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aZ4:function aZ4(d,e,f){this.a=d
this.b=e
this.c=f},
b38:function b38(d,e){var _=this
_.a=$
_.b=null
_.c=d
_.d=e},
a0F:function a0F(){},
b5L:function b5L(){},
apH:function apH(d,e){this.b=d
this.c=e},
arR:function arR(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
Iu:function Iu(d,e){this.a=d
this.b=e},
It:function It(d,e){this.a=d
this.b=e},
apI:function apI(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cOF(d,e,f,g){var x,w
switch(d.a){case 1:return new A.be1(f,e)
case 2:return new A.arT(f,g==null?1:g,e)
case 3:return new A.arT(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.be_(f,x,e)
w.bsQ(e,f,x)
return w
case 5:return new A.be0(f,g==null?16:g,e)
case 6:return new A.arR(f,g==null?32:g,!1,e)
case 7:return new A.arR(f,g==null?32:g,!0,e)
default:throw C.o(C.bP("Invalid compression type: "+d.k(0)))}},
uG:function uG(d,e){this.a=d
this.b=e},
b6C:function b6C(){},
bdZ:function bdZ(){},
dbq(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw C.o(C.bP("Incomplete huffman data"))
return}x=d.d
w=d.Y()
v=d.Y()
d.d+=4
u=d.Y()
t=!0
if(w<65537)t=v>=65537
if(t)throw C.o(C.bP("Invalid huffman table size"))
d.d+=4
s=C.br(65537,0,!1,y.q)
r=J.kM(16384,y.D)
for(q=0;q<16384;++q)r[q]=new A.apJ()
A.dbr(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw C.o(C.bP("Error in header for Huffman-encoded data (invalid number of bits)."))
A.dbn(s,w,v,r)
A.dbp(s,r,d,u,v,g,f)},
dbp(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=C.a([0,0],y.t),n=f.d+D.c.ac(g+7,8)
for(x=0;f.d<n;){A.cE5(o,f)
while(w=o[1],w>=14){v=e[D.c.lp(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cE6(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw C.o(C.bP(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
for(;;){w=o[1]
if(!(w<s&&f.d<n))break
A.cE5(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.lp(o[0],w)&D.c.c2(1,s)-1)>>>0){o[1]=w
r=A.cE6(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw C.o(C.bP(p))}}}q=8-g&7
o[0]=D.c.U(o[0],q)
o[1]=o[1]-q
while(w=o[1],w>0){v=e[D.c.bW(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cE6(v.b,h,o,f,j,x,i)}else throw C.o(C.bP(p))}if(x!==i)throw C.o(C.bP("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cE6(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cE5(f,g)
x=f[1]-8
f[1]=x
w=D.c.lp(f[0],x)&255
if(i+w>j)throw C.o(C.bP(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&C.z(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&C.z(h)
h[i]=d}else throw C.o(C.bP(s))
i=t}return i},
dbn(d,e,f,g){var x,w,v,u,t,s,r,q="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t;e<=f;++e){w=d[e]
v=w>>>6
u=w&63
if(D.c.fe(v,u)!==0)throw C.o(C.bP(q))
if(u>14){t=g[D.c.dN(v,u-14)]
if(t.a!==0)throw C.o(C.bP(q));++t.b
w=t.c;(w==null?t.c=C.a([],x):w).push(e)}else if(u!==0){w=14-u
s=D.c.bW(v,w)
for(r=D.c.bW(1,w);r>0;--r,++s){t=g[s]
if(t.a!==0||t.c!=null)throw C.o(C.bP(q))
t.a=u
t.b=e}}}},
dbr(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=C.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw C.o(C.bP(s))
w=A.cOG(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw C.o(C.bP(s))
v=A.cOG(8,p,d)+6
if(f+v>x)throw C.o(C.bP(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw C.o(C.bP(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.dbo(h)},
dbo(d){var x,w,v,u,t,s=C.br(59,0,!1,y.q)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cE5(d,e){d[0]=((d[0]<<8|e.b1())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
cOG(d,e,f){var x
while(x=e[1],x<d){e[0]=((e[0]<<8|J.Q(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.lp(e[0],x)&D.c.c2(1,d)-1)>>>0},
apJ:function apJ(){this.b=this.a=0
this.c=null},
dbs(d){var x
if(d.length<8)return!1
x=C.d5(d,!1,null,0)
if(x.Y()!==20000630)return!1
if(x.b1()!==2)return!1
if((x.rN()&4294967289)>>>0!==0)return!1
return!0},
b6H:function b6H(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cQk(d,e,f,g){var x=new A.arS(d,C.a([],y.h),C.t(y.N,y.n),B.Ol,e)
x.bsy(d,e,f,g)
return x},
a1C:function a1C(){},
b6I:function b6I(d,e){this.a=d
this.b=e},
arS:function arS(d,e,f,g,h){var _=this
_.a=d
_.b=null
_.c=e
_.d=0
_.e=f
_.r=$
_.x=_.w=0
_.at=$
_.ax=g
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=h
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
be_:function be_(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aJu:function aJu(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
be0:function be0(d,e,f){var _=this
_.r=d
_.w=e
_.x=null
_.b=_.a=0
_.c=f},
be1:function be1(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
arT:function arT(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
b6D:function b6D(d){this.a=null
this.b=d},
b6G:function b6G(d,e){this.a=d
this.b=e},
b6E:function b6E(d,e){this.a=d
this.b=e},
b6F:function b6F(d,e,f){this.a=d
this.b=e
this.c=f},
cPo(d){var x=new Uint8Array(d*3)
return new A.a2k(A.dcp(d),d,null,new C.xA(x,d,3))},
dco(d){return new A.a2k(d.a,d.b,d.c,C.cSb(d.d))},
dcp(d){var x
for(x=1;x<=8;++x)if(D.c.c2(1,x)>=d)return x
return 0},
a2k:function a2k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2l:function a2l(){},
arU:function arU(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=-1
_.y=$},
QO:function QO(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
b9r:function b9r(d){var _=this
_.a=null
_.b=d
_.f=_.e=_.d=_.c=0
_.r=null
_.w=0
_.x=null
_.z=_.y=$
_.Q=null
_.as=0
_.at=null
_.ch=_.ay=_.ax=0
_.CW=null
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=0},
b9u:function b9u(d,e){this.a=d
this.b=e},
b9s:function b9s(d,e){this.a=d
this.b=e},
b9t:function b9t(d,e,f){this.a=d
this.b=e
this.c=f},
cPE(d){var x,w,v,u,t,s
if(d.a6()!==0)return null
x=d.a6()
if(x>=3)return null
w=B.ayq[x]
if(w===B.P0)return null
v=d.a6()
u=J.hB(v,y.W)
for(t=0;t<v;++t){J.Q(d.a,d.d++)
s=J.Q(d.a,d.d++)
J.Q(d.a,d.d++);++d.d
d.a6()
d.a6()
u[t]=new A.arm(s,d.Y(),d.Y())}return new A.bbo(w,v,u)},
R2:function R2(d,e){this.a=d
this.b=e},
bbo:function bbo(d,e,f){this.c=d
this.d=e
this.e=f},
arm:function arm(d,e,f){this.b=d
this.d=e
this.e=f},
bbj:function bbj(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
bbk:function bbk(d){this.b=this.a=null
this.c=d},
bbn:function bbn(d,e){this.a=d
this.b=e},
bbm:function bbm(d,e,f){this.a=d
this.b=e
this.c=f},
bbl:function bbl(d,e){this.a=d
this.b=e},
cQB(d){var x=new Uint8Array(64),w=new Uint8Array(64),v=new Float32Array(64),u=new Float32Array(64),t=new Int32Array(64),s=new Int32Array(64)
x=new A.bet(x,w,v,u,t,s,new Int32Array(2048))
x.e=x.aqS(B.ZR,B.vX)
x.f=x.aqS(B.U0,B.vX)
x.r=x.aqS(B.QV,B.Sr)
x.w=x.aqS(B.SV,B.VO)
x.bKz()
x.blc(d)
return x},
ddB(d,e){return d>0?d:d+D.c.bW(1,e)-1},
beo:function beo(d,e){this.a=d
this.b=e},
bet:function bet(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.w=_.r=_.f=_.e=$
_.x=h
_.y=i
_.z=j
_.Q=null
_.at=_.as=0},
c0R:function c0R(d,e){this.a=d
this.b=e},
SO:function SO(d,e){this.a=d
this.b=e},
a5a:function a5a(d,e){this.a=d
this.b=e},
a5b:function a5b(){},
arV:function arV(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Ez:function Ez(d,e){this.a=d
this.b=e},
bpK:function bpK(){},
be2:function be2(d,e,f){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=d
_.CW=1
_.cy=e
_.db=f},
cSm(d){var x=y.N,w=C.a([],y.d),v=C.a([],y.t),u=d==null?268435456:d
return new A.bpF(new A.be2(C.t(x,x),w,v),u)},
bpF:function bpF(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=$
_.f=0},
bpI:function bpI(d,e){this.a=d
this.b=e},
bpG:function bpG(d,e){this.a=d
this.b=e},
bpH:function bpH(d,e,f){this.a=d
this.b=e
this.c=f},
ais:function ais(){},
EA:function EA(d,e){this.a=d
this.b=e},
Ks:function Ks(d){this.b=this.a=0
this.e=d},
bpL:function bpL(d,e){var _=this
_.b=_.a=null
_.c=d
_.d=e},
bpO:function bpO(d,e,f){this.a=d
this.b=e
this.c=f},
bpP:function bpP(d,e){this.a=d
this.b=e},
bpN:function bpN(d,e){this.a=d
this.b=e},
bpM:function bpM(){},
auM:function auM(){this.b=this.a=null},
auN:function auN(){this.b=this.a=null},
xG:function xG(){},
auP:function auP(){this.b=this.a=null},
auQ:function auQ(){this.b=this.a=null},
auT:function auT(){this.b=this.a=null},
auU:function auU(){this.b=this.a=null},
a5w:function a5w(d){this.b=d},
auS:function auS(){this.b=$
this.c=null},
brg:function brg(){var _=this
_.w=_.r=_.f=_.e=$},
T5:function T5(d){this.a=d
this.c=null},
cSC(d,e){var x=C.a([],y.l),w=e==null?268435456:e
w=new A.brl(x,C.t(y.q,y.j),d.length,w)
w.bt5(d,e)
return w},
cFA(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.e.G(D.e.aF((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
brm(d,e){if(e===0)return 0
return D.c.G(D.c.aF(D.e.G(255*(1-(1-d/255)/(e/255))),0,255))},
bro(d,e){return D.c.G(D.c.aF(d+e-255,0,255))},
cFC(d,e){return D.c.G(D.c.aF(255-(255-e)*(255-d),0,255))},
brn(d,e){if(e===255)return 255
return D.e.G(D.e.aF(d/255/(1-e/255)*255,0,255))},
cFD(d,e){var x=d/255,w=e/255,v=1-w
return D.e.ao(255*(v*w*x+w*(1-v*(1-x))))},
cFy(d,e){var x=e/255,w=d/255
if(w<0.5)return D.e.ao(510*x*w)
else return D.e.ao(255*(1-2*(1-x)*(1-w)))},
cFE(d,e){if(e<128)return A.brm(d,2*e)
else return A.brn(d,2*(e-128))},
cFz(d,e){var x
if(e<128)return A.bro(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
cFB(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
cFx(d,e){return D.e.ao(e+d-2*e*d/255)},
pM(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
cSD(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=C.t(y.q,y.e)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,C.q)(b9),++w){u=b9[w]
b4.j(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=C.hA(b3,b3,D.ah,0,D.bI,b8,b3,0,v,b3,D.ah,b7,!1)
if(t===-1)throw C.o(C.bP("PSD: unsupported bit depth: "+C.u(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=C.a([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gN(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.l();){i=x.gq()
m+=t
switch(b5){case B.a9M:i.saz(A.pM(r.c,m,t))
i.saM(A.pM(q.c,m,t))
i.saL(A.pM(p.c,m,t))
i.saJ(v?A.pM(o.c,m,t):255)
if(i.gaJ()!==0){i.saz((i.gaz()+i.gaJ()-255)*255/i.gaJ())
i.saM((i.gaM()+i.gaJ()-255)*255/i.gaJ())
i.saL((i.gaL()+i.gaJ()-255)*255/i.gaJ())}break
case B.a9O:h=A.pM(r.c,m,t)
g=A.pM(q.c,m,t)
f=A.pM(p.c,m,t)
e=v?A.pM(o.c,m,t):255
d=((h*100>>>8)+16)/116
a0=(g-128)/500+d
a1=d-(f-128)/200
a2=Math.pow(d,3)
d=a2>0.008856?a2:(d-0.13793103448275862)/7.787
a3=Math.pow(a0,3)
a0=a3>0.008856?a3:(a0-0.13793103448275862)/7.787
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a0=a0*95.047/100
d=d*100/100
a1=a1*108.883/100
a5=a0*3.240454836+d*-1.53713885+a1*-0.498531547
a6=a0*-0.96926639+d*1.87601093+a1*0.041556082
a7=a0*0.05564342+d*-0.20402585+a1*1.05722516
a5=a5>0.0031308?1.055*Math.pow(a5,0.4166666666666667)-0.055:12.92*a5
a6=a6>0.0031308?1.055*Math.pow(a6,0.4166666666666667)-0.055:12.92*a6
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=[D.e.ao(D.e.aF(a5*255,0,255)),D.e.ao(D.e.aF(a6*255,0,255)),D.e.ao(D.e.aF(a7*255,0,255))]
i.saz(a8[0])
i.saM(a8[1])
i.saL(a8[2])
i.saJ(e)
break
case B.a9L:a9=A.pM(r.c,m,t)
e=j?A.pM(o.c,m,t):255
i.saz(a9)
i.saM(a9)
i.saL(a9)
i.saJ(e)
break
case B.a9N:b0=A.pM(r.c,m,t)
b1=A.pM(q.c,m,t)
d=A.pM(p.c,m,t)
b2=A.pM(b4.h(0,k?-1:3).c,m,t)
e=l?A.pM(o.c,m,t):255
A.cZL(255-b0,255-b1,255-d,255-b2,n)
i.saz(n[0])
i.saM(n[1])
i.saL(n[2])
i.saJ(e)
break
default:throw C.o(C.bP("Unhandled color mode: "+C.u(b5)))}}return s},
vg:function vg(d,e){this.a=d
this.b=e},
brl:function brl(d,e,f,g){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.w=d
_.x=$
_.y=null
_.z=e
_.as=$
_.at=f
_.ch=_.ay=_.ax=null
_.CW=g},
auO:function auO(d){this.a=d},
auR:function auR(d,e,f){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=d
_.ch=e
_.cx=null
_.cy=f},
dgl(d,e){var x,w
switch(d){case"lsct":x=new A.auS()
w=e.c-e.d
x.b=e.Y()
if(w>=12){if(e.iu(4)!=="8BIM")C.X(C.bP("Invalid key in layer additional data"))
x.c=e.iu(4)}if(w>=16)e.Y()
return x
default:return new A.a5w(e)}},
T6:function T6(){},
brh:function brh(d){this.a=null
this.b=d},
brj:function brj(d,e,f){this.a=d
this.b=e
this.c=f},
brk:function brk(d,e){this.a=d
this.b=e},
bri:function bri(d,e){this.a=d
this.b=e},
auX:function auX(){},
AJ:function AJ(d,e,f){this.a=d
this.b=e
this.c=f},
mP:function mP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5y:function a5y(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
T8:function T8(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
auW:function auW(){this.y=this.b=this.a=0},
AK(d,e){return(B.yC[d>>>8]<<17|B.yC[e>>>8]<<16|B.yC[d&255]<<1|B.yC[e&255])>>>0},
tu:function tu(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
brL:function brL(d){this.b=this.a=null
this.c=d},
brO:function brO(d,e){this.a=d
this.b=e},
brM:function brM(d,e){this.a=d
this.b=e},
brN:function brN(d,e,f){this.a=d
this.b=e
this.c=f},
az5:function az5(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
oI:function oI(d,e){this.a=d
this.b=e},
bF_:function bF_(d){this.a=null
this.b=$
this.c=d},
bF1:function bF1(d,e,f){this.a=d
this.b=e
this.c=f},
bF2:function bF2(d,e){this.a=d
this.b=e},
bF0:function bF0(d,e){this.a=d
this.b=e},
bF9:function bF9(d){this.a=d
this.c=this.b=0},
az7:function az7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cGG(d,e,f){var x=new A.bFd(e,f,d),w=y.I
x.e=C.br(e,null,!1,w)
x.f=C.br(e,null,!1,w)
return x},
bFd:function bFd(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
az8:function az8(d,e,f,g){var _=this
_.a=d
_.c=_.b=0
_.d=e
_.w=_.r=_.f=_.e=1
_.x=f
_.y=g
_.z=!1
_.Q=1
_.at=_.as=$
_.ch=_.ay=0
_.cx=_.CW=null
_.db=_.cy=$
_.dy=1
_.fx=_.fr=0
_.id=null
_.k3=_.k2=_.k1=$},
M5:function M5(d,e){this.a=d
this.b=e},
kW:function kW(d,e){this.a=d
this.b=e},
tL:function tL(d,e){this.a=d
this.b=e},
bFe:function bFe(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cRb(){return new A.biZ(new Uint8Array(4096))},
biZ:function biZ(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bFa:function bFa(d){this.a=null
this.c=$
this.d=d},
bFb:function bFb(d,e){this.a=d
this.b=e},
bFc:function bFc(d,e,f){this.a=d
this.b=e
this.c=f},
cGS(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=C.br(8,null,!1,y.ak),s=C.br(4,null,!1,y.Z)
return new A.bHo(d,e,new A.bHw(),new A.bHz(),new A.bHq(x,w),new A.bHB(v,u),t,s,new Uint8Array(4))},
oN(d,e,f,g,h){var x,w,v
for(x=d.$flags|0,w=0;w<h;++w){v=f[g+w]
x&2&&C.z(d)
d[e+w]=v}},
cVA(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bHo:function bHo(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=$
_.d=null
_.e=$
_.f=f
_.r=g
_.w=h
_.x=i
_.as=_.Q=_.z=_.y=0
_.ax=_.at=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=j
_.dy=k
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=l
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.by=$
_.bv=null
_.E=$
_.a1=_.a_=null
_.aa=$},
cVy(d){var x=new A.a9V(d)
x.b=254
x.c=0
x.d=-8
return x},
a9V:function a9V(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
ew(d,e,f){return D.c.nh(D.c.U(d+2*e+f+2,2),32)},
dl1(d){var x,w=C.a([A.ew(J.Q(d.a,d.d+-33),J.Q(d.a,d.d+-32),J.Q(d.a,d.d+-31)),A.ew(J.Q(d.a,d.d+-32),J.Q(d.a,d.d+-31),J.Q(d.a,d.d+-30)),A.ew(J.Q(d.a,d.d+-31),J.Q(d.a,d.d+-30),J.Q(d.a,d.d+-29)),A.ew(J.Q(d.a,d.d+-30),J.Q(d.a,d.d+-29),J.Q(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.ayd(x*32,4,w)},
dkU(d){var x=J.Q(d.a,d.d+-33),w=J.Q(d.a,d.d+-1),v=J.Q(d.a,d.d+31),u=J.Q(d.a,d.d+63),t=J.Q(d.a,d.d+95),s=A.df(d,null,0),r=s.aAa(),q=A.ew(x,w,v)
r.$flags&2&&C.z(r)
r[0]=16843009*q
s.d+=32
q=s.aAa()
r=A.ew(w,v,u)
q.$flags&2&&C.z(q)
q[0]=16843009*r
s.d+=32
r=s.aAa()
q=A.ew(v,u,t)
r.$flags&2&&C.z(r)
r[0]=16843009*q
s.d+=32
q=s.aAa()
r=A.ew(u,t,t)
q.$flags&2&&C.z(q)
q[0]=16843009*r},
dkS(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.Q(d.a,d.d+(w-32))+J.Q(d.a,d.d+(-1+w*32))
x=D.c.U(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.Cs(v,u,u+4,x)}},
cGT(d,e){var x,w,v,u,t,s=255-J.Q(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.Q(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.cC8()[v+J.Q(d.a,d.d+(-32+u))]
J.dS(d.a,d.d+(x+u),t)}x+=32}},
dl_(d){A.cGT(d,4)},
dl0(d){A.cGT(d,8)},
dkZ(d){A.cGT(d,16)},
dkY(d){var x,w=J.Q(d.a,d.d+-1),v=J.Q(d.a,d.d+31),u=J.Q(d.a,d.d+63),t=J.Q(d.a,d.d+95),s=J.Q(d.a,d.d+-33),r=J.Q(d.a,d.d+-32),q=J.Q(d.a,d.d+-31),p=J.Q(d.a,d.d+-30),o=J.Q(d.a,d.d+-29)
d.j(0,96,A.ew(v,u,t))
x=A.ew(w,v,u)
d.j(0,97,x)
d.j(0,64,x)
x=A.ew(s,w,v)
d.j(0,98,x)
d.j(0,65,x)
d.j(0,32,x)
x=A.ew(r,s,w)
d.j(0,99,x)
d.j(0,66,x)
d.j(0,33,x)
d.j(0,0,x)
x=A.ew(q,r,s)
d.j(0,67,x)
d.j(0,34,x)
d.j(0,1,x)
x=A.ew(p,q,r)
d.j(0,35,x)
d.j(0,2,x)
d.j(0,3,A.ew(o,p,q))},
dkX(d){var x,w=J.Q(d.a,d.d+-32),v=J.Q(d.a,d.d+-31),u=J.Q(d.a,d.d+-30),t=J.Q(d.a,d.d+-29),s=J.Q(d.a,d.d+-28),r=J.Q(d.a,d.d+-27),q=J.Q(d.a,d.d+-26),p=J.Q(d.a,d.d+-25)
d.j(0,0,A.ew(w,v,u))
x=A.ew(v,u,t)
d.j(0,32,x)
d.j(0,1,x)
x=A.ew(u,t,s)
d.j(0,64,x)
d.j(0,33,x)
d.j(0,2,x)
x=A.ew(t,s,r)
d.j(0,96,x)
d.j(0,65,x)
d.j(0,34,x)
d.j(0,3,x)
x=A.ew(s,r,q)
d.j(0,97,x)
d.j(0,66,x)
d.j(0,35,x)
x=A.ew(r,q,p)
d.j(0,98,x)
d.j(0,67,x)
d.j(0,99,A.ew(q,p,p))},
dl3(d){var x=J.Q(d.a,d.d+-1),w=J.Q(d.a,d.d+31),v=J.Q(d.a,d.d+63),u=J.Q(d.a,d.d+-33),t=J.Q(d.a,d.d+-32),s=J.Q(d.a,d.d+-31),r=J.Q(d.a,d.d+-30),q=J.Q(d.a,d.d+-29),p=D.c.nh(D.c.U(u+t+1,1),32)
d.j(0,65,p)
d.j(0,0,p)
p=D.c.nh(D.c.U(t+s+1,1),32)
d.j(0,66,p)
d.j(0,1,p)
p=D.c.nh(D.c.U(s+r+1,1),32)
d.j(0,67,p)
d.j(0,2,p)
d.j(0,3,D.c.nh(D.c.U(r+q+1,1),32))
d.j(0,96,A.ew(v,w,x))
d.j(0,64,A.ew(w,x,u))
p=A.ew(x,u,t)
d.j(0,97,p)
d.j(0,32,p)
p=A.ew(u,t,s)
d.j(0,98,p)
d.j(0,33,p)
p=A.ew(t,s,r)
d.j(0,99,p)
d.j(0,34,p)
d.j(0,35,A.ew(s,r,q))},
dl2(d){var x,w=J.Q(d.a,d.d+-32),v=J.Q(d.a,d.d+-31),u=J.Q(d.a,d.d+-30),t=J.Q(d.a,d.d+-29),s=J.Q(d.a,d.d+-28),r=J.Q(d.a,d.d+-27),q=J.Q(d.a,d.d+-26),p=J.Q(d.a,d.d+-25)
d.j(0,0,D.c.nh(D.c.U(w+v+1,1),32))
x=D.c.nh(D.c.U(v+u+1,1),32)
d.j(0,64,x)
d.j(0,1,x)
x=D.c.nh(D.c.U(u+t+1,1),32)
d.j(0,65,x)
d.j(0,2,x)
x=D.c.nh(D.c.U(t+s+1,1),32)
d.j(0,66,x)
d.j(0,3,x)
d.j(0,32,A.ew(w,v,u))
x=A.ew(v,u,t)
d.j(0,96,x)
d.j(0,33,x)
x=A.ew(u,t,s)
d.j(0,97,x)
d.j(0,34,x)
x=A.ew(t,s,r)
d.j(0,98,x)
d.j(0,35,x)
d.j(0,67,A.ew(s,r,q))
d.j(0,99,A.ew(r,q,p))},
dkV(d){var x,w=J.Q(d.a,d.d+-1),v=J.Q(d.a,d.d+31),u=J.Q(d.a,d.d+63),t=J.Q(d.a,d.d+95)
d.j(0,0,D.c.nh(D.c.U(w+v+1,1),32))
x=D.c.nh(D.c.U(v+u+1,1),32)
d.j(0,32,x)
d.j(0,2,x)
x=D.c.nh(D.c.U(u+t+1,1),32)
d.j(0,64,x)
d.j(0,34,x)
d.j(0,1,A.ew(w,v,u))
x=A.ew(v,u,t)
d.j(0,33,x)
d.j(0,3,x)
x=A.ew(u,t,t)
d.j(0,65,x)
d.j(0,35,x)
d.j(0,99,t)
d.j(0,98,t)
d.j(0,97,t)
d.j(0,96,t)
d.j(0,66,t)
d.j(0,67,t)},
dkT(d){var x=J.Q(d.a,d.d+-1),w=J.Q(d.a,d.d+31),v=J.Q(d.a,d.d+63),u=J.Q(d.a,d.d+95),t=J.Q(d.a,d.d+-33),s=J.Q(d.a,d.d+-32),r=J.Q(d.a,d.d+-31),q=J.Q(d.a,d.d+-30),p=D.c.nh(D.c.U(x+t+1,1),32)
d.j(0,34,p)
d.j(0,0,p)
p=D.c.nh(D.c.U(w+x+1,1),32)
d.j(0,66,p)
d.j(0,32,p)
p=D.c.nh(D.c.U(v+w+1,1),32)
d.j(0,98,p)
d.j(0,64,p)
d.j(0,96,D.c.nh(D.c.U(u+v+1,1),32))
d.j(0,3,A.ew(s,r,q))
d.j(0,2,A.ew(t,s,r))
p=A.ew(x,t,s)
d.j(0,35,p)
d.j(0,1,p)
p=A.ew(w,x,t)
d.j(0,67,p)
d.j(0,33,p)
p=A.ew(v,w,x)
d.j(0,99,p)
d.j(0,65,p)
d.j(0,97,A.ew(u,v,w))},
dle(d){var x
for(x=0;x<16;++x)d.Qo(x*32,16,d,-32)},
dlc(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.Q(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.Cs(u,t,t+16,v)
x+=32}},
bHu(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.Cs(w,v,v+16,d)}},
dl4(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.Q(d.a,d.d+(-1+w*32))+J.Q(d.a,d.d+(w-32))
A.bHu(D.c.U(x,5),d)},
dl6(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.Q(d.a,d.d+(-1+w*32))
A.bHu(D.c.U(x,4),d)},
dl5(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.Q(d.a,d.d+(w-32))
A.bHu(D.c.U(x,4),d)},
dl7(d){A.bHu(128,d)},
dlf(d){var x
for(x=0;x<8;++x)d.Qo(x*32,8,d,-32)},
dld(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.Q(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.Cs(u,t,t+8,v)
x+=32}},
bHv(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.Cs(w,v,v+8,d)}},
dl8(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.Q(d.a,d.d+(w-32))+J.Q(d.a,d.d+(-1+w*32))
A.bHv(D.c.U(x,4),d)},
dl9(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.Q(d.a,d.d+(w-32))
A.bHv(D.c.U(x,3),d)},
dla(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.Q(d.a,d.d+(-1+w*32))
A.bHv(D.c.U(x,3),d)},
dlb(d){A.bHv(128,d)},
bHr(d,e){return D.c.U(d*e+1073741824,16)-16384},
bHs(d,e,f,g,h){var x=e+f+g*32
d.j(0,x,A.dkR(J.Q(d.a,d.d+x)+(D.c.U(h+65536,3)-8192)))},
bHt(d,e,f,g,h){A.bHs(d,0,0,e,f+g)
A.bHs(d,0,1,e,f+h)
A.bHs(d,0,2,e,f-h)
A.bHs(d,0,3,e,f-g)},
dkW(){var x,w,v,u
if(!$.cVz){for(x=-255;x<=255;++x){w=$.cKC()
v=255+x
u=x<0?-x:x
w.$flags&2&&C.z(w)
w[v]=u
u=$.cKD()
w=D.c.U(w[v],1)
u.$flags&2&&C.z(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cKE()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&C.z(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.cKF()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&C.z(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.cC8()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&C.z(w)
w[255+x]=v}$.cVz=!0}},
dkR(d){var x
if((d&-256)>>>0===0)x=d
else x=d<0?0:255
return x},
bHp:function bHp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dkQ(){var x,w=J.kM(3,y.p)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.a9U(w)},
dlv(){var x,w,v,u,t=new Uint8Array(3),s=J.kM(4,y.B)
for(x=y.V,w=0;w<4;++w){v=J.kM(8,x)
for(u=0;u<8;++u)v[u]=A.dkQ()
s[w]=v}D.m.dg(t,0,3,255)
return new A.bHA(t,s)},
bHw:function bHw(){this.d=$},
bHz:function bHz(){this.b=null},
bHB:function bHB(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
a9U:function a9U(d){this.a=d},
bHA:function bHA(d,e){this.a=d
this.b=e},
bHq:function bHq(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
FI:function FI(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
azJ:function azJ(){this.b=this.a=0},
azL:function azL(d,e,f){this.a=d
this.b=e
this.c=f},
azK:function azK(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
azM:function azM(d,e,f){this.a=d
this.b=e
this.c=f},
cGU(d,e){var x,w=C.a([],y.A),v=C.a([],y.F),u=new Uint32Array(2),t=new A.azH(d,u)
u=t.e=J.cM(D.bg.ga4(u),0,null)
x=d.b1()
u.$flags&2&&C.z(u)
u[0]=x
x=d.b1()
u.$flags&2&&C.z(u)
u[1]=x
x=d.b1()
u.$flags&2&&C.z(u)
u[2]=x
x=d.b1()
u.$flags&2&&C.z(u)
u[3]=x
x=d.b1()
u.$flags&2&&C.z(u)
u[4]=x
x=d.b1()
u.$flags&2&&C.z(u)
u[5]=x
x=d.b1()
u.$flags&2&&C.z(u)
u[6]=x
x=d.b1()
u.$flags&2&&C.z(u)
u[7]=x
t.b=!1
return new A.a9W(t,e,w,v)},
FJ(d,e){return D.c.U(d+D.c.c2(1,e)-1,e)},
a9W:function a9W(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=f
_.ay=null
_.ch=g
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
arZ:function arZ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=f
_.ay=null
_.ch=g
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
azH:function azH(d,e){var _=this
_.a=0
_.b=!0
_.c=d
_.d=e
_.e=$},
bHx:function bHx(d,e){this.a=d
this.b=e},
Bv(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
Mp(d){if(d<0)return 0
if(d>255)return 255
return d},
bHy(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
dlg(d,e,f){return 4278190080},
dlh(d,e,f){return d},
dlm(d,e,f){return e[f]},
dln(d,e,f){return e[f+1]},
dlo(d,e,f){return e[f-1]},
dlp(d,e,f){var x=e[f]
return A.Bv(A.Bv(d,e[f+1]),x)},
dlq(d,e,f){return A.Bv(d,e[f-1])},
dlr(d,e,f){return A.Bv(d,e[f])},
dls(d,e,f){return A.Bv(e[f-1],e[f])},
dlt(d,e,f){return A.Bv(e[f],e[f+1])},
dli(d,e,f){var x=e[f-1],w=e[f],v=e[f+1]
return A.Bv(A.Bv(d,x),A.Bv(w,v))},
dlj(d,e,f){var x=e[f],w=e[f-1]
return A.bHy(x>>>24,d>>>24,w>>>24)+A.bHy(x>>>16&255,d>>>16&255,w>>>16&255)+A.bHy(x>>>8&255,d>>>8&255,w>>>8&255)+A.bHy(x&255,d&255,w&255)<=0?x:d},
dlk(d,e,f){var x=e[f],w=e[f-1]
return(A.Mp((d>>>24)+(x>>>24)-(w>>>24))<<24|A.Mp((d>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.Mp((d>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.Mp((d&255)+(x&255)-(w&255)))>>>0},
dll(d,e,f){var x,w,v,u=e[f],t=e[f-1],s=A.Bv(d,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.Mp(u+D.c.ac(u-(t>>>24),2))<<24|A.Mp(x+D.c.ac(x-(t>>>16&255),2))<<16|A.Mp(w+D.c.ac(w-(t>>>8&255),2))<<8|A.Mp(v+D.c.ac(v-(t&255),2)))>>>0},
Mo:function Mo(d,e){this.a=d
this.b=e},
azI:function azI(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bJt:function bJt(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
aa8:function aa8(){},
as_:function as_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=_.f=$
_.w=1
_.y=_.x=$},
cEq(d){var x,w=J.hB(d,y.R)
for(x=0;x<d;++x)w[x]=new A.ar1()
return new A.a2C(w,0)},
dcw(){var x,w,v=J.kM(5,y.O)
for(x=0;x<5;++x)v[x]=A.cEq(0)
w=J.kM(64,y.u)
for(x=0;x<64;++x)w[x]=new A.ar2()
return new A.a2s(v,w)},
ar1:function ar1(){this.b=this.a=0},
ar2:function ar2(){this.b=this.a=0},
a2C:function a2C(d,e){this.a=d
this.b=e},
a2s:function a2s(d,e){var _=this
_.a=d
_.b=!1
_.c=0
_.e=_.d=!1
_.f=e},
a2D:function a2D(){var _=this
_.b=_.a=null
_.e=_.d=0},
ar3:function ar3(d){this.a=d
this.b=null},
VI:function VI(d,e){this.a=d
this.b=e},
VJ:function VJ(d,e){var _=this
_.b=_.a=0
_.c=null
_.e=_.d=!1
_.f=d
_.r=null
_.w=""
_.y=0
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
as0:function as0(d,e){var _=this
_.b=_.a=0
_.c=null
_.e=_.d=!1
_.f=d
_.r=null
_.w=""
_.y=0
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
bJu:function bJu(d){this.a=null
this.b=d
this.c=null},
bJx:function bJx(d,e){this.a=d
this.b=e},
bJv:function bJv(d,e){this.a=d
this.b=e},
bJw:function bJw(d,e,f){this.a=d
this.b=e
this.c=f},
cZI(d,e){var x
if(e===D.q8)x=A.qj(d)>0
else x=d.gcm()===D.ah&&!d.gyg()
return x},
d_Z(d,e){return e>=5&&e<=8?d.gaV():d.gbU()},
d_Y(d,e){return e>=5&&e<=8?d.gbU():d.gaV()},
dzc(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t
if(!A.cZI(d,f))return!1
x=d.bK()
w=A.qj(d)
v=new A.c7v(x,w,A.d_Z(d,o),A.d_Y(d,o))
v.bto(d,o)
u=e.bK()
t=e.a.gjA()
if(f===D.q8){if(A.qj(e)!==w)return!1
A.dt1(v,u,t,g,h,i,j,m,n)
return!0}if(e.gcm()!==D.ah||e.a.c!==d.a.c)return!1
switch(f.a){case 1:A.dt0(v,u,t,g,h,i,j,k,l)
return!0
case 3:A.dsZ(v,u,t,g,h,i,j,k,l)
return!0
case 2:A.dt_(v,u,t,g,h,i,j,k,l)
return!0
case 0:return!1}},
dt1(d,e,f,g,h,i,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.b,k=d.a,j=new Int32Array(i)
for(x=d.f,w=0;w<i;++w){v=a1[w]
x===$&&C.d()
j[w]=v*x}for(x=e.$flags|0,v=d.e,u=d.r,t=g*l,s=0;s<a0;++s){r=a2[s]
v===$&&C.d()
u===$&&C.d()
q=v+r*u
p=(h+s)*f+t
for(w=0;w<i;++w){o=q+j[w]
for(n=0;n<l;++n,p=m){m=p+1
r=k[o+n]
x&2&&C.z(e)
e[p]=r}}}},
dt0(d,e,f,g,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m=d.b,l=d.c-1,k=d.d-1,j=new Int32Array(a1),i=new Int32Array(a1),h=new Float64Array(a1)
for(x=0;x<a1;++x){w=x*a3
v=D.e.G(w)
h[x]=w-v
u=d.f
u===$&&C.d()
j[x]=v*u
i[x]=D.c.aF(v+1,0,l)*u}for(u=d.a,t=g*m,s=0;s<a2;++s){r=s*a4
q=D.e.G(r)
p=D.c.aF(q+1,0,k)
o=d.e
o===$&&C.d()
n=d.r
n===$&&C.d()
A.ds0(u,o+q*n,o+p*n,e,(a0+s)*f+t,m,a1,j,i,h,r-q)}},
ds0(d,e,f,g,h,i,j,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=g.$flags|0,w=0;w<j;++w){v=a0[w]
u=e+v
t=a1[w]
s=e+t
r=f+v
q=f+t
p=a2[w]
for(o=0;o<i;++o,h=k){n=d[u+o]
m=d[s+o]
l=d[r+o]
k=h+1
v=D.e.G(n+p*(m-n+a3*(n+d[q+o]-l-m))+a3*(l-n))
x&2&&C.z(g)
g[h]=v}}},
dsZ(a4,a5,a6,a7,a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a4.b,a2=new Int32Array(a9),a3=new Int32Array(a9)
for(x=0;x<a9;x=v){w=D.e.G(x*b1)
v=x+1
u=D.e.G(v*b1)
if(u===w)++u
a2[x]=w
a3[x]=u}t=new Int32Array(a1)
for(s=a5.$flags|0,r=a4.a,q=a7*a1,p=0;p<b0;p=n){o=D.e.G(p*b2)
n=p+1
m=D.e.G(n*b2)
if(m===o)++m
l=(a8+p)*a6+q
for(k=m-o,x=0;x<a9;++x){w=a2[x]
u=a3[x]
for(j=0;j<a1;++j)t[j]=0
for(i=u-w,h=o;h<m;++h){g=a4.e
g===$&&C.d()
f=a4.r
f===$&&C.d()
e=a4.f
e===$&&C.d()
A.dtD(r,g+h*f+w*e,i,e,a1,t)}d=1/(k*i)
for(j=0;j<a1;++j,l=a0){a0=l+1
i=D.e.G(t[j]*d)
s&2&&C.z(a5)
a5[l]=i}}}},
dtD(d,e,f,g,h,i){var x,w,v,u,t
for(x=i.$flags|0,w=0;w<f;++w,e+=g)for(v=0;v<h;++v){u=i[v]
t=d[e+v]
x&2&&C.z(i)
i[v]=u+t}},
dt_(b4,b5,b6,b7,b8,b9,c0,c1,c2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b4.b,a9=b4.a,b0=b9*4,b1=new Int32Array(b0),b2=new Uint8Array(b0),b3=new Float64Array(b9)
for(b0=b4.f,x=b4.c,w=0;w<b9;++w){v=w*c1
u=D.e.G(v)
b3[w]=v-u
for(t=w*4,s=0;s<4;++s){r=u+s-1
q=t+s
b0===$&&C.d()
b1[q]=r*b0
b2[q]=r<0||r>=x?0:1}}p=new Int32Array(4)
o=new Uint8Array(4)
n=new Int32Array(16)
m=new Float64Array(4)
for(b0=b5.$flags|0,x=b7*a8,t=b4.e,q=b4.r,l=b4.d,k=0;k<c0;++k){j=k*c2
i=D.e.G(j)
h=j-i
for(s=0;s<4;++s){g=i+s-1
t===$&&C.d()
q===$&&C.d()
p[s]=t+g*q
o[s]=g<0||g>=l?0:1}f=(b8+k)*b6+x
for(w=0;w<b9;++w){e=w*4
d=p[1]+b1[e+1]
for(a0=0;a0<4;++a0)for(a1=a0*4,s=0;s<4;++s){a2=o[a0]===0||b2[e+s]===0?d:p[a0]+b1[e+s]
n[a1+s]=a2}a3=b3[w]
for(a4=0;a4<a8;++a4,f=a7){for(a0=0;a0<4;++a0){a5=a0*4
m[a0]=A.cXW(a3,a9[n[a5]+a4],a9[n[a5+1]+a4],a9[n[a5+2]+a4],a9[n[a5+3]+a4])}a6=A.cXW(h,m[0],m[1],m[2],m[3])
a7=f+1
if(a6<0)e=0
else e=a6>255?255:D.e.G(a6)
b0&2&&C.z(b5)
b5[f]=e}}}},
cXW(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
c7v:function c7v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=_.f=_.e=$},
cva(e8,e9,f0,f1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5=null,e6="ifd0",e7={}
e7.a=f0
if(e8.gyg())e7.a=D.q8
x=1
if(e8.gtM().h(0,e6).a.R(274)&&e8.gtM().h(0,e6).ghx()!==1){w=e8.gtM().h(0,e6).ghx()
w.toString
if(w>=2&&w<=8&&D.b.ds(e8.ghJ(),new A.cvb(e7)))x=w
else e8=A.cue(e8)}v=A.d_Z(e8,x)
u=A.d_Y(e8,x)
if(e9<=0)e9=D.e.ao(f1*(u/v))
if(f1<=0)f1=D.e.ao(e9*(v/u))
if(f1===v&&e9===u)return x===1?C.t6(e8,!1,!1):A.cue(e8)
t=new Int32Array(f1)
for(s=0;s<f1;++s)t[s]=D.c.dn(s*v,f1)
r=new Int32Array(e9)
for(q=0;q<e9;++q)r[q]=D.c.dn(q*u,e9)
p=e8.ghJ().length
for(w=x>=5,o=y.g,n=x<=8,m=e5,l=0;l<p;++l){k=e8.x
j=(k===$?e8.x=C.a([],o):k)[l]
i=A.a2I(j,e9,!0,f1)
h=m==null
if(!h)m.pH(i)
if(h)m=i
h=w&&n
g=j.a
if(h){h=g==null?e5:g.a
if(h==null)h=0}else{h=g==null?e5:g.b
if(h==null)h=0}f=h/e9
if(w&&n){h=g==null?e5:g.b
if(h==null)h=0}else{h=g==null?e5:g.a
if(h==null)h=0}e=h/f1
if(A.dzc(j,i,e7.a,0,0,f1,e9,e,f,t,r,x))continue
h=e7.a
if(h===D.v5){d=j.ie(0,0)
for(q=0;q<e9;q=a1){a0=D.e.G(q*f)
a1=q+1
a2=D.e.G(a1*f)
if(a2===a0)++a2
for(s=0;s<f1;s=a4){a3=D.e.G(s*e)
a4=s+1
a5=D.e.G(a4*e)
if(a5===a3)++a5
for(a6=a0,a7=0,a8=0,a9=0,b0=0,b1=0;a6<a2;++a6)for(b2=a3;b2<a5;++b2,++b1){h=j.a
if(h!=null)h.cZ(b2,a6,d)
a7+=d.gaz()
a8+=d.gaM()
a9+=d.gaL()
b0+=d.gaJ()}b3=1/b1
h=i.a
if(h!=null)h.iP(s,q,a7*b3,a8*b3,a9*b3,b0*b3)}}}else if(h===D.q8){h=j.a
if((h==null?e5:h.gdV())!=null)for(q=0;q<e9;++q){b4=r[q]
for(s=0;s<f1;++s){h=t[s]
g=j.a
h=g==null?e5:D.e.G(g.nn(h,b4).gcP())
if(h==null)h=0
g=i.a
if(g!=null)g.lV(s,q,h)}}else{d=j.ie(0,0)
for(q=0;q<e9;++q){a6=r[q]
for(s=0;s<f1;++s){h=t[s]
g=j.a
if(g!=null)g.cZ(h,a6,d)
h=d.gaz()
g=d.gaM()
b5=d.gaL()
b6=d.gaJ()
b7=i.a
if(b7!=null)b7.iP(s,q,h,g,b5,b6)}}}}else if(h===D.axo){b8=j.ie(0,0)
b9=j.ie(0,0)
c0=j.ie(0,0)
c1=j.ie(0,0)
h=j.a
g=h==null
b5=g?e5:h.a
c2=(b5==null?0:b5)-1
h=g?e5:h.b
c3=(h==null?0:h)-1
for(q=0;q<e9;++q){c4=q*f
c5=D.e.G(c4)
c6=c4-c5
c7=D.c.aF(c5+1,0,c3)
for(s=0;s<f1;++s){c8=s*e
c9=D.e.G(c8)
d0=c8-c9
d1=D.c.aF(c9+1,0,c2)
h=j.a
if(h!=null)h.cZ(c9,c5,b8)
h=j.a
if(h!=null)h.cZ(c9,c7,b9)
h=j.a
if(h!=null)h.cZ(d1,c5,c0)
h=j.a
if(h!=null)h.cZ(d1,c7,c1)
h=b8.gaz()
g=c0.gaz()
b5=b9.gaz()
b6=c1.gaz()
b7=b8.gaM()
d2=c0.gaM()
d3=b9.gaM()
d4=c1.gaM()
d5=b8.gaL()
d6=c0.gaL()
d7=b9.gaL()
d8=c1.gaL()
d9=b8.gaJ()
e0=c0.gaJ()
e1=b9.gaJ()
e2=c1.gaJ()
e3=i.a
if(e3!=null)e3.iP(s,q,h+d0*(g-h+c6*(h+b6-b5-g))+c6*(b5-h),b7+d0*(d2-b7+c6*(b7+d4-d3-d2))+c6*(d3-b7),d5+d0*(d6-d5+c6*(d5+d8-d7-d6))+c6*(d7-d5),d9+d0*(e0-d9+c6*(d9+e2-e1-e0))+c6*(e1-d9))}}}else for(q=0;q<e9;++q){e4=q*f
for(s=0;s<f1;++s)i.Dj(s,q,j.aQe(s*e,e4,e7.a))}}if(x!==1)m.gtM().h(0,e6).shx(e5)
m.toString
return m},
cvb:function cvb(d){this.a=d},
dwp(d,e){switch(e.a){case 0:A.cwm(d)
break
case 1:A.d_e(d)
break
case 2:A.dws(d)
break}return d},
d_e(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a1.ghJ().length
for(x=y.g,w=0;w<a0;++w){v=a1.x
u=(v===$?a1.x=C.a([],x):v)[w]
t=u.a
s=t==null
r=s?d:t.a
if(r==null)r=0
q=s?d:t.b
if(q==null)q=0
p=D.c.ac(q,2)
if(!s){o=J.dz(t.ga4(t))
if(o==null){t=u.a
t=t==null?d:t.ga4(t)
if(t==null)t=D.m.ga4(new Uint8Array(0))
o=J.dz(t)}n=u.a.gjA()
m=new Uint8Array(n)
for(l=q-1,k=0;k<p;++k,--l){j=k*n
i=l*n
D.m.bV(m,0,n,o,j)
D.m.bV(o,j,j+n,o,i)
D.m.dd(o,i,i+n,m)}continue}t=a1.a
if((t==null?d:t.gdV())!=null)for(l=q-1,k=0;k<p;++k,--l)for(h=0;h<r;++h){t=u.a
g=t==null?d:t.cZ(h,k,d)
if(g==null)g=new C.fn()
t=u.a
f=t==null?d:t.cZ(h,l,d)
if(f==null)f=new C.fn()
e=g.gcP()
g.scP(f.gcP())
f.scP(e)}else for(l=q-1,k=0;k<p;++k,--l)for(h=0;h<r;++h){t=u.a
g=t==null?d:t.cZ(h,k,d)
if(g==null)g=new C.fn()
t=u.a
f=t==null?d:t.cZ(h,l,d)
if(f==null)f=new C.fn()
e=g.gaz()
g.saz(f.gaz())
f.saz(e)
e=g.gaM()
g.saM(f.gaM())
f.saM(e)
e=g.gaL()
g.saL(f.gaL())
f.saL(e)
e=g.gaJ()
g.saJ(f.gaJ())
f.saJ(e)}}return a1},
cwm(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.ghJ().length
for(x=y.g,w=0;w<d;++w){v=a0.x
u=(v===$?a0.x=C.a([],x):v)[w]
t=u.a
s=t==null
r=s?e:t.a
if(r==null)r=0
q=s?e:t.b
if(q==null)q=0
p=D.c.ac(r,2)
o=A.qj(u)
if(o>0){t=u.a
n=t==null?e:J.dz(t.ga4(t))
if(n==null){t=u.a
t=t==null?e:t.ga4(t)
if(t==null)t=D.m.ga4(new Uint8Array(0))
n=J.dz(t)}m=u.a.gjA()
for(l=0;l<q;++l)A.d0r(n,l*m,r,o)
continue}t=a0.a
if((t==null?e:t.gdV())!=null)for(k=r-1,l=0;l<q;++l)for(j=k,i=0;i<p;++i,--j){t=u.a
h=t==null?e:t.cZ(i,l,e)
if(h==null)h=new C.fn()
t=u.a
g=t==null?e:t.cZ(j,l,e)
if(g==null)g=new C.fn()
f=h.gcP()
h.scP(g.gcP())
g.scP(f)}else for(k=r-1,l=0;l<q;++l)for(j=k,i=0;i<p;++i,--j){t=u.a
h=t==null?e:t.cZ(i,l,e)
if(h==null)h=new C.fn()
t=u.a
g=t==null?e:t.cZ(j,l,e)
if(g==null)g=new C.fn()
f=h.gaz()
h.saz(g.gaz())
g.saz(f)
f=h.gaM()
h.saM(g.gaM())
g.saM(f)
f=h.gaL()
h.saL(g.gaL())
g.saL(f)
f=h.gaJ()
h.saJ(g.gaJ())
g.saJ(f)}}return a0},
dws(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.ghJ().length
for(x=y.g,w=0;w<e;++w){v=d.x
u=(v===$?d.x=C.a([],x):v)[w]
t=u.a
s=t==null
r=s?f:t.a
if(r==null)r=0
q=s?f:t.b
if(q==null)q=0
p=A.qj(u)
if(p>0){t=u.a
t=t==null?f:J.dz(t.ga4(t))
if(t==null){t=u.a
t=t==null?f:t.ga4(t)
if(t==null)t=D.m.ga4(new Uint8Array(0))
t=J.dz(t)}A.d0r(t,0,r*q,p)
continue}t=u.a
if((t==null?f:t.gdV())!=null)for(o=q-1,n=r-1,m=0;m<=o;++m,--o){l=m===o?D.c.ac(r,2):r
for(k=n,j=0;j<l;++j,--k){t=u.a
i=t==null?f:t.cZ(j,m,f)
if(i==null)i=new C.fn()
t=u.a
h=t==null?f:t.cZ(k,o,f)
if(h==null)h=new C.fn()
g=i.gcP()
i.scP(h.gcP())
h.scP(g)}}else for(o=q-1,n=r-1,m=0;m<=o;++m,--o){l=m===o?D.c.ac(r,2):r
for(k=n,j=0;j<l;++j,--k){t=u.a
i=t==null?f:t.cZ(j,m,f)
if(i==null)i=new C.fn()
t=u.a
h=t==null?f:t.cZ(k,o,f)
if(h==null)h=new C.fn()
g=i.gaz()
i.saz(h.gaz())
h.saz(g)
g=i.gaM()
i.saM(h.gaM())
h.saM(g)
g=i.gaL()
i.saL(h.gaL())
h.saL(g)
g=i.gaJ()
i.saJ(h.gaJ())
h.saJ(g)}}}return d},
b7s:function b7s(d,e){this.a=d
this.b=e},
a4L(d,e){return new A.bom(d,new Uint8Array(e))},
bom:function bom(d,e){this.a=0
this.b=d
this.c=e},
cIG(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gbU()
if(k==null)k=e.gaV()
if(h==null)h=d.gbU()<e.gbU()?d.gbU():e.gbU()
if(g==null)g=d.gaV()<e.gaV()?d.gaV():e.gaV()
x=f===B.te
if(!x&&d.gyg())d=d.b8I(d.gqb())
w=k/g
v=l/h
u=y.q
t=J.kM(g,u)
for(s=0;s<g;++s)t[s]=n+D.e.G(s*w)
r=J.kM(h,u)
for(q=0;q<h;++q)r[q]=m+D.e.G(q*v)
if(x)A.dqr(e,d,i,j,h,g,r,t,null,D.Me)
else A.dpT(e,d,i,j,h,g,r,t,f,!1,null,D.Me)
return d},
dqr(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.gbU(),d=a2.gaV(),a0=A.qj(a1)
if(a0>0&&A.qj(a2)===a0&&a1.gcm()===a2.gcm()&&a1.gyg()===a2.gyg()&&a3>=0&&a4>=0){x=a1.bK()
w=a2.bK()
v=a1.a.gjA()
u=a2.a.gjA()
t=Math.min(a5,e-a3)
s=w.$flags|0
r=a3*a0
q=0
for(;;){if(!(q<a6&&a4+q<d))break
p=a8[q]*v
o=(a4+q)*u+r
for(n=0;n<t;++n){m=p+a7[n]*a0
for(l=0;l<a0;++l,o=k){k=o+1
j=x[m+l]
s&2&&C.z(w)
w[o]=j}}++q}return}for(i=null,q=0;q<a6;++q)for(h=a4+q,s=h>=d,n=0;n<a5;++n){g=a3+n
if(g>=e||s)continue
r=a7[n]
j=a8[q]
f=a1.a
i=f==null?null:f.cZ(r,j,i)
if(i==null)i=new C.fn()
a2.Dj(g,h,i)}},
dpT(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.cZ(t,s,x)
if(x==null)x=new C.fn()
A.dvZ(e,f+u,v,x,l,!1,n,o)}},
dvZ(a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
if(!a6.bcm(a7,a8))return a6
if(b0===B.te||a6.gyg())if(a6.bcm(a7,a8)){a6.nn(a7,a8).fG(a9)
return a6}x=a9.ghf()
w=a9.gh2()
v=a9.gh6()
u=a9.gt(a9)<4?1:a9.gei()
if(u===0)return a6
t=a6.nn(a7,a8)
s=t.ghf()
r=t.gh2()
q=t.gh6()
p=t.gei()
switch(b0.a){case 0:return a6
case 1:break
case 2:x=Math.max(s,x)
w=Math.max(r,w)
v=Math.max(q,v)
break
case 3:x=1-(1-x)*(1-s)
w=1-(1-w)*(1-r)
v=1-(1-v)*(1-q)
break
case 4:o=u*p
n=1-p
m=1-u
l=x*n+s*m
k=w*n+r*m
j=v*n+q*m
m=D.e.aF(u,0.01,1)
n=u<0
i=n?0:1
h=D.e.aF(x/m*i,0,0.99)
i=D.e.aF(u,0.01,1)
m=n?0:1
g=D.e.aF(w/i*m,0,0.99)
m=D.e.aF(u,0.01,1)
n=n?0:1
f=D.e.aF(v/m*n,0,0.99)
n=s*u
m=r*u
i=q*u
e=o<x*p+n?0:1
d=o<w*p+m?0:1
a0=o<v*p+i?0:1
x=(o+l)*(1-e)+(n/(1-h)+l)*e
w=(o+k)*(1-d)+(m/(1-g)+k)*d
v=(o+j)*(1-a0)+(i/(1-f)+j)*a0
break
case 5:x=s+x
w=r+w
v=q+v
break
case 6:x=Math.min(s,x)
w=Math.min(r,w)
v=Math.min(q,v)
break
case 7:x=s*x
w=r*w
v=q*v
break
case 8:x=x!==0?1-(1-s)/x:0
w=w!==0?1-(1-r)/w:0
v=v!==0?1-(1-q)/v:0
break
case 9:n=1-p
m=1-u
i=x*n
a1=s*m
x=2*s<p?2*x*s+i+a1:u*p-2*(p-s)*(u-x)+i+a1
i=w*n
a1=r*m
w=2*r<p?2*w*r+i+a1:u*p-2*(p-r)*(u-w)+i+a1
n=v*n
m=q*m
v=2*q<p?2*v*q+n+m:u*p-2*(p-q)*(u-v)+n+m
break
case 10:n=p===0
if(n)x=0
else{m=s/p
x=s*(u*m+2*x*(1-m))+x*(1-p)+s*(1-u)}if(n)w=0
else{m=r/p
w=r*(u*m+2*w*(1-m))+w*(1-p)+r*(1-u)}if(n)v=0
else{n=q/p
v=q*(u*n+2*v*(1-n))+v*(1-p)+q*(1-u)}break
case 11:n=2*x
m=1-p
i=1-u
a1=x*m
a2=s*i
x=n<u?n*s+a1+a2:u*p-2*(p-s)*(u-x)+a1+a2
n=2*w
a1=w*m
a2=r*i
w=n<u?n*r+a1+a2:u*p-2*(p-r)*(u-w)+a1+a2
n=2*v
m=v*m
i=q*i
v=n<u?n*q+m+i:u*p-2*(p-q)*(u-v)+m+i
break
case 12:x=Math.abs(x-s)
w=Math.abs(w-r)
v=Math.abs(v-q)
break
case 13:x=s-x
w=r-w
v=q-v
break
case 14:x=x!==0?s/x:0
w=w!==0?r/w:0
v=v!==0?q/v:0
break}a3=1-u
a4=u+p*a3
a5=a4>0?1/a4:0
t.shf((x*u+s*p*a3)*a5)
t.sh2((w*u+r*p*a3)*a5)
t.sh6((v*u+q*p*a3)*a5)
t.sei(a4)
return a6},
d_c(d,e,f,g,h,i,j){var x,w=D.e.aF(Math.min(g,h),0,d.gbU()-1),v=D.e.aF(Math.min(i,j),0,d.gaV()-1),u=D.e.aF(Math.max(g,h),0,d.gbU()-1),t=D.e.aF(Math.max(i,j),0,d.gaV()-1),s=d.a.qp(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.l();)x.fG(f)
return d},
cE2(d){var x=new C.Iq(C.t(y.N,y.P))
x.bk(d)
return x},
dbt(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
for(x=1;x<=a3;)x=x<<1>>>0
x=x>>>1
w=x>>>1
v=C.a([0,0],y.t)
for(u=a4.$flags|0,t=x,x=w;x>=1;t=x,x=w){s=a5+a9*(a8-t)
r=a9*x
q=a9*t
p=a7*x
o=a7*t
for(n=(a6&x)>>>0!==0,m=a7*(a6-t),l=a5;l<=s;l+=q){k=l+m
for(j=l;j<=k;j+=o){i=j+p
h=j+r
g=h+p
if(a2){A.a1D(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a1D(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a1D(f,d,v)
a1=v[0]
u&2&&C.z(a4)
a4[j]=a1
a4[i]=v[1]
A.a1D(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.a1E(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a1E(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a1E(f,d,v)
a1=v[0]
u&2&&C.z(a4)
a4[j]=a1
a4[i]=v[1]
A.a1E(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.a1D(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.z(a4)
a4[h]=a1}else{A.a1E(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.z(a4)
a4[h]=a1}u&2&&C.z(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.a1D(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.z(a4)
a4[i]=n}else{A.a1E(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.z(a4)
a4[i]=n}u&2&&C.z(a4)
a4[j]=f}}w=x>>>1}},
a1D(d,e,f){var x,w,v,u,t=$.od()
t.$flags&2&&C.z(t)
t[0]=d
x=$.p5()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.U(v,1)
f[0]=u
f[1]=u-v},
a1E(d,e,f){var x=d-D.c.U(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
dwo(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=268435456,j=C.cEK()
if(j.lc(d))return j
x=A.cSm(l)
if(x.lc(d))return x
w=new A.b9r(k)
if(w.lc(d))return w
v=new A.bJu(k)
if(v.lc(d))return v
u=new A.bFa(k)
if(u.b4x(C.d5(d,!1,l,0),!0)!=null)return u
t=new A.brh(k)
if(t.lc(d))return t
if(A.dbs(d))return new A.b6D(k)
s=A.d8p(!1,l)
if(s.lc(d))return s
r=C.tc(l,y.N)
q=new A.bpL(r,k)
if(q.lc(d))return q
p=new A.bF_(k)
o=C.d5(d,!1,l,0)
r=p.a=new A.az5(B.C1)
r.bk(o)
if(r.bcM())return p
n=new A.bbk(k)
if(n.lc(d))return n
m=new A.brL(k)
if(m.lc(d))return m
return l},
d_4(d){var x=A.dwo(d)
return x==null?null:x.oO(d,null)},
akG(d,e){return(d&65535)*e+((d>>>16)*e&65535)*65536>>>0},
dlU(d,e,f,g,h,i){A.dlR(i,d,e,f,g,h,!0,i)},
dlV(d,e,f,g,h,i){A.dlS(i,d,e,f,g,h,!0,i)},
dlT(d,e,f,g,h,i){A.dlQ(i,d,e,f,g,h,!0,i)},
VH(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.Q(d.a,d.d+x)
v=J.Q(e.a,e.d+x)
J.dS(f.a,f.d+x,w+v)}},
dlR(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=C.d5(d,!1,v,u),r=C.d5(k,!1,v,u),q=A.df(r,v,0)
if(h===0){r.j(0,0,J.Q(s.a,s.d))
A.VH(A.df(s,v,1),q,A.df(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.VH(s,A.df(q,v,x),r,1,!0)
A.VH(A.df(s,v,1),q,A.df(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
dlS(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=C.d5(d,!1,x,w),t=C.d5(k,!1,x,w),s=A.df(t,x,0)
if(h===0){t.j(0,0,J.Q(u.a,u.d))
A.VH(A.df(u,x,1),s,A.df(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
while(h<v){A.VH(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
dlQ(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=C.d5(d,!1,s,r),o=C.d5(k,!1,s,r),n=A.df(o,s,0)
if(h===0){o.j(0,0,J.Q(p.a,p.d))
A.VH(A.df(p,s,1),n,A.df(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.VH(p,A.df(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.Q(n.a,n.d+(w-1))+J.Q(n.a,n.d+v)-J.Q(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.Q(p.a,p.d+w)
J.dS(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
a2I(d,e,f,g){var x,w,v,u,t=null,s=d.e
s=s==null?t:C.a1z(s)
x=d.c
x=x==null?t:C.cPD(x)
w=d.w
v=d.r
u=d.f
u=u==null?t:new C.ut(new Uint8Array(C.bl(u.a)))
w=new C.lR(t,x,s,u,v,w,d.y,d.z)
w.bsP(d,e,f,g)
return w},
cPV(d,e,f,g,h){var x=null,w=new C.lR(x,x,x,x,0,D.bI,0,0)
w.bsO(x,d,0,x,D.ah,0,0,D.bI,e,x,0,f,g,x,D.ah,x,x,h,!1)
return w},
qj(d){var x,w,v,u=d.a
if(u==null)return 0
x=u.gqX()
if(x==null)x=0
w=x*u.c
if((w&7)!==0)return 0
v=D.c.U(w,3)
return u.gjA()===d.gbU()*v?v:0},
dzV(d,e,f,g){var x,w,v,u,t,s
for(x=d.$flags|0,w=0;w<g;++w){v=e+w
u=d[v]
t=f+w
s=d[t]
x&2&&C.z(d)
d[v]=s
d[t]=u}},
d0r(d,e,f,g){var x,w
for(x=e+(f-1)*g,w=e;w<x;w+=g,x-=g)A.dzV(d,w,x,g)},
cue(d){var x,w="ifd0"
if(!d.gtM().h(0,w).a.R(274)||d.gtM().h(0,w).ghx()===1)return C.t6(d,!1,!1)
switch(d.gtM().h(0,w).ghx()){case 2:x=A.cwm(C.t6(d,!1,!1))
break
case 3:x=A.dwp(C.t6(d,!1,!1),B.ath)
break
case 4:x=A.d_e(C.t6(d,!1,!1))
break
case 5:x=A.cwm(A.cvc(d,90))
break
case 6:x=A.cvc(d,90)
break
case 7:x=A.cwm(A.cvc(d,-90))
break
case 8:x=A.cvc(d,-90)
break
default:x=C.t6(d,!1,!1)
break}x.e=C.a1z(d.gtM())
x.gtM().h(0,w).shx(null)
return x},
cZQ(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
a2=D.c.G(D.c.aF(a2,0,d.gbU()-1))
a3=D.c.G(D.c.aF(a3,0,d.gaV()-1))
if(a2+a1>d.gbU())a1=d.gbU()-a2
if(a3+a0>d.gaV())a0=d.gaV()-a3
x=d.ghJ().length
for(w=y.g,v=e,u=0;u<x;++u){t=d.x
s=(t===$?d.x=C.a([],w):t)[u]
r=v==null
q=r?e:v.a1g()
if(q==null)q=A.a2I(s,a0,!0,a1)
if(r)v=q
p=A.qj(s)
r=!1
if(p>0)if(A.qj(q)===p){r=q.a
r=r==null?e:r.gcm()
if(r==null)r=D.ah
o=s.a
o=o==null?e:o.gcm()
r=r===(o==null?D.ah:o)}if(r){r=s.a
n=r==null?e:J.dz(r.ga4(r))
if(n==null){r=s.a
r=r==null?e:r.ga4(r)
if(r==null)r=D.m.ga4(new Uint8Array(0))
n=J.dz(r)}r=q.a
m=r==null?e:J.dz(r.ga4(r))
if(m==null){r=q.a
r=r==null?e:r.ga4(r)
if(r==null)r=D.m.ga4(new Uint8Array(0))
m=J.dz(r)}l=s.a.gjA()
k=a1*p
for(r=a2*p,j=0;j<a0;j=i){i=j+1
D.m.bV(m,j*k,i*k,n,(a3+j)*l+r)}}else for(r=q.a,r=r.gN(r);r.l();){h=r.gq()
o=h.gll()
g=h.glR()
f=s.a
o=f==null?e:f.cZ(a2+o,a3+g,e)
h.fG(o==null?new C.fn():o)}}v.toString
return v},
cvc(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=D.c.Z(b0,360)
a9.gyg()
if(D.c.Z(a8,90)===0)switch(D.c.ac(a8,90)){case 1:return A.dtf(a9)
case 2:return A.dtd(a9)
case 3:return A.dte(a9)
default:return C.t6(a9,!1,!1)}x=a8*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a9.gbU()
t=a9.gbU()
s=a9.gaV()
r=a9.gaV()
q=0.5*a9.gbU()
p=0.5*a9.gaV()
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a9.ghJ().length
for(u=y.g,l=a9.f,k=a7,j=0;j<m;++j){i=a9.x
h=(i===$?a9.x=C.a([],u):i)[j]
t=k==null
g=t?a7:k.a1g()
if(g==null){f=D.e.G(s)
g=A.a2I(a9,D.e.G(r),!0,f)}if(t)k=g
e=h.f
if(e==null)e=l
if(e!=null){t=g.a
if(t!=null)t.nL(0,e)}for(t=g.a,t=t.gN(t);t.l();){d=t.gq()
a0=d.gll()
a1=d.glR()
f=a0-o
a2=a1-n
a3=q+f*w+a2*v
a4=p-f*v+a2*w
f=!1
if(a3>=0)if(a4>=0){a2=h.a
a5=a2==null
a6=a5?a7:a2.a
if(a3<(a6==null?0:a6)){f=a5?a7:a2.b
f=a4<(f==null?0:f)}}if(f)g.Dj(a0,a1,h.aQe(a3,a4,D.q8))}}k.toString
return k},
dtf(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(x=d.ghJ(),w=x.length,v=g,u=0;u<x.length;x.length===w||(0,C.q)(x),++u){t=x[u]
s=v==null
r=s?g:v.a1g()
if(r==null){q=t.a
p=q==null
o=p?g:q.b
if(o==null)o=0
q=p?g:q.a
r=A.a2I(t,q==null?0:q,!0,o)}if(s)v=r
s=t.a
s=s==null?g:s.b
n=(s==null?0:s)-1
m=A.qj(t)
if(m>0&&A.qj(r)===m){s=t.a
q=s==null
p=q?g:s.a
l=-(p==null?0:p)*m
k=q?g:J.dz(s.ga4(s))
if(k==null){s=t.a
s=s==null?g:s.ga4(s)
if(s==null)s=D.m.ga4(new Uint8Array(0))
k=J.dz(s)}s=r.a
j=s==null?g:J.dz(s.ga4(s))
if(j==null){s=r.a
s=s==null?g:s.ga4(s)
if(s==null)s=D.m.ga4(new Uint8Array(0))
j=J.dz(s)}i=0
for(;;){s=r.a
q=s==null
p=q?g:s.b
if(!(i<(p==null?0:p)))break
p=t.a
p=p==null?g:p.a
if(p==null)p=0
o=q?g:s.a
if(o==null)o=0
s=q?g:s.a
if(s==null)s=0
A.cHY(k,(n*p+i)*m,l,j,i*o*m,s,m);++i}continue}i=0
for(;;){s=r.a
s=s==null?g:s.b
if(!(i<(s==null?0:s)))break
h=0
for(;;){s=r.a
s=s==null?g:s.a
if(!(h<(s==null?0:s)))break
s=t.a
s=s==null?g:s.cZ(i,n-h,g)
r.Dj(h,i,s==null?new C.fn():s);++h}++i}}v.toString
return v},
dtd(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null
for(x=d.ghJ(),w=x.length,v=h,u=0;u<x.length;x.length===w||(0,C.q)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?h:s.a
p=(q==null?0:q)-1
s=r?h:s.b
o=(s==null?0:s)-1
s=v==null
n=s?h:v.a1g()
if(n==null)n=C.t6(t,!0,!0)
if(s)v=n
m=A.qj(t)
if(m>0&&A.qj(n)===m){s=t.a
r=s==null
q=r?h:s.a
if(q==null)q=0
l=r?h:s.b
k=q*(l==null?0:l)
s=r?h:J.dz(s.ga4(s))
if(s==null){s=t.a
s=s==null?h:s.ga4(s)
if(s==null)s=D.m.ga4(new Uint8Array(0))
s=J.dz(s)}r=n.a
r=r==null?h:J.dz(r.ga4(r))
if(r==null){r=n.a
r=r==null?h:r.ga4(r)
if(r==null)r=D.m.ga4(new Uint8Array(0))
r=J.dz(r)}A.cHY(s,(k-1)*m,-m,r,0,k,m)
continue}j=0
for(;;){s=n.a
s=s==null?h:s.b
if(!(j<(s==null?0:s)))break
s=o-j
i=0
for(;;){r=n.a
r=r==null?h:r.a
if(!(i<(r==null?0:r)))break
r=t.a
r=r==null?h:r.cZ(p-i,s,h)
n.Dj(i,j,r==null?new C.fn():r);++i}++j}}v.toString
return v},
dte(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(x=d.ghJ(),w=x.length,v=g,u=0;u<x.length;x.length===w||(0,C.q)(x),++u){t=x[u]
s=d.a
s=s==null?g:s.a
r=(s==null?0:s)-1
s=v==null
q=s?g:v.a1g()
if(q==null){p=t.a
o=p==null
n=o?g:p.b
if(n==null)n=0
p=o?g:p.a
q=A.a2I(t,p==null?0:p,!0,n)}if(s)v=q
m=A.qj(t)
s=!1
if(m>0)if(A.qj(q)===m){s=t.a
s=s==null?g:s.a
if(s==null)s=0
p=d.a
p=p==null?g:p.a
s=s===(p==null?0:p)}if(s){s=t.a
p=s==null
o=p?g:s.a
l=(o==null?0:o)*m
k=p?g:J.dz(s.ga4(s))
if(k==null){s=t.a
s=s==null?g:s.ga4(s)
if(s==null)s=D.m.ga4(new Uint8Array(0))
k=J.dz(s)}s=q.a
j=s==null?g:J.dz(s.ga4(s))
if(j==null){s=q.a
s=s==null?g:s.ga4(s)
if(s==null)s=D.m.ga4(new Uint8Array(0))
j=J.dz(s)}i=0
for(;;){s=q.a
p=s==null
o=p?g:s.b
if(!(i<(o==null?0:o)))break
o=p?g:s.a
if(o==null)o=0
s=p?g:s.a
if(s==null)s=0
A.cHY(k,(r-i)*m,l,j,i*o*m,s,m);++i}continue}i=0
for(;;){s=q.a
s=s==null?g:s.b
if(!(i<(s==null?0:s)))break
s=r-i
h=0
for(;;){p=q.a
p=p==null?g:p.a
if(!(h<(p==null?0:p)))break
p=t.a
p=p==null?g:p.cZ(s,h,g)
q.Dj(h,i,p==null?new C.fn():p);++h}++i}}v.toString
return v},
cHY(d,e,f,g,h,i,j){var x,w,v,u,t
for(x=g.$flags|0,w=0;w<i;++w,e+=f)for(v=0;v<j;++v,h=u){u=h+1
t=d[e+v]
x&2&&C.z(g)
g[h]=t}},
cvd(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
cZL(d,e,f,g,h){var x=1-g/255
h[0]=D.e.ao(255*(1-d/255)*x)
h[1]=D.e.ao(255*(1-e/255)*x)
h[2]=D.e.ao(255*(1-f/255)*x)},
df(d,e,f){var x=d.a,w=d.d,v=J.aJ(x),u=e==null?d.c:d.d+f+e
return new C.lT(x,d.b,Math.min(v,u),w+f,d.e)}},B
J=c[1]
C=c[0]
D=c[2]
E=c[22]
A=a.updateHolder(c[7],A)
B=c[8]
A.wz.prototype={
M(){return"ChannelOrder."+this.b}}
A.a0g.prototype={
de(){return new A.a0g(this.a)},
gcm(){return D.ah},
gt(d){return 4},
gdV(){return null},
h(d,e){var x
if(e>=0&&e<4){x=e<<3>>>0
x=D.c.fe((this.a&D.c.c2(255,x))>>>0,x)}else x=0
return x},
j(d,e,f){},
gcP(){return this.h(0,0)},
gaz(){return this.h(0,0)},
gaM(){return this.h(0,1)},
gaL(){return this.h(0,2)},
gaJ(){return this.h(0,3)},
gei(){return this.gaJ()/255},
gim(){return C.jf(this)},
gN(d){return new C.hJ(this)},
m(d,e){var x,w,v=this
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gt(e)===v.gt(v)){x=e.gD(e)
w=C.M(v,C.y(v).i("F.E"))
x=x===C.aU(w)}return x},
gD(d){var x=C.M(this,C.y(this).i("F.E"))
return C.aU(x)},
$idA:1}
A.anO.prototype={
gaJ(){return 255},
gei(){return 1},
gt(d){return 3}}
A.amA.prototype={
M(){return"BlendMode."+this.b}}
A.Aw.prototype={
iX(d,e,f){var x,w=this.c+e*f
this.c=w
x=this.a
if(x>0&&w>x)throw C.o(C.bP("Animation frames exceed the maximum of "+x+" pixels"))}}
A.mq.prototype={
M(){return"BmpCompression."+this.b}}
A.aZ6.prototype={}
A.zh.prototype={
aSO(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===B.Dc||x===B.Dd}else x=!0
if(x){x=q.as=d.Y()
w=A.cvd(x)
q.CW=w
v=D.c.dN(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.Y()
u=A.cvd(w)
q.cy=u
t=D.c.dN(w,u)
q.db=x?255/t:0
w=q.ax=d.Y()
u=A.cvd(w)
q.dx=u
s=D.c.dN(w,u)
q.dy=x?255/s:0
if(!o||q.r===B.Dd){o=q.ay=d.Y()
x=A.cvd(o)
q.fr=x
r=D.c.dN(o,x)
q.fx=r>0?255/r:0}else if(q.f===16){q.ay=4278190080
q.fr=24
q.fx=1}else{q.ay=4278190080
q.fr=24
q.fx=1}}else if(q.f===16){q.as=31744
q.CW=10
q.cx=8.225806451612904
q.at=992
q.cy=5
q.db=8.225806451612904
q.ax=31
q.dx=0
q.dy=8.225806451612904
q.fx=q.fr=q.ay=0}else{q.as=16711680
q.CW=16
q.cx=1
q.at=65280
q.cy=8
q.db=1
q.ax=255
q.dx=0
q.dy=1
q.ay=4278190080
q.fr=24
q.fx=1}o=d.d
d.d=o+(p-(o-q.fy))
if(q.f<=8)q.ciR(d)},
gabl(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&C.d()
x=x===0}else x=!1
else x=!0
return x},
gaV(){return Math.abs(this.c)},
ciR(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.c2(1,s.f)
s.ch=new C.xA(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.Q(d.a,d.d++)
v=J.Q(d.a,d.d++)
u=J.Q(d.a,d.d++)
t=J.Q(d.a,d.d++)
s.ch.apz(x,u,v,w,t)}},
c6S(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.b1()
for(v=7;v>=0;--v)e.$4(D.c.lp(w,v)&1,0,0,0)
return}else if(x===2){w=d.b1()
for(v=6;v>=0;v-=2)e.$4(D.c.lp(w,v)&2,0,0,0)}else if(x===4){w=d.b1()
e.$4(D.c.U(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.b1(),0,0,0)
return}}x=o.r
if(x===B.Dc&&o.f===32){u=d.Y()
x=o.as
x===$&&C.d()
t=o.CW
t===$&&C.d()
t=D.c.dN((u&x)>>>0,t)
x=o.cx
x===$&&C.d()
s=D.e.G(t*x)
x=o.at
x===$&&C.d()
t=o.cy
t===$&&C.d()
t=D.c.dN((u&x)>>>0,t)
x=o.db
x===$&&C.d()
r=D.e.G(t*x)
x=o.ax
x===$&&C.d()
t=o.dx
t===$&&C.d()
t=D.c.dN((u&x)>>>0,t)
x=o.dy
x===$&&C.d()
q=D.e.G(t*x)
if(o.gabl())p=255
else{x=o.ay
x===$&&C.d()
t=o.fr
t===$&&C.d()
t=D.c.dN((u&x)>>>0,t)
x=o.fx
x===$&&C.d()
p=D.e.G(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===B.Lg){q=d.b1()
r=d.b1()
s=d.b1()
p=d.b1()
return e.$4(s,r,q,o.gabl()?255:p)}else if(t===24){q=d.b1()
r=d.b1()
return e.$4(d.b1(),r,q,255)}else if(t===16){u=d.a6()
x=o.as
x===$&&C.d()
t=o.CW
t===$&&C.d()
t=D.c.dN((u&x)>>>0,t)
x=o.cx
x===$&&C.d()
s=D.e.G(t*x)
x=o.at
x===$&&C.d()
t=o.cy
t===$&&C.d()
t=D.c.dN((u&x)>>>0,t)
x=o.db
x===$&&C.d()
r=D.e.G(t*x)
x=o.ax
x===$&&C.d()
t=o.dx
t===$&&C.d()
t=D.c.dN((u&x)>>>0,t)
x=o.dy
x===$&&C.d()
q=D.e.G(t*x)
if(o.gabl())p=255
else{x=o.ay
x===$&&C.d()
t=o.fr
t===$&&C.d()
t=D.c.dN((u&x)>>>0,t)
x=o.fx
x===$&&C.d()
p=D.e.G(t*x)}return e.$4(s,r,q,p)}else throw C.o(C.bP("Unsupported bitsPerPixel ("+t+") or compression ("+x.k(0)+")."))}},
gbU(){return this.b}}
A.amD.prototype={
lc(d){var x,w
if(!A.cMW(C.d5(d,!1,null,0))||d.length<18)return!1
x=C.d5(d,!1,null,0)
x.d+=14
w=x.Y()
return w>=12&&w<=124},
jB(d){return C.fQ(new A.aZ5(this,d))},
bvj(d){var x
if(!this.lc(d))return null
x=C.d5(d,!1,null,0)
this.a=x
return this.b=A.d8q(x,null)},
i5(d){return C.fQ(new A.aZ3(this,d))},
bvi(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new C.lR(f,f,f,f,0,D.bI,0,0)
x=g.a
x===$&&C.d()
w=e.a.b
w===$&&C.d()
x.d=w
w=e.b
A.o9(w,e.gaV(),g.d,!1)
v=e.f
u=D.c.ac(w*v+31,32)*4
x=e.gaV()
t=g.a
if(u*x>t.c-t.d)throw C.o(C.bP("Truncated BMP data"))
x=g.c
if(x)s=4
else if(v===1||v===4||v===8)s=1
else{t=v===32?4:3
s=t}if(x)r=D.ah
else if(v===1)r=D.fK
else{if(v===2)t=D.hi
else if(v===4)t=D.hj
else t=D.ah
r=t}q=x?f:e.ch
p=C.hA(f,f,r,0,D.bI,e.gaV(),f,0,s,q,D.ah,w,!1)
for(o=p.gaV()-1,x=e.c,w=1/x<0,t=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:t))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.h4(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.cZ(0,m,f)
if(h==null)h=new C.fn()
while(n.a<i)e.c6S(k,new A.aZ2(n,g,i,e,h))}return p},
oO(d,e){return C.fQ(new A.aZ4(this,d,e))},
bvh(d,e){var x=this.jB(d)
if(x==null||x.b<1||x.gaV()<1)return null
return this.i5(0)}}
A.b38.prototype={}
A.a0F.prototype={}
A.b5L.prototype={}
A.apH.prototype={}
A.arR.prototype={
afR(){return this.w},
rU(d,e,f,g,h){throw C.o(C.bP("B44 compression not yet supported."))},
SS(d,e,f){return this.rU(d,e,f,null,null)},
k(d){return C.u(this.r)+" "+this.x}}
A.Iu.prototype={
M(){return"ExrChannelType."+this.b}}
A.It.prototype={
M(){return"ExrChannelName."+this.b}}
A.apI.prototype={
bsw(d){var x=this,w=d.ajt()
x.a=w
if(w.length===0)return
x.c=B.aDL[d.Y()]
d.b1()
d.d+=3
x.f=d.Y()
x.r=d.Y()
w=x.a
if(w==="R"){x.w=!0
x.b=B.asO}else if(w==="G"){x.w=!0
x.b=B.asP}else if(w==="B"){x.w=!0
x.b=B.asQ}else if(w==="A"){x.w=!0
x.b=B.asR}else{x.w=!1
x.b=B.asS}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.uG.prototype={
M(){return"ExrCompressorType."+this.b}}
A.b6C.prototype={
rU(d,e,f,g,h){throw C.o(C.bP("Unsupported compression type"))},
SS(d,e,f){return this.rU(d,e,f,null,null)}}
A.bdZ.prototype={}
A.apJ.prototype={}
A.b6H.prototype={
bsx(d,e){var x,w,v,u,t,s=this,r=C.d5(d,!1,null,0)
if(r.Y()!==20000630)throw C.o(C.bP("File is not an OpenEXR image file."))
x=s.d=r.b1()
if(x!==2)throw C.o(C.bP("Cannot read version "+x+" image files."))
x=s.e=r.rN()
if((x&4294967289)>>>0!==0)throw C.o(C.bP("The file format version number's flag field contains unrecognized flags."))
w=new A.Aw(e)
if((x&16)===0){v=s.c
u=A.cQk(v.length,(x&2)!==0,r,e)
if(u.w>0)v.push(u)}else for(x=s.c;;){u=A.cQk(x.length,(s.e&2)!==0,r,e)
v=u.w
if(v<=0)break
w.iX(0,v,u.x)
x.push(u)}x=s.c
v=x.length
if(v===0)throw C.o(C.bP("Error reading image header"))
for(t=0;t<x.length;x.length===v||(0,C.q)(x),++t)x[t].ciP(r)
s.bSE(r)},
bSE(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,C.q)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bSV(u,d)
else t.bSQ(u,d)}},
bSV(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&C.d()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.df(b5,b2,0)
t=b4.c
s=b4.a
r=0
q=0
for(;;){p=b4.k1
p.toString
if(!(r<p))break
o=0
for(;;){p=b4.id
p.toString
if(!(o<p))break
for(p=q!==0,n=0,m=0;n<b4.go[r];++n)for(l=0;l<b4.fy[o];++l,++m){if(p)break
u.d=v[q][m]
if(x)if(u.Y()!==s)throw C.o(C.bP("Invalid Image Data"))
k=u.Y()
j=u.Y()
u.Y()
u.Y()
i=u.h4(u.Y())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.rU(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new C.lT(h,0,f,0,!1)
d=w.a
a0=w.b
a1=t.length
a2=0
a3=0
for(;;){if(!(a3<a0&&g<this.b))break
for(a4=0;a4<a1;++a4){if(a2>=f)break
a5=t[a4]
h=b4.dx
h.toString
a6=k*h
for(a7=0;a7<d;++a7,++a6){h=a5.c
h===$&&C.d()
switch(h.a){case 1:h=e.a6()
a8=$.fv
a9=(a8!=null?a8:C.h3())[h]
break
case 2:a9=e.a6()
break
case 0:a9=e.Y()
break
default:a9=b2}h=a5.d
h===$&&C.d()
a2+=h
h=a5.w
h===$&&C.d()
if(h){h=b3.a
b0=h==null?b2:h.cZ(a6,g,b2)
if(b0==null)b0=new C.fn()
h=a5.b
h===$&&C.d()
b0.j(0,h.a,a9)}else{h=a5.a
h===$&&C.d()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.jO(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
bSQ(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.d()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.df(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.Y()!==3.141592653589793)throw C.o(C.bP("Invalid Image Data"))
n=t.Y()
m=$.he()
m.$flags&2&&C.z(m)
m[0]=n
n=$.kv()
m[0]=t.Y()
l=t.h4(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.SS(l,0,p)
m=n.length
k=new C.lT(n,0,Math.min(m,m),0,!1)}else k=l
j=k.c-k.d
i=r.length
h=0
for(;;){if(!(h<u&&p<this.b))break
g=a6.cy[p]
if(g>=j)break
for(f=0;f<i;++f){if(g>=j)break
e=r[f]
d=a6.w
for(a0=0;a0<d;++a0){n=e.c
n===$&&C.d()
switch(n.a){case 1:n=k.a6()
m=$.fv
a1=(m!=null?m:C.h3())[n]
break
case 2:a1=k.a6()
break
case 0:a1=k.Y()
break
default:a1=a4}n=e.d
n===$&&C.d()
g+=n
n=e.w
n===$&&C.d()
if(n){n=a5.a
a2=n==null?a4:n.cZ(a0,p,a4)
if(a2==null)a2=new C.fn()
n=e.b
n===$&&C.d()
a2.j(0,n.a,a1)}else{n=e.a
n===$&&C.d()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.jO(a0,p,a1,0,0)}}}++h;++p}}},
gbU(){return this.a},
gaV(){return this.b}}
A.a1C.prototype={
bsy(b2,b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=C.t(y.N,y.v)
for(x=a9.e,w=y.t,v=a9.c,u=D.i2;;){t=b4.ajt()
if(t.length===0)break
s=b4.ajt()
r=b4.Y()
q=b4.h4(r)
b4.d=b4.d+(q.c-q.d)
x.j(0,t,new A.apH(s,r))
switch(t){case"channels":for(;;){p=new A.apI()
p.bsw(q)
o=p.a
o===$&&C.d()
if(o.length===0)break
n=p.w
n===$&&C.d()
if(n){++a9.d
o=p.c
o===$&&C.d()
if(o===B.Oj)u=D.i2
else u=o===B.Ok?D.iX:D.jM}else{n=p.c
n===$&&C.d()
b1.j(0,o,n)}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a9.at=o
n=q.Y()
m=$.he()
m.$flags&2&&C.z(m)
m[0]=n
n=$.GZ()
o[0]=n[0]
o=a9.at
m[0]=q.Y()
l=n[0]
o.$flags&2&&C.z(o)
o[1]=l
l=a9.at
m[0]=q.Y()
o=n[0]
l.$flags&2&&C.z(l)
l[2]=o
o=a9.at
m[0]=q.Y()
l=n[0]
o.$flags&2&&C.z(o)
o[3]=l
l=a9.at
m[0]=q.Y()
o=n[0]
l.$flags&2&&C.z(l)
l[4]=o
o=a9.at
m[0]=q.Y()
l=n[0]
o.$flags&2&&C.z(o)
o[5]=l
l=a9.at
m[0]=q.Y()
o=n[0]
l.$flags&2&&C.z(l)
l[6]=o
o=a9.at
m[0]=q.Y()
n=n[0]
o.$flags&2&&C.z(o)
o[7]=n
break
case"compression":a9.ax=B.aGq[J.Q(q.a,q.d++)]
break
case"dataWindow":o=q.Y()
n=$.he()
n.$flags&2&&C.z(n)
n[0]=o
o=$.kv()
m=o[0]
n[0]=q.Y()
l=o[0]
n[0]=q.Y()
k=o[0]
n[0]=q.Y()
o=a9.r=C.a([m,l,k,o[0]],w)
a9.w=o[2]-o[0]+1
a9.x=o[3]-o[1]+1
break
case"displayWindow":o=q.Y()
n=$.he()
n.$flags&2&&C.z(n)
n[0]=o
$.kv()
n[0]=q.Y()
n[0]=q.Y()
n[0]=q.Y()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.Y()
n=$.he()
n.$flags&2&&C.z(n)
n[0]=o
$.GZ()
break
case"screenWindowCenter":o=q.Y()
n=$.he()
n.$flags&2&&C.z(n)
n[0]=o
$.GZ()
n[0]=q.Y()
break
case"screenWindowWidth":o=q.Y()
n=$.he()
n.$flags&2&&C.z(n)
n[0]=o
$.GZ()
break
case"tiles":a9.dx=q.Y()
a9.dy=q.Y()
j=J.Q(q.a,q.d++)
a9.fr=j&15
a9.fx=D.c.U(j,4)&15
break
case"type":i=q.ajt()
if(i!=="deepscanline")if(i!=="deeptile")throw C.o(C.bP("EXR Invalid type: "+i))
break
default:break}}x=a9.w
if(x===0&&a9.x===0)return
A.o9(x,a9.x,b5,!1)
x=a9.w
a9.b=C.hA(b0,b0,u,0,D.bI,a9.x,b0,0,a9.d,b0,D.ah,x,!1)
for(x=new C.b1(b1,b1.$ti.i("b1<1,2>")).gN(0);x.l();){h=x.d
switch(h.b.a){case 1:w=a9.w
o=a9.x
w=new C.Rc(new Uint16Array(w*o),w,o,1)
break
case 2:w=a9.w
o=a9.x
w=new C.Rd(new Float32Array(w*o),w,o,1)
break
case 0:w=a9.w
o=a9.x
w=new C.Rg(new Uint32Array(w*o),w,o,1)
break
default:w=b0}o=a9.b
o.toString
o.bkO(h.a,w)}if(a9.db){g={}
f=a9.dx
if(f==null)f=0
e=a9.dy
if(e==null)e=0
if(f<1||e<1)throw C.o(C.bP("Invalid EXR tile size"))
A.o9(f,e,b5,!1)
x=a9.r
x===$&&C.d()
a9.id=a9.bwh(x[0],x[2],x[1],x[3])
x=a9.r
a9.k1=a9.bwi(x[0],x[2],x[1],x[3])
if(a9.fr!==2)a9.k1=1
x=a9.id
x.toString
w=a9.r
a9.fy=a9.aUj(x,w[0],w[2],a9.dx,a9.fx)
w=a9.k1
w.toString
x=a9.r
a9.go=a9.aUj(w,x[1],x[3],a9.dy,a9.fx)
x=a9.bwd()
a9.k2=x
w=a9.dx
w.toString
w=x*w
a9.k3=w
a9.CW=A.cOF(a9.ax,a9,w,a9.dy)
x=a9.k1
x.toString
w=a9.id
v=a9.fy
o=a9.go
d=0
a0=0
for(;a0<x;++a0){w.toString
a1=0
for(;a1<w;++a1)d+=v[a1]*o[a0]}if(d*8>b4.c-b4.d)throw C.o(C.bP("Truncated EXR data"))
g.a=g.b=0
x=a9.id
x.toString
w=a9.k1
w.toString
a9.ay=C.a3L(x*w,new A.b6I(g,a9),!0,y.E)}else{x=a9.x
w=a9.ch=new Uint32Array(x+1)
for(o=v.length,n=a9.r,m=a9.w,a2=0;a2<o;++a2){a3=v[a2]
l=a3.d
l===$&&C.d()
k=a3.f
k===$&&C.d()
a4=D.c.dn(l*m,k)
for(l=a3.r,a5=0;a5<x;++a5){n===$&&C.d()
k=n[1]
l===$&&C.d()
if(D.c.Z(a5+k,l)===0)w[a5]=w[a5]+a4}}for(a6=0,a5=0;a5<x;++a5)a6=Math.max(a6,w[a5])
x=A.cOF(a9.ax,a9,a6,b0)
a9.CW=x
x=a9.cx=x.afR()
w=a9.ch
v=w.length
o=new Uint32Array(v)
a9.cy=o
for(--v,a7=0,a8=0;a8<=v;++a8){if(D.c.Z(a8,x)===0)a7=0
o[a8]=a7
a7+=w[a8]}x=D.c.dn(a9.x+x,x)
a9.ay=C.a([new Uint32Array(x-1)],y.w)}},
bwh(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.art(w):u.aqF(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.art(v):u.aqF(v))+1
break
default:throw C.o(C.bP("Unknown LevelMode format."))}return x},
bwi(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.art(w):u.aqF(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.art(v):u.aqF(v))+1
break
default:throw C.o(C.bP("Unknown LevelMode format."))}return x},
art(d){var x
for(x=0;d>1;){++x
d=D.c.U(d,1)}return x},
aqF(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.U(d,1)}return x+w},
bwd(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&C.d()
v+=t}return v},
aUj(d,e,f,g,h){var x,w,v,u,t,s,r=J.kM(d,y.q)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.c2(1,v)
t=D.c.dn(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.dn(s+g-1,g)}return r}}
A.arS.prototype={
ciP(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.ms()
v.$flags&2&&C.z(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.ms()
v.$flags&2&&C.z(v)
v[x]=u}}}}
A.be_.prototype={
bsQ(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.kM(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aJu()
u.y=s
w=u.w
w.toString
v=D.c.ac(w*u.x,2)
u.z=new Uint16Array(v)},
afR(){return this.x},
rU(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
if(a7==null)a7=a3.c.w
if(a8==null)a8=a3.c.cx
x=a5+a7-1
w=a6+a8-1
v=a3.c
u=v.w
if(x>u)x=u-1
u=v.x
if(w>u)w=u-1
a3.a=x-a5+1
a3.b=w-a6+1
t=v.c
s=t.length
for(r=0,q=0;q<s;++q){p=t[q]
v=a3.y
v===$&&C.d()
o=v[q]
o.b=o.a=r
v=p.f
v===$&&C.d()
n=D.c.dn(a5,v)
m=D.c.dn(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&C.d()
n=D.c.dn(a6,u)
m=D.c.dn(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&C.d()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.a6()
j=a4.a6()
if(j>=8192)throw C.o(C.bP("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.da(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.Q(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bUn(i,d)
A.dbq(a4,a4.Y(),a3.z,r)
for(q=0;q<s;++q){v=a3.y
v===$&&C.d()
o=v[q]
f=0
for(;;){v=o.f
v===$&&C.d()
if(!(f<v))break
u=a3.z
u.toString
l=o.a
l===$&&C.d()
a1=o.c
a1===$&&C.d()
a2=o.d
a2===$&&C.d()
A.dbt(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.buP(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.a4L(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&C.d()
o=v[q]
v=o.e
v===$&&C.d()
if(D.c.Z(a6,v)!==0)continue
v=o.c
v===$&&C.d()
u=o.f
u===$&&C.d()
a5=v*u
for(;a5>0;--a5){v=a3.r
v.toString
u=a3.z
u.toString
l=o.b
l===$&&C.d()
o.b=l+1
v.kj(u[l])}}v=a3.r
return J.cM(D.m.ga4(v.c),0,v.a)},
SS(d,e,f){return this.rU(d,e,f,null,null)},
buP(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&C.z(e)
e[w]=v}},
bUn(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&C.z(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&C.z(e)
e[u]=0}return w-1}}
A.aJu.prototype={}
A.be0.prototype={
afR(){return this.w},
rU(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.bK(),d=f.r
d.toString
d=f.w*d
x=C.aU5(e,d)
e=f.x;(e==null?f.x=A.a4L(!1,d):e).a=0
w=C.a([0,0,0,0],y.t)
v=new Uint32Array(1)
u=J.cM(D.bg.ga4(v),0,null)
if(a3==null)a3=f.c.w
if(a4==null)a4=f.c.cx
t=a1+a3-1
s=a2+a4-1
e=f.c
d=e.w
if(t>d)t=d-1
d=e.x
if(s>d)s=d-1
f.a=t-a1+1
f.b=s-a2+1
e=e.c
r=e.length
for(q=a2,p=0;q<=s;++q)for(o=0;o<r;++o){n=e[o]
d=n.r
d===$&&C.d()
if(D.c.Z(a2,d)!==0)continue
d=n.f
d===$&&C.d()
m=D.c.dn(a1,d)
l=D.c.dn(t,d)
d=m*d<a1?0:1
k=l-m+d
v[0]=0
d=n.c
d===$&&C.d()
switch(d.a){case 0:w[0]=p
d=p+k
w[1]=d
d+=k
w[2]=d
p=d+k
for(j=0;j<k;++j){d=w[0]
w[0]=d+1
d=x[d]
i=w[1]
w[1]=i+1
i=x[i]
h=w[2]
w[2]=h+1
h=x[h]
v[0]=v[0]+((d<<24|i<<16|h<<8)>>>0)
for(g=0;g<4;++g)f.x.b_(u[g])}break
case 1:w[0]=p
d=p+k
w[1]=d
p=d+k
for(j=0;j<k;++j){d=w[0]
w[0]=d+1
d=x[d]
i=w[1]
w[1]=i+1
i=x[i]
v[0]=v[0]+((d<<8|i)>>>0)
for(g=0;g<2;++g)f.x.b_(u[g])}break
case 2:w[0]=p
d=p+k
w[1]=d
d+=k
w[2]=d
p=d+k
for(j=0;j<k;++j){d=w[0]
w[0]=d+1
d=x[d]
i=w[1]
w[1]=i+1
i=x[i]
h=w[2]
w[2]=h+1
h=x[h]
v[0]=v[0]+((d<<24|i<<16|h<<8)>>>0)
for(g=0;g<4;++g)f.x.b_(u[g])}break}}e=f.x
return J.cM(D.m.ga4(e.c),0,e.a)},
SS(d,e,f){return this.rU(d,e,f,null,null)}}
A.be1.prototype={
afR(){return 1},
rU(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.a4L(!1,(h-d.d)*2)
if(a0==null)a0=i.c.w
if(a1==null)a1=i.c.cx
x=e+a0-1
w=f+a1-1
v=i.c
u=v.w
if(x>u)x=u-1
v=v.x
if(w>v)w=v-1
i.a=x-e+1
i.b=w-f+1
while(v=d.d,v<h){u=d.a
d.d=v+1
v=J.Q(u,v)
u=$.oe()
u.$flags&2&&C.z(u)
u[0]=v
t=$.p6()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b_(J.Q(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b_(J.Q(d.a,d.d++))}q=J.cM(D.m.ga4(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&C.z(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.ac(p+1,2)
for(n=0,m=0;;v=j,n=k){if(m<p){l=m+1
k=n+1
u=q[n]
h.$flags&2&&C.z(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}return h},
SS(d,e,f){return this.rU(d,e,f,null,null)},
k(d){return C.u(this.w)}}
A.arT.prototype={
afR(){return this.x},
rU(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=d.bK(),k=m.w
if(k==null)k=0
x=C.aU5(l,k*m.x)
if(g==null)g=m.c.w
if(h==null)h=m.c.cx
w=e+g-1
v=f+h-1
l=m.c
k=l.w
if(w>k)w=k-1
l=l.x
if(v>l)v=l-1
m.a=w-e+1
m.b=v-f+1
u=x.length
for(l=x.$flags|0,t=1;t<u;++t){k=x[t-1]
s=x[t]
l&2&&C.z(x)
x[t]=k+s-128}l=m.y
if(l==null||l.length!==u)l=m.y=new Uint8Array(u)
k=D.c.ac(u+1,2)
for(r=0,q=0;;k=n,r=o){if(q<u){p=q+1
o=r+1
s=x[r]
l.$flags&2&&C.z(l)
l[q]=s}else break
if(p<u){q=p+1
n=k+1
l[p]=x[k]}else break}return l},
SS(d,e,f){return this.rU(d,e,f,null,null)},
k(d){return C.u(this.w)}}
A.b6D.prototype={
jB(d){return C.fQ(new A.b6G(this,d))},
i5(d){return C.fQ(new A.b6E(this,d))},
bCd(d){var x=this.a
if(x==null)return null
return x.c[d].b},
oO(d,e){return C.fQ(new A.b6F(this,d,e))},
bCc(d,e){if(this.jB(d)==null)return null
return this.i5(0)}}
A.a2k.prototype={
c9R(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(g===0&&j.c!=null){x=j.c
x.toString
return x}for(x=j.b,w=j.d,v=-1,u=-1,t=0;t<x;++t){s=w.ol(t)
r=w.oi(t)
q=w.oh(t)
p=w.og(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
aQc(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new C.xA(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.ol(u)
s=x.oi(u)
r=x.oh(u)
v.apz(u,t,s,r,u===q.c?0:255)}return v}}
A.a2l.prototype={
bsA(d){var x,w,v,u,t,s,r=this
r.a=d.a6()
r.b=d.a6()
r.c=d.a6()
r.d=d.a6()
x=d.b1()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cPo(D.c.c2(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.Q(d.a,d.d++)
t=J.Q(d.a,d.d++)
s=J.Q(d.a,d.d++)
v.d.qt(w,u,t,s)}}r.y=d.d-d.b}}
A.arU.prototype={}
A.QO.prototype={
gbU(){return this.a},
gaV(){return this.b}}
A.b9r.prototype={
lc(d){var x,w
this.r=C.d5(d,!1,null,0)
this.a=new A.QO(C.a([],y.b))
try{x=this.aYi()
return x}catch(w){return!1}},
jB(d){return C.fQ(new A.b9u(this,d))},
bEn(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.r=C.d5(d,!1,null,0)
n.a=new A.QO(C.a([],y.b))
if(!n.aYi())return null
u=n.a
A.o9(u.a,u.b,n.b,!0)
try{while(u=n.r,t=u.d,t<u.c){s=u.a
u.d=t+1
x=J.Q(s,t)
switch(x){case 44:w=n.b3w()
if(w==null){u=n.a
return u}u=w
u.r=n.f
u.w=n.d
if(n.c!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a2k(t,s,r,new C.xA(new Uint8Array(C.bl(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.e}n.a.r.push(w)
break
case 33:u=n.r
v=J.Q(u.a,u.d++)
if(J.p(v,255)){u=n.r
if(u.iu(J.Q(u.a,u.d++))==="NETSCAPE2.0"){q=J.Q(u.a,u.d++)
p=J.Q(u.a,u.d++)
if(q===3&&p===1)n.w=u.a6()}else n.atQ()}else if(J.p(v,249)){u=n.r
u.toString
n.bSv(u)}else n.atQ()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bSv(d){var x,w,v,u=this
d.b1()
x=d.b1()
u.f=d.a6()
u.e=d.b1()
d.b1()
u.d=D.c.U(x,2)&7
u.c=x&1
w=d.apR(1,0)
if(J.Q(w.a,w.d)===44){++d.d
v=u.b3w()
if(v==null)return
v.r=u.f
v.w=u.d
w=u.c!==0
v.x=w?u.e:-1
if(w){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.dco(w)}if(w!=null)w.c=u.e}u.a.r.push(v)}},
i5(d){return C.fQ(new A.b9s(this,d))},
bEm(d){var x,w,v,u=this,t=u.r
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.y
x===$&&C.d()
t.d=x
return u.bzx(v)},
oO(d,e){return C.fQ(new A.b9t(this,d,e))},
bEl(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
if(a2.jB(a4)==null)return a3
x=a2.a
w=x.r.length
if(w===1)return a2.i5(0)
new A.Aw(a2.b).iX(0,x.a*w,x.b)
for(x=y.q,v=a3,u=v,t=0;w=a2.a.r,t<w.length;++t){a5=w[t]
s=a2.i5(t)
if(s==null)return a3
s.y=a5.r*10
if(u==null||v==null){s.r=a2.w
v=s
u=v
continue}w=s.a
r=w==null
q=r?a3:w.a
if(q==null)q=0
p=v.a
o=p==null
n=o?a3:p.a
m=!1
if(q===(n==null?0:n)){w=r?a3:w.b
if(w==null)w=0
r=o?a3:p.b
if(w===(r==null?0:r)){w=a5.a
w===$&&C.d()
if(w===0){w=a5.b
w===$&&C.d()
w=w===0&&a5.w===2}else w=m}else w=m}else w=m
if(w){u.pH(s)
v=s
continue}l=a5.f
if(!(l!=null)){w=a2.a.e
w.toString
l=w}w=o?a3:p.a
if(w==null)w=0
r=o?a3:p.b
if(r==null)r=0
k=C.hA(a3,a3,D.ah,0,D.bI,r,a3,0,1,l.aQc(),D.ah,w,!1)
w=a5.w
if(w===2){w=k.a
j=w==null?a3:J.dz(w.ga4(w))
if(j==null){w=k.a
w=w==null?a3:w.ga4(w)
if(w==null)w=D.m.ga4(new Uint8Array(0))
j=J.dz(w)}w=a5.x
r=j.length
if(w!==-1)D.m.dg(j,0,r,w)
else{w=a2.a.c.a
D.m.dg(j,0,r,!D.m.gX(w)?w[0]:0)}}else if(w!==3)if(a5.f!=null){w=v.a
i=w==null?a3:w.gdV()
h=C.t(x,x)
for(w=i.a,g=0;g<w;++g)h.j(0,g,l.c9R(i.ol(g),i.oi(g),i.oh(g),i.og(g)))
w=k.a
f=w==null?a3:J.dz(w.ga4(w))
if(f==null){w=k.a
w=w==null?a3:w.ga4(w)
if(w==null)w=D.m.ga4(new Uint8Array(0))
f=J.dz(w)}w=v.a
e=w==null?a3:J.dz(w.ga4(w))
if(e==null){w=v.a
w=w==null?a3:w.ga4(w)
if(w==null)w=D.m.ga4(new Uint8Array(0))
e=J.dz(w)}for(d=f.length,w=f.$flags|0,a0=0;a0<d;++a0){a1=h.h(0,e[a0])
if(a1!=null&&a1!==-1){w&2&&C.z(f)
f[a0]=a1}}}k.y=s.y
w=a5.a
w===$&&C.d()
r=a5.b
r===$&&C.d()
a2.bxS(s,k,w,r)
u.pH(k)
v=k}return u},
b3w(){var x,w=this.r
if(w.d>=w.c)return null
x=new A.arU()
x.bsA(w);++this.r.d
this.atQ()
return x},
bzx(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.x==null){k.x=new Uint8Array(256)
k.y=new Uint8Array(4095)
k.z=new Uint8Array(4096)
k.Q=new Uint32Array(4096)}x=k.as=k.r.b1()
w=D.c.bW(1,x)
k.fr=w;++w
k.dy=w
k.dx=w+1;++x
k.db=x
k.cy=D.c.bW(1,x)
k.ch=0
k.cx=4098
k.ax=k.ay=0
x=k.x
x.toString
x.$flags&2&&C.z(x)
x[0]=0
x=k.Q
x.toString
D.bg.dg(x,0,4096,4098)
x=d.c
x===$&&C.d()
w=d.d
w===$&&C.d()
v=d.a
v===$&&C.d()
u=k.a
if(v+x<=u.a){v=d.b
v===$&&C.d()
v=v+w>u.b}else v=!0
if(v)return j
t=d.f
if(!(t!=null)){v=u.e
v.toString
t=v}k.at=x*w
s=C.hA(j,j,D.ah,0,D.bI,w,j,0,1,t.aQc(),D.ah,x,!1)
r=new Uint8Array(x)
v=d.e
v===$&&C.d()
if(v){v=d.b
v===$&&C.d()
for(w=v+w,q=0,p=0;q<4;++q)for(o=v+B.aym[q];o<w;o+=B.aC_[q],++p){if(!k.aXO(r))return s
u=s.a
n=u==null
m=n?j:u.a
l=o*(m==null?0:m)
u=n?j:J.dz(u.ga4(u))
if(u==null){u=s.a
u=u==null?j:u.ga4(u)
if(u==null)u=D.m.ga4(new Uint8Array(0))
u=J.dz(u)}D.m.dd(u,l,l+x,r)}}else for(o=0;o<w;++o){if(!k.aXO(r))return s
v=s.a
u=v==null
n=u?j:v.a
l=o*(n==null?0:n)
v=u?j:J.dz(v.ga4(v))
if(v==null){v=s.a
v=v==null?j:v.ga4(v)
if(v==null)v=D.m.ga4(new Uint8Array(0))
v=J.dz(v)}D.m.dd(v,l,l+x,r)}return s},
bxS(d,e,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a,h=i==null?null:i.gdV(),g=h.a,f=J.hB(g,y.cB)
for(x=0;x<g;++x)f[x]=h.og(x)!==0
w=d.bK()
v=e.bK()
u=d.gbU()
t=e.gbU()
s=e.gaV()
i=d.a
r=f.length
q=v.$flags|0
p=i==null
o=0
for(;;){n=p?null:i.b
if(!(o<(n==null?0:n)))break
m=o+a1
if(m>=s)break
for(l=o*u,n=m*t,k=0;k<u;++k,++l){j=k+a0
if(j>=t)break
x=w[l]
if(x<r&&f[x]){q&2&&C.z(v)
v[n+j]=x}}++o}},
aYi(){var x,w,v,u,t,s=this,r=s.r.iu(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.r.a6()
x=s.a
x.toString
x.b=s.r.a6()
w=s.r.b1()
x=s.a
x.toString
x.c=new C.ut(new Uint8Array(C.bl(C.a([s.r.b1()],y.t))));++s.r.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cPo(D.c.c2(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.r
u=J.Q(x.a,x.d++)
x=s.r
t=J.Q(x.a,x.d++)
x=s.r
w=J.Q(x.a,x.d++)
s.a.e.d.qt(v,u,t,w)}}s.a.toString
return!0},
aXO(d){var x=this,w=x.at
w.toString
x.at=w-d.length
if(!x.bzT(d))return!1
if(x.at===0)x.atQ()
return!0},
atQ(){var x,w,v,u=this.r
if(u.d>=u.c)return!0
x=u.b1()
for(;;){if(x!==0){u=this.r
u=u.d<u.c}else u=!1
if(!u)break
u=this.r
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.Q(v,w)}return!0},
bzT(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ch
if(k>4095)return!1
x=d.length
w=0
if(k!==0){v=d.$flags|0
for(;;){if(!(k!==0&&w<x))break
u=w+1
t=l.y
t===$&&C.d()
k=l.ch=k-1
t=t[k]
v&2&&C.z(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.CW=l.bzS()
if(s==null)return!1
v=l.dy
if(s===v)return!1
t=l.fr
if(s===t){for(t=l.Q,r=0;r<=4095;++r){t.toString
t.$flags&2&&C.z(t)
t[r]=4098}l.dx=v+1
v=l.as+1
l.db=v
l.cy=D.c.bW(1,v)
l.cx=4098}else{if(s<t){u=w+1
k&2&&C.z(d)
d[w]=s
w=u}else{v=l.Q
if(v[s]===4098){q=l.dx-2
if(s===q){s=l.cx
p=l.z
p===$&&C.d()
o=l.y
o===$&&C.d()
n=l.ch++
t=l.aEW(v,s,t)
o.$flags&2&&C.z(o)
o[n]=t
p.$flags&2&&C.z(p)
p[q]=t}else return!1}r=0
for(;;){m=r+1
if(!(r<=4095&&s>l.fr&&s<=4095))break
v=l.y
v===$&&C.d()
t=l.ch++
q=l.z
q===$&&C.d()
q=q[s]
v.$flags&2&&C.z(v)
v[t]=q
s=l.Q[s]
r=m}if(m>=4095||s>4095)return!1
v=l.y
v===$&&C.d()
t=l.ch
q=l.ch=t+1
v.$flags&2&&C.z(v)
v[t]=s
t=q
for(;;){if(!(t!==0&&w<x))break
u=w+1
t=l.ch=t-1
q=v[t]
k&2&&C.z(d)
d[w]=q
w=u}}v=l.cx
if(v!==4098&&l.Q[l.dx-2]===4098){t=l.Q
t.toString
q=l.dx-2
t.$flags&2&&C.z(t)
t[q]=v
p=l.CW
o=l.z
n=l.fr
if(p===q){o===$&&C.d()
v=l.aEW(t,v,n)
o.$flags&2&&C.z(o)
o[q]=v}else{o===$&&C.d()
p.toString
v=l.aEW(t,p,n)
o.$flags&2&&C.z(o)
o[q]=v}}v=l.CW
v.toString
l.cx=v}}return!0},
bzS(){var x,w,v,u,t=this
if(t.db>12)return null
while(x=t.ay,w=t.db,x<w){x=t.bvw()
x.toString
w=t.ax
v=t.ay
t.ax=(w|D.c.bW(x,v))>>>0
t.ay=v+8}v=t.ax
u=B.aCy[w]
t.ax=D.c.dN(v,w)
t.ay=x-w
x=t.dx
if(x<4097){++x
t.dx=x
x=x>t.cy&&w<12}else x=!1
if(x){t.cy=t.cy<<1>>>0
t.db=w+1}return v&u},
aEW(d,e,f){var x,w,v=0
for(;;){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
bvw(){var x,w,v=this,u=v.x,t=u[0],s=u.$flags|0
if(t===0){t=v.r.b1()
s&2&&C.z(u)
u[0]=t
u=v.x
t=u[0]
if(t===0)return null
D.m.dd(u,1,1+t,v.r.da(t).bK())
u=v.x
x=u[1]
u.$flags&2&&C.z(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&C.z(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.R2.prototype={
M(){return"IcoType."+this.b}}
A.bbo.prototype={
gbU(){return 0},
gaV(){return 0}}
A.arm.prototype={}
A.bbj.prototype={
gaV(){return D.c.ac(A.zh.prototype.gaV.call(this),2)},
gabl(){return!(this.d===40&&this.f===32)&&A.zh.prototype.gabl.call(this)}}
A.bbk.prototype={
lc(d){var x,w=this,v=C.d5(d,!1,null,0)
w.a=v
try{w.b=A.cPE(v)}catch(x){w.b=null}return w.b!=null},
jB(d){return C.fQ(new A.bbn(this,d))},
oO(d,e){return C.fQ(new A.bbm(this,d,e))},
bJY(d,e){var x,w,v,u,t,s,r=this,q=null
if(r.jB(d)==null)return q
x=r.b.e.length
if(x===1)return r.i5(0)
w=new A.Aw(r.c)
for(v=q,u=0;u<r.b.e.length;++u){e=r.i5(u)
if(e==null)continue
x=e.a
t=x==null
s=t?q:x.a
if(s==null)s=0
x=t?q:x.b
w.iX(0,s,x==null?0:x)
if(v==null){e.w=D.bI
v=e}else v.pH(e)}return v},
i5(d){return C.fQ(new A.bbl(this,d))},
bJZ(b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9!=null){x=a7.b
x=x==null||b0>=x.d}else x=!0
if(x)return a8
w=a7.b.e[b0]
x=a9.a
a9=a9.b+w.e
v=w.d
u=J.H7(x,a9,a9+v)
a9=a7.c
t=A.cSm(a9)
y.p.a(u)
if(t.lc(u))return t.oO(u,0)
s=A.a4L(!1,14)
s.kj(19778)
s.kk(v)
s.kk(0)
s.kk(0)
x=C.d5(u,!1,a8,0)
v=A.cMV(C.d5(J.cM(D.m.ga4(s.c),0,s.a),!1,a8,0))
r=x.d
q=x.Y()
p=x.Y()
o=$.he()
o.$flags&2&&C.z(o)
o[0]=p
p=$.kv()
n=p[0]
o[0]=x.Y()
p=p[0]
m=x.a6()
l=x.a6()
k=x.Y()
if(k>=14)C.X(C.bP("Unsupported BMP compression type: "+k))
k=B.Y7[k]
x.Y()
o[0]=x.Y()
o[0]=x.Y()
o=x.Y()
x.Y()
j=new A.bbj(v,n,p,q,m,l,k,o,r)
j.aSO(x,v)
if(q!==40&&m!==1)return a8
i=o===0&&l<=8?40+4*D.c.c2(1,l):40+4*o
v.b=i
s.a-=4
s.kk(i)
h=C.d5(u,!1,a8,0)
g=new A.b38(!0,a9)
g.a=h
g.b=j
f=g.i5(0)
if(l>=32)return f
e=32-D.c.Z(n,32)
d=D.c.ac(e===32?n:n+e,8)
for(a9=p<0,x=p===0,p=1/p<0,a0=0;a0<D.c.ac(A.zh.prototype.gaV.call(j),2);++a0){if(!(x?p:a9))a1=a0
else{v=f.a
v=v==null?a8:v.b
a1=(v==null?0:v)-1-a0}a2=h.h4(d)
h.d=h.d+(a2.c-a2.d)
v=f.a
a3=v==null?a8:v.cZ(0,a1,a8)
if(a3==null)a3=new C.fn()
for(a4=0;a4<n;){a5=J.Q(a2.a,a2.d++)
a6=7
for(;;){if(!(a6>-1&&a4<n))break
if((a5&D.c.bW(1,a6))>>>0!==0)a3.saJ(0)
a3.l();++a4;--a6}}}return f}}
A.beo.prototype={
M(){return"JpegChroma."+this.b}}
A.bet.prototype={
blc(d){d=D.c.G(D.c.aF(d,1,100))
if(this.Q===d)return
this.bKy(d<50?D.e.dw(5000/d):D.c.dw(200-d*2))
this.Q=d},
ba7(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
if(b4.gbU()<1||b4.gaV()<1||b4.a==null)C.X(C.bP("Cannot encode an empty image"))
x=A.a4L(!0,8192)
b3.xo(x,216)
b3.xo(x,224)
x.kj(16)
x.b_(74)
x.b_(70)
x.b_(73)
x.b_(70)
x.b_(0)
x.b_(1)
x.b_(1)
x.b_(0)
x.kj(1)
x.kj(1)
x.b_(0)
x.b_(0)
b3.c0u(x,b4.gtM())
w=b4.c
if(w!=null){b3.xo(x,226)
v=w.c6Y()
u=C.a([73,67,67,95,80,82,79,70,73,76,69,0],y.t)
x.kj(14+v.length)
x.hT(u)
x.hT(v)}b3.c0t(x)
w=b4.gbU()
t=b4.gaV()
b3.xo(x,192)
x.kj(17)
x.b_(8)
x.kj(t)
x.kj(w)
x.b_(3)
x.b_(1)
w=b5===B.FY
x.b_(w?17:34)
x.b_(0)
x.b_(2)
x.b_(17)
x.b_(1)
x.b_(3)
x.b_(17)
x.b_(1)
b3.c0s(x)
b3.xo(x,218)
x.kj(12)
x.b_(3)
x.b_(1)
x.b_(0)
x.b_(2)
x.b_(17)
x.b_(3)
x.b_(17)
x.b_(0)
x.b_(63)
x.b_(0)
b3.at=b3.as=0
s=b4.gbU()
r=b4.gaV()
q=b4.f
if(q==null)q=B.ap0
if(w){p=new Float32Array(64)
o=new Float32Array(64)
n=new Float32Array(64)
for(w=b3.c,t=b3.d,m=0,l=0,k=0,j=0;j<r;j+=8)for(i=0;i<s;i+=8){b3.Ww(b4,i,j,s,r,p,o,n,q)
h=b3.e
h===$&&C.d()
g=b3.r
g===$&&C.d()
m=b3.x7(x,p,w,m,h,g)
g=b3.f
g===$&&C.d()
h=b3.w
h===$&&C.d()
l=b3.x7(x,o,t,l,g,h)
k=b3.x7(x,n,t,k,b3.f,b3.w)}}else{w=y.z
p=J.hB(4,w)
for(f=0;f<4;++f)p[f]=new Float32Array(64)
o=J.hB(4,w)
for(f=0;f<4;++f)o[f]=new Float32Array(64)
n=J.hB(4,w)
for(f=0;f<4;++f)n[f]=new Float32Array(64)
e=new Float32Array(64)
d=new Float32Array(64)
for(w=b3.c,t=b3.d,m=0,l=0,k=0,j=0;j<r;j+=16)for(h=j+8,i=0;i<s;i+=16){g=p[0]
a0=o[0]
a1=n[0]
b3.Ww(b4,i,j,s,r,g,a0,a1,q)
a2=i+8
a3=p[1]
a4=o[1]
a5=n[1]
b3.Ww(b4,a2,j,s,r,a3,a4,a5,q)
a6=p[2]
a7=o[2]
a8=n[2]
b3.Ww(b4,i,h,s,r,a6,a7,a8,q)
a9=p[3]
b0=o[3]
b1=n[3]
b3.Ww(b4,a2,h,s,r,a9,b0,b1,q)
b3.aWu(e,a0,a4,a7,b0)
b3.aWu(d,a1,a5,a8,b1)
b1=b3.e
b1===$&&C.d()
a8=b3.r
a8===$&&C.d()
m=b3.x7(x,a9,w,b3.x7(x,a6,w,b3.x7(x,a3,w,b3.x7(x,g,w,m,b1,a8),b3.e,b3.r),b3.e,b3.r),b3.e,b3.r)
a8=b3.f
a8===$&&C.d()
b1=b3.w
b1===$&&C.d()
l=b3.x7(x,e,t,l,a8,b1)
k=b3.x7(x,d,t,k,b3.f,b3.w)}}b2=8-b3.at
b3.xn(x,D.c.bW(1,b2)-1,b2)
b3.xo(x,217)
return J.cM(D.m.ga4(x.c),0,x.a)},
Ww(d,e,f,g,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(d.gcm()===D.ah&&!d.gyg()&&d.gqb()>=3){x=d.a
this.bwk(J.dz(x.ga4(x)),d.a.gjA(),d.gqb(),e,f,g,a0,a1,a2,a3,a4)
return}for(x=this.z,w=a1.$flags|0,v=a2.$flags|0,u=a3.$flags|0,t=f+1,s=null,r=0;r<64;++r){q=r>>>3
p=f+q
o=e+(r&7)
if(p>=a0)p-=t+q-a0
if(o>=g)o-=o-g+1
n=d.a
s=n==null?null:n.cZ(o,p,s)
if(s==null)s=new C.fn()
m=s.gcm()!==D.ah?s.pR(D.ah):s
l=D.e.G(m.gaz())
k=D.e.G(m.gaM())
j=D.e.G(m.gaL())
if(m.gt(m)>3){i=m.gei()
h=1-i
l=D.c.aF(D.e.ao(l*i+a4.gaz()*h),0,255)
k=D.c.aF(D.e.ao(k*i+a4.gaM()*h),0,255)
j=D.c.aF(D.e.ao(j*i+a4.gaL()*h),0,255)}n=D.c.U(x[l]+x[k+256]+x[j+512],16)
w&2&&C.z(a1)
a1[r]=n-128
n=D.c.U(x[l+768]+x[k+1024]+x[j+1280],16)
v&2&&C.z(a2)
a2[r]=n-128
n=D.c.U(x[l+1280]+x[k+1536]+x[j+1792],16)
u&2&&C.z(a3)
a3[r]=n-128}},
bwk(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.z,d=b2.gaz(),a0=b2.gaM(),a1=b2.gaL()
for(x=a9.$flags|0,w=b0.$flags|0,v=b1.$flags|0,u=a4>3,t=a7-1,s=a8-1,r=0,q=0;r<8;++r){p=a6+r
o=(p<a8?p:s)*a3
for(n=0;n<8;++n,++q){m=a5+n
l=o+(m<a7?m:t)*a4
k=a2[l]
j=a2[l+1]
i=a2[l+2]
if(u){h=a2[l+3]/255
g=1-h
k=D.c.aF(D.e.ao(k*h+d*g),0,255)
j=D.c.aF(D.e.ao(j*h+a0*g),0,255)
i=D.c.aF(D.e.ao(i*h+a1*g),0,255)}f=D.c.U(e[k]+e[j+256]+e[i+512],16)
x&2&&C.z(a9)
a9[q]=f-128
f=D.c.U(e[k+768]+e[j+1024]+e[i+1280],16)
w&2&&C.z(b0)
b0[q]=f-128
f=D.c.U(e[k+1280]+e[j+1536]+e[i+1792],16)
v&2&&C.z(b1)
b1[q]=f-128}}},
aWu(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.Z(w,8)<4?e:f
else v=D.c.Z(w,8)<4?g:h
u=(D.c.ac(D.c.Z(w,32),8)<<4>>>0)+(D.c.Z(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&C.z(d)
d[w]=(t+s+r+q)/4}},
xo(d,e){d.b_(255)
d.b_(e&255)},
bKy(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.e.dw((B.aIk[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=B.wv[v]
w&2&&C.z(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.e.dw((B.aBy[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=B.wv[s]
t&2&&C.z(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=B.wv[n]
j=x[k]
i=B.S4[m]
h=B.S4[l]
q&2&&C.z(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&C.z(p)
p[n]=1/(k*i*h*8);++n}},
aqS(d,e){var x,w,v,u,t,s=new Int32Array(256),r=new Uint8Array(256)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
s[t]=x
r[t]=v;++w;++x}x*=2}return new A.c0R(s,r)},
bKz(){var x,w,v
for(x=this.z,w=x.$flags|0,v=0;v<256;++v){w&2&&C.z(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
bCh(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
for(x=d4.$flags|0,w=0,v=0;v<8;++v){u=d4[w]
t=w+1
s=d4[t]
r=w+2
q=d4[r]
p=w+3
o=d4[p]
n=w+4
m=d4[n]
l=w+5
k=d4[l]
j=w+6
i=d4[j]
h=w+7
g=d4[h]
f=u+g
e=u-g
d=s+i
a0=s-i
a1=q+k
a2=q-k
a3=o+m
a4=f+a3
a5=f-a3
a6=d+a1
x&2&&C.z(d4)
d4[w]=a4+a6
d4[n]=a4-a6
a7=(d-a1+a5)*0.707106781
d4[r]=a5+a7
d4[j]=a5-a7
a4=o-m+a2
a8=a0+e
a9=(a4-a8)*0.382683433
b0=0.5411961*a4+a9
b1=1.306562965*a8+a9
b2=(a2+a0)*0.707106781
b3=e+b2
b4=e-b2
d4[l]=b4+b0
d4[p]=b4-b0
d4[t]=b3+b1
d4[h]=b3-b1
w+=8}for(w=0,v=0;v<8;++v){u=d4[w]
t=w+8
s=d4[t]
r=w+16
q=d4[r]
p=w+24
o=d4[p]
n=w+32
m=d4[n]
l=w+40
k=d4[l]
j=w+48
i=d4[j]
h=w+56
g=d4[h]
b5=u+g
b6=u-g
b7=s+i
b8=s-i
b9=q+k
c0=q-k
c1=o+m
c2=b5+c1
c3=b5-c1
c4=b7+b9
x&2&&C.z(d4)
d4[w]=c2+c4
d4[n]=c2-c4
c5=(b7-b9+c3)*0.707106781
d4[r]=c3+c5
d4[j]=c3-c5
c2=o-m+c0
c6=b8+b6
c7=(c2-c6)*0.382683433
c8=0.5411961*c2+c7
c9=1.306562965*c6+c7
d0=(c0+b8)*0.707106781
d1=b6+d0
d2=b6-d0
d4[l]=d2+c8
d4[p]=d2-c8
d4[t]=d1+c9
d4[h]=d1-c9;++w}for(x=this.x,v=0;v<64;++v){d3=d4[v]*d5[v]
t=d3>0?D.e.G(d3+0.5):D.e.G(d3-0.5)
x.$flags&2&&C.z(x)
x[v]=t}return x},
c0u(d,e){var x,w
if(e.gX(0))return
x=A.a4L(!1,8192)
e.c3(x)
w=J.cM(D.m.ga4(x.c),0,x.a)
this.xo(d,225)
d.kj(w.length+8)
d.kk(1165519206)
d.kj(0)
d.hT(w)},
c0t(d){var x,w,v
this.xo(d,219)
d.kj(132)
d.b_(0)
for(x=this.a,w=0;w<64;++w)d.b_(x[w])
d.b_(1)
for(x=this.b,v=0;v<64;++v)d.b_(x[v])},
c0s(d){var x,w,v,u,t,s,r,q
this.xo(d,196)
d.kj(418)
d.b_(0)
for(x=0;x<16;){++x
d.b_(B.ZR[x])}for(w=0;w<=11;++w)d.b_(B.vX[w])
d.b_(16)
for(v=0;v<16;){++v
d.b_(B.QV[v])}for(u=0;u<=161;++u)d.b_(B.Sr[u])
d.b_(1)
for(t=0;t<16;){++t
d.b_(B.U0[t])}for(s=0;s<=11;++s)d.b_(B.vX[s])
d.b_(17)
for(r=0;r<16;){++r
d.b_(B.SV[r])}for(q=0;q<=161;++q)d.b_(B.VO[q])},
x7(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.bCh(e,f),h=j.y
for(x=h.$flags|0,w=0;w<64;++w){v=B.wv[w]
u=i[w]
x&2&&C.z(h)
h[v]=u}x=h[0]
t=x-g
if(t===0)j.xn(d,a0.a[0],a0.b[0])
else{s=D.c.gtw(t<0?-t:t)
j.xn(d,a0.a[s],a0.b[s])
j.xn(d,A.ddB(t,s),s)}r=63
for(;;){if(!(r>0&&h[r]===0))break;--r}if(r===0){j.xn(d,a1.a[0],a1.b[0])
return x}for(v=a1.a,u=a1.b,q=1;q<=r;){p=q
for(;;){if(!(h[p]===0&&p<=r))break;++p}o=p-q
if(o>=16){n=D.c.U(o,4)
for(m=1;m<=n;++m)j.xn(d,v[240],u[240])
o&=15}l=h[p]
s=D.c.gtw(l<0?-l:l)
k=(o<<4>>>0)+s
j.xn(d,v[k],u[k])
j.xn(d,l>0?l:l+D.c.bW(1,s)-1,s)
q=p+1}if(r!==63)j.xn(d,v[0],u[0])
return x},
xn(d,e,f){var x,w,v=this
v.as=(D.c.bW(v.as,f)|e)>>>0
v.at+=f
while(x=v.at,x>=8){x-=8
v.at=x
w=D.c.dN(v.as,x)&255
d.b_(w)
if(w===255)d.b_(0)}v.as=(v.as&D.c.bW(1,x)-1)>>>0}}
A.c0R.prototype={
gt(d){return this.b}}
A.SO.prototype={
M(){return"PngDisposeMode."+this.b}}
A.a5a.prototype={
M(){return"PngBlendMode."+this.b}}
A.a5b.prototype={}
A.arV.prototype={}
A.Ez.prototype={
M(){return"PngFilterType."+this.b}}
A.bpK.prototype={
gbU(){return this.a},
gaV(){return this.b}}
A.be2.prototype={}
A.bpF.prototype={
lc(d){var x
if(d.length<8)return!1
for(x=0;x<8;++x)if(d[x]!==B.Yk[x])return!1
return!0},
jB(d){return C.fQ(new A.bpI(this,d))},
bRf(b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=C.d5(b6,!0,b4,0)
b3.e=b5
x=b5.da(8)
for(w=0;w<8;++w)if(J.Q(x.a,x.d+w)!==B.Yk[w])return b4
for(b5=b3.a,v=b5.cy,u=y.t,t=b5.db,s=y.H,r=b3.b,q=b5.ax;;){p=b3.e
o=p.d-p.b
n=p.Y()
m=b3.e.iu(4)
switch(m){case"tEXt":p=b3.e
l=p.h4(n)
p.d=p.d+(l.c-l.d)
k=l.bK()
j=k.length
for(w=0;w<j;++w)if(k[w]===0){p=w+1
q.j(0,D.eD.cs(new Uint8Array(k.subarray(0,C.o6(0,w,j)))),D.eD.cs(new Uint8Array(k.subarray(p,C.o6(p,b4,j)))))
break}b3.e.d+=4
break
case"pHYs":p=b3.e
l=p.h4(n)
p.d=p.d+(l.c-l.d)
i=A.df(l,b4,0)
i.Y()
i.Y()
J.Q(i.a,i.d++)
b3.e.d+=4
break
case"IHDR":p=b3.e
l=p.h4(n)
p.d=p.d+(l.c-l.d)
h=A.df(l,b4,0)
g=h.bK()
b5.a=h.Y()
p=h.Y()
b5.b=p
A.o9(b5.a,p,r,!1)
b5.c=J.Q(h.a,h.d++)
b5.d=J.Q(h.a,h.d++)
J.Q(h.a,h.d++)
b5.f=J.Q(h.a,h.d++)
b5.r=J.Q(h.a,h.d++)
p=b5.d
if(!(p===0||p===2||p===3||p===4||p===6))return b4
if(b5.f!==0)return b4
switch(p){case 0:if(!D.b.n(C.a([1,2,4,8,16],u),b5.c))return b4
break
case 2:if(!D.b.n(C.a([8,16],u),b5.c))return b4
break
case 3:if(!D.b.n(C.a([1,2,4,8],u),b5.c))return b4
break
case 4:if(!D.b.n(C.a([8,16],u),b5.c))return b4
break
case 6:if(!D.b.n(C.a([8,16],u),b5.c))return b4
break}if(b3.e.Y()!==C.oa(g,C.oa(new C.eW(m),0)))throw C.o(C.bP("Invalid "+m+" checksum"))
break
case"PLTE":p=b3.e
l=p.h4(n)
p.d=p.d+(l.c-l.d)
b5.w=l.bK()
if(b3.e.Y()!==C.oa(s.a(b5.w),C.oa(new C.eW(m),0)))throw C.o(C.bP("Invalid "+m+" checksum"))
break
case"tRNS":p=b3.e
l=p.h4(n)
p.d=p.d+(l.c-l.d)
b5.x=l.bK()
f=b3.e.Y()
p=b5.x
p.toString
if(f!==C.oa(p,C.oa(new C.eW(m),0)))throw C.o(C.bP("Invalid "+m+" checksum"))
break
case"IEND":b3.e.d+=4
break
case"gAMA":if(n!==4)throw C.o(C.bP("Invalid gAMA chunk"))
b3.e.Y()
b3.e.d+=4
break
case"IDAT":t.push(o)
p=b3.e
p.d=(p.d+=n)+4
break
case"acTL":b5.CW=b3.e.Y()
b3.e.Y()
b3.e.d+=4
break
case"fcTL":b3.e.Y()
e=b3.e.Y()
d=b3.e.Y()
a0=b3.e.Y()
a1=b3.e.Y()
a2=b3.e.a6()
a3=b3.e.a6()
p=b3.e
a4=J.Q(p.a,p.d++)
p=b3.e
a5=J.Q(p.a,p.d++)
p=B.az8[a4]
a6=B.aFu[a5]
v.push(new A.arV(C.a([],u),e,d,a0,a1,a2,a3,p,a6))
b3.e.d+=4
break
case"fdAT":b3.e.Y()
D.b.ga5(v).y.push(o)
p=b3.e
p.d=(p.d+=n-4)+4
break
case"bKGD":p=b5.d
if(p===3){p=b3.e
a7=J.Q(p.a,p.d++);--n
a8=a7*3
p=b5.w
a9=p[a8]
b0=p[a8+1]
b1=p[a8+2]
p=b5.x
if(p!=null){p=D.m.n(p,a7)?0:255
a6=new Uint8Array(4)
a6[0]=a9
a6[1]=b0
a6[2]=b1
a6[3]=p
b5.z=new C.HO(a6)}else{p=new Uint8Array(3)
p[0]=a9
p[1]=b0
p[2]=b1
b5.z=new C.anz(p)}}else if(p===0||p===4){b3.e.a6()
n-=2}else if(p===2||p===6){p=b3.e
p.a6()
p.a6()
p.a6()
n-=24}if(n>0)b3.e.d+=n
b3.e.d+=4
break
case"iCCP":b5.Q=b3.e.ajt()
p=b3.e
J.Q(p.a,p.d++)
p=b5.Q
a6=b3.e
l=a6.h4(n-(p.length+2))
a6.d=a6.d+(l.c-l.d)
b5.at=l.bK()
b3.e.d+=4
break
case"cICP":p=b3.e
a6=p.d
if(n===4){b2=p.a
p.d=a6+1
J.Q(b2,a6)
a6=b3.e
J.Q(a6.a,a6.d++)
a6=b3.e
J.Q(a6.a,a6.d++)
a6=b3.e
J.Q(a6.a,a6.d++)}else p.d=a6+n
b3.e.d+=4
break
default:p=b3.e
p.d=(p.d+=n)+4
break}if(m==="IEND")break
p=b3.e
if(p.d>=p.c)return b4}return b5},
i5(d){return C.fQ(new A.bpG(this,d))},
bRd(b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=b1.a,b4=b3.a,b5=b3.b,b6=b3.cy,b7=b6.length
if(b7===0||b8===0){r=C.a([],y.a)
b6=b3.db
q=b6.length
for(p=0,o=0;o<q;++o){b7=b1.e
b7===$&&C.d()
b7.d=b6[o]
n=b7.Y()
m=b1.e.iu(4)
b7=b1.e
l=b7.h4(n)
b7.d=b7.d+(l.c-l.d)
k=l.bK()
p+=k.length
r.push(k)
if(b1.e.Y()!==C.oa(k,C.oa(new C.eW(m),0)))throw C.o(C.bP("Invalid "+m+" checksum"))}j=new Uint8Array(p)
for(b6=r.length,i=0,h=0;h<r.length;r.length===b6||(0,C.q)(r),++h){k=r[h]
D.m.hC(j,i,k)
i+=k.length}}else{if(b8>=b7)throw C.o(C.bP("Invalid Frame Number: "+b8))
g=b6[b8]
b4=g.b
b5=g.c
A.o9(b4,b5,b1.b,!1)
r=C.a([],y.a)
for(b6=g.y,p=0,o=0;o<b6.length;++o){b7=b1.e
b7===$&&C.d()
b7.d=b6[o]
n=b7.Y()
b7=b1.e
b7.iu(4)
b7.d+=4
b7=b1.e
l=b7.h4(n-4)
b7.d=b7.d+(l.c-l.d)
k=l.bK()
p+=k.length
r.push(k)}j=new Uint8Array(p)
for(b6=r.length,i=0,h=0;h<r.length;r.length===b6||(0,C.q)(r),++h){k=r[h]
D.m.hC(j,i,k)
i+=k.length}}b6=b3.d
f=1
if(!(b6===3))if(!(b6===0)){if(b6===4)b6=2
else b6=b6===6?4:3
f=b6}b6=C.kL(j,D.ax,b2,b2)
x=C.cQg(new C.arL(b6,D.nv,!1,D.KE))
b1.d=b1.c=0
e=b2
if(b3.d===3){b6=b3.w
if(b6!=null){d=b6.length/3|0
a0=b3.x
b7=a0!=null
a1=b7?a0.length:0
a2=b7?4:3
e=new C.xA(new Uint8Array(d*a2),d,a2)
for(b7=a2===4,o=0,a3=0;o<d;++o,a3+=3){a4=b7&&o<a1?a0[o]:255
e.apz(o,b6[a3],b6[a3+1],b6[a3+2],a4)}}}if(b3.d===0&&b3.x!=null&&e==null&&b3.c<=8){a0=b3.x
a5=a0.length
b6=b3.c
d=D.c.bW(1,b6)
b7=new Uint8Array(d*4)
e=new C.xA(b7,d,4)
if(b6===1)a6=255
else if(b6===2)a6=85
else{b6=b6===4?17:1
a6=b6}for(o=0;o<d;++o){a7=o*a6
e.apz(o,a7,a7,a7,255)}for(o=0;o<a5;o+=2){a8=(a0[o]&255)<<8|a0[o+1]&255
if(a8<d)b7[a8*4+3]=0}}b6=b3.c
if(b6===1)a9=D.fK
else if(b6===2)a9=D.hi
else{if(b6===4)b7=D.hj
else b7=b6===16?D.dl:D.ah
a9=b7}b7=b3.d
if(b7===0&&b3.x!=null&&b6>8)f=4
w=C.hA(b2,b2,a9,0,D.bI,b5,b2,0,b7===2&&b3.x!=null?4:f,e,D.ah,b4,!1)
v=b3.a
u=b3.b
b3.a=b4
b3.b=b5
t=b4
s=b5
b1.f=0
try{if(b3.r!==0){b1.Ew(x,w,0,0,8,8,D.e.U(t+7,3),D.e.U(s+7,3))
b1.Ew(x,w,4,0,8,8,D.e.U(t+3,3),D.e.U(s+7,3))
b1.Ew(x,w,0,4,4,8,D.e.U(t+3,2),D.e.U(s+3,3))
b1.Ew(x,w,2,0,4,4,D.e.U(t+1,2),D.e.U(s+3,2))
b1.Ew(x,w,0,2,2,4,D.e.U(t+1,1),D.e.U(s+1,2))
b1.Ew(x,w,1,0,2,2,D.e.U(t,1),D.e.U(s+1,1))
b1.Ew(x,w,0,1,1,2,t,D.e.U(s,1))}else b1.bRe(x,w)}catch(b0){b6=C.a_(b0)
if(b6 instanceof C.uk)return b2
else if(y.Y.b(b6))return b2
else if(b6 instanceof A.ais)return b2
else throw b0}finally{x.Fn()
b3.a=v
b3.b=u}b6=b3.at
if(b6!=null)w.c=new C.zY(b3.Q,B.au6,b6)
b3=b3.ax
if(b3.a!==0)w.c1G(b3)
return w},
oO(d,e){return C.fQ(new A.bpH(this,d,e))},
bRc(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.jB(d)==null)return e
x=f.a
w=x.cy
v=w.length
if(v===0||a0!=null)return f.i5(a0==null?0:a0)
u=Math.min(x.CW,v)
new A.Aw(f.b).iX(0,x.a*u,x.b)
for(v=y.g,t=e,s=t,r=0;r<u;++r){a0=w[r]
q=f.i5(r)
if(q==null)continue
if(s==null||t==null){s=q.b8I(q.gqb())
p=a0.f
s.y=D.e.G((p===0||a0.r===0?0:p/a0.r)*1000)
t=s
continue}p=r-1
o=w[p]
n=q.a
m=n==null
l=m?e:n.a
if(l==null)l=0
k=t.a
j=k==null
i=j?e:k.a
if(l===(i==null?0:i)){n=m?e:n.b
if(n==null)n=0
m=j?e:k.b
n=n===(m==null?0:m)&&a0.d===0&&a0.e===0&&a0.x===B.a9u}else n=!1
if(n){p=a0.f
q.y=D.e.G((p===0||a0.r===0?0:p/a0.r)*1000)
s.pH(q)
t=q
continue}h=s.x
t=C.t6((h===$?s.x=C.a([],v):h)[p],!1,!1)
g=o.w
if(g===B.a9w){p=o.d
n=o.e
m=x.z
if(m==null){m=new Uint8Array(4)
l=new C.HO(m)
m[0]=0
m[1]=0
m[2]=0
m[3]=0
m=l}A.d_c(t,!1,m,p,p+o.b-1,n,n+o.c-1)}else if(g===B.a9x&&r>1){h=s.x
if(h===$)h=s.x=C.a([],v)
p=o.d
n=o.e
m=o.b
l=o.c
t=A.cIG(t,h[r-2],B.Db,l,m,p,n,l,m,p,n)}p=a0.f
t.y=D.e.G((p===0||a0.r===0?0:p/a0.r)*1000)
p=a0.x===B.a9v?B.Db:B.te
t=A.cIG(t,q,p,e,e,a0.d,a0.e,e,e,e,e)
s.pH(t)}return s},
gaGG(){var x=this.a.d
if(x===4)x=2
else if(x===2)x=3
else x=x===6?4:1
return x},
Ew(d,e,f,g,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
if(a2===0||a3===0)return
x=h.gaGG()
w=h.a.c
v=x*w
u=D.c.U(v+7,3)
t=D.c.ac(v*a2+7,8)
s=w===8||w===16
r=C.a([0,0,0,0],y.t)
for(q=g,p=null,o=null,n=0;n<a3;++n,q+=a1,++h.f,o=l){m=B.Xw[d.b1()]
l=d.da(t).bK()
x=l.length
if(x!==t)throw C.o(B.M5)
h.b4W(m,u,l,o)
if(s){h.b6v(l,e,q,f,a0,a2)
continue}h.d=h.c=0
k=new C.lT(l,0,Math.min(x,x),0,!0)
for(j=f,i=0;i<a2;++i,j+=a0){h.b1q(k,r)
x=e.a
p=x==null?null:x.cZ(j,q,p)
if(p==null)p=new C.fn()
h.b3c(p,r)}}},
bRe(d,e){var x,w,v,u,t,s,r,q=this,p=q.gaGG(),o=q.a,n=o.c,m=p*n,l=o.a,k=o.b,j=D.c.ac(l*m+7,8),i=D.c.U(m+7,3),h=n===8||n===16,g=C.a([0,0,0,0],y.t)
p=e.a
x=p.gN(p)
x.l()
for(w=null,v=0;v<k;++v,w=t){u=B.Xw[d.b1()]
t=d.da(j).bK()
p=t.length
if(p!==j)throw C.o(B.M5)
q.b4W(u,i,t,w)
if(h){q.b6v(t,e,v,0,1,l)
continue}q.d=q.c=0
s=new C.lT(t,0,Math.min(p,p),0,!0)
for(r=0;r<l;++r){q.b1q(s,g)
q.b3c(x.gq(),g)
x.l()}}},
b6v(d,e,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.gaGG(),i=e.a,h=i.c,g=this.a,f=g.x
if(g.c===8){x=J.dz(i.ga4(i))
w=a0*e.a.gjA()+a1*h
v=a2*h
if(h===j){if(a2===1){D.m.dd(x,w,w+a3*j,d)
return}for(i=x.$flags|0,u=0,t=0;u<a3;++u,w+=v)for(s=0;s<j;++s,t=r){r=t+1
g=d[t]
i&2&&C.z(x)
x[w+s]=g}return}q=(f[0]&255)<<8|f[1]&255
p=(f[2]&255)<<8|f[3]&255
o=(f[4]&255)<<8|f[5]&255
for(i=x.$flags|0,u=0,t=0;u<a3;++u,t+=3,w+=v){n=d[t]
m=d[t+1]
l=d[t+2]
i&2&&C.z(x)
x[w]=n
x[w+1]=m
x[w+2]=l
g=n===q&&m===p&&l===o?0:255
x[w+3]=g}return}x=y.Q.a(i).d
w=(a0*e.gbU()+a1)*h
v=a2*h
if(h===j)for(i=x.$flags|0,u=0,t=0;u<a3;++u,w+=v)for(s=0;s<j;++s,t+=2){g=d[t]
k=d[t+1]
i&2&&C.z(x)
x[w+s]=(g<<8|k)>>>0}else if(j===3){q=(f[0]&255)<<8|f[1]&255
p=(f[2]&255)<<8|f[3]&255
o=(f[4]&255)<<8|f[5]&255
for(i=x.$flags|0,u=0,t=0;u<a3;++u,t+=6,w+=v){n=(d[t]<<8|d[t+1])>>>0
m=(d[t+2]<<8|d[t+3])>>>0
l=(d[t+4]<<8|d[t+5])>>>0
i&2&&C.z(x)
x[w]=n
x[w+1]=m
x[w+2]=l
g=n===q&&m===p&&l===o?0:65535
x[w+3]=g}}else{p=(f[0]&255)<<8|f[1]&255
for(i=x.$flags|0,u=0,t=0;u<a3;++u,t+=2,w+=v){m=(d[t]<<8|d[t+1])>>>0
i&2&&C.z(x)
x[w]=m
x[w+1]=m
x[w+2]=m
g=m===p?0:65535
x[w+3]=g}}},
b4W(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=f.length,l=e<m?e:m
switch(d.a){case 0:break
case 1:for(x=f.$flags|0,w=e;w<m;++w){v=f[w]
u=f[w-e]
x&2&&C.z(f)
f[w]=v+u}break
case 2:if(g!=null)for(x=f.$flags|0,w=0;w<m;++w){v=f[w]
u=g[w]
x&2&&C.z(f)
f[w]=v+u}break
case 3:if(g==null)for(x=f.$flags|0,w=e;w<m;++w){v=f[w]
u=f[w-e]
x&2&&C.z(f)
f[w]=v+(u>>>1)}else{for(x=f.$flags|0,w=0;w<l;++w){v=f[w]
u=g[w]
x&2&&C.z(f)
f[w]=v+(u>>>1)}for(w=e;w<m;++w){v=f[w]
u=f[w-e]
t=g[w]
x&2&&C.z(f)
f[w]=v+(u+t>>>1)}}break
case 4:if(g==null)for(x=f.$flags|0,w=e;w<m;++w){v=f[w]
u=f[w-e]
x&2&&C.z(f)
f[w]=v+u}else{for(x=f.$flags|0,w=0;w<l;++w){v=f[w]
u=g[w]
x&2&&C.z(f)
f[w]=v+u}for(w=e;w<m;++w){v=w-e
s=f[v]
r=g[w]
q=g[v]
p=r-q
o=s-q
n=p+o
if(p<0)p=-p
if(o<0)o=-o
if(n<0)n=-n
v=f[w]
if(p<=o&&p<=n)u=s
else u=o<=n?r:q
x&2&&C.z(f)
f[w]=v+u}}break}},
tl(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.b1()
if(e===16)return d.a6()
for(x=d.c;w=s.d,w<e;){w=d.d
if(w>=x)throw C.o(C.bP("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.Q(v,w)
w=s.d
s.c=D.c.bW(u,w)
s.d=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.c.dN(s.c,x)
s.d=x
return w&t},
b1q(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.tl(d,w.c)
return
case 2:e[0]=x.tl(d,w.c)
e[1]=x.tl(d,w.c)
e[2]=x.tl(d,w.c)
return
case 3:e[0]=x.tl(d,w.c)
return
case 4:e[0]=x.tl(d,w.c)
e[1]=x.tl(d,w.c)
return
case 6:e[0]=x.tl(d,w.c)
e[1]=x.tl(d,w.c)
e[2]=x.tl(d,w.c)
e[3]=x.tl(d,w.c)
return}throw C.o(C.bP("Invalid color type: "+v+"."))},
b3c(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.d
switch(p){case 0:p=q.x
if(p!=null&&q.c>8){q=p[0]
p=p[1]
x=e[0]
d.ig(x,x,x,x!==((q&255)<<8|p&255)?d.gbJ():0)
return}d.jP(e[0],0,0)
return
case 2:w=e[0]
x=e[1]
v=e[2]
q=q.x
if(q!=null){p=q[0]
u=q[1]
t=q[2]
s=q[3]
r=q[4]
q=q[5]
if(w!==((p&255)<<8|u&255)||x!==((t&255)<<8|s&255)||v!==((r&255)<<8|q&255)){d.ig(w,x,v,d.gbJ())
return}}d.jP(w,x,v)
return
case 3:d.scP(e[0])
return
case 4:d.ig(e[0],0,0,e[1])
return
case 6:d.ig(e[0],e[1],e[2],e[3])
return}throw C.o(C.bP("Invalid color type: "+p+"."))}}
A.ais.prototype={$iaO:1}
A.EA.prototype={
M(){return"PnmFormat."+this.b}}
A.Ks.prototype={
gbU(){return this.a},
gaV(){return this.b}}
A.bpL.prototype={
lc(d){var x
this.b=C.d5(d,!1,null,0)
x=this.arI()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
oO(d,e){return C.fQ(new A.bpO(this,d,e))},
bRg(d,e){if(this.jB(d)==null)return null
return this.i5(0)},
jB(d){return C.fQ(new A.bpP(this,d))},
bRi(d){var x,w,v,u=this
u.b=C.d5(d,!1,null,0)
x=u.arI()
if(x==="P1"){w=u.a=new A.Ks(B.qW)
w.e=B.a9y}else if(x==="P2"){w=u.a=new A.Ks(B.qW)
w.e=B.a9z}else if(x==="P5"){w=u.a=new A.Ks(B.qW)
w.e=B.HN}else if(x==="P3"){w=u.a=new A.Ks(B.qW)
w.e=B.a9A}else if(x==="P6"){w=u.a=new A.Ks(B.qW)
w.e=B.HO}else return u.b=null
w.a=u.Yh()
w=u.a
w.toString
w.b=u.Yh()
w=u.a
v=w.a
if(v<1||w.b<1)return u.a=u.b=null
A.o9(v,w.b,u.d,!1)
return u.a},
i5(d){return C.fQ(new A.bpN(this,d))},
bRh(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
q=q.e
if(q===B.a9y){s.aDd(1)
q=s.a
x=q.a
w=C.hA(r,r,D.fK,0,D.bI,q.b,r,0,1,r,D.ah,x,!1)
for(q=w.a,q=q.gN(q);q.l();){v=q.gq()
if(s.arI()==="1")v.jP(1,1,1)
else v.jP(0,0,0)}return w}else if(q===B.a9z||q===B.HN){u=s.Yh()
if(u===0)return r
s.aDd(1)
q=s.a
x=q.a
q=q.b
w=C.hA(r,r,s.bb1(u),0,D.bI,q,r,0,1,r,D.ah,x,!1)
for(q=w.a,q=q.gN(q);q.l();){v=q.gq()
t=s.atf(s.a.e,u)
v.jP(t,t,t)}return w}else if(q===B.a9A||q===B.HO){u=s.Yh()
if(u===0)return r
s.aDd(3)
q=s.a
x=q.a
q=q.b
w=C.hA(r,r,s.bb1(u),0,D.bI,q,r,0,3,r,D.ah,x,!1)
for(q=w.a,q=q.gN(q);q.l();)q.gq().jP(s.atf(s.a.e,u),s.atf(s.a.e,u),s.atf(s.a.e,u))
return w}return r},
aDd(d){var x,w=this.a,v=w.a
w=w.b
x=this.b
if(x.c-x.d+this.c.gt(0)<v*w*d)throw C.o(C.bP("Truncated PNM data"))},
bb1(d){if(d>255)return D.dl
if(d>15)return D.ah
if(d>3)return D.hj
if(d>1)return D.hi
return D.fK},
atf(d,e){if(d===B.HN||d===B.HO)return this.b.b1()
return this.Yh()},
Yh(){var x,w,v=this.arI()
if(J.aJ(v)===0)return 0
try{x=C.bZ(v,null,null)
return x}catch(w){return 0}},
arI(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(!x.gX(0))return x.wi()
w=D.d.a2(t.ciT())
if(w.length===0)return""
while(D.d.aK(w,"#"))w=D.d.a2(this.b.bf0(70))
t=y.U
v=C.M(new C.aw(C.a(w.split(" "),y.s),new A.bpM(),t),t.i("F.E"))
for(t=v.length,u=0;u<t;++u)if(D.d.aK(v[u],"#")){D.b.st(v,u)
break}x.C(0,v)
if(x.b===x.c)return""
return x.wi()}}
A.auM.prototype={}
A.auN.prototype={}
A.xG.prototype={}
A.auP.prototype={}
A.auQ.prototype={}
A.auT.prototype={}
A.auU.prototype={}
A.a5w.prototype={}
A.auS.prototype={}
A.brg.prototype={
bt4(d){var x,w,v,u,t=this
d.a6()
d.a6()
d.a6()
d.a6()
x=D.c.ac(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.a6()
v.$flags&2&&C.z(v)
v[w]=u
u=t.f
v=d.a6()
u.$flags&2&&C.z(u)
u[w]=v
v=t.r
u=d.a6()
v.$flags&2&&C.z(v)
v[w]=u
u=t.w
v=d.a6()
u.$flags&2&&C.z(u)
u[w]=v}}}}
A.T5.prototype={
beX(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.a6()
switch(h){case 0:g.toString
this.bSN(d,e,f,g)
break
case 1:if(i==null)i=this.bSH(d,f)
g.toString
this.bSM(d,e,f,g,i,j)
break
default:throw C.o(C.bP("Unsupported compression: "+h))}},
ciS(d,e,f,g){return this.beX(d,e,f,g,null,null,0)},
bSH(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.a6()
return w},
bSN(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.m.dg(x,0,w,255)
return}this.c=d.da(w).bK()},
bSM(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.m.dg(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.h4(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.bzF(s,x,v)
v+=e}},
bzF(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.Q(t,u)
t=$.oe()
t.$flags&2&&C.z(t)
t[0]=u
s=$.p6()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.Q(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&C.z(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.Q(d.a,d.d++)
w&2&&C.z(e)
e[f]=u}}}},
gaB(){return this.a}}
A.vg.prototype={
M(){return"PsdColorMode."+this.b}}
A.brl.prototype={
gc3w(){var x=this.e
x===$&&C.d()
return x},
bt5(d,e){var x,w,v=this
v.as=C.d5(d,!0,null,0)
v.bRP()
if(v.c!==943870035)return
x=v.as.Y()
v.as.da(x)
x=v.as.Y()
v.ax=v.as.da(x)
x=v.as.Y()
v.ay=v.as.da(x)
w=v.as
v.ch=w.da(w.c-w.d)},
nO(){var x,w=this
if(w.c===943870035){x=w.as
x===$&&C.d()
x=x==null}else x=!0
if(x)return!1
A.o9(w.a,w.b,w.CW,!1)
x=w.e
x===$&&C.d()
if(x<1||x>56)throw C.o(C.bP("Invalid number of PSD channels: "+w.gc3w()))
w.bSF()
w.bSG()
w.bSJ()
w.ch=w.ay=w.ax=w.as=null
return!0},
c6P(){if(!this.nO())return null
return this.cjI()},
cjI(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.y
if(a0!=null)return a0
a0=e.a
a0=C.hA(d,d,D.ah,0,D.bI,e.b,d,0,4,d,D.ah,a0,!1)
e.y=a0
a0.a7(0)
for(a0=e.w,x=0;x<a0.length;++x){w=a0[x]
v=w.y
v===$&&C.d()
if((v&2)!==0)continue
v=w.w
v===$&&C.d()
u=v/255
t=w.r
s=w.cx
v=w.a
v.toString
r=v
q=0
for(;;){v=w.f
v===$&&C.d()
if(!(q<v))break
v=w.a
v.toString
p=v+q
o=w.b
v=r>=0
n=0
for(;;){m=w.e
m===$&&C.d()
if(!(n<m))break
m=s.a
l=m==null?d:m.cZ(n,q,d)
if(l==null)l=new C.fn()
k=D.e.G(l.gaz())
j=D.e.G(l.gaM())
i=D.e.G(l.gaL())
h=D.e.G(l.gaJ())
o.toString
if(o>=0&&o<e.a&&v&&r<e.b){m=w.b
m.toString
g=e.y.a
f=g==null?d:g.cZ(m+n,p,d)
if(f==null)f=new C.fn()
e.bve(D.e.G(f.gaz()),D.e.G(f.gaM()),D.e.G(f.gaL()),D.e.G(f.gaJ()),k,j,i,h,t,u,f)}++n;++o}++q;++r}}a0=e.y
a0.toString
return a0},
bve(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
switch(l){case 1885434739:x=g
w=f
v=e
u=d
break
case 1852797549:x=k
w=j
v=i
u=h
break
case 1684632435:x=k
w=j
v=i
u=h
break
case 1684107883:u=Math.min(d,h)
v=Math.min(e,i)
w=Math.min(f,j)
x=k
break
case 1836411936:u=D.c.U(d*h,8)
v=D.c.U(e*i,8)
w=D.c.U(f*j,8)
x=k
break
case 1768188278:u=A.brm(d,h)
v=A.brm(e,i)
w=A.brm(f,j)
x=k
break
case 1818391150:u=A.bro(d,h)
v=A.bro(e,i)
w=A.bro(f,j)
x=k
break
case 1684751212:x=k
w=j
v=i
u=h
break
case 1818850405:u=Math.max(d,h)
v=Math.max(e,i)
w=Math.max(f,j)
x=k
break
case 1935897198:u=A.cFC(d,h)
v=A.cFC(e,i)
w=A.cFC(f,j)
x=k
break
case 1684633120:u=A.brn(d,h)
v=A.brn(e,i)
w=A.brn(f,j)
x=k
break
case 1818518631:u=h+d>255?255:d+h
v=i+e>255?255:e+i
w=j+f>255?255:f+j
x=k
break
case 1818706796:x=k
w=j
v=i
u=h
break
case 1870030194:u=A.cFA(d,h,g,k)
v=A.cFA(e,i,g,k)
w=A.cFA(f,j,g,k)
x=k
break
case 1934387572:u=A.cFD(d,h)
v=A.cFD(e,i)
w=A.cFD(f,j)
x=k
break
case 1749838196:u=A.cFy(d,h)
v=A.cFy(e,i)
w=A.cFy(f,j)
x=k
break
case 1984719220:u=A.cFE(d,h)
v=A.cFE(e,i)
w=A.cFE(f,j)
x=k
break
case 1816947060:u=A.cFz(d,h)
v=A.cFz(e,i)
w=A.cFz(f,j)
x=k
break
case 1884055924:u=A.cFB(d,h)
v=A.cFB(e,i)
w=A.cFB(f,j)
x=k
break
case 1749903736:u=h<255-d?0:255
v=i<255-e?0:255
w=j<255-f?0:255
x=k
break
case 1684629094:u=Math.abs(h-d)
v=Math.abs(i-e)
w=Math.abs(j-f)
x=k
break
case 1936553316:u=A.cFx(d,h)
v=A.cFx(e,i)
w=A.cFx(f,j)
x=k
break
case 1718842722:x=k
w=j
v=i
u=h
break
case 1717856630:x=k
w=j
v=i
u=h
break
case 1752524064:x=k
w=j
v=i
u=h
break
case 1935766560:x=k
w=j
v=i
u=h
break
case 1668246642:x=k
w=j
v=i
u=h
break
case 1819634976:x=k
w=j
v=i
u=h
break
default:x=k
w=j
v=i
u=h}t=1-s
n.saz(D.e.G(d*t+u*s))
n.saM(D.e.G(e*t+v*s))
n.saL(D.e.G(f*t+w*s))
n.saJ(D.e.G(g*t+x*s))},
bRP(){var x,w,v=this,u=v.as
u===$&&C.d()
v.c=u.Y()
u=v.as.a6()
v.d=u
if(u!==1){v.c=0
return}x=v.as.da(6)
for(w=0;w<6;++w)if(J.Q(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.a6()
v.b=v.as.Y()
v.a=v.as.Y()
v.f=v.as.a6()
v.r=B.aXt[v.as.a6()]},
bSF(){var x,w,v,u,t,s=this,r=s.ax
r.d=r.b
for(r=s.z;x=s.ax,x.d<x.c;){w=x.Y()
v=s.ax.a6()
x=s.ax
u=J.Q(x.a,x.d++)
s.ax.iu(u)
if((u&1)===0)++s.ax.d
u=s.ax.Y()
x=s.ax
t=x.h4(u)
x.d=x.d+(t.c-t.d)
if((u&1)===1)++s.ax.d
if(w===943868237)r.j(0,v,new A.auO(v))}},
bSG(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ay
h.d=h.b
x=h.Y()
if((x&1)!==0)++x
w=i.ay.da(x)
h=i.w
D.b.a7(h)
if(x>0){v=w.a6()
u=$.od()
u.$flags&2&&C.z(u)
u[0]=v
t=$.p5()[0]
if(t<0)t=-t
for(v=y.N,u=y.c,s=y.l,r=y.x,q=0;q<t;++q){p=new A.auR(C.t(v,u),C.a([],s),C.a([],r))
p.bt6(w)
h.push(p)}}v=i.CW
o=new A.Aw(v)
n=i.f===16?2:1
u=i.a
s=i.b
r=i.e
r===$&&C.d()
m=u*s*r*n
for(u=h.length,l=0;l<h.length;h.length===u||(0,C.q)(h),++l){p=h[l]
s=p.e
s===$&&C.d()
r=p.f
r===$&&C.d()
A.o9(s,r,v,!0)
o.iX(0,p.e,p.f)
r=p.e
s=p.f
k=p.as
k===$&&C.d()
m+=r*s*k.length*n}if(m>Math.max(128*i.at,16777216))throw C.o(C.bP("PSD data is too small for its size"))
for(q=0;q<h.length;++q)h[q].ciK(w,i)
x=i.ay.Y()
j=i.ay.da(x)
if(x>0){j.a6()
j.a6()
j.a6()
j.a6()
j.a6()
j.a6()
j.b1()}},
bSJ(){var x,w,v,u,t,s,r=this,q=r.ch
q.d=q.b
x=q.a6()
if(x===1){q=r.b
w=r.e
w===$&&C.d()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.ch.a6()}else u=null
r.x=C.a([],y.X)
t=0
for(;;){q=r.e
q===$&&C.d()
if(!(t<q))break
q=r.x
w=r.ch
w.toString
s=t===3?-1:t
s=new A.T5(s)
s.beX(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cSD(r.r,r.f,r.a,r.b,r.x)},
gbU(){return this.a},
gaV(){return this.b}}
A.auO.prototype={
gaB(){return this.a}}
A.auR.prototype={
bt6(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.Y(),a0=$.he()
a0.$flags&2&&C.z(a0)
a0[0]=d
d=$.kv()
e.a=d[0]
a0[0]=a1.Y()
e.b=d[0]
a0[0]=a1.Y()
e.c=d[0]
a0[0]=a1.Y()
d=d[0]
e.d=d
a0=e.b
a0.toString
e.e=d-a0
a0=e.c
d=e.a
d.toString
e.f=a0-d
e.as=C.a([],y.X)
x=a1.a6()
for(w=0;w<x;++w){d=a1.a6()
a0=$.od()
a0.$flags&2&&C.z(a0)
a0[0]=d
v=$.p5()[0]
a1.Y()
e.as.push(new A.T5(v))}u=a1.Y()
if(u!==943868237)throw C.o(C.bP("Invalid PSD layer signature: "+D.c.hz(u,16)))
e.r=a1.Y()
e.w=a1.b1()
a1.b1()
e.y=a1.b1()
if(a1.b1()!==0)throw C.o(C.bP("Invalid PSD layer data"))
t=a1.Y()
s=a1.da(t)
if(t>0){t=s.Y()
if(t>0){r=s.da(t)
d=r.d
r.Y()
r.Y()
r.Y()
r.Y()
r.b1()
r.b1()
if(r.c-d===20)r.d+=2
else{r.b1()
r.b1()
r.Y()
r.Y()
r.Y()
r.Y()}}t=s.Y()
if(t>0)new A.brg().bt4(s.da(t))
t=s.b1()
s.iu(t)
q=4-D.c.Z(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.C;s.d<d;){u=s.Y()
if(u!==943868237)throw C.o(C.bP("PSD invalid signature for layer additional data: "+D.c.hz(u,16)))
n=s.iu(4)
t=s.Y()
m=s.h4(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.j(0,n,A.dgl(n,m))
if(n==="lrFX"){k=A.df(o.a(a0.h(0,"lrFX")).b,null,0)
k.a6()
j=k.a6()
for(i=0;i<j;++i){k.iu(4)
h=k.iu(4)
g=k.Y()
if(h==="dsdw"){f=new A.auN()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.Y()
k.Y()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.iu(8)
f.b=J.Q(k.a,k.d++)!==0
J.Q(k.a,k.d++)
J.Q(k.a,k.d++)
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()}else if(h==="isdw"){f=new A.auQ()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.Y()
k.Y()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.iu(8)
f.b=J.Q(k.a,k.d++)!==0
J.Q(k.a,k.d++)
J.Q(k.a,k.d++)
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()}else if(h==="oglw"){f=new A.auT()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.iu(8)
f.b=J.Q(k.a,k.d++)!==0
J.Q(k.a,k.d++)
if(f.a===2){k.a6()
k.a6()
k.a6()
k.a6()
k.a6()}}else if(h==="iglw"){f=new A.auP()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.iu(8)
f.b=J.Q(k.a,k.d++)!==0
J.Q(k.a,k.d++)
if(f.a===2){J.Q(k.a,k.d++)
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()}}else if(h==="bevl"){f=new A.auM()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.Y()
k.iu(8)
k.iu(8)
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
J.Q(k.a,k.d++)
J.Q(k.a,k.d++)
J.Q(k.a,k.d++)
f.b=J.Q(k.a,k.d++)!==0
J.Q(k.a,k.d++)
J.Q(k.a,k.d++)
if(f.a===2){k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()}}else if(h==="sofi"){f=new A.auU()
p.push(f)
f.a=k.Y()
k.iu(4)
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()
J.Q(k.a,k.d++)
f.b=J.Q(k.a,k.d++)!==0
k.a6()
k.a6()
k.a6()
k.a6()
k.a6()}else k.d+=g}}}}},
ciK(d,e){var x,w,v,u,t,s=this,r=0
for(;;){x=s.as
x===$&&C.d()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&C.d()
v=s.f
v===$&&C.d()
x.ciS(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&C.d()
t=s.f
t===$&&C.d()
s.cx=A.cSD(w,v,u,t,x)}}
A.T6.prototype={}
A.brh.prototype={
lc(d){var x,w
try{x=A.cSC(d,null).c
return x===943870035}catch(w){return!1}},
oO(d,e){return C.fQ(new A.brj(this,d,e))},
bRO(d,e){var x,w,v,u=this
if(u.jB(d)==null)return null
x=u.a==null?null:1
if(x==null)x=0
if(x===1)return u.i5(0)
for(w=null,v=0;v<x;++v){e=u.i5(v)
if(e==null)continue
if(w==null){e.w=B.OS
w=e}else w.pH(e)}return w},
jB(d){return C.fQ(new A.brk(this,d))},
i5(d){return C.fQ(new A.bri(this,d))}}
A.auX.prototype={}
A.AJ.prototype={
aN(d,e){return new A.AJ(this.a*e,this.b*e,this.c*e)},
ag(d,e){return new A.AJ(this.a+e.a,this.b+e.b,this.c+e.c)},
aA(d,e){return new A.AJ(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.mP.prototype={
aN(d,e){var x=this
return new A.mP(x.a*e,x.b*e,x.c*e,x.d*e)},
ag(d,e){var x=this
return new A.mP(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
aA(d,e){var x=this
return new A.mP(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a5y.prototype={
gbU(){return this.a},
gaV(){return this.b}}
A.T8.prototype={
gaV(){return this.f},
gbU(){return this.r}}
A.auW.prototype={
gbU(){return this.a},
gaV(){return this.b}}
A.tu.prototype={
sa4E(d){var x=this.a,w=this.b
x.$flags&2&&C.z(x)
x[w+1]=d},
aoR(){var x=this.e,w=this.d
if(x)return new A.AJ(B.ik[w>>>9],B.ik[w>>>4&31],B.fU[w&15])
else return new A.AJ(B.fU[w>>>7&15],B.fU[w>>>3&15],B.An[w&7])},
aoT(){var x=this.e,w=this.d
if(x)return new A.mP(B.ik[w>>>9],B.ik[w>>>4&31],B.fU[w&15],255)
else return new A.mP(B.fU[w>>>7&15],B.fU[w>>>3&15],B.An[w&7],B.An[w>>>11&7])},
aoS(){var x=this.r,w=this.f
if(x)return new A.AJ(B.ik[w>>>10],B.ik[w>>>5&31],B.ik[w&31])
else return new A.AJ(B.fU[w>>>8&15],B.fU[w>>>4&15],B.fU[w&15])},
aoU(){var x=this.r,w=this.f
if(x)return new A.mP(B.ik[w>>>10],B.ik[w>>>5&31],B.ik[w&31],255)
else return new A.mP(B.fU[w>>>8&15],B.fU[w>>>4&15],B.fU[w&15],B.An[w>>>12&7])},
Xh(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
uW(){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sa4E(x.Xh())
x.d=w>>>1&16383
x.sa4E(x.Xh())
x.e=(w>>>15&1)===1
x.sa4E(x.Xh())
x.f=w>>>16&32767
x.sa4E(x.Xh())
x.r=(w>>>31&1)===1
x.sa4E(x.Xh())}}
A.brL.prototype={
lc(d){var x,w
try{x=this.jB(d)
return x!=null}catch(w){return!1}},
jB(d){return C.fQ(new A.brO(this,d))},
bXC(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.bzg(d)
if(x!=null){w.a=d
return w.b=x}}x=w.bzE(d)
if(x!=null){w.a=d
return w.b=x}x=w.bzC(d)
if(x!=null){w.a=d
return w.b=x}return null},
bzE(d){var x,w,v=C.d5(d,!1,null,0)
if(v.c-v.d<52)return null
if(v.Y()!==55727696)return null
x=C.a([0,0,0,0],y.t)
w=new A.T8(x)
v.Y()
w.b=v.Y()
x[0]=v.b1()
x[1]=v.b1()
x[2]=v.b1()
x[3]=v.b1()
v.Y()
v.Y()
w.f=v.Y()
w.r=v.Y()
v.Y()
v.Y()
v.Y()
v.Y()
w.Q=v.Y()
return w},
bzC(d){var x,w,v=C.d5(d,!1,null,0)
if(v.Y()!==52)return null
x=new A.a5y()
x.b=v.Y()
x.a=v.Y()
v.Y()
x.d=v.Y()
v.Y()
x.f=v.Y()
v.Y()
v.Y()
v.Y()
x.y=v.Y()
w=v.Y()
x.z=w
x.Q=v.Y()
if(w!==559044176)return null
return x},
bzg(d){var x,w,v,u,t,s,r=null,q=d.length,p=C.d5(d,!1,r,0)
if(p.Y()!==0)return r
x=new A.auW()
x.b=p.Y()
x.a=p.Y()
p.Y()
p.Y()
p.Y()
p.Y()
p.Y()
p.Y()
p.Y()
w=p.Y()
x.y=w
if(w===559044176)return r
v=0
u=8
if(!(q===32)){t=0
for(;;){if(!(t<10)){v=1
break}s=t<<1>>>0
if((D.c.c2(64,s)&q)>>>0!==0){u=D.c.c2(16,t)
v=1
break}if((D.c.c2(128,s)&q)>>>0!==0){u=D.c.c2(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
i5(d){return C.fQ(new A.brM(this,d))},
bzu(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
A.o9(u.gbU(),v.b.gaV(),v.c,!1)
u=v.b
if(u instanceof A.auW){u=u.a
x=v.b.gaV()
w=v.a
w.toString
return v.aDN(u,x,w)}else if(u instanceof A.a5y){u=v.a
u.toString
return v.bzB(u)}else if(u instanceof A.T8){u=v.a
u.toString
return v.bzD(u)}return null},
oO(d,e){return C.fQ(new A.brN(this,d,e))},
bRZ(d,e){if(this.jB(d)==null)return null
return this.i5(0)},
bzB(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.T.a(x)
w=C.d5(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=C.hA(k,k,D.ah,0,D.bI,t,k,0,4,k,D.ah,u,!1)
for(x=s.a,x=x.gN(x);x.l();){r=x.gq()
q=J.Q(w.a,w.d++)
p=J.Q(w.a,w.d++)
r.saz(p&240)
r.saM((p&15)<<4)
r.saL(q&240)
r.saJ((q&15)<<4)}return s
case 17:s=C.hA(k,k,D.ah,0,D.bI,t,k,0,4,k,D.ah,u,!1)
for(x=s.a,x=x.gN(x);x.l();){r=x.gq()
o=w.a6()
n=(o&1)!==0?255:0
r.saz(o>>>8&248)
r.saM(o>>>3&248)
r.saL((o&62)<<2)
r.saJ(n)}return s
case 18:s=C.hA(k,k,D.ah,0,D.bI,t,k,0,4,k,D.ah,u,!1)
for(x=s.a,x=x.gN(x);x.l();){r=x.gq()
r.saz(J.Q(w.a,w.d++))
r.saM(J.Q(w.a,w.d++))
r.saL(J.Q(w.a,w.d++))
r.saJ(J.Q(w.a,w.d++))}return s
case 19:s=C.hA(k,k,D.ah,0,D.bI,t,k,0,3,k,D.ah,u,!1)
for(x=s.a,x=x.gN(x);x.l();){r=x.gq()
o=w.a6()
r.saz(o>>>8&248)
r.saM(o>>>3&252)
r.saL((o&31)<<3)}return s
case 20:s=C.hA(k,k,D.ah,0,D.bI,t,k,0,3,k,D.ah,u,!1)
for(x=s.a,x=x.gN(x);x.l();){r=x.gq()
o=w.a6()
r.saz((o&31)<<3)
r.saM(o>>>2&248)
r.saL(o>>>7&248)}return s
case 21:s=C.hA(k,k,D.ah,0,D.bI,t,k,0,3,k,D.ah,u,!1)
for(x=s.a,x=x.gN(x);x.l();){r=x.gq()
r.saz(J.Q(w.a,w.d++))
r.saM(J.Q(w.a,w.d++))
r.saL(J.Q(w.a,w.d++))}return s
case 22:s=C.hA(k,k,D.ah,0,D.bI,t,k,0,1,k,D.ah,u,!1)
for(x=s.a,x=x.gN(x);x.l();)x.gq().saz(J.Q(w.a,w.d++))
return s
case 23:s=C.hA(k,k,D.ah,0,D.bI,t,k,0,4,k,D.ah,u,!1)
for(x=s.a,x=x.gN(x);x.l();){r=x.gq()
n=J.Q(w.a,w.d++)
m=J.Q(w.a,w.d++)
r.saz(m)
r.saM(m)
r.saL(m)
r.saJ(n)}return s
case 24:return k
case 25:return x.y===0?l.aVV(u,t,w.bK()):l.aDN(u,t,w.bK())}return k},
bzD(d){var x,w,v,u=this
if(!(u.b instanceof A.T8))return null
x=C.d5(d,!1,null,0)
w=x.d+=52
v=y.k.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.aVV(v.r,v.f,x.bK())
case 3:return u.aDN(v.r,v.f,x.bK())}return null},
aVV(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.hA(b5,b5,D.ah,0,D.bI,c6,b5,0,3,b5,D.ah,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.mn(D.m.ga4(c7),0,null),c0=new A.tu(b9),c1=new A.tu(J.mn(D.m.ga4(c7),0,null)),c2=new A.tu(J.mn(D.m.ga4(c7),0,null)),c3=new A.tu(J.mn(D.m.ga4(c7),0,null)),c4=new A.tu(J.mn(D.m.ga4(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.AK(v,x)<<1>>>0
c0.uW()
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.AK(l,p)<<1>>>0
c1.uW()
c2.b=A.AK(k,p)<<1>>>0
c2.uW()
c3.b=A.AK(l,o)<<1>>>0
c3.uW()
c4.b=A.AK(k,o)<<1>>>0
c4.uW()
j=c1.aoR()
i=B.en[r][0]
h=c2.aoR()
g=B.en[r][1]
f=c3.aoR()
e=B.en[r][2]
d=c4.aoR()
a0=B.en[r][3]
a1=c1.aoS()
a2=B.en[r][0]
a3=c2.aoS()
a4=B.en[r][1]
a5=c3.aoS()
a6=B.en[r][2]
a7=c4.aoS()
a8=B.en[r][3]
a9=B.W6[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.U((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.U((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.U((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.jO(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
aDN(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=C.hA(a4,a4,D.ah,0,D.bI,b5,a4,0,4,a4,D.ah,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.mn(D.m.ga4(b6),0,null),a9=new A.tu(a8),b0=new A.tu(J.mn(D.m.ga4(b6),0,null)),b1=new A.tu(J.mn(D.m.ga4(b6),0,null)),b2=new A.tu(J.mn(D.m.ga4(b6),0,null)),b3=new A.tu(J.mn(D.m.ga4(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.AK(v,x)<<1>>>0
a9.uW()
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.AK(l,p)<<1>>>0
b0.uW()
b1.b=A.AK(k,p)<<1>>>0
b1.uW()
b2.b=A.AK(l,o)<<1>>>0
b2.uW()
b3.b=A.AK(k,o)<<1>>>0
b3.uW()
j=b0.aoT()
i=B.en[r][0]
h=b1.aoT()
g=B.en[r][1]
g=new A.mP(j.a*i,j.b*i,j.c*i,j.d*i).ag(0,new A.mP(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.aoT()
i=B.en[r][2]
i=g.ag(0,new A.mP(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.aoT()
g=B.en[r][3]
f=i.ag(0,new A.mP(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.aoU()
h=B.en[r][0]
i=b1.aoU()
j=B.en[r][1]
j=new A.mP(g.a*h,g.b*h,g.c*h,g.d*h).ag(0,new A.mP(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.aoU()
h=B.en[r][2]
h=j.ag(0,new A.mP(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.aoU()
j=B.en[r][3]
e=h.ag(0,new A.mP(i.a*j,i.b*j,i.c*j,i.d*j))
d=B.W6[s+t&3]
j=d[0]
i=d[1]
a0=D.c.U(f.a*j+e.a*i,7)
a1=D.c.U(f.b*j+e.b*i,7)
a2=D.c.U(f.c*j+e.c*i,7)
a3=D.c.U(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.iP(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.az5.prototype={
bk(d){var x,w=this
if(d.c-d.d<18)return
w.a=d.b1()
w.b=d.b1()
x=d.b1()
w.c=x<12?B.aGO[x]:B.C1
d.a6()
w.e=d.a6()
w.f=d.b1()
d.a6()
d.a6()
w.x=d.a6()
w.y=d.a6()
w.z=d.b1()
w.Q=d.b1()},
bcM(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===B.kL||w===B.kM){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0},
gbU(){return this.x},
gaV(){return this.y}}
A.oI.prototype={
M(){return"TgaImageType."+this.b}}
A.bF_.prototype={
oO(d,e){return C.fQ(new A.bF1(this,d,e))},
bYF(d,e){if(this.jB(d)==null)return null
return this.i5(0)},
jB(d){return C.fQ(new A.bF2(this,d))},
bYH(d){var x,w,v,u,t=this
t.a=new A.az5(B.C1)
x=C.d5(d,!1,null,0)
t.b=x
w=x.da(18)
t.a.bk(w)
x=t.a
if(!x.bcM()||x.x<1||x.y<1)return null
v=t.b
v.d+=x.a
u=x.c
if(u===B.kL||u===B.kM)x.as=v.da(x.e*D.c.U(x.f,3)).bK()
x=t.a
x.ax=t.b.d
return x},
i5(d){return C.fQ(new A.bF0(this,d))},
bYG(d){var x=this,w=x.a
if(w==null)return null
A.o9(w.x,w.y,x.c,!1)
w=x.a.c
if(w===B.acX)return x.aVU()
else if(w===B.acW||w===B.kM)return x.bzH()
else if(w===B.kL)return x.aVU()
return null},
aVK(d,e){var x,w,v,u,t,s,r,q=this,p=C.d5(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&C.d()
x=o.a6()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.ut(s,w)
e.us(s,v)
e.ur(s,u)
e.uq(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.Q(p.a,p.d++)
v=J.Q(p.a,p.d++)
w=J.Q(p.a,p.d++)
t=r?J.Q(p.a,p.d++):255
e.ut(s,w)
e.us(s,v)
e.ur(s,u)
e.uq(s,t)}}},
bzH(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=C.hA(i,i,D.ah,0,D.bI,a0,i,0,a1,i,D.ah,d,h===B.kL||h===B.kM)
h=x.a
if((h==null?i:h.gdV())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gdV()
d.toString
j.aVK(h,d)}w=x.gbU()
v=x.gaV()-1
h=g===8
u=0
for(;;){d=j.b
d===$&&C.d()
a0=d.d
if(!(a0<d.c&&v>=0))break
a1=d.a
d.d=a0+1
t=J.Q(a1,a0)
s=(t&127)+1
r=0
if((t&128)!==0)if(h){d=j.b
q=J.Q(d.a,d.d++)
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.lV(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.a6()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.iP(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{l=J.Q(d.a,d.d++)
d=j.b
m=J.Q(d.a,d.d++)
d=j.b
q=J.Q(d.a,d.d++)
if(e){d=j.b
k=J.Q(d.a,d.d++)}else k=255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.iP(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.Q(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.lV(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.a6()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.iP(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
d=j.b
if(d.d>=d.c){u=o
break}if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else for(p=0;p<s;++p){d=j.b
l=J.Q(d.a,d.d++)
d=j.b
m=J.Q(d.a,d.d++)
d=j.b
q=J.Q(d.a,d.d++)
if(e){d=j.b
k=J.Q(d.a,d.d++)}else k=255
o=u+1
d=x.a
if(d!=null)d.iP(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
aVU(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&C.d()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===B.kL||u===B.kM){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=C.hA(h,h,D.ah,0,D.bI,t,h,0,s,h,D.ah,u,x===B.kL||x===B.kM)
x=i.a
u=x.c
if(u===B.kL||u===B.kM){x=x.as
x.toString
u=r.a
u=u==null?h:u.gdV()
u.toString
i.aVK(x,u)}if(w===8)for(q=r.gaV()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.Q(g.a,g.d++)
g=r.a
if(g!=null)g.lV(p,q,o);++p}}else if(g)for(q=r.gaV()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.a6()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.iP(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gaV()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
l=J.Q(g.a,g.d++)
g=i.b
k=J.Q(g.a,g.d++)
g=i.b
j=J.Q(g.a,g.d++)
if(v){g=i.b
m=J.Q(g.a,g.d++)}else m=255
g=r.a
if(g!=null)g.iP(p,q,j,k,l,m);++p}}return r}}
A.bF9.prototype={
dq(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.b1()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.bW(w,v)+(t.b&E.lK[v])
d-=v
t.c=8
t.b=J.Q(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.b1()}x=D.c.bW(w,d)
v=t.b
u=t.c-d
w=x+(D.c.lp(v,u)&E.lK[d])
t.c=u}return w}}
A.az7.prototype={
k(d){var x=this,w=x.a,v=$.cCv().h(0,w)
if(v!=null)return v.a+": "+x.b.k(0)+" "+x.c
return"<"+w+">: "+x.b.k(0)+" "+x.c},
kJ(){var x,w,v,u,t,s=this,r=s.e
if(r!=null)return r
r=s.f
x=s.d
r.d=x
w=s.c
v=s.b
u=v!==D.af
if(w*(u?D.jZ[v.a]:0)>r.c-x)throw C.o(C.bP("Invalid TIFF tag "+s.a+" count: "+w))
t=r.da(w*(u?D.jZ[v.a]:0))
switch(v.a){case 1:return s.e=new C.A_(new Uint8Array(C.bl(t.da(w).bK())))
case 2:return s.e=new C.J5(w===0?"":t.iu(w-1))
case 7:return s.e=new C.A_(new Uint8Array(C.bl(t.da(w).bK())))
case 3:return s.e=C.cPS(t,w)
case 4:return s.e=C.cPN(t,w)
case 5:return s.e=C.cPO(t,w)
case 11:return s.e=C.cPT(t,w)
case 12:return s.e=C.cPM(t,w)
case 6:return s.e=new C.DE(new Int8Array(C.bl(J.cCL(D.m.ga4(t.bK()),0,w))))
case 8:return s.e=C.cPR(t,w)
case 9:return s.e=C.cPP(t,w)
case 10:return s.e=C.cPQ(t,w)
case 13:case 0:return null}}}
A.bFd.prototype={
c6G(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.ac(u.a+7,8)
for(w=0,v=0;v<g;++v){u.aDL(d,w,f)
w+=x}},
aDL(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){while(w){v=p.As(10)
u=B.WA[v]
t=D.c.U(u,1)&15
if(t===12){u=B.yK[(v<<2&12|p.ox(2))>>>0]
s=D.c.U(u,1)
f+=D.c.U(u,4)&4095
p.kw(4-(s&7))}else if(t===0)throw C.o(C.bP("TIFFFaxDecoder0"))
else if(t===15)throw C.o(C.bP("TIFFFaxDecoder1"))
else{f+=D.c.U(u,5)&2047
p.kw(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}while(!w){u=B.QY[p.ox(4)]
r=u>>>5&2047
q=!0
if(r===100){u=B.SI[p.As(9)]
t=D.c.U(u,1)&15
r=D.c.U(u,5)&2047
if(t===12){p.kw(5)
u=B.yK[p.ox(4)]
s=D.c.U(u,1)
r=D.c.U(u,4)&4095
p.pD(d,e,f,r)
f+=r
p.kw(4-(s&7))}else if(t===15)throw C.o(C.bP("TIFFFaxDecoder2"))
else{p.pD(d,e,f,r)
f+=r
p.kw(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=B.QU[p.ox(2)]
r=u>>>5&2047
p.pD(d,e,f,r)
f+=r
p.kw(2-(u>>>1&15))
p.f[p.d++]=f}else{p.pD(d,e,f,r)
f+=r
p.kw(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
c6H(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.ac(x+7,8)
v=C.br(2,null,!1,y.I)
e.at=a3&1
e.as=a3>>>2&1
if(e.b1k()!==1)throw C.o(C.bP("TIFFFaxDecoder3"))
e.aDL(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.b1k()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
for(;;){r.toString
if(!(r<x))break
e.aXS(q,p,v)
n=v[0]
m=v[1]
l=B.Wg[e.ox(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.pD(d,u,r,m-r)}e.kw(7-j)
r=m
q=r}else if(k===1){e.kw(7-j)
i=o+1
h=i+1
if(p){r+=e.ar_()
e.f[o]=r
g=e.aqZ()
e.pD(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.aqZ()
e.pD(d,u,r,g)
r+=g
e.f[o]=r
r+=e.ar_()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.pD(d,u,r,f-r)
e.kw(7-j)}else throw C.o(C.bP("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.aDL(d,u,a1)
u+=w}},
c6X(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.ac(x+7,8)
v=C.br(2,null,!1,y.I)
u=a2.f
a2.d=0
a2.d=1
u[0]=x
a2.d=2
u[1]=x
for(t=0,s=0;s<a6;++s){r=a2.e
a2.e=a2.f
a2.f=r
a2.y=0
q=a5
p=-1
o=!0
n=0
for(;;){q.toString
if(!(q<x))break
a2.aXS(p,o,v)
m=v[0]
l=v[1]
k=B.Wg[a2.ox(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.pD(a3,t,q,l-q)}a2.kw(7-i)
q=l
p=q}else if(j===1){a2.kw(7-i)
h=n+1
g=h+1
if(o){q+=a2.ar_()
r[n]=q
f=a2.aqZ()
a2.pD(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.aqZ()
a2.pD(a3,t,q,f)
q+=f
r[n]=q
q+=a2.ar_()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.pD(a3,t,q,e-q)
a2.kw(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.ox(3)!==7)throw C.o(C.bP("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){while(a2.ox(1)!==1)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.ox(1)===0
if(a1){if(!o){h=n+1
r[n]=q
n=h}}else if(o){h=n+1
r[n]=q
n=h}o=a1
a0=!0}a1=d===5
if(a1){if(!o){h=n+1
r[n]=q
n=h}q+=d}else{q+=d
h=n+1
r[n]=q
a2.pD(a3,t,q,1);++q
n=h}}}else throw C.o(C.bP("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
ar_(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.As(10)
u=B.WA[v]
t=D.c.U(u,1)&15
if(t===12){u=B.yK[(v<<2&12|r.ox(2))>>>0]
s=D.c.U(u,1)
x+=D.c.U(u,4)&4095
r.kw(4-(s&7))}else if(t===0)throw C.o(C.bP("TIFFFaxDecoder0"))
else if(t===15)throw C.o(C.bP("TIFFFaxDecoder1"))
else{x+=D.c.U(u,5)&2047
r.kw(10-t)
if((u&1)===0)w=!1}}return x},
aqZ(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=B.QY[r.ox(4)]
u=v>>>5&2047
if(u===100){v=B.SI[r.As(9)]
t=D.c.U(v,1)&15
s=D.c.U(v,5)
if(t===12){r.kw(5)
v=B.yK[r.ox(4)]
s=D.c.U(v,1)
x+=D.c.U(v,4)&4095
r.kw(4-(s&7))}else if(t===15)throw C.o(C.bP("TIFFFaxDecoder2"))
else{x+=s&2047
r.kw(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=B.QU[r.ox(2)]
x+=v>>>5&2047
r.kw(2-(v>>>1&15))}else{x+=u
r.kw(4-(v>>>1&15))}w=!0}}return x},
b1k(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.As(12)!==1)throw C.o(C.bP("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.As(x)!==0)throw C.o(C.bP(u))
if(x<4)if(v.As(8)!==0)throw C.o(C.bP(u))
while(w=v.As(8),w!==1)if(w!==0)throw C.o(C.bP(u))}if(v.at===0)return 1
else return v.ox(1)},
aXS(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
pD(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.U(s,3),p=s&7
if(p>0){x=D.c.bW(1,7-p)
w=J.Q(d.a,d.d+q)
for(;;){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.j(0,q,w)}q=D.c.U(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.dS(d.a,d.d+q,255)
s+=8}while(s<r){q=D.c.U(s,3)
v=J.Q(d.a,d.d+q)
t=D.c.bW(1,7-(s&7))
J.dS(d.a,d.d+q,(v|t)>>>0);++s}},
As(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
j===$&&C.d()
x=j.d
w=j.c-x-1
v=k.x
u=k.c
t=0
s=0
if(u===1){v.toString
r=J.Q(j.a,x+v)
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=J.Q(u,x+j)
else{t=J.Q(u,x+j)
j=k.r
s=J.Q(j.a,j.d+(v+2))}}}else if(u===2){v.toString
r=B.o3[J.Q(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=B.o3[J.Q(u,x+j)&255]
else{t=B.o3[J.Q(u,x+j)&255]
j=k.r
s=B.o3[J.Q(j.a,j.d+(v+2))&255]}}}else throw C.o(C.bP("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.bW(r&E.lK[q],p)
l=D.c.dN(t&B.GM[n],8-n)
if(o!==0){l=D.c.bW(l,o)|D.c.dN(s&B.GM[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
ox(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
m===$&&C.d()
x=m.d
w=m.c-x-1
v=n.x
u=n.c
t=0
if(u===1){v.toString
s=J.Q(m.a,x+v)
if(!(v===w)){m=n.r
t=J.Q(m.a,m.d+(v+1))}}else if(u===2){v.toString
s=B.o3[J.Q(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=B.o3[J.Q(m.a,m.d+(v+1))&255]}}else throw C.o(C.bP("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.dN(s&E.lK[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.bW(s&E.lK[r],-p)|D.c.dN(t&B.GM[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
kw(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.az8.prototype={
btf(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.df(d,h,0),f=d.a6()
for(x=i.a,w=0;w<f;++w){v=d.a6()
u=d.a6()
t=d.Y()
if(u>13){d.d+=4
continue}s=D.UH[u]
if(t*D.jZ[u]>4)r=d.Y()
else{r=d.d
d.d=r+4}q=new A.az7(v,s,t,r,g)
x.j(0,v,q)
if(v===256){p=q.kJ()
p=p==null?h:p.G(0)
i.b=p==null?0:p}else if(v===257){p=q.kJ()
p=p==null?h:p.G(0)
i.c=p==null?0:p}else if(v===262){o=q.kJ()
n=o==null?h:o.G(0)
if(n==null)n=17
if(n<17)i.d=B.aF5[n]
else i.d=B.Jx}else if(v===259){p=q.kJ()
p=p==null?h:p.G(0)
i.e=p==null?0:p}else if(v===258){p=q.kJ()
p=p==null?h:p.G(0)
i.f=p==null?0:p}else if(v===277){p=q.kJ()
p=p==null?h:p.G(0)
i.r=p==null?0:p}else if(v===317){p=q.kJ()
p=p==null?h:p.G(0)
i.Q=p==null?0:p}else if(v===339){p=q.kJ()
o=p==null?h:p.G(0)
i.x=B.aFy[o==null?0:o]}else if(v===320){o=q.kJ()
if(o!=null){p=J.d7z(D.m.ga4(o.rT()))
i.id=p
i.k1=0
p=p.length/3|0
i.k2=p
i.k3=p*2}}}p=i.id
m=p!=null
if(m&&i.d===B.Jy)i.r=1
if(i.b===0||i.c===0)return
if(m&&i.f===8){l=p.length
for(m=p.$flags|0,w=0;w<l;++w){k=p[w]
m&2&&C.z(p)
p[w]=k>>>8}}if(i.d===B.Jw)i.z=!0
i.w=i.r
if(x.R(324)){i.ay=i.KD(322)
i.ch=i.KD(323)
i.CW=i.ate(324)
i.cx=i.ate(325)}else{i.ay=i.atd(322,i.b)
if(!x.R(278))p=i.ch=i.atd(323,i.c)
else{j=i.KD(278)
if(j===-1){p=i.c
i.ch=p}else{i.ch=j
p=j}}m=i.c
if(p>m)i.ch=m
i.CW=i.ate(273)
i.cx=i.ate(279)}p=i.b
m=i.ay
i.cy=D.c.dn(p+m-1,m)
m=i.c
p=i.ch
i.db=D.c.dn(m+p-1,p)
i.dy=i.atd(266,1)
i.fr=i.KD(292)
i.fx=i.KD(293)
i.KD(338)
switch(i.d.a){case 0:case 1:x=i.f
if(x===1&&i.r===1)i.y=B.Jv
else if(x===4&&i.r===1)i.y=B.bh2
else if(D.c.Z(x,8)===0){x=i.r
if(x===1)i.y=B.bh3
else if(x===2)i.y=B.bh4
else i.y=B.rF}break
case 2:if(D.c.Z(i.f,8)===0){x=i.r
if(x===3)i.y=B.acZ
else if(x===4)i.y=B.bh6
else i.y=B.rF}break
case 3:x=!1
if(i.r===1)if(i.id!=null){x=i.f
x=x===4||x===8||x===16}if(x)i.y=B.bh5
break
case 4:if(i.f===1&&i.r===1)i.y=B.Jv
break
case 6:if(i.e===7&&i.f===8&&i.r===3)i.y=B.acZ
else{if(x.R(530)){o=x.h(0,530).kJ()
i.as=o.G(0)
x=i.at=o.hy(0,1)}else x=i.at=i.as=2
p=i.as
p===$&&C.d()
if(p*x===1)i.y=B.rF
else if(i.f===8&&i.r===3)i.y=B.bh7}break
case 5:if(D.c.Z(i.f,8)===0)i.y=B.rF
x=i.r
if(x===4)i.w=3
else if(x===5)i.w=4
break
default:if(D.c.Z(i.f,8)===0)i.y=B.rF
break}},
cs(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===B.rE,a0=e===B.bB
e=g.f
if(e===1)x=D.fK
else if(e===2)x=D.hi
else{if(e===4)e=D.hj
else if(d&&e===16)e=D.i2
else if(d&&e===32)e=D.iX
else if(d&&e===64)e=D.jL
else if(a0&&e===8)e=D.ls
else if(a0&&e===16)e=D.lt
else if(a0&&e===32)e=D.lu
else if(e===16)e=D.dl
else e=e===32?D.jM:D.ah
x=e}w=g.id!=null&&g.d===B.Jy
v=w?3:g.w
e=g.b
u=C.hA(f,f,x,0,D.bI,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gdV()
e.toString
t=g.id
s=t.length
r=s/3|0
q=g.k1
q===$&&C.d()
p=g.k2
p===$&&C.d()
o=g.k3
o===$&&C.d()
for(n=o,m=p,l=q,k=0;k<r;++k,++l,++m,++n){if(n>=s)break
e.qt(k,t[l],t[m],t[n])}}j=0
i=0
for(;;){e=g.db
e===$&&C.d()
if(!(j<e))break
h=0
for(;;){e=g.cy
e===$&&C.d()
if(!(h<e))break
g.bzN(a1,u,h,j);++h;++i}++j}return u},
bzN(b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
if(b1.y===B.Jv){b1.bzl(b3,b4,b5,b6)
return}u=b1.cy
u===$&&C.d()
t=b6*u+b5
b3.d=b1.CW[t]
u=b1.ay
s=b5*u
r=b1.ch
q=b6*r
x=b1.cx[t]
p=u*r*b1.r
u=b1.f
r=u===16
if(r)p*=2
else if(u===32)p*=4
w=null
if(u===8||r||u===32||u===64){u=b1.e
if(u===1)w=b3
else if(u===5){w=C.d5(new Uint8Array(p),!1,b2,0)
v=A.cRb()
try{v.N1(A.df(b3,x,0),w.a)}catch(o){}if(b1.Q===2)for(n=0;n<b1.ch;++n){m=b1.r
u=b1.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.Q(u.a,u.d+l)
j=w
i=b1.r
i=J.Q(j.a,j.d+(l-i))
J.dS(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=C.d5(new Uint8Array(p),!1,b2,0)
b1.aVR(b3,p,w.a)}else if(u===32946||u===8){h=b3.aP0(0,0,x)
u=b1.f
g=u<8?1:D.c.U(u+7,3)
w=C.d5(C.aU5(h,b1.ay*b1.ch*b1.r*g),!1,b2,0)}else if(u===6||u===7){h=b3.aP0(0,0,x)
f=C.cEK().cs(y.p.a(h))
if(f!=null)b1.bLg(f,b4,s,q,b1.ay,b1.ch)
return}else throw C.o(C.bP("Unsupported Compression Type: "+u))
e=C.a([0,0,0],y.t)
for(d=q,a0=0;a0<b1.ch;++a0,++d)for(a1=s,a2=0;a2<b1.ay;++a2,++a1){u=w
if(u.d>=u.c||a1>=b1.b||d>=b1.c)break
u=b1.r
if(u===1){u=b1.x
if(u===B.rE){u=b1.f
if(u===32){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a3=$.GZ()[0]}else if(u===64)a3=w.azp()
else if(u===16){u=w.a6()
r=$.fv
a3=(r!=null?r:C.h3())[u]}else a3=0
if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.lV(a1,d,a3)}}else{r=b1.f
if(r===8)if(u===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
a3=$.p6()[0]}else{u=w
a3=J.Q(u.a,u.d++)}else if(r===16)if(u===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
a3=$.p5()[0]}else a3=w.a6()
else if(r===32)if(u===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a3=$.kv()[0]}else a3=w.Y()
else a3=0
if(b1.d===B.Jw){u=b4.a
a4=u==null?b2:u.gbJ()
a3=(a4==null?0:a4)-a3}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.lV(a1,d,a3)}}}else if(u===2){u=b1.f
if(u===8){if(b1.x===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
a5=$.p6()[0]}else{u=w
a5=J.Q(u.a,u.d++)}if(b1.x===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.p6()[0]}else{u=w
a6=J.Q(u.a,u.d++)}}else if(u===16){if(b1.x===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
a5=$.p5()[0]}else a5=w.a6()
if(b1.x===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.p5()[0]}else a6=w.a6()}else if(u===32){if(b1.x===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a5=$.kv()[0]}else a5=w.Y()
if(b1.x===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.kv()[0]}else a6=w.Y()}else{a5=0
a6=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.iP(a1,d,a5,0,0,a6)}}else if(u===3){u=b1.x
if(u===B.rE){u=b1.f
if(u===32){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
u=$.GZ()
a7=u[0]
r[0]=w.Y()
a8=u[0]
r[0]=w.Y()
a9=u[0]}else{a8=0
a9=0
if(u===64)a7=w.azp()
else if(u===16){u=w.a6()
r=$.fv
a7=(r!=null?r:C.h3())[u]
u=w.a6()
r=$.fv
a8=(r!=null?r:C.h3())[u]
u=w.a6()
r=$.fv
a9=(r!=null?r:C.h3())[u]}else a7=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.jO(a1,d,a7,a8,a9)}}else{r=b1.f
if(r===8){if(u===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.p6()[0]}else{u=w
a7=J.Q(u.a,u.d++)}if(b1.x===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.p6()[0]}else{u=w
a8=J.Q(u.a,u.d++)}if(b1.x===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.p6()[0]}else{u=w
a9=J.Q(u.a,u.d++)}}else if(r===16){if(u===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.p5()[0]}else a7=w.a6()
if(b1.x===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.p5()[0]}else a8=w.a6()
if(b1.x===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.p5()[0]}else a9=w.a6()}else if(r===32){if(u===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.kv()[0]}else a7=w.Y()
if(b1.x===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.kv()[0]}else a8=w.Y()
if(b1.x===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.kv()[0]}else a9=w.Y()}else{a7=0
a8=0
a9=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.jO(a1,d,a7,a8,a9)}}}else if(u>=4)if(b1.x===B.rE){u=b1.f
if(u===32){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
u=$.GZ()
a7=u[0]
r[0]=w.Y()
a8=u[0]
r[0]=w.Y()
a9=u[0]
r[0]=w.Y()
b0=u[0]}else{a8=0
a9=0
b0=0
if(u===64)a7=w.azp()
else if(u===16){u=w.a6()
r=$.fv
a7=(r!=null?r:C.h3())[u]
u=w.a6()
r=$.fv
a8=(r!=null?r:C.h3())[u]
u=w.a6()
r=$.fv
a9=(r!=null?r:C.h3())[u]
u=w.a6()
r=$.fv
b0=(r!=null?r:C.h3())[u]}else a7=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.iP(a1,d,a7,a8,a9,b0)}}else{u=b4.a
a6=u==null?b2:u.gbJ()
if(a6==null)a6=0
u=b1.f
if(u===8){if(b1.x===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.p6()[0]}else{u=w
a7=J.Q(u.a,u.d++)}if(b1.x===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.p6()[0]}else{u=w
a8=J.Q(u.a,u.d++)}if(b1.x===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.p6()[0]}else{u=w
a9=J.Q(u.a,u.d++)}if(b1.x===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
b0=$.p6()[0]}else{u=w
b0=J.Q(u.a,u.d++)}if(b1.r===5)if(b1.x===B.bB){u=w
u=J.Q(u.a,u.d++)
r=$.oe()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.p6()[0]}else{u=w
a6=J.Q(u.a,u.d++)}}else if(u===16){if(b1.x===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.p5()[0]}else a7=w.a6()
if(b1.x===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.p5()[0]}else a8=w.a6()
if(b1.x===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.p5()[0]}else a9=w.a6()
if(b1.x===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
b0=$.p5()[0]}else b0=w.a6()
if(b1.r===5)if(b1.x===B.bB){u=w.a6()
r=$.od()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.p5()[0]}else a6=w.a6()}else if(u===32){if(b1.x===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.kv()[0]}else a7=w.Y()
if(b1.x===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.kv()[0]}else a8=w.Y()
if(b1.x===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.kv()[0]}else a9=w.Y()
if(b1.x===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
b0=$.kv()[0]}else b0=w.Y()
if(b1.r===5)if(b1.x===B.bB){u=w.Y()
r=$.he()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.kv()[0]}else a6=w.Y()}else{a7=0
a8=0
a9=0
b0=0}if(b1.d===B.ad_){A.cZL(a7,a8,a9,b0,e)
a7=e[0]
a8=e[1]
a9=e[2]
b0=a6}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.iP(a1,d,a7,a8,a9,b0)}}}}else throw C.o(C.bP("Unsupported bitsPerSample: "+u))},
bLg(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.cZ(v,x,null)
if(u==null)u=new C.fn()
e.Dj(v+f,w,u)}},
bzl(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
a2===$&&C.d()
w=a6*a2+a5
a3.d=a0.CW[w]
a2=a0.ay
v=a5*a2
u=a0.ch
t=a6*u
s=a0.cx[w]
x=null
r=a0.e
if(r===32773){q=D.c.Z(a2,8)===0?D.c.ac(a2,8)*u:(D.c.ac(a2,8)+1)*u
x=C.d5(new Uint8Array(a2*u),!1,a1,0)
a0.aVR(a3,q,x.a)}else if(r===5){x=C.d5(new Uint8Array(a2*u),!1,a1,0)
A.cRb().N1(A.df(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.Q(a2.a,a2.d+n)
r=x
m=a0.r
m=J.Q(r.a,r.d+(n-m))
J.dS(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=C.d5(new Uint8Array(a2*u),!1,a1,0)
try{A.cGG(a0.dy,a0.ay,a0.ch).c6G(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=C.d5(new Uint8Array(a2*u),!1,a1,0)
try{A.cGG(a0.dy,a0.ay,a0.ch).c6H(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=C.d5(new Uint8Array(a2*u),!1,a1,0)
try{A.cGG(a0.dy,a0.ay,a0.ch).c6X(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8||r===32946)x=C.d5(C.aU5(a3.aP0(0,0,s),D.c.U(a0.ay+7,3)*a0.ch),!1,a1,0)
else if(r===1)x=a3
else throw C.o(C.bP("Unsupported Compression Type: "+r))
k=new A.bF9(x)
j=a4.gbJ()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.dq(1)
u=a4.a
if(a2===0){if(u!=null)u.jO(e,g,i,0,0)}else if(u!=null)u.jO(e,g,h,0,0)}k.c=0}},
aVR(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.bV(f),w=0,v=0;v<e;){u=w+1
t=J.Q(d.a,d.d+w)
s=$.oe()
s.$flags&2&&C.z(s)
s[0]=t
r=$.p6()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.j(f,v,J.Q(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.Q(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.j(f,v,o)}}}}},
atd(d,e){var x=this.a
if(!x.R(d))return e
x=x.h(0,d).kJ()
x=x==null?null:x.G(0)
return x==null?0:x},
KD(d){return this.atd(d,0)},
ate(d){var x,w=this.a
if(!w.R(d))return null
x=w.h(0,d)
w=x.kJ()
w.toString
return C.a3L(x.c,w.gwo(w),!0,y.q)}}
A.M5.prototype={
M(){return"TiffFormat."+this.b}}
A.kW.prototype={
M(){return"TiffPhotometricType."+this.b}}
A.tL.prototype={
M(){return"TiffImageType."+this.b}}
A.bFe.prototype={
gbU(){return this.a},
gaV(){return this.b}}
A.biZ.prototype={
N1(d,e){var x,w,v,u,t,s,r=this
r.r=e
x=J.aJ(e)
r.w=0
w=y.p.a(d.a)
r.e=w
r.f=w.length
r.b=d.d
if(w[0]===0&&w[1]===1)throw C.o(C.bP("Invalid LZW Data"))
r.aZN()
r.d=r.c=0
v=r.aEV()
w=r.x
u=0
for(;;){if(!(v!==257&&r.w<x))break
if(v===256){r.aZN()
v=r.aEV()
r.as=0
if(v===257)break
J.dS(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.aY9(v)
t=r.as
t===$&&C.d()
s=t-1
for(;s>=0;--s)J.dS(r.r,r.w++,w[s])
r.aTj(u,w[r.as-1])}else{r.aY9(u)
t=r.as
t===$&&C.d()
s=t-1
for(;s>=0;--s)J.dS(r.r,r.w++,w[s])
J.dS(r.r,r.w++,w[r.as-1])
r.aTj(u,w[r.as-1])}u=v}v=r.aEV()}},
aTj(d,e){var x,w=this,v=w.y
v===$&&C.d()
x=w.Q
x.toString
v.$flags&2&&C.z(v)
v[x]=e
v=w.z
v===$&&C.d()
v.$flags&2&&C.z(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
aY9(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&C.d()
v=w[d]
x.$flags&2&&C.z(x)
x[0]=v
v=r.z
v===$&&C.d()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
aEV(){var x,w,v,u,t=this,s=t.b,r=t.f
r===$&&C.d()
if(s>=r)return 257
for(;x=t.d,w=t.a,x<w;s=u){if(s>=r)return 257
w=t.c
v=t.e
v===$&&C.d()
u=s+1
t.b=u
t.c=(w<<8>>>0)+v[s]>>>0
t.d=x+8}s=x-w
t.d=s
return D.c.dN(t.c,s)&B.aAv[w-9]},
aZN(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bg.dg(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&C.z(x)
x[w]=w}v.a=9
v.Q=258}}
A.bFa.prototype={
i5(d){return C.fQ(new A.bFb(this,d))},
bYR(d){var x,w,v=this.a
if(v==null)return null
x=v.f[d]
v=this.d
A.o9(x.b,x.c,v,!1)
A.o9(x.ay,x.ch,v,!1)
v=this.c
v===$&&C.d()
w=x.cs(v)
return w},
oO(d,e){return C.fQ(new A.bFc(this,d,e))},
bYQ(d,e){var x,w,v,u,t,s,r=this,q=null,p=C.d5(d,!1,q,0)
r.c=p
p=r.a=r.bYS(p)
if(p==null)return q
p=p.f
x=p.length
w=new A.Aw(r.d)
for(v=0;v<p.length;p.length===x||(0,C.q)(p),++v){u=p[v]
w.iX(0,u.b,u.c)}t=r.i5(0)
if(t==null)return q
t.e=A.cE2(C.d5(d,!1,q,0))
t.w=B.OS
for(s=1;s<x;++s)t.pH(r.i5(s))
return t},
b4x(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=C.a([],y.M),k=new A.bFe(l),j=d.c
if(j-d.d<8)return m
v=d.a6()
if(v!==18761&&v!==19789)return m
if(v===19789)d.e=!0
else d.e=!1
u=d.a6()
k.d=u
if(u!==42)return m
t=d.Y()
s=A.df(d,m,0)
s.d=t
x=s
u=y.q
r=C.a6(u)
q=y.r
for(;;){if(!(t!==0&&t<j&&l.length<1024&&r.v(0,t)))break
w=null
try{p=new A.az8(C.t(u,q),B.Jx,B.acY,B.bh8)
p.btf(x)
w=p
o=w
if(!(o.b!==0&&o.c!==0))break}catch(n){break}l.push(w)
if(l.length===1){o=l[0]
k.a=o.b
k.b=o.c}if(e)break
t=x.Y()
if(t!==0)x.d=t}return l.length!==0?k:m},
bYS(d){return this.b4x(d,!1)}}
A.bHo.prototype={
a59(){var x,w=this.a,v=w.rN()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.rN()!==2752925)return!1
x=this.b
x.a=w.a6()
x.b=w.a6()
return!0},
nO(){var x,w,v,u,t=this,s=null
if(!t.bDQ())return s
x=t.b
w=x.a
t.d=C.hA(s,s,D.ah,0,D.bI,x.b,s,0,4,s,D.ah,w,!1)
t.bKt()
if(!t.bQb())return s
w=x.w
if(w.length!==0){v=C.d5(new C.eW(w),!1,s,0)
w=t.d
w.toString
w.e=A.cE2(v)}u=x.r
if(u!=null)t.d.c=new C.zY("ICC_PROFILE",D.ni,u)
return t.d},
bDQ(){var x,w,v,u,t=this
if(!t.a59())return!1
t.fr=A.dlv()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.azL(v,u,new Int32Array(2))}x=t.b
v=t.r.b=x.b
t.y=t.Q=0
x=x.a
t.z=x
t.as=v
t.at=x+15>>>4
t.ax=v+15>>>4
t.k1=0
v=t.a
x=t.f
u=x.d
u===$&&C.d()
u=A.cVy(v.h4(u))
t.c=u
v.d+=x.d
u.f5(1)
t.c.f5(1)
t.bQi(t.x,t.fr)
t.bQa()
if(!t.bQe(v))return!1
t.bQg()
t.c.f5(1)
t.bQf()
return!0},
bQi(d,e){var x,w,v,u=this,t=u.c
t===$&&C.d()
t=t.f5(1)!==0
d.a=t
if(t){d.b=u.c.f5(1)!==0
if(u.c.f5(1)!==0){d.c=u.c.f5(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.f5(1)!==0){w=u.c
v=w.f5(7)
w=w.f5(1)===1?-v:v}else w=0
t.$flags&2&&C.z(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.f5(1)!==0){w=u.c
v=w.f5(6)
w=w.f5(1)===1?-v:v}else w=0
t.$flags&2&&C.z(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.f5(1)!==0?u.c.f5(8):255
t.$flags&2&&C.z(t)
t[x]=w}}else d.b=!1
return!0},
bQa(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&C.d()
t.a=s.f5(1)!==0
t.b=u.c.f5(6)
t.c=u.c.f5(3)
s=u.c.f5(1)!==0
t.d=s
if(s)if(u.c.f5(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.f5(1)!==0){w=u.c
v=w.f5(6)
w=w.f5(1)===1?-v:v
s.$flags&2&&C.z(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.f5(1)!==0){w=u.c
v=w.f5(6)
w=w.f5(1)===1?-v:v
s.$flags&2&&C.z(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.bv=s
return!0},
bQe(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&C.d()
p=D.c.c2(1,p.f5(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.apR(3,v)
s=w+((J.Q(t.a,t.d)|J.Q(t.a,t.d+1)<<8|J.Q(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.a9V(d.Dy(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cVy(d.Dy(q-w,d.d-d.b+w))
return w<q},
bQg(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&C.d()
x=h.f5(7)
w=i.c.f5(1)!==0?i.c.TP(4):0
v=i.c.f5(1)!==0?i.c.TP(4):0
u=i.c.f5(1)!==0?i.c.TP(4):0
t=i.c.f5(1)!==0?i.c.TP(4):0
s=i.c.f5(1)!==0?i.c.TP(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=B.Gj[j]
k.$flags&2&&C.z(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=B.Gk[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=B.Gj[k]
j.$flags&2&&C.z(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=B.Gk[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=B.Gj[j]
k.$flags&2&&C.z(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=B.Gk[j]}},
bQf(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&C.d()
s=t.hB(B.aQe[x][w][v][u])!==0?r.c.f5(8):B.aAq[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&C.z(t)
t[u]=s}t=r.c
t===$&&C.d()
t=t.f5(1)!==0
r.fx=t
if(t)r.fy=r.c.f5(8)},
bRy(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bv
k.toString
if(k>0){x=l.w
for(k=x.e,w=x.f,v=l.x,u=v.e,t=0;t<4;++t){if(v.a){s=u[t]
if(!v.c){r=x.b
r.toString
s+=r}}else s=x.b
for(q=0;q<=1;++q){r=l.E
r===$&&C.d()
p=r[t][q]
r=x.d
r===$&&C.d()
if(r){s.toString
o=s+k[0]
if(q!==0)o+=w[0]}else o=s
o.toString
if(o<0)o=0
else if(o>63)o=63
if(o>0){r=x.c
r===$&&C.d()
if(r>0){n=r>4?D.c.U(o,2):D.c.U(o,1)
m=9-r
if(n>m)n=m}else n=o
if(n<1)n=1
p.b=n
p.a=2*o+n
if(o>=40)r=2
else r=o>=15?1:0
p.d=r}else p.a=0
p.c=q!==0}}}},
bKt(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.b,h=i.at
if(h!=null)k.a1=h
x=J.kM(4,y.K)
for(h=y.i,w=0;w<4;++w)x[w]=C.a([new A.FI(),new A.FI()],h)
k.E=x
h=k.at
h.toString
x=J.kM(h,y.bt)
for(v=0;v<h;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.azM(u,t,new Uint8Array(8))}k.k2=x
k.ok=new Uint8Array(832)
h=k.at
h.toString
k.go=new Uint8Array(4*h)
u=k.p4=16*h
h=8*h
k.R8=h
t=k.bv
t.toString
s=B.G8[t]
r=s*u
q=(s/2|0)*h
k.p1=C.d5(new Uint8Array(16*u+r),!1,j,r)
h=k.R8
h.toString
k.p2=C.d5(new Uint8Array(8*h+q),!1,j,q)
h=k.R8
h.toString
k.p3=C.d5(new Uint8Array(8*h+q),!1,j,q)
h=i.a
k.RG=C.d5(new Uint8Array(h),!1,j,0)
p=i.a+1>>>1
k.rx=C.d5(new Uint8Array(p),!1,j,0)
k.ry=C.d5(new Uint8Array(p),!1,j,0)
i=k.bv
i.toString
o=B.G8[i]
if(i===2)k.ch=k.ay=0
else{i=D.c.ac(k.y-o,16)
k.ay=i
h=D.c.ac(k.Q-o,16)
k.ch=h
if(i<0)k.ay=0
if(h<0)k.ch=0}i=D.c.ac(k.as+15+o,16)
k.cx=i
h=D.c.ac(k.z+15+o,16)
k.CW=h
u=k.at
u.toString
if(h>u)k.CW=u
h=k.ax
h.toString
if(i>h)k.cx=h
n=u+1
x=J.kM(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.azJ()
k.k3=x
i=k.at
i.toString
x=J.kM(i,y.bl)
for(v=0;v<i;++v){h=new Int16Array(384)
x[v]=new A.azK(h,new Uint8Array(16))}k.by=x
i=k.at
i.toString
x=J.kM(i,y.ac)
for(v=0;v<i;++v)x[v]=new A.FI()
k.k4=x
k.bRy()
i=$.cKC()
h=$.cKD()
u=$.cKE()
t=$.cKF()
m=$.cC8()
l=new Int32Array(16)
A.dkW()
k.e=new A.bHp(i,h,u,t,m,l)
return!0},
bQb(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.y2=0
x=k.id
w=k.x
v=k.db
u=0
for(;;){t=k.cx
t.toString
if(!(u<t))break
t=k.cy
t===$&&C.d()
s=v[(u&t-1)>>>0]
for(;;){u=k.y1
t=k.at
t.toString
if(!(u<t))break
t=k.k3
t===$&&C.d()
r=t[0]
q=t[1+u]
t=k.by
t===$&&C.d()
p=t[u]
if(w.b){u=k.c
u===$&&C.d()
u=u.hB(k.fr.a[0])
t=k.c
o=k.fr
k.k1=u===0?t.hB(o.a[1]):2+t.hB(o.a[2])}u=k.fx
u===$&&C.d()
if(u){u=k.c
u===$&&C.d()
t=k.fy
t===$&&C.d()
n=u.hB(t)!==0}else n=!1
k.bQc()
if(!n)n=k.bQh(q,s)
else{r.a=q.a=0
u=p.b
u===$&&C.d()
if(!u)r.b=q.b=0
p.f=p.e=0}u=k.bv
u.toString
if(u>0){u=k.E
u===$&&C.d()
t=k.k1
t===$&&C.d()
t=u[t]
u=p.b
u===$&&C.d()
m=t[u?1:0]
t=k.k4
t===$&&C.d()
t=t[k.y1]
t.a=m.a
t.b=m.b
t.d=m.d
t.c=m.c||!n}++k.y1}u=k.k3
u===$&&C.d()
u=u[0]
u.b=u.a=0
D.m.dg(x,0,4,0)
k.y1=0
k.bT7()
u=k.bv
u.toString
l=!1
if(u>0){u=k.y2
t=k.ch
t===$&&C.d()
if(u>=t){t=k.cx
t.toString
t=u<=t
l=t}}if(!k.bCI(l))return!1
u=++k.y2}return!0},
bT7(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.y2,b0=a7.ok
b0===$&&C.d()
x=C.d5(b0,!1,a8,40)
w=C.d5(b0,!1,a8,584)
v=C.d5(b0,!1,a8,600)
u=a7.p1
u===$&&C.d()
t=y.p
s=t.a(u.a)
u=a7.p2
u===$&&C.d()
r=t.a(u.a)
u=a7.p3
u===$&&C.d()
q=t.a(u.a)
u=a7.p4
u.toString
t=a7.R8
t.toString
p=a9>0
o=b0.$flags|0
n=0
for(;;){m=a7.at
m.toString
if(!(n<m))break
m=a7.by
m===$&&C.d()
l=m[n]
if(n>0){for(k=-1;k<16;++k){m=40+k*32
A.oN(b0,m-4,b0,m+12,4)}for(k=-1;k<8;++k){m=k*32
j=584+m
A.oN(b0,j-4,b0,j+4,4)
m=600+m
A.oN(b0,m-4,b0,m+4,4)}}else{for(k=0;k<16;++k){o&2&&C.z(b0)
b0[40+k*32-1]=129}for(k=0;k<8;++k){m=k*32
o&2&&C.z(b0)
b0[584+m-1]=129
b0[600+m-1]=129}if(p){o&2&&C.z(b0)
b0[567]=129
b0[551]=129
b0[7]=129}}m=a7.k2
m===$&&C.d()
i=m[n]
h=l.a
g=l.e
if(p){A.oN(b0,8,i.a,0,16)
A.oN(b0,552,i.b,0,8)
A.oN(b0,568,i.c,0,8)}else if(n===0){D.m.dg(b0,7,28,127)
D.m.dg(b0,551,560,127)
D.m.dg(b0,567,576,127)}m=l.b
m===$&&C.d()
if(m){if(p){m=a7.at
m.toString
if(n>=m-1)D.m.dg(b0,24,28,i.a[15])
else A.oN(b0,24,a7.k2[n+1].a,0,4)}A.oN(b0,152,b0,24,4)
A.oN(b0,280,b0,24,4)
A.oN(b0,408,b0,24,4)
for(m=l.c,f=0;f<16;++f,g=g<<2>>>0){e=A.df(x,a8,B.Z8[f])
B.aHz[m[f]].$1(e)
g.toString
j=f*16
a7.aWt(g,new C.lT(h,j,Math.min(384,384),j,!1),e)}}else{m=A.cVA(n,a9,l.c[0])
m.toString
B.aWt[m].$1(x)
if(g!==0)for(f=0;f<16;++f,g=g<<2>>>0){e=A.df(x,a8,B.Z8[f])
g.toString
m=f*16
a7.aWt(g,new C.lT(h,m,Math.min(384,384),m,!1),e)}}m=l.f
m===$&&C.d()
j=A.cVA(n,a9,l.d)
j.toString
B.Tz[j].$1(w)
B.Tz[j].$1(v)
j=Math.min(384,384)
d=new C.lT(h,256,j,256,!1)
if((m&255)!==0){a0=a7.e
if((m&170)!==0){a0===$&&C.d()
a0.ws(d,w)
a0.ws(A.df(d,a8,16),A.df(w,a8,4))
a1=A.df(d,a8,32)
a2=A.df(w,a8,128)
a0.ws(a1,a2)
a0.ws(A.df(a1,a8,16),A.df(a2,a8,4))}else{a0===$&&C.d()
a0.bgd(d,w)}}a3=new C.lT(h,320,j,320,!1)
m=m>>>8
if((m&255)!==0){j=a7.e
if((m&170)!==0){j===$&&C.d()
j.ws(a3,v)
j.ws(A.df(a3,a8,16),A.df(v,a8,4))
m=A.df(a3,a8,32)
a0=A.df(v,a8,128)
j.ws(m,a0)
j.ws(A.df(m,a8,16),A.df(a0,a8,4))}else{j===$&&C.d()
j.bgd(a3,v)}}m=a7.ax
m.toString
if(a9<m-1){A.oN(i.a,0,b0,520,16)
A.oN(i.b,0,b0,808,8)
A.oN(i.c,0,b0,824,8)}a4=a7.p1.d+n*16
m=n*8
a5=a7.p2.d+m
a6=a7.p3.d+m
for(k=0;k<16;++k)A.oN(s,a4+k*u,b0,40+k*32,16)
for(k=0;k<8;++k){m=k*t
j=k*32
A.oN(r,a5+m,b0,584+j,8)
A.oN(q,a6+m,b0,600+j,8)}++n}},
aWt(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&C.d()
x.clE(e,f,!1)
break
case 2:this.e===$&&C.d()
w=J.Q(e.a,e.d)+4
v=A.bHr(J.Q(e.a,e.d+4),35468)
u=A.bHr(J.Q(e.a,e.d+4),85627)
t=A.bHr(J.Q(e.a,e.d+1),35468)
s=A.bHr(J.Q(e.a,e.d+1),85627)
A.bHt(f,0,w+u,s,t)
A.bHt(f,1,w+v,s,t)
A.bHt(f,2,w-v,s,t)
A.bHt(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&C.d()
x.alU(e,f)
break
default:break}},
bAV(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.p4
i.toString
x=j.k4
x===$&&C.d()
w=x[d]
x=j.p1
x===$&&C.d()
v=y.p
u=v.a(x.a)
t=x.d+d*16
s=w.a
if(s===0)return
if(j.bv===1){if(d>0){x=j.e
x===$&&C.d()
x.aRo(u,t,i,s+4)}if(w.c){x=j.e
x===$&&C.d()
x.bm1(u,t,i,s)}if(e>0){x=j.e
x===$&&C.d()
x.aRp(u,t,i,s+4)}if(w.c){x=j.e
x===$&&C.d()
x.bm2(u,t,i,s)}}else{r=w.b
x=j.R8
x.toString
q=j.p2
q===$&&C.d()
p=v.a(q.a)
o=d*8
n=q.d+o
q=j.p3
q===$&&C.d()
m=v.a(q.a)
l=q.d+o
k=w.d
if(d>0){v=j.e
v===$&&C.d()
q=s+4
v.K4(u,t,1,i,16,q,r,k)
v.K4(p,n,1,x,8,q,r,k)
v.K4(m,l,1,x,8,q,r,k)}if(w.c){v=j.e
v===$&&C.d()
v.cao(u,t,i,s,r,k)
v.K3(p,n+4,1,x,8,s,r,k)
v.K3(m,l+4,1,x,8,s,r,k)}if(e>0){v=j.e
v===$&&C.d()
q=s+4
v.K4(u,t,i,1,16,q,r,k)
v.K4(p,n,x,1,8,q,r,k)
v.K4(m,l,x,1,8,q,r,k)}if(w.c){v=j.e
v===$&&C.d()
v.cma(u,t,i,s,r,k)
i=4*x
v.K3(p,n+i,x,1,8,s,r,k)
v.K3(m,l+i,x,1,8,s,r,k)}}},
bCv(){var x,w=this,v=w.ay
v===$&&C.d()
x=v
for(;;){v=w.CW
v.toString
if(!(x<v))break
w.bAV(x,w.y2);++x}},
bCI(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.bv
d.toString
x=B.G8[d]
d=f.p4
d.toString
w=x*d
d=f.R8
d.toString
v=(x/2|0)*d
d=f.p1
d===$&&C.d()
u=-w
t=A.df(d,e,u)
d=f.p2
d===$&&C.d()
s=-v
r=A.df(d,e,s)
d=f.p3
d===$&&C.d()
q=A.df(d,e,s)
p=f.y2
d=f.cx
d.toString
o=p*16
n=(p+1)*16
if(a0)f.bCv()
if(p!==0){o-=x
f.to=A.df(t,e,0)
f.x1=A.df(r,e,0)
f.x2=A.df(q,e,0)}else{f.to=A.df(f.p1,e,0)
f.x1=A.df(f.p2,e,0)
f.x2=A.df(f.p3,e,0)}d=p<d-1
if(d)n-=x
m=f.as
if(n>m)n=m
f.xr=null
if(f.a1!=null&&o<n){l=f.xr=f.bzR(o,n-o)
if(l==null)return!1}else l=e
k=f.Q
if(o<k){j=k-o
i=f.to
i===$&&C.d()
h=i.d
g=f.p4
g.toString
i.d=h+g*j
g=f.x1
g===$&&C.d()
h=g.d
i=f.R8
i.toString
i*=D.c.U(j,1)
g.d=h+i
h=f.x2
h===$&&C.d()
h.d+=i
if(l!=null)l.d=l.d+f.b.a*j
o=k}if(o<n){i=f.to
i===$&&C.d()
h=i.d
g=f.y
i.d=h+g
h=f.x1
h===$&&C.d()
i=g>>>1
h.d=h.d+i
h=f.x2
h===$&&C.d()
h.d+=i
if(l!=null)l.d+=g
f.c07(o-k,f.z-g,n-o)}if(d){d=f.p1
l=f.p4
l.toString
d.Qo(u,w,t,16*l)
l=f.p2
u=f.R8
u.toString
l.Qo(s,v,r,8*u)
u=f.p3
l=f.R8
l.toString
u.Qo(s,v,q,8*l)}return!0},
c07(d,e,f){if(e<=0||f<=0)return!1
this.bBH(d,e,f)
this.bBG(d,e,f)
return!0},
aDm(d){var x
if((d&-4194304)>>>0===0)x=D.c.U(d,14)
else x=d<0?0:255
return x},
AV(d,e,f,g,h){var x=19077*d,w=this.aDm(x+26149*f+-3644112)
g.$flags&2&&C.z(g)
g[h]=w
g[h+1]=this.aDm(x-6419*e-13320*f+2229552)
g[h+2]=this.aDm(x+33050*e+-4527440)
g[h+3]=255},
auh(b4,b5,b6,b7,b8,b9,c0,c1,c2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=y.p,d=e.a(b4.a),a0=b4.d,a1=e.a(b6.a),a2=b6.d,a3=e.a(b7.a),a4=b7.d,a5=e.a(b8.a),a6=b8.d,a7=e.a(b9.a),a8=b9.d,a9=e.a(c0.a),b0=c0.d,b1=b5==null,b2=b1?f:e.a(b5.a),b3=b1?f:b5.d
if(b3==null)b3=0
b1=c1==null
x=b1?f:e.a(c1.a)
w=b1?f:c1.d
if(w==null)w=0
e=c2-1
v=D.c.U(e,1)
u=(a1[a2]|a3[a4]<<16)>>>0
t=(a5[a6]|a7[a8]<<16)>>>0
s=3*u+t+131074>>>2
g.AV(d[a0],s&255,s>>>16,a9,b0)
b1=b2!=null
if(b1){s=3*t+u+131074>>>2
r=b2[b3]
x.toString
g.AV(r,s&255,s>>>16,x,w)}for(q=1;q<=v;++q,t=o,u=p){p=(a1[a2+q]|a3[a4+q]<<16)>>>0
o=(a5[a6+q]|a7[a8+q]<<16)>>>0
n=u+p+t+o+524296
m=n+2*(p+t)>>>3
l=n+2*(u+o)>>>3
s=m+u>>>1
k=l+p>>>1
r=2*q
j=a0+r
i=(r-1)*4
g.AV(d[j-1],s&255,s>>>16,a9,b0+i)
h=r*4
g.AV(d[j],k&255,k>>>16,a9,b0+h)
if(b1){s=l+t>>>1
k=m+o>>>1
r=b3+r
j=b2[r-1]
x.toString
g.AV(j,s&255,s>>>16,x,w+i)
g.AV(b2[r],k&255,k>>>16,x,w+h)}}if((c2&1)===0){s=3*u+t+131074>>>2
e*=4
g.AV(d[a0+c2-1],s&255,s>>>16,a9,b0+e)
if(b1){s=3*t+u+131074>>>2
b1=b2[b3+c2-1]
x.toString
g.AV(b1,s&255,s>>>16,x,w+e)}}},
bBG(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.xr
if(l==null)return
x=y.p.a(l.a)
w=l.d
if(d===0){v=f-1
u=d}else{u=d-1
w-=m.b.a
v=f}l=m.Q
t=m.as
if(l+d+f===t)v=t-l-u
s=m.d.bK()
r=m.d.gbU()*4
for(l=m.b.a,t=s.$flags|0,q=0;q<v;++q){p=(q+u)*r+3
for(o=0;o<e;++o,p+=4){n=x[w+o]
t&2&&C.z(s)
s[p]=n}w+=l}},
bBH(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=C.d5(J.cM(l.d.ga4(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&C.d()
x=A.df(h,k,0)
h=l.x1
h===$&&C.d()
w=A.df(h,k,0)
h=l.x2
h===$&&C.d()
v=A.df(h,k,0)
u=d+f
t=D.c.U(e+1,1)
s=j.a*4
j=l.rx
j===$&&C.d()
r=A.df(j,k,0)
j=l.ry
j===$&&C.d()
q=A.df(j,k,0)
if(d===0){l.auh(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&C.d()
l.auh(j,x,r,q,w,v,A.df(i,k,-s),i,e)
p=f+1}r.a=w.a
q.a=v.a
for(j=2*s,h=-s,o=d;o+=2,o<u;){r.d=w.d
q.d=v.d
n=w.d
m=l.R8
m.toString
w.d=n+m
v.d+=m
i.d+=j
m=x.d
n=l.p4
n.toString
x.d=m+2*n
l.auh(A.df(x,k,-n),x,r,q,w,v,A.df(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
if(l.Q+u<l.as){j=l.RG
j===$&&C.d()
j.ayd(0,e,x)
l.rx.ayd(0,t,w)
l.ry.ayd(0,t,v);--p}else if((u&1)===0)l.auh(x,k,w,v,w,v,A.df(i,k,s),k,e)
return p},
bzR(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.aa=new Uint8Array(n)
x=o.a1
w=new A.bJt(x,m,l)
v=x.b1()
u=w.d=v&3
w.e=D.c.U(v,2)&3
w.f=D.c.U(v,4)&3
w.r=D.c.U(v,6)&3
if(w.gdU())if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.VJ(B.rW,C.a([],y.J))
t.a=m
t.b=l
n=C.a([],y.A)
u=C.a([],y.F)
s=new Uint32Array(2)
r=new A.azH(x,s)
s=r.e=J.cM(D.bg.ga4(s),0,null)
q=x.b1()
s.$flags&2&&C.z(s)
s[0]=q
q=x.b1()
s.$flags&2&&C.z(s)
s[1]=q
q=x.b1()
s.$flags&2&&C.z(s)
s[2]=q
q=x.b1()
s.$flags&2&&C.z(s)
s[3]=q
q=x.b1()
s.$flags&2&&C.z(s)
s[4]=q
q=x.b1()
s.$flags&2&&C.z(s)
s[5]=q
q=x.b1()
s.$flags&2&&C.z(s)
s[6]=q
x=x.b1()
s.$flags&2&&C.z(s)
s[7]=x
r.b=!1
u=new A.arZ(r,t,n,u)
u.dy=m
u.fr=l
w.x=u
u.WU(m,l,!0)
n=w.x
x=n.ch
if(x.length===1&&x[0].a===B.adJ&&n.bKZ()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.db=0
x=D.c.Z(p,4)
x=new Uint8Array(p+(4-x))
n.cy=x
n.cx=J.mn(D.m.ga4(x),0,null)}else{w.y=!1
w.x.aTt(m)}}else w.r=1
o.a_=w}n=o.a_
if(n!=null)if(!n.w){x=o.aa
x===$&&C.d()
if(!n.a58(d,e,x))return null}n=o.aa
n===$&&C.d()
return C.d5(n,!1,null,d*m)},
bQh(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&C.d()
x=a1.dy[a3]
a3=a1.by
a3===$&&C.d()
w=a3[a1.y1]
v=C.d5(w.a,!1,null,0)
a3=a1.k3
a3===$&&C.d()
u=a3[0]
v.ceH(0,v.c-v.d,0)
a3=w.b
a3===$&&C.d()
if(!a3){t=C.d5(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.aEP(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.bZk(t,v)
else{q=D.c.U(J.Q(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.dS(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.aEP(a5,o,i+(m&1),x.a,n,v)
i=r>n?1:0
m=m>>>1|i<<7
a3=J.Q(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=h<<2|a3
v.d+=16}m=m>>>4
l=l>>>1|i<<7
k=(k<<8|h)>>>0}f=l>>>4
for(e=m,d=0,a0=0;a0<4;a0+=2){a3=4+a0
m=D.c.fe(a4.a,a3)
l=D.c.fe(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.aEP(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.Q(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.c2(h,4*a0))>>>0
e=(e|D.c.c2(m<<4>>>0,a0))>>>0
f=(f|D.c.c2(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
bZk(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
for(x=0;x<4;++x){w=12+x
v=J.Q(d.a,d.d+x)+J.Q(d.a,d.d+w)
u=4+x
t=8+x
s=J.Q(d.a,d.d+u)+J.Q(d.a,d.d+t)
r=J.Q(d.a,d.d+u)-J.Q(d.a,d.d+t)
q=J.Q(d.a,d.d+x)-J.Q(d.a,d.d+w)
n[x]=v+s
n[t]=v-s
n[u]=q+r
n[w]=q-r}for(p=0,x=0;x<4;++x){w=x*4
o=n[w]+3
u=n[3+w]
v=o+u
t=n[1+w]
w=n[2+w]
s=t+w
r=t-w
q=o-u
u=D.c.U(v+s,3)
J.dS(e.a,e.d+p,u)
u=D.c.U(q+r,3)
J.dS(e.a,e.d+(p+16),u)
u=D.c.U(v-s,3)
J.dS(e.a,e.d+(p+32),u)
u=D.c.U(q-r,3)
J.dS(e.a,e.d+(p+48),u)
p+=64}},
bDU(d,e){var x,w,v,u,t,s
if(d.hB(e[3])===0)x=d.hB(e[4])===0?2:3+d.hB(e[5])
else if(d.hB(e[6])===0)x=d.hB(e[7])===0?5+d.hB(159):7+2*d.hB(165)+d.hB(145)
else{w=d.hB(e[8])
v=2*w+d.hB(e[9+w])
u=B.aC1[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.hB(u[s])
x+=3+D.c.c2(8,v)}return x},
aEP(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.hB(p[0])===0)return h
while(d.hB(p[1])===0){++h
p=e[B.Xv[h]].a[0]
if(h===16)return 16}x=h+1
w=e[B.Xv[x]].a
if(d.hB(p[2])===0){p=w[1]
v=1}else{v=this.bDU(d,p)
p=w[2]}u=B.aGn[h]
t=d.b
t===$&&C.d()
s=d.aTT(D.c.U(t,1))
t=d.b
r=B.Wn[t]
d.b=B.Wl[t]
t=d.d
t===$&&C.d()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.dS(i.a,i.d+u,t*q)}return 16},
bQc(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.by
j===$&&C.d()
x=j[n]
n=o.c
n===$&&C.d()
n=n.hB(145)===0
x.b=n
if(!n){if(o.c.hB(156)!==0)w=o.c.hB(128)!==0?1:3
else w=o.c.hB(163)!==0?2:0
n=x.c
n.$flags&2&&C.z(n)
n[0]=w
l.toString
D.m.dg(l,m,m+4,w)
D.m.dg(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=B.aGF[l[j]][w]
q=B.UD[o.c.hB(r[0])]
while(q>0)q=B.UD[2*q+o.c.hB(r[q])]
w=-q
l.$flags&2&&C.z(l)
l[j]=w}p=u+4
l.toString
D.m.bV(v,u,p,l,m)
n&2&&C.z(k)
k[t]=w}}if(o.c.hB(142)===0)n=0
else if(o.c.hB(114)===0)n=2
else n=o.c.hB(183)!==0?1:3
x.d=n}}
A.a9V.prototype={
f5(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.bW(this.hB(128),w))>>>0
return x},
TP(d){var x=this.f5(d)
return this.f5(1)===1?-x:x},
hB(d){var x,w=this,v=w.b
v===$&&C.d()
x=w.aTT(D.c.U(v*d,8))
if(w.b<=126)w.bWN()
return x},
aTT(d){var x,w,v,u,t,s=this,r=s.d
r===$&&C.d()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.b1()
r=s.c
r===$&&C.d()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.b1()
x=s.c
x===$&&C.d()
s.c=(r|x<<8)>>>0
x=s.d+8
s.d=x
r=x}else if(!s.e){x=s.c
x===$&&C.d()
s.c=x<<8>>>0
r+=8
s.d=r
s.e=!0}t=r}}else t=r
r=s.c
r===$&&C.d()
if(D.c.lp(r,t)>d){x=s.b
x===$&&C.d()
w=d+1
s.b=x-w
s.c=r-D.c.bW(w,t)
return 1}else{s.b=d
return 0}},
bWN(){var x,w=this,v=w.b
v===$&&C.d()
x=B.Wn[v]
w.b=B.Wl[v]
v=w.d
v===$&&C.d()
w.d=v-x}}
A.bHp.prototype={
aRp(d,e,f,g){var x,w
for(x=0;x<16;++x){w=e+x
if(this.b_O(d,w,f,g))this.ar6(d,w,f)}},
aRo(d,e,f,g){var x,w
for(x=0;x<16;++x){w=e+x*f
if(this.b_O(d,w,1,g))this.ar6(d,w,1)}},
bm2(d,e,f,g){var x
for(x=1;x<=3;++x)this.aRp(d,e+4*x*f,f,g)},
bm1(d,e,f,g){var x
for(x=1;x<=3;++x)this.aRo(d,e+4*x,f,g)},
cma(d,e,f,g,h,i){var x
for(x=1;x<=3;++x)this.K3(d,e+4*x*f,f,1,16,g,h,i)},
cao(d,e,f,g,h,i){var x
for(x=1;x<=3;++x)this.K3(d,e+4*x,1,f,16,g,h,i)},
K4(a2,a3,a4,a5,a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(x=3*a4,w=2*a4,v=a1.c,u=a1.e,t=a2.$flags|0,s=0;s<a6;++s,a3+=a5)if(a1.b_P(a2,a3,a4,a7,a8))if(a1.aZl(a2,a3,a4,a9))a1.ar6(a2,a3,a4)
else{r=a3-x
q=a2[r]
p=a3-w
o=a2[p]
n=a3-a4
m=a2[n]
l=a2[a3]
k=a3+a4
j=a2[k]
i=a3+w
h=a2[i]
g=v[1020+3*(l-m)+v[1020+o-j]]
f=D.c.U(27*g+63+3456,7)-27
e=D.c.U(18*g+63+2304,7)-18
d=D.c.U(9*g+63+1152,7)-9
a0=u[255+q+d]
t&2&&C.z(a2)
a2[r]=a0
a2[p]=u[255+o+e]
a2[n]=u[255+m+f]
a2[a3]=u[255+l-f]
a2[k]=u[255+j-e]
a2[i]=u[255+h-d]}},
K3(d,e,f,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=2*f,w=g.d,v=g.e,u=d.$flags|0,t=0;t<a1;++t,e+=a0)if(g.b_P(d,e,f,a2,a3))if(g.aZl(d,e,f,a4))g.ar6(d,e,f)
else{s=e-x
r=d[s]
q=e-f
p=d[q]
o=d[e]
n=e+f
m=d[n]
l=3*(o-p)
k=w[D.c.U(l+4+1024,3)-128+112]
j=w[D.c.U(l+3+1024,3)-128+112]
i=D.c.U(k+1+16,1)-8
h=v[255+r+i]
u&2&&C.z(d)
d[s]=h
d[q]=v[255+p+j]
d[e]=v[255+o-k]
d[n]=v[255+m-i]}},
ar6(d,e,f){var x=d[e-2*f],w=e-f,v=d[w],u=d[e],t=3*(u-v)+this.c[1020+x-d[e+f]],s=this.d,r=s[D.c.U(t+4+1024,3)-128+112],q=this.e
s=q[255+v+s[D.c.U(t+3+1024,3)-128+112]]
d.$flags&2&&C.z(d)
d[w]=s
d[e]=q[255+u-r]},
aZl(d,e,f,g){var x=d[e-2*f],w=d[e-f],v=d[e],u=d[e+f],t=this.a
return t[255+x-w]>g||t[255+u-v]>g},
b_O(d,e,f,g){var x=d[e-2*f],w=d[e-f],v=d[e],u=d[e+f]
return 2*this.a[255+w-v]+this.b[255+x-u]<=g},
b_P(d,e,f,g,h){var x=d[e-4*f],w=3*f,v=d[e-w],u=2*f,t=d[e-u],s=d[e-f],r=d[e],q=d[e+f],p=d[e+u],o=d[e+w]
w=this.a
u=255+t
if(2*w[255+s-r]+this.b[u-q]>g)return!1
return w[255+x-v]<=h&&w[255+v-t]<=h&&w[u-s]<=h&&w[255+o-p]<=h&&w[255+p-q]<=h&&w[255+q-r]<=h},
ws(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=y._.a(d.a),j=y.p.a(e.a),i=this.f,h=d.d
for(x=i.$flags|0,w=0,v=0;v<4;++v){u=k[h]
t=k[h+8]
s=u+t
r=u-t
t=k[h+4]
u=D.c.U(t*35468+1073741824,16)
q=k[h+12]
p=u-16384-(D.c.U(q*85627+1073741824,16)-16384)
o=D.c.U(t*85627+1073741824,16)-16384+(D.c.U(q*35468+1073741824,16)-16384)
n=w+1
x&2&&C.z(i)
i[w]=s+o
w=n+1
i[n]=r+p
n=w+1
i[w]=r-p
w=n+1
i[n]=s-o;++h}m=e.d
for(x=j.$flags|0,w=0,v=0;v<4;++v){l=i[w]+4
u=i[w+8]
s=l+u
r=l-u
u=i[w+4]
t=D.c.U(u*35468+1073741824,16)
q=i[w+12]
p=t-16384-(D.c.U(q*85627+1073741824,16)-16384)
o=D.c.U(u*85627+1073741824,16)-16384+(D.c.U(q*35468+1073741824,16)-16384)
q=j[m]+(D.c.U(s+o+65536,3)-8192)
if((q&-256)>>>0===0)u=q
else u=q<0?0:255
x&2&&C.z(j)
j[m]=u
u=m+1
t=j[u]+(D.c.U(r+p+65536,3)-8192)
if(!((t&-256)>>>0===0))t=t<0?0:255
j[u]=t
t=m+2
u=j[t]+(D.c.U(r-p+65536,3)-8192)
if(!((u&-256)>>>0===0))u=u<0?0:255
j[t]=u
u=m+3
t=j[u]+(D.c.U(s-o+65536,3)-8192)
if(!((t&-256)>>>0===0))t=t<0?0:255
j[u]=t;++w
m+=32}},
clE(d,e,f){this.ws(d,e)
if(f)this.ws(A.df(d,null,16),A.df(e,null,4))},
alU(d,e){var x,w,v,u,t,s
for(x=J.Q(d.a,d.d)+4+65536,w=0;w<4;++w)for(v=w*32,u=0;u<4;++u){t=u+v
s=J.Q(e.a,e.d+t)+(D.c.U(x,3)-8192)
if(!((s&-256)>>>0===0))s=s<0?0:255
J.dS(e.a,e.d+t,s)}},
bgd(d,e){var x=this,w=null
if(J.Q(d.a,d.d)!==0)x.alU(d,e)
if(J.Q(d.a,d.d+16)!==0)x.alU(A.df(d,w,16),A.df(e,w,4))
if(J.Q(d.a,d.d+32)!==0)x.alU(A.df(d,w,32),A.df(e,w,128))
if(J.Q(d.a,d.d+48)!==0)x.alU(A.df(d,w,48),A.df(e,w,132))}}
A.bHw.prototype={}
A.bHz.prototype={}
A.bHB.prototype={}
A.a9U.prototype={}
A.bHA.prototype={}
A.bHq.prototype={}
A.FI.prototype={}
A.azJ.prototype={}
A.azL.prototype={}
A.azK.prototype={}
A.azM.prototype={}
A.a9W.prototype={
a59(){var x,w,v,u,t=this,s=t.b
if(s.dq(8)!==47)return!1
x=s.dq(14)+1
w=s.dq(14)+1
v=s.dq(1)
t.dy=x
t.fr=w
u=t.c
u.f=B.Cq
u.a=x
u.b=w
u.d=v!==0
if(s.dq(3)!==0)return!1
return!0},
nO(){var x,w,v,u,t,s,r=this,q=null
r.f=0
if(!r.a59())return q
r.WU(r.dy,r.fr,!0)
r.aTt(r.dy)
x=r.dy
r.d=C.hA(q,q,D.ah,0,D.bI,r.fr,q,0,4,q,D.ah,x,!1)
x=r.cx
x.toString
w=r.c
v=w.a
u=w.b
if(!r.aDK(x,v,u,u,r.gbRG()))return q
x=w.w
if(x.length!==0){t=C.d5(new C.eW(x),!1,q,0)
x=r.d
x.toString
x.e=A.cE2(t)}s=w.r
if(s!=null)r.d.c=new C.zY("ICC_PROFILE",D.ni,s)
return r.d},
aTt(d){var x,w=this,v=w.c
v=v.a*v.b+d
x=new Uint32Array(v+d*16)
w.cx=x
w.cy=J.cM(D.bg.ga4(x),0,null)
w.db=v
return!0},
bSX(d){var x,w,v,u=this,t=u.b,s=t.dq(2),r=u.CW,q=D.c.c2(1,s)
if((r&q)>>>0!==0)return!1
u.CW=(r|q)>>>0
x=new A.azI(B.adI)
u.ch.push(x)
r=B.aTz[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.dq(3)+2
x.e=t
x.d=u.WU(A.FJ(x.b,t),A.FJ(x.c,x.e),!1)
break
case 3:w=t.dq(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.FJ(x.b,v)
x.e=v
x.d=u.WU(w,1,!1)
u.bC6(w,x)
break
case 2:break}return!0},
WU(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.dq(1)!==0;){t=C.a([u,v],w)
if(!p.bSX(t))throw C.o(C.bP("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.dq(1)!==0){s=x.dq(4)
if(!(s>=1&&s<=11))throw C.o(C.bP("Invalid Color Cache"))}else s=0
if(!p.bSB(u,v,s,f))throw C.o(C.bP("Invalid Huffman Codes"))
if(s>0){x=D.c.c2(1,s)
p.w=x
p.x=new A.bHx(new Uint32Array(x),32-s)}else p.w=0
x=p.c
x.a=u
x.b=v
r=p.z
p.Q=A.FJ(u,r)
p.y=r===0?4294967295:D.c.c2(1,r)-1
if(f){p.f=0
return null}q=new Uint32Array(u*v)
if(!p.aDK(q,u,v,v,null))throw C.o(C.bP("Failed to decode image data."))
p.f=0
return q},
aDK(b0,b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=506832829,a5=a3.f,a6=D.c.dn(a5,b1),a7=D.c.Z(a5,b1),a8=b1*b2,a9=b1*b3
if(a5>=a9){if(b4!=null)b4.$2(b3,!1)
return!0}x=a3.aXK(a7,a6)
w=a3.w
v=280+w
u=w>0?a3.x:null
t=a3.y
for(w=b0.$flags|0,s=a3.b,r=b4!=null,q=a5;q<a9;){if((a7&t)>>>0===0){p=a3.Xm(a3.as,a3.Q,a3.z,a7,a6)
x=a3.ax[p]}o=0
if(x.d){n=x.c
w&2&&C.z(b0)
b0[q]=n;++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dN(A.akG(k,a4),m)
l&2&&C.z(n)
n[j]=k;++a5}a7=o}continue}if(s.a>=32)s.EG()
if(x.e){i=x.f[s.ahr()&63]
n=i.a
m=s.a
if(n<256){s.a=m+n
n=i.b
w&2&&C.z(b0)
b0[q]=n
h=0}else{s.a=m+(n-256)
h=i.b}if(s.b)break
if(h===0){++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dN(A.akG(k,a4),m)
l&2&&C.z(n)
n[j]=k;++a5}a7=o}continue}}else h=x.Hv(0,s)
if(h<256){if(x.b){n=x.c
w&2&&C.z(b0)
b0[q]=(n|h<<8)>>>0}else{g=x.Hv(1,s)
if(s.a>=32)s.EG()
f=C.d0s(x.Hv(2,s),h,g,x.Hv(3,s))
w&2&&C.z(b0)
b0[q]=f}++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dN(A.akG(k,a4),m)
l&2&&C.z(n)
n[j]=k;++a5}a7=o}}else if(h<280){e=a3.arB(h-256)
d=x.Hv(4,s)
if(s.a>=32)s.EG()
a0=a3.b0M(b1,a3.arB(d))
if(q<a0||a8-q<e)return!1
else{a1=q-a0
for(a2=0;a2<e;++a2){n=b0[a1+a2]
w&2&&C.z(b0)
b0[q+a2]=n}}q+=e
a7+=e
while(a7>=b1){a7-=b1;++a6
if(r&&a6<=b3)b4.$2(a6,!0)}if((a7&t)>>>0!==0){p=a3.Xm(a3.as,a3.Q,a3.z,a7,a6)
x=a3.ax[p]}if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dN(A.akG(k,a4),m)
l&2&&C.z(n)
n[j]=k;++a5}}else if(h<v){while(a5<q){n=b0[a5]
m=u.a
l=u.b
l=D.c.dN(A.akG(n,a4),l)
m.$flags&2&&C.z(m)
m[l]=n;++a5}n=u.a
m=n[h-280]
w&2&&C.z(b0)
b0[q]=m;++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
for(m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dN(A.akG(k,a4),m)
l&2&&C.z(n)
n[j]=k;++a5}a7=o}}else return!1}if(r)b4.$2(a6>b3?b3:a6,!1)
a3.f=q
return!0},
bKZ(){var x,w,v,u,t
if(this.w>0)return!1
for(x=this.at,w=this.ax,v=0;v<x;++v){u=w[v].a
t=u[1]
if(t.a[t.b].a>0)return!1
t=u[2]
if(t.a[t.b].a>0)return!1
t=u[3]
if(t.a[t.b].a>0)return!1}return!0},
bCf(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(e&&D.c.Z(d,16)!==0)return
x=m.r
w=d-x
v=m.dy
u=v*x
while(w>0){t=w>16?16:w
s=v*t
r=v*x
q=m.db
m.aTC(x,t,u)
for(v=m.dx,p=m.cx,o=0;o<s;++o){v.toString
n=p[q+o]
v.$flags&2&&C.z(v)
v[r+o]=n>>>8&255}w-=t
v=m.dy
u+=t*v
x+=t}m.r=d},
bzf(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.f,j=D.c.dn(k,d),i=D.c.Z(k,d),h=d*e,g=d*f
if(k>=g){l.arn(j)
return!0}x=l.aXK(i,j)
w=l.y
v=l.b
for(;;){if(!(!v.b&&k<g))break
if((i&w)>>>0===0){u=l.Xm(l.as,l.Q,l.z,i,j)
x=l.ax[u]}if(v.a>=32)v.EG()
t=x.Hv(0,v)
if(t<256){s=l.cy
s===$&&C.d()
s.$flags&2&&C.z(s)
s[k]=t;++k;++i
if(i>=d){++j
if(D.c.Z(j,16)===0)l.arn(j)
i=0}}else if(t<280){r=l.arB(t-256)
q=x.Hv(4,v)
if(v.a>=32)v.EG()
p=l.b0M(d,l.arB(q))
if(k>=p&&h-k>=r)for(s=l.cy,o=0;o<r;++o){s===$&&C.d()
n=k+o
m=s[n-p]
s.$flags&2&&C.z(s)
s[n]=m}else{l.f=k
return!0}k+=r
i+=r
while(i>=d){i-=d;++j
if(D.c.Z(j,16)===0)l.arn(j)}if(k<g&&(i&w)>>>0!==0){u=l.Xm(l.as,l.Q,l.z,i,j)
x=l.ax[u]}}else return!1}l.arn(j)
l.f=k
return!0},
arn(d){var x,w,v,u=this,t=u.r,s=d-t,r=u.cy
r===$&&C.d()
x=C.d5(r,!1,null,u.c.a*t)
if(s>0){w=u.r
t=u.dx
t.toString
v=C.d5(t,!1,null,u.dy*w)
u.ch[0].c49(w,w+s,x,v)}u.r=d},
bRH(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.c.a,m=o.r
if(e)if(D.c.Z(d,16)!==0)return
x=d-m
if(x<=0){o.r=d
return}o.aTC(m,x,n*m)
n=o.cx
n.toString
w=o.d.bK()
m=o.r
v=o.dy
u=m*v*4
for(t=o.db,m=w.$flags|0,s=0;s<x;++s)for(r=0;r<v;++r,++t){q=n[t]
p=u+1
m&2&&C.z(w)
w[u]=q>>>16&255
u=p+1
w[p]=q>>>8&255
p=u+1
w[u]=q&255
u=p+1
w[p]=q>>>24&255}o.r=d},
aTC(d,e,f){var x,w=this,v=w.ch,u=v.length,t=w.c.a,s=d+e,r=w.db,q=w.cx
q.toString
D.bg.bV(q,r,r+t*e,q,f)
for(;x=u-1,u>0;u=x){t=v[x]
q=w.cx
q.toString
t.ccD(d,s,q,r,q,r)}},
bSB(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=1,i=null
if(g&&k.b.dq(1)!==0){x=2+k.b.dq(3)
w=A.FJ(d,x)
v=A.FJ(e,x)
u=w*v
t=k.WU(w,v,!1)
if(t==null)return!1
k.z=x
for(s=t.$flags|0,r=j,q=0;q<u;++q){p=t[q]>>>8&65535
s&2&&C.z(t)
t[q]=p
if(p>=r)r=p+1}if(r>1000||r>d*e){i=new Int32Array(1)
D.db.dg(i,0,1,255)
for(j=0,q=0;q<u;++q){o=t[q]
if(i[o]===-1){n=j+1
i[o]=j
j=n}m=i[o]
s&2&&C.z(t)
t[q]=m}}else j=r}else{t=null
r=1}if(k.b.b)return!1
l=k.bSC(f,j,r,i)
if(l==null)return!1
k.as=t
k.at=j
k.ax=l
return!0},
aHe(d,e,f,g,h,i){var x,w=d.a,v=d.b,u=g
do{u-=f
x=w[v+(e+u)]
x.a=h
x.b=i}while(u>0)},
bNE(d,e,f){var x=D.c.bW(1,e-f)
while(e<15){x-=d[e]
if(x<=0)break;++e
x=x<<1>>>0}return e-f},
aXT(d,e){var x=D.c.bW(1,e-1)
while((d&x)>>>0!==0)x=x>>>1
return x!==0?((d&x-1)>>>0)+x:d},
b6e(a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=D.c.c2(1,a3),a0=new Int32Array(16),a1=new Int32Array(16)
for(x=0;x<a5;++x){w=a4[x]
if(w>15)return 0
a0[w]=a0[w]+1}if(a0[0]===a5)return 0
a1[1]=0
for(v=1;v<15;v=u){w=a0[v]
if(w>D.c.c2(1,v))return 0
u=v+1
a1[u]=a1[v]+w}for(w=a6!=null,x=0;x<a5;++x){t=a4[x]
if(t>0)if(w){s=a1[t]
if(s>=a5)return 0
a1[t]=s+1
a6.$flags&2&&C.z(a6)
a6[s]=x}else a1[t]=a1[t]+1}if(a1[15]===1){if(w){a2.toString
e.aHe(a2,0,1,d,0,a6[0])}return d}r=d-1
for(q=0,p=1,o=1,x=0,v=1,n=2;v<=a3;++v,n=n<<1>>>0){o=o<<1>>>0
p+=o
o-=a0[v]
if(o<0)return 0
if(a2==null)continue
for(m=v&255;a0[v]>0;a0[v]=a0[v]-1,x=l){l=x+1
e.aHe(a2,q,n,d,m,a6[x])
q=e.aXT(q,v)}}for(v=a3+1,w=a2!=null,k=d,j=0,i=4294967295,n=2;v<=15;++v,n=n<<1>>>0){o=o<<1>>>0
p+=o
o-=a0[v]
if(o<0)return 0
for(m=v-a3&255;a0[v]>0;a0[v]=a0[v]-1){h=(q&r)>>>0
if(h!==i){if(w)j+=k
g=e.bNE(a0,v,a3)
k=D.c.bW(1,g)
d+=k
if(w){s=a2.a[a2.b+h]
s.a=g+a3&255
s.b=j-h}i=h}if(w){l=x+1
f=a6[x]
e.aHe(a2,j+D.c.fe(q,a3),n,k,m,f)
x=l}q=e.aXT(q,v)}}if(p!==2*a1[15]-1)return 0
return d},
b6f(d,e,f,g){var x,w,v,u,t,s,r=this.b6e(null,e,f,g,null)
if(r===0||d==null)return r
x=d.b
w=x.d
v=x.e
if(w+r>=v){u=new A.a2D()
if(r>v)v=r
t=A.cEq(v)
u.e=v
u.b=u.a=t
d.b=u
x=u}s=new Uint16Array(g)
this.b6e(x.b,e,f,g,s)
return r},
bSA(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.ar3(new A.a2D())
h.aSR(128)
if(this.b6f(h,7,d,19)===0)return!1
x=this.b
if(x.dq(1)!==0){w=2+x.dq(2+2*x.dq(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=8,t=0;t<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.EG()
r=h.b.a
r.toString
q=r.a[r.b+(x.ahr()&127)]
x.a=x.a+q.a
p=q.b
if(p<16){o=t+1
v&2&&C.z(f)
f[t]=p
if(p!==0)u=p
t=o}else{n=p-16
m=B.azk[n]
l=B.azC[n]
k=x.dq(m)+l
if(t+k>e)return!1
j=p===16?u:0
for(;i=k-1,k>0;k=i,t=o){o=t+1
v&2&&C.z(f)
f[t]=j}}}return!0},
b1n(d,e,f){var x,w,v,u,t,s,r=this.b,q=r.dq(1)
D.db.dg(e,0,d,0)
if(q!==0){x=r.dq(1)
w=r.dq(r.dq(1)===0?1:8)
e.$flags&2&&C.z(e)
e[w]=1
if(x+1===2)e[r.dq(8)]=1
v=!0}else{u=new Int32Array(19)
t=r.dq(4)+4
for(s=0;s<t;++s)u[B.aFG[s]]=r.dq(3)
v=this.bSA(u,d,e)}return v&&!r.b?this.b6f(f,8,e,d):0},
aqh(d,e,f){var x=f.a,w=d.a
f.a=x+w
f.b=(f.b|D.c.c2(d.b,e))>>>0
return w},
bvR(d){var x,w,v,u,t,s,r,q=this
for(x=d.a,w=d.f,v=0;v<64;++v){u=w[v]
t=x[0]
s=t.a[t.b+v]
t=s.b
if(t>=256){u.a=s.a+256
u.b=t}else{u.b=u.a=0
r=D.c.fe(v,q.aqh(s,8,u))
t=x[1]
r=D.c.fe(r,q.aqh(t.a[t.b+r],16,u))
t=x[2]
r=D.c.fe(r,q.aqh(t.a[t.b+r],0,u))
t=x[3]
D.c.fe(r,q.aqh(t.a[t.b+r],24,u))}}},
bSC(a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a5>0,a2=a1?D.c.c2(1,a5):0,a3=B.aCV[a5],a4=a8==null
if(a4&&a6!==a7)return a0
x=new Int32Array(280+a2)
w=J.kM(a6,y.f)
for(v=0;v<a6;++v)w[v]=A.dcw()
a2=new A.ar3(new A.a2D())
a2.aSR(a6*a3)
d.ay=a2
for(a2=!a4,u=0;u<a7;++u)if(a2&&a8[u]===-1)for(t=0;t<5;++t){s=B.SD[t]
if(d.b1n(t===0&&a1?s+D.c.c2(1,a5):s,x,a0)===0)return a0}else{r=w[a4?u:a8[u]]
q=r.a
for(p=0,o=!0,n=0,t=0;t<5;++t){s=B.SD[t]
if(t===0&&a1)s+=D.c.c2(1,a5)
m=d.b1n(s,x,d.ay)
l=d.ay.b
k=l.b
k.toString
q[t]=k
if(m===0)return a0
if(o&&B.aHx[t]===1)o=k.a[k.b].a===0
j=k.a
k=k.b
n+=j[k].a
l.d+=m
l.b=new A.a2C(j,k+m)
if(t<=3){i=x[0]
for(h=1;h<s;++h){g=x[h]
if(g>i)i=g}p+=i}}r.b=o
r.d=!1
l=!1
if(o){k=q[1]
f=k.a[k.b].b
k=q[2]
e=k.a[k.b].b
k=q[3]
k=(k.a[k.b].b<<24|f<<16|e)>>>0
r.c=k
if(n===0){l=q[0]
l=l.a[l.b].b<256}if(l){r.d=!0
j=q[0]
r.c=(k|j.a[j.b].b<<8)>>>0}}l=!l&&p<6
r.e=l
if(l)d.bvR(r)}return w},
arB(d){var x
if(d<4)return d+1
x=D.c.U(d-2,1)
return D.c.c2(2+(d&1),x)+this.b.dq(x)+1},
b0M(d,e){var x,w
if(e>120)return e-120
else{x=B.aDn[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
bC6(d,e){var x,w,v,u,t,s,r=D.c.c2(1,D.c.fe(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.cM(D.bg.ga4(p),0,null)
w=J.cM(D.bg.ga4(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&C.z(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&C.z(w)
w[u]=0}e.d=q
return!0},
Xm(d,e,f,g,h){if(f===0||d==null)return 0
return d[e*D.c.U(h,f)+D.c.U(g,f)]},
aXK(d,e){var x=this,w=x.Xm(x.as,x.Q,x.z,d,e)
return x.ax[w]}}
A.arZ.prototype={
c9y(d,e){return this.bCf(d,e)}}
A.azH.prototype={
ahr(){var x,w,v=this.a
if(v<32){x=this.d
w=D.c.dN(x[0],v)+((x[1]&B.GN[v])>>>0)*(B.GN[32-v]+1)}else{x=this.d
w=v===32?x[1]:D.c.dN(x[1],v-32)}return w},
dq(d){var x,w,v=this
if(!v.b&&d<25){x=v.ahr()
w=B.GN[d]
v.a+=d
v.EG()
return(x&w)>>>0}else{v.b=!0
throw C.o(C.bP("Not enough data in input."))}},
EG(){var x,w,v,u=this,t=u.c,s=u.d,r=s.$flags|0,q=t.c
for(;;){if(!(u.a>=8&&t.d<q))break
x=J.Q(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&C.z(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bHx.prototype={}
A.Mo.prototype={
M(){return"VP8LImageTransformType."+this.b}}
A.azI.prototype={
ccD(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.c1j(h,i,(e-d)*s)
break
case 0:t.chQ(d,e,f,g,h,i)
if(e!==t.c){x=i-s
D.bg.bV(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.c4a(d,e,f,g,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.FJ(s,t.e)
u=i+w*s-v
D.bg.bV(h,u,u+v,f,i)
t.b8u(d,e,f,u,h,i)}else t.b8u(d,e,f,g,h,i)
break}},
c49(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.fe(8,r),p=this.b,o=this.d
if(q<8){x=D.c.c2(1,r)-1
w=D.c.c2(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.Q(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.dS(g.a,g.d,r>>>8&255);++g.d
u=D.c.U(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.Q(f.a,f.d);++f.d
r=o[s]
J.dS(g.a,g.d,r>>>8&255);++g.d}},
b8u(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.fe(8,p),n=this.b,m=this.d
if(o<8){x=D.c.c2(1,p)-1
w=D.c.c2(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&C.z(h)
h[i]=q
u=D.c.fe(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&C.z(h)
h[i]=q}},
c4a(a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=h.e,e=D.c.c2(1,f)-1,d=A.FJ(g,f),a0=D.c.U(a1,h.e)*d
for(f=a5.$flags|0,x=a1;x<a2;){w=new Uint8Array(3)
for(v=a0,u=0;u<g;++u){if((u&e)>>>0===0){t=v+1
s=h.d[v]
w[0]=s&255
w[1]=s>>>8&255
w[2]=s>>>16&255
v=t}s=a3[a4+u]
r=s>>>8&255
q=w[0]
p=$.oe()
p.$flags&2&&C.z(p)
p[0]=q
q=$.p6()
o=q[0]
p[0]=r
n=q[0]
m=$.aUQ()
m.$flags&2&&C.z(m)
m[0]=o*n
l=$.cCd()
k=(s>>>16&255)+(l[0]>>>5)>>>0&255
p[0]=w[1]
o=q[0]
p[0]=r
m[0]=o*q[0]
j=l[0]
p[0]=w[2]
o=q[0]
p[0]=k
m[0]=o*q[0]
i=l[0]
f&2&&C.z(a5)
a5[a6+u]=(s&4278255360|k<<16|((s&255)+(j>>>5)>>>0)+(i>>>5)>>>0&255)>>>0}a6+=g
a4+=g;++x
if((x&e)>>>0===0)a0+=d}},
JE(d,e){return(((d&4278255360)>>>0)+((e&4278255360)>>>0)&4278255360|(d&16711935)+(e&16711935)&16711935)>>>0},
chQ(a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=4278190080,a5=a3.b
if(a6===0){x=a3.JE(a8[a9],a4)
b0.$flags&2&&C.z(b0)
b0[b1]=x
w=a9+1
v=b1+1
u=a5-1
t=b0[b1]
for(s=0;s<u;++s){t=a3.JE(a8[w+s],t)
b0[v+s]=t}a9+=a5
b1+=a5;++a6}x=a3.e
r=D.c.c2(1,x)
q=r-1
p=A.FJ(a5,x)
o=D.c.U(a6,a3.e)*p
for(x=~q,n=b0.$flags|0,m=a6;m<a7;){l=b0[b1-a5]
k=a3.JE(a8[a9],l)
n&2&&C.z(b0)
b0[b1]=k
for(j=o,i=1;i<a5;i=e,j=h){h=j+1
g=a3.d[j]>>>8&15
f=$.dlu[g]
e=((i&x)>>>0)+r
if(e>a5)e=a5
d=a9+i
k=b1+i
a0=k-a5
a1=e-i
if(g===0)for(s=0;s<a1;++s)b0[k+s]=a3.JE(a8[d+s],a4)
else if(g===1){t=b0[k-1]
for(s=0;s<a1;++s){t=a3.JE(a8[d+s],t)
b0[k+s]=t}}else for(s=0;s<a1;++s){a2=k+s
l=f.$3(b0[a2-1],b0,a0+s)
b0[a2]=a3.JE(a8[d+s],l)}}a9+=a5
b1+=a5;++m
if((m&q)>>>0===0)o+=p}},
c1j(d,e,f){var x,w,v,u,t
for(x=d.$flags|0,w=0;w<f;++w){v=e+w
u=d[v]
t=u>>>8&255
x&2&&C.z(d)
d[v]=(u&4278255360|(u&16711935)+(t<<16|t)&16711935)>>>0}}}
A.bJt.prototype={
gdU(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
a58(d,e,f){var x,w,v,u,t,s,r=this
if(!r.gdU())return!1
x=B.aWD[r.e]
if(r.d===0){w=r.b
v=d*w
u=r.a
D.m.bV(f,v,v+e*w,u.a,u.d-u.b+v)}else{w=d+e
u=r.x
u===$&&C.d()
u.dx=f
t=u.c
if(r.y)w=u.bzf(t.a,t.b,w)
else{s=u.cx
s.toString
u=u.aDK(s,t.a,t.b,w,u.gc9x())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,d,e,f)}if(r.f===1)if(!r.bAc(f,r.b,r.c,d,e))return!1
if(d+e>=r.c)r.w=!0
return!0},
bAc(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.aa8.prototype={
bti(d,e){var x=this,w=d.b1()
x.w=0
x.f=(w&1)!==0
x.r=(w&2)===0
x.x=d.d-d.b
x.y=e-16}}
A.as_.prototype={}
A.ar1.prototype={}
A.ar2.prototype={}
A.a2C.prototype={
gt(d){return this.a.length-this.b},
h(d,e){return this.a[this.b+e]},
j(d,e,f){var x=this.a,w=this.b
x[D.c.ag(w,e)].a=f.gMt()
x[D.c.ag(w,e)].b=f.gu()}}
A.a2s.prototype={
h(d,e){return this.a[e]},
Hv(d,e){var x,w=e.ahr()&255,v=this.a,u=v[d],t=u.a[u.b+w].a-8
if(t>0){e.a+=8
x=e.ahr()
v=v[d]
w=w+v.a[v.b+w].b+((x&D.c.bW(1,t)-1)>>>0)}else v=u
u=e.a
v=v.a[v.b+w]
e.a=u+v.a
return v.b}}
A.a2D.prototype={}
A.ar3.prototype={
aSR(d){var x=this.b=this.a,w=A.cEq(d)
x.e=d
x.b=x.a=w}}
A.VI.prototype={
M(){return"WebPFormat."+this.b}}
A.VJ.prototype={
gbU(){return this.a},
gaV(){return this.b}}
A.as0.prototype={}
A.bJu.prototype={
lc(d){var x,w=C.d5(d,!1,null,0)
this.c=w
try{w=this.aXH(w)
return w}catch(x){return!1}},
jB(d){return C.fQ(new A.bJx(this,d))},
c0i(d){var x,w,v,u,t=this,s=null,r=C.d5(d,!1,s,0)
t.c=r
if(!t.aXH(r))return s
r=new A.as0(B.rW,C.a([],y.J))
t.a=r
x=t.c
x.toString
if(!t.aXL(x,r))return s
r=t.a
switch(r.f.a){case 3:x=t.b
A.o9(r.a,r.b,x,!1)
for(r=t.a.z,w=r.length,v=0;v<r.length;r.length===w||(0,C.q)(r),++v){u=r[v]
A.o9(u.c,u.d,x,!1)}r=t.a
r.as=r.z.length
return r
case 2:x=t.c
x.toString
x.d=r.ay
if(!A.cGU(x,r).a59())return s
r=t.a
A.o9(r.a,r.b,t.b,!1)
r=t.a
r.as=r.z.length
return r
case 1:x=t.c
x.toString
x.d=r.ay
if(!A.cGS(x,r).a59())return s
r=t.a
A.o9(r.a,r.b,t.b,!1)
r=t.a
r.as=r.z.length
return r
case 0:throw C.o(C.bP("Unknown format for WebP"))}},
i5(d){return C.fQ(new A.bJv(this,d))},
bzv(d){var x,w,v,u,t=this,s=t.c
if(s==null||t.a==null)return null
x=t.a
if(x.e){x=x.z
w=x.length
if(d>=w)return null
v=x[d]
x=v.y
x===$&&C.d()
w=v.x
w===$&&C.d()
return t.b6l(s.Dy(x,w),d)}w=x.f
if(w===B.Cq){u=s.Dy(x.ch,x.ay)
s=t.a
s.toString
return A.cGU(u,s).nO()}else if(w===B.Kb){u=s.Dy(x.ch,x.ay)
s=t.a
s.toString
return A.cGS(u,s).nO()}return null},
oO(d,e){return C.fQ(new A.bJw(this,d,e))},
c0h(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null
if(d.jB(a1)==null)return a0
x=d.a
w=x.e
if(!w)return d.i5(0)
new A.Aw(d.b).iX(0,x.a*x.as,x.b)
for(x=y.N,w=y.P,v=a0,u=v,t=u,s=0;r=d.a,s<r.as;++s){a2=r.z[s]
q=d.i5(s)
if(q==null)continue
r=a2.e
q.y=r
if(t==null||u==null){p=d.a
o=p.a
p=p.b
n=q.gqb()
m=q.a
m=m==null?a0:m.gcm()
if(m==null)m=D.ah
l=q.y
k=d.a
j=k.y
i=k.c
k=k.w
if(k.length===0)k=a0
else{k=new C.eW(k)
h=k.gt(0)
g=k.gt(0)
f=new C.Iq(C.t(x,w))
f.bk(new C.lT(k,0,Math.min(h,g),0,!1))
k=f}e=d.a.r
t=C.hA(i,k,m,l,D.bI,p,e==null?a0:new C.zY("ICC_PROFILE",D.ni,e),j,n,a0,D.ah,o,!1)
u=t}else{u=C.t6(u,!1,!1)
if(v!=null){p=v.f
p===$&&C.d()}else p=!1
if(p){p=v.a
o=v.b
n=v.c
m=v.d
A.d_c(u,!1,$.d3F(),p,p+n-1,o,o+m-1)}}u.y=r
r=a2.r
r===$&&C.d()
r=r?B.Db:B.te
A.cIG(u,q,r,a0,a0,a2.a,a2.b,a0,a0,a0,a0)
if(u!==t)t.pH(u)
v=a2}return t},
b6l(d,e){var x,w,v,u=null,t=C.a([],y.J),s=new A.as0(B.rW,t)
if(!this.aXL(d,s))return u
if(s.f===B.rW)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.y
t===$&&C.d()
x=w.x
x===$&&C.d()
return this.b6l(d.Dy(t,x),e)}else{v=d.Dy(s.ch,s.ay)
t=s.f
if(t===B.Cq)return A.cGU(v,s).nO()
else if(t===B.Kb)return A.cGS(v,s).nO()}return u},
aXH(d){if(d.iu(4)!=="RIFF")return!1
d.Y()
if(d.iu(4)!=="WEBP")return!1
return!0},
aXL(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.iu(4)
u=d.Y()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.bEi(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=B.Kb
break
case"VP8L":e.ay=r
e.ch=u
e.f=B.Cq
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.at(s)
o=p.gt(s)
p=p.gt(s)
s=new C.lT(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=B.bkt
n=d.Y()
s=new Uint8Array(4)
s[0]=n>>>16&255
s[1]=n>>>8&255
s[2]=n&255
s[3]=n>>>24&255
e.c=new C.HO(s)
e.y=d.a6()
break
case"ANMF":if(!this.bDp(d,e,u))return!1
break
case"ICCP":e.toString
m=d.h4(u)
d.d=d.d+(m.c-m.d)
e.r=m.bK()
break
case"EXIF":e.toString
e.w=d.iu(u)
break
case"XMP ":e.toString
d.iu(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==B.rW},
bEi(d,e){var x,w,v,u,t=d.b1()
if((t&192)!==0)return!1
x=D.c.U(t,4)
w=D.c.U(t,1)
if((t&1)!==0)return!1
if(d.rN()!==0)return!1
v=d.rN()
u=d.rN()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
bDp(d,e,f){var x=new A.as_(d.rN()*2,d.rN()*2,d.rN()+1,d.rN()+1,d.rN())
x.bti(d,f)
if(x.w!==0)return!1
e.z.push(x)
return!0}}
A.c7v.prototype={
bto(d,e){var x=this,w=d.a.gjA(),v=x.b,u=(d.gbU()-1)*v,t=(d.gaV()-1)*w,s=x.e
switch(e){case 2:s!==$&&C.b3()
x.e=u
x.f!==$&&C.b3()
x.f=-v
x.r!==$&&C.b3()
x.r=w
break
case 3:s!==$&&C.b3()
x.e=t+u
x.f!==$&&C.b3()
x.f=-v
x.r!==$&&C.b3()
x.r=-w
break
case 4:s!==$&&C.b3()
x.e=t
x.f!==$&&C.b3()
x.f=v
x.r!==$&&C.b3()
x.r=-w
break
case 5:s!==$&&C.b3()
x.e=0
x.f!==$&&C.b3()
x.f=w
x.r!==$&&C.b3()
x.r=v
break
case 6:s!==$&&C.b3()
x.e=t
x.f!==$&&C.b3()
x.f=-w
x.r!==$&&C.b3()
x.r=v
break
case 7:s!==$&&C.b3()
x.e=t+u
x.f!==$&&C.b3()
x.f=-w
x.r!==$&&C.b3()
x.r=-v
break
case 8:s!==$&&C.b3()
x.e=u
x.f!==$&&C.b3()
x.f=w
x.r!==$&&C.b3()
x.r=-v
break
default:s!==$&&C.b3()
x.e=0
x.f!==$&&C.b3()
x.f=v
x.r!==$&&C.b3()
x.r=w
break}}}
A.b7s.prototype={
M(){return"FlipDirection."+this.b}}
A.bom.prototype={
b_(d){var x,w=this,v=w.a
if(v===w.c.length)w.b0n(v+1)
v=w.c
x=w.a++
v.$flags&2&&C.z(v)
v[x]=d&255},
hT(d){var x,w=this,v=J.aJ(d),u=w.a+v
if(u>w.c.length)w.b0n(u)
u=w.c
x=w.a
D.m.dd(u,x,x+v,d)
w.a+=v},
kj(d){var x=this
if(x.b){x.b_(D.c.U(d,8)&255)
x.b_(d&255)
return}x.b_(d&255)
x.b_(D.c.U(d,8)&255)},
kk(d){var x=this
if(x.b){x.b_(D.c.U(d,24)&255)
x.b_(D.c.U(d,16)&255)
x.b_(D.c.U(d,8)&255)
x.b_(d&255)
return}x.b_(d&255)
x.b_(D.c.U(d,8)&255)
x.b_(D.c.U(d,16)&255)
x.b_(D.c.U(d,24)&255)},
cna(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.cM(D.hA.ga4(v),0,null)
if(w.b){w.b_(x[3])
w.b_(x[2])
w.b_(x[1])
w.b_(x[0])
return}w.b_(x[0])
w.b_(x[1])
w.b_(x[2])
w.b_(x[3])},
cnb(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.cM(D.fX.ga4(v),0,null)
if(w.b){w.b_(x[7])
w.b_(x[6])
w.b_(x[5])
w.b_(x[4])
w.b_(x[3])
w.b_(x[2])
w.b_(x[1])
w.b_(x[0])
return}w.b_(x[0])
w.b_(x[1])
w.b_(x[2])
w.b_(x[3])
w.b_(x[4])
w.b_(x[5])
w.b_(x[6])
w.b_(x[7])},
b0n(d){var x=this.c,w=Math.max(x.length*3,d+8192),v=new Uint8Array(w)
D.m.dd(v,0,this.a,x)
this.c=v},
gt(d){return this.a}}
var z=a.updateTypes(["~(lT)","e(e,q2,e)","~(e,e,e,e,e,dD)","~(e,A)","zh?()","QO?()","VJ?()"])
A.aZ5.prototype={
$0(){return this.a.bvj(this.b)},
$S:z+4}
A.aZ3.prototype={
$0(){return this.a.bvi(this.b)},
$S:1693}
A.aZ2.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.ig(x.ch.ol(d),x.ch.oi(d),x.ch.oh(d),x.ch.og(d))}else w.ig(d,e,f,g)
w.l();++u.a}},
$S:1694}
A.aZ4.prototype={
$0(){return this.a.bvh(this.b,this.c)},
$S:32}
A.b6I.prototype={
$1(d){var x,w,v,u,t=this.b,s=t.fy,r=this.a,q=r.b
s=s[q]
x=t.go
w=r.a
x=x[w]
v=new Uint32Array(s*x)
u=q+1
r.b=u
if(u===t.id){r.b=0
r.a=w+1}return v},
$S:1695}
A.b6G.prototype={
$0(){var x=this.a,w=new A.b6H(C.a([],y.m))
w.bsx(this.b,x.b)
return x.a=w},
$S:94}
A.b6E.prototype={
$0(){return this.a.bCd(this.b)},
$S:32}
A.b6F.prototype={
$0(){return this.a.bCc(this.b,this.c)},
$S:32}
A.b9u.prototype={
$0(){return this.a.bEn(this.b)},
$S:z+5}
A.b9s.prototype={
$0(){return this.a.bEm(this.b)},
$S:32}
A.b9t.prototype={
$0(){return this.a.bEl(this.b,this.c)},
$S:32}
A.bbn.prototype={
$0(){var x=this.a,w=C.d5(this.b,!1,null,0)
x.a=w
return x.b=A.cPE(w)},
$S:94}
A.bbm.prototype={
$0(){return this.a.bJY(this.b,this.c)},
$S:32}
A.bbl.prototype={
$0(){return this.a.bJZ(this.b)},
$S:32}
A.bpI.prototype={
$0(){return this.a.bRf(this.b)},
$S:94}
A.bpG.prototype={
$0(){return this.a.bRd(this.b)},
$S:32}
A.bpH.prototype={
$0(){return this.a.bRc(this.b,this.c)},
$S:32}
A.bpO.prototype={
$0(){return this.a.bRg(this.b,this.c)},
$S:32}
A.bpP.prototype={
$0(){return this.a.bRi(this.b)},
$S:94}
A.bpN.prototype={
$0(){return this.a.bRh(this.b)},
$S:32}
A.bpM.prototype={
$1(d){return d!==""},
$S:6}
A.brj.prototype={
$0(){return this.a.bRO(this.b,this.c)},
$S:32}
A.brk.prototype={
$0(){var x=this.a
return x.a=A.cSC(this.b,x.b)},
$S:94}
A.bri.prototype={
$0(){var x=this.a.a
return x==null?null:x.c6P()},
$S:32}
A.brO.prototype={
$0(){return this.a.bXC(this.b)},
$S:94}
A.brM.prototype={
$0(){return this.a.bzu(this.b)},
$S:32}
A.brN.prototype={
$0(){return this.a.bRZ(this.b,this.c)},
$S:32}
A.bF1.prototype={
$0(){return this.a.bYF(this.b,this.c)},
$S:32}
A.bF2.prototype={
$0(){return this.a.bYH(this.b)},
$S:94}
A.bF0.prototype={
$0(){return this.a.bYG(this.b)},
$S:32}
A.bFb.prototype={
$0(){return this.a.bYR(this.b)},
$S:32}
A.bFc.prototype={
$0(){return this.a.bYQ(this.b,this.c)},
$S:32}
A.bJx.prototype={
$0(){return this.a.c0i(this.b)},
$S:z+6}
A.bJv.prototype={
$0(){return this.a.bzv(this.b)},
$S:32}
A.bJw.prototype={
$0(){return this.a.c0h(this.b,this.c)},
$S:32}
A.cvb.prototype={
$1(d){return A.cZI(d,this.a.a)},
$S:1696};(function installTearOffs(){var x=a._static_1,w=a._instance_2u,v=a.installStaticTearOff
x(A,"dAO","dl1",0)
x(A,"dAH","dkU",0)
x(A,"dAF","dkS",0)
x(A,"dAM","dl_",0)
x(A,"dAN","dl0",0)
x(A,"dAL","dkZ",0)
x(A,"dAK","dkY",0)
x(A,"dAJ","dkX",0)
x(A,"dAQ","dl3",0)
x(A,"dAP","dl2",0)
x(A,"dAI","dkV",0)
x(A,"dAG","dkT",0)
x(A,"dB0","dle",0)
x(A,"dAZ","dlc",0)
x(A,"dAR","dl4",0)
x(A,"dAT","dl6",0)
x(A,"dAS","dl5",0)
x(A,"dAU","dl7",0)
x(A,"dB1","dlf",0)
x(A,"dB_","dld",0)
x(A,"dAV","dl8",0)
x(A,"dAW","dl9",0)
x(A,"dAX","dla",0)
x(A,"dAY","dlb",0)
w(A.a9W.prototype,"gbRG","bRH",3)
w(A.arZ.prototype,"gc9x","c9y",3)
v(A,"cJJ",3,null,["$3"],["dlg"],1,0)
v(A,"dB2",3,null,["$3"],["dlh"],1,0)
v(A,"dB7",3,null,["$3"],["dlm"],1,0)
v(A,"dB8",3,null,["$3"],["dln"],1,0)
v(A,"dB9",3,null,["$3"],["dlo"],1,0)
v(A,"dBa",3,null,["$3"],["dlp"],1,0)
v(A,"dBb",3,null,["$3"],["dlq"],1,0)
v(A,"dBc",3,null,["$3"],["dlr"],1,0)
v(A,"dBd",3,null,["$3"],["dls"],1,0)
v(A,"dBe",3,null,["$3"],["dlt"],1,0)
v(A,"dB3",3,null,["$3"],["dli"],1,0)
v(A,"dB4",3,null,["$3"],["dlj"],1,0)
v(A,"dB5",3,null,["$3"],["dlk"],1,0)
v(A,"dB6",3,null,["$3"],["dll"],1,0)
v(A,"dBi",6,null,["$6"],["dlU"],2,0)
v(A,"dBj",6,null,["$6"],["dlV"],2,0)
v(A,"dBh",6,null,["$6"],["dlT"],2,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.BQ,[A.wz,A.amA,A.mq,A.Iu,A.It,A.uG,A.R2,A.beo,A.SO,A.a5a,A.Ez,A.EA,A.vg,A.oI,A.M5,A.kW,A.tL,A.Mo,A.VI,A.b7s])
w(A.a0g,C.F)
w(A.anO,A.a0g)
x(C.G,[A.Aw,A.aZ6,A.zh,A.a0F,A.b5L,A.apH,A.b6C,A.apI,A.apJ,A.b6H,A.a1C,A.aJu,A.a2k,A.a2l,A.QO,A.bbo,A.arm,A.c0R,A.a5b,A.bpK,A.ais,A.xG,A.T6,A.brg,A.T5,A.brl,A.auO,A.auR,A.auX,A.a5y,A.T8,A.auW,A.tu,A.az5,A.bF9,A.az7,A.bFd,A.az8,A.bFe,A.biZ,A.bHo,A.a9V,A.bHp,A.bHw,A.bHz,A.bHB,A.a9U,A.bHA,A.bHq,A.FI,A.azJ,A.azL,A.azK,A.azM,A.a9W,A.azH,A.bHx,A.azI,A.bJt,A.aa8,A.ar1,A.ar2,A.a2C,A.a2s,A.a2D,A.ar3,A.VJ,A.c7v,A.bom])
x(C.aos,[A.amD,A.b6D,A.b9r,A.bbk,A.bpF,A.bpL,A.brh,A.brL,A.bF_,A.bFa,A.bJu])
x(C.wB,[A.aZ5,A.aZ3,A.aZ4,A.b6G,A.b6E,A.b6F,A.b9u,A.b9s,A.b9t,A.bbn,A.bbm,A.bbl,A.bpI,A.bpG,A.bpH,A.bpO,A.bpP,A.bpN,A.brj,A.brk,A.bri,A.brO,A.brM,A.brN,A.bF1,A.bF2,A.bF0,A.bFb,A.bFc,A.bJx,A.bJv,A.bJw])
x(C.ph,[A.aZ2,A.b6I,A.bpM,A.cvb])
w(A.b38,A.amD)
w(A.bdZ,A.b6C)
x(A.bdZ,[A.arR,A.be_,A.be0,A.be1,A.arT])
w(A.arS,A.a1C)
w(A.arU,A.a2l)
w(A.bbj,A.zh)
w(A.bet,A.b5L)
w(A.arV,A.a5b)
w(A.be2,A.bpK)
w(A.Ks,A.a0F)
x(A.xG,[A.auM,A.auN,A.auP,A.auQ,A.auT,A.auU])
x(A.T6,[A.a5w,A.auS])
x(A.auX,[A.AJ,A.mP])
w(A.arZ,A.a9W)
w(A.as_,A.aa8)
w(A.as0,A.VJ)})()
C.yH(b.typeUniverse,JSON.parse('{"a0g":{"dA":[],"F":["bq"],"F.E":"bq"},"anO":{"dA":[],"F":["bq"],"F.E":"bq"},"arS":{"a1C":[]},"arU":{"a2l":[]},"arV":{"a5b":[]},"ais":{"aO":[]},"auM":{"xG":[]},"auN":{"xG":[]},"auP":{"xG":[]},"auQ":{"xG":[]},"auT":{"xG":[]},"auU":{"xG":[]},"a5w":{"T6":[]},"auS":{"T6":[]},"as_":{"aa8":[]}}'))
C.cnz(b.typeUniverse,JSON.parse('{"auX":1}'))
var y=(function rtii(){var x=C.ab
return{G:x("dA"),n:x("apH"),v:x("Iu"),D:x("apJ"),z:x("apV"),Y:x("ef"),f:x("a2s"),R:x("ar1"),u:x("ar2"),O:x("a2C"),W:x("arm"),P:x("pt"),Q:x("Jb"),_:x("A7"),h:x("C<apI>"),m:x("C<a1C>"),b:x("C<a2l>"),A:x("C<a2s>"),g:x("C<lR>"),L:x("C<w<w<w<e>>>>"),o:x("C<w<w<e>>>"),S:x("C<w<e>>"),d:x("C<a5b>"),X:x("C<T5>"),x:x("C<xG>"),l:x("C<auR>"),s:x("C<h>"),M:x("C<az8>"),a:x("C<dD>"),i:x("C<FI>"),F:x("C<azI>"),J:x("C<aa8>"),t:x("C<e>"),w:x("C<q2?>"),y:x("C<~(lT)>"),B:x("w<a9U>"),K:x("w<FI>"),H:x("w<e>"),e:x("T5"),j:x("auO"),C:x("a5w"),c:x("T6"),T:x("a5y"),k:x("T8"),N:x("h"),r:x("az7"),E:x("q2"),p:x("dD"),V:x("a9U"),ac:x("FI"),bQ:x("azJ"),bl:x("azK"),bt:x("azM"),U:x("aw<h>"),bc:x("aJu"),cB:x("A"),q:x("e"),ak:x("a9V?"),Z:x("azL?"),I:x("e?")}})();(function constants(){var x=a.makeConstList
B.te=new A.amA(0,"direct")
B.Db=new A.amA(1,"alpha")
B.Lg=new A.mq(0,"none")
B.Dc=new A.mq(3,"bitfields")
B.Dd=new A.mq(6,"alphaBitfields")
B.M5=new A.ais()
B.tw=new A.wz(0,"rgba")
B.M9=new A.wz(1,"bgra")
B.Ma=new A.wz(2,"abgr")
B.Mb=new A.wz(3,"argb")
B.Mc=new A.wz(4,"rgb")
B.Md=new A.wz(5,"bgr")
B.alc=new A.wz(6,"grayAlpha")
B.ald=new A.wz(7,"red")
B.ap0=new A.anO(4294967295)
B.asO=new A.It(0,"red")
B.asP=new A.It(1,"green")
B.asQ=new A.It(2,"blue")
B.asR=new A.It(3,"alpha")
B.asS=new A.It(4,"other")
B.Oj=new A.Iu(1,"half")
B.Ok=new A.Iu(2,"float")
B.Ol=new A.uG(0,"none")
B.ath=new A.b7s(2,"both")
B.OS=new C.aq7(1,"page")
B.au6=new C.arl(1,"deflate")
B.P0=new A.R2(2,"cur")
B.FY=new A.beo(0,"yuv444")
B.G8=x([0,2,8],y.t)
B.aym=x([0,4,2,1],y.t)
B.au7=new A.R2(0,"invalid")
B.au8=new A.R2(1,"ico")
B.ayq=x([B.au7,B.au8,B.P0],C.ab("C<R2>"))
B.b55=new A.SO(0,"none")
B.a9w=new A.SO(1,"background")
B.a9x=new A.SO(2,"previous")
B.az8=x([B.b55,B.a9w,B.a9x],C.ab("C<SO>"))
B.QU=x([292,260,226,226],y.t)
B.QV=x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],y.t)
B.azk=x([2,3,7],y.t)
B.QY=x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],y.t)
B.azC=x([3,3,11],y.t)
B.GK=x([128,128,128,128,128,128,128,128,128,128,128],y.t)
B.RU=x([B.GK,B.GK,B.GK],y.S)
B.aBW=x([253,136,254,255,228,219,128,128,128,128,128],y.t)
B.aEa=x([189,129,242,255,227,213,255,219,128,128,128],y.t)
B.aEi=x([106,126,227,252,214,209,255,255,128,128,128],y.t)
B.aI7=x([B.aBW,B.aEa,B.aEi],y.S)
B.aJ3=x([1,98,248,255,236,226,255,255,128,128,128],y.t)
B.aA_=x([181,133,238,254,221,234,255,154,128,128,128],y.t)
B.azI=x([78,134,202,247,198,180,255,219,128,128,128],y.t)
B.aNi=x([B.aJ3,B.aA_,B.azI],y.S)
B.aBM=x([1,185,249,255,243,255,128,128,128,128,128],y.t)
B.aIg=x([184,150,247,255,236,224,128,128,128,128,128],y.t)
B.aTy=x([77,110,216,255,236,230,128,128,128,128,128],y.t)
B.aH3=x([B.aBM,B.aIg,B.aTy],y.S)
B.aHh=x([1,101,251,255,241,255,128,128,128,128,128],y.t)
B.aBU=x([170,139,241,252,236,209,255,255,128,128,128],y.t)
B.aHy=x([37,116,196,243,228,255,255,255,128,128,128],y.t)
B.aB3=x([B.aHh,B.aBU,B.aHy],y.S)
B.aEZ=x([1,204,254,255,245,255,128,128,128,128,128],y.t)
B.aWX=x([207,160,250,255,238,128,128,128,128,128,128],y.t)
B.aWG=x([102,103,231,255,211,171,128,128,128,128,128],y.t)
B.aCI=x([B.aEZ,B.aWX,B.aWG],y.S)
B.aAG=x([1,152,252,255,240,255,128,128,128,128,128],y.t)
B.aXo=x([177,135,243,255,234,225,128,128,128,128,128],y.t)
B.aGM=x([80,129,211,255,194,224,128,128,128,128,128],y.t)
B.aI6=x([B.aAG,B.aXo,B.aGM],y.S)
B.SB=x([1,1,255,128,128,128,128,128,128,128,128],y.t)
B.aLd=x([246,1,255,128,128,128,128,128,128,128,128],y.t)
B.aG1=x([255,128,128,128,128,128,128,128,128,128,128],y.t)
B.aZ0=x([B.SB,B.aLd,B.aG1],y.S)
B.aCw=x([B.RU,B.aI7,B.aNi,B.aH3,B.aB3,B.aCI,B.aI6,B.aZ0],y.o)
B.aTL=x([198,35,237,223,193,187,162,160,145,155,62],y.t)
B.aBV=x([131,45,198,221,172,176,220,157,252,221,1],y.t)
B.aTJ=x([68,47,146,208,149,167,221,162,255,223,128],y.t)
B.aFo=x([B.aTL,B.aBV,B.aTJ],y.S)
B.aNA=x([1,149,241,255,221,224,255,255,128,128,128],y.t)
B.aPl=x([184,141,234,253,222,220,255,199,128,128,128],y.t)
B.aFQ=x([81,99,181,242,176,190,249,202,255,255,128],y.t)
B.aRI=x([B.aNA,B.aPl,B.aFQ],y.S)
B.aQd=x([1,129,232,253,214,197,242,196,255,255,128],y.t)
B.aWp=x([99,121,210,250,201,198,255,202,128,128,128],y.t)
B.aIb=x([23,91,163,242,170,187,247,210,255,255,128],y.t)
B.aG7=x([B.aQd,B.aWp,B.aIb],y.S)
B.aDm=x([1,200,246,255,234,255,128,128,128,128,128],y.t)
B.aQ5=x([109,178,241,255,231,245,255,255,128,128,128],y.t)
B.azc=x([44,130,201,253,205,192,255,255,128,128,128],y.t)
B.aSy=x([B.aDm,B.aQ5,B.azc],y.S)
B.aAo=x([1,132,239,251,219,209,255,165,128,128,128],y.t)
B.ays=x([94,136,225,251,218,190,255,255,128,128,128],y.t)
B.aQE=x([22,100,174,245,186,161,255,199,128,128,128],y.t)
B.aHe=x([B.aAo,B.ays,B.aQE],y.S)
B.aPk=x([1,182,249,255,232,235,128,128,128,128,128],y.t)
B.aHV=x([124,143,241,255,227,234,128,128,128,128,128],y.t)
B.aE2=x([35,77,181,251,193,211,255,205,128,128,128],y.t)
B.aEq=x([B.aPk,B.aHV,B.aE2],y.S)
B.aZ1=x([1,157,247,255,236,231,255,255,128,128,128],y.t)
B.aCs=x([121,141,235,255,225,227,255,255,128,128,128],y.t)
B.aQb=x([45,99,188,251,195,217,255,224,128,128,128],y.t)
B.aAT=x([B.aZ1,B.aCs,B.aQb],y.S)
B.ayt=x([1,1,251,255,213,255,128,128,128,128,128],y.t)
B.azt=x([203,1,248,255,255,128,128,128,128,128,128],y.t)
B.aPt=x([137,1,177,255,224,255,128,128,128,128,128],y.t)
B.aAJ=x([B.ayt,B.azt,B.aPt],y.S)
B.aOV=x([B.aFo,B.aRI,B.aG7,B.aSy,B.aHe,B.aEq,B.aAT,B.aAJ],y.o)
B.aCT=x([253,9,248,251,207,208,255,192,128,128,128],y.t)
B.aLe=x([175,13,224,243,193,185,249,198,255,255,128],y.t)
B.aZ_=x([73,17,171,221,161,179,236,167,255,234,128],y.t)
B.aJB=x([B.aCT,B.aLe,B.aZ_],y.S)
B.aO9=x([1,95,247,253,212,183,255,255,128,128,128],y.t)
B.aGp=x([239,90,244,250,211,209,255,255,128,128,128],y.t)
B.aTx=x([155,77,195,248,188,195,255,255,128,128,128],y.t)
B.aPj=x([B.aO9,B.aGp,B.aTx],y.S)
B.aF1=x([1,24,239,251,218,219,255,205,128,128,128],y.t)
B.aME=x([201,51,219,255,196,186,128,128,128,128,128],y.t)
B.aGo=x([69,46,190,239,201,218,255,228,128,128,128],y.t)
B.aO_=x([B.aF1,B.aME,B.aGo],y.S)
B.aEd=x([1,191,251,255,255,128,128,128,128,128,128],y.t)
B.aHw=x([223,165,249,255,213,255,128,128,128,128,128],y.t)
B.aIp=x([141,124,248,255,255,128,128,128,128,128,128],y.t)
B.aQc=x([B.aEd,B.aHw,B.aIp],y.S)
B.aFr=x([1,16,248,255,255,128,128,128,128,128,128],y.t)
B.aCp=x([190,36,230,255,236,255,128,128,128,128,128],y.t)
B.aBY=x([149,1,255,128,128,128,128,128,128,128,128],y.t)
B.aAp=x([B.aFr,B.aCp,B.aBY],y.S)
B.aIe=x([1,226,255,128,128,128,128,128,128,128,128],y.t)
B.aKr=x([247,192,255,128,128,128,128,128,128,128,128],y.t)
B.aTp=x([240,128,255,128,128,128,128,128,128,128,128],y.t)
B.azy=x([B.aIe,B.aKr,B.aTp],y.S)
B.aSx=x([1,134,252,255,255,128,128,128,128,128,128],y.t)
B.aHS=x([213,62,250,255,255,128,128,128,128,128,128],y.t)
B.aX4=x([55,93,255,128,128,128,128,128,128,128,128],y.t)
B.aId=x([B.aSx,B.aHS,B.aX4],y.S)
B.aBE=x([B.aJB,B.aPj,B.aO_,B.aQc,B.aAp,B.azy,B.aId,B.RU],y.o)
B.aHX=x([202,24,213,235,186,191,220,160,240,175,255],y.t)
B.aBT=x([126,38,182,232,169,184,228,174,255,187,128],y.t)
B.aAs=x([61,46,138,219,151,178,240,170,255,216,128],y.t)
B.aP0=x([B.aHX,B.aBT,B.aAs],y.S)
B.aGL=x([1,112,230,250,199,191,247,159,255,255,128],y.t)
B.aAR=x([166,109,228,252,211,215,255,174,128,128,128],y.t)
B.aHm=x([39,77,162,232,172,180,245,178,255,255,128],y.t)
B.aOX=x([B.aGL,B.aAR,B.aHm],y.S)
B.aGV=x([1,52,220,246,198,199,249,220,255,255,128],y.t)
B.aCE=x([124,74,191,243,183,193,250,221,255,255,128],y.t)
B.aE1=x([24,71,130,219,154,170,243,182,255,255,128],y.t)
B.aOW=x([B.aGV,B.aCE,B.aE1],y.S)
B.aDZ=x([1,182,225,249,219,240,255,224,128,128,128],y.t)
B.aX1=x([149,150,226,252,216,205,255,171,128,128,128],y.t)
B.aZi=x([28,108,170,242,183,194,254,223,255,255,128],y.t)
B.aUt=x([B.aDZ,B.aX1,B.aZi],y.S)
B.aZn=x([1,81,230,252,204,203,255,192,128,128,128],y.t)
B.aPY=x([123,102,209,247,188,196,255,233,128,128,128],y.t)
B.aSW=x([20,95,153,243,164,173,255,203,128,128,128],y.t)
B.aQ2=x([B.aZn,B.aPY,B.aSW],y.S)
B.aFJ=x([1,222,248,255,216,213,128,128,128,128,128],y.t)
B.aHP=x([168,175,246,252,235,205,255,255,128,128,128],y.t)
B.aE5=x([47,116,215,255,211,212,255,255,128,128,128],y.t)
B.aCg=x([B.aFJ,B.aHP,B.aE5],y.S)
B.aFA=x([1,121,236,253,212,214,255,255,128,128,128],y.t)
B.aGY=x([141,84,213,252,201,202,255,219,128,128,128],y.t)
B.aJr=x([42,80,160,240,162,185,255,205,128,128,128],y.t)
B.aEx=x([B.aFA,B.aGY,B.aJr],y.S)
B.aXO=x([244,1,255,128,128,128,128,128,128,128,128],y.t)
B.ayo=x([238,1,255,128,128,128,128,128,128,128,128],y.t)
B.aKw=x([B.SB,B.aXO,B.ayo],y.S)
B.az3=x([B.aP0,B.aOX,B.aOW,B.aUt,B.aQ2,B.aCg,B.aEx,B.aKw],y.o)
B.aAq=x([B.aCw,B.aOV,B.aBE,B.az3],y.L)
B.aAv=x([511,1023,2047,4095],y.t)
B.Rt=x([85,75,65,55,45,35],y.t)
B.aBy=x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],y.t)
B.vX=x([0,1,2,3,4,5,6,7,8,9,10,11],y.t)
B.aC_=x([8,8,4,2],y.t)
B.ayG=x([173,148,140],y.t)
B.ayH=x([176,155,140,135],y.t)
B.ayE=x([180,157,141,134,130],y.t)
B.azs=x([254,254,243,230,196,177,153,140,133,130,129],y.t)
B.aC1=x([B.ayG,B.ayH,B.ayE,B.azs],y.S)
B.S4=x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379],C.ab("C<T>"))
B.aCy=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],y.t)
B.Sr=x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],y.t)
B.aCV=x([2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],y.t)
B.SD=x([280,256,256,256,40],y.t)
B.wv=x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],y.t)
B.SI=x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],y.t)
B.Gj=x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],y.t)
B.aDn=x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],y.t)
B.Gk=x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],y.t)
B.SV=x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],y.t)
B.asT=new A.Iu(0,"uint")
B.aDL=x([B.asT,B.Oj,B.Ok],C.ab("C<Iu>"))
B.Tz=x([A.dAV(),A.dAN(),A.dB1(),A.dB_(),A.dAX(),A.dAW(),A.dAY()],y.y)
B.Jw=new A.kW(0,"whiteIsZero")
B.bh9=new A.kW(1,"blackIsZero")
B.bhg=new A.kW(2,"rgb")
B.Jy=new A.kW(3,"palette")
B.bhh=new A.kW(4,"transparencyMask")
B.ad_=new A.kW(5,"cmyk")
B.bhi=new A.kW(6,"yCbCr")
B.bhj=new A.kW(7,"reserved7")
B.bhk=new A.kW(8,"cieLab")
B.bhl=new A.kW(9,"iccLab")
B.bha=new A.kW(10,"ituLab")
B.bhb=new A.kW(11,"logL")
B.bhc=new A.kW(12,"logLuv")
B.bhd=new A.kW(13,"colorFilterArray")
B.bhe=new A.kW(14,"linearRaw")
B.bhf=new A.kW(15,"depth")
B.Jx=new A.kW(16,"unknown")
B.aF5=x([B.Jw,B.bh9,B.bhg,B.Jy,B.bhh,B.ad_,B.bhi,B.bhj,B.bhk,B.bhl,B.bha,B.bhb,B.bhc,B.bhd,B.bhe,B.bhf,B.Jx],C.ab("C<kW>"))
B.U0=x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],y.t)
B.a9u=new A.a5a(0,"source")
B.a9v=new A.a5a(1,"over")
B.aFu=x([B.a9u,B.a9v],C.ab("C<a5a>"))
B.bh1=new A.M5(0,"invalid")
B.acY=new A.M5(1,"uint")
B.bB=new A.M5(2,"int")
B.rE=new A.M5(3,"float")
B.aFy=x([B.bh1,B.acY,B.bB,B.rE],C.ab("C<M5>"))
B.aFG=x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],y.t)
B.UD=x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],y.t)
B.aGn=x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],y.t)
B.asU=new A.uG(1,"rle")
B.asV=new A.uG(2,"zips")
B.asW=new A.uG(3,"zip")
B.asX=new A.uG(4,"piz")
B.asY=new A.uG(5,"pxr24")
B.asZ=new A.uG(6,"b44")
B.at_=new A.uG(7,"b44a")
B.aGq=x([B.Ol,B.asU,B.asV,B.asW,B.asX,B.asY,B.asZ,B.at_],C.ab("C<uG>"))
B.aJj=x([231,120,48,89,115,113,120,152,112],y.t)
B.az4=x([152,179,64,126,170,118,46,70,95],y.t)
B.aGl=x([175,69,143,80,85,82,72,155,103],y.t)
B.aA8=x([56,58,10,171,218,189,17,13,152],y.t)
B.aHj=x([114,26,17,163,44,195,21,10,173],y.t)
B.aHN=x([121,24,80,195,26,62,44,64,85],y.t)
B.aHc=x([144,71,10,38,171,213,144,34,26],y.t)
B.aRb=x([170,46,55,19,136,160,33,206,71],y.t)
B.aDp=x([63,20,8,114,114,208,12,9,226],y.t)
B.aF_=x([81,40,11,96,182,84,29,16,36],y.t)
B.ayu=x([B.aJj,B.az4,B.aGl,B.aA8,B.aHj,B.aHN,B.aHc,B.aRb,B.aDp,B.aF_],y.S)
B.aCo=x([134,183,89,137,98,101,106,165,148],y.t)
B.aPJ=x([72,187,100,130,157,111,32,75,80],y.t)
B.aI2=x([66,102,167,99,74,62,40,234,128],y.t)
B.azx=x([41,53,9,178,241,141,26,8,107],y.t)
B.aEH=x([74,43,26,146,73,166,49,23,157],y.t)
B.aDF=x([65,38,105,160,51,52,31,115,128],y.t)
B.aDR=x([104,79,12,27,217,255,87,17,7],y.t)
B.aGj=x([87,68,71,44,114,51,15,186,23],y.t)
B.aOZ=x([47,41,14,110,182,183,21,17,194],y.t)
B.aLb=x([66,45,25,102,197,189,23,18,22],y.t)
B.aT2=x([B.aCo,B.aPJ,B.aI2,B.azx,B.aEH,B.aDF,B.aDR,B.aGj,B.aOZ,B.aLb],y.S)
B.aJ7=x([88,88,147,150,42,46,45,196,205],y.t)
B.aHp=x([43,97,183,117,85,38,35,179,61],y.t)
B.aE4=x([39,53,200,87,26,21,43,232,171],y.t)
B.aFX=x([56,34,51,104,114,102,29,93,77],y.t)
B.aH7=x([39,28,85,171,58,165,90,98,64],y.t)
B.aDy=x([34,22,116,206,23,34,43,166,73],y.t)
B.ayv=x([107,54,32,26,51,1,81,43,31],y.t)
B.aRp=x([68,25,106,22,64,171,36,225,114],y.t)
B.aCn=x([34,19,21,102,132,188,16,76,124],y.t)
B.aTR=x([62,18,78,95,85,57,50,48,51],y.t)
B.aCO=x([B.aJ7,B.aHp,B.aE4,B.aFX,B.aH7,B.aDy,B.ayv,B.aRp,B.aCn,B.aTR],y.S)
B.aH0=x([193,101,35,159,215,111,89,46,111],y.t)
B.aBD=x([60,148,31,172,219,228,21,18,111],y.t)
B.aAn=x([112,113,77,85,179,255,38,120,114],y.t)
B.aTN=x([40,42,1,196,245,209,10,25,109],y.t)
B.aFv=x([88,43,29,140,166,213,37,43,154],y.t)
B.aDA=x([61,63,30,155,67,45,68,1,209],y.t)
B.aEh=x([100,80,8,43,154,1,51,26,71],y.t)
B.azA=x([142,78,78,16,255,128,34,197,171],y.t)
B.aGH=x([41,40,5,102,211,183,4,1,221],y.t)
B.aD3=x([51,50,17,168,209,192,23,25,82],y.t)
B.aCK=x([B.aH0,B.aBD,B.aAn,B.aTN,B.aFv,B.aDA,B.aEh,B.azA,B.aGH,B.aD3],y.S)
B.aE_=x([138,31,36,171,27,166,38,44,229],y.t)
B.aCG=x([67,87,58,169,82,115,26,59,179],y.t)
B.aNh=x([63,59,90,180,59,166,93,73,154],y.t)
B.aSC=x([40,40,21,116,143,209,34,39,175],y.t)
B.azG=x([47,15,16,183,34,223,49,45,183],y.t)
B.aBS=x([46,17,33,183,6,98,15,32,183],y.t)
B.aZp=x([57,46,22,24,128,1,54,17,37],y.t)
B.aEm=x([65,32,73,115,28,128,23,128,205],y.t)
B.aI1=x([40,3,9,115,51,192,18,6,223],y.t)
B.aEE=x([87,37,9,115,59,77,64,21,47],y.t)
B.aGG=x([B.aE_,B.aCG,B.aNh,B.aSC,B.azG,B.aBS,B.aZp,B.aEm,B.aI1,B.aEE],y.S)
B.aXK=x([104,55,44,218,9,54,53,130,226],y.t)
B.aAQ=x([64,90,70,205,40,41,23,26,57],y.t)
B.aNf=x([54,57,112,184,5,41,38,166,213],y.t)
B.aDz=x([30,34,26,133,152,116,10,32,134],y.t)
B.aJC=x([39,19,53,221,26,114,32,73,255],y.t)
B.aD1=x([31,9,65,234,2,15,1,118,73],y.t)
B.aGE=x([75,32,12,51,192,255,160,43,51],y.t)
B.aDD=x([88,31,35,67,102,85,55,186,85],y.t)
B.aFb=x([56,21,23,111,59,205,45,37,192],y.t)
B.aFk=x([55,38,70,124,73,102,1,34,98],y.t)
B.aYt=x([B.aXK,B.aAQ,B.aNf,B.aDz,B.aJC,B.aD1,B.aGE,B.aDD,B.aFb,B.aFk],y.S)
B.aF9=x([125,98,42,88,104,85,117,175,82],y.t)
B.aDK=x([95,84,53,89,128,100,113,101,45],y.t)
B.aHA=x([75,79,123,47,51,128,81,171,1],y.t)
B.aAL=x([57,17,5,71,102,57,53,41,49],y.t)
B.aMt=x([38,33,13,121,57,73,26,1,85],y.t)
B.aX0=x([41,10,67,138,77,110,90,47,114],y.t)
B.aGr=x([115,21,2,10,102,255,166,23,6],y.t)
B.aCq=x([101,29,16,10,85,128,101,196,26],y.t)
B.aEc=x([57,18,10,102,102,213,34,20,43],y.t)
B.aFt=x([117,20,15,36,163,128,68,1,26],y.t)
B.aGg=x([B.aF9,B.aDK,B.aHA,B.aAL,B.aMt,B.aX0,B.aGr,B.aCq,B.aEc,B.aFt],y.S)
B.aEB=x([102,61,71,37,34,53,31,243,192],y.t)
B.aWx=x([69,60,71,38,73,119,28,222,37],y.t)
B.aEF=x([68,45,128,34,1,47,11,245,171],y.t)
B.ayD=x([62,17,19,70,146,85,55,62,70],y.t)
B.aZd=x([37,43,37,154,100,163,85,160,1],y.t)
B.aUw=x([63,9,92,136,28,64,32,201,85],y.t)
B.aPO=x([75,15,9,9,64,255,184,119,16],y.t)
B.aCB=x([86,6,28,5,64,255,25,248,1],y.t)
B.aKy=x([56,8,17,132,137,255,55,116,128],y.t)
B.aAx=x([58,15,20,82,135,57,26,121,40],y.t)
B.aHb=x([B.aEB,B.aWx,B.aEF,B.ayD,B.aZd,B.aUw,B.aPO,B.aCB,B.aKy,B.aAx],y.S)
B.aHH=x([164,50,31,137,154,133,25,35,218],y.t)
B.aCA=x([51,103,44,131,131,123,31,6,158],y.t)
B.aUp=x([86,40,64,135,148,224,45,183,128],y.t)
B.aGk=x([22,26,17,131,240,154,14,1,209],y.t)
B.aBK=x([45,16,21,91,64,222,7,1,197],y.t)
B.aSD=x([56,21,39,155,60,138,23,102,213],y.t)
B.aYf=x([83,12,13,54,192,255,68,47,28],y.t)
B.aI3=x([85,26,85,85,128,128,32,146,171],y.t)
B.aG2=x([18,11,7,63,144,171,4,4,246],y.t)
B.aCQ=x([35,27,10,146,174,171,12,26,128],y.t)
B.aFL=x([B.aHH,B.aCA,B.aUp,B.aGk,B.aBK,B.aSD,B.aYf,B.aI3,B.aG2,B.aCQ],y.S)
B.aOU=x([190,80,35,99,180,80,126,54,45],y.t)
B.aRa=x([85,126,47,87,176,51,41,20,32],y.t)
B.aMG=x([101,75,128,139,118,146,116,128,85],y.t)
B.aPE=x([56,41,15,176,236,85,37,9,62],y.t)
B.aAF=x([71,30,17,119,118,255,17,18,138],y.t)
B.aHa=x([101,38,60,138,55,70,43,26,142],y.t)
B.aFT=x([146,36,19,30,171,255,97,27,20],y.t)
B.aJ5=x([138,45,61,62,219,1,81,188,64],y.t)
B.aTO=x([32,41,20,117,151,142,20,21,163],y.t)
B.aRi=x([112,19,12,61,195,128,48,4,24],y.t)
B.aNZ=x([B.aOU,B.aRa,B.aMG,B.aPE,B.aAF,B.aHa,B.aFT,B.aJ5,B.aTO,B.aRi],y.S)
B.aGF=x([B.ayu,B.aT2,B.aCO,B.aCK,B.aGG,B.aYt,B.aGg,B.aHb,B.aFL,B.aNZ],y.o)
B.C1=new A.oI(0,"none")
B.kL=new A.oI(1,"palette")
B.acX=new A.oI(2,"rgb")
B.bgS=new A.oI(3,"gray")
B.bgT=new A.oI(4,"reserved4")
B.bgU=new A.oI(5,"reserved5")
B.bgV=new A.oI(6,"reserved6")
B.bgW=new A.oI(7,"reserved7")
B.bgX=new A.oI(8,"reserved8")
B.kM=new A.oI(9,"paletteRle")
B.acW=new A.oI(10,"rgbRle")
B.bgR=new A.oI(11,"grayRle")
B.aGO=x([B.C1,B.kL,B.acX,B.bgS,B.bgT,B.bgU,B.bgV,B.bgW,B.bgX,B.kM,B.acW,B.bgR],C.ab("C<oI>"))
B.VO=x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250],y.t)
B.aHx=x([0,1,1,1,0],y.t)
B.aHz=x([A.dAF(),A.dAM(),A.dAO(),A.dAH(),A.dAK(),A.dAQ(),A.dAJ(),A.dAP(),A.dAG(),A.dAI()],y.y)
B.Gh=x([8,0,8,0],y.t)
B.aAP=x([5,3,5,3],y.t)
B.azD=x([3,5,3,5],y.t)
B.QI=x([0,8,0,8],y.t)
B.Rh=x([4,4,4,4],y.t)
B.aAl=x([4,4,0,0],y.t)
B.W6=x([B.Gh,B.aAP,B.azD,B.QI,B.Gh,B.Rh,B.aAl,B.QI],y.S)
B.Wg=x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],y.t)
B.aIk=x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],y.t)
B.yC=x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],y.t)
B.Wl=x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],y.t)
B.Wn=x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],y.t)
B.yK=x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],y.t)
B.WA=x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],y.t)
B.Xv=x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],y.t)
B.b56=new A.Ez(0,"none")
B.b57=new A.Ez(1,"sub")
B.b58=new A.Ez(2,"up")
B.b59=new A.Ez(3,"average")
B.b5a=new A.Ez(4,"paeth")
B.Xw=x([B.b56,B.b57,B.b58,B.b59,B.b5a],C.ab("C<Ez>"))
B.fR=x([255,255,255,255,255,255,255,255,255,255,255],y.t)
B.o2=x([B.fR,B.fR,B.fR],y.S)
B.aFW=x([176,246,255,255,255,255,255,255,255,255,255],y.t)
B.aXm=x([223,241,252,255,255,255,255,255,255,255,255],y.t)
B.aCd=x([249,253,253,255,255,255,255,255,255,255,255],y.t)
B.aGB=x([B.aFW,B.aXm,B.aCd],y.S)
B.aF3=x([255,244,252,255,255,255,255,255,255,255,255],y.t)
B.aEu=x([234,254,254,255,255,255,255,255,255,255,255],y.t)
B.YG=x([253,255,255,255,255,255,255,255,255,255,255],y.t)
B.aCx=x([B.aF3,B.aEu,B.YG],y.S)
B.aTX=x([255,246,254,255,255,255,255,255,255,255,255],y.t)
B.aKf=x([239,253,254,255,255,255,255,255,255,255,255],y.t)
B.Y3=x([254,255,254,255,255,255,255,255,255,255,255],y.t)
B.aPL=x([B.aTX,B.aKf,B.Y3],y.S)
B.TE=x([255,248,254,255,255,255,255,255,255,255,255],y.t)
B.aDh=x([251,255,254,255,255,255,255,255,255,255,255],y.t)
B.aHM=x([B.TE,B.aDh,B.fR],y.S)
B.Gd=x([255,253,254,255,255,255,255,255,255,255,255],y.t)
B.aHD=x([251,254,254,255,255,255,255,255,255,255,255],y.t)
B.aDv=x([B.Gd,B.aHD,B.Y3],y.S)
B.aA5=x([255,254,253,255,254,255,255,255,255,255,255],y.t)
B.aEY=x([250,255,254,255,254,255,255,255,255,255,255],y.t)
B.z1=x([254,255,255,255,255,255,255,255,255,255,255],y.t)
B.aFw=x([B.aA5,B.aEY,B.z1],y.S)
B.aEb=x([B.o2,B.aGB,B.aCx,B.aPL,B.aHM,B.aDv,B.aFw,B.o2],y.o)
B.az2=x([217,255,255,255,255,255,255,255,255,255,255],y.t)
B.aFP=x([225,252,241,253,255,255,254,255,255,255,255],y.t)
B.aN6=x([234,250,241,250,253,255,253,254,255,255,255],y.t)
B.aRk=x([B.az2,B.aFP,B.aN6],y.S)
B.GR=x([255,254,255,255,255,255,255,255,255,255,255],y.t)
B.aCh=x([223,254,254,255,255,255,255,255,255,255,255],y.t)
B.aBL=x([238,253,254,254,255,255,255,255,255,255,255],y.t)
B.aJw=x([B.GR,B.aCh,B.aBL],y.S)
B.aED=x([249,254,255,255,255,255,255,255,255,255,255],y.t)
B.aTQ=x([B.TE,B.aED,B.fR],y.S)
B.aRx=x([255,253,255,255,255,255,255,255,255,255,255],y.t)
B.aHB=x([247,254,255,255,255,255,255,255,255,255,255],y.t)
B.aHf=x([B.aRx,B.aHB,B.fR],y.S)
B.aBz=x([252,255,255,255,255,255,255,255,255,255,255],y.t)
B.azz=x([B.Gd,B.aBz,B.fR],y.S)
B.YR=x([255,254,254,255,255,255,255,255,255,255,255],y.t)
B.aBI=x([B.YR,B.YG,B.fR],y.S)
B.aJq=x([255,254,253,255,255,255,255,255,255,255,255],y.t)
B.TY=x([250,255,255,255,255,255,255,255,255,255,255],y.t)
B.aBw=x([B.aJq,B.TY,B.z1],y.S)
B.aAa=x([B.aRk,B.aJw,B.aTQ,B.aHf,B.azz,B.aBI,B.aBw,B.o2],y.o)
B.aO0=x([186,251,250,255,255,255,255,255,255,255,255],y.t)
B.aD6=x([234,251,244,254,255,255,255,255,255,255,255],y.t)
B.aPN=x([251,251,243,253,254,255,254,255,255,255,255],y.t)
B.aDs=x([B.aO0,B.aD6,B.aPN],y.S)
B.aDk=x([236,253,254,255,255,255,255,255,255,255,255],y.t)
B.aJp=x([251,253,253,254,254,255,255,255,255,255,255],y.t)
B.aFn=x([B.Gd,B.aDk,B.aJp],y.S)
B.aOR=x([254,254,254,255,255,255,255,255,255,255,255],y.t)
B.aDc=x([B.YR,B.aOR,B.fR],y.S)
B.aQ4=x([254,254,255,255,255,255,255,255,255,255,255],y.t)
B.aDi=x([B.GR,B.aQ4,B.z1],y.S)
B.YT=x([B.fR,B.z1,B.fR],y.S)
B.aA7=x([B.aDs,B.aFn,B.aDc,B.aDi,B.YT,B.o2,B.o2,B.o2],y.o)
B.aER=x([248,255,255,255,255,255,255,255,255,255,255],y.t)
B.aDJ=x([250,254,252,254,255,255,255,255,255,255,255],y.t)
B.aD2=x([248,254,249,253,255,255,255,255,255,255,255],y.t)
B.aFp=x([B.aER,B.aDJ,B.aD2],y.S)
B.azJ=x([255,253,253,255,255,255,255,255,255,255,255],y.t)
B.aSr=x([246,253,253,255,255,255,255,255,255,255,255],y.t)
B.aDu=x([252,254,251,254,254,255,255,255,255,255,255],y.t)
B.aSq=x([B.azJ,B.aSr,B.aDu],y.S)
B.aZ3=x([255,254,252,255,255,255,255,255,255,255,255],y.t)
B.aCX=x([248,254,253,255,255,255,255,255,255,255,255],y.t)
B.aBv=x([253,255,254,254,255,255,255,255,255,255,255],y.t)
B.aHY=x([B.aZ3,B.aCX,B.aBv],y.S)
B.aYc=x([255,251,254,255,255,255,255,255,255,255,255],y.t)
B.aH2=x([245,251,254,255,255,255,255,255,255,255,255],y.t)
B.aH9=x([253,253,254,255,255,255,255,255,255,255,255],y.t)
B.aC5=x([B.aYc,B.aH2,B.aH9],y.S)
B.aCa=x([255,251,253,255,255,255,255,255,255,255,255],y.t)
B.aF8=x([252,253,254,255,255,255,255,255,255,255,255],y.t)
B.aP6=x([B.aCa,B.aF8,B.GR],y.S)
B.aB6=x([255,252,255,255,255,255,255,255,255,255,255],y.t)
B.aXv=x([249,255,254,255,255,255,255,255,255,255,255],y.t)
B.aDV=x([255,255,254,255,255,255,255,255,255,255,255],y.t)
B.ayC=x([B.aB6,B.aXv,B.aDV],y.S)
B.aZf=x([255,255,253,255,255,255,255,255,255,255,255],y.t)
B.aDg=x([B.aZf,B.TY,B.fR],y.S)
B.aBu=x([B.aFp,B.aSq,B.aHY,B.aC5,B.aP6,B.ayC,B.aDg,B.YT],y.o)
B.aQe=x([B.aEb,B.aAa,B.aA7,B.aBu],y.L)
B.ahs=new A.mq(1,"rle8")
B.ahx=new A.mq(2,"rle4")
B.ahy=new A.mq(4,"jpeg")
B.ahz=new A.mq(5,"png")
B.ahA=new A.mq(7,"reserved7")
B.ahB=new A.mq(8,"reserved8")
B.ahC=new A.mq(9,"reserved9")
B.aht=new A.mq(10,"reserved10")
B.ahu=new A.mq(11,"cmyk")
B.ahv=new A.mq(12,"cmykRle8")
B.ahw=new A.mq(13,"cmykRle4")
B.Y7=x([B.Lg,B.ahs,B.ahx,B.Dc,B.ahy,B.ahz,B.Dd,B.ahA,B.ahB,B.ahC,B.aht,B.ahu,B.ahv,B.ahw],C.ab("C<mq>"))
B.GM=x([0,128,192,224,240,248,252,254,255],y.t)
B.Yk=x([137,80,78,71,13,10,26,10],y.t)
B.GN=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],y.t)
B.adI=new A.Mo(0,"predictor")
B.bjl=new A.Mo(1,"crossColor")
B.bjm=new A.Mo(2,"subtractGreen")
B.adJ=new A.Mo(3,"colorIndexing")
B.aTz=x([B.adI,B.bjl,B.bjm,B.adJ],C.ab("C<Mo>"))
B.fU=x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],y.t)
B.aWt=x([A.dAR(),A.dAL(),A.dB0(),A.dAZ(),A.dAT(),A.dAS(),A.dAU()],y.y)
B.Z8=x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],y.t)
B.aWD=x([null,A.dBi(),A.dBj(),A.dBh()],C.ab("C<~(e,e,e,e,e,dD)?>"))
B.An=x([0,36,72,109,145,182,218,255],y.t)
B.ik=x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],y.t)
B.b5G=new A.vg(0,"bitmap")
B.a9L=new A.vg(1,"grayscale")
B.b5H=new A.vg(2,"indexed")
B.a9M=new A.vg(3,"rgb")
B.a9N=new A.vg(4,"cmyk")
B.b5I=new A.vg(5,"multiChannel")
B.b5J=new A.vg(6,"duoTone")
B.a9O=new A.vg(7,"lab")
B.aXt=x([B.b5G,B.a9L,B.b5H,B.a9M,B.a9N,B.b5I,B.b5J,B.a9O],C.ab("C<vg>"))
B.ZR=x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],y.t)
B.azo=x([2,6,2,6],y.t)
B.aBi=x([6,2,6,2],y.t)
B.azh=x([2,2,6,6],y.t)
B.ayV=x([1,3,3,9],y.t)
B.aAc=x([4,0,12,0],y.t)
B.azB=x([3,1,9,3],y.t)
B.aBZ=x([8,8,0,0],y.t)
B.aAe=x([4,12,0,0],y.t)
B.ayF=x([16,0,0,0],y.t)
B.ayA=x([12,4,0,0],y.t)
B.aBt=x([6,6,2,2],y.t)
B.azE=x([3,9,1,3],y.t)
B.ayz=x([12,0,4,0],y.t)
B.aCb=x([9,3,3,1],y.t)
B.en=x([B.Rh,B.azo,B.Gh,B.aBi,B.azh,B.ayV,B.aAc,B.azB,B.aBZ,B.aAe,B.ayF,B.ayA,B.aBt,B.azE,B.ayz,B.aCb],y.S)
B.o3=x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],y.t)
B.b1x=new C.dm([D.fK,1,D.hi,1,D.hj,1,D.ah,1,D.dl,2,D.jM,4,D.ls,1,D.lt,2,D.lu,4,D.i2,2,D.iX,4,D.jL,8],C.ab("dm<mB,e>"))
B.qW=new A.EA(0,"invalid")
B.a9y=new A.EA(1,"pbm")
B.a9z=new A.EA(2,"pgm2")
B.HN=new A.EA(3,"pgm5")
B.a9A=new A.EA(4,"ppm3")
B.HO=new A.EA(5,"ppm6")
B.act=new C.rd(null,null)
B.Jv=new A.tL(0,"bilevel")
B.bh2=new A.tL(1,"gray4bit")
B.bh3=new A.tL(2,"gray")
B.bh4=new A.tL(3,"grayAlpha")
B.bh5=new A.tL(4,"palette")
B.acZ=new A.tL(5,"rgb")
B.bh6=new A.tL(6,"rgba")
B.bh7=new A.tL(7,"yCbCrSub")
B.rF=new A.tL(8,"generic")
B.bh8=new A.tL(9,"invalid")
B.rW=new A.VI(0,"undefined")
B.Kb=new A.VI(1,"lossy")
B.Cq=new A.VI(2,"lossless")
B.bkt=new A.VI(3,"animated")})();(function staticFields(){$.cVz=!1
$.dlu=C.a([A.cJJ(),A.dB2(),A.dB7(),A.dB8(),A.dB9(),A.dBa(),A.dBb(),A.dBc(),A.dBd(),A.dBe(),A.dB3(),A.dB4(),A.dB5(),A.dB6(),A.cJJ(),A.cJJ()],C.ab("C<e(e,q2,e)>"))})();(function lazyInitializers(){var x=a.lazy,w=a.lazyFinal
x($,"dFP","cKC",()=>C.tn(511))
x($,"dFQ","cKD",()=>C.tn(511))
x($,"dFS","cKE",()=>C.cRN(2041))
x($,"dFT","cKF",()=>C.cRN(225))
x($,"dFR","cC8",()=>C.tn(766))
w($,"dG0","d3F",()=>C.cNt(0,0,0,0))})()};
(a=>{a["rfGmIthNMq822OzgJ2lzcFBE2FI="]=a.current})($__dart_deferred_initializers__);