((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,E,A={wJ:function wJ(d,e){this.a=d
this.b=e},a0z:function a0z(d){this.a=d},aoo:function aoo(d){this.a=d},an9:function an9(d,e){this.a=d
this.b=e},
oh(d,e,f,g){var x
if(g)x=d<0||e<0
else x=d<1||e<1
if(x)throw C.o(C.bQ("Invalid image dimensions "+d+"x"+e))
if(f>0&&d*e>f)throw C.o(C.bQ("Image dimensions "+d+"x"+e+" exceed the maximum of "+f+" pixels"))},
AD:function AD(d){this.a=d
this.c=0},
cPt(d){var x,w,v=new A.aZU()
if(!A.cPu(d))C.X(C.bQ("Not a bitmap file."))
d.d+=2
x=d.Y()
w=$.hf()
w.$flags&2&&C.z(w)
w[0]=x
x=$.kA()
d.d+=4
w[0]=d.Y()
v.b=x[0]
return v},
cPu(d){if(d.c-d.d<2)return!1
return A.di(d,null,0).a9()===19778},
dbc(d,e){var x,w,v,u,t=e==null?A.cPt(d):e,s=d.d,r=d.Y(),q=d.Y(),p=$.hf()
p.$flags&2&&C.z(p)
p[0]=q
q=$.kA()
x=q[0]
p[0]=d.Y()
q=q[0]
w=d.a9()
v=d.a9()
u=d.Y()
if(u>=14)C.X(C.bQ("Unsupported BMP compression type: "+u))
u=B.Ys[u]
d.Y()
p[0]=d.Y()
p[0]=d.Y()
p=d.Y()
d.Y()
s=new A.zn(t,x,q,r,w,v,u,p,s)
s.aTI(d,e)
return s},
mv:function mv(d,e){this.a=d
this.b=e},
aZU:function aZU(){this.b=$},
zn:function zn(d,e,f,g,h,i,j,k,l){var _=this
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
dbb(d,e){return new A.anc(d,e==null?268435456:e)},
anc:function anc(d,e){var _=this
_.a=$
_.b=null
_.c=d
_.d=e},
aZT:function aZT(d,e){this.a=d
this.b=e},
aZR:function aZR(d,e){this.a=d
this.b=e},
aZQ:function aZQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aZS:function aZS(d,e,f){this.a=d
this.b=e
this.c=f},
b3W:function b3W(d,e){var _=this
_.a=$
_.b=null
_.c=d
_.d=e},
a0Z:function a0Z(){},
b6y:function b6y(){},
aqg:function aqg(d,e){this.b=d
this.c=e},
asu:function asu(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
IH:function IH(d,e){this.a=d
this.b=e},
IG:function IG(d,e){this.a=d
this.b=e},
aqh:function aqh(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cRd(d,e,f,g){var x,w
switch(d.a){case 1:return new A.beW(f,e)
case 2:return new A.asw(f,g==null?1:g,e)
case 3:return new A.asw(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.beU(f,x,e)
w.bu4(e,f,x)
return w
case 5:return new A.beV(f,g==null?16:g,e)
case 6:return new A.asu(f,g==null?32:g,!1,e)
case 7:return new A.asu(f,g==null?32:g,!0,e)
default:throw C.o(C.bQ("Invalid compression type: "+d.k(0)))}},
uP:function uP(d,e){this.a=d
this.b=e},
b7p:function b7p(){},
beT:function beT(){},
deb(d,e,f,g){var x,w,v,u,t,s,r,q
if(e===0){if(g!==0)throw C.o(C.bQ("Incomplete huffman data"))
return}x=d.d
w=d.Y()
v=d.Y()
d.d+=4
u=d.Y()
t=!0
if(w<65537)t=v>=65537
if(t)throw C.o(C.bQ("Invalid huffman table size"))
d.d+=4
s=C.bs(65537,0,!1,y.q)
r=J.kP(16384,y.D)
for(q=0;q<16384;++q)r[q]=new A.aqi()
A.dec(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw C.o(C.bQ("Error in header for Huffman-encoded data (invalid number of bits)."))
A.de8(s,w,v,r)
A.dea(s,r,d,u,v,g,f)},
dea(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=C.a([0,0],y.t),n=f.d+D.c.ac(g+7,8)
for(x=0;f.d<n;){A.cGA(o,f)
while(w=o[1],w>=14){v=e[D.c.lq(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cGB(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw C.o(C.bQ(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
for(;;){w=o[1]
if(!(w<s&&f.d<n))break
A.cGA(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.lq(o[0],w)&D.c.c5(1,s)-1)>>>0){o[1]=w
r=A.cGB(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw C.o(C.bQ(p))}}}q=8-g&7
o[0]=D.c.U(o[0],q)
o[1]=o[1]-q
while(w=o[1],w>0){v=e[D.c.bX(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cGB(v.b,h,o,f,j,x,i)}else throw C.o(C.bQ(p))}if(x!==i)throw C.o(C.bQ("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cGB(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cGA(f,g)
x=f[1]-8
f[1]=x
w=D.c.lq(f[0],x)&255
if(i+w>j)throw C.o(C.bQ(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&C.z(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&C.z(h)
h[i]=d}else throw C.o(C.bQ(s))
i=t}return i},
de8(d,e,f,g){var x,w,v,u,t,s,r,q="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t;e<=f;++e){w=d[e]
v=w>>>6
u=w&63
if(D.c.ff(v,u)!==0)throw C.o(C.bQ(q))
if(u>14){t=g[D.c.dP(v,u-14)]
if(t.a!==0)throw C.o(C.bQ(q));++t.b
w=t.c;(w==null?t.c=C.a([],x):w).push(e)}else if(u!==0){w=14-u
s=D.c.bX(v,w)
for(r=D.c.bX(1,w);r>0;--r,++s){t=g[s]
if(t.a!==0||t.c!=null)throw C.o(C.bQ(q))
t.a=u
t.b=e}}}},
dec(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=C.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw C.o(C.bQ(s))
w=A.cRe(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw C.o(C.bQ(s))
v=A.cRe(8,p,d)+6
if(f+v>x)throw C.o(C.bQ(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw C.o(C.bQ(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.de9(h)},
de9(d){var x,w,v,u,t,s=C.bs(59,0,!1,y.q)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cGA(d,e){d[0]=((d[0]<<8|e.b1())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
cRe(d,e,f){var x
while(x=e[1],x<d){e[0]=((e[0]<<8|J.S(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.lq(e[0],x)&D.c.c5(1,d)-1)>>>0},
aqi:function aqi(){this.b=this.a=0
this.c=null},
ded(d){var x
if(d.length<8)return!1
x=C.d8(d,!1,null,0)
if(x.Y()!==20000630)return!1
if(x.b1()!==2)return!1
if((x.rQ()&4294967289)>>>0!==0)return!1
return!0},
b7u:function b7u(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cSU(d,e,f,g){var x=new A.asv(d,C.a([],y.h),C.t(y.N,y.n),B.OF,e)
x.btN(d,e,f,g)
return x},
a1X:function a1X(){},
b7v:function b7v(d,e){this.a=d
this.b=e},
asv:function asv(d,e,f,g,h){var _=this
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
beU:function beU(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aK9:function aK9(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
beV:function beV(d,e,f){var _=this
_.r=d
_.w=e
_.x=null
_.b=_.a=0
_.c=f},
beW:function beW(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
asw:function asw(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
b7q:function b7q(d){this.a=null
this.b=d},
b7t:function b7t(d,e){this.a=d
this.b=e},
b7r:function b7r(d,e){this.a=d
this.b=e},
b7s:function b7s(d,e,f){this.a=d
this.b=e
this.c=f},
cRX(d){var x=new Uint8Array(d*3)
return new A.a2G(A.dfa(d),d,null,new C.xH(x,d,3))},
df9(d){return new A.a2G(d.a,d.b,d.c,C.cUL(d.d))},
dfa(d){var x
for(x=1;x<=8;++x)if(D.c.c5(1,x)>=d)return x
return 0},
a2G:function a2G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2H:function a2H(){},
asx:function asx(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=-1
_.y=$},
R3:function R3(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
bag:function bag(d){var _=this
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
baj:function baj(d,e){this.a=d
this.b=e},
bah:function bah(d,e){this.a=d
this.b=e},
bai:function bai(d,e,f){this.a=d
this.b=e
this.c=f},
cSc(d){var x,w,v,u,t,s
if(d.a9()!==0)return null
x=d.a9()
if(x>=3)return null
w=B.ayO[x]
if(w===B.Pk)return null
v=d.a9()
u=J.hB(v,y.W)
for(t=0;t<v;++t){J.S(d.a,d.d++)
s=J.S(d.a,d.d++)
J.S(d.a,d.d++);++d.d
d.a9()
d.a9()
u[t]=new A.as_(s,d.Y(),d.Y())}return new A.bci(w,v,u)},
Rj:function Rj(d,e){this.a=d
this.b=e},
bci:function bci(d,e,f){this.c=d
this.d=e
this.e=f},
as_:function as_(d,e,f){this.b=d
this.d=e
this.e=f},
bcd:function bcd(d,e,f,g,h,i,j,k,l){var _=this
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
bce:function bce(d){this.b=this.a=null
this.c=d},
bch:function bch(d,e){this.a=d
this.b=e},
bcg:function bcg(d,e,f){this.a=d
this.b=e
this.c=f},
bcf:function bcf(d,e){this.a=d
this.b=e},
cTa(d){var x=new Uint8Array(64),w=new Uint8Array(64),v=new Float32Array(64),u=new Float32Array(64),t=new Int32Array(64),s=new Int32Array(64)
x=new A.bfo(x,w,v,u,t,s,new Int32Array(2048))
x.e=x.arA(B.a_b,B.w8)
x.f=x.arA(B.Ul,B.w8)
x.r=x.arA(B.Rf,B.SM)
x.w=x.arA(B.Tf,B.W8)
x.bLX()
x.bmp(d)
return x},
dgl(d,e){return d>0?d:d+D.c.bX(1,e)-1},
bfj:function bfj(d,e){this.a=d
this.b=e},
bfo:function bfo(d,e,f,g,h,i,j){var _=this
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
c2D:function c2D(d,e){this.a=d
this.b=e},
T4:function T4(d,e){this.a=d
this.b=e},
a5z:function a5z(d,e){this.a=d
this.b=e},
a5A:function a5A(){},
asy:function asy(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
EN:function EN(d,e){this.a=d
this.b=e},
bqN:function bqN(){},
beX:function beX(d,e,f){var _=this
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
cUW(d){var x=y.N,w=C.a([],y.d),v=C.a([],y.t),u=d==null?268435456:d
return new A.bqI(new A.beX(C.t(x,x),w,v),u)},
bqI:function bqI(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=$
_.f=0},
bqL:function bqL(d,e){this.a=d
this.b=e},
bqJ:function bqJ(d,e){this.a=d
this.b=e},
bqK:function bqK(d,e,f){this.a=d
this.b=e
this.c=f},
aj6:function aj6(){},
EO:function EO(d,e){this.a=d
this.b=e},
KF:function KF(d){this.b=this.a=0
this.e=d},
bqO:function bqO(d,e){var _=this
_.b=_.a=null
_.c=d
_.d=e},
bqR:function bqR(d,e,f){this.a=d
this.b=e
this.c=f},
bqS:function bqS(d,e){this.a=d
this.b=e},
bqQ:function bqQ(d,e){this.a=d
this.b=e},
bqP:function bqP(){},
avo:function avo(){this.b=this.a=null},
avp:function avp(){this.b=this.a=null},
xN:function xN(){},
avr:function avr(){this.b=this.a=null},
avs:function avs(){this.b=this.a=null},
avv:function avv(){this.b=this.a=null},
avw:function avw(){this.b=this.a=null},
a5V:function a5V(d){this.b=d},
avu:function avu(){this.b=$
this.c=null},
bsj:function bsj(){var _=this
_.w=_.r=_.f=_.e=$},
Tl:function Tl(d){this.a=d
this.c=null},
cVb(d,e){var x=C.a([],y.l),w=e==null?268435456:e
w=new A.bso(x,C.t(y.q,y.j),d.length,w)
w.buk(d,e)
return w},
cI6(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.e.H(D.e.aD((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
bsp(d,e){if(e===0)return 0
return D.c.H(D.c.aD(D.e.H(255*(1-(1-d/255)/(e/255))),0,255))},
bsr(d,e){return D.c.H(D.c.aD(d+e-255,0,255))},
cI8(d,e){return D.c.H(D.c.aD(255-(255-e)*(255-d),0,255))},
bsq(d,e){if(e===255)return 255
return D.e.H(D.e.aD(d/255/(1-e/255)*255,0,255))},
cI9(d,e){var x=d/255,w=e/255,v=1-w
return D.e.aq(255*(v*w*x+w*(1-v*(1-x))))},
cI4(d,e){var x=e/255,w=d/255
if(w<0.5)return D.e.aq(510*x*w)
else return D.e.aq(255*(1-2*(1-x)*(1-w)))},
cIa(d,e){if(e<128)return A.bsp(d,2*e)
else return A.bsq(d,2*(e-128))},
cI5(d,e){var x
if(e<128)return A.bsr(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
cI7(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
cI3(d,e){return D.e.aq(e+d-2*e*d/255)},
pT(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
cVc(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=C.t(y.q,y.e)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,C.r)(b9),++w){u=b9[w]
b4.j(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=C.hA(b3,b3,D.ah,0,D.bK,b8,b3,0,v,b3,D.ah,b7,!1)
if(t===-1)throw C.o(C.bQ("PSD: unsupported bit depth: "+C.v(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=C.a([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gO(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.l();){i=x.gq()
m+=t
switch(b5){case B.aa7:i.saz(A.pT(r.c,m,t))
i.saN(A.pT(q.c,m,t))
i.saL(A.pT(p.c,m,t))
i.saJ(v?A.pT(o.c,m,t):255)
if(i.gaJ()!==0){i.saz((i.gaz()+i.gaJ()-255)*255/i.gaJ())
i.saN((i.gaN()+i.gaJ()-255)*255/i.gaJ())
i.saL((i.gaL()+i.gaJ()-255)*255/i.gaJ())}break
case B.aa9:h=A.pT(r.c,m,t)
g=A.pT(q.c,m,t)
f=A.pT(p.c,m,t)
e=v?A.pT(o.c,m,t):255
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
a8=[D.e.aq(D.e.aD(a5*255,0,255)),D.e.aq(D.e.aD(a6*255,0,255)),D.e.aq(D.e.aD(a7*255,0,255))]
i.saz(a8[0])
i.saN(a8[1])
i.saL(a8[2])
i.saJ(e)
break
case B.aa6:a9=A.pT(r.c,m,t)
e=j?A.pT(o.c,m,t):255
i.saz(a9)
i.saN(a9)
i.saL(a9)
i.saJ(e)
break
case B.aa8:b0=A.pT(r.c,m,t)
b1=A.pT(q.c,m,t)
d=A.pT(p.c,m,t)
b2=A.pT(b4.h(0,k?-1:3).c,m,t)
e=l?A.pT(o.c,m,t):255
A.d1l(255-b0,255-b1,255-d,255-b2,n)
i.saz(n[0])
i.saN(n[1])
i.saL(n[2])
i.saJ(e)
break
default:throw C.o(C.bQ("Unhandled color mode: "+C.v(b5)))}}return s},
vp:function vp(d,e){this.a=d
this.b=e},
bso:function bso(d,e,f,g){var _=this
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
avq:function avq(d){this.a=d},
avt:function avt(d,e,f){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=d
_.ch=e
_.cx=null
_.cy=f},
dj4(d,e){var x,w
switch(d){case"lsct":x=new A.avu()
w=e.c-e.d
x.b=e.Y()
if(w>=12){if(e.iu(4)!=="8BIM")C.X(C.bQ("Invalid key in layer additional data"))
x.c=e.iu(4)}if(w>=16)e.Y()
return x
default:return new A.a5V(e)}},
Tm:function Tm(){},
bsk:function bsk(d){this.a=null
this.b=d},
bsm:function bsm(d,e,f){this.a=d
this.b=e
this.c=f},
bsn:function bsn(d,e){this.a=d
this.b=e},
bsl:function bsl(d,e){this.a=d
this.b=e},
avz:function avz(){},
AQ:function AQ(d,e,f){this.a=d
this.b=e
this.c=f},
mW:function mW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5X:function a5X(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
To:function To(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
avy:function avy(){this.y=this.b=this.a=0},
AR(d,e){return(B.yO[d>>>8]<<17|B.yO[e>>>8]<<16|B.yO[d&255]<<1|B.yO[e&255])>>>0},
tB:function tB(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
bsO:function bsO(d){this.b=this.a=null
this.c=d},
bsR:function bsR(d,e){this.a=d
this.b=e},
bsP:function bsP(d,e){this.a=d
this.b=e},
bsQ:function bsQ(d,e,f){this.a=d
this.b=e
this.c=f},
azL:function azL(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
oS:function oS(d,e){this.a=d
this.b=e},
bGd:function bGd(d){this.a=null
this.b=$
this.c=d},
bGf:function bGf(d,e,f){this.a=d
this.b=e
this.c=f},
bGg:function bGg(d,e){this.a=d
this.b=e},
bGe:function bGe(d,e){this.a=d
this.b=e},
bGn:function bGn(d){this.a=d
this.c=this.b=0},
azN:function azN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cJd(d,e,f){var x=new A.bGr(e,f,d),w=y.I
x.e=C.bs(e,null,!1,w)
x.f=C.bs(e,null,!1,w)
return x},
bGr:function bGr(d,e,f){var _=this
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
azO:function azO(d,e,f,g){var _=this
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
Mi:function Mi(d,e){this.a=d
this.b=e},
kX:function kX(d,e){this.a=d
this.b=e},
tU:function tU(d,e){this.a=d
this.b=e},
bGs:function bGs(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cTL(){return new A.bk0(new Uint8Array(4096))},
bk0:function bk0(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bGo:function bGo(d){this.a=null
this.c=$
this.d=d},
bGp:function bGp(d,e){this.a=d
this.b=e},
bGq:function bGq(d,e,f){this.a=d
this.b=e
this.c=f},
cJp(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=C.bs(8,null,!1,y.ak),s=C.bs(4,null,!1,y.Z)
return new A.bIE(d,e,new A.bIM(),new A.bIP(),new A.bIG(x,w),new A.bIR(v,u),t,s,new Uint8Array(4))},
oV(d,e,f,g,h){var x,w,v
for(x=d.$flags|0,w=0;w<h;++w){v=f[g+w]
x&2&&C.z(d)
d[e+w]=v}},
cYa(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bIE:function bIE(d,e,f,g,h,i,j,k,l){var _=this
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
_.bA=$
_.bv=null
_.E=$
_.a2=_.a_=null
_.ad=$},
cY8(d){var x=new A.aan(d)
x.b=254
x.c=0
x.d=-8
return x},
aan:function aan(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
ex(d,e,f){return D.c.nk(D.c.U(d+2*e+f+2,2),32)},
dnM(d){var x,w=C.a([A.ex(J.S(d.a,d.d+-33),J.S(d.a,d.d+-32),J.S(d.a,d.d+-31)),A.ex(J.S(d.a,d.d+-32),J.S(d.a,d.d+-31),J.S(d.a,d.d+-30)),A.ex(J.S(d.a,d.d+-31),J.S(d.a,d.d+-30),J.S(d.a,d.d+-29)),A.ex(J.S(d.a,d.d+-30),J.S(d.a,d.d+-29),J.S(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.az0(x*32,4,w)},
dnE(d){var x=J.S(d.a,d.d+-33),w=J.S(d.a,d.d+-1),v=J.S(d.a,d.d+31),u=J.S(d.a,d.d+63),t=J.S(d.a,d.d+95),s=A.di(d,null,0),r=s.aB0(),q=A.ex(x,w,v)
r.$flags&2&&C.z(r)
r[0]=16843009*q
s.d+=32
q=s.aB0()
r=A.ex(w,v,u)
q.$flags&2&&C.z(q)
q[0]=16843009*r
s.d+=32
r=s.aB0()
q=A.ex(v,u,t)
r.$flags&2&&C.z(r)
r[0]=16843009*q
s.d+=32
q=s.aB0()
r=A.ex(u,t,t)
q.$flags&2&&C.z(q)
q[0]=16843009*r},
dnC(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.S(d.a,d.d+(w-32))+J.S(d.a,d.d+(-1+w*32))
x=D.c.U(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.Cz(v,u,u+4,x)}},
cJq(d,e){var x,w,v,u,t,s=255-J.S(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.S(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.cEu()[v+J.S(d.a,d.d+(-32+u))]
J.dS(d.a,d.d+(x+u),t)}x+=32}},
dnK(d){A.cJq(d,4)},
dnL(d){A.cJq(d,8)},
dnJ(d){A.cJq(d,16)},
dnI(d){var x,w=J.S(d.a,d.d+-1),v=J.S(d.a,d.d+31),u=J.S(d.a,d.d+63),t=J.S(d.a,d.d+95),s=J.S(d.a,d.d+-33),r=J.S(d.a,d.d+-32),q=J.S(d.a,d.d+-31),p=J.S(d.a,d.d+-30),o=J.S(d.a,d.d+-29)
d.j(0,96,A.ex(v,u,t))
x=A.ex(w,v,u)
d.j(0,97,x)
d.j(0,64,x)
x=A.ex(s,w,v)
d.j(0,98,x)
d.j(0,65,x)
d.j(0,32,x)
x=A.ex(r,s,w)
d.j(0,99,x)
d.j(0,66,x)
d.j(0,33,x)
d.j(0,0,x)
x=A.ex(q,r,s)
d.j(0,67,x)
d.j(0,34,x)
d.j(0,1,x)
x=A.ex(p,q,r)
d.j(0,35,x)
d.j(0,2,x)
d.j(0,3,A.ex(o,p,q))},
dnH(d){var x,w=J.S(d.a,d.d+-32),v=J.S(d.a,d.d+-31),u=J.S(d.a,d.d+-30),t=J.S(d.a,d.d+-29),s=J.S(d.a,d.d+-28),r=J.S(d.a,d.d+-27),q=J.S(d.a,d.d+-26),p=J.S(d.a,d.d+-25)
d.j(0,0,A.ex(w,v,u))
x=A.ex(v,u,t)
d.j(0,32,x)
d.j(0,1,x)
x=A.ex(u,t,s)
d.j(0,64,x)
d.j(0,33,x)
d.j(0,2,x)
x=A.ex(t,s,r)
d.j(0,96,x)
d.j(0,65,x)
d.j(0,34,x)
d.j(0,3,x)
x=A.ex(s,r,q)
d.j(0,97,x)
d.j(0,66,x)
d.j(0,35,x)
x=A.ex(r,q,p)
d.j(0,98,x)
d.j(0,67,x)
d.j(0,99,A.ex(q,p,p))},
dnO(d){var x=J.S(d.a,d.d+-1),w=J.S(d.a,d.d+31),v=J.S(d.a,d.d+63),u=J.S(d.a,d.d+-33),t=J.S(d.a,d.d+-32),s=J.S(d.a,d.d+-31),r=J.S(d.a,d.d+-30),q=J.S(d.a,d.d+-29),p=D.c.nk(D.c.U(u+t+1,1),32)
d.j(0,65,p)
d.j(0,0,p)
p=D.c.nk(D.c.U(t+s+1,1),32)
d.j(0,66,p)
d.j(0,1,p)
p=D.c.nk(D.c.U(s+r+1,1),32)
d.j(0,67,p)
d.j(0,2,p)
d.j(0,3,D.c.nk(D.c.U(r+q+1,1),32))
d.j(0,96,A.ex(v,w,x))
d.j(0,64,A.ex(w,x,u))
p=A.ex(x,u,t)
d.j(0,97,p)
d.j(0,32,p)
p=A.ex(u,t,s)
d.j(0,98,p)
d.j(0,33,p)
p=A.ex(t,s,r)
d.j(0,99,p)
d.j(0,34,p)
d.j(0,35,A.ex(s,r,q))},
dnN(d){var x,w=J.S(d.a,d.d+-32),v=J.S(d.a,d.d+-31),u=J.S(d.a,d.d+-30),t=J.S(d.a,d.d+-29),s=J.S(d.a,d.d+-28),r=J.S(d.a,d.d+-27),q=J.S(d.a,d.d+-26),p=J.S(d.a,d.d+-25)
d.j(0,0,D.c.nk(D.c.U(w+v+1,1),32))
x=D.c.nk(D.c.U(v+u+1,1),32)
d.j(0,64,x)
d.j(0,1,x)
x=D.c.nk(D.c.U(u+t+1,1),32)
d.j(0,65,x)
d.j(0,2,x)
x=D.c.nk(D.c.U(t+s+1,1),32)
d.j(0,66,x)
d.j(0,3,x)
d.j(0,32,A.ex(w,v,u))
x=A.ex(v,u,t)
d.j(0,96,x)
d.j(0,33,x)
x=A.ex(u,t,s)
d.j(0,97,x)
d.j(0,34,x)
x=A.ex(t,s,r)
d.j(0,98,x)
d.j(0,35,x)
d.j(0,67,A.ex(s,r,q))
d.j(0,99,A.ex(r,q,p))},
dnF(d){var x,w=J.S(d.a,d.d+-1),v=J.S(d.a,d.d+31),u=J.S(d.a,d.d+63),t=J.S(d.a,d.d+95)
d.j(0,0,D.c.nk(D.c.U(w+v+1,1),32))
x=D.c.nk(D.c.U(v+u+1,1),32)
d.j(0,32,x)
d.j(0,2,x)
x=D.c.nk(D.c.U(u+t+1,1),32)
d.j(0,64,x)
d.j(0,34,x)
d.j(0,1,A.ex(w,v,u))
x=A.ex(v,u,t)
d.j(0,33,x)
d.j(0,3,x)
x=A.ex(u,t,t)
d.j(0,65,x)
d.j(0,35,x)
d.j(0,99,t)
d.j(0,98,t)
d.j(0,97,t)
d.j(0,96,t)
d.j(0,66,t)
d.j(0,67,t)},
dnD(d){var x=J.S(d.a,d.d+-1),w=J.S(d.a,d.d+31),v=J.S(d.a,d.d+63),u=J.S(d.a,d.d+95),t=J.S(d.a,d.d+-33),s=J.S(d.a,d.d+-32),r=J.S(d.a,d.d+-31),q=J.S(d.a,d.d+-30),p=D.c.nk(D.c.U(x+t+1,1),32)
d.j(0,34,p)
d.j(0,0,p)
p=D.c.nk(D.c.U(w+x+1,1),32)
d.j(0,66,p)
d.j(0,32,p)
p=D.c.nk(D.c.U(v+w+1,1),32)
d.j(0,98,p)
d.j(0,64,p)
d.j(0,96,D.c.nk(D.c.U(u+v+1,1),32))
d.j(0,3,A.ex(s,r,q))
d.j(0,2,A.ex(t,s,r))
p=A.ex(x,t,s)
d.j(0,35,p)
d.j(0,1,p)
p=A.ex(w,x,t)
d.j(0,67,p)
d.j(0,33,p)
p=A.ex(v,w,x)
d.j(0,99,p)
d.j(0,65,p)
d.j(0,97,A.ex(u,v,w))},
dnZ(d){var x
for(x=0;x<16;++x)d.QJ(x*32,16,d,-32)},
dnX(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.S(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.Cz(u,t,t+16,v)
x+=32}},
bIK(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.Cz(w,v,v+16,d)}},
dnP(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.S(d.a,d.d+(-1+w*32))+J.S(d.a,d.d+(w-32))
A.bIK(D.c.U(x,5),d)},
dnR(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.S(d.a,d.d+(-1+w*32))
A.bIK(D.c.U(x,4),d)},
dnQ(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.S(d.a,d.d+(w-32))
A.bIK(D.c.U(x,4),d)},
dnS(d){A.bIK(128,d)},
do_(d){var x
for(x=0;x<8;++x)d.QJ(x*32,8,d,-32)},
dnY(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.S(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.Cz(u,t,t+8,v)
x+=32}},
bIL(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.Cz(w,v,v+8,d)}},
dnT(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.S(d.a,d.d+(w-32))+J.S(d.a,d.d+(-1+w*32))
A.bIL(D.c.U(x,4),d)},
dnU(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.S(d.a,d.d+(w-32))
A.bIL(D.c.U(x,3),d)},
dnV(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.S(d.a,d.d+(-1+w*32))
A.bIL(D.c.U(x,3),d)},
dnW(d){A.bIL(128,d)},
bIH(d,e){return D.c.U(d*e+1073741824,16)-16384},
bII(d,e,f,g,h){var x=e+f+g*32
d.j(0,x,A.dnB(J.S(d.a,d.d+x)+(D.c.U(h+65536,3)-8192)))},
bIJ(d,e,f,g,h){A.bII(d,0,0,e,f+g)
A.bII(d,0,1,e,f+h)
A.bII(d,0,2,e,f-h)
A.bII(d,0,3,e,f-g)},
dnG(){var x,w,v,u
if(!$.cY9){for(x=-255;x<=255;++x){w=$.cNb()
v=255+x
u=x<0?-x:x
w.$flags&2&&C.z(w)
w[v]=u
u=$.cNc()
w=D.c.U(w[v],1)
u.$flags&2&&C.z(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cNd()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&C.z(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.cNe()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&C.z(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.cEu()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&C.z(w)
w[255+x]=v}$.cY9=!0}},
dnB(d){var x
if((d&-256)>>>0===0)x=d
else x=d<0?0:255
return x},
bIF:function bIF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dnA(){var x,w=J.kP(3,y.p)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.aam(w)},
dof(){var x,w,v,u,t=new Uint8Array(3),s=J.kP(4,y.B)
for(x=y.V,w=0;w<4;++w){v=J.kP(8,x)
for(u=0;u<8;++u)v[u]=A.dnA()
s[w]=v}D.n.dg(t,0,3,255)
return new A.bIQ(t,s)},
bIM:function bIM(){this.d=$},
bIP:function bIP(){this.b=null},
bIR:function bIR(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
aam:function aam(d){this.a=d},
bIQ:function bIQ(d,e){this.a=d
this.b=e},
bIG:function bIG(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
FX:function FX(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aAp:function aAp(){this.b=this.a=0},
aAr:function aAr(d,e,f){this.a=d
this.b=e
this.c=f},
aAq:function aAq(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aAs:function aAs(d,e,f){this.a=d
this.b=e
this.c=f},
cJr(d,e){var x,w=C.a([],y.A),v=C.a([],y.F),u=new Uint32Array(2),t=new A.aAn(d,u)
u=t.e=J.cS(D.bi.ga5(u),0,null)
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
return new A.aao(t,e,w,v)},
FY(d,e){return D.c.U(d+D.c.c5(1,e)-1,e)},
aao:function aao(d,e,f,g){var _=this
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
asC:function asC(d,e,f,g){var _=this
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
aAn:function aAn(d,e){var _=this
_.a=0
_.b=!0
_.c=d
_.d=e
_.e=$},
bIN:function bIN(d,e){this.a=d
this.b=e},
BC(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
MD(d){if(d<0)return 0
if(d>255)return 255
return d},
bIO(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
do0(d,e,f){return 4278190080},
do1(d,e,f){return d},
do6(d,e,f){return e[f]},
do7(d,e,f){return e[f+1]},
do8(d,e,f){return e[f-1]},
do9(d,e,f){var x=e[f]
return A.BC(A.BC(d,e[f+1]),x)},
doa(d,e,f){return A.BC(d,e[f-1])},
dob(d,e,f){return A.BC(d,e[f])},
doc(d,e,f){return A.BC(e[f-1],e[f])},
dod(d,e,f){return A.BC(e[f],e[f+1])},
do2(d,e,f){var x=e[f-1],w=e[f],v=e[f+1]
return A.BC(A.BC(d,x),A.BC(w,v))},
do3(d,e,f){var x=e[f],w=e[f-1]
return A.bIO(x>>>24,d>>>24,w>>>24)+A.bIO(x>>>16&255,d>>>16&255,w>>>16&255)+A.bIO(x>>>8&255,d>>>8&255,w>>>8&255)+A.bIO(x&255,d&255,w&255)<=0?x:d},
do4(d,e,f){var x=e[f],w=e[f-1]
return(A.MD((d>>>24)+(x>>>24)-(w>>>24))<<24|A.MD((d>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.MD((d>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.MD((d&255)+(x&255)-(w&255)))>>>0},
do5(d,e,f){var x,w,v,u=e[f],t=e[f-1],s=A.BC(d,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.MD(u+D.c.ac(u-(t>>>24),2))<<24|A.MD(x+D.c.ac(x-(t>>>16&255),2))<<16|A.MD(w+D.c.ac(w-(t>>>8&255),2))<<8|A.MD(v+D.c.ac(v-(t&255),2)))>>>0},
MC:function MC(d,e){this.a=d
this.b=e},
aAo:function aAo(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bKJ:function bKJ(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
aaB:function aaB(){},
asD:function asD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=_.f=$
_.w=1
_.y=_.x=$},
cGV(d){var x,w=J.hB(d,y.R)
for(x=0;x<d;++x)w[x]=new A.arF()
return new A.a3_(w,0)},
dfh(){var x,w,v=J.kP(5,y.O)
for(x=0;x<5;++x)v[x]=A.cGV(0)
w=J.kP(64,y.u)
for(x=0;x<64;++x)w[x]=new A.arG()
return new A.a2O(v,w)},
arF:function arF(){this.b=this.a=0},
arG:function arG(){this.b=this.a=0},
a3_:function a3_(d,e){this.a=d
this.b=e},
a2O:function a2O(d,e){var _=this
_.a=d
_.b=!1
_.c=0
_.e=_.d=!1
_.f=e},
a30:function a30(){var _=this
_.b=_.a=null
_.e=_.d=0},
arH:function arH(d){this.a=d
this.b=null},
VX:function VX(d,e){this.a=d
this.b=e},
VY:function VY(d,e){var _=this
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
asE:function asE(d,e){var _=this
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
bKK:function bKK(d){this.a=null
this.b=d
this.c=null},
bKN:function bKN(d,e){this.a=d
this.b=e},
bKL:function bKL(d,e){this.a=d
this.b=e},
bKM:function bKM(d,e,f){this.a=d
this.b=e
this.c=f},
d1h(d,e){var x
if(e===D.qe)x=A.qp(d)>0
else x=d.gcp()===D.ah&&!d.gyl()
return x},
d2z(d,e){return e>=5&&e<=8?d.gaV():d.gbV()},
d2y(d,e){return e>=5&&e<=8?d.gbV():d.gaV()},
dBZ(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t
if(!A.d1h(d,f))return!1
x=d.bL()
w=A.qp(d)
v=new A.c9n(x,w,A.d2z(d,o),A.d2y(d,o))
v.buD(d,o)
u=e.bL()
t=e.a.gjD()
if(f===D.qe){if(A.qp(e)!==w)return!1
A.dvK(v,u,t,g,h,i,j,m,n)
return!0}if(e.gcp()!==D.ah||e.a.c!==d.a.c)return!1
switch(f.a){case 1:A.dvJ(v,u,t,g,h,i,j,k,l)
return!0
case 3:A.dvH(v,u,t,g,h,i,j,k,l)
return!0
case 2:A.dvI(v,u,t,g,h,i,j,k,l)
return!0
case 0:return!1}},
dvK(d,e,f,g,h,i,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.b,k=d.a,j=new Int32Array(i)
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
dvJ(d,e,f,g,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m=d.b,l=d.c-1,k=d.d-1,j=new Int32Array(a1),i=new Int32Array(a1),h=new Float64Array(a1)
for(x=0;x<a1;++x){w=x*a3
v=D.e.H(w)
h[x]=w-v
u=d.f
u===$&&C.d()
j[x]=v*u
i[x]=D.c.aD(v+1,0,l)*u}for(u=d.a,t=g*m,s=0;s<a2;++s){r=s*a4
q=D.e.H(r)
p=D.c.aD(q+1,0,k)
o=d.e
o===$&&C.d()
n=d.r
n===$&&C.d()
A.duJ(u,o+q*n,o+p*n,e,(a0+s)*f+t,m,a1,j,i,h,r-q)}},
duJ(d,e,f,g,h,i,j,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
v=D.e.H(n+p*(m-n+a3*(n+d[q+o]-l-m))+a3*(l-n))
x&2&&C.z(g)
g[h]=v}}},
dvH(a4,a5,a6,a7,a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a4.b,a2=new Int32Array(a9),a3=new Int32Array(a9)
for(x=0;x<a9;x=v){w=D.e.H(x*b1)
v=x+1
u=D.e.H(v*b1)
if(u===w)++u
a2[x]=w
a3[x]=u}t=new Int32Array(a1)
for(s=a5.$flags|0,r=a4.a,q=a7*a1,p=0;p<b0;p=n){o=D.e.H(p*b2)
n=p+1
m=D.e.H(n*b2)
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
A.dwl(r,g+h*f+w*e,i,e,a1,t)}d=1/(k*i)
for(j=0;j<a1;++j,l=a0){a0=l+1
i=D.e.H(t[j]*d)
s&2&&C.z(a5)
a5[l]=i}}}},
dwl(d,e,f,g,h,i){var x,w,v,u,t
for(x=i.$flags|0,w=0;w<f;++w,e+=g)for(v=0;v<h;++v){u=i[v]
t=d[e+v]
x&2&&C.z(i)
i[v]=u+t}},
dvI(b4,b5,b6,b7,b8,b9,c0,c1,c2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b4.b,a9=b4.a,b0=b9*4,b1=new Int32Array(b0),b2=new Uint8Array(b0),b3=new Float64Array(b9)
for(b0=b4.f,x=b4.c,w=0;w<b9;++w){v=w*c1
u=D.e.H(v)
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
i=D.e.H(j)
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
m[a0]=A.d_w(a3,a9[n[a5]+a4],a9[n[a5+1]+a4],a9[n[a5+2]+a4],a9[n[a5+3]+a4])}a6=A.d_w(h,m[0],m[1],m[2],m[3])
a7=f+1
if(a6<0)e=0
else e=a6>255?255:D.e.H(a6)
b0&2&&C.z(b5)
b5[f]=e}}}},
d_w(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
c9n:function c9n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=_.f=_.e=$},
cxm(e8,e9,f0,f1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5=null,e6="ifd0",e7={}
e7.a=f0
if(e8.gyl())e7.a=D.qe
x=1
if(e8.gtT().h(0,e6).a.S(274)&&e8.gtT().h(0,e6).ghx()!==1){w=e8.gtT().h(0,e6).ghx()
w.toString
if(w>=2&&w<=8&&D.b.dr(e8.ghJ(),new A.cxn(e7)))x=w
else e8=A.cwr(e8)}v=A.d2z(e8,x)
u=A.d2y(e8,x)
if(e9<=0)e9=D.e.aq(f1*(u/v))
if(f1<=0)f1=D.e.aq(e9*(v/u))
if(f1===v&&e9===u)return x===1?C.tf(e8,!1,!1):A.cwr(e8)
t=new Int32Array(f1)
for(s=0;s<f1;++s)t[s]=D.c.dq(s*v,f1)
r=new Int32Array(e9)
for(q=0;q<e9;++q)r[q]=D.c.dq(q*u,e9)
p=e8.ghJ().length
for(w=x>=5,o=y.g,n=x<=8,m=e5,l=0;l<p;++l){k=e8.x
j=(k===$?e8.x=C.a([],o):k)[l]
i=A.a35(j,e9,!0,f1)
h=m==null
if(!h)m.pK(i)
if(h)m=i
h=w&&n
g=j.a
if(h){h=g==null?e5:g.a
if(h==null)h=0}else{h=g==null?e5:g.b
if(h==null)h=0}f=h/e9
if(w&&n){h=g==null?e5:g.b
if(h==null)h=0}else{h=g==null?e5:g.a
if(h==null)h=0}e=h/f1
if(A.dBZ(j,i,e7.a,0,0,f1,e9,e,f,t,r,x))continue
h=e7.a
if(h===D.vh){d=j.ie(0,0)
for(q=0;q<e9;q=a1){a0=D.e.H(q*f)
a1=q+1
a2=D.e.H(a1*f)
if(a2===a0)++a2
for(s=0;s<f1;s=a4){a3=D.e.H(s*e)
a4=s+1
a5=D.e.H(a4*e)
if(a5===a3)++a5
for(a6=a0,a7=0,a8=0,a9=0,b0=0,b1=0;a6<a2;++a6)for(b2=a3;b2<a5;++b2,++b1){h=j.a
if(h!=null)h.d0(b2,a6,d)
a7+=d.gaz()
a8+=d.gaN()
a9+=d.gaL()
b0+=d.gaJ()}b3=1/b1
h=i.a
if(h!=null)h.iQ(s,q,a7*b3,a8*b3,a9*b3,b0*b3)}}}else if(h===D.qe){h=j.a
if((h==null?e5:h.gdV())!=null)for(q=0;q<e9;++q){b4=r[q]
for(s=0;s<f1;++s){h=t[s]
g=j.a
h=g==null?e5:D.e.H(g.nr(h,b4).gcS())
if(h==null)h=0
g=i.a
if(g!=null)g.lU(s,q,h)}}else{d=j.ie(0,0)
for(q=0;q<e9;++q){a6=r[q]
for(s=0;s<f1;++s){h=t[s]
g=j.a
if(g!=null)g.d0(h,a6,d)
h=d.gaz()
g=d.gaN()
b5=d.gaL()
b6=d.gaJ()
b7=i.a
if(b7!=null)b7.iQ(s,q,h,g,b5,b6)}}}}else if(h===D.axI){b8=j.ie(0,0)
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
c5=D.e.H(c4)
c6=c4-c5
c7=D.c.aD(c5+1,0,c3)
for(s=0;s<f1;++s){c8=s*e
c9=D.e.H(c8)
d0=c8-c9
d1=D.c.aD(c9+1,0,c2)
h=j.a
if(h!=null)h.d0(c9,c5,b8)
h=j.a
if(h!=null)h.d0(c9,c7,b9)
h=j.a
if(h!=null)h.d0(d1,c5,c0)
h=j.a
if(h!=null)h.d0(d1,c7,c1)
h=b8.gaz()
g=c0.gaz()
b5=b9.gaz()
b6=c1.gaz()
b7=b8.gaN()
d2=c0.gaN()
d3=b9.gaN()
d4=c1.gaN()
d5=b8.gaL()
d6=c0.gaL()
d7=b9.gaL()
d8=c1.gaL()
d9=b8.gaJ()
e0=c0.gaJ()
e1=b9.gaJ()
e2=c1.gaJ()
e3=i.a
if(e3!=null)e3.iQ(s,q,h+d0*(g-h+c6*(h+b6-b5-g))+c6*(b5-h),b7+d0*(d2-b7+c6*(b7+d4-d3-d2))+c6*(d3-b7),d5+d0*(d6-d5+c6*(d5+d8-d7-d6))+c6*(d7-d5),d9+d0*(e0-d9+c6*(d9+e2-e1-e0))+c6*(e1-d9))}}}else for(q=0;q<e9;++q){e4=q*f
for(s=0;s<f1;++s)i.Dt(s,q,j.aR7(s*e,e4,e7.a))}}if(x!==1)m.gtT().h(0,e6).shx(e5)
m.toString
return m},
cxn:function cxn(d){this.a=d},
dza(d,e){switch(e.a){case 0:A.cyy(d)
break
case 1:A.d1P(d)
break
case 2:A.dzd(d)
break}return d},
d1P(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a1.ghJ().length
for(x=y.g,w=0;w<a0;++w){v=a1.x
u=(v===$?a1.x=C.a([],x):v)[w]
t=u.a
s=t==null
r=s?d:t.a
if(r==null)r=0
q=s?d:t.b
if(q==null)q=0
p=D.c.ac(q,2)
if(!s){o=J.dB(t.ga5(t))
if(o==null){t=u.a
t=t==null?d:t.ga5(t)
if(t==null)t=D.n.ga5(new Uint8Array(0))
o=J.dB(t)}n=u.a.gjD()
m=new Uint8Array(n)
for(l=q-1,k=0;k<p;++k,--l){j=k*n
i=l*n
D.n.bW(m,0,n,o,j)
D.n.bW(o,j,j+n,o,i)
D.n.dd(o,i,i+n,m)}continue}t=a1.a
if((t==null?d:t.gdV())!=null)for(l=q-1,k=0;k<p;++k,--l)for(h=0;h<r;++h){t=u.a
g=t==null?d:t.d0(h,k,d)
if(g==null)g=new C.fo()
t=u.a
f=t==null?d:t.d0(h,l,d)
if(f==null)f=new C.fo()
e=g.gcS()
g.scS(f.gcS())
f.scS(e)}else for(l=q-1,k=0;k<p;++k,--l)for(h=0;h<r;++h){t=u.a
g=t==null?d:t.d0(h,k,d)
if(g==null)g=new C.fo()
t=u.a
f=t==null?d:t.d0(h,l,d)
if(f==null)f=new C.fo()
e=g.gaz()
g.saz(f.gaz())
f.saz(e)
e=g.gaN()
g.saN(f.gaN())
f.saN(e)
e=g.gaL()
g.saL(f.gaL())
f.saL(e)
e=g.gaJ()
g.saJ(f.gaJ())
f.saJ(e)}}return a1},
cyy(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.ghJ().length
for(x=y.g,w=0;w<d;++w){v=a0.x
u=(v===$?a0.x=C.a([],x):v)[w]
t=u.a
s=t==null
r=s?e:t.a
if(r==null)r=0
q=s?e:t.b
if(q==null)q=0
p=D.c.ac(r,2)
o=A.qp(u)
if(o>0){t=u.a
n=t==null?e:J.dB(t.ga5(t))
if(n==null){t=u.a
t=t==null?e:t.ga5(t)
if(t==null)t=D.n.ga5(new Uint8Array(0))
n=J.dB(t)}m=u.a.gjD()
for(l=0;l<q;++l)A.d33(n,l*m,r,o)
continue}t=a0.a
if((t==null?e:t.gdV())!=null)for(k=r-1,l=0;l<q;++l)for(j=k,i=0;i<p;++i,--j){t=u.a
h=t==null?e:t.d0(i,l,e)
if(h==null)h=new C.fo()
t=u.a
g=t==null?e:t.d0(j,l,e)
if(g==null)g=new C.fo()
f=h.gcS()
h.scS(g.gcS())
g.scS(f)}else for(k=r-1,l=0;l<q;++l)for(j=k,i=0;i<p;++i,--j){t=u.a
h=t==null?e:t.d0(i,l,e)
if(h==null)h=new C.fo()
t=u.a
g=t==null?e:t.d0(j,l,e)
if(g==null)g=new C.fo()
f=h.gaz()
h.saz(g.gaz())
g.saz(f)
f=h.gaN()
h.saN(g.gaN())
g.saN(f)
f=h.gaL()
h.saL(g.gaL())
g.saL(f)
f=h.gaJ()
h.saJ(g.gaJ())
g.saJ(f)}}return a0},
dzd(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.ghJ().length
for(x=y.g,w=0;w<e;++w){v=d.x
u=(v===$?d.x=C.a([],x):v)[w]
t=u.a
s=t==null
r=s?f:t.a
if(r==null)r=0
q=s?f:t.b
if(q==null)q=0
p=A.qp(u)
if(p>0){t=u.a
t=t==null?f:J.dB(t.ga5(t))
if(t==null){t=u.a
t=t==null?f:t.ga5(t)
if(t==null)t=D.n.ga5(new Uint8Array(0))
t=J.dB(t)}A.d33(t,0,r*q,p)
continue}t=u.a
if((t==null?f:t.gdV())!=null)for(o=q-1,n=r-1,m=0;m<=o;++m,--o){l=m===o?D.c.ac(r,2):r
for(k=n,j=0;j<l;++j,--k){t=u.a
i=t==null?f:t.d0(j,m,f)
if(i==null)i=new C.fo()
t=u.a
h=t==null?f:t.d0(k,o,f)
if(h==null)h=new C.fo()
g=i.gcS()
i.scS(h.gcS())
h.scS(g)}}else for(o=q-1,n=r-1,m=0;m<=o;++m,--o){l=m===o?D.c.ac(r,2):r
for(k=n,j=0;j<l;++j,--k){t=u.a
i=t==null?f:t.d0(j,m,f)
if(i==null)i=new C.fo()
t=u.a
h=t==null?f:t.d0(k,o,f)
if(h==null)h=new C.fo()
g=i.gaz()
i.saz(h.gaz())
h.saz(g)
g=i.gaN()
i.saN(h.gaN())
h.saN(g)
g=i.gaL()
i.saL(h.gaL())
h.saL(g)
g=i.gaJ()
i.saJ(h.gaJ())
h.saJ(g)}}}return d},
b8h:function b8h(d,e){this.a=d
this.b=e},
a59(d,e){return new A.bpo(d,new Uint8Array(e))},
bpo:function bpo(d,e){this.a=0
this.b=d
this.c=e},
cLf(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gbV()
if(k==null)k=e.gaV()
if(h==null)h=d.gbV()<e.gbV()?d.gbV():e.gbV()
if(g==null)g=d.gaV()<e.gaV()?d.gaV():e.gaV()
x=f===B.tl
if(!x&&d.gyl())d=d.b9P(d.gqd())
w=k/g
v=l/h
u=y.q
t=J.kP(g,u)
for(s=0;s<g;++s)t[s]=n+D.e.H(s*w)
r=J.kP(h,u)
for(q=0;q<h;++q)r[q]=m+D.e.H(q*v)
if(x)A.dta(e,d,i,j,h,g,r,t,null,D.Mz)
else A.dsC(e,d,i,j,h,g,r,t,f,!1,null,D.Mz)
return d},
dta(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.gbV(),d=a2.gaV(),a0=A.qp(a1)
if(a0>0&&A.qp(a2)===a0&&a1.gcp()===a2.gcp()&&a1.gyl()===a2.gyl()&&a3>=0&&a4>=0){x=a1.bL()
w=a2.bL()
v=a1.a.gjD()
u=a2.a.gjD()
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
i=f==null?null:f.d0(r,j,i)
if(i==null)i=new C.fo()
a2.Dt(g,h,i)}},
dsC(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.d0(t,s,x)
if(x==null)x=new C.fo()
A.dyJ(e,f+u,v,x,l,!1,n,o)}},
dyJ(a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
if(!a6.bdu(a7,a8))return a6
if(b0===B.tl||a6.gyl())if(a6.bdu(a7,a8)){a6.nr(a7,a8).fl(a9)
return a6}x=a9.ghh()
w=a9.gh3()
v=a9.gh8()
u=a9.gt(a9)<4?1:a9.gej()
if(u===0)return a6
t=a6.nr(a7,a8)
s=t.ghh()
r=t.gh3()
q=t.gh8()
p=t.gej()
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
m=D.e.aD(u,0.01,1)
n=u<0
i=n?0:1
h=D.e.aD(x/m*i,0,0.99)
i=D.e.aD(u,0.01,1)
m=n?0:1
g=D.e.aD(w/i*m,0,0.99)
m=D.e.aD(u,0.01,1)
n=n?0:1
f=D.e.aD(v/m*n,0,0.99)
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
t.shh((x*u+s*p*a3)*a5)
t.sh3((w*u+r*p*a3)*a5)
t.sh8((v*u+q*p*a3)*a5)
t.sej(a4)
return a6},
d1N(d,e,f,g,h,i,j){var x,w=D.e.aD(Math.min(g,h),0,d.gbV()-1),v=D.e.aD(Math.min(i,j),0,d.gaV()-1),u=D.e.aD(Math.max(g,h),0,d.gbV()-1),t=D.e.aD(Math.max(i,j),0,d.gaV()-1),s=d.a.qs(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.l();)x.fl(f)
return d},
cGx(d){var x=new C.ID(C.t(y.N,y.P))
x.bk(d)
return x},
dee(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){A.a1Y(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a1Y(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a1Y(f,d,v)
a1=v[0]
u&2&&C.z(a4)
a4[j]=a1
a4[i]=v[1]
A.a1Y(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.a1Z(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a1Z(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a1Z(f,d,v)
a1=v[0]
u&2&&C.z(a4)
a4[j]=a1
a4[i]=v[1]
A.a1Z(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.a1Y(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.z(a4)
a4[h]=a1}else{A.a1Z(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.z(a4)
a4[h]=a1}u&2&&C.z(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.a1Y(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.z(a4)
a4[i]=n}else{A.a1Z(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.z(a4)
a4[i]=n}u&2&&C.z(a4)
a4[j]=f}}w=x>>>1}},
a1Y(d,e,f){var x,w,v,u,t=$.ol()
t.$flags&2&&C.z(t)
t[0]=d
x=$.pe()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.U(v,1)
f[0]=u
f[1]=u-v},
a1Z(d,e,f){var x=d-D.c.U(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
dz9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=268435456,j=C.cHg()
if(j.le(d))return j
x=A.cUW(l)
if(x.le(d))return x
w=new A.bag(k)
if(w.le(d))return w
v=new A.bKK(k)
if(v.le(d))return v
u=new A.bGo(k)
if(u.b5A(C.d8(d,!1,l,0),!0)!=null)return u
t=new A.bsk(k)
if(t.le(d))return t
if(A.ded(d))return new A.b7q(k)
s=A.dbb(!1,l)
if(s.le(d))return s
r=C.tl(l,y.N)
q=new A.bqO(r,k)
if(q.le(d))return q
p=new A.bGd(k)
o=C.d8(d,!1,l,0)
r=p.a=new A.azL(B.Ce)
r.bk(o)
if(r.bdU())return p
n=new A.bce(k)
if(n.le(d))return n
m=new A.bsO(k)
if(m.le(d))return m
return l},
d1F(d){var x=A.dz9(d)
return x==null?null:x.oQ(d,null)},
alj(d,e){return(d&65535)*e+((d>>>16)*e&65535)*65536>>>0},
doE(d,e,f,g,h,i){A.doB(i,d,e,f,g,h,!0,i)},
doF(d,e,f,g,h,i){A.doC(i,d,e,f,g,h,!0,i)},
doD(d,e,f,g,h,i){A.doA(i,d,e,f,g,h,!0,i)},
VW(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.S(d.a,d.d+x)
v=J.S(e.a,e.d+x)
J.dS(f.a,f.d+x,w+v)}},
doB(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=C.d8(d,!1,v,u),r=C.d8(k,!1,v,u),q=A.di(r,v,0)
if(h===0){r.j(0,0,J.S(s.a,s.d))
A.VW(A.di(s,v,1),q,A.di(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.VW(s,A.di(q,v,x),r,1,!0)
A.VW(A.di(s,v,1),q,A.di(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
doC(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=C.d8(d,!1,x,w),t=C.d8(k,!1,x,w),s=A.di(t,x,0)
if(h===0){t.j(0,0,J.S(u.a,u.d))
A.VW(A.di(u,x,1),s,A.di(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
while(h<v){A.VW(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
doA(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=C.d8(d,!1,s,r),o=C.d8(k,!1,s,r),n=A.di(o,s,0)
if(h===0){o.j(0,0,J.S(p.a,p.d))
A.VW(A.di(p,s,1),n,A.di(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.VW(p,A.di(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.S(n.a,n.d+(w-1))+J.S(n.a,n.d+v)-J.S(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.S(p.a,p.d+w)
J.dS(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
a35(d,e,f,g){var x,w,v,u,t=null,s=d.e
s=s==null?t:C.a1U(s)
x=d.c
x=x==null?t:C.cSb(x)
w=d.w
v=d.r
u=d.f
u=u==null?t:new C.uC(new Uint8Array(C.bm(u.a)))
w=new C.lS(t,x,s,u,v,w,d.y,d.z)
w.bu3(d,e,f,g)
return w},
cSs(d,e,f,g,h){var x=null,w=new C.lS(x,x,x,x,0,D.bK,0,0)
w.bu2(x,d,0,x,D.ah,0,0,D.bK,e,x,0,f,g,x,D.ah,x,x,h,!1)
return w},
qp(d){var x,w,v,u=d.a
if(u==null)return 0
x=u.gr_()
if(x==null)x=0
w=x*u.c
if((w&7)!==0)return 0
v=D.c.U(w,3)
return u.gjD()===d.gbV()*v?v:0},
dCH(d,e,f,g){var x,w,v,u,t,s
for(x=d.$flags|0,w=0;w<g;++w){v=e+w
u=d[v]
t=f+w
s=d[t]
x&2&&C.z(d)
d[v]=s
d[t]=u}},
d33(d,e,f,g){var x,w
for(x=e+(f-1)*g,w=e;w<x;w+=g,x-=g)A.dCH(d,w,x,g)},
cwr(d){var x,w="ifd0"
if(!d.gtT().h(0,w).a.S(274)||d.gtT().h(0,w).ghx()===1)return C.tf(d,!1,!1)
switch(d.gtT().h(0,w).ghx()){case 2:x=A.cyy(C.tf(d,!1,!1))
break
case 3:x=A.dza(C.tf(d,!1,!1),B.atD)
break
case 4:x=A.d1P(C.tf(d,!1,!1))
break
case 5:x=A.cyy(A.cxo(d,90))
break
case 6:x=A.cxo(d,90)
break
case 7:x=A.cyy(A.cxo(d,-90))
break
case 8:x=A.cxo(d,-90)
break
default:x=C.tf(d,!1,!1)
break}x.e=C.a1U(d.gtT())
x.gtT().h(0,w).shx(null)
return x},
d1q(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
a2=D.c.H(D.c.aD(a2,0,d.gbV()-1))
a3=D.c.H(D.c.aD(a3,0,d.gaV()-1))
if(a2+a1>d.gbV())a1=d.gbV()-a2
if(a3+a0>d.gaV())a0=d.gaV()-a3
x=d.ghJ().length
for(w=y.g,v=e,u=0;u<x;++u){t=d.x
s=(t===$?d.x=C.a([],w):t)[u]
r=v==null
q=r?e:v.a1L()
if(q==null)q=A.a35(s,a0,!0,a1)
if(r)v=q
p=A.qp(s)
r=!1
if(p>0)if(A.qp(q)===p){r=q.a
r=r==null?e:r.gcp()
if(r==null)r=D.ah
o=s.a
o=o==null?e:o.gcp()
r=r===(o==null?D.ah:o)}if(r){r=s.a
n=r==null?e:J.dB(r.ga5(r))
if(n==null){r=s.a
r=r==null?e:r.ga5(r)
if(r==null)r=D.n.ga5(new Uint8Array(0))
n=J.dB(r)}r=q.a
m=r==null?e:J.dB(r.ga5(r))
if(m==null){r=q.a
r=r==null?e:r.ga5(r)
if(r==null)r=D.n.ga5(new Uint8Array(0))
m=J.dB(r)}l=s.a.gjD()
k=a1*p
for(r=a2*p,j=0;j<a0;j=i){i=j+1
D.n.bW(m,j*k,i*k,n,(a3+j)*l+r)}}else for(r=q.a,r=r.gO(r);r.l();){h=r.gq()
o=h.glm()
g=h.glQ()
f=s.a
o=f==null?e:f.d0(a2+o,a3+g,e)
h.fl(o==null?new C.fo():o)}}v.toString
return v},
cxo(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=D.c.Z(b0,360)
a9.gyl()
if(D.c.Z(a8,90)===0)switch(D.c.ac(a8,90)){case 1:return A.dvY(a9)
case 2:return A.dvW(a9)
case 3:return A.dvX(a9)
default:return C.tf(a9,!1,!1)}x=a8*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a9.gbV()
t=a9.gbV()
s=a9.gaV()
r=a9.gaV()
q=0.5*a9.gbV()
p=0.5*a9.gaV()
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a9.ghJ().length
for(u=y.g,l=a9.f,k=a7,j=0;j<m;++j){i=a9.x
h=(i===$?a9.x=C.a([],u):i)[j]
t=k==null
g=t?a7:k.a1L()
if(g==null){f=D.e.H(s)
g=A.a35(a9,D.e.H(r),!0,f)}if(t)k=g
e=h.f
if(e==null)e=l
if(e!=null){t=g.a
if(t!=null)t.nP(0,e)}for(t=g.a,t=t.gO(t);t.l();){d=t.gq()
a0=d.glm()
a1=d.glQ()
f=a0-o
a2=a1-n
a3=q+f*w+a2*v
a4=p-f*v+a2*w
f=!1
if(a3>=0)if(a4>=0){a2=h.a
a5=a2==null
a6=a5?a7:a2.a
if(a3<(a6==null?0:a6)){f=a5?a7:a2.b
f=a4<(f==null?0:f)}}if(f)g.Dt(a0,a1,h.aR7(a3,a4,D.qe))}}k.toString
return k},
dvY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(x=d.ghJ(),w=x.length,v=g,u=0;u<x.length;x.length===w||(0,C.r)(x),++u){t=x[u]
s=v==null
r=s?g:v.a1L()
if(r==null){q=t.a
p=q==null
o=p?g:q.b
if(o==null)o=0
q=p?g:q.a
r=A.a35(t,q==null?0:q,!0,o)}if(s)v=r
s=t.a
s=s==null?g:s.b
n=(s==null?0:s)-1
m=A.qp(t)
if(m>0&&A.qp(r)===m){s=t.a
q=s==null
p=q?g:s.a
l=-(p==null?0:p)*m
k=q?g:J.dB(s.ga5(s))
if(k==null){s=t.a
s=s==null?g:s.ga5(s)
if(s==null)s=D.n.ga5(new Uint8Array(0))
k=J.dB(s)}s=r.a
j=s==null?g:J.dB(s.ga5(s))
if(j==null){s=r.a
s=s==null?g:s.ga5(s)
if(s==null)s=D.n.ga5(new Uint8Array(0))
j=J.dB(s)}i=0
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
A.cKv(k,(n*p+i)*m,l,j,i*o*m,s,m);++i}continue}i=0
for(;;){s=r.a
s=s==null?g:s.b
if(!(i<(s==null?0:s)))break
h=0
for(;;){s=r.a
s=s==null?g:s.a
if(!(h<(s==null?0:s)))break
s=t.a
s=s==null?g:s.d0(i,n-h,g)
r.Dt(h,i,s==null?new C.fo():s);++h}++i}}v.toString
return v},
dvW(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null
for(x=d.ghJ(),w=x.length,v=h,u=0;u<x.length;x.length===w||(0,C.r)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?h:s.a
p=(q==null?0:q)-1
s=r?h:s.b
o=(s==null?0:s)-1
s=v==null
n=s?h:v.a1L()
if(n==null)n=C.tf(t,!0,!0)
if(s)v=n
m=A.qp(t)
if(m>0&&A.qp(n)===m){s=t.a
r=s==null
q=r?h:s.a
if(q==null)q=0
l=r?h:s.b
k=q*(l==null?0:l)
s=r?h:J.dB(s.ga5(s))
if(s==null){s=t.a
s=s==null?h:s.ga5(s)
if(s==null)s=D.n.ga5(new Uint8Array(0))
s=J.dB(s)}r=n.a
r=r==null?h:J.dB(r.ga5(r))
if(r==null){r=n.a
r=r==null?h:r.ga5(r)
if(r==null)r=D.n.ga5(new Uint8Array(0))
r=J.dB(r)}A.cKv(s,(k-1)*m,-m,r,0,k,m)
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
r=r==null?h:r.d0(p-i,s,h)
n.Dt(i,j,r==null?new C.fo():r);++i}++j}}v.toString
return v},
dvX(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(x=d.ghJ(),w=x.length,v=g,u=0;u<x.length;x.length===w||(0,C.r)(x),++u){t=x[u]
s=d.a
s=s==null?g:s.a
r=(s==null?0:s)-1
s=v==null
q=s?g:v.a1L()
if(q==null){p=t.a
o=p==null
n=o?g:p.b
if(n==null)n=0
p=o?g:p.a
q=A.a35(t,p==null?0:p,!0,n)}if(s)v=q
m=A.qp(t)
s=!1
if(m>0)if(A.qp(q)===m){s=t.a
s=s==null?g:s.a
if(s==null)s=0
p=d.a
p=p==null?g:p.a
s=s===(p==null?0:p)}if(s){s=t.a
p=s==null
o=p?g:s.a
l=(o==null?0:o)*m
k=p?g:J.dB(s.ga5(s))
if(k==null){s=t.a
s=s==null?g:s.ga5(s)
if(s==null)s=D.n.ga5(new Uint8Array(0))
k=J.dB(s)}s=q.a
j=s==null?g:J.dB(s.ga5(s))
if(j==null){s=q.a
s=s==null?g:s.ga5(s)
if(s==null)s=D.n.ga5(new Uint8Array(0))
j=J.dB(s)}i=0
for(;;){s=q.a
p=s==null
o=p?g:s.b
if(!(i<(o==null?0:o)))break
o=p?g:s.a
if(o==null)o=0
s=p?g:s.a
if(s==null)s=0
A.cKv(k,(r-i)*m,l,j,i*o*m,s,m);++i}continue}i=0
for(;;){s=q.a
s=s==null?g:s.b
if(!(i<(s==null?0:s)))break
s=r-i
h=0
for(;;){p=q.a
p=p==null?g:p.a
if(!(h<(p==null?0:p)))break
p=t.a
p=p==null?g:p.d0(s,h,g)
q.Dt(h,i,p==null?new C.fo():p);++h}++i}}v.toString
return v},
cKv(d,e,f,g,h,i,j){var x,w,v,u,t
for(x=g.$flags|0,w=0;w<i;++w,e+=f)for(v=0;v<j;++v,h=u){u=h+1
t=d[e+v]
x&2&&C.z(g)
g[h]=t}},
cxp(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
d1l(d,e,f,g,h){var x=1-g/255
h[0]=D.e.aq(255*(1-d/255)*x)
h[1]=D.e.aq(255*(1-e/255)*x)
h[2]=D.e.aq(255*(1-f/255)*x)},
di(d,e,f){var x=d.a,w=d.d,v=J.aM(x),u=e==null?d.c:d.d+f+e
return new C.lU(x,d.b,Math.min(v,u),w+f,d.e)}},B
J=c[1]
C=c[0]
D=c[2]
E=c[22]
A=a.updateHolder(c[7],A)
B=c[8]
A.wJ.prototype={
N(){return"ChannelOrder."+this.b}}
A.a0z.prototype={
de(){return new A.a0z(this.a)},
gcp(){return D.ah},
gt(d){return 4},
gdV(){return null},
h(d,e){var x
if(e>=0&&e<4){x=e<<3>>>0
x=D.c.ff((this.a&D.c.c5(255,x))>>>0,x)}else x=0
return x},
j(d,e,f){},
gcS(){return this.h(0,0)},
gaz(){return this.h(0,0)},
gaN(){return this.h(0,1)},
gaL(){return this.h(0,2)},
gaJ(){return this.h(0,3)},
gej(){return this.gaJ()/255},
gim(){return C.jh(this)},
gO(d){return new C.hK(this)},
m(d,e){var x,w,v=this
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gt(e)===v.gt(v)){x=e.gD(e)
w=C.M(v,C.y(v).i("F.E"))
x=x===C.aV(w)}return x},
gD(d){var x=C.M(this,C.y(this).i("F.E"))
return C.aV(x)},
$idC:1}
A.aoo.prototype={
gaJ(){return 255},
gej(){return 1},
gt(d){return 3}}
A.an9.prototype={
N(){return"BlendMode."+this.b}}
A.AD.prototype={
iY(d,e,f){var x,w=this.c+e*f
this.c=w
x=this.a
if(x>0&&w>x)throw C.o(C.bQ("Animation frames exceed the maximum of "+x+" pixels"))}}
A.mv.prototype={
N(){return"BmpCompression."+this.b}}
A.aZU.prototype={}
A.zn.prototype={
aTI(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===B.Dq||x===B.Dr}else x=!0
if(x){x=q.as=d.Y()
w=A.cxp(x)
q.CW=w
v=D.c.dP(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.Y()
u=A.cxp(w)
q.cy=u
t=D.c.dP(w,u)
q.db=x?255/t:0
w=q.ax=d.Y()
u=A.cxp(w)
q.dx=u
s=D.c.dP(w,u)
q.dy=x?255/s:0
if(!o||q.r===B.Dr){o=q.ay=d.Y()
x=A.cxp(o)
q.fr=x
r=D.c.dP(o,x)
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
if(q.f<=8)q.ckm(d)},
gaca(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&C.d()
x=x===0}else x=!1
else x=!0
return x},
gaV(){return Math.abs(this.c)},
ckm(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.c5(1,s.f)
s.ch=new C.xH(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.S(d.a,d.d++)
v=J.S(d.a,d.d++)
u=J.S(d.a,d.d++)
t=J.S(d.a,d.d++)
s.ch.aqh(x,u,v,w,t)}},
c8o(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.b1()
for(v=7;v>=0;--v)e.$4(D.c.lq(w,v)&1,0,0,0)
return}else if(x===2){w=d.b1()
for(v=6;v>=0;v-=2)e.$4(D.c.lq(w,v)&2,0,0,0)}else if(x===4){w=d.b1()
e.$4(D.c.U(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.b1(),0,0,0)
return}}x=o.r
if(x===B.Dq&&o.f===32){u=d.Y()
x=o.as
x===$&&C.d()
t=o.CW
t===$&&C.d()
t=D.c.dP((u&x)>>>0,t)
x=o.cx
x===$&&C.d()
s=D.e.H(t*x)
x=o.at
x===$&&C.d()
t=o.cy
t===$&&C.d()
t=D.c.dP((u&x)>>>0,t)
x=o.db
x===$&&C.d()
r=D.e.H(t*x)
x=o.ax
x===$&&C.d()
t=o.dx
t===$&&C.d()
t=D.c.dP((u&x)>>>0,t)
x=o.dy
x===$&&C.d()
q=D.e.H(t*x)
if(o.gaca())p=255
else{x=o.ay
x===$&&C.d()
t=o.fr
t===$&&C.d()
t=D.c.dP((u&x)>>>0,t)
x=o.fx
x===$&&C.d()
p=D.e.H(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===B.Ly){q=d.b1()
r=d.b1()
s=d.b1()
p=d.b1()
return e.$4(s,r,q,o.gaca()?255:p)}else if(t===24){q=d.b1()
r=d.b1()
return e.$4(d.b1(),r,q,255)}else if(t===16){u=d.a9()
x=o.as
x===$&&C.d()
t=o.CW
t===$&&C.d()
t=D.c.dP((u&x)>>>0,t)
x=o.cx
x===$&&C.d()
s=D.e.H(t*x)
x=o.at
x===$&&C.d()
t=o.cy
t===$&&C.d()
t=D.c.dP((u&x)>>>0,t)
x=o.db
x===$&&C.d()
r=D.e.H(t*x)
x=o.ax
x===$&&C.d()
t=o.dx
t===$&&C.d()
t=D.c.dP((u&x)>>>0,t)
x=o.dy
x===$&&C.d()
q=D.e.H(t*x)
if(o.gaca())p=255
else{x=o.ay
x===$&&C.d()
t=o.fr
t===$&&C.d()
t=D.c.dP((u&x)>>>0,t)
x=o.fx
x===$&&C.d()
p=D.e.H(t*x)}return e.$4(s,r,q,p)}else throw C.o(C.bQ("Unsupported bitsPerPixel ("+t+") or compression ("+x.k(0)+")."))}},
gbV(){return this.b}}
A.anc.prototype={
le(d){var x,w
if(!A.cPu(C.d8(d,!1,null,0))||d.length<18)return!1
x=C.d8(d,!1,null,0)
x.d+=14
w=x.Y()
return w>=12&&w<=124},
jF(d){return C.fT(new A.aZT(this,d))},
bwy(d){var x
if(!this.le(d))return null
x=C.d8(d,!1,null,0)
this.a=x
return this.b=A.dbc(x,null)},
i5(d){return C.fT(new A.aZR(this,d))},
bwx(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new C.lS(f,f,f,f,0,D.bK,0,0)
x=g.a
x===$&&C.d()
w=e.a.b
w===$&&C.d()
x.d=w
w=e.b
A.oh(w,e.gaV(),g.d,!1)
v=e.f
u=D.c.ac(w*v+31,32)*4
x=e.gaV()
t=g.a
if(u*x>t.c-t.d)throw C.o(C.bQ("Truncated BMP data"))
x=g.c
if(x)s=4
else if(v===1||v===4||v===8)s=1
else{t=v===32?4:3
s=t}if(x)r=D.ah
else if(v===1)r=D.fN
else{if(v===2)t=D.hn
else if(v===4)t=D.ho
else t=D.ah
r=t}q=x?f:e.ch
p=C.hA(f,f,r,0,D.bK,e.gaV(),f,0,s,q,D.ah,w,!1)
for(o=p.gaV()-1,x=e.c,w=1/x<0,t=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:t))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.h6(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.d0(0,m,f)
if(h==null)h=new C.fo()
while(n.a<i)e.c8o(k,new A.aZQ(n,g,i,e,h))}return p},
oQ(d,e){return C.fT(new A.aZS(this,d,e))},
bww(d,e){var x=this.jF(d)
if(x==null||x.b<1||x.gaV()<1)return null
return this.i5(0)}}
A.b3W.prototype={}
A.a0Z.prototype={}
A.b6y.prototype={}
A.aqg.prototype={}
A.asu.prototype={
agG(){return this.w},
rX(d,e,f,g,h){throw C.o(C.bQ("B44 compression not yet supported."))},
Tb(d,e,f){return this.rX(d,e,f,null,null)},
k(d){return C.v(this.r)+" "+this.x}}
A.IH.prototype={
N(){return"ExrChannelType."+this.b}}
A.IG.prototype={
N(){return"ExrChannelName."+this.b}}
A.aqh.prototype={
btL(d){var x=this,w=d.akh()
x.a=w
if(w.length===0)return
x.c=B.aE9[d.Y()]
d.b1()
d.d+=3
x.f=d.Y()
x.r=d.Y()
w=x.a
if(w==="R"){x.w=!0
x.b=B.at9}else if(w==="G"){x.w=!0
x.b=B.ata}else if(w==="B"){x.w=!0
x.b=B.atb}else if(w==="A"){x.w=!0
x.b=B.atc}else{x.w=!1
x.b=B.atd}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.uP.prototype={
N(){return"ExrCompressorType."+this.b}}
A.b7p.prototype={
rX(d,e,f,g,h){throw C.o(C.bQ("Unsupported compression type"))},
Tb(d,e,f){return this.rX(d,e,f,null,null)}}
A.beT.prototype={}
A.aqi.prototype={}
A.b7u.prototype={
btM(d,e){var x,w,v,u,t,s=this,r=C.d8(d,!1,null,0)
if(r.Y()!==20000630)throw C.o(C.bQ("File is not an OpenEXR image file."))
x=s.d=r.b1()
if(x!==2)throw C.o(C.bQ("Cannot read version "+x+" image files."))
x=s.e=r.rQ()
if((x&4294967289)>>>0!==0)throw C.o(C.bQ("The file format version number's flag field contains unrecognized flags."))
w=new A.AD(e)
if((x&16)===0){v=s.c
u=A.cSU(v.length,(x&2)!==0,r,e)
if(u.w>0)v.push(u)}else for(x=s.c;;){u=A.cSU(x.length,(s.e&2)!==0,r,e)
v=u.w
if(v<=0)break
w.iY(0,v,u.x)
x.push(u)}x=s.c
v=x.length
if(v===0)throw C.o(C.bQ("Error reading image header"))
for(t=0;t<x.length;x.length===v||(0,C.r)(x),++t)x[t].ckk(r)
s.bU6(r)},
bU6(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,C.r)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bUn(u,d)
else t.bUi(u,d)}},
bUn(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&C.d()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.di(b5,b2,0)
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
if(x)if(u.Y()!==s)throw C.o(C.bQ("Invalid Image Data"))
k=u.Y()
j=u.Y()
u.Y()
u.Y()
i=u.h6(u.Y())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.rX(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new C.lU(h,0,f,0,!1)
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
switch(h.a){case 1:h=e.a9()
a8=$.fx
a9=(a8!=null?a8:C.h4())[h]
break
case 2:a9=e.a9()
break
case 0:a9=e.Y()
break
default:a9=b2}h=a5.d
h===$&&C.d()
a2+=h
h=a5.w
h===$&&C.d()
if(h){h=b3.a
b0=h==null?b2:h.d0(a6,g,b2)
if(b0==null)b0=new C.fo()
h=a5.b
h===$&&C.d()
b0.j(0,h.a,a9)}else{h=a5.a
h===$&&C.d()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.jS(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
bUi(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.d()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.di(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.Y()!==3.141592653589793)throw C.o(C.bQ("Invalid Image Data"))
n=t.Y()
m=$.hf()
m.$flags&2&&C.z(m)
m[0]=n
n=$.kA()
m[0]=t.Y()
l=t.h6(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.Tb(l,0,p)
m=n.length
k=new C.lU(n,0,Math.min(m,m),0,!1)}else k=l
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
switch(n.a){case 1:n=k.a9()
m=$.fx
a1=(m!=null?m:C.h4())[n]
break
case 2:a1=k.a9()
break
case 0:a1=k.Y()
break
default:a1=a4}n=e.d
n===$&&C.d()
g+=n
n=e.w
n===$&&C.d()
if(n){n=a5.a
a2=n==null?a4:n.d0(a0,p,a4)
if(a2==null)a2=new C.fo()
n=e.b
n===$&&C.d()
a2.j(0,n.a,a1)}else{n=e.a
n===$&&C.d()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.jS(a0,p,a1,0,0)}}}++h;++p}}},
gbV(){return this.a},
gaV(){return this.b}}
A.a1X.prototype={
btN(b2,b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=C.t(y.N,y.v)
for(x=a9.e,w=y.t,v=a9.c,u=D.i6;;){t=b4.akh()
if(t.length===0)break
s=b4.akh()
r=b4.Y()
q=b4.h6(r)
b4.d=b4.d+(q.c-q.d)
x.j(0,t,new A.aqg(s,r))
switch(t){case"channels":for(;;){p=new A.aqh()
p.btL(q)
o=p.a
o===$&&C.d()
if(o.length===0)break
n=p.w
n===$&&C.d()
if(n){++a9.d
o=p.c
o===$&&C.d()
if(o===B.OD)u=D.i6
else u=o===B.OE?D.j0:D.jN}else{n=p.c
n===$&&C.d()
b1.j(0,o,n)}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a9.at=o
n=q.Y()
m=$.hf()
m.$flags&2&&C.z(m)
m[0]=n
n=$.Hb()
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
case"compression":a9.ax=B.aGP[J.S(q.a,q.d++)]
break
case"dataWindow":o=q.Y()
n=$.hf()
n.$flags&2&&C.z(n)
n[0]=o
o=$.kA()
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
n=$.hf()
n.$flags&2&&C.z(n)
n[0]=o
$.kA()
n[0]=q.Y()
n[0]=q.Y()
n[0]=q.Y()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.Y()
n=$.hf()
n.$flags&2&&C.z(n)
n[0]=o
$.Hb()
break
case"screenWindowCenter":o=q.Y()
n=$.hf()
n.$flags&2&&C.z(n)
n[0]=o
$.Hb()
n[0]=q.Y()
break
case"screenWindowWidth":o=q.Y()
n=$.hf()
n.$flags&2&&C.z(n)
n[0]=o
$.Hb()
break
case"tiles":a9.dx=q.Y()
a9.dy=q.Y()
j=J.S(q.a,q.d++)
a9.fr=j&15
a9.fx=D.c.U(j,4)&15
break
case"type":i=q.akh()
if(i!=="deepscanline")if(i!=="deeptile")throw C.o(C.bQ("EXR Invalid type: "+i))
break
default:break}}x=a9.w
if(x===0&&a9.x===0)return
A.oh(x,a9.x,b5,!1)
x=a9.w
a9.b=C.hA(b0,b0,u,0,D.bK,a9.x,b0,0,a9.d,b0,D.ah,x,!1)
for(x=new C.b1(b1,b1.$ti.i("b1<1,2>")).gO(0);x.l();){h=x.d
switch(h.b.a){case 1:w=a9.w
o=a9.x
w=new C.Rs(new Uint16Array(w*o),w,o,1)
break
case 2:w=a9.w
o=a9.x
w=new C.Rt(new Float32Array(w*o),w,o,1)
break
case 0:w=a9.w
o=a9.x
w=new C.Rw(new Uint32Array(w*o),w,o,1)
break
default:w=b0}o=a9.b
o.toString
o.bm0(h.a,w)}if(a9.db){g={}
f=a9.dx
if(f==null)f=0
e=a9.dy
if(e==null)e=0
if(f<1||e<1)throw C.o(C.bQ("Invalid EXR tile size"))
A.oh(f,e,b5,!1)
x=a9.r
x===$&&C.d()
a9.id=a9.bxw(x[0],x[2],x[1],x[3])
x=a9.r
a9.k1=a9.bxx(x[0],x[2],x[1],x[3])
if(a9.fr!==2)a9.k1=1
x=a9.id
x.toString
w=a9.r
a9.fy=a9.aVe(x,w[0],w[2],a9.dx,a9.fx)
w=a9.k1
w.toString
x=a9.r
a9.go=a9.aVe(w,x[1],x[3],a9.dy,a9.fx)
x=a9.bxs()
a9.k2=x
w=a9.dx
w.toString
w=x*w
a9.k3=w
a9.CW=A.cRd(a9.ax,a9,w,a9.dy)
x=a9.k1
x.toString
w=a9.id
v=a9.fy
o=a9.go
d=0
a0=0
for(;a0<x;++a0){w.toString
a1=0
for(;a1<w;++a1)d+=v[a1]*o[a0]}if(d*8>b4.c-b4.d)throw C.o(C.bQ("Truncated EXR data"))
g.a=g.b=0
x=a9.id
x.toString
w=a9.k1
w.toString
a9.ay=C.a49(x*w,new A.b7v(g,a9),!0,y.E)}else{x=a9.x
w=a9.ch=new Uint32Array(x+1)
for(o=v.length,n=a9.r,m=a9.w,a2=0;a2<o;++a2){a3=v[a2]
l=a3.d
l===$&&C.d()
k=a3.f
k===$&&C.d()
a4=D.c.dq(l*m,k)
for(l=a3.r,a5=0;a5<x;++a5){n===$&&C.d()
k=n[1]
l===$&&C.d()
if(D.c.Z(a5+k,l)===0)w[a5]=w[a5]+a4}}for(a6=0,a5=0;a5<x;++a5)a6=Math.max(a6,w[a5])
x=A.cRd(a9.ax,a9,a6,b0)
a9.CW=x
x=a9.cx=x.agG()
w=a9.ch
v=w.length
o=new Uint32Array(v)
a9.cy=o
for(--v,a7=0,a8=0;a8<=v;++a8){if(D.c.Z(a8,x)===0)a7=0
o[a8]=a7
a7+=w[a8]}x=D.c.dq(a9.x+x,x)
a9.ay=C.a([new Uint32Array(x-1)],y.w)}},
bxw(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.asb(w):u.arm(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.asb(v):u.arm(v))+1
break
default:throw C.o(C.bQ("Unknown LevelMode format."))}return x},
bxx(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.asb(w):u.arm(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.asb(v):u.arm(v))+1
break
default:throw C.o(C.bQ("Unknown LevelMode format."))}return x},
asb(d){var x
for(x=0;d>1;){++x
d=D.c.U(d,1)}return x},
arm(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.U(d,1)}return x+w},
bxs(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&C.d()
v+=t}return v},
aVe(d,e,f,g,h){var x,w,v,u,t,s,r=J.kP(d,y.q)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.c5(1,v)
t=D.c.dq(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.dq(s+g-1,g)}return r}}
A.asv.prototype={
ckk(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.ms()
v.$flags&2&&C.z(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.ms()
v.$flags&2&&C.z(v)
v[x]=u}}}}
A.beU.prototype={
bu4(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.kP(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aK9()
u.y=s
w=u.w
w.toString
v=D.c.ac(w*u.x,2)
u.z=new Uint16Array(v)},
agG(){return this.x},
rX(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.c.dq(a5,v)
m=D.c.dq(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&C.d()
n=D.c.dq(a6,u)
m=D.c.dq(w,u)
l=n*u<a6?0:1
l=m-n+l
o.d=l
o.e=u
u=p.d
u===$&&C.d()
u=u/2|0
o.f=u
r+=v*l*u}k=a4.a9()
j=a4.a9()
if(j>=8192)throw C.o(C.bQ("Error in header for PIZ-compressed data (invalid bitmap size)."))
i=new Uint8Array(8192)
if(k<=j){h=a4.da(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.S(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bVQ(i,d)
A.deb(a4,a4.Y(),a3.z,r)
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
A.dee(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.bw2(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.a59(!1,v*a3.x+73728)}v.a=0
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
v.ko(u[l])}}v=a3.r
return J.cS(D.n.ga5(v.c),0,v.a)},
Tb(d,e,f){return this.rX(d,e,f,null,null)},
bw2(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&C.z(e)
e[w]=v}},
bVQ(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&C.z(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&C.z(e)
e[u]=0}return w-1}}
A.aK9.prototype={}
A.beV.prototype={
agG(){return this.w},
rX(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.bL(),d=f.r
d.toString
d=f.w*d
x=C.aUO(e,d)
e=f.x;(e==null?f.x=A.a59(!1,d):e).a=0
w=C.a([0,0,0,0],y.t)
v=new Uint32Array(1)
u=J.cS(D.bi.ga5(v),0,null)
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
m=D.c.dq(a1,d)
l=D.c.dq(t,d)
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
return J.cS(D.n.ga5(e.c),0,e.a)},
Tb(d,e,f){return this.rX(d,e,f,null,null)}}
A.beW.prototype={
agG(){return 1},
rX(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.a59(!1,(h-d.d)*2)
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
v=J.S(u,v)
u=$.om()
u.$flags&2&&C.z(u)
u[0]=v
t=$.pf()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b_(J.S(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b_(J.S(d.a,d.d++))}q=J.cS(D.n.ga5(g.c),0,g.a)
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
Tb(d,e,f){return this.rX(d,e,f,null,null)},
k(d){return C.v(this.w)}}
A.asw.prototype={
agG(){return this.x},
rX(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=d.bL(),k=m.w
if(k==null)k=0
x=C.aUO(l,k*m.x)
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
Tb(d,e,f){return this.rX(d,e,f,null,null)},
k(d){return C.v(this.w)}}
A.b7q.prototype={
jF(d){return C.fT(new A.b7t(this,d))},
i5(d){return C.fT(new A.b7r(this,d))},
bDw(d){var x=this.a
if(x==null)return null
return x.c[d].b},
oQ(d,e){return C.fT(new A.b7s(this,d,e))},
bDv(d,e){if(this.jF(d)==null)return null
return this.i5(0)}}
A.a2G.prototype={
cbn(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(g===0&&j.c!=null){x=j.c
x.toString
return x}for(x=j.b,w=j.d,v=-1,u=-1,t=0;t<x;++t){s=w.on(t)
r=w.ol(t)
q=w.oj(t)
p=w.oi(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
aR5(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new C.xH(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.on(u)
s=x.ol(u)
r=x.oj(u)
v.aqh(u,t,s,r,u===q.c?0:255)}return v}}
A.a2H.prototype={
btP(d){var x,w,v,u,t,s,r=this
r.a=d.a9()
r.b=d.a9()
r.c=d.a9()
r.d=d.a9()
x=d.b1()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cRX(D.c.c5(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.S(d.a,d.d++)
t=J.S(d.a,d.d++)
s=J.S(d.a,d.d++)
v.d.qx(w,u,t,s)}}r.y=d.d-d.b}}
A.asx.prototype={}
A.R3.prototype={
gbV(){return this.a},
gaV(){return this.b}}
A.bag.prototype={
le(d){var x,w
this.r=C.d8(d,!1,null,0)
this.a=new A.R3(C.a([],y.b))
try{x=this.aZg()
return x}catch(w){return!1}},
jF(d){return C.fT(new A.baj(this,d))},
bFF(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.r=C.d8(d,!1,null,0)
n.a=new A.R3(C.a([],y.b))
if(!n.aZg())return null
u=n.a
A.oh(u.a,u.b,n.b,!0)
try{while(u=n.r,t=u.d,t<u.c){s=u.a
u.d=t+1
x=J.S(s,t)
switch(x){case 44:w=n.b4y()
if(w==null){u=n.a
return u}u=w
u.r=n.f
u.w=n.d
if(n.c!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a2G(t,s,r,new C.xH(new Uint8Array(C.bm(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.e}n.a.r.push(w)
break
case 33:u=n.r
v=J.S(u.a,u.d++)
if(J.p(v,255)){u=n.r
if(u.iu(J.S(u.a,u.d++))==="NETSCAPE2.0"){q=J.S(u.a,u.d++)
p=J.S(u.a,u.d++)
if(q===3&&p===1)n.w=u.a9()}else n.auA()}else if(J.p(v,249)){u=n.r
u.toString
n.bTY(u)}else n.auA()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bTY(d){var x,w,v,u=this
d.b1()
x=d.b1()
u.f=d.a9()
u.e=d.b1()
d.b1()
u.d=D.c.U(x,2)&7
u.c=x&1
w=d.aqz(1,0)
if(J.S(w.a,w.d)===44){++d.d
v=u.b4y()
if(v==null)return
v.r=u.f
v.w=u.d
w=u.c!==0
v.x=w?u.e:-1
if(w){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.df9(w)}if(w!=null)w.c=u.e}u.a.r.push(v)}},
i5(d){return C.fT(new A.bah(this,d))},
bFE(d){var x,w,v,u=this,t=u.r
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.y
x===$&&C.d()
t.d=x
return u.bAN(v)},
oQ(d,e){return C.fT(new A.bai(this,d,e))},
bFD(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
if(a2.jF(a4)==null)return a3
x=a2.a
w=x.r.length
if(w===1)return a2.i5(0)
new A.AD(a2.b).iY(0,x.a*w,x.b)
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
if(w){u.pK(s)
v=s
continue}l=a5.f
if(!(l!=null)){w=a2.a.e
w.toString
l=w}w=o?a3:p.a
if(w==null)w=0
r=o?a3:p.b
if(r==null)r=0
k=C.hA(a3,a3,D.ah,0,D.bK,r,a3,0,1,l.aR5(),D.ah,w,!1)
w=a5.w
if(w===2){w=k.a
j=w==null?a3:J.dB(w.ga5(w))
if(j==null){w=k.a
w=w==null?a3:w.ga5(w)
if(w==null)w=D.n.ga5(new Uint8Array(0))
j=J.dB(w)}w=a5.x
r=j.length
if(w!==-1)D.n.dg(j,0,r,w)
else{w=a2.a.c.a
D.n.dg(j,0,r,!D.n.gX(w)?w[0]:0)}}else if(w!==3)if(a5.f!=null){w=v.a
i=w==null?a3:w.gdV()
h=C.t(x,x)
for(w=i.a,g=0;g<w;++g)h.j(0,g,l.cbn(i.on(g),i.ol(g),i.oj(g),i.oi(g)))
w=k.a
f=w==null?a3:J.dB(w.ga5(w))
if(f==null){w=k.a
w=w==null?a3:w.ga5(w)
if(w==null)w=D.n.ga5(new Uint8Array(0))
f=J.dB(w)}w=v.a
e=w==null?a3:J.dB(w.ga5(w))
if(e==null){w=v.a
w=w==null?a3:w.ga5(w)
if(w==null)w=D.n.ga5(new Uint8Array(0))
e=J.dB(w)}for(d=f.length,w=f.$flags|0,a0=0;a0<d;++a0){a1=h.h(0,e[a0])
if(a1!=null&&a1!==-1){w&2&&C.z(f)
f[a0]=a1}}}k.y=s.y
w=a5.a
w===$&&C.d()
r=a5.b
r===$&&C.d()
a2.bz7(s,k,w,r)
u.pK(k)
v=k}return u},
b4y(){var x,w=this.r
if(w.d>=w.c)return null
x=new A.asx()
x.btP(w);++this.r.d
this.auA()
return x},
bAN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.x==null){k.x=new Uint8Array(256)
k.y=new Uint8Array(4095)
k.z=new Uint8Array(4096)
k.Q=new Uint32Array(4096)}x=k.as=k.r.b1()
w=D.c.bX(1,x)
k.fr=w;++w
k.dy=w
k.dx=w+1;++x
k.db=x
k.cy=D.c.bX(1,x)
k.ch=0
k.cx=4098
k.ax=k.ay=0
x=k.x
x.toString
x.$flags&2&&C.z(x)
x[0]=0
x=k.Q
x.toString
D.bi.dg(x,0,4096,4098)
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
s=C.hA(j,j,D.ah,0,D.bK,w,j,0,1,t.aR5(),D.ah,x,!1)
r=new Uint8Array(x)
v=d.e
v===$&&C.d()
if(v){v=d.b
v===$&&C.d()
for(w=v+w,q=0,p=0;q<4;++q)for(o=v+B.ayK[q];o<w;o+=B.aCo[q],++p){if(!k.aYM(r))return s
u=s.a
n=u==null
m=n?j:u.a
l=o*(m==null?0:m)
u=n?j:J.dB(u.ga5(u))
if(u==null){u=s.a
u=u==null?j:u.ga5(u)
if(u==null)u=D.n.ga5(new Uint8Array(0))
u=J.dB(u)}D.n.dd(u,l,l+x,r)}}else for(o=0;o<w;++o){if(!k.aYM(r))return s
v=s.a
u=v==null
n=u?j:v.a
l=o*(n==null?0:n)
v=u?j:J.dB(v.ga5(v))
if(v==null){v=s.a
v=v==null?j:v.ga5(v)
if(v==null)v=D.n.ga5(new Uint8Array(0))
v=J.dB(v)}D.n.dd(v,l,l+x,r)}return s},
bz7(d,e,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a,h=i==null?null:i.gdV(),g=h.a,f=J.hB(g,y.cB)
for(x=0;x<g;++x)f[x]=h.oi(x)!==0
w=d.bL()
v=e.bL()
u=d.gbV()
t=e.gbV()
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
aZg(){var x,w,v,u,t,s=this,r=s.r.iu(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.r.a9()
x=s.a
x.toString
x.b=s.r.a9()
w=s.r.b1()
x=s.a
x.toString
x.c=new C.uC(new Uint8Array(C.bm(C.a([s.r.b1()],y.t))));++s.r.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cRX(D.c.c5(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.r
u=J.S(x.a,x.d++)
x=s.r
t=J.S(x.a,x.d++)
x=s.r
w=J.S(x.a,x.d++)
s.a.e.d.qx(v,u,t,w)}}s.a.toString
return!0},
aYM(d){var x=this,w=x.at
w.toString
x.at=w-d.length
if(!x.bB8(d))return!1
if(x.at===0)x.auA()
return!0},
auA(){var x,w,v,u=this.r
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
x=J.S(v,w)}return!0},
bB8(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ch
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
w=u}}for(k=d.$flags|0;w<x;){s=l.CW=l.bB7()
if(s==null)return!1
v=l.dy
if(s===v)return!1
t=l.fr
if(s===t){for(t=l.Q,r=0;r<=4095;++r){t.toString
t.$flags&2&&C.z(t)
t[r]=4098}l.dx=v+1
v=l.as+1
l.db=v
l.cy=D.c.bX(1,v)
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
t=l.aFM(v,s,t)
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
v=l.aFM(t,v,n)
o.$flags&2&&C.z(o)
o[q]=v}else{o===$&&C.d()
p.toString
v=l.aFM(t,p,n)
o.$flags&2&&C.z(o)
o[q]=v}}v=l.CW
v.toString
l.cx=v}}return!0},
bB7(){var x,w,v,u,t=this
if(t.db>12)return null
while(x=t.ay,w=t.db,x<w){x=t.bwL()
x.toString
w=t.ax
v=t.ay
t.ax=(w|D.c.bX(x,v))>>>0
t.ay=v+8}v=t.ax
u=B.aCX[w]
t.ax=D.c.dP(v,w)
t.ay=x-w
x=t.dx
if(x<4097){++x
t.dx=x
x=x>t.cy&&w<12}else x=!1
if(x){t.cy=t.cy<<1>>>0
t.db=w+1}return v&u},
aFM(d,e,f){var x,w,v=0
for(;;){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
bwL(){var x,w,v=this,u=v.x,t=u[0],s=u.$flags|0
if(t===0){t=v.r.b1()
s&2&&C.z(u)
u[0]=t
u=v.x
t=u[0]
if(t===0)return null
D.n.dd(u,1,1+t,v.r.da(t).bL())
u=v.x
x=u[1]
u.$flags&2&&C.z(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&C.z(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.Rj.prototype={
N(){return"IcoType."+this.b}}
A.bci.prototype={
gbV(){return 0},
gaV(){return 0}}
A.as_.prototype={}
A.bcd.prototype={
gaV(){return D.c.ac(A.zn.prototype.gaV.call(this),2)},
gaca(){return!(this.d===40&&this.f===32)&&A.zn.prototype.gaca.call(this)}}
A.bce.prototype={
le(d){var x,w=this,v=C.d8(d,!1,null,0)
w.a=v
try{w.b=A.cSc(v)}catch(x){w.b=null}return w.b!=null},
jF(d){return C.fT(new A.bch(this,d))},
oQ(d,e){return C.fT(new A.bcg(this,d,e))},
bLl(d,e){var x,w,v,u,t,s,r=this,q=null
if(r.jF(d)==null)return q
x=r.b.e.length
if(x===1)return r.i5(0)
w=new A.AD(r.c)
for(v=q,u=0;u<r.b.e.length;++u){e=r.i5(u)
if(e==null)continue
x=e.a
t=x==null
s=t?q:x.a
if(s==null)s=0
x=t?q:x.b
w.iY(0,s,x==null?0:x)
if(v==null){e.w=D.bK
v=e}else v.pK(e)}return v},
i5(d){return C.fT(new A.bcf(this,d))},
bLm(b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9!=null){x=a7.b
x=x==null||b0>=x.d}else x=!0
if(x)return a8
w=a7.b.e[b0]
x=a9.a
a9=a9.b+w.e
v=w.d
u=J.Hl(x,a9,a9+v)
a9=a7.c
t=A.cUW(a9)
y.p.a(u)
if(t.le(u))return t.oQ(u,0)
s=A.a59(!1,14)
s.ko(19778)
s.kp(v)
s.kp(0)
s.kp(0)
x=C.d8(u,!1,a8,0)
v=A.cPt(C.d8(J.cS(D.n.ga5(s.c),0,s.a),!1,a8,0))
r=x.d
q=x.Y()
p=x.Y()
o=$.hf()
o.$flags&2&&C.z(o)
o[0]=p
p=$.kA()
n=p[0]
o[0]=x.Y()
p=p[0]
m=x.a9()
l=x.a9()
k=x.Y()
if(k>=14)C.X(C.bQ("Unsupported BMP compression type: "+k))
k=B.Ys[k]
x.Y()
o[0]=x.Y()
o[0]=x.Y()
o=x.Y()
x.Y()
j=new A.bcd(v,n,p,q,m,l,k,o,r)
j.aTI(x,v)
if(q!==40&&m!==1)return a8
i=o===0&&l<=8?40+4*D.c.c5(1,l):40+4*o
v.b=i
s.a-=4
s.kp(i)
h=C.d8(u,!1,a8,0)
g=new A.b3W(!0,a9)
g.a=h
g.b=j
f=g.i5(0)
if(l>=32)return f
e=32-D.c.Z(n,32)
d=D.c.ac(e===32?n:n+e,8)
for(a9=p<0,x=p===0,p=1/p<0,a0=0;a0<D.c.ac(A.zn.prototype.gaV.call(j),2);++a0){if(!(x?p:a9))a1=a0
else{v=f.a
v=v==null?a8:v.b
a1=(v==null?0:v)-1-a0}a2=h.h6(d)
h.d=h.d+(a2.c-a2.d)
v=f.a
a3=v==null?a8:v.d0(0,a1,a8)
if(a3==null)a3=new C.fo()
for(a4=0;a4<n;){a5=J.S(a2.a,a2.d++)
a6=7
for(;;){if(!(a6>-1&&a4<n))break
if((a5&D.c.bX(1,a6))>>>0!==0)a3.saJ(0)
a3.l();++a4;--a6}}}return f}}
A.bfj.prototype={
N(){return"JpegChroma."+this.b}}
A.bfo.prototype={
bmp(d){d=D.c.H(D.c.aD(d,1,100))
if(this.Q===d)return
this.bLW(d<50?D.e.dF(5000/d):D.c.dF(200-d*2))
this.Q=d},
bbg(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
if(b4.gbV()<1||b4.gaV()<1||b4.a==null)C.X(C.bQ("Cannot encode an empty image"))
x=A.a59(!0,8192)
b3.xw(x,216)
b3.xw(x,224)
x.ko(16)
x.b_(74)
x.b_(70)
x.b_(73)
x.b_(70)
x.b_(0)
x.b_(1)
x.b_(1)
x.b_(0)
x.ko(1)
x.ko(1)
x.b_(0)
x.b_(0)
b3.c21(x,b4.gtT())
w=b4.c
if(w!=null){b3.xw(x,226)
v=w.c8u()
u=C.a([73,67,67,95,80,82,79,70,73,76,69,0],y.t)
x.ko(14+v.length)
x.hT(u)
x.hT(v)}b3.c20(x)
w=b4.gbV()
t=b4.gaV()
b3.xw(x,192)
x.ko(17)
x.b_(8)
x.ko(t)
x.ko(w)
x.b_(3)
x.b_(1)
w=b5===B.Gb
x.b_(w?17:34)
x.b_(0)
x.b_(2)
x.b_(17)
x.b_(1)
x.b_(3)
x.b_(17)
x.b_(1)
b3.c2_(x)
b3.xw(x,218)
x.ko(12)
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
s=b4.gbV()
r=b4.gaV()
q=b4.f
if(q==null)q=B.apj
if(w){p=new Float32Array(64)
o=new Float32Array(64)
n=new Float32Array(64)
for(w=b3.c,t=b3.d,m=0,l=0,k=0,j=0;j<r;j+=8)for(i=0;i<s;i+=8){b3.X_(b4,i,j,s,r,p,o,n,q)
h=b3.e
h===$&&C.d()
g=b3.r
g===$&&C.d()
m=b3.xe(x,p,w,m,h,g)
g=b3.f
g===$&&C.d()
h=b3.w
h===$&&C.d()
l=b3.xe(x,o,t,l,g,h)
k=b3.xe(x,n,t,k,b3.f,b3.w)}}else{w=y.z
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
b3.X_(b4,i,j,s,r,g,a0,a1,q)
a2=i+8
a3=p[1]
a4=o[1]
a5=n[1]
b3.X_(b4,a2,j,s,r,a3,a4,a5,q)
a6=p[2]
a7=o[2]
a8=n[2]
b3.X_(b4,i,h,s,r,a6,a7,a8,q)
a9=p[3]
b0=o[3]
b1=n[3]
b3.X_(b4,a2,h,s,r,a9,b0,b1,q)
b3.aXs(e,a0,a4,a7,b0)
b3.aXs(d,a1,a5,a8,b1)
b1=b3.e
b1===$&&C.d()
a8=b3.r
a8===$&&C.d()
m=b3.xe(x,a9,w,b3.xe(x,a6,w,b3.xe(x,a3,w,b3.xe(x,g,w,m,b1,a8),b3.e,b3.r),b3.e,b3.r),b3.e,b3.r)
a8=b3.f
a8===$&&C.d()
b1=b3.w
b1===$&&C.d()
l=b3.xe(x,e,t,l,a8,b1)
k=b3.xe(x,d,t,k,b3.f,b3.w)}}b2=8-b3.at
b3.xv(x,D.c.bX(1,b2)-1,b2)
b3.xw(x,217)
return J.cS(D.n.ga5(x.c),0,x.a)},
X_(d,e,f,g,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(d.gcp()===D.ah&&!d.gyl()&&d.gqd()>=3){x=d.a
this.bxz(J.dB(x.ga5(x)),d.a.gjD(),d.gqd(),e,f,g,a0,a1,a2,a3,a4)
return}for(x=this.z,w=a1.$flags|0,v=a2.$flags|0,u=a3.$flags|0,t=f+1,s=null,r=0;r<64;++r){q=r>>>3
p=f+q
o=e+(r&7)
if(p>=a0)p-=t+q-a0
if(o>=g)o-=o-g+1
n=d.a
s=n==null?null:n.d0(o,p,s)
if(s==null)s=new C.fo()
m=s.gcp()!==D.ah?s.pT(D.ah):s
l=D.e.H(m.gaz())
k=D.e.H(m.gaN())
j=D.e.H(m.gaL())
if(m.gt(m)>3){i=m.gej()
h=1-i
l=D.c.aD(D.e.aq(l*i+a4.gaz()*h),0,255)
k=D.c.aD(D.e.aq(k*i+a4.gaN()*h),0,255)
j=D.c.aD(D.e.aq(j*i+a4.gaL()*h),0,255)}n=D.c.U(x[l]+x[k+256]+x[j+512],16)
w&2&&C.z(a1)
a1[r]=n-128
n=D.c.U(x[l+768]+x[k+1024]+x[j+1280],16)
v&2&&C.z(a2)
a2[r]=n-128
n=D.c.U(x[l+1280]+x[k+1536]+x[j+1792],16)
u&2&&C.z(a3)
a3[r]=n-128}},
bxz(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.z,d=b2.gaz(),a0=b2.gaN(),a1=b2.gaL()
for(x=a9.$flags|0,w=b0.$flags|0,v=b1.$flags|0,u=a4>3,t=a7-1,s=a8-1,r=0,q=0;r<8;++r){p=a6+r
o=(p<a8?p:s)*a3
for(n=0;n<8;++n,++q){m=a5+n
l=o+(m<a7?m:t)*a4
k=a2[l]
j=a2[l+1]
i=a2[l+2]
if(u){h=a2[l+3]/255
g=1-h
k=D.c.aD(D.e.aq(k*h+d*g),0,255)
j=D.c.aD(D.e.aq(j*h+a0*g),0,255)
i=D.c.aD(D.e.aq(i*h+a1*g),0,255)}f=D.c.U(e[k]+e[j+256]+e[i+512],16)
x&2&&C.z(a9)
a9[q]=f-128
f=D.c.U(e[k+768]+e[j+1024]+e[i+1280],16)
w&2&&C.z(b0)
b0[q]=f-128
f=D.c.U(e[k+1280]+e[j+1536]+e[i+1792],16)
v&2&&C.z(b1)
b1[q]=f-128}}},
aXs(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.Z(w,8)<4?e:f
else v=D.c.Z(w,8)<4?g:h
u=(D.c.ac(D.c.Z(w,32),8)<<4>>>0)+(D.c.Z(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&C.z(d)
d[w]=(t+s+r+q)/4}},
xw(d,e){d.b_(255)
d.b_(e&255)},
bLW(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.e.dF((B.aIK[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=B.wH[v]
w&2&&C.z(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.e.dF((B.aBX[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=B.wH[s]
t&2&&C.z(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=B.wH[n]
j=x[k]
i=B.Sp[m]
h=B.Sp[l]
q&2&&C.z(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&C.z(p)
p[n]=1/(k*i*h*8);++n}},
arA(d,e){var x,w,v,u,t,s=new Int32Array(256),r=new Uint8Array(256)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
s[t]=x
r[t]=v;++w;++x}x*=2}return new A.c2D(s,r)},
bLX(){var x,w,v
for(x=this.z,w=x.$flags|0,v=0;v<256;++v){w&2&&C.z(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
bDA(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
t=d3>0?D.e.H(d3+0.5):D.e.H(d3-0.5)
x.$flags&2&&C.z(x)
x[v]=t}return x},
c21(d,e){var x,w
if(e.gX(0))return
x=A.a59(!1,8192)
e.bZ(x)
w=J.cS(D.n.ga5(x.c),0,x.a)
this.xw(d,225)
d.ko(w.length+8)
d.kp(1165519206)
d.ko(0)
d.hT(w)},
c20(d){var x,w,v
this.xw(d,219)
d.ko(132)
d.b_(0)
for(x=this.a,w=0;w<64;++w)d.b_(x[w])
d.b_(1)
for(x=this.b,v=0;v<64;++v)d.b_(x[v])},
c2_(d){var x,w,v,u,t,s,r,q
this.xw(d,196)
d.ko(418)
d.b_(0)
for(x=0;x<16;){++x
d.b_(B.a_b[x])}for(w=0;w<=11;++w)d.b_(B.w8[w])
d.b_(16)
for(v=0;v<16;){++v
d.b_(B.Rf[v])}for(u=0;u<=161;++u)d.b_(B.SM[u])
d.b_(1)
for(t=0;t<16;){++t
d.b_(B.Ul[t])}for(s=0;s<=11;++s)d.b_(B.w8[s])
d.b_(17)
for(r=0;r<16;){++r
d.b_(B.Tf[r])}for(q=0;q<=161;++q)d.b_(B.W8[q])},
xe(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.bDA(e,f),h=j.y
for(x=h.$flags|0,w=0;w<64;++w){v=B.wH[w]
u=i[w]
x&2&&C.z(h)
h[v]=u}x=h[0]
t=x-g
if(t===0)j.xv(d,a0.a[0],a0.b[0])
else{s=D.c.gtC(t<0?-t:t)
j.xv(d,a0.a[s],a0.b[s])
j.xv(d,A.dgl(t,s),s)}r=63
for(;;){if(!(r>0&&h[r]===0))break;--r}if(r===0){j.xv(d,a1.a[0],a1.b[0])
return x}for(v=a1.a,u=a1.b,q=1;q<=r;){p=q
for(;;){if(!(h[p]===0&&p<=r))break;++p}o=p-q
if(o>=16){n=D.c.U(o,4)
for(m=1;m<=n;++m)j.xv(d,v[240],u[240])
o&=15}l=h[p]
s=D.c.gtC(l<0?-l:l)
k=(o<<4>>>0)+s
j.xv(d,v[k],u[k])
j.xv(d,l>0?l:l+D.c.bX(1,s)-1,s)
q=p+1}if(r!==63)j.xv(d,v[0],u[0])
return x},
xv(d,e,f){var x,w,v=this
v.as=(D.c.bX(v.as,f)|e)>>>0
v.at+=f
while(x=v.at,x>=8){x-=8
v.at=x
w=D.c.dP(v.as,x)&255
d.b_(w)
if(w===255)d.b_(0)}v.as=(v.as&D.c.bX(1,x)-1)>>>0}}
A.c2D.prototype={
gt(d){return this.b}}
A.T4.prototype={
N(){return"PngDisposeMode."+this.b}}
A.a5z.prototype={
N(){return"PngBlendMode."+this.b}}
A.a5A.prototype={}
A.asy.prototype={}
A.EN.prototype={
N(){return"PngFilterType."+this.b}}
A.bqN.prototype={
gbV(){return this.a},
gaV(){return this.b}}
A.beX.prototype={}
A.bqI.prototype={
le(d){var x
if(d.length<8)return!1
for(x=0;x<8;++x)if(d[x]!==B.YF[x])return!1
return!0},
jF(d){return C.fT(new A.bqL(this,d))},
bSG(b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=C.d8(b6,!0,b4,0)
b3.e=b5
x=b5.da(8)
for(w=0;w<8;++w)if(J.S(x.a,x.d+w)!==B.YF[w])return b4
for(b5=b3.a,v=b5.cy,u=y.t,t=b5.db,s=y.H,r=b3.b,q=b5.ax;;){p=b3.e
o=p.d-p.b
n=p.Y()
m=b3.e.iu(4)
switch(m){case"tEXt":p=b3.e
l=p.h6(n)
p.d=p.d+(l.c-l.d)
k=l.bL()
j=k.length
for(w=0;w<j;++w)if(k[w]===0){p=w+1
q.j(0,D.eF.cw(new Uint8Array(k.subarray(0,C.oe(0,w,j)))),D.eF.cw(new Uint8Array(k.subarray(p,C.oe(p,b4,j)))))
break}b3.e.d+=4
break
case"pHYs":p=b3.e
l=p.h6(n)
p.d=p.d+(l.c-l.d)
i=A.di(l,b4,0)
i.Y()
i.Y()
J.S(i.a,i.d++)
b3.e.d+=4
break
case"IHDR":p=b3.e
l=p.h6(n)
p.d=p.d+(l.c-l.d)
h=A.di(l,b4,0)
g=h.bL()
b5.a=h.Y()
p=h.Y()
b5.b=p
A.oh(b5.a,p,r,!1)
b5.c=J.S(h.a,h.d++)
b5.d=J.S(h.a,h.d++)
J.S(h.a,h.d++)
b5.f=J.S(h.a,h.d++)
b5.r=J.S(h.a,h.d++)
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
break}if(b3.e.Y()!==C.oi(g,C.oi(new C.eZ(m),0)))throw C.o(C.bQ("Invalid "+m+" checksum"))
break
case"PLTE":p=b3.e
l=p.h6(n)
p.d=p.d+(l.c-l.d)
b5.w=l.bL()
if(b3.e.Y()!==C.oi(s.a(b5.w),C.oi(new C.eZ(m),0)))throw C.o(C.bQ("Invalid "+m+" checksum"))
break
case"tRNS":p=b3.e
l=p.h6(n)
p.d=p.d+(l.c-l.d)
b5.x=l.bL()
f=b3.e.Y()
p=b5.x
p.toString
if(f!==C.oi(p,C.oi(new C.eZ(m),0)))throw C.o(C.bQ("Invalid "+m+" checksum"))
break
case"IEND":b3.e.d+=4
break
case"gAMA":if(n!==4)throw C.o(C.bQ("Invalid gAMA chunk"))
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
a2=b3.e.a9()
a3=b3.e.a9()
p=b3.e
a4=J.S(p.a,p.d++)
p=b3.e
a5=J.S(p.a,p.d++)
p=B.azw[a4]
a6=B.aFT[a5]
v.push(new A.asy(C.a([],u),e,d,a0,a1,a2,a3,p,a6))
b3.e.d+=4
break
case"fdAT":b3.e.Y()
D.b.ga7(v).y.push(o)
p=b3.e
p.d=(p.d+=n-4)+4
break
case"bKGD":p=b5.d
if(p===3){p=b3.e
a7=J.S(p.a,p.d++);--n
a8=a7*3
p=b5.w
a9=p[a8]
b0=p[a8+1]
b1=p[a8+2]
p=b5.x
if(p!=null){p=D.n.n(p,a7)?0:255
a6=new Uint8Array(4)
a6[0]=a9
a6[1]=b0
a6[2]=b1
a6[3]=p
b5.z=new C.I1(a6)}else{p=new Uint8Array(3)
p[0]=a9
p[1]=b0
p[2]=b1
b5.z=new C.ao9(p)}}else if(p===0||p===4){b3.e.a9()
n-=2}else if(p===2||p===6){p=b3.e
p.a9()
p.a9()
p.a9()
n-=24}if(n>0)b3.e.d+=n
b3.e.d+=4
break
case"iCCP":b5.Q=b3.e.akh()
p=b3.e
J.S(p.a,p.d++)
p=b5.Q
a6=b3.e
l=a6.h6(n-(p.length+2))
a6.d=a6.d+(l.c-l.d)
b5.at=l.bL()
b3.e.d+=4
break
case"cICP":p=b3.e
a6=p.d
if(n===4){b2=p.a
p.d=a6+1
J.S(b2,a6)
a6=b3.e
J.S(a6.a,a6.d++)
a6=b3.e
J.S(a6.a,a6.d++)
a6=b3.e
J.S(a6.a,a6.d++)}else p.d=a6+n
b3.e.d+=4
break
default:p=b3.e
p.d=(p.d+=n)+4
break}if(m==="IEND")break
p=b3.e
if(p.d>=p.c)return b4}return b5},
i5(d){return C.fT(new A.bqJ(this,d))},
bSE(b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=b1.a,b4=b3.a,b5=b3.b,b6=b3.cy,b7=b6.length
if(b7===0||b8===0){r=C.a([],y.a)
b6=b3.db
q=b6.length
for(p=0,o=0;o<q;++o){b7=b1.e
b7===$&&C.d()
b7.d=b6[o]
n=b7.Y()
m=b1.e.iu(4)
b7=b1.e
l=b7.h6(n)
b7.d=b7.d+(l.c-l.d)
k=l.bL()
p+=k.length
r.push(k)
if(b1.e.Y()!==C.oi(k,C.oi(new C.eZ(m),0)))throw C.o(C.bQ("Invalid "+m+" checksum"))}j=new Uint8Array(p)
for(b6=r.length,i=0,h=0;h<r.length;r.length===b6||(0,C.r)(r),++h){k=r[h]
D.n.hC(j,i,k)
i+=k.length}}else{if(b8>=b7)throw C.o(C.bQ("Invalid Frame Number: "+b8))
g=b6[b8]
b4=g.b
b5=g.c
A.oh(b4,b5,b1.b,!1)
r=C.a([],y.a)
for(b6=g.y,p=0,o=0;o<b6.length;++o){b7=b1.e
b7===$&&C.d()
b7.d=b6[o]
n=b7.Y()
b7=b1.e
b7.iu(4)
b7.d+=4
b7=b1.e
l=b7.h6(n-4)
b7.d=b7.d+(l.c-l.d)
k=l.bL()
p+=k.length
r.push(k)}j=new Uint8Array(p)
for(b6=r.length,i=0,h=0;h<r.length;r.length===b6||(0,C.r)(r),++h){k=r[h]
D.n.hC(j,i,k)
i+=k.length}}b6=b3.d
f=1
if(!(b6===3))if(!(b6===0)){if(b6===4)b6=2
else b6=b6===6?4:3
f=b6}b6=C.kO(j,D.ay,b2,b2)
x=C.cSP(new C.aso(b6,D.nx,!1,D.KS))
b1.d=b1.c=0
e=b2
if(b3.d===3){b6=b3.w
if(b6!=null){d=b6.length/3|0
a0=b3.x
b7=a0!=null
a1=b7?a0.length:0
a2=b7?4:3
e=new C.xH(new Uint8Array(d*a2),d,a2)
for(b7=a2===4,o=0,a3=0;o<d;++o,a3+=3){a4=b7&&o<a1?a0[o]:255
e.aqh(o,b6[a3],b6[a3+1],b6[a3+2],a4)}}}if(b3.d===0&&b3.x!=null&&e==null&&b3.c<=8){a0=b3.x
a5=a0.length
b6=b3.c
d=D.c.bX(1,b6)
b7=new Uint8Array(d*4)
e=new C.xH(b7,d,4)
if(b6===1)a6=255
else if(b6===2)a6=85
else{b6=b6===4?17:1
a6=b6}for(o=0;o<d;++o){a7=o*a6
e.aqh(o,a7,a7,a7,255)}for(o=0;o<a5;o+=2){a8=(a0[o]&255)<<8|a0[o+1]&255
if(a8<d)b7[a8*4+3]=0}}b6=b3.c
if(b6===1)a9=D.fN
else if(b6===2)a9=D.hn
else{if(b6===4)b7=D.ho
else b7=b6===16?D.dl:D.ah
a9=b7}b7=b3.d
if(b7===0&&b3.x!=null&&b6>8)f=4
w=C.hA(b2,b2,a9,0,D.bK,b5,b2,0,b7===2&&b3.x!=null?4:f,e,D.ah,b4,!1)
v=b3.a
u=b3.b
b3.a=b4
b3.b=b5
t=b4
s=b5
b1.f=0
try{if(b3.r!==0){b1.EH(x,w,0,0,8,8,D.e.U(t+7,3),D.e.U(s+7,3))
b1.EH(x,w,4,0,8,8,D.e.U(t+3,3),D.e.U(s+7,3))
b1.EH(x,w,0,4,4,8,D.e.U(t+3,2),D.e.U(s+3,3))
b1.EH(x,w,2,0,4,4,D.e.U(t+1,2),D.e.U(s+3,2))
b1.EH(x,w,0,2,2,4,D.e.U(t+1,1),D.e.U(s+1,2))
b1.EH(x,w,1,0,2,2,D.e.U(t,1),D.e.U(s+1,1))
b1.EH(x,w,0,1,1,2,t,D.e.U(s,1))}else b1.bSF(x,w)}catch(b0){b6=C.a0(b0)
if(b6 instanceof C.us)return b2
else if(y.Y.b(b6))return b2
else if(b6 instanceof A.aj6)return b2
else throw b0}finally{x.Fz()
b3.a=v
b3.b=u}b6=b3.at
if(b6!=null)w.c=new C.A2(b3.Q,B.aus,b6)
b3=b3.ax
if(b3.a!==0)w.c3d(b3)
return w},
oQ(d,e){return C.fT(new A.bqK(this,d,e))},
bSD(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.jF(d)==null)return e
x=f.a
w=x.cy
v=w.length
if(v===0||a0!=null)return f.i5(a0==null?0:a0)
u=Math.min(x.CW,v)
new A.AD(f.b).iY(0,x.a*u,x.b)
for(v=y.g,t=e,s=t,r=0;r<u;++r){a0=w[r]
q=f.i5(r)
if(q==null)continue
if(s==null||t==null){s=q.b9P(q.gqd())
p=a0.f
s.y=D.e.H((p===0||a0.r===0?0:p/a0.r)*1000)
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
n=n===(m==null?0:m)&&a0.d===0&&a0.e===0&&a0.x===B.a9P}else n=!1
if(n){p=a0.f
q.y=D.e.H((p===0||a0.r===0?0:p/a0.r)*1000)
s.pK(q)
t=q
continue}h=s.x
t=C.tf((h===$?s.x=C.a([],v):h)[p],!1,!1)
g=o.w
if(g===B.a9R){p=o.d
n=o.e
m=x.z
if(m==null){m=new Uint8Array(4)
l=new C.I1(m)
m[0]=0
m[1]=0
m[2]=0
m[3]=0
m=l}A.d1N(t,!1,m,p,p+o.b-1,n,n+o.c-1)}else if(g===B.a9S&&r>1){h=s.x
if(h===$)h=s.x=C.a([],v)
p=o.d
n=o.e
m=o.b
l=o.c
t=A.cLf(t,h[r-2],B.Dp,l,m,p,n,l,m,p,n)}p=a0.f
t.y=D.e.H((p===0||a0.r===0?0:p/a0.r)*1000)
p=a0.x===B.a9Q?B.Dp:B.tl
t=A.cLf(t,q,p,e,e,a0.d,a0.e,e,e,e,e)
s.pK(t)}return s},
gaHz(){var x=this.a.d
if(x===4)x=2
else if(x===2)x=3
else x=x===6?4:1
return x},
EH(d,e,f,g,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
if(a2===0||a3===0)return
x=h.gaHz()
w=h.a.c
v=x*w
u=D.c.U(v+7,3)
t=D.c.ac(v*a2+7,8)
s=w===8||w===16
r=C.a([0,0,0,0],y.t)
for(q=g,p=null,o=null,n=0;n<a3;++n,q+=a1,++h.f,o=l){m=B.XR[d.b1()]
l=d.da(t).bL()
x=l.length
if(x!==t)throw C.o(B.Mq)
h.b61(m,u,l,o)
if(s){h.b7B(l,e,q,f,a0,a2)
continue}h.d=h.c=0
k=new C.lU(l,0,Math.min(x,x),0,!0)
for(j=f,i=0;i<a2;++i,j+=a0){h.b2q(k,r)
x=e.a
p=x==null?null:x.d0(j,q,p)
if(p==null)p=new C.fo()
h.b4d(p,r)}}},
bSF(d,e){var x,w,v,u,t,s,r,q=this,p=q.gaHz(),o=q.a,n=o.c,m=p*n,l=o.a,k=o.b,j=D.c.ac(l*m+7,8),i=D.c.U(m+7,3),h=n===8||n===16,g=C.a([0,0,0,0],y.t)
p=e.a
x=p.gO(p)
x.l()
for(w=null,v=0;v<k;++v,w=t){u=B.XR[d.b1()]
t=d.da(j).bL()
p=t.length
if(p!==j)throw C.o(B.Mq)
q.b61(u,i,t,w)
if(h){q.b7B(t,e,v,0,1,l)
continue}q.d=q.c=0
s=new C.lU(t,0,Math.min(p,p),0,!0)
for(r=0;r<l;++r){q.b2q(s,g)
q.b4d(x.gq(),g)
x.l()}}},
b7B(d,e,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.gaHz(),i=e.a,h=i.c,g=this.a,f=g.x
if(g.c===8){x=J.dB(i.ga5(i))
w=a0*e.a.gjD()+a1*h
v=a2*h
if(h===j){if(a2===1){D.n.dd(x,w,w+a3*j,d)
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
w=(a0*e.gbV()+a1)*h
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
b61(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=f.length,l=e<m?e:m
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
tp(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.b1()
if(e===16)return d.a9()
for(x=d.c;w=s.d,w<e;){w=d.d
if(w>=x)throw C.o(C.bQ("Invalid PNG data."))
v=d.a
d.d=w+1
u=J.S(v,w)
w=s.d
s.c=D.c.bX(u,w)
s.d=w+8}if(e===1)t=1
else if(e===2)t=3
else{if(e===4)x=15
else x=0
t=x}x=w-e
w=D.c.dP(s.c,x)
s.d=x
return w&t},
b2q(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.tp(d,w.c)
return
case 2:e[0]=x.tp(d,w.c)
e[1]=x.tp(d,w.c)
e[2]=x.tp(d,w.c)
return
case 3:e[0]=x.tp(d,w.c)
return
case 4:e[0]=x.tp(d,w.c)
e[1]=x.tp(d,w.c)
return
case 6:e[0]=x.tp(d,w.c)
e[1]=x.tp(d,w.c)
e[2]=x.tp(d,w.c)
e[3]=x.tp(d,w.c)
return}throw C.o(C.bQ("Invalid color type: "+v+"."))},
b4d(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.d
switch(p){case 0:p=q.x
if(p!=null&&q.c>8){q=p[0]
p=p[1]
x=e[0]
d.ig(x,x,x,x!==((q&255)<<8|p&255)?d.gbK():0)
return}d.jT(e[0],0,0)
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
if(w!==((p&255)<<8|u&255)||x!==((t&255)<<8|s&255)||v!==((r&255)<<8|q&255)){d.ig(w,x,v,d.gbK())
return}}d.jT(w,x,v)
return
case 3:d.scS(e[0])
return
case 4:d.ig(e[0],0,0,e[1])
return
case 6:d.ig(e[0],e[1],e[2],e[3])
return}throw C.o(C.bQ("Invalid color type: "+p+"."))}}
A.aj6.prototype={$iaS:1}
A.EO.prototype={
N(){return"PnmFormat."+this.b}}
A.KF.prototype={
gbV(){return this.a},
gaV(){return this.b}}
A.bqO.prototype={
le(d){var x
this.b=C.d8(d,!1,null,0)
x=this.asr()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
oQ(d,e){return C.fT(new A.bqR(this,d,e))},
bSH(d,e){if(this.jF(d)==null)return null
return this.i5(0)},
jF(d){return C.fT(new A.bqS(this,d))},
bSJ(d){var x,w,v,u=this
u.b=C.d8(d,!1,null,0)
x=u.asr()
if(x==="P1"){w=u.a=new A.KF(B.r0)
w.e=B.a9T}else if(x==="P2"){w=u.a=new A.KF(B.r0)
w.e=B.a9U}else if(x==="P5"){w=u.a=new A.KF(B.r0)
w.e=B.I_}else if(x==="P3"){w=u.a=new A.KF(B.r0)
w.e=B.a9V}else if(x==="P6"){w=u.a=new A.KF(B.r0)
w.e=B.I0}else return u.b=null
w.a=u.YI()
w=u.a
w.toString
w.b=u.YI()
w=u.a
v=w.a
if(v<1||w.b<1)return u.a=u.b=null
A.oh(v,w.b,u.d,!1)
return u.a},
i5(d){return C.fT(new A.bqQ(this,d))},
bSI(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
q=q.e
if(q===B.a9T){s.aE4(1)
q=s.a
x=q.a
w=C.hA(r,r,D.fN,0,D.bK,q.b,r,0,1,r,D.ah,x,!1)
for(q=w.a,q=q.gO(q);q.l();){v=q.gq()
if(s.asr()==="1")v.jT(1,1,1)
else v.jT(0,0,0)}return w}else if(q===B.a9U||q===B.I_){u=s.YI()
if(u===0)return r
s.aE4(1)
q=s.a
x=q.a
q=q.b
w=C.hA(r,r,s.bc9(u),0,D.bK,q,r,0,1,r,D.ah,x,!1)
for(q=w.a,q=q.gO(q);q.l();){v=q.gq()
t=s.au_(s.a.e,u)
v.jT(t,t,t)}return w}else if(q===B.a9V||q===B.I0){u=s.YI()
if(u===0)return r
s.aE4(3)
q=s.a
x=q.a
q=q.b
w=C.hA(r,r,s.bc9(u),0,D.bK,q,r,0,3,r,D.ah,x,!1)
for(q=w.a,q=q.gO(q);q.l();)q.gq().jT(s.au_(s.a.e,u),s.au_(s.a.e,u),s.au_(s.a.e,u))
return w}return r},
aE4(d){var x,w=this.a,v=w.a
w=w.b
x=this.b
if(x.c-x.d+this.c.gt(0)<v*w*d)throw C.o(C.bQ("Truncated PNM data"))},
bc9(d){if(d>255)return D.dl
if(d>15)return D.ah
if(d>3)return D.ho
if(d>1)return D.hn
return D.fN},
au_(d,e){if(d===B.I_||d===B.I0)return this.b.b1()
return this.YI()},
YI(){var x,w,v=this.asr()
if(J.aM(v)===0)return 0
try{x=C.c1(v,null,null)
return x}catch(w){return 0}},
asr(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(!x.gX(0))return x.wn()
w=D.d.a1(t.cko())
if(w.length===0)return""
while(D.d.aK(w,"#"))w=D.d.a1(this.b.bg8(70))
t=y.U
v=C.M(new C.ax(C.a(w.split(" "),y.s),new A.bqP(),t),t.i("F.E"))
for(t=v.length,u=0;u<t;++u)if(D.d.aK(v[u],"#")){D.b.st(v,u)
break}x.C(0,v)
if(x.b===x.c)return""
return x.wn()}}
A.avo.prototype={}
A.avp.prototype={}
A.xN.prototype={}
A.avr.prototype={}
A.avs.prototype={}
A.avv.prototype={}
A.avw.prototype={}
A.a5V.prototype={}
A.avu.prototype={}
A.bsj.prototype={
buj(d){var x,w,v,u,t=this
d.a9()
d.a9()
d.a9()
d.a9()
x=D.c.ac(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.a9()
v.$flags&2&&C.z(v)
v[w]=u
u=t.f
v=d.a9()
u.$flags&2&&C.z(u)
u[w]=v
v=t.r
u=d.a9()
v.$flags&2&&C.z(v)
v[w]=u
u=t.w
v=d.a9()
u.$flags&2&&C.z(u)
u[w]=v}}}}
A.Tl.prototype={
bg4(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.a9()
switch(h){case 0:g.toString
this.bUf(d,e,f,g)
break
case 1:if(i==null)i=this.bU9(d,f)
g.toString
this.bUe(d,e,f,g,i,j)
break
default:throw C.o(C.bQ("Unsupported compression: "+h))}},
ckn(d,e,f,g){return this.bg4(d,e,f,g,null,null,0)},
bU9(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.a9()
return w},
bUf(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.n.dg(x,0,w,255)
return}this.c=d.da(w).bL()},
bUe(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.n.dg(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.h6(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.bAV(s,x,v)
v+=e}},
bAV(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.S(t,u)
t=$.om()
t.$flags&2&&C.z(t)
t[0]=u
s=$.pf()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.S(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&C.z(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.S(d.a,d.d++)
w&2&&C.z(e)
e[f]=u}}}},
gaB(){return this.a}}
A.vp.prototype={
N(){return"PsdColorMode."+this.b}}
A.bso.prototype={
gc54(){var x=this.e
x===$&&C.d()
return x},
buk(d,e){var x,w,v=this
v.as=C.d8(d,!0,null,0)
v.bTh()
if(v.c!==943870035)return
x=v.as.Y()
v.as.da(x)
x=v.as.Y()
v.ax=v.as.da(x)
x=v.as.Y()
v.ay=v.as.da(x)
w=v.as
v.ch=w.da(w.c-w.d)},
nS(){var x,w=this
if(w.c===943870035){x=w.as
x===$&&C.d()
x=x==null}else x=!0
if(x)return!1
A.oh(w.a,w.b,w.CW,!1)
x=w.e
x===$&&C.d()
if(x<1||x>56)throw C.o(C.bQ("Invalid number of PSD channels: "+w.gc54()))
w.bU7()
w.bU8()
w.bUb()
w.ch=w.ay=w.ax=w.as=null
return!0},
c8l(){if(!this.nS())return null
return this.cld()},
cld(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.y
if(a0!=null)return a0
a0=e.a
a0=C.hA(d,d,D.ah,0,D.bK,e.b,d,0,4,d,D.ah,a0,!1)
e.y=a0
a0.a6(0)
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
l=m==null?d:m.d0(n,q,d)
if(l==null)l=new C.fo()
k=D.e.H(l.gaz())
j=D.e.H(l.gaN())
i=D.e.H(l.gaL())
h=D.e.H(l.gaJ())
o.toString
if(o>=0&&o<e.a&&v&&r<e.b){m=w.b
m.toString
g=e.y.a
f=g==null?d:g.d0(m+n,p,d)
if(f==null)f=new C.fo()
e.bwt(D.e.H(f.gaz()),D.e.H(f.gaN()),D.e.H(f.gaL()),D.e.H(f.gaJ()),k,j,i,h,t,u,f)}++n;++o}++q;++r}}a0=e.y
a0.toString
return a0},
bwt(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1768188278:u=A.bsp(d,h)
v=A.bsp(e,i)
w=A.bsp(f,j)
x=k
break
case 1818391150:u=A.bsr(d,h)
v=A.bsr(e,i)
w=A.bsr(f,j)
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
case 1935897198:u=A.cI8(d,h)
v=A.cI8(e,i)
w=A.cI8(f,j)
x=k
break
case 1684633120:u=A.bsq(d,h)
v=A.bsq(e,i)
w=A.bsq(f,j)
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
case 1870030194:u=A.cI6(d,h,g,k)
v=A.cI6(e,i,g,k)
w=A.cI6(f,j,g,k)
x=k
break
case 1934387572:u=A.cI9(d,h)
v=A.cI9(e,i)
w=A.cI9(f,j)
x=k
break
case 1749838196:u=A.cI4(d,h)
v=A.cI4(e,i)
w=A.cI4(f,j)
x=k
break
case 1984719220:u=A.cIa(d,h)
v=A.cIa(e,i)
w=A.cIa(f,j)
x=k
break
case 1816947060:u=A.cI5(d,h)
v=A.cI5(e,i)
w=A.cI5(f,j)
x=k
break
case 1884055924:u=A.cI7(d,h)
v=A.cI7(e,i)
w=A.cI7(f,j)
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
case 1936553316:u=A.cI3(d,h)
v=A.cI3(e,i)
w=A.cI3(f,j)
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
n.saz(D.e.H(d*t+u*s))
n.saN(D.e.H(e*t+v*s))
n.saL(D.e.H(f*t+w*s))
n.saJ(D.e.H(g*t+x*s))},
bTh(){var x,w,v=this,u=v.as
u===$&&C.d()
v.c=u.Y()
u=v.as.a9()
v.d=u
if(u!==1){v.c=0
return}x=v.as.da(6)
for(w=0;w<6;++w)if(J.S(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.a9()
v.b=v.as.Y()
v.a=v.as.Y()
v.f=v.as.a9()
v.r=B.aXT[v.as.a9()]},
bU7(){var x,w,v,u,t,s=this,r=s.ax
r.d=r.b
for(r=s.z;x=s.ax,x.d<x.c;){w=x.Y()
v=s.ax.a9()
x=s.ax
u=J.S(x.a,x.d++)
s.ax.iu(u)
if((u&1)===0)++s.ax.d
u=s.ax.Y()
x=s.ax
t=x.h6(u)
x.d=x.d+(t.c-t.d)
if((u&1)===1)++s.ax.d
if(w===943868237)r.j(0,v,new A.avq(v))}},
bU8(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ay
h.d=h.b
x=h.Y()
if((x&1)!==0)++x
w=i.ay.da(x)
h=i.w
D.b.a6(h)
if(x>0){v=w.a9()
u=$.ol()
u.$flags&2&&C.z(u)
u[0]=v
t=$.pe()[0]
if(t<0)t=-t
for(v=y.N,u=y.c,s=y.l,r=y.x,q=0;q<t;++q){p=new A.avt(C.t(v,u),C.a([],s),C.a([],r))
p.bul(w)
h.push(p)}}v=i.CW
o=new A.AD(v)
n=i.f===16?2:1
u=i.a
s=i.b
r=i.e
r===$&&C.d()
m=u*s*r*n
for(u=h.length,l=0;l<h.length;h.length===u||(0,C.r)(h),++l){p=h[l]
s=p.e
s===$&&C.d()
r=p.f
r===$&&C.d()
A.oh(s,r,v,!0)
o.iY(0,p.e,p.f)
r=p.e
s=p.f
k=p.as
k===$&&C.d()
m+=r*s*k.length*n}if(m>Math.max(128*i.at,16777216))throw C.o(C.bQ("PSD data is too small for its size"))
for(q=0;q<h.length;++q)h[q].ckf(w,i)
x=i.ay.Y()
j=i.ay.da(x)
if(x>0){j.a9()
j.a9()
j.a9()
j.a9()
j.a9()
j.a9()
j.b1()}},
bUb(){var x,w,v,u,t,s,r=this,q=r.ch
q.d=q.b
x=q.a9()
if(x===1){q=r.b
w=r.e
w===$&&C.d()
v=q*w
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=r.ch.a9()}else u=null
r.x=C.a([],y.X)
t=0
for(;;){q=r.e
q===$&&C.d()
if(!(t<q))break
q=r.x
w=r.ch
w.toString
s=t===3?-1:t
s=new A.Tl(s)
s.bg4(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cVc(r.r,r.f,r.a,r.b,r.x)},
gbV(){return this.a},
gaV(){return this.b}}
A.avq.prototype={
gaB(){return this.a}}
A.avt.prototype={
bul(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.Y(),a0=$.hf()
a0.$flags&2&&C.z(a0)
a0[0]=d
d=$.kA()
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
x=a1.a9()
for(w=0;w<x;++w){d=a1.a9()
a0=$.ol()
a0.$flags&2&&C.z(a0)
a0[0]=d
v=$.pe()[0]
a1.Y()
e.as.push(new A.Tl(v))}u=a1.Y()
if(u!==943868237)throw C.o(C.bQ("Invalid PSD layer signature: "+D.c.hz(u,16)))
e.r=a1.Y()
e.w=a1.b1()
a1.b1()
e.y=a1.b1()
if(a1.b1()!==0)throw C.o(C.bQ("Invalid PSD layer data"))
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
if(t>0)new A.bsj().buj(s.da(t))
t=s.b1()
s.iu(t)
q=4-D.c.Z(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.C;s.d<d;){u=s.Y()
if(u!==943868237)throw C.o(C.bQ("PSD invalid signature for layer additional data: "+D.c.hz(u,16)))
n=s.iu(4)
t=s.Y()
m=s.h6(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.j(0,n,A.dj4(n,m))
if(n==="lrFX"){k=A.di(o.a(a0.h(0,"lrFX")).b,null,0)
k.a9()
j=k.a9()
for(i=0;i<j;++i){k.iu(4)
h=k.iu(4)
g=k.Y()
if(h==="dsdw"){f=new A.avp()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.Y()
k.Y()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.iu(8)
f.b=J.S(k.a,k.d++)!==0
J.S(k.a,k.d++)
J.S(k.a,k.d++)
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()}else if(h==="isdw"){f=new A.avs()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.Y()
k.Y()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.iu(8)
f.b=J.S(k.a,k.d++)!==0
J.S(k.a,k.d++)
J.S(k.a,k.d++)
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()}else if(h==="oglw"){f=new A.avv()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.iu(8)
f.b=J.S(k.a,k.d++)!==0
J.S(k.a,k.d++)
if(f.a===2){k.a9()
k.a9()
k.a9()
k.a9()
k.a9()}}else if(h==="iglw"){f=new A.avr()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.iu(8)
f.b=J.S(k.a,k.d++)!==0
J.S(k.a,k.d++)
if(f.a===2){J.S(k.a,k.d++)
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()}}else if(h==="bevl"){f=new A.avo()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.Y()
k.iu(8)
k.iu(8)
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
J.S(k.a,k.d++)
J.S(k.a,k.d++)
J.S(k.a,k.d++)
f.b=J.S(k.a,k.d++)!==0
J.S(k.a,k.d++)
J.S(k.a,k.d++)
if(f.a===2){k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()}}else if(h==="sofi"){f=new A.avw()
p.push(f)
f.a=k.Y()
k.iu(4)
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
J.S(k.a,k.d++)
f.b=J.S(k.a,k.d++)!==0
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()}else k.d+=g}}}}},
ckf(d,e){var x,w,v,u,t,s=this,r=0
for(;;){x=s.as
x===$&&C.d()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&C.d()
v=s.f
v===$&&C.d()
x.ckn(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&C.d()
t=s.f
t===$&&C.d()
s.cx=A.cVc(w,v,u,t,x)}}
A.Tm.prototype={}
A.bsk.prototype={
le(d){var x,w
try{x=A.cVb(d,null).c
return x===943870035}catch(w){return!1}},
oQ(d,e){return C.fT(new A.bsm(this,d,e))},
bTg(d,e){var x,w,v,u=this
if(u.jF(d)==null)return null
x=u.a==null?null:1
if(x==null)x=0
if(x===1)return u.i5(0)
for(w=null,v=0;v<x;++v){e=u.i5(v)
if(e==null)continue
if(w==null){e.w=B.Pb
w=e}else w.pK(e)}return w},
jF(d){return C.fT(new A.bsn(this,d))},
i5(d){return C.fT(new A.bsl(this,d))}}
A.avz.prototype={}
A.AQ.prototype={
aO(d,e){return new A.AQ(this.a*e,this.b*e,this.c*e)},
ag(d,e){return new A.AQ(this.a+e.a,this.b+e.b,this.c+e.c)},
aC(d,e){return new A.AQ(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.mW.prototype={
aO(d,e){var x=this
return new A.mW(x.a*e,x.b*e,x.c*e,x.d*e)},
ag(d,e){var x=this
return new A.mW(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
aC(d,e){var x=this
return new A.mW(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a5X.prototype={
gbV(){return this.a},
gaV(){return this.b}}
A.To.prototype={
gaV(){return this.f},
gbV(){return this.r}}
A.avy.prototype={
gbV(){return this.a},
gaV(){return this.b}}
A.tB.prototype={
sa5h(d){var x=this.a,w=this.b
x.$flags&2&&C.z(x)
x[w+1]=d},
apz(){var x=this.e,w=this.d
if(x)return new A.AQ(B.iq[w>>>9],B.iq[w>>>4&31],B.fX[w&15])
else return new A.AQ(B.fX[w>>>7&15],B.fX[w>>>3&15],B.Az[w&7])},
apB(){var x=this.e,w=this.d
if(x)return new A.mW(B.iq[w>>>9],B.iq[w>>>4&31],B.fX[w&15],255)
else return new A.mW(B.fX[w>>>7&15],B.fX[w>>>3&15],B.Az[w&7],B.Az[w>>>11&7])},
apA(){var x=this.r,w=this.f
if(x)return new A.AQ(B.iq[w>>>10],B.iq[w>>>5&31],B.iq[w&31])
else return new A.AQ(B.fX[w>>>8&15],B.fX[w>>>4&15],B.fX[w&15])},
apC(){var x=this.r,w=this.f
if(x)return new A.mW(B.iq[w>>>10],B.iq[w>>>5&31],B.iq[w&31],255)
else return new A.mW(B.fX[w>>>8&15],B.fX[w>>>4&15],B.fX[w&15],B.Az[w>>>12&7])},
XK(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
v_(){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sa5h(x.XK())
x.d=w>>>1&16383
x.sa5h(x.XK())
x.e=(w>>>15&1)===1
x.sa5h(x.XK())
x.f=w>>>16&32767
x.sa5h(x.XK())
x.r=(w>>>31&1)===1
x.sa5h(x.XK())}}
A.bsO.prototype={
le(d){var x,w
try{x=this.jF(d)
return x!=null}catch(w){return!1}},
jF(d){return C.fT(new A.bsR(this,d))},
bZ5(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.bAw(d)
if(x!=null){w.a=d
return w.b=x}}x=w.bAU(d)
if(x!=null){w.a=d
return w.b=x}x=w.bAS(d)
if(x!=null){w.a=d
return w.b=x}return null},
bAU(d){var x,w,v=C.d8(d,!1,null,0)
if(v.c-v.d<52)return null
if(v.Y()!==55727696)return null
x=C.a([0,0,0,0],y.t)
w=new A.To(x)
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
bAS(d){var x,w,v=C.d8(d,!1,null,0)
if(v.Y()!==52)return null
x=new A.a5X()
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
bAw(d){var x,w,v,u,t,s,r=null,q=d.length,p=C.d8(d,!1,r,0)
if(p.Y()!==0)return r
x=new A.avy()
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
if((D.c.c5(64,s)&q)>>>0!==0){u=D.c.c5(16,t)
v=1
break}if((D.c.c5(128,s)&q)>>>0!==0){u=D.c.c5(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
i5(d){return C.fT(new A.bsP(this,d))},
bAK(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
A.oh(u.gbV(),v.b.gaV(),v.c,!1)
u=v.b
if(u instanceof A.avy){u=u.a
x=v.b.gaV()
w=v.a
w.toString
return v.aEE(u,x,w)}else if(u instanceof A.a5X){u=v.a
u.toString
return v.bAR(u)}else if(u instanceof A.To){u=v.a
u.toString
return v.bAT(u)}return null},
oQ(d,e){return C.fT(new A.bsQ(this,d,e))},
bTr(d,e){if(this.jF(d)==null)return null
return this.i5(0)},
bAR(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.T.a(x)
w=C.d8(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=C.hA(k,k,D.ah,0,D.bK,t,k,0,4,k,D.ah,u,!1)
for(x=s.a,x=x.gO(x);x.l();){r=x.gq()
q=J.S(w.a,w.d++)
p=J.S(w.a,w.d++)
r.saz(p&240)
r.saN((p&15)<<4)
r.saL(q&240)
r.saJ((q&15)<<4)}return s
case 17:s=C.hA(k,k,D.ah,0,D.bK,t,k,0,4,k,D.ah,u,!1)
for(x=s.a,x=x.gO(x);x.l();){r=x.gq()
o=w.a9()
n=(o&1)!==0?255:0
r.saz(o>>>8&248)
r.saN(o>>>3&248)
r.saL((o&62)<<2)
r.saJ(n)}return s
case 18:s=C.hA(k,k,D.ah,0,D.bK,t,k,0,4,k,D.ah,u,!1)
for(x=s.a,x=x.gO(x);x.l();){r=x.gq()
r.saz(J.S(w.a,w.d++))
r.saN(J.S(w.a,w.d++))
r.saL(J.S(w.a,w.d++))
r.saJ(J.S(w.a,w.d++))}return s
case 19:s=C.hA(k,k,D.ah,0,D.bK,t,k,0,3,k,D.ah,u,!1)
for(x=s.a,x=x.gO(x);x.l();){r=x.gq()
o=w.a9()
r.saz(o>>>8&248)
r.saN(o>>>3&252)
r.saL((o&31)<<3)}return s
case 20:s=C.hA(k,k,D.ah,0,D.bK,t,k,0,3,k,D.ah,u,!1)
for(x=s.a,x=x.gO(x);x.l();){r=x.gq()
o=w.a9()
r.saz((o&31)<<3)
r.saN(o>>>2&248)
r.saL(o>>>7&248)}return s
case 21:s=C.hA(k,k,D.ah,0,D.bK,t,k,0,3,k,D.ah,u,!1)
for(x=s.a,x=x.gO(x);x.l();){r=x.gq()
r.saz(J.S(w.a,w.d++))
r.saN(J.S(w.a,w.d++))
r.saL(J.S(w.a,w.d++))}return s
case 22:s=C.hA(k,k,D.ah,0,D.bK,t,k,0,1,k,D.ah,u,!1)
for(x=s.a,x=x.gO(x);x.l();)x.gq().saz(J.S(w.a,w.d++))
return s
case 23:s=C.hA(k,k,D.ah,0,D.bK,t,k,0,4,k,D.ah,u,!1)
for(x=s.a,x=x.gO(x);x.l();){r=x.gq()
n=J.S(w.a,w.d++)
m=J.S(w.a,w.d++)
r.saz(m)
r.saN(m)
r.saL(m)
r.saJ(n)}return s
case 24:return k
case 25:return x.y===0?l.aWS(u,t,w.bL()):l.aEE(u,t,w.bL())}return k},
bAT(d){var x,w,v,u=this
if(!(u.b instanceof A.To))return null
x=C.d8(d,!1,null,0)
w=x.d+=52
v=y.k.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.aWS(v.r,v.f,x.bL())
case 3:return u.aEE(v.r,v.f,x.bL())}return null},
aWS(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.hA(b5,b5,D.ah,0,D.bK,c6,b5,0,3,b5,D.ah,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.ms(D.n.ga5(c7),0,null),c0=new A.tB(b9),c1=new A.tB(J.ms(D.n.ga5(c7),0,null)),c2=new A.tB(J.ms(D.n.ga5(c7),0,null)),c3=new A.tB(J.ms(D.n.ga5(c7),0,null)),c4=new A.tB(J.ms(D.n.ga5(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.AR(v,x)<<1>>>0
c0.v_()
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.AR(l,p)<<1>>>0
c1.v_()
c2.b=A.AR(k,p)<<1>>>0
c2.v_()
c3.b=A.AR(l,o)<<1>>>0
c3.v_()
c4.b=A.AR(k,o)<<1>>>0
c4.v_()
j=c1.apz()
i=B.eo[r][0]
h=c2.apz()
g=B.eo[r][1]
f=c3.apz()
e=B.eo[r][2]
d=c4.apz()
a0=B.eo[r][3]
a1=c1.apA()
a2=B.eo[r][0]
a3=c2.apA()
a4=B.eo[r][1]
a5=c3.apA()
a6=B.eo[r][2]
a7=c4.apA()
a8=B.eo[r][3]
a9=B.Wr[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.U((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.U((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.U((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.jS(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
aEE(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=C.hA(a4,a4,D.ah,0,D.bK,b5,a4,0,4,a4,D.ah,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.ms(D.n.ga5(b6),0,null),a9=new A.tB(a8),b0=new A.tB(J.ms(D.n.ga5(b6),0,null)),b1=new A.tB(J.ms(D.n.ga5(b6),0,null)),b2=new A.tB(J.ms(D.n.ga5(b6),0,null)),b3=new A.tB(J.ms(D.n.ga5(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.AR(v,x)<<1>>>0
a9.v_()
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.AR(l,p)<<1>>>0
b0.v_()
b1.b=A.AR(k,p)<<1>>>0
b1.v_()
b2.b=A.AR(l,o)<<1>>>0
b2.v_()
b3.b=A.AR(k,o)<<1>>>0
b3.v_()
j=b0.apB()
i=B.eo[r][0]
h=b1.apB()
g=B.eo[r][1]
g=new A.mW(j.a*i,j.b*i,j.c*i,j.d*i).ag(0,new A.mW(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.apB()
i=B.eo[r][2]
i=g.ag(0,new A.mW(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.apB()
g=B.eo[r][3]
f=i.ag(0,new A.mW(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.apC()
h=B.eo[r][0]
i=b1.apC()
j=B.eo[r][1]
j=new A.mW(g.a*h,g.b*h,g.c*h,g.d*h).ag(0,new A.mW(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.apC()
h=B.eo[r][2]
h=j.ag(0,new A.mW(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.apC()
j=B.eo[r][3]
e=h.ag(0,new A.mW(i.a*j,i.b*j,i.c*j,i.d*j))
d=B.Wr[s+t&3]
j=d[0]
i=d[1]
a0=D.c.U(f.a*j+e.a*i,7)
a1=D.c.U(f.b*j+e.b*i,7)
a2=D.c.U(f.c*j+e.c*i,7)
a3=D.c.U(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.iQ(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.azL.prototype={
bk(d){var x,w=this
if(d.c-d.d<18)return
w.a=d.b1()
w.b=d.b1()
x=d.b1()
w.c=x<12?B.aHc[x]:B.Ce
d.a9()
w.e=d.a9()
w.f=d.b1()
d.a9()
d.a9()
w.x=d.a9()
w.y=d.a9()
w.z=d.b1()
w.Q=d.b1()},
bdU(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===B.kL||w===B.kM){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0},
gbV(){return this.x},
gaV(){return this.y}}
A.oS.prototype={
N(){return"TgaImageType."+this.b}}
A.bGd.prototype={
oQ(d,e){return C.fT(new A.bGf(this,d,e))},
c_a(d,e){if(this.jF(d)==null)return null
return this.i5(0)},
jF(d){return C.fT(new A.bGg(this,d))},
c_c(d){var x,w,v,u,t=this
t.a=new A.azL(B.Ce)
x=C.d8(d,!1,null,0)
t.b=x
w=x.da(18)
t.a.bk(w)
x=t.a
if(!x.bdU()||x.x<1||x.y<1)return null
v=t.b
v.d+=x.a
u=x.c
if(u===B.kL||u===B.kM)x.as=v.da(x.e*D.c.U(x.f,3)).bL()
x=t.a
x.ax=t.b.d
return x},
i5(d){return C.fT(new A.bGe(this,d))},
c_b(d){var x=this,w=x.a
if(w==null)return null
A.oh(w.x,w.y,x.c,!1)
w=x.a.c
if(w===B.adg)return x.aWR()
else if(w===B.adf||w===B.kM)return x.bAX()
else if(w===B.kL)return x.aWR()
return null},
aWH(d,e){var x,w,v,u,t,s,r,q=this,p=C.d8(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&C.d()
x=o.a9()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.ux(s,w)
e.uw(s,v)
e.uv(s,u)
e.uu(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.S(p.a,p.d++)
v=J.S(p.a,p.d++)
w=J.S(p.a,p.d++)
t=r?J.S(p.a,p.d++):255
e.ux(s,w)
e.uw(s,v)
e.uv(s,u)
e.uu(s,t)}}},
bAX(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=C.hA(i,i,D.ah,0,D.bK,a0,i,0,a1,i,D.ah,d,h===B.kL||h===B.kM)
h=x.a
if((h==null?i:h.gdV())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gdV()
d.toString
j.aWH(h,d)}w=x.gbV()
v=x.gaV()-1
h=g===8
u=0
for(;;){d=j.b
d===$&&C.d()
a0=d.d
if(!(a0<d.c&&v>=0))break
a1=d.a
d.d=a0+1
t=J.S(a1,a0)
s=(t&127)+1
r=0
if((t&128)!==0)if(h){d=j.b
q=J.S(d.a,d.d++)
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.lU(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{d=j.b
if(f){n=d.a9()
q=n>>>7&248
m=n>>>2&248
l=(n&31)<<3
k=(n&32768)!==0?0:255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.iQ(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}else{l=J.S(d.a,d.d++)
d=j.b
m=J.S(d.a,d.d++)
d=j.b
q=J.S(d.a,d.d++)
if(e){d=j.b
k=J.S(d.a,d.d++)}else k=255
for(p=0;p<s;++p){o=u+1
d=x.a
if(d!=null)d.iQ(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.S(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.lU(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.a9()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.iQ(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
d=j.b
if(d.d>=d.c){u=o
break}if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else for(p=0;p<s;++p){d=j.b
l=J.S(d.a,d.d++)
d=j.b
m=J.S(d.a,d.d++)
d=j.b
q=J.S(d.a,d.d++)
if(e){d=j.b
k=J.S(d.a,d.d++)}else k=255
o=u+1
d=x.a
if(d!=null)d.iQ(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
aWR(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
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
r=C.hA(h,h,D.ah,0,D.bK,t,h,0,s,h,D.ah,u,x===B.kL||x===B.kM)
x=i.a
u=x.c
if(u===B.kL||u===B.kM){x=x.as
x.toString
u=r.a
u=u==null?h:u.gdV()
u.toString
i.aWH(x,u)}if(w===8)for(q=r.gaV()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.S(g.a,g.d++)
g=r.a
if(g!=null)g.lU(p,q,o);++p}}else if(g)for(q=r.gaV()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.a9()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.iQ(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gaV()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
l=J.S(g.a,g.d++)
g=i.b
k=J.S(g.a,g.d++)
g=i.b
j=J.S(g.a,g.d++)
if(v){g=i.b
m=J.S(g.a,g.d++)}else m=255
g=r.a
if(g!=null)g.iQ(p,q,j,k,l,m);++p}}return r}}
A.bGn.prototype={
ds(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.b1()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.bX(w,v)+(t.b&E.lK[v])
d-=v
t.c=8
t.b=J.S(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.b1()}x=D.c.bX(w,d)
v=t.b
u=t.c-d
w=x+(D.c.lq(v,u)&E.lK[d])
t.c=u}return w}}
A.azN.prototype={
k(d){var x=this,w=x.a,v=$.cES().h(0,w)
if(v!=null)return v.a+": "+x.b.k(0)+" "+x.c
return"<"+w+">: "+x.b.k(0)+" "+x.c},
jm(){var x,w,v,u,t,s=this,r=s.e
if(r!=null)return r
r=s.f
x=s.d
r.d=x
w=s.c
v=s.b
u=v!==D.ag
if(w*(u?D.jY[v.a]:0)>r.c-x)throw C.o(C.bQ("Invalid TIFF tag "+s.a+" count: "+w))
t=r.da(w*(u?D.jY[v.a]:0))
switch(v.a){case 1:return s.e=new C.A4(new Uint8Array(C.bm(t.da(w).bL())))
case 2:return s.e=new C.Jk(w===0?"":t.iu(w-1))
case 7:return s.e=new C.A4(new Uint8Array(C.bm(t.da(w).bL())))
case 3:return s.e=C.cSp(t,w)
case 4:return s.e=C.cSk(t,w)
case 5:return s.e=C.cSl(t,w)
case 11:return s.e=C.cSq(t,w)
case 12:return s.e=C.cSj(t,w)
case 6:return s.e=new C.DQ(new Int8Array(C.bm(J.cFc(D.n.ga5(t.bL()),0,w))))
case 8:return s.e=C.cSo(t,w)
case 9:return s.e=C.cSm(t,w)
case 10:return s.e=C.cSn(t,w)
case 13:case 0:return null}}}
A.bGr.prototype={
c8c(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.ac(u.a+7,8)
for(w=0,v=0;v<g;++v){u.aEC(d,w,f)
w+=x}},
aEC(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){while(w){v=p.Az(10)
u=B.WV[v]
t=D.c.U(u,1)&15
if(t===12){u=B.yW[(v<<2&12|p.oz(2))>>>0]
s=D.c.U(u,1)
f+=D.c.U(u,4)&4095
p.kC(4-(s&7))}else if(t===0)throw C.o(C.bQ("TIFFFaxDecoder0"))
else if(t===15)throw C.o(C.bQ("TIFFFaxDecoder1"))
else{f+=D.c.U(u,5)&2047
p.kC(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}while(!w){u=B.Ri[p.oz(4)]
r=u>>>5&2047
q=!0
if(r===100){u=B.T2[p.Az(9)]
t=D.c.U(u,1)&15
r=D.c.U(u,5)&2047
if(t===12){p.kC(5)
u=B.yW[p.oz(4)]
s=D.c.U(u,1)
r=D.c.U(u,4)&4095
p.pG(d,e,f,r)
f+=r
p.kC(4-(s&7))}else if(t===15)throw C.o(C.bQ("TIFFFaxDecoder2"))
else{p.pG(d,e,f,r)
f+=r
p.kC(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=B.Re[p.oz(2)]
r=u>>>5&2047
p.pG(d,e,f,r)
f+=r
p.kC(2-(u>>>1&15))
p.f[p.d++]=f}else{p.pG(d,e,f,r)
f+=r
p.kC(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
c8d(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.ac(x+7,8)
v=C.bs(2,null,!1,y.I)
e.at=a3&1
e.as=a3>>>2&1
if(e.b2k()!==1)throw C.o(C.bQ("TIFFFaxDecoder3"))
e.aEC(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.b2k()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
for(;;){r.toString
if(!(r<x))break
e.aYQ(q,p,v)
n=v[0]
m=v[1]
l=B.WB[e.oz(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.pG(d,u,r,m-r)}e.kC(7-j)
r=m
q=r}else if(k===1){e.kC(7-j)
i=o+1
h=i+1
if(p){r+=e.arI()
e.f[o]=r
g=e.arH()
e.pG(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.arH()
e.pG(d,u,r,g)
r+=g
e.f[o]=r
r+=e.arI()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.pG(d,u,r,f-r)
e.kC(7-j)}else throw C.o(C.bQ("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.aEC(d,u,a1)
u+=w}},
c8t(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.ac(x+7,8)
v=C.bs(2,null,!1,y.I)
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
a2.aYQ(p,o,v)
m=v[0]
l=v[1]
k=B.WB[a2.oz(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.pG(a3,t,q,l-q)}a2.kC(7-i)
q=l
p=q}else if(j===1){a2.kC(7-i)
h=n+1
g=h+1
if(o){q+=a2.arI()
r[n]=q
f=a2.arH()
a2.pG(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.arH()
a2.pG(a3,t,q,f)
q+=f
r[n]=q
q+=a2.arI()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.pG(a3,t,q,e-q)
a2.kC(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.oz(3)!==7)throw C.o(C.bQ("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){while(a2.oz(1)!==1)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.oz(1)===0
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
a2.pG(a3,t,q,1);++q
n=h}}}else throw C.o(C.bQ("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
arI(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.Az(10)
u=B.WV[v]
t=D.c.U(u,1)&15
if(t===12){u=B.yW[(v<<2&12|r.oz(2))>>>0]
s=D.c.U(u,1)
x+=D.c.U(u,4)&4095
r.kC(4-(s&7))}else if(t===0)throw C.o(C.bQ("TIFFFaxDecoder0"))
else if(t===15)throw C.o(C.bQ("TIFFFaxDecoder1"))
else{x+=D.c.U(u,5)&2047
r.kC(10-t)
if((u&1)===0)w=!1}}return x},
arH(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=B.Ri[r.oz(4)]
u=v>>>5&2047
if(u===100){v=B.T2[r.Az(9)]
t=D.c.U(v,1)&15
s=D.c.U(v,5)
if(t===12){r.kC(5)
v=B.yW[r.oz(4)]
s=D.c.U(v,1)
x+=D.c.U(v,4)&4095
r.kC(4-(s&7))}else if(t===15)throw C.o(C.bQ("TIFFFaxDecoder2"))
else{x+=s&2047
r.kC(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=B.Re[r.oz(2)]
x+=v>>>5&2047
r.kC(2-(v>>>1&15))}else{x+=u
r.kC(4-(v>>>1&15))}w=!0}}return x},
b2k(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.Az(12)!==1)throw C.o(C.bQ("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.Az(x)!==0)throw C.o(C.bQ(u))
if(x<4)if(v.Az(8)!==0)throw C.o(C.bQ(u))
while(w=v.Az(8),w!==1)if(w!==0)throw C.o(C.bQ(u))}if(v.at===0)return 1
else return v.oz(1)},
aYQ(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
pG(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.U(s,3),p=s&7
if(p>0){x=D.c.bX(1,7-p)
w=J.S(d.a,d.d+q)
for(;;){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.j(0,q,w)}q=D.c.U(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.dS(d.a,d.d+q,255)
s+=8}while(s<r){q=D.c.U(s,3)
v=J.S(d.a,d.d+q)
t=D.c.bX(1,7-(s&7))
J.dS(d.a,d.d+q,(v|t)>>>0);++s}},
Az(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
j===$&&C.d()
x=j.d
w=j.c-x-1
v=k.x
u=k.c
t=0
s=0
if(u===1){v.toString
r=J.S(j.a,x+v)
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=J.S(u,x+j)
else{t=J.S(u,x+j)
j=k.r
s=J.S(j.a,j.d+(v+2))}}}else if(u===2){v.toString
r=B.o6[J.S(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=B.o6[J.S(u,x+j)&255]
else{t=B.o6[J.S(u,x+j)&255]
j=k.r
s=B.o6[J.S(j.a,j.d+(v+2))&255]}}}else throw C.o(C.bQ("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.bX(r&E.lK[q],p)
l=D.c.dP(t&B.H_[n],8-n)
if(o!==0){l=D.c.bX(l,o)|D.c.dP(s&B.H_[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
oz(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
m===$&&C.d()
x=m.d
w=m.c-x-1
v=n.x
u=n.c
t=0
if(u===1){v.toString
s=J.S(m.a,x+v)
if(!(v===w)){m=n.r
t=J.S(m.a,m.d+(v+1))}}else if(u===2){v.toString
s=B.o6[J.S(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=B.o6[J.S(m.a,m.d+(v+1))&255]}}else throw C.o(C.bQ("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.dP(s&E.lK[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.bX(s&E.lK[r],-p)|D.c.dP(t&B.H_[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
kC(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.azO.prototype={
buu(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.di(d,h,0),f=d.a9()
for(x=i.a,w=0;w<f;++w){v=d.a9()
u=d.a9()
t=d.Y()
if(u>13){d.d+=4
continue}s=D.V1[u]
if(t*D.jY[u]>4)r=d.Y()
else{r=d.d
d.d=r+4}q=new A.azN(v,s,t,r,g)
x.j(0,v,q)
if(v===256){p=q.jm()
p=p==null?h:p.H(0)
i.b=p==null?0:p}else if(v===257){p=q.jm()
p=p==null?h:p.H(0)
i.c=p==null?0:p}else if(v===262){o=q.jm()
n=o==null?h:o.H(0)
if(n==null)n=17
if(n<17)i.d=B.aFu[n]
else i.d=B.JJ}else if(v===259){p=q.jm()
p=p==null?h:p.H(0)
i.e=p==null?0:p}else if(v===258){p=q.jm()
p=p==null?h:p.H(0)
i.f=p==null?0:p}else if(v===277){p=q.jm()
p=p==null?h:p.H(0)
i.r=p==null?0:p}else if(v===317){p=q.jm()
p=p==null?h:p.H(0)
i.Q=p==null?0:p}else if(v===339){p=q.jm()
o=p==null?h:p.H(0)
i.x=B.aFX[o==null?0:o]}else if(v===320){o=q.jm()
if(o!=null){p=J.dai(D.n.ga5(o.rW()))
i.id=p
i.k1=0
p=p.length/3|0
i.k2=p
i.k3=p*2}}}p=i.id
m=p!=null
if(m&&i.d===B.JK)i.r=1
if(i.b===0||i.c===0)return
if(m&&i.f===8){l=p.length
for(m=p.$flags|0,w=0;w<l;++w){k=p[w]
m&2&&C.z(p)
p[w]=k>>>8}}if(i.d===B.JI)i.z=!0
i.w=i.r
if(x.S(324)){i.ay=i.KT(322)
i.ch=i.KT(323)
i.CW=i.atZ(324)
i.cx=i.atZ(325)}else{i.ay=i.atY(322,i.b)
if(!x.S(278))p=i.ch=i.atY(323,i.c)
else{j=i.KT(278)
if(j===-1){p=i.c
i.ch=p}else{i.ch=j
p=j}}m=i.c
if(p>m)i.ch=m
i.CW=i.atZ(273)
i.cx=i.atZ(279)}p=i.b
m=i.ay
i.cy=D.c.dq(p+m-1,m)
m=i.c
p=i.ch
i.db=D.c.dq(m+p-1,p)
i.dy=i.atY(266,1)
i.fr=i.KT(292)
i.fx=i.KT(293)
i.KT(338)
switch(i.d.a){case 0:case 1:x=i.f
if(x===1&&i.r===1)i.y=B.JH
else if(x===4&&i.r===1)i.y=B.bhA
else if(D.c.Z(x,8)===0){x=i.r
if(x===1)i.y=B.bhB
else if(x===2)i.y=B.bhC
else i.y=B.rM}break
case 2:if(D.c.Z(i.f,8)===0){x=i.r
if(x===3)i.y=B.adi
else if(x===4)i.y=B.bhE
else i.y=B.rM}break
case 3:x=!1
if(i.r===1)if(i.id!=null){x=i.f
x=x===4||x===8||x===16}if(x)i.y=B.bhD
break
case 4:if(i.f===1&&i.r===1)i.y=B.JH
break
case 6:if(i.e===7&&i.f===8&&i.r===3)i.y=B.adi
else{if(x.S(530)){o=x.h(0,530).jm()
i.as=o.H(0)
x=i.at=o.hy(0,1)}else x=i.at=i.as=2
p=i.as
p===$&&C.d()
if(p*x===1)i.y=B.rM
else if(i.f===8&&i.r===3)i.y=B.bhF}break
case 5:if(D.c.Z(i.f,8)===0)i.y=B.rM
x=i.r
if(x===4)i.w=3
else if(x===5)i.w=4
break
default:if(D.c.Z(i.f,8)===0)i.y=B.rM
break}},
cw(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===B.rL,a0=e===B.bD
e=g.f
if(e===1)x=D.fN
else if(e===2)x=D.hn
else{if(e===4)e=D.ho
else if(d&&e===16)e=D.i6
else if(d&&e===32)e=D.j0
else if(d&&e===64)e=D.jM
else if(a0&&e===8)e=D.ls
else if(a0&&e===16)e=D.lt
else if(a0&&e===32)e=D.lu
else if(e===16)e=D.dl
else e=e===32?D.jN:D.ah
x=e}w=g.id!=null&&g.d===B.JK
v=w?3:g.w
e=g.b
u=C.hA(f,f,x,0,D.bK,g.c,f,0,v,f,x,e,w)
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
e.qx(k,t[l],t[m],t[n])}}j=0
i=0
for(;;){e=g.db
e===$&&C.d()
if(!(j<e))break
h=0
for(;;){e=g.cy
e===$&&C.d()
if(!(h<e))break
g.bB2(a1,u,h,j);++h;++i}++j}return u},
bB2(b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
if(b1.y===B.JH){b1.bAB(b3,b4,b5,b6)
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
else if(u===5){w=C.d8(new Uint8Array(p),!1,b2,0)
v=A.cTL()
try{v.Nj(A.di(b3,x,0),w.a)}catch(o){}if(b1.Q===2)for(n=0;n<b1.ch;++n){m=b1.r
u=b1.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.S(u.a,u.d+l)
j=w
i=b1.r
i=J.S(j.a,j.d+(l-i))
J.dS(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=C.d8(new Uint8Array(p),!1,b2,0)
b1.aWO(b3,p,w.a)}else if(u===32946||u===8){h=b3.aPU(0,0,x)
u=b1.f
g=u<8?1:D.c.U(u+7,3)
w=C.d8(C.aUO(h,b1.ay*b1.ch*b1.r*g),!1,b2,0)}else if(u===6||u===7){h=b3.aPU(0,0,x)
f=C.cHg().cw(y.p.a(h))
if(f!=null)b1.bME(f,b4,s,q,b1.ay,b1.ch)
return}else throw C.o(C.bQ("Unsupported Compression Type: "+u))
e=C.a([0,0,0],y.t)
for(d=q,a0=0;a0<b1.ch;++a0,++d)for(a1=s,a2=0;a2<b1.ay;++a2,++a1){u=w
if(u.d>=u.c||a1>=b1.b||d>=b1.c)break
u=b1.r
if(u===1){u=b1.x
if(u===B.rL){u=b1.f
if(u===32){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a3=$.Hb()[0]}else if(u===64)a3=w.aAe()
else if(u===16){u=w.a9()
r=$.fx
a3=(r!=null?r:C.h4())[u]}else a3=0
if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.lU(a1,d,a3)}}else{r=b1.f
if(r===8)if(u===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
a3=$.pf()[0]}else{u=w
a3=J.S(u.a,u.d++)}else if(r===16)if(u===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
a3=$.pe()[0]}else a3=w.a9()
else if(r===32)if(u===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a3=$.kA()[0]}else a3=w.Y()
else a3=0
if(b1.d===B.JI){u=b4.a
a4=u==null?b2:u.gbK()
a3=(a4==null?0:a4)-a3}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.lU(a1,d,a3)}}}else if(u===2){u=b1.f
if(u===8){if(b1.x===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
a5=$.pf()[0]}else{u=w
a5=J.S(u.a,u.d++)}if(b1.x===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.pf()[0]}else{u=w
a6=J.S(u.a,u.d++)}}else if(u===16){if(b1.x===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
a5=$.pe()[0]}else a5=w.a9()
if(b1.x===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.pe()[0]}else a6=w.a9()}else if(u===32){if(b1.x===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a5=$.kA()[0]}else a5=w.Y()
if(b1.x===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.kA()[0]}else a6=w.Y()}else{a5=0
a6=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.iQ(a1,d,a5,0,0,a6)}}else if(u===3){u=b1.x
if(u===B.rL){u=b1.f
if(u===32){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
u=$.Hb()
a7=u[0]
r[0]=w.Y()
a8=u[0]
r[0]=w.Y()
a9=u[0]}else{a8=0
a9=0
if(u===64)a7=w.aAe()
else if(u===16){u=w.a9()
r=$.fx
a7=(r!=null?r:C.h4())[u]
u=w.a9()
r=$.fx
a8=(r!=null?r:C.h4())[u]
u=w.a9()
r=$.fx
a9=(r!=null?r:C.h4())[u]}else a7=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.jS(a1,d,a7,a8,a9)}}else{r=b1.f
if(r===8){if(u===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.pf()[0]}else{u=w
a7=J.S(u.a,u.d++)}if(b1.x===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.pf()[0]}else{u=w
a8=J.S(u.a,u.d++)}if(b1.x===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.pf()[0]}else{u=w
a9=J.S(u.a,u.d++)}}else if(r===16){if(u===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.pe()[0]}else a7=w.a9()
if(b1.x===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.pe()[0]}else a8=w.a9()
if(b1.x===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.pe()[0]}else a9=w.a9()}else if(r===32){if(u===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.kA()[0]}else a7=w.Y()
if(b1.x===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.kA()[0]}else a8=w.Y()
if(b1.x===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.kA()[0]}else a9=w.Y()}else{a7=0
a8=0
a9=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.jS(a1,d,a7,a8,a9)}}}else if(u>=4)if(b1.x===B.rL){u=b1.f
if(u===32){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
u=$.Hb()
a7=u[0]
r[0]=w.Y()
a8=u[0]
r[0]=w.Y()
a9=u[0]
r[0]=w.Y()
b0=u[0]}else{a8=0
a9=0
b0=0
if(u===64)a7=w.aAe()
else if(u===16){u=w.a9()
r=$.fx
a7=(r!=null?r:C.h4())[u]
u=w.a9()
r=$.fx
a8=(r!=null?r:C.h4())[u]
u=w.a9()
r=$.fx
a9=(r!=null?r:C.h4())[u]
u=w.a9()
r=$.fx
b0=(r!=null?r:C.h4())[u]}else a7=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.iQ(a1,d,a7,a8,a9,b0)}}else{u=b4.a
a6=u==null?b2:u.gbK()
if(a6==null)a6=0
u=b1.f
if(u===8){if(b1.x===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.pf()[0]}else{u=w
a7=J.S(u.a,u.d++)}if(b1.x===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.pf()[0]}else{u=w
a8=J.S(u.a,u.d++)}if(b1.x===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.pf()[0]}else{u=w
a9=J.S(u.a,u.d++)}if(b1.x===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
b0=$.pf()[0]}else{u=w
b0=J.S(u.a,u.d++)}if(b1.r===5)if(b1.x===B.bD){u=w
u=J.S(u.a,u.d++)
r=$.om()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.pf()[0]}else{u=w
a6=J.S(u.a,u.d++)}}else if(u===16){if(b1.x===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.pe()[0]}else a7=w.a9()
if(b1.x===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.pe()[0]}else a8=w.a9()
if(b1.x===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.pe()[0]}else a9=w.a9()
if(b1.x===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
b0=$.pe()[0]}else b0=w.a9()
if(b1.r===5)if(b1.x===B.bD){u=w.a9()
r=$.ol()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.pe()[0]}else a6=w.a9()}else if(u===32){if(b1.x===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a7=$.kA()[0]}else a7=w.Y()
if(b1.x===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a8=$.kA()[0]}else a8=w.Y()
if(b1.x===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a9=$.kA()[0]}else a9=w.Y()
if(b1.x===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
b0=$.kA()[0]}else b0=w.Y()
if(b1.r===5)if(b1.x===B.bD){u=w.Y()
r=$.hf()
r.$flags&2&&C.z(r)
r[0]=u
a6=$.kA()[0]}else a6=w.Y()}else{a7=0
a8=0
a9=0
b0=0}if(b1.d===B.adj){A.d1l(a7,a8,a9,b0,e)
a7=e[0]
a8=e[1]
a9=e[2]
b0=a6}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.iQ(a1,d,a7,a8,a9,b0)}}}}else throw C.o(C.bQ("Unsupported bitsPerSample: "+u))},
bME(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.d0(v,x,null)
if(u==null)u=new C.fo()
e.Dt(v+f,w,u)}},
bAB(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
x=C.d8(new Uint8Array(a2*u),!1,a1,0)
a0.aWO(a3,q,x.a)}else if(r===5){x=C.d8(new Uint8Array(a2*u),!1,a1,0)
A.cTL().Nj(A.di(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.S(a2.a,a2.d+n)
r=x
m=a0.r
m=J.S(r.a,r.d+(n-m))
J.dS(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=C.d8(new Uint8Array(a2*u),!1,a1,0)
try{A.cJd(a0.dy,a0.ay,a0.ch).c8c(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=C.d8(new Uint8Array(a2*u),!1,a1,0)
try{A.cJd(a0.dy,a0.ay,a0.ch).c8d(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=C.d8(new Uint8Array(a2*u),!1,a1,0)
try{A.cJd(a0.dy,a0.ay,a0.ch).c8t(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8||r===32946)x=C.d8(C.aUO(a3.aPU(0,0,s),D.c.U(a0.ay+7,3)*a0.ch),!1,a1,0)
else if(r===1)x=a3
else throw C.o(C.bQ("Unsupported Compression Type: "+r))
k=new A.bGn(x)
j=a4.gbK()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.ds(1)
u=a4.a
if(a2===0){if(u!=null)u.jS(e,g,i,0,0)}else if(u!=null)u.jS(e,g,h,0,0)}k.c=0}},
aWO(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.bV(f),w=0,v=0;v<e;){u=w+1
t=J.S(d.a,d.d+w)
s=$.om()
s.$flags&2&&C.z(s)
s[0]=t
r=$.pf()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.j(f,v,J.S(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.S(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.j(f,v,o)}}}}},
atY(d,e){var x=this.a
if(!x.S(d))return e
x=x.h(0,d).jm()
x=x==null?null:x.H(0)
return x==null?0:x},
KT(d){return this.atY(d,0)},
atZ(d){var x,w=this.a
if(!w.S(d))return null
x=w.h(0,d)
w=x.jm()
w.toString
return C.a49(x.c,w.gwt(w),!0,y.q)}}
A.Mi.prototype={
N(){return"TiffFormat."+this.b}}
A.kX.prototype={
N(){return"TiffPhotometricType."+this.b}}
A.tU.prototype={
N(){return"TiffImageType."+this.b}}
A.bGs.prototype={
gbV(){return this.a},
gaV(){return this.b}}
A.bk0.prototype={
Nj(d,e){var x,w,v,u,t,s,r=this
r.r=e
x=J.aM(e)
r.w=0
w=y.p.a(d.a)
r.e=w
r.f=w.length
r.b=d.d
if(w[0]===0&&w[1]===1)throw C.o(C.bQ("Invalid LZW Data"))
r.b_N()
r.d=r.c=0
v=r.aFL()
w=r.x
u=0
for(;;){if(!(v!==257&&r.w<x))break
if(v===256){r.b_N()
v=r.aFL()
r.as=0
if(v===257)break
J.dS(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.aZ7(v)
t=r.as
t===$&&C.d()
s=t-1
for(;s>=0;--s)J.dS(r.r,r.w++,w[s])
r.aUe(u,w[r.as-1])}else{r.aZ7(u)
t=r.as
t===$&&C.d()
s=t-1
for(;s>=0;--s)J.dS(r.r,r.w++,w[s])
J.dS(r.r,r.w++,w[r.as-1])
r.aUe(u,w[r.as-1])}u=v}v=r.aFL()}},
aUe(d,e){var x,w=this,v=w.y
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
aZ7(d){var x,w,v,u,t,s,r=this
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
aFL(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.dP(t.c,s)&B.aAU[w-9]},
b_N(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bi.dg(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&C.z(x)
x[w]=w}v.a=9
v.Q=258}}
A.bGo.prototype={
i5(d){return C.fT(new A.bGp(this,d))},
c_m(d){var x,w,v=this.a
if(v==null)return null
x=v.f[d]
v=this.d
A.oh(x.b,x.c,v,!1)
A.oh(x.ay,x.ch,v,!1)
v=this.c
v===$&&C.d()
w=x.cw(v)
return w},
oQ(d,e){return C.fT(new A.bGq(this,d,e))},
c_l(d,e){var x,w,v,u,t,s,r=this,q=null,p=C.d8(d,!1,q,0)
r.c=p
p=r.a=r.c_n(p)
if(p==null)return q
p=p.f
x=p.length
w=new A.AD(r.d)
for(v=0;v<p.length;p.length===x||(0,C.r)(p),++v){u=p[v]
w.iY(0,u.b,u.c)}t=r.i5(0)
if(t==null)return q
t.e=A.cGx(C.d8(d,!1,q,0))
t.w=B.Pb
for(s=1;s<x;++s)t.pK(r.i5(s))
return t},
b5A(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=C.a([],y.M),k=new A.bGs(l),j=d.c
if(j-d.d<8)return m
v=d.a9()
if(v!==18761&&v!==19789)return m
if(v===19789)d.e=!0
else d.e=!1
u=d.a9()
k.d=u
if(u!==42)return m
t=d.Y()
s=A.di(d,m,0)
s.d=t
x=s
u=y.q
r=C.a6(u)
q=y.r
for(;;){if(!(t!==0&&t<j&&l.length<1024&&r.v(0,t)))break
w=null
try{p=new A.azO(C.t(u,q),B.JJ,B.adh,B.bhG)
p.buu(x)
w=p
o=w
if(!(o.b!==0&&o.c!==0))break}catch(n){break}l.push(w)
if(l.length===1){o=l[0]
k.a=o.b
k.b=o.c}if(e)break
t=x.Y()
if(t!==0)x.d=t}return l.length!==0?k:m},
c_n(d){return this.b5A(d,!1)}}
A.bIE.prototype={
a5O(){var x,w=this.a,v=w.rQ()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.rQ()!==2752925)return!1
x=this.b
x.a=w.a9()
x.b=w.a9()
return!0},
nS(){var x,w,v,u,t=this,s=null
if(!t.bF7())return s
x=t.b
w=x.a
t.d=C.hA(s,s,D.ah,0,D.bK,x.b,s,0,4,s,D.ah,w,!1)
t.bLR()
if(!t.bRC())return s
w=x.w
if(w.length!==0){v=C.d8(new C.eZ(w),!1,s,0)
w=t.d
w.toString
w.e=A.cGx(v)}u=x.r
if(u!=null)t.d.c=new C.A2("ICC_PROFILE",D.nl,u)
return t.d},
bF7(){var x,w,v,u,t=this
if(!t.a5O())return!1
t.fr=A.dof()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aAr(v,u,new Int32Array(2))}x=t.b
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
u=A.cY8(v.h6(u))
t.c=u
v.d+=x.d
u.f6(1)
t.c.f6(1)
t.bRJ(t.x,t.fr)
t.bRB()
if(!t.bRF(v))return!1
t.bRH()
t.c.f6(1)
t.bRG()
return!0},
bRJ(d,e){var x,w,v,u=this,t=u.c
t===$&&C.d()
t=t.f6(1)!==0
d.a=t
if(t){d.b=u.c.f6(1)!==0
if(u.c.f6(1)!==0){d.c=u.c.f6(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.f6(1)!==0){w=u.c
v=w.f6(7)
w=w.f6(1)===1?-v:v}else w=0
t.$flags&2&&C.z(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.f6(1)!==0){w=u.c
v=w.f6(6)
w=w.f6(1)===1?-v:v}else w=0
t.$flags&2&&C.z(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.f6(1)!==0?u.c.f6(8):255
t.$flags&2&&C.z(t)
t[x]=w}}else d.b=!1
return!0},
bRB(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&C.d()
t.a=s.f6(1)!==0
t.b=u.c.f6(6)
t.c=u.c.f6(3)
s=u.c.f6(1)!==0
t.d=s
if(s)if(u.c.f6(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.f6(1)!==0){w=u.c
v=w.f6(6)
w=w.f6(1)===1?-v:v
s.$flags&2&&C.z(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.f6(1)!==0){w=u.c
v=w.f6(6)
w=w.f6(1)===1?-v:v
s.$flags&2&&C.z(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.bv=s
return!0},
bRF(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&C.d()
p=D.c.c5(1,p.f6(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.aqz(3,v)
s=w+((J.S(t.a,t.d)|J.S(t.a,t.d+1)<<8|J.S(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.aan(d.DI(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.cY8(d.DI(q-w,d.d-d.b+w))
return w<q},
bRH(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&C.d()
x=h.f6(7)
w=i.c.f6(1)!==0?i.c.U8(4):0
v=i.c.f6(1)!==0?i.c.U8(4):0
u=i.c.f6(1)!==0?i.c.U8(4):0
t=i.c.f6(1)!==0?i.c.U8(4):0
s=i.c.f6(1)!==0?i.c.U8(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=B.Gx[j]
k.$flags&2&&C.z(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=B.Gy[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=B.Gx[k]
j.$flags&2&&C.z(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=B.Gy[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=B.Gx[j]
k.$flags&2&&C.z(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=B.Gy[j]}},
bRG(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&C.d()
s=t.hB(B.aQE[x][w][v][u])!==0?r.c.f6(8):B.aAP[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&C.z(t)
t[u]=s}t=r.c
t===$&&C.d()
t=t.f6(1)!==0
r.fx=t
if(t)r.fy=r.c.f6(8)},
bT0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bv
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
bLR(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.b,h=i.at
if(h!=null)k.a2=h
x=J.kP(4,y.K)
for(h=y.i,w=0;w<4;++w)x[w]=C.a([new A.FX(),new A.FX()],h)
k.E=x
h=k.at
h.toString
x=J.kP(h,y.bt)
for(v=0;v<h;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aAs(u,t,new Uint8Array(8))}k.k2=x
k.ok=new Uint8Array(832)
h=k.at
h.toString
k.go=new Uint8Array(4*h)
u=k.p4=16*h
h=8*h
k.R8=h
t=k.bv
t.toString
s=B.Gm[t]
r=s*u
q=(s/2|0)*h
k.p1=C.d8(new Uint8Array(16*u+r),!1,j,r)
h=k.R8
h.toString
k.p2=C.d8(new Uint8Array(8*h+q),!1,j,q)
h=k.R8
h.toString
k.p3=C.d8(new Uint8Array(8*h+q),!1,j,q)
h=i.a
k.RG=C.d8(new Uint8Array(h),!1,j,0)
p=i.a+1>>>1
k.rx=C.d8(new Uint8Array(p),!1,j,0)
k.ry=C.d8(new Uint8Array(p),!1,j,0)
i=k.bv
i.toString
o=B.Gm[i]
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
x=J.kP(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aAp()
k.k3=x
i=k.at
i.toString
x=J.kP(i,y.bl)
for(v=0;v<i;++v){h=new Int16Array(384)
x[v]=new A.aAq(h,new Uint8Array(16))}k.bA=x
i=k.at
i.toString
x=J.kP(i,y.ac)
for(v=0;v<i;++v)x[v]=new A.FX()
k.k4=x
k.bT0()
i=$.cNb()
h=$.cNc()
u=$.cNd()
t=$.cNe()
m=$.cEu()
l=new Int32Array(16)
A.dnG()
k.e=new A.bIF(i,h,u,t,m,l)
return!0},
bRC(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
t=k.bA
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
k.bRD()
if(!n)n=k.bRI(q,s)
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
D.n.dg(x,0,4,0)
k.y1=0
k.bUA()
u=k.bv
u.toString
l=!1
if(u>0){u=k.y2
t=k.ch
t===$&&C.d()
if(u>=t){t=k.cx
t.toString
t=u<=t
l=t}}if(!k.bE0(l))return!1
u=++k.y2}return!0},
bUA(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.y2,b0=a7.ok
b0===$&&C.d()
x=C.d8(b0,!1,a8,40)
w=C.d8(b0,!1,a8,584)
v=C.d8(b0,!1,a8,600)
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
m=a7.bA
m===$&&C.d()
l=m[n]
if(n>0){for(k=-1;k<16;++k){m=40+k*32
A.oV(b0,m-4,b0,m+12,4)}for(k=-1;k<8;++k){m=k*32
j=584+m
A.oV(b0,j-4,b0,j+4,4)
m=600+m
A.oV(b0,m-4,b0,m+4,4)}}else{for(k=0;k<16;++k){o&2&&C.z(b0)
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
if(p){A.oV(b0,8,i.a,0,16)
A.oV(b0,552,i.b,0,8)
A.oV(b0,568,i.c,0,8)}else if(n===0){D.n.dg(b0,7,28,127)
D.n.dg(b0,551,560,127)
D.n.dg(b0,567,576,127)}m=l.b
m===$&&C.d()
if(m){if(p){m=a7.at
m.toString
if(n>=m-1)D.n.dg(b0,24,28,i.a[15])
else A.oV(b0,24,a7.k2[n+1].a,0,4)}A.oV(b0,152,b0,24,4)
A.oV(b0,280,b0,24,4)
A.oV(b0,408,b0,24,4)
for(m=l.c,f=0;f<16;++f,g=g<<2>>>0){e=A.di(x,a8,B.Zt[f])
B.aHY[m[f]].$1(e)
g.toString
j=f*16
a7.aXr(g,new C.lU(h,j,Math.min(384,384),j,!1),e)}}else{m=A.cYa(n,a9,l.c[0])
m.toString
B.aWT[m].$1(x)
if(g!==0)for(f=0;f<16;++f,g=g<<2>>>0){e=A.di(x,a8,B.Zt[f])
g.toString
m=f*16
a7.aXr(g,new C.lU(h,m,Math.min(384,384),m,!1),e)}}m=l.f
m===$&&C.d()
j=A.cYa(n,a9,l.d)
j.toString
B.TU[j].$1(w)
B.TU[j].$1(v)
j=Math.min(384,384)
d=new C.lU(h,256,j,256,!1)
if((m&255)!==0){a0=a7.e
if((m&170)!==0){a0===$&&C.d()
a0.wx(d,w)
a0.wx(A.di(d,a8,16),A.di(w,a8,4))
a1=A.di(d,a8,32)
a2=A.di(w,a8,128)
a0.wx(a1,a2)
a0.wx(A.di(a1,a8,16),A.di(a2,a8,4))}else{a0===$&&C.d()
a0.bhm(d,w)}}a3=new C.lU(h,320,j,320,!1)
m=m>>>8
if((m&255)!==0){j=a7.e
if((m&170)!==0){j===$&&C.d()
j.wx(a3,v)
j.wx(A.di(a3,a8,16),A.di(v,a8,4))
m=A.di(a3,a8,32)
a0=A.di(v,a8,128)
j.wx(m,a0)
j.wx(A.di(m,a8,16),A.di(a0,a8,4))}else{j===$&&C.d()
j.bhm(a3,v)}}m=a7.ax
m.toString
if(a9<m-1){A.oV(i.a,0,b0,520,16)
A.oV(i.b,0,b0,808,8)
A.oV(i.c,0,b0,824,8)}a4=a7.p1.d+n*16
m=n*8
a5=a7.p2.d+m
a6=a7.p3.d+m
for(k=0;k<16;++k)A.oV(s,a4+k*u,b0,40+k*32,16)
for(k=0;k<8;++k){m=k*t
j=k*32
A.oV(r,a5+m,b0,584+j,8)
A.oV(q,a6+m,b0,600+j,8)}++n}},
aXr(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&C.d()
x.cn9(e,f,!1)
break
case 2:this.e===$&&C.d()
w=J.S(e.a,e.d)+4
v=A.bIH(J.S(e.a,e.d+4),35468)
u=A.bIH(J.S(e.a,e.d+4),85627)
t=A.bIH(J.S(e.a,e.d+1),35468)
s=A.bIH(J.S(e.a,e.d+1),85627)
A.bIJ(f,0,w+u,s,t)
A.bIJ(f,1,w+v,s,t)
A.bIJ(f,2,w-v,s,t)
A.bIJ(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&C.d()
x.amE(e,f)
break
default:break}},
bCd(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.p4
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
x.aSi(u,t,i,s+4)}if(w.c){x=j.e
x===$&&C.d()
x.bne(u,t,i,s)}if(e>0){x=j.e
x===$&&C.d()
x.aSj(u,t,i,s+4)}if(w.c){x=j.e
x===$&&C.d()
x.bnf(u,t,i,s)}}else{r=w.b
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
v.Kk(u,t,1,i,16,q,r,k)
v.Kk(p,n,1,x,8,q,r,k)
v.Kk(m,l,1,x,8,q,r,k)}if(w.c){v=j.e
v===$&&C.d()
v.cbV(u,t,i,s,r,k)
v.Kj(p,n+4,1,x,8,s,r,k)
v.Kj(m,l+4,1,x,8,s,r,k)}if(e>0){v=j.e
v===$&&C.d()
q=s+4
v.Kk(u,t,i,1,16,q,r,k)
v.Kk(p,n,x,1,8,q,r,k)
v.Kk(m,l,x,1,8,q,r,k)}if(w.c){v=j.e
v===$&&C.d()
v.cnG(u,t,i,s,r,k)
i=4*x
v.Kj(p,n+i,x,1,8,s,r,k)
v.Kj(m,l+i,x,1,8,s,r,k)}}},
bDO(){var x,w=this,v=w.ay
v===$&&C.d()
x=v
for(;;){v=w.CW
v.toString
if(!(x<v))break
w.bCd(x,w.y2);++x}},
bE0(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.bv
d.toString
x=B.Gm[d]
d=f.p4
d.toString
w=x*d
d=f.R8
d.toString
v=(x/2|0)*d
d=f.p1
d===$&&C.d()
u=-w
t=A.di(d,e,u)
d=f.p2
d===$&&C.d()
s=-v
r=A.di(d,e,s)
d=f.p3
d===$&&C.d()
q=A.di(d,e,s)
p=f.y2
d=f.cx
d.toString
o=p*16
n=(p+1)*16
if(a0)f.bDO()
if(p!==0){o-=x
f.to=A.di(t,e,0)
f.x1=A.di(r,e,0)
f.x2=A.di(q,e,0)}else{f.to=A.di(f.p1,e,0)
f.x1=A.di(f.p2,e,0)
f.x2=A.di(f.p3,e,0)}d=p<d-1
if(d)n-=x
m=f.as
if(n>m)n=m
f.xr=null
if(f.a2!=null&&o<n){l=f.xr=f.bB6(o,n-o)
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
f.c1F(o-k,f.z-g,n-o)}if(d){d=f.p1
l=f.p4
l.toString
d.QJ(u,w,t,16*l)
l=f.p2
u=f.R8
u.toString
l.QJ(s,v,r,8*u)
u=f.p3
l=f.R8
l.toString
u.QJ(s,v,q,8*l)}return!0},
c1F(d,e,f){if(e<=0||f<=0)return!1
this.bD_(d,e,f)
this.bCZ(d,e,f)
return!0},
aEd(d){var x
if((d&-4194304)>>>0===0)x=D.c.U(d,14)
else x=d<0?0:255
return x},
B1(d,e,f,g,h){var x=19077*d,w=this.aEd(x+26149*f+-3644112)
g.$flags&2&&C.z(g)
g[h]=w
g[h+1]=this.aEd(x-6419*e-13320*f+2229552)
g[h+2]=this.aEd(x+33050*e+-4527440)
g[h+3]=255},
av3(b4,b5,b6,b7,b8,b9,c0,c1,c2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=y.p,d=e.a(b4.a),a0=b4.d,a1=e.a(b6.a),a2=b6.d,a3=e.a(b7.a),a4=b7.d,a5=e.a(b8.a),a6=b8.d,a7=e.a(b9.a),a8=b9.d,a9=e.a(c0.a),b0=c0.d,b1=b5==null,b2=b1?f:e.a(b5.a),b3=b1?f:b5.d
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
g.B1(d[a0],s&255,s>>>16,a9,b0)
b1=b2!=null
if(b1){s=3*t+u+131074>>>2
r=b2[b3]
x.toString
g.B1(r,s&255,s>>>16,x,w)}for(q=1;q<=v;++q,t=o,u=p){p=(a1[a2+q]|a3[a4+q]<<16)>>>0
o=(a5[a6+q]|a7[a8+q]<<16)>>>0
n=u+p+t+o+524296
m=n+2*(p+t)>>>3
l=n+2*(u+o)>>>3
s=m+u>>>1
k=l+p>>>1
r=2*q
j=a0+r
i=(r-1)*4
g.B1(d[j-1],s&255,s>>>16,a9,b0+i)
h=r*4
g.B1(d[j],k&255,k>>>16,a9,b0+h)
if(b1){s=l+t>>>1
k=m+o>>>1
r=b3+r
j=b2[r-1]
x.toString
g.B1(j,s&255,s>>>16,x,w+i)
g.B1(b2[r],k&255,k>>>16,x,w+h)}}if((c2&1)===0){s=3*u+t+131074>>>2
e*=4
g.B1(d[a0+c2-1],s&255,s>>>16,a9,b0+e)
if(b1){s=3*t+u+131074>>>2
b1=b2[b3+c2-1]
x.toString
g.B1(b1,s&255,s>>>16,x,w+e)}}},
bCZ(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.xr
if(l==null)return
x=y.p.a(l.a)
w=l.d
if(d===0){v=f-1
u=d}else{u=d-1
w-=m.b.a
v=f}l=m.Q
t=m.as
if(l+d+f===t)v=t-l-u
s=m.d.bL()
r=m.d.gbV()*4
for(l=m.b.a,t=s.$flags|0,q=0;q<v;++q){p=(q+u)*r+3
for(o=0;o<e;++o,p+=4){n=x[w+o]
t&2&&C.z(s)
s[p]=n}w+=l}},
bD_(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=C.d8(J.cS(l.d.ga5(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&C.d()
x=A.di(h,k,0)
h=l.x1
h===$&&C.d()
w=A.di(h,k,0)
h=l.x2
h===$&&C.d()
v=A.di(h,k,0)
u=d+f
t=D.c.U(e+1,1)
s=j.a*4
j=l.rx
j===$&&C.d()
r=A.di(j,k,0)
j=l.ry
j===$&&C.d()
q=A.di(j,k,0)
if(d===0){l.av3(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&C.d()
l.av3(j,x,r,q,w,v,A.di(i,k,-s),i,e)
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
l.av3(A.di(x,k,-n),x,r,q,w,v,A.di(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
if(l.Q+u<l.as){j=l.RG
j===$&&C.d()
j.az0(0,e,x)
l.rx.az0(0,t,w)
l.ry.az0(0,t,v);--p}else if((u&1)===0)l.av3(x,k,w,v,w,v,A.di(i,k,s),k,e)
return p},
bB6(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.ad=new Uint8Array(n)
x=o.a2
w=new A.bKJ(x,m,l)
v=x.b1()
u=w.d=v&3
w.e=D.c.U(v,2)&3
w.f=D.c.U(v,4)&3
w.r=D.c.U(v,6)&3
if(w.gdU())if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.VY(B.t2,C.a([],y.J))
t.a=m
t.b=l
n=C.a([],y.A)
u=C.a([],y.F)
s=new Uint32Array(2)
r=new A.aAn(x,s)
s=r.e=J.cS(D.bi.ga5(s),0,null)
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
u=new A.asC(r,t,n,u)
u.dy=m
u.fr=l
w.x=u
u.Xn(m,l,!0)
n=w.x
x=n.ch
if(x.length===1&&x[0].a===B.ae5&&n.bMm()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.db=0
x=D.c.Z(p,4)
x=new Uint8Array(p+(4-x))
n.cy=x
n.cx=J.ms(D.n.ga5(x),0,null)}else{w.y=!1
w.x.aUo(m)}}else w.r=1
o.a_=w}n=o.a_
if(n!=null)if(!n.w){x=o.ad
x===$&&C.d()
if(!n.a5N(d,e,x))return null}n=o.ad
n===$&&C.d()
return C.d8(n,!1,null,d*m)},
bRI(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&C.d()
x=a1.dy[a3]
a3=a1.bA
a3===$&&C.d()
w=a3[a1.y1]
v=C.d8(w.a,!1,null,0)
a3=a1.k3
a3===$&&C.d()
u=a3[0]
v.cgc(0,v.c-v.d,0)
a3=w.b
a3===$&&C.d()
if(!a3){t=C.d8(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.aFF(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.c_Q(t,v)
else{q=D.c.U(J.S(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.dS(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.aFF(a5,o,i+(m&1),x.a,n,v)
i=r>n?1:0
m=m>>>1|i<<7
a3=J.S(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=h<<2|a3
v.d+=16}m=m>>>4
l=l>>>1|i<<7
k=(k<<8|h)>>>0}f=l>>>4
for(e=m,d=0,a0=0;a0<4;a0+=2){a3=4+a0
m=D.c.ff(a4.a,a3)
l=D.c.ff(u.a,a3)
for(h=0,j=0;j<2;++j){i=l&1
for(g=0;g<2;++g){r=a1.aFF(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.S(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.c5(h,4*a0))>>>0
e=(e|D.c.c5(m<<4>>>0,a0))>>>0
f=(f|D.c.c5(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
c_Q(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
for(x=0;x<4;++x){w=12+x
v=J.S(d.a,d.d+x)+J.S(d.a,d.d+w)
u=4+x
t=8+x
s=J.S(d.a,d.d+u)+J.S(d.a,d.d+t)
r=J.S(d.a,d.d+u)-J.S(d.a,d.d+t)
q=J.S(d.a,d.d+x)-J.S(d.a,d.d+w)
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
bFb(d,e){var x,w,v,u,t,s
if(d.hB(e[3])===0)x=d.hB(e[4])===0?2:3+d.hB(e[5])
else if(d.hB(e[6])===0)x=d.hB(e[7])===0?5+d.hB(159):7+2*d.hB(165)+d.hB(145)
else{w=d.hB(e[8])
v=2*w+d.hB(e[9+w])
u=B.aCq[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.hB(u[s])
x+=3+D.c.c5(8,v)}return x},
aFF(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.hB(p[0])===0)return h
while(d.hB(p[1])===0){++h
p=e[B.XQ[h]].a[0]
if(h===16)return 16}x=h+1
w=e[B.XQ[x]].a
if(d.hB(p[2])===0){p=w[1]
v=1}else{v=this.bFb(d,p)
p=w[2]}u=B.aGM[h]
t=d.b
t===$&&C.d()
s=d.aUO(D.c.U(t,1))
t=d.b
r=B.WI[t]
d.b=B.WG[t]
t=d.d
t===$&&C.d()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.dS(i.a,i.d+u,t*q)}return 16},
bRD(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bA
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
D.n.dg(l,m,m+4,w)
D.n.dg(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=B.aH3[l[j]][w]
q=B.UY[o.c.hB(r[0])]
while(q>0)q=B.UY[2*q+o.c.hB(r[q])]
w=-q
l.$flags&2&&C.z(l)
l[j]=w}p=u+4
l.toString
D.n.bW(v,u,p,l,m)
n&2&&C.z(k)
k[t]=w}}if(o.c.hB(142)===0)n=0
else if(o.c.hB(114)===0)n=2
else n=o.c.hB(183)!==0?1:3
x.d=n}}
A.aan.prototype={
f6(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.bX(this.hB(128),w))>>>0
return x},
U8(d){var x=this.f6(d)
return this.f6(1)===1?-x:x},
hB(d){var x,w=this,v=w.b
v===$&&C.d()
x=w.aUO(D.c.U(v*d,8))
if(w.b<=126)w.bYg()
return x},
aUO(d){var x,w,v,u,t,s=this,r=s.d
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
if(D.c.lq(r,t)>d){x=s.b
x===$&&C.d()
w=d+1
s.b=x-w
s.c=r-D.c.bX(w,t)
return 1}else{s.b=d
return 0}},
bYg(){var x,w=this,v=w.b
v===$&&C.d()
x=B.WI[v]
w.b=B.WG[v]
v=w.d
v===$&&C.d()
w.d=v-x}}
A.bIF.prototype={
aSj(d,e,f,g){var x,w
for(x=0;x<16;++x){w=e+x
if(this.b0P(d,w,f,g))this.arP(d,w,f)}},
aSi(d,e,f,g){var x,w
for(x=0;x<16;++x){w=e+x*f
if(this.b0P(d,w,1,g))this.arP(d,w,1)}},
bnf(d,e,f,g){var x
for(x=1;x<=3;++x)this.aSj(d,e+4*x*f,f,g)},
bne(d,e,f,g){var x
for(x=1;x<=3;++x)this.aSi(d,e+4*x,f,g)},
cnG(d,e,f,g,h,i){var x
for(x=1;x<=3;++x)this.Kj(d,e+4*x*f,f,1,16,g,h,i)},
cbV(d,e,f,g,h,i){var x
for(x=1;x<=3;++x)this.Kj(d,e+4*x,1,f,16,g,h,i)},
Kk(a2,a3,a4,a5,a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(x=3*a4,w=2*a4,v=a1.c,u=a1.e,t=a2.$flags|0,s=0;s<a6;++s,a3+=a5)if(a1.b0Q(a2,a3,a4,a7,a8))if(a1.b_k(a2,a3,a4,a9))a1.arP(a2,a3,a4)
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
Kj(d,e,f,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=2*f,w=g.d,v=g.e,u=d.$flags|0,t=0;t<a1;++t,e+=a0)if(g.b0Q(d,e,f,a2,a3))if(g.b_k(d,e,f,a4))g.arP(d,e,f)
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
arP(d,e,f){var x=d[e-2*f],w=e-f,v=d[w],u=d[e],t=3*(u-v)+this.c[1020+x-d[e+f]],s=this.d,r=s[D.c.U(t+4+1024,3)-128+112],q=this.e
s=q[255+v+s[D.c.U(t+3+1024,3)-128+112]]
d.$flags&2&&C.z(d)
d[w]=s
d[e]=q[255+u-r]},
b_k(d,e,f,g){var x=d[e-2*f],w=d[e-f],v=d[e],u=d[e+f],t=this.a
return t[255+x-w]>g||t[255+u-v]>g},
b0P(d,e,f,g){var x=d[e-2*f],w=d[e-f],v=d[e],u=d[e+f]
return 2*this.a[255+w-v]+this.b[255+x-u]<=g},
b0Q(d,e,f,g,h){var x=d[e-4*f],w=3*f,v=d[e-w],u=2*f,t=d[e-u],s=d[e-f],r=d[e],q=d[e+f],p=d[e+u],o=d[e+w]
w=this.a
u=255+t
if(2*w[255+s-r]+this.b[u-q]>g)return!1
return w[255+x-v]<=h&&w[255+v-t]<=h&&w[u-s]<=h&&w[255+o-p]<=h&&w[255+p-q]<=h&&w[255+q-r]<=h},
wx(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=y._.a(d.a),j=y.p.a(e.a),i=this.f,h=d.d
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
cn9(d,e,f){this.wx(d,e)
if(f)this.wx(A.di(d,null,16),A.di(e,null,4))},
amE(d,e){var x,w,v,u,t,s
for(x=J.S(d.a,d.d)+4+65536,w=0;w<4;++w)for(v=w*32,u=0;u<4;++u){t=u+v
s=J.S(e.a,e.d+t)+(D.c.U(x,3)-8192)
if(!((s&-256)>>>0===0))s=s<0?0:255
J.dS(e.a,e.d+t,s)}},
bhm(d,e){var x=this,w=null
if(J.S(d.a,d.d)!==0)x.amE(d,e)
if(J.S(d.a,d.d+16)!==0)x.amE(A.di(d,w,16),A.di(e,w,4))
if(J.S(d.a,d.d+32)!==0)x.amE(A.di(d,w,32),A.di(e,w,128))
if(J.S(d.a,d.d+48)!==0)x.amE(A.di(d,w,48),A.di(e,w,132))}}
A.bIM.prototype={}
A.bIP.prototype={}
A.bIR.prototype={}
A.aam.prototype={}
A.bIQ.prototype={}
A.bIG.prototype={}
A.FX.prototype={}
A.aAp.prototype={}
A.aAr.prototype={}
A.aAq.prototype={}
A.aAs.prototype={}
A.aao.prototype={
a5O(){var x,w,v,u,t=this,s=t.b
if(s.ds(8)!==47)return!1
x=s.ds(14)+1
w=s.ds(14)+1
v=s.ds(1)
t.dy=x
t.fr=w
u=t.c
u.f=B.CB
u.a=x
u.b=w
u.d=v!==0
if(s.ds(3)!==0)return!1
return!0},
nS(){var x,w,v,u,t,s,r=this,q=null
r.f=0
if(!r.a5O())return q
r.Xn(r.dy,r.fr,!0)
r.aUo(r.dy)
x=r.dy
r.d=C.hA(q,q,D.ah,0,D.bK,r.fr,q,0,4,q,D.ah,x,!1)
x=r.cx
x.toString
w=r.c
v=w.a
u=w.b
if(!r.aEB(x,v,u,u,r.gbT8()))return q
x=w.w
if(x.length!==0){t=C.d8(new C.eZ(x),!1,q,0)
x=r.d
x.toString
x.e=A.cGx(t)}s=w.r
if(s!=null)r.d.c=new C.A2("ICC_PROFILE",D.nl,s)
return r.d},
aUo(d){var x,w=this,v=w.c
v=v.a*v.b+d
x=new Uint32Array(v+d*16)
w.cx=x
w.cy=J.cS(D.bi.ga5(x),0,null)
w.db=v
return!0},
bUp(d){var x,w,v,u=this,t=u.b,s=t.ds(2),r=u.CW,q=D.c.c5(1,s)
if((r&q)>>>0!==0)return!1
u.CW=(r|q)>>>0
x=new A.aAo(B.ae4)
u.ch.push(x)
r=B.aTZ[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.ds(3)+2
x.e=t
x.d=u.Xn(A.FY(x.b,t),A.FY(x.c,x.e),!1)
break
case 3:w=t.ds(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.FY(x.b,v)
x.e=v
x.d=u.Xn(w,1,!1)
u.bDp(w,x)
break
case 2:break}return!0},
Xn(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.ds(1)!==0;){t=C.a([u,v],w)
if(!p.bUp(t))throw C.o(C.bQ("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.ds(1)!==0){s=x.ds(4)
if(!(s>=1&&s<=11))throw C.o(C.bQ("Invalid Color Cache"))}else s=0
if(!p.bU3(u,v,s,f))throw C.o(C.bQ("Invalid Huffman Codes"))
if(s>0){x=D.c.c5(1,s)
p.w=x
p.x=new A.bIN(new Uint32Array(x),32-s)}else p.w=0
x=p.c
x.a=u
x.b=v
r=p.z
p.Q=A.FY(u,r)
p.y=r===0?4294967295:D.c.c5(1,r)-1
if(f){p.f=0
return null}q=new Uint32Array(u*v)
if(!p.aEB(q,u,v,v,null))throw C.o(C.bQ("Failed to decode image data."))
p.f=0
return q},
aEB(b0,b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=506832829,a5=a3.f,a6=D.c.dq(a5,b1),a7=D.c.Z(a5,b1),a8=b1*b2,a9=b1*b3
if(a5>=a9){if(b4!=null)b4.$2(b3,!1)
return!0}x=a3.aYI(a7,a6)
w=a3.w
v=280+w
u=w>0?a3.x:null
t=a3.y
for(w=b0.$flags|0,s=a3.b,r=b4!=null,q=a5;q<a9;){if((a7&t)>>>0===0){p=a3.XP(a3.as,a3.Q,a3.z,a7,a6)
x=a3.ax[p]}o=0
if(x.d){n=x.c
w&2&&C.z(b0)
b0[q]=n;++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dP(A.alj(k,a4),m)
l&2&&C.z(n)
n[j]=k;++a5}a7=o}continue}if(s.a>=32)s.ER()
if(x.e){i=x.f[s.aif()&63]
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
j=D.c.dP(A.alj(k,a4),m)
l&2&&C.z(n)
n[j]=k;++a5}a7=o}continue}}else h=x.HH(0,s)
if(h<256){if(x.b){n=x.c
w&2&&C.z(b0)
b0[q]=(n|h<<8)>>>0}else{g=x.HH(1,s)
if(s.a>=32)s.ER()
f=C.d34(x.HH(2,s),h,g,x.HH(3,s))
w&2&&C.z(b0)
b0[q]=f}++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dP(A.alj(k,a4),m)
l&2&&C.z(n)
n[j]=k;++a5}a7=o}}else if(h<280){e=a3.ask(h-256)
d=x.HH(4,s)
if(s.a>=32)s.ER()
a0=a3.b1M(b1,a3.ask(d))
if(q<a0||a8-q<e)return!1
else{a1=q-a0
for(a2=0;a2<e;++a2){n=b0[a1+a2]
w&2&&C.z(b0)
b0[q+a2]=n}}q+=e
a7+=e
while(a7>=b1){a7-=b1;++a6
if(r&&a6<=b3)b4.$2(a6,!0)}if((a7&t)>>>0!==0){p=a3.XP(a3.as,a3.Q,a3.z,a7,a6)
x=a3.ax[p]}if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dP(A.alj(k,a4),m)
l&2&&C.z(n)
n[j]=k;++a5}}else if(h<v){while(a5<q){n=b0[a5]
m=u.a
l=u.b
l=D.c.dP(A.alj(n,a4),l)
m.$flags&2&&C.z(m)
m[l]=n;++a5}n=u.a
m=n[h-280]
w&2&&C.z(b0)
b0[q]=m;++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
for(m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dP(A.alj(k,a4),m)
l&2&&C.z(n)
n[j]=k;++a5}a7=o}}else return!1}if(r)b4.$2(a6>b3?b3:a6,!1)
a3.f=q
return!0},
bMm(){var x,w,v,u,t
if(this.w>0)return!1
for(x=this.at,w=this.ax,v=0;v<x;++v){u=w[v].a
t=u[1]
if(t.a[t.b].a>0)return!1
t=u[2]
if(t.a[t.b].a>0)return!1
t=u[3]
if(t.a[t.b].a>0)return!1}return!0},
bDy(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(e&&D.c.Z(d,16)!==0)return
x=m.r
w=d-x
v=m.dy
u=v*x
while(w>0){t=w>16?16:w
s=v*t
r=v*x
q=m.db
m.aUx(x,t,u)
for(v=m.dx,p=m.cx,o=0;o<s;++o){v.toString
n=p[q+o]
v.$flags&2&&C.z(v)
v[r+o]=n>>>8&255}w-=t
v=m.dy
u+=t*v
x+=t}m.r=d},
bAv(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.f,j=D.c.dq(k,d),i=D.c.Z(k,d),h=d*e,g=d*f
if(k>=g){l.as4(j)
return!0}x=l.aYI(i,j)
w=l.y
v=l.b
for(;;){if(!(!v.b&&k<g))break
if((i&w)>>>0===0){u=l.XP(l.as,l.Q,l.z,i,j)
x=l.ax[u]}if(v.a>=32)v.ER()
t=x.HH(0,v)
if(t<256){s=l.cy
s===$&&C.d()
s.$flags&2&&C.z(s)
s[k]=t;++k;++i
if(i>=d){++j
if(D.c.Z(j,16)===0)l.as4(j)
i=0}}else if(t<280){r=l.ask(t-256)
q=x.HH(4,v)
if(v.a>=32)v.ER()
p=l.b1M(d,l.ask(q))
if(k>=p&&h-k>=r)for(s=l.cy,o=0;o<r;++o){s===$&&C.d()
n=k+o
m=s[n-p]
s.$flags&2&&C.z(s)
s[n]=m}else{l.f=k
return!0}k+=r
i+=r
while(i>=d){i-=d;++j
if(D.c.Z(j,16)===0)l.as4(j)}if(k<g&&(i&w)>>>0!==0){u=l.XP(l.as,l.Q,l.z,i,j)
x=l.ax[u]}}else return!1}l.as4(j)
l.f=k
return!0},
as4(d){var x,w,v,u=this,t=u.r,s=d-t,r=u.cy
r===$&&C.d()
x=C.d8(r,!1,null,u.c.a*t)
if(s>0){w=u.r
t=u.dx
t.toString
v=C.d8(t,!1,null,u.dy*w)
u.ch[0].c5H(w,w+s,x,v)}u.r=d},
bT9(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.c.a,m=o.r
if(e)if(D.c.Z(d,16)!==0)return
x=d-m
if(x<=0){o.r=d
return}o.aUx(m,x,n*m)
n=o.cx
n.toString
w=o.d.bL()
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
aUx(d,e,f){var x,w=this,v=w.ch,u=v.length,t=w.c.a,s=d+e,r=w.db,q=w.cx
q.toString
D.bi.bW(q,r,r+t*e,q,f)
for(;x=u-1,u>0;u=x){t=v[x]
q=w.cx
q.toString
t.ce9(d,s,q,r,q,r)}},
bU3(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=1,i=null
if(g&&k.b.ds(1)!==0){x=2+k.b.ds(3)
w=A.FY(d,x)
v=A.FY(e,x)
u=w*v
t=k.Xn(w,v,!1)
if(t==null)return!1
k.z=x
for(s=t.$flags|0,r=j,q=0;q<u;++q){p=t[q]>>>8&65535
s&2&&C.z(t)
t[q]=p
if(p>=r)r=p+1}if(r>1000||r>d*e){i=new Int32Array(1)
D.dd.dg(i,0,1,255)
for(j=0,q=0;q<u;++q){o=t[q]
if(i[o]===-1){n=j+1
i[o]=j
j=n}m=i[o]
s&2&&C.z(t)
t[q]=m}}else j=r}else{t=null
r=1}if(k.b.b)return!1
l=k.bU4(f,j,r,i)
if(l==null)return!1
k.as=t
k.at=j
k.ax=l
return!0},
aI7(d,e,f,g,h,i){var x,w=d.a,v=d.b,u=g
do{u-=f
x=w[v+(e+u)]
x.a=h
x.b=i}while(u>0)},
bP2(d,e,f){var x=D.c.bX(1,e-f)
while(e<15){x-=d[e]
if(x<=0)break;++e
x=x<<1>>>0}return e-f},
aYR(d,e){var x=D.c.bX(1,e-1)
while((d&x)>>>0!==0)x=x>>>1
return x!==0?((d&x-1)>>>0)+x:d},
b7k(a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=D.c.c5(1,a3),a0=new Int32Array(16),a1=new Int32Array(16)
for(x=0;x<a5;++x){w=a4[x]
if(w>15)return 0
a0[w]=a0[w]+1}if(a0[0]===a5)return 0
a1[1]=0
for(v=1;v<15;v=u){w=a0[v]
if(w>D.c.c5(1,v))return 0
u=v+1
a1[u]=a1[v]+w}for(w=a6!=null,x=0;x<a5;++x){t=a4[x]
if(t>0)if(w){s=a1[t]
if(s>=a5)return 0
a1[t]=s+1
a6.$flags&2&&C.z(a6)
a6[s]=x}else a1[t]=a1[t]+1}if(a1[15]===1){if(w){a2.toString
e.aI7(a2,0,1,d,0,a6[0])}return d}r=d-1
for(q=0,p=1,o=1,x=0,v=1,n=2;v<=a3;++v,n=n<<1>>>0){o=o<<1>>>0
p+=o
o-=a0[v]
if(o<0)return 0
if(a2==null)continue
for(m=v&255;a0[v]>0;a0[v]=a0[v]-1,x=l){l=x+1
e.aI7(a2,q,n,d,m,a6[x])
q=e.aYR(q,v)}}for(v=a3+1,w=a2!=null,k=d,j=0,i=4294967295,n=2;v<=15;++v,n=n<<1>>>0){o=o<<1>>>0
p+=o
o-=a0[v]
if(o<0)return 0
for(m=v-a3&255;a0[v]>0;a0[v]=a0[v]-1){h=(q&r)>>>0
if(h!==i){if(w)j+=k
g=e.bP2(a0,v,a3)
k=D.c.bX(1,g)
d+=k
if(w){s=a2.a[a2.b+h]
s.a=g+a3&255
s.b=j-h}i=h}if(w){l=x+1
f=a6[x]
e.aI7(a2,j+D.c.ff(q,a3),n,k,m,f)
x=l}q=e.aYR(q,v)}}if(p!==2*a1[15]-1)return 0
return d},
b7l(d,e,f,g){var x,w,v,u,t,s,r=this.b7k(null,e,f,g,null)
if(r===0||d==null)return r
x=d.b
w=x.d
v=x.e
if(w+r>=v){u=new A.a30()
if(r>v)v=r
t=A.cGV(v)
u.e=v
u.b=u.a=t
d.b=u
x=u}s=new Uint16Array(g)
this.b7k(x.b,e,f,g,s)
return r},
bU2(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.arH(new A.a30())
h.aTL(128)
if(this.b7l(h,7,d,19)===0)return!1
x=this.b
if(x.ds(1)!==0){w=2+x.ds(2+2*x.ds(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=8,t=0;t<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.ER()
r=h.b.a
r.toString
q=r.a[r.b+(x.aif()&127)]
x.a=x.a+q.a
p=q.b
if(p<16){o=t+1
v&2&&C.z(f)
f[t]=p
if(p!==0)u=p
t=o}else{n=p-16
m=B.azI[n]
l=B.aA_[n]
k=x.ds(m)+l
if(t+k>e)return!1
j=p===16?u:0
for(;i=k-1,k>0;k=i,t=o){o=t+1
v&2&&C.z(f)
f[t]=j}}}return!0},
b2n(d,e,f){var x,w,v,u,t,s,r=this.b,q=r.ds(1)
D.dd.dg(e,0,d,0)
if(q!==0){x=r.ds(1)
w=r.ds(r.ds(1)===0?1:8)
e.$flags&2&&C.z(e)
e[w]=1
if(x+1===2)e[r.ds(8)]=1
v=!0}else{u=new Int32Array(19)
t=r.ds(4)+4
for(s=0;s<t;++s)u[B.aG4[s]]=r.ds(3)
v=this.bU2(u,d,e)}return v&&!r.b?this.b7l(f,8,e,d):0},
ar_(d,e,f){var x=f.a,w=d.a
f.a=x+w
f.b=(f.b|D.c.c5(d.b,e))>>>0
return w},
bx5(d){var x,w,v,u,t,s,r,q=this
for(x=d.a,w=d.f,v=0;v<64;++v){u=w[v]
t=x[0]
s=t.a[t.b+v]
t=s.b
if(t>=256){u.a=s.a+256
u.b=t}else{u.b=u.a=0
r=D.c.ff(v,q.ar_(s,8,u))
t=x[1]
r=D.c.ff(r,q.ar_(t.a[t.b+r],16,u))
t=x[2]
r=D.c.ff(r,q.ar_(t.a[t.b+r],0,u))
t=x[3]
D.c.ff(r,q.ar_(t.a[t.b+r],24,u))}}},
bU4(a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a5>0,a2=a1?D.c.c5(1,a5):0,a3=B.aDj[a5],a4=a8==null
if(a4&&a6!==a7)return a0
x=new Int32Array(280+a2)
w=J.kP(a6,y.f)
for(v=0;v<a6;++v)w[v]=A.dfh()
a2=new A.arH(new A.a30())
a2.aTL(a6*a3)
d.ay=a2
for(a2=!a4,u=0;u<a7;++u)if(a2&&a8[u]===-1)for(t=0;t<5;++t){s=B.SY[t]
if(d.b2n(t===0&&a1?s+D.c.c5(1,a5):s,x,a0)===0)return a0}else{r=w[a4?u:a8[u]]
q=r.a
for(p=0,o=!0,n=0,t=0;t<5;++t){s=B.SY[t]
if(t===0&&a1)s+=D.c.c5(1,a5)
m=d.b2n(s,x,d.ay)
l=d.ay.b
k=l.b
k.toString
q[t]=k
if(m===0)return a0
if(o&&B.aHW[t]===1)o=k.a[k.b].a===0
j=k.a
k=k.b
n+=j[k].a
l.d+=m
l.b=new A.a3_(j,k+m)
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
if(l)d.bx5(r)}return w},
ask(d){var x
if(d<4)return d+1
x=D.c.U(d-2,1)
return D.c.c5(2+(d&1),x)+this.b.ds(x)+1},
b1M(d,e){var x,w
if(e>120)return e-120
else{x=B.aDM[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
bDp(d,e){var x,w,v,u,t,s,r=D.c.c5(1,D.c.ff(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.cS(D.bi.ga5(p),0,null)
w=J.cS(D.bi.ga5(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&C.z(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&C.z(w)
w[u]=0}e.d=q
return!0},
XP(d,e,f,g,h){if(f===0||d==null)return 0
return d[e*D.c.U(h,f)+D.c.U(g,f)]},
aYI(d,e){var x=this,w=x.XP(x.as,x.Q,x.z,d,e)
return x.ax[w]}}
A.asC.prototype={
cb4(d,e){return this.bDy(d,e)}}
A.aAn.prototype={
aif(){var x,w,v=this.a
if(v<32){x=this.d
w=D.c.dP(x[0],v)+((x[1]&B.H0[v])>>>0)*(B.H0[32-v]+1)}else{x=this.d
w=v===32?x[1]:D.c.dP(x[1],v-32)}return w},
ds(d){var x,w,v=this
if(!v.b&&d<25){x=v.aif()
w=B.H0[d]
v.a+=d
v.ER()
return(x&w)>>>0}else{v.b=!0
throw C.o(C.bQ("Not enough data in input."))}},
ER(){var x,w,v,u=this,t=u.c,s=u.d,r=s.$flags|0,q=t.c
for(;;){if(!(u.a>=8&&t.d<q))break
x=J.S(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&C.z(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bIN.prototype={}
A.MC.prototype={
N(){return"VP8LImageTransformType."+this.b}}
A.aAo.prototype={
ce9(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.c2R(h,i,(e-d)*s)
break
case 0:t.cjl(d,e,f,g,h,i)
if(e!==t.c){x=i-s
D.bi.bW(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.c5I(d,e,f,g,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.FY(s,t.e)
u=i+w*s-v
D.bi.bW(h,u,u+v,f,i)
t.b9B(d,e,f,u,h,i)}else t.b9B(d,e,f,g,h,i)
break}},
c5H(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.ff(8,r),p=this.b,o=this.d
if(q<8){x=D.c.c5(1,r)-1
w=D.c.c5(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.S(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.dS(g.a,g.d,r>>>8&255);++g.d
u=D.c.U(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.S(f.a,f.d);++f.d
r=o[s]
J.dS(g.a,g.d,r>>>8&255);++g.d}},
b9B(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.ff(8,p),n=this.b,m=this.d
if(o<8){x=D.c.c5(1,p)-1
w=D.c.c5(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&C.z(h)
h[i]=q
u=D.c.ff(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&C.z(h)
h[i]=q}},
c5I(a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=h.e,e=D.c.c5(1,f)-1,d=A.FY(g,f),a0=D.c.U(a1,h.e)*d
for(f=a5.$flags|0,x=a1;x<a2;){w=new Uint8Array(3)
for(v=a0,u=0;u<g;++u){if((u&e)>>>0===0){t=v+1
s=h.d[v]
w[0]=s&255
w[1]=s>>>8&255
w[2]=s>>>16&255
v=t}s=a3[a4+u]
r=s>>>8&255
q=w[0]
p=$.om()
p.$flags&2&&C.z(p)
p[0]=q
q=$.pf()
o=q[0]
p[0]=r
n=q[0]
m=$.aVB()
m.$flags&2&&C.z(m)
m[0]=o*n
l=$.cEz()
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
JT(d,e){return(((d&4278255360)>>>0)+((e&4278255360)>>>0)&4278255360|(d&16711935)+(e&16711935)&16711935)>>>0},
cjl(a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=4278190080,a5=a3.b
if(a6===0){x=a3.JT(a8[a9],a4)
b0.$flags&2&&C.z(b0)
b0[b1]=x
w=a9+1
v=b1+1
u=a5-1
t=b0[b1]
for(s=0;s<u;++s){t=a3.JT(a8[w+s],t)
b0[v+s]=t}a9+=a5
b1+=a5;++a6}x=a3.e
r=D.c.c5(1,x)
q=r-1
p=A.FY(a5,x)
o=D.c.U(a6,a3.e)*p
for(x=~q,n=b0.$flags|0,m=a6;m<a7;){l=b0[b1-a5]
k=a3.JT(a8[a9],l)
n&2&&C.z(b0)
b0[b1]=k
for(j=o,i=1;i<a5;i=e,j=h){h=j+1
g=a3.d[j]>>>8&15
f=$.doe[g]
e=((i&x)>>>0)+r
if(e>a5)e=a5
d=a9+i
k=b1+i
a0=k-a5
a1=e-i
if(g===0)for(s=0;s<a1;++s)b0[k+s]=a3.JT(a8[d+s],a4)
else if(g===1){t=b0[k-1]
for(s=0;s<a1;++s){t=a3.JT(a8[d+s],t)
b0[k+s]=t}}else for(s=0;s<a1;++s){a2=k+s
l=f.$3(b0[a2-1],b0,a0+s)
b0[a2]=a3.JT(a8[d+s],l)}}a9+=a5
b1+=a5;++m
if((m&q)>>>0===0)o+=p}},
c2R(d,e,f){var x,w,v,u,t
for(x=d.$flags|0,w=0;w<f;++w){v=e+w
u=d[v]
t=u>>>8&255
x&2&&C.z(d)
d[v]=(u&4278255360|(u&16711935)+(t<<16|t)&16711935)>>>0}}}
A.bKJ.prototype={
gdU(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
a5N(d,e,f){var x,w,v,u,t,s,r=this
if(!r.gdU())return!1
x=B.aX2[r.e]
if(r.d===0){w=r.b
v=d*w
u=r.a
D.n.bW(f,v,v+e*w,u.a,u.d-u.b+v)}else{w=d+e
u=r.x
u===$&&C.d()
u.dx=f
t=u.c
if(r.y)w=u.bAv(t.a,t.b,w)
else{s=u.cx
s.toString
u=u.aEB(s,t.a,t.b,w,u.gcb3())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,d,e,f)}if(r.f===1)if(!r.bBs(f,r.b,r.c,d,e))return!1
if(d+e>=r.c)r.w=!0
return!0},
bBs(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.aaB.prototype={
bux(d,e){var x=this,w=d.b1()
x.w=0
x.f=(w&1)!==0
x.r=(w&2)===0
x.x=d.d-d.b
x.y=e-16}}
A.asD.prototype={}
A.arF.prototype={}
A.arG.prototype={}
A.a3_.prototype={
gt(d){return this.a.length-this.b},
h(d,e){return this.a[this.b+e]},
j(d,e,f){var x=this.a,w=this.b
x[D.c.ag(w,e)].a=f.gMJ()
x[D.c.ag(w,e)].b=f.gu()}}
A.a2O.prototype={
h(d,e){return this.a[e]},
HH(d,e){var x,w=e.aif()&255,v=this.a,u=v[d],t=u.a[u.b+w].a-8
if(t>0){e.a+=8
x=e.aif()
v=v[d]
w=w+v.a[v.b+w].b+((x&D.c.bX(1,t)-1)>>>0)}else v=u
u=e.a
v=v.a[v.b+w]
e.a=u+v.a
return v.b}}
A.a30.prototype={}
A.arH.prototype={
aTL(d){var x=this.b=this.a,w=A.cGV(d)
x.e=d
x.b=x.a=w}}
A.VX.prototype={
N(){return"WebPFormat."+this.b}}
A.VY.prototype={
gbV(){return this.a},
gaV(){return this.b}}
A.asE.prototype={}
A.bKK.prototype={
le(d){var x,w=C.d8(d,!1,null,0)
this.c=w
try{w=this.aYF(w)
return w}catch(x){return!1}},
jF(d){return C.fT(new A.bKN(this,d))},
c1Q(d){var x,w,v,u,t=this,s=null,r=C.d8(d,!1,s,0)
t.c=r
if(!t.aYF(r))return s
r=new A.asE(B.t2,C.a([],y.J))
t.a=r
x=t.c
x.toString
if(!t.aYJ(x,r))return s
r=t.a
switch(r.f.a){case 3:x=t.b
A.oh(r.a,r.b,x,!1)
for(r=t.a.z,w=r.length,v=0;v<r.length;r.length===w||(0,C.r)(r),++v){u=r[v]
A.oh(u.c,u.d,x,!1)}r=t.a
r.as=r.z.length
return r
case 2:x=t.c
x.toString
x.d=r.ay
if(!A.cJr(x,r).a5O())return s
r=t.a
A.oh(r.a,r.b,t.b,!1)
r=t.a
r.as=r.z.length
return r
case 1:x=t.c
x.toString
x.d=r.ay
if(!A.cJp(x,r).a5O())return s
r=t.a
A.oh(r.a,r.b,t.b,!1)
r=t.a
r.as=r.z.length
return r
case 0:throw C.o(C.bQ("Unknown format for WebP"))}},
i5(d){return C.fT(new A.bKL(this,d))},
bAL(d){var x,w,v,u,t=this,s=t.c
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
return t.b7r(s.DI(x,w),d)}w=x.f
if(w===B.CB){u=s.DI(x.ch,x.ay)
s=t.a
s.toString
return A.cJr(u,s).nS()}else if(w===B.Kp){u=s.DI(x.ch,x.ay)
s=t.a
s.toString
return A.cJp(u,s).nS()}return null},
oQ(d,e){return C.fT(new A.bKM(this,d,e))},
c1P(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null
if(d.jF(a1)==null)return a0
x=d.a
w=x.e
if(!w)return d.i5(0)
new A.AD(d.b).iY(0,x.a*x.as,x.b)
for(x=y.N,w=y.P,v=a0,u=v,t=u,s=0;r=d.a,s<r.as;++s){a2=r.z[s]
q=d.i5(s)
if(q==null)continue
r=a2.e
q.y=r
if(t==null||u==null){p=d.a
o=p.a
p=p.b
n=q.gqd()
m=q.a
m=m==null?a0:m.gcp()
if(m==null)m=D.ah
l=q.y
k=d.a
j=k.y
i=k.c
k=k.w
if(k.length===0)k=a0
else{k=new C.eZ(k)
h=k.gt(0)
g=k.gt(0)
f=new C.ID(C.t(x,w))
f.bk(new C.lU(k,0,Math.min(h,g),0,!1))
k=f}e=d.a.r
t=C.hA(i,k,m,l,D.bK,p,e==null?a0:new C.A2("ICC_PROFILE",D.nl,e),j,n,a0,D.ah,o,!1)
u=t}else{u=C.tf(u,!1,!1)
if(v!=null){p=v.f
p===$&&C.d()}else p=!1
if(p){p=v.a
o=v.b
n=v.c
m=v.d
A.d1N(u,!1,$.d6j(),p,p+n-1,o,o+m-1)}}u.y=r
r=a2.r
r===$&&C.d()
r=r?B.Dp:B.tl
A.cLf(u,q,r,a0,a0,a2.a,a2.b,a0,a0,a0,a0)
if(u!==t)t.pK(u)
v=a2}return t},
b7r(d,e){var x,w,v,u=null,t=C.a([],y.J),s=new A.asE(B.t2,t)
if(!this.aYJ(d,s))return u
if(s.f===B.t2)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.y
t===$&&C.d()
x=w.x
x===$&&C.d()
return this.b7r(d.DI(t,x),e)}else{v=d.DI(s.ch,s.ay)
t=s.f
if(t===B.CB)return A.cJr(v,s).nS()
else if(t===B.Kp)return A.cJp(v,s).nS()}return u},
aYF(d){if(d.iu(4)!=="RIFF")return!1
d.Y()
if(d.iu(4)!=="WEBP")return!1
return!0},
aYJ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.iu(4)
u=d.Y()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.bFA(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=B.Kp
break
case"VP8L":e.ay=r
e.ch=u
e.f=B.CB
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.au(s)
o=p.gt(s)
p=p.gt(s)
s=new C.lU(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=B.bl1
n=d.Y()
s=new Uint8Array(4)
s[0]=n>>>16&255
s[1]=n>>>8&255
s[2]=n&255
s[3]=n>>>24&255
e.c=new C.I1(s)
e.y=d.a9()
break
case"ANMF":if(!this.bEH(d,e,u))return!1
break
case"ICCP":e.toString
m=d.h6(u)
d.d=d.d+(m.c-m.d)
e.r=m.bL()
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
return e.f!==B.t2},
bFA(d,e){var x,w,v,u,t=d.b1()
if((t&192)!==0)return!1
x=D.c.U(t,4)
w=D.c.U(t,1)
if((t&1)!==0)return!1
if(d.rQ()!==0)return!1
v=d.rQ()
u=d.rQ()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
bEH(d,e,f){var x=new A.asD(d.rQ()*2,d.rQ()*2,d.rQ()+1,d.rQ()+1,d.rQ())
x.bux(d,f)
if(x.w!==0)return!1
e.z.push(x)
return!0}}
A.c9n.prototype={
buD(d,e){var x=this,w=d.a.gjD(),v=x.b,u=(d.gbV()-1)*v,t=(d.gaV()-1)*w,s=x.e
switch(e){case 2:s!==$&&C.b4()
x.e=u
x.f!==$&&C.b4()
x.f=-v
x.r!==$&&C.b4()
x.r=w
break
case 3:s!==$&&C.b4()
x.e=t+u
x.f!==$&&C.b4()
x.f=-v
x.r!==$&&C.b4()
x.r=-w
break
case 4:s!==$&&C.b4()
x.e=t
x.f!==$&&C.b4()
x.f=v
x.r!==$&&C.b4()
x.r=-w
break
case 5:s!==$&&C.b4()
x.e=0
x.f!==$&&C.b4()
x.f=w
x.r!==$&&C.b4()
x.r=v
break
case 6:s!==$&&C.b4()
x.e=t
x.f!==$&&C.b4()
x.f=-w
x.r!==$&&C.b4()
x.r=v
break
case 7:s!==$&&C.b4()
x.e=t+u
x.f!==$&&C.b4()
x.f=-w
x.r!==$&&C.b4()
x.r=-v
break
case 8:s!==$&&C.b4()
x.e=u
x.f!==$&&C.b4()
x.f=w
x.r!==$&&C.b4()
x.r=-v
break
default:s!==$&&C.b4()
x.e=0
x.f!==$&&C.b4()
x.f=v
x.r!==$&&C.b4()
x.r=w
break}}}
A.b8h.prototype={
N(){return"FlipDirection."+this.b}}
A.bpo.prototype={
b_(d){var x,w=this,v=w.a
if(v===w.c.length)w.b1n(v+1)
v=w.c
x=w.a++
v.$flags&2&&C.z(v)
v[x]=d&255},
hT(d){var x,w=this,v=J.aM(d),u=w.a+v
if(u>w.c.length)w.b1n(u)
u=w.c
x=w.a
D.n.dd(u,x,x+v,d)
w.a+=v},
ko(d){var x=this
if(x.b){x.b_(D.c.U(d,8)&255)
x.b_(d&255)
return}x.b_(d&255)
x.b_(D.c.U(d,8)&255)},
kp(d){var x=this
if(x.b){x.b_(D.c.U(d,24)&255)
x.b_(D.c.U(d,16)&255)
x.b_(D.c.U(d,8)&255)
x.b_(d&255)
return}x.b_(d&255)
x.b_(D.c.U(d,8)&255)
x.b_(D.c.U(d,16)&255)
x.b_(D.c.U(d,24)&255)},
coF(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.cS(D.hF.ga5(v),0,null)
if(w.b){w.b_(x[3])
w.b_(x[2])
w.b_(x[1])
w.b_(x[0])
return}w.b_(x[0])
w.b_(x[1])
w.b_(x[2])
w.b_(x[3])},
coG(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.cS(D.h_.ga5(v),0,null)
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
b1n(d){var x=this.c,w=Math.max(x.length*3,d+8192),v=new Uint8Array(w)
D.n.dd(v,0,this.a,x)
this.c=v},
gt(d){return this.a}}
var z=a.updateTypes(["~(lU)","e(e,q8,e)","~(e,e,e,e,e,dE)","~(e,A)","zn?()","R3?()","VY?()"])
A.aZT.prototype={
$0(){return this.a.bwy(this.b)},
$S:z+4}
A.aZR.prototype={
$0(){return this.a.bwx(this.b)},
$S:1710}
A.aZQ.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.ig(x.ch.on(d),x.ch.ol(d),x.ch.oj(d),x.ch.oi(d))}else w.ig(d,e,f,g)
w.l();++u.a}},
$S:1711}
A.aZS.prototype={
$0(){return this.a.bww(this.b,this.c)},
$S:32}
A.b7v.prototype={
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
$S:1712}
A.b7t.prototype={
$0(){var x=this.a,w=new A.b7u(C.a([],y.m))
w.btM(this.b,x.b)
return x.a=w},
$S:101}
A.b7r.prototype={
$0(){return this.a.bDw(this.b)},
$S:32}
A.b7s.prototype={
$0(){return this.a.bDv(this.b,this.c)},
$S:32}
A.baj.prototype={
$0(){return this.a.bFF(this.b)},
$S:z+5}
A.bah.prototype={
$0(){return this.a.bFE(this.b)},
$S:32}
A.bai.prototype={
$0(){return this.a.bFD(this.b,this.c)},
$S:32}
A.bch.prototype={
$0(){var x=this.a,w=C.d8(this.b,!1,null,0)
x.a=w
return x.b=A.cSc(w)},
$S:101}
A.bcg.prototype={
$0(){return this.a.bLl(this.b,this.c)},
$S:32}
A.bcf.prototype={
$0(){return this.a.bLm(this.b)},
$S:32}
A.bqL.prototype={
$0(){return this.a.bSG(this.b)},
$S:101}
A.bqJ.prototype={
$0(){return this.a.bSE(this.b)},
$S:32}
A.bqK.prototype={
$0(){return this.a.bSD(this.b,this.c)},
$S:32}
A.bqR.prototype={
$0(){return this.a.bSH(this.b,this.c)},
$S:32}
A.bqS.prototype={
$0(){return this.a.bSJ(this.b)},
$S:101}
A.bqQ.prototype={
$0(){return this.a.bSI(this.b)},
$S:32}
A.bqP.prototype={
$1(d){return d!==""},
$S:6}
A.bsm.prototype={
$0(){return this.a.bTg(this.b,this.c)},
$S:32}
A.bsn.prototype={
$0(){var x=this.a
return x.a=A.cVb(this.b,x.b)},
$S:101}
A.bsl.prototype={
$0(){var x=this.a.a
return x==null?null:x.c8l()},
$S:32}
A.bsR.prototype={
$0(){return this.a.bZ5(this.b)},
$S:101}
A.bsP.prototype={
$0(){return this.a.bAK(this.b)},
$S:32}
A.bsQ.prototype={
$0(){return this.a.bTr(this.b,this.c)},
$S:32}
A.bGf.prototype={
$0(){return this.a.c_a(this.b,this.c)},
$S:32}
A.bGg.prototype={
$0(){return this.a.c_c(this.b)},
$S:101}
A.bGe.prototype={
$0(){return this.a.c_b(this.b)},
$S:32}
A.bGp.prototype={
$0(){return this.a.c_m(this.b)},
$S:32}
A.bGq.prototype={
$0(){return this.a.c_l(this.b,this.c)},
$S:32}
A.bKN.prototype={
$0(){return this.a.c1Q(this.b)},
$S:z+6}
A.bKL.prototype={
$0(){return this.a.bAL(this.b)},
$S:32}
A.bKM.prototype={
$0(){return this.a.c1P(this.b,this.c)},
$S:32}
A.cxn.prototype={
$1(d){return A.d1h(d,this.a.a)},
$S:1713};(function installTearOffs(){var x=a._static_1,w=a._instance_2u,v=a.installStaticTearOff
x(A,"dDA","dnM",0)
x(A,"dDt","dnE",0)
x(A,"dDr","dnC",0)
x(A,"dDy","dnK",0)
x(A,"dDz","dnL",0)
x(A,"dDx","dnJ",0)
x(A,"dDw","dnI",0)
x(A,"dDv","dnH",0)
x(A,"dDC","dnO",0)
x(A,"dDB","dnN",0)
x(A,"dDu","dnF",0)
x(A,"dDs","dnD",0)
x(A,"dDN","dnZ",0)
x(A,"dDL","dnX",0)
x(A,"dDD","dnP",0)
x(A,"dDF","dnR",0)
x(A,"dDE","dnQ",0)
x(A,"dDG","dnS",0)
x(A,"dDO","do_",0)
x(A,"dDM","dnY",0)
x(A,"dDH","dnT",0)
x(A,"dDI","dnU",0)
x(A,"dDJ","dnV",0)
x(A,"dDK","dnW",0)
w(A.aao.prototype,"gbT8","bT9",3)
w(A.asC.prototype,"gcb3","cb4",3)
v(A,"cMi",3,null,["$3"],["do0"],1,0)
v(A,"dDP",3,null,["$3"],["do1"],1,0)
v(A,"dDU",3,null,["$3"],["do6"],1,0)
v(A,"dDV",3,null,["$3"],["do7"],1,0)
v(A,"dDW",3,null,["$3"],["do8"],1,0)
v(A,"dDX",3,null,["$3"],["do9"],1,0)
v(A,"dDY",3,null,["$3"],["doa"],1,0)
v(A,"dDZ",3,null,["$3"],["dob"],1,0)
v(A,"dE_",3,null,["$3"],["doc"],1,0)
v(A,"dE0",3,null,["$3"],["dod"],1,0)
v(A,"dDQ",3,null,["$3"],["do2"],1,0)
v(A,"dDR",3,null,["$3"],["do3"],1,0)
v(A,"dDS",3,null,["$3"],["do4"],1,0)
v(A,"dDT",3,null,["$3"],["do5"],1,0)
v(A,"dE4",6,null,["$6"],["doE"],2,0)
v(A,"dE5",6,null,["$6"],["doF"],2,0)
v(A,"dE3",6,null,["$6"],["doD"],2,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.BY,[A.wJ,A.an9,A.mv,A.IH,A.IG,A.uP,A.Rj,A.bfj,A.T4,A.a5z,A.EN,A.EO,A.vp,A.oS,A.Mi,A.kX,A.tU,A.MC,A.VX,A.b8h])
w(A.a0z,C.F)
w(A.aoo,A.a0z)
x(C.G,[A.AD,A.aZU,A.zn,A.a0Z,A.b6y,A.aqg,A.b7p,A.aqh,A.aqi,A.b7u,A.a1X,A.aK9,A.a2G,A.a2H,A.R3,A.bci,A.as_,A.c2D,A.a5A,A.bqN,A.aj6,A.xN,A.Tm,A.bsj,A.Tl,A.bso,A.avq,A.avt,A.avz,A.a5X,A.To,A.avy,A.tB,A.azL,A.bGn,A.azN,A.bGr,A.azO,A.bGs,A.bk0,A.bIE,A.aan,A.bIF,A.bIM,A.bIP,A.bIR,A.aam,A.bIQ,A.bIG,A.FX,A.aAp,A.aAr,A.aAq,A.aAs,A.aao,A.aAn,A.bIN,A.aAo,A.bKJ,A.aaB,A.arF,A.arG,A.a3_,A.a2O,A.a30,A.arH,A.VY,A.c9n,A.bpo])
x(C.ap1,[A.anc,A.b7q,A.bag,A.bce,A.bqI,A.bqO,A.bsk,A.bsO,A.bGd,A.bGo,A.bKK])
x(C.wL,[A.aZT,A.aZR,A.aZS,A.b7t,A.b7r,A.b7s,A.baj,A.bah,A.bai,A.bch,A.bcg,A.bcf,A.bqL,A.bqJ,A.bqK,A.bqR,A.bqS,A.bqQ,A.bsm,A.bsn,A.bsl,A.bsR,A.bsP,A.bsQ,A.bGf,A.bGg,A.bGe,A.bGp,A.bGq,A.bKN,A.bKL,A.bKM])
x(C.pq,[A.aZQ,A.b7v,A.bqP,A.cxn])
w(A.b3W,A.anc)
w(A.beT,A.b7p)
x(A.beT,[A.asu,A.beU,A.beV,A.beW,A.asw])
w(A.asv,A.a1X)
w(A.asx,A.a2H)
w(A.bcd,A.zn)
w(A.bfo,A.b6y)
w(A.asy,A.a5A)
w(A.beX,A.bqN)
w(A.KF,A.a0Z)
x(A.xN,[A.avo,A.avp,A.avr,A.avs,A.avv,A.avw])
x(A.Tm,[A.a5V,A.avu])
x(A.avz,[A.AQ,A.mW])
w(A.asC,A.aao)
w(A.asD,A.aaB)
w(A.asE,A.VY)})()
C.yN(b.typeUniverse,JSON.parse('{"a0z":{"dC":[],"F":["bq"],"F.E":"bq"},"aoo":{"dC":[],"F":["bq"],"F.E":"bq"},"asv":{"a1X":[]},"asx":{"a2H":[]},"asy":{"a5A":[]},"aj6":{"aS":[]},"avo":{"xN":[]},"avp":{"xN":[]},"avr":{"xN":[]},"avs":{"xN":[]},"avv":{"xN":[]},"avw":{"xN":[]},"a5V":{"Tm":[]},"avu":{"Tm":[]},"asD":{"aaB":[]}}'))
C.cpB(b.typeUniverse,JSON.parse('{"avz":1}'))
var y=(function rtii(){var x=C.ac
return{G:x("dC"),n:x("aqg"),v:x("IH"),D:x("aqi"),z:x("aqu"),Y:x("ei"),f:x("a2O"),R:x("arF"),u:x("arG"),O:x("a3_"),W:x("as_"),P:x("pD"),Q:x("Jq"),_:x("Ac"),h:x("C<aqh>"),m:x("C<a1X>"),b:x("C<a2H>"),A:x("C<a2O>"),g:x("C<lS>"),L:x("C<w<w<w<e>>>>"),o:x("C<w<w<e>>>"),S:x("C<w<e>>"),d:x("C<a5A>"),X:x("C<Tl>"),x:x("C<xN>"),l:x("C<avt>"),s:x("C<h>"),M:x("C<azO>"),a:x("C<dE>"),i:x("C<FX>"),F:x("C<aAo>"),J:x("C<aaB>"),t:x("C<e>"),w:x("C<q8?>"),y:x("C<~(lU)>"),B:x("w<aam>"),K:x("w<FX>"),H:x("w<e>"),e:x("Tl"),j:x("avq"),C:x("a5V"),c:x("Tm"),T:x("a5X"),k:x("To"),N:x("h"),r:x("azN"),E:x("q8"),p:x("dE"),V:x("aam"),ac:x("FX"),bQ:x("aAp"),bl:x("aAq"),bt:x("aAs"),U:x("ax<h>"),bc:x("aK9"),cB:x("A"),q:x("e"),ak:x("aan?"),Z:x("aAr?"),I:x("e?")}})();(function constants(){var x=a.makeConstList
B.tl=new A.an9(0,"direct")
B.Dp=new A.an9(1,"alpha")
B.Ly=new A.mv(0,"none")
B.Dq=new A.mv(3,"bitfields")
B.Dr=new A.mv(6,"alphaBitfields")
B.Mq=new A.aj6()
B.tF=new A.wJ(0,"rgba")
B.Mu=new A.wJ(1,"bgra")
B.Mv=new A.wJ(2,"abgr")
B.Mw=new A.wJ(3,"argb")
B.Mx=new A.wJ(4,"rgb")
B.My=new A.wJ(5,"bgr")
B.alv=new A.wJ(6,"grayAlpha")
B.alw=new A.wJ(7,"red")
B.apj=new A.aoo(4294967295)
B.at9=new A.IG(0,"red")
B.ata=new A.IG(1,"green")
B.atb=new A.IG(2,"blue")
B.atc=new A.IG(3,"alpha")
B.atd=new A.IG(4,"other")
B.OD=new A.IH(1,"half")
B.OE=new A.IH(2,"float")
B.OF=new A.uP(0,"none")
B.atD=new A.b8h(2,"both")
B.Pb=new C.aqH(1,"page")
B.aus=new C.arZ(1,"deflate")
B.Pk=new A.Rj(2,"cur")
B.Gb=new A.bfj(0,"yuv444")
B.Gm=x([0,2,8],y.t)
B.ayK=x([0,4,2,1],y.t)
B.aut=new A.Rj(0,"invalid")
B.auu=new A.Rj(1,"ico")
B.ayO=x([B.aut,B.auu,B.Pk],C.ac("C<Rj>"))
B.b5w=new A.T4(0,"none")
B.a9R=new A.T4(1,"background")
B.a9S=new A.T4(2,"previous")
B.azw=x([B.b5w,B.a9R,B.a9S],C.ac("C<T4>"))
B.Re=x([292,260,226,226],y.t)
B.Rf=x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],y.t)
B.azI=x([2,3,7],y.t)
B.Ri=x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],y.t)
B.aA_=x([3,3,11],y.t)
B.GY=x([128,128,128,128,128,128,128,128,128,128,128],y.t)
B.Se=x([B.GY,B.GY,B.GY],y.S)
B.aCk=x([253,136,254,255,228,219,128,128,128,128,128],y.t)
B.aEz=x([189,129,242,255,227,213,255,219,128,128,128],y.t)
B.aEH=x([106,126,227,252,214,209,255,255,128,128,128],y.t)
B.aIx=x([B.aCk,B.aEz,B.aEH],y.S)
B.aJt=x([1,98,248,255,236,226,255,255,128,128,128],y.t)
B.aAo=x([181,133,238,254,221,234,255,154,128,128,128],y.t)
B.aA6=x([78,134,202,247,198,180,255,219,128,128,128],y.t)
B.aNJ=x([B.aJt,B.aAo,B.aA6],y.S)
B.aCa=x([1,185,249,255,243,255,128,128,128,128,128],y.t)
B.aIG=x([184,150,247,255,236,224,128,128,128,128,128],y.t)
B.aTY=x([77,110,216,255,236,230,128,128,128,128,128],y.t)
B.aHs=x([B.aCa,B.aIG,B.aTY],y.S)
B.aHG=x([1,101,251,255,241,255,128,128,128,128,128],y.t)
B.aCi=x([170,139,241,252,236,209,255,255,128,128,128],y.t)
B.aHX=x([37,116,196,243,228,255,255,255,128,128,128],y.t)
B.aBs=x([B.aHG,B.aCi,B.aHX],y.S)
B.aFn=x([1,204,254,255,245,255,128,128,128,128,128],y.t)
B.aXm=x([207,160,250,255,238,128,128,128,128,128,128],y.t)
B.aX5=x([102,103,231,255,211,171,128,128,128,128,128],y.t)
B.aD6=x([B.aFn,B.aXm,B.aX5],y.S)
B.aB4=x([1,152,252,255,240,255,128,128,128,128,128],y.t)
B.aXO=x([177,135,243,255,234,225,128,128,128,128,128],y.t)
B.aHa=x([80,129,211,255,194,224,128,128,128,128,128],y.t)
B.aIw=x([B.aB4,B.aXO,B.aHa],y.S)
B.SW=x([1,1,255,128,128,128,128,128,128,128,128],y.t)
B.aLD=x([246,1,255,128,128,128,128,128,128,128,128],y.t)
B.aGq=x([255,128,128,128,128,128,128,128,128,128,128],y.t)
B.aZq=x([B.SW,B.aLD,B.aGq],y.S)
B.aCV=x([B.Se,B.aIx,B.aNJ,B.aHs,B.aBs,B.aD6,B.aIw,B.aZq],y.o)
B.aUa=x([198,35,237,223,193,187,162,160,145,155,62],y.t)
B.aCj=x([131,45,198,221,172,176,220,157,252,221,1],y.t)
B.aU8=x([68,47,146,208,149,167,221,162,255,223,128],y.t)
B.aFN=x([B.aUa,B.aCj,B.aU8],y.S)
B.aO0=x([1,149,241,255,221,224,255,255,128,128,128],y.t)
B.aPL=x([184,141,234,253,222,220,255,199,128,128,128],y.t)
B.aGe=x([81,99,181,242,176,190,249,202,255,255,128],y.t)
B.aS7=x([B.aO0,B.aPL,B.aGe],y.S)
B.aQD=x([1,129,232,253,214,197,242,196,255,255,128],y.t)
B.aWP=x([99,121,210,250,201,198,255,202,128,128,128],y.t)
B.aIB=x([23,91,163,242,170,187,247,210,255,255,128],y.t)
B.aGw=x([B.aQD,B.aWP,B.aIB],y.S)
B.aDL=x([1,200,246,255,234,255,128,128,128,128,128],y.t)
B.aQv=x([109,178,241,255,231,245,255,255,128,128,128],y.t)
B.azA=x([44,130,201,253,205,192,255,255,128,128,128],y.t)
B.aSY=x([B.aDL,B.aQv,B.azA],y.S)
B.aAN=x([1,132,239,251,219,209,255,165,128,128,128],y.t)
B.ayQ=x([94,136,225,251,218,190,255,255,128,128,128],y.t)
B.aR3=x([22,100,174,245,186,161,255,199,128,128,128],y.t)
B.aHD=x([B.aAN,B.ayQ,B.aR3],y.S)
B.aPK=x([1,182,249,255,232,235,128,128,128,128,128],y.t)
B.aIk=x([124,143,241,255,227,234,128,128,128,128,128],y.t)
B.aEr=x([35,77,181,251,193,211,255,205,128,128,128],y.t)
B.aEP=x([B.aPK,B.aIk,B.aEr],y.S)
B.aZr=x([1,157,247,255,236,231,255,255,128,128,128],y.t)
B.aCR=x([121,141,235,255,225,227,255,255,128,128,128],y.t)
B.aQB=x([45,99,188,251,195,217,255,224,128,128,128],y.t)
B.aBh=x([B.aZr,B.aCR,B.aQB],y.S)
B.ayR=x([1,1,251,255,213,255,128,128,128,128,128],y.t)
B.azR=x([203,1,248,255,255,128,128,128,128,128,128],y.t)
B.aPT=x([137,1,177,255,224,255,128,128,128,128,128],y.t)
B.aB7=x([B.ayR,B.azR,B.aPT],y.S)
B.aPk=x([B.aFN,B.aS7,B.aGw,B.aSY,B.aHD,B.aEP,B.aBh,B.aB7],y.o)
B.aDh=x([253,9,248,251,207,208,255,192,128,128,128],y.t)
B.aLE=x([175,13,224,243,193,185,249,198,255,255,128],y.t)
B.aZp=x([73,17,171,221,161,179,236,167,255,234,128],y.t)
B.aK0=x([B.aDh,B.aLE,B.aZp],y.S)
B.aOA=x([1,95,247,253,212,183,255,255,128,128,128],y.t)
B.aGO=x([239,90,244,250,211,209,255,255,128,128,128],y.t)
B.aTX=x([155,77,195,248,188,195,255,255,128,128,128],y.t)
B.aPJ=x([B.aOA,B.aGO,B.aTX],y.S)
B.aFq=x([1,24,239,251,218,219,255,205,128,128,128],y.t)
B.aN4=x([201,51,219,255,196,186,128,128,128,128,128],y.t)
B.aGN=x([69,46,190,239,201,218,255,228,128,128,128],y.t)
B.aOq=x([B.aFq,B.aN4,B.aGN],y.S)
B.aEC=x([1,191,251,255,255,128,128,128,128,128,128],y.t)
B.aHV=x([223,165,249,255,213,255,128,128,128,128,128],y.t)
B.aIP=x([141,124,248,255,255,128,128,128,128,128,128],y.t)
B.aQC=x([B.aEC,B.aHV,B.aIP],y.S)
B.aFQ=x([1,16,248,255,255,128,128,128,128,128,128],y.t)
B.aCO=x([190,36,230,255,236,255,128,128,128,128,128],y.t)
B.aCm=x([149,1,255,128,128,128,128,128,128,128,128],y.t)
B.aAO=x([B.aFQ,B.aCO,B.aCm],y.S)
B.aIE=x([1,226,255,128,128,128,128,128,128,128,128],y.t)
B.aKR=x([247,192,255,128,128,128,128,128,128,128,128],y.t)
B.aTP=x([240,128,255,128,128,128,128,128,128,128,128],y.t)
B.azW=x([B.aIE,B.aKR,B.aTP],y.S)
B.aSX=x([1,134,252,255,255,128,128,128,128,128,128],y.t)
B.aIh=x([213,62,250,255,255,128,128,128,128,128,128],y.t)
B.aXu=x([55,93,255,128,128,128,128,128,128,128,128],y.t)
B.aID=x([B.aSX,B.aIh,B.aXu],y.S)
B.aC2=x([B.aK0,B.aPJ,B.aOq,B.aQC,B.aAO,B.azW,B.aID,B.Se],y.o)
B.aIm=x([202,24,213,235,186,191,220,160,240,175,255],y.t)
B.aCh=x([126,38,182,232,169,184,228,174,255,187,128],y.t)
B.aAR=x([61,46,138,219,151,178,240,170,255,216,128],y.t)
B.aPq=x([B.aIm,B.aCh,B.aAR],y.S)
B.aH9=x([1,112,230,250,199,191,247,159,255,255,128],y.t)
B.aBf=x([166,109,228,252,211,215,255,174,128,128,128],y.t)
B.aHL=x([39,77,162,232,172,180,245,178,255,255,128],y.t)
B.aPm=x([B.aH9,B.aBf,B.aHL],y.S)
B.aHj=x([1,52,220,246,198,199,249,220,255,255,128],y.t)
B.aD2=x([124,74,191,243,183,193,250,221,255,255,128],y.t)
B.aEq=x([24,71,130,219,154,170,243,182,255,255,128],y.t)
B.aPl=x([B.aHj,B.aD2,B.aEq],y.S)
B.aEn=x([1,182,225,249,219,240,255,224,128,128,128],y.t)
B.aXr=x([149,150,226,252,216,205,255,171,128,128,128],y.t)
B.aZI=x([28,108,170,242,183,194,254,223,255,255,128],y.t)
B.aUT=x([B.aEn,B.aXr,B.aZI],y.S)
B.aZN=x([1,81,230,252,204,203,255,192,128,128,128],y.t)
B.aQn=x([123,102,209,247,188,196,255,233,128,128,128],y.t)
B.aTl=x([20,95,153,243,164,173,255,203,128,128,128],y.t)
B.aQs=x([B.aZN,B.aQn,B.aTl],y.S)
B.aG7=x([1,222,248,255,216,213,128,128,128,128,128],y.t)
B.aId=x([168,175,246,252,235,205,255,255,128,128,128],y.t)
B.aEu=x([47,116,215,255,211,212,255,255,128,128,128],y.t)
B.aCF=x([B.aG7,B.aId,B.aEu],y.S)
B.aFZ=x([1,121,236,253,212,214,255,255,128,128,128],y.t)
B.aHm=x([141,84,213,252,201,202,255,219,128,128,128],y.t)
B.aJR=x([42,80,160,240,162,185,255,205,128,128,128],y.t)
B.aEW=x([B.aFZ,B.aHm,B.aJR],y.S)
B.aYd=x([244,1,255,128,128,128,128,128,128,128,128],y.t)
B.ayM=x([238,1,255,128,128,128,128,128,128,128,128],y.t)
B.aKW=x([B.SW,B.aYd,B.ayM],y.S)
B.azr=x([B.aPq,B.aPm,B.aPl,B.aUT,B.aQs,B.aCF,B.aEW,B.aKW],y.o)
B.aAP=x([B.aCV,B.aPk,B.aC2,B.azr],y.L)
B.aAU=x([511,1023,2047,4095],y.t)
B.RO=x([85,75,65,55,45,35],y.t)
B.aBX=x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],y.t)
B.w8=x([0,1,2,3,4,5,6,7,8,9,10,11],y.t)
B.aCo=x([8,8,4,2],y.t)
B.az3=x([173,148,140],y.t)
B.az4=x([176,155,140,135],y.t)
B.az1=x([180,157,141,134,130],y.t)
B.azQ=x([254,254,243,230,196,177,153,140,133,130,129],y.t)
B.aCq=x([B.az3,B.az4,B.az1,B.azQ],y.S)
B.Sp=x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379],C.ac("C<V>"))
B.aCX=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],y.t)
B.SM=x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],y.t)
B.aDj=x([2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],y.t)
B.SY=x([280,256,256,256,40],y.t)
B.wH=x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],y.t)
B.T2=x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],y.t)
B.Gx=x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],y.t)
B.aDM=x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],y.t)
B.Gy=x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],y.t)
B.Tf=x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],y.t)
B.ate=new A.IH(0,"uint")
B.aE9=x([B.ate,B.OD,B.OE],C.ac("C<IH>"))
B.TU=x([A.dDH(),A.dDz(),A.dDO(),A.dDM(),A.dDJ(),A.dDI(),A.dDK()],y.y)
B.JI=new A.kX(0,"whiteIsZero")
B.bhH=new A.kX(1,"blackIsZero")
B.bhO=new A.kX(2,"rgb")
B.JK=new A.kX(3,"palette")
B.bhP=new A.kX(4,"transparencyMask")
B.adj=new A.kX(5,"cmyk")
B.bhQ=new A.kX(6,"yCbCr")
B.bhR=new A.kX(7,"reserved7")
B.bhS=new A.kX(8,"cieLab")
B.bhT=new A.kX(9,"iccLab")
B.bhI=new A.kX(10,"ituLab")
B.bhJ=new A.kX(11,"logL")
B.bhK=new A.kX(12,"logLuv")
B.bhL=new A.kX(13,"colorFilterArray")
B.bhM=new A.kX(14,"linearRaw")
B.bhN=new A.kX(15,"depth")
B.JJ=new A.kX(16,"unknown")
B.aFu=x([B.JI,B.bhH,B.bhO,B.JK,B.bhP,B.adj,B.bhQ,B.bhR,B.bhS,B.bhT,B.bhI,B.bhJ,B.bhK,B.bhL,B.bhM,B.bhN,B.JJ],C.ac("C<kX>"))
B.Ul=x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],y.t)
B.a9P=new A.a5z(0,"source")
B.a9Q=new A.a5z(1,"over")
B.aFT=x([B.a9P,B.a9Q],C.ac("C<a5z>"))
B.bhz=new A.Mi(0,"invalid")
B.adh=new A.Mi(1,"uint")
B.bD=new A.Mi(2,"int")
B.rL=new A.Mi(3,"float")
B.aFX=x([B.bhz,B.adh,B.bD,B.rL],C.ac("C<Mi>"))
B.aG4=x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],y.t)
B.UY=x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],y.t)
B.aGM=x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],y.t)
B.atf=new A.uP(1,"rle")
B.atg=new A.uP(2,"zips")
B.ath=new A.uP(3,"zip")
B.ati=new A.uP(4,"piz")
B.atj=new A.uP(5,"pxr24")
B.atk=new A.uP(6,"b44")
B.atl=new A.uP(7,"b44a")
B.aGP=x([B.OF,B.atf,B.atg,B.ath,B.ati,B.atj,B.atk,B.atl],C.ac("C<uP>"))
B.aJJ=x([231,120,48,89,115,113,120,152,112],y.t)
B.azs=x([152,179,64,126,170,118,46,70,95],y.t)
B.aGK=x([175,69,143,80,85,82,72,155,103],y.t)
B.aAx=x([56,58,10,171,218,189,17,13,152],y.t)
B.aHI=x([114,26,17,163,44,195,21,10,173],y.t)
B.aIb=x([121,24,80,195,26,62,44,64,85],y.t)
B.aHB=x([144,71,10,38,171,213,144,34,26],y.t)
B.aRB=x([170,46,55,19,136,160,33,206,71],y.t)
B.aDO=x([63,20,8,114,114,208,12,9,226],y.t)
B.aFo=x([81,40,11,96,182,84,29,16,36],y.t)
B.ayS=x([B.aJJ,B.azs,B.aGK,B.aAx,B.aHI,B.aIb,B.aHB,B.aRB,B.aDO,B.aFo],y.S)
B.aCN=x([134,183,89,137,98,101,106,165,148],y.t)
B.aQ8=x([72,187,100,130,157,111,32,75,80],y.t)
B.aIs=x([66,102,167,99,74,62,40,234,128],y.t)
B.azV=x([41,53,9,178,241,141,26,8,107],y.t)
B.aF5=x([74,43,26,146,73,166,49,23,157],y.t)
B.aE3=x([65,38,105,160,51,52,31,115,128],y.t)
B.aEf=x([104,79,12,27,217,255,87,17,7],y.t)
B.aGI=x([87,68,71,44,114,51,15,186,23],y.t)
B.aPo=x([47,41,14,110,182,183,21,17,194],y.t)
B.aLB=x([66,45,25,102,197,189,23,18,22],y.t)
B.aTs=x([B.aCN,B.aQ8,B.aIs,B.azV,B.aF5,B.aE3,B.aEf,B.aGI,B.aPo,B.aLB],y.S)
B.aJx=x([88,88,147,150,42,46,45,196,205],y.t)
B.aHO=x([43,97,183,117,85,38,35,179,61],y.t)
B.aEt=x([39,53,200,87,26,21,43,232,171],y.t)
B.aGl=x([56,34,51,104,114,102,29,93,77],y.t)
B.aHw=x([39,28,85,171,58,165,90,98,64],y.t)
B.aDX=x([34,22,116,206,23,34,43,166,73],y.t)
B.ayT=x([107,54,32,26,51,1,81,43,31],y.t)
B.aRP=x([68,25,106,22,64,171,36,225,114],y.t)
B.aCM=x([34,19,21,102,132,188,16,76,124],y.t)
B.aUg=x([62,18,78,95,85,57,50,48,51],y.t)
B.aDc=x([B.aJx,B.aHO,B.aEt,B.aGl,B.aHw,B.aDX,B.ayT,B.aRP,B.aCM,B.aUg],y.S)
B.aHp=x([193,101,35,159,215,111,89,46,111],y.t)
B.aC1=x([60,148,31,172,219,228,21,18,111],y.t)
B.aAM=x([112,113,77,85,179,255,38,120,114],y.t)
B.aUc=x([40,42,1,196,245,209,10,25,109],y.t)
B.aFU=x([88,43,29,140,166,213,37,43,154],y.t)
B.aDZ=x([61,63,30,155,67,45,68,1,209],y.t)
B.aEG=x([100,80,8,43,154,1,51,26,71],y.t)
B.azY=x([142,78,78,16,255,128,34,197,171],y.t)
B.aH5=x([41,40,5,102,211,183,4,1,221],y.t)
B.aDs=x([51,50,17,168,209,192,23,25,82],y.t)
B.aD8=x([B.aHp,B.aC1,B.aAM,B.aUc,B.aFU,B.aDZ,B.aEG,B.azY,B.aH5,B.aDs],y.S)
B.aEo=x([138,31,36,171,27,166,38,44,229],y.t)
B.aD4=x([67,87,58,169,82,115,26,59,179],y.t)
B.aNI=x([63,59,90,180,59,166,93,73,154],y.t)
B.aT1=x([40,40,21,116,143,209,34,39,175],y.t)
B.aA4=x([47,15,16,183,34,223,49,45,183],y.t)
B.aCg=x([46,17,33,183,6,98,15,32,183],y.t)
B.aZP=x([57,46,22,24,128,1,54,17,37],y.t)
B.aEL=x([65,32,73,115,28,128,23,128,205],y.t)
B.aIr=x([40,3,9,115,51,192,18,6,223],y.t)
B.aF2=x([87,37,9,115,59,77,64,21,47],y.t)
B.aH4=x([B.aEo,B.aD4,B.aNI,B.aT1,B.aA4,B.aCg,B.aZP,B.aEL,B.aIr,B.aF2],y.S)
B.aY9=x([104,55,44,218,9,54,53,130,226],y.t)
B.aBe=x([64,90,70,205,40,41,23,26,57],y.t)
B.aNG=x([54,57,112,184,5,41,38,166,213],y.t)
B.aDY=x([30,34,26,133,152,116,10,32,134],y.t)
B.aK1=x([39,19,53,221,26,114,32,73,255],y.t)
B.aDq=x([31,9,65,234,2,15,1,118,73],y.t)
B.aH2=x([75,32,12,51,192,255,160,43,51],y.t)
B.aE1=x([88,31,35,67,102,85,55,186,85],y.t)
B.aFA=x([56,21,23,111,59,205,45,37,192],y.t)
B.aFJ=x([55,38,70,124,73,102,1,34,98],y.t)
B.aYT=x([B.aY9,B.aBe,B.aNG,B.aDY,B.aK1,B.aDq,B.aH2,B.aE1,B.aFA,B.aFJ],y.S)
B.aFy=x([125,98,42,88,104,85,117,175,82],y.t)
B.aE8=x([95,84,53,89,128,100,113,101,45],y.t)
B.aHZ=x([75,79,123,47,51,128,81,171,1],y.t)
B.aB9=x([57,17,5,71,102,57,53,41,49],y.t)
B.aMU=x([38,33,13,121,57,73,26,1,85],y.t)
B.aXq=x([41,10,67,138,77,110,90,47,114],y.t)
B.aGQ=x([115,21,2,10,102,255,166,23,6],y.t)
B.aCP=x([101,29,16,10,85,128,101,196,26],y.t)
B.aEB=x([57,18,10,102,102,213,34,20,43],y.t)
B.aFS=x([117,20,15,36,163,128,68,1,26],y.t)
B.aGF=x([B.aFy,B.aE8,B.aHZ,B.aB9,B.aMU,B.aXq,B.aGQ,B.aCP,B.aEB,B.aFS],y.S)
B.aF_=x([102,61,71,37,34,53,31,243,192],y.t)
B.aWX=x([69,60,71,38,73,119,28,222,37],y.t)
B.aF3=x([68,45,128,34,1,47,11,245,171],y.t)
B.az0=x([62,17,19,70,146,85,55,62,70],y.t)
B.aZD=x([37,43,37,154,100,163,85,160,1],y.t)
B.aUW=x([63,9,92,136,28,64,32,201,85],y.t)
B.aQd=x([75,15,9,9,64,255,184,119,16],y.t)
B.aD_=x([86,6,28,5,64,255,25,248,1],y.t)
B.aKY=x([56,8,17,132,137,255,55,116,128],y.t)
B.aAW=x([58,15,20,82,135,57,26,121,40],y.t)
B.aHA=x([B.aF_,B.aWX,B.aF3,B.az0,B.aZD,B.aUW,B.aQd,B.aD_,B.aKY,B.aAW],y.S)
B.aI5=x([164,50,31,137,154,133,25,35,218],y.t)
B.aCZ=x([51,103,44,131,131,123,31,6,158],y.t)
B.aUP=x([86,40,64,135,148,224,45,183,128],y.t)
B.aGJ=x([22,26,17,131,240,154,14,1,209],y.t)
B.aC8=x([45,16,21,91,64,222,7,1,197],y.t)
B.aT2=x([56,21,39,155,60,138,23,102,213],y.t)
B.aYF=x([83,12,13,54,192,255,68,47,28],y.t)
B.aIt=x([85,26,85,85,128,128,32,146,171],y.t)
B.aGr=x([18,11,7,63,144,171,4,4,246],y.t)
B.aDe=x([35,27,10,146,174,171,12,26,128],y.t)
B.aG9=x([B.aI5,B.aCZ,B.aUP,B.aGJ,B.aC8,B.aT2,B.aYF,B.aIt,B.aGr,B.aDe],y.S)
B.aPj=x([190,80,35,99,180,80,126,54,45],y.t)
B.aRA=x([85,126,47,87,176,51,41,20,32],y.t)
B.aN6=x([101,75,128,139,118,146,116,128,85],y.t)
B.aQ3=x([56,41,15,176,236,85,37,9,62],y.t)
B.aB3=x([71,30,17,119,118,255,17,18,138],y.t)
B.aHz=x([101,38,60,138,55,70,43,26,142],y.t)
B.aGh=x([146,36,19,30,171,255,97,27,20],y.t)
B.aJv=x([138,45,61,62,219,1,81,188,64],y.t)
B.aUd=x([32,41,20,117,151,142,20,21,163],y.t)
B.aRI=x([112,19,12,61,195,128,48,4,24],y.t)
B.aOp=x([B.aPj,B.aRA,B.aN6,B.aQ3,B.aB3,B.aHz,B.aGh,B.aJv,B.aUd,B.aRI],y.S)
B.aH3=x([B.ayS,B.aTs,B.aDc,B.aD8,B.aH4,B.aYT,B.aGF,B.aHA,B.aG9,B.aOp],y.o)
B.Ce=new A.oS(0,"none")
B.kL=new A.oS(1,"palette")
B.adg=new A.oS(2,"rgb")
B.bhp=new A.oS(3,"gray")
B.bhq=new A.oS(4,"reserved4")
B.bhr=new A.oS(5,"reserved5")
B.bhs=new A.oS(6,"reserved6")
B.bht=new A.oS(7,"reserved7")
B.bhu=new A.oS(8,"reserved8")
B.kM=new A.oS(9,"paletteRle")
B.adf=new A.oS(10,"rgbRle")
B.bho=new A.oS(11,"grayRle")
B.aHc=x([B.Ce,B.kL,B.adg,B.bhp,B.bhq,B.bhr,B.bhs,B.bht,B.bhu,B.kM,B.adf,B.bho],C.ac("C<oS>"))
B.W8=x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250],y.t)
B.aHW=x([0,1,1,1,0],y.t)
B.aHY=x([A.dDr(),A.dDy(),A.dDA(),A.dDt(),A.dDw(),A.dDC(),A.dDv(),A.dDB(),A.dDs(),A.dDu()],y.y)
B.Gv=x([8,0,8,0],y.t)
B.aBd=x([5,3,5,3],y.t)
B.aA0=x([3,5,3,5],y.t)
B.R2=x([0,8,0,8],y.t)
B.RC=x([4,4,4,4],y.t)
B.aAK=x([4,4,0,0],y.t)
B.Wr=x([B.Gv,B.aBd,B.aA0,B.R2,B.Gv,B.RC,B.aAK,B.R2],y.S)
B.WB=x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],y.t)
B.aIK=x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],y.t)
B.yO=x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],y.t)
B.WG=x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],y.t)
B.WI=x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],y.t)
B.yW=x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],y.t)
B.WV=x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],y.t)
B.XQ=x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],y.t)
B.b5x=new A.EN(0,"none")
B.b5y=new A.EN(1,"sub")
B.b5z=new A.EN(2,"up")
B.b5A=new A.EN(3,"average")
B.b5B=new A.EN(4,"paeth")
B.XR=x([B.b5x,B.b5y,B.b5z,B.b5A,B.b5B],C.ac("C<EN>"))
B.fU=x([255,255,255,255,255,255,255,255,255,255,255],y.t)
B.o5=x([B.fU,B.fU,B.fU],y.S)
B.aGk=x([176,246,255,255,255,255,255,255,255,255,255],y.t)
B.aXM=x([223,241,252,255,255,255,255,255,255,255,255],y.t)
B.aCC=x([249,253,253,255,255,255,255,255,255,255,255],y.t)
B.aH_=x([B.aGk,B.aXM,B.aCC],y.S)
B.aFs=x([255,244,252,255,255,255,255,255,255,255,255],y.t)
B.aET=x([234,254,254,255,255,255,255,255,255,255,255],y.t)
B.Z0=x([253,255,255,255,255,255,255,255,255,255,255],y.t)
B.aCW=x([B.aFs,B.aET,B.Z0],y.S)
B.aUm=x([255,246,254,255,255,255,255,255,255,255,255],y.t)
B.aKF=x([239,253,254,255,255,255,255,255,255,255,255],y.t)
B.Yo=x([254,255,254,255,255,255,255,255,255,255,255],y.t)
B.aQa=x([B.aUm,B.aKF,B.Yo],y.S)
B.TZ=x([255,248,254,255,255,255,255,255,255,255,255],y.t)
B.aDG=x([251,255,254,255,255,255,255,255,255,255,255],y.t)
B.aIa=x([B.TZ,B.aDG,B.fU],y.S)
B.Gr=x([255,253,254,255,255,255,255,255,255,255,255],y.t)
B.aI1=x([251,254,254,255,255,255,255,255,255,255,255],y.t)
B.aDU=x([B.Gr,B.aI1,B.Yo],y.S)
B.aAu=x([255,254,253,255,254,255,255,255,255,255,255],y.t)
B.aFm=x([250,255,254,255,254,255,255,255,255,255,255],y.t)
B.zd=x([254,255,255,255,255,255,255,255,255,255,255],y.t)
B.aFV=x([B.aAu,B.aFm,B.zd],y.S)
B.aEA=x([B.o5,B.aH_,B.aCW,B.aQa,B.aIa,B.aDU,B.aFV,B.o5],y.o)
B.azq=x([217,255,255,255,255,255,255,255,255,255,255],y.t)
B.aGd=x([225,252,241,253,255,255,254,255,255,255,255],y.t)
B.aNx=x([234,250,241,250,253,255,253,254,255,255,255],y.t)
B.aRK=x([B.azq,B.aGd,B.aNx],y.S)
B.H4=x([255,254,255,255,255,255,255,255,255,255,255],y.t)
B.aCG=x([223,254,254,255,255,255,255,255,255,255,255],y.t)
B.aC9=x([238,253,254,254,255,255,255,255,255,255,255],y.t)
B.aJW=x([B.H4,B.aCG,B.aC9],y.S)
B.aF1=x([249,254,255,255,255,255,255,255,255,255,255],y.t)
B.aUf=x([B.TZ,B.aF1,B.fU],y.S)
B.aRX=x([255,253,255,255,255,255,255,255,255,255,255],y.t)
B.aI_=x([247,254,255,255,255,255,255,255,255,255,255],y.t)
B.aHE=x([B.aRX,B.aI_,B.fU],y.S)
B.aBY=x([252,255,255,255,255,255,255,255,255,255,255],y.t)
B.azX=x([B.Gr,B.aBY,B.fU],y.S)
B.Zb=x([255,254,254,255,255,255,255,255,255,255,255],y.t)
B.aC6=x([B.Zb,B.Z0,B.fU],y.S)
B.aJQ=x([255,254,253,255,255,255,255,255,255,255,255],y.t)
B.Ui=x([250,255,255,255,255,255,255,255,255,255,255],y.t)
B.aBV=x([B.aJQ,B.Ui,B.zd],y.S)
B.aAz=x([B.aRK,B.aJW,B.aUf,B.aHE,B.azX,B.aC6,B.aBV,B.o5],y.o)
B.aOr=x([186,251,250,255,255,255,255,255,255,255,255],y.t)
B.aDv=x([234,251,244,254,255,255,255,255,255,255,255],y.t)
B.aQc=x([251,251,243,253,254,255,254,255,255,255,255],y.t)
B.aDR=x([B.aOr,B.aDv,B.aQc],y.S)
B.aDJ=x([236,253,254,255,255,255,255,255,255,255,255],y.t)
B.aJP=x([251,253,253,254,254,255,255,255,255,255,255],y.t)
B.aFM=x([B.Gr,B.aDJ,B.aJP],y.S)
B.aPg=x([254,254,254,255,255,255,255,255,255,255,255],y.t)
B.aDB=x([B.Zb,B.aPg,B.fU],y.S)
B.aQu=x([254,254,255,255,255,255,255,255,255,255,255],y.t)
B.aDH=x([B.H4,B.aQu,B.zd],y.S)
B.Zd=x([B.fU,B.zd,B.fU],y.S)
B.aAw=x([B.aDR,B.aFM,B.aDB,B.aDH,B.Zd,B.o5,B.o5,B.o5],y.o)
B.aFf=x([248,255,255,255,255,255,255,255,255,255,255],y.t)
B.aE7=x([250,254,252,254,255,255,255,255,255,255,255],y.t)
B.aDr=x([248,254,249,253,255,255,255,255,255,255,255],y.t)
B.aFO=x([B.aFf,B.aE7,B.aDr],y.S)
B.aA7=x([255,253,253,255,255,255,255,255,255,255,255],y.t)
B.aSR=x([246,253,253,255,255,255,255,255,255,255,255],y.t)
B.aDT=x([252,254,251,254,254,255,255,255,255,255,255],y.t)
B.aSQ=x([B.aA7,B.aSR,B.aDT],y.S)
B.aZt=x([255,254,252,255,255,255,255,255,255,255,255],y.t)
B.aDl=x([248,254,253,255,255,255,255,255,255,255,255],y.t)
B.aBU=x([253,255,254,254,255,255,255,255,255,255,255],y.t)
B.aIn=x([B.aZt,B.aDl,B.aBU],y.S)
B.aYC=x([255,251,254,255,255,255,255,255,255,255,255],y.t)
B.aHr=x([245,251,254,255,255,255,255,255,255,255,255],y.t)
B.aHy=x([253,253,254,255,255,255,255,255,255,255,255],y.t)
B.aCu=x([B.aYC,B.aHr,B.aHy],y.S)
B.aCz=x([255,251,253,255,255,255,255,255,255,255,255],y.t)
B.aFx=x([252,253,254,255,255,255,255,255,255,255,255],y.t)
B.aPw=x([B.aCz,B.aFx,B.H4],y.S)
B.aBv=x([255,252,255,255,255,255,255,255,255,255,255],y.t)
B.aXV=x([249,255,254,255,255,255,255,255,255,255,255],y.t)
B.aEj=x([255,255,254,255,255,255,255,255,255,255,255],y.t)
B.az_=x([B.aBv,B.aXV,B.aEj],y.S)
B.aZF=x([255,255,253,255,255,255,255,255,255,255,255],y.t)
B.aDF=x([B.aZF,B.Ui,B.fU],y.S)
B.aBT=x([B.aFO,B.aSQ,B.aIn,B.aCu,B.aPw,B.az_,B.aDF,B.Zd],y.o)
B.aQE=x([B.aEA,B.aAz,B.aAw,B.aBT],y.L)
B.ahO=new A.mv(1,"rle8")
B.ahT=new A.mv(2,"rle4")
B.ahU=new A.mv(4,"jpeg")
B.ahV=new A.mv(5,"png")
B.ahW=new A.mv(7,"reserved7")
B.ahX=new A.mv(8,"reserved8")
B.ahY=new A.mv(9,"reserved9")
B.ahP=new A.mv(10,"reserved10")
B.ahQ=new A.mv(11,"cmyk")
B.ahR=new A.mv(12,"cmykRle8")
B.ahS=new A.mv(13,"cmykRle4")
B.Ys=x([B.Ly,B.ahO,B.ahT,B.Dq,B.ahU,B.ahV,B.Dr,B.ahW,B.ahX,B.ahY,B.ahP,B.ahQ,B.ahR,B.ahS],C.ac("C<mv>"))
B.H_=x([0,128,192,224,240,248,252,254,255],y.t)
B.YF=x([137,80,78,71,13,10,26,10],y.t)
B.H0=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],y.t)
B.ae4=new A.MC(0,"predictor")
B.bjT=new A.MC(1,"crossColor")
B.bjU=new A.MC(2,"subtractGreen")
B.ae5=new A.MC(3,"colorIndexing")
B.aTZ=x([B.ae4,B.bjT,B.bjU,B.ae5],C.ac("C<MC>"))
B.fX=x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],y.t)
B.aWT=x([A.dDD(),A.dDx(),A.dDN(),A.dDL(),A.dDF(),A.dDE(),A.dDG()],y.y)
B.Zt=x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],y.t)
B.aX2=x([null,A.dE4(),A.dE5(),A.dE3()],C.ac("C<~(e,e,e,e,e,dE)?>"))
B.Az=x([0,36,72,109,145,182,218,255],y.t)
B.iq=x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],y.t)
B.b65=new A.vp(0,"bitmap")
B.aa6=new A.vp(1,"grayscale")
B.b66=new A.vp(2,"indexed")
B.aa7=new A.vp(3,"rgb")
B.aa8=new A.vp(4,"cmyk")
B.b67=new A.vp(5,"multiChannel")
B.b68=new A.vp(6,"duoTone")
B.aa9=new A.vp(7,"lab")
B.aXT=x([B.b65,B.aa6,B.b66,B.aa7,B.aa8,B.b67,B.b68,B.aa9],C.ac("C<vp>"))
B.a_b=x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],y.t)
B.azM=x([2,6,2,6],y.t)
B.aBH=x([6,2,6,2],y.t)
B.azF=x([2,2,6,6],y.t)
B.azi=x([1,3,3,9],y.t)
B.aAB=x([4,0,12,0],y.t)
B.azZ=x([3,1,9,3],y.t)
B.aCn=x([8,8,0,0],y.t)
B.aAD=x([4,12,0,0],y.t)
B.az2=x([16,0,0,0],y.t)
B.ayY=x([12,4,0,0],y.t)
B.aBS=x([6,6,2,2],y.t)
B.aA1=x([3,9,1,3],y.t)
B.ayX=x([12,0,4,0],y.t)
B.aCA=x([9,3,3,1],y.t)
B.eo=x([B.RC,B.azM,B.Gv,B.aBH,B.azF,B.azi,B.aAB,B.azZ,B.aCn,B.aAD,B.az2,B.ayY,B.aBS,B.aA1,B.ayX,B.aCA],y.S)
B.o6=x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],y.t)
B.b1W=new C.dp([D.fN,1,D.hn,1,D.ho,1,D.ah,1,D.dl,2,D.jN,4,D.ls,1,D.lt,2,D.lu,4,D.i6,2,D.j0,4,D.jM,8],C.ac("dp<mH,e>"))
B.r0=new A.EO(0,"invalid")
B.a9T=new A.EO(1,"pbm")
B.a9U=new A.EO(2,"pgm2")
B.I_=new A.EO(3,"pgm5")
B.a9V=new A.EO(4,"ppm3")
B.I0=new A.EO(5,"ppm6")
B.acL=new C.rl(null,null)
B.JH=new A.tU(0,"bilevel")
B.bhA=new A.tU(1,"gray4bit")
B.bhB=new A.tU(2,"gray")
B.bhC=new A.tU(3,"grayAlpha")
B.bhD=new A.tU(4,"palette")
B.adi=new A.tU(5,"rgb")
B.bhE=new A.tU(6,"rgba")
B.bhF=new A.tU(7,"yCbCrSub")
B.rM=new A.tU(8,"generic")
B.bhG=new A.tU(9,"invalid")
B.t2=new A.VX(0,"undefined")
B.Kp=new A.VX(1,"lossy")
B.CB=new A.VX(2,"lossless")
B.bl1=new A.VX(3,"animated")})();(function staticFields(){$.cY9=!1
$.doe=C.a([A.cMi(),A.dDP(),A.dDU(),A.dDV(),A.dDW(),A.dDX(),A.dDY(),A.dDZ(),A.dE_(),A.dE0(),A.dDQ(),A.dDR(),A.dDS(),A.dDT(),A.cMi(),A.cMi()],C.ac("C<e(e,q8,e)>"))})();(function lazyInitializers(){var x=a.lazy,w=a.lazyFinal
x($,"dIC","cNb",()=>C.tv(511))
x($,"dID","cNc",()=>C.tv(511))
x($,"dIF","cNd",()=>C.cUm(2041))
x($,"dIG","cNe",()=>C.cUm(225))
x($,"dIE","cEu",()=>C.tv(766))
w($,"dIO","d6j",()=>C.cQ1(0,0,0,0))})()};
(a=>{a["SAT3nT/DaGZpvwbsWmco68gkU3E="]=a.current})($__dart_deferred_initializers__);