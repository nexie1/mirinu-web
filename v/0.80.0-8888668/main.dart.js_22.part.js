((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,E,A={x3:function x3(d,e){this.a=d
this.b=e},a0Z:function a0Z(d){this.a=d},aoV:function aoV(d){this.a=d},anG:function anG(d,e){this.a=d
this.b=e},
oq(d,e,f,g){var x
if(g)x=d<0||e<0
else x=d<1||e<1
if(x)throw C.o(C.bQ("Invalid image dimensions "+d+"x"+e))
if(f>0&&d*e>f)throw C.o(C.bQ("Image dimensions "+d+"x"+e+" exceed the maximum of "+f+" pixels"))},
AV:function AV(d){this.a=d
this.c=0},
cSK(d){var x,w,v=new A.b_x()
if(!A.cSL(d))C.X(C.bQ("Not a bitmap file."))
d.d+=2
x=d.Y()
w=$.hl()
w.$flags&2&&C.A(w)
w[0]=x
x=$.kG()
d.d+=4
w[0]=d.Y()
v.b=x[0]
return v},
cSL(d){if(d.c-d.d<2)return!1
return A.dk(d,null,0).a9()===19778},
deO(d,e){var x,w,v,u,t=e==null?A.cSK(d):e,s=d.d,r=d.Y(),q=d.Y(),p=$.hl()
p.$flags&2&&C.A(p)
p[0]=q
q=$.kG()
x=q[0]
p[0]=d.Y()
q=q[0]
w=d.a9()
v=d.a9()
u=d.Y()
if(u>=14)C.X(C.bQ("Unsupported BMP compression type: "+u))
u=B.YB[u]
d.Y()
p[0]=d.Y()
p[0]=d.Y()
p=d.Y()
d.Y()
s=new A.zH(t,x,q,r,w,v,u,p,s)
s.aW4(d,e)
return s},
mC:function mC(d,e){this.a=d
this.b=e},
b_x:function b_x(){this.b=$},
zH:function zH(d,e,f,g,h,i,j,k,l){var _=this
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
deN(d,e){return new A.anJ(d,e==null?268435456:e)},
anJ:function anJ(d,e){var _=this
_.a=$
_.b=null
_.c=d
_.d=e},
b_w:function b_w(d,e){this.a=d
this.b=e},
b_u:function b_u(d,e){this.a=d
this.b=e},
b_t:function b_t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b_v:function b_v(d,e,f){this.a=d
this.b=e
this.c=f},
b4z:function b4z(d,e){var _=this
_.a=$
_.b=null
_.c=d
_.d=e},
a1o:function a1o(){},
b7b:function b7b(){},
aqN:function aqN(d,e){this.b=d
this.c=e},
at0:function at0(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
IX:function IX(d,e){this.a=d
this.b=e},
IW:function IW(d,e){this.a=d
this.b=e},
aqO:function aqO(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
cUu(d,e,f,g){var x,w
switch(d.a){case 1:return new A.bfC(f,e)
case 2:return new A.at2(f,g==null?1:g,e)
case 3:return new A.at2(f,g==null?16:g,e)
case 4:x=g==null?32:g
w=new A.bfA(f,x,e)
w.bwN(e,f,x)
return w
case 5:return new A.bfB(f,g==null?16:g,e)
case 6:return new A.at0(f,g==null?32:g,!1,e)
case 7:return new A.at0(f,g==null?32:g,!0,e)
default:throw C.o(C.bQ("Invalid compression type: "+d.k(0)))}},
v5:function v5(d,e){this.a=d
this.b=e},
b82:function b82(){},
bfz:function bfz(){},
dhN(d,e,f,g){var x,w,v,u,t,s,r,q
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
r=J.kU(16384,y.D)
for(q=0;q<16384;++q)r[q]=new A.aqP()
A.dhO(d,e-20,w,v,s)
if(u>8*(e-(d.d-x)))throw C.o(C.bQ("Error in header for Huffman-encoded data (invalid number of bits)."))
A.dhK(s,w,v,r)
A.dhM(s,r,d,u,v,g,f)},
dhM(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p="Error in Huffman-encoded data (invalid code).",o=C.a([0,0],y.t),n=f.d+D.c.ab(g+7,8)
for(x=0;f.d<n;){A.cJM(o,f)
while(w=o[1],w>=14){v=e[D.c.lx(o[0],w-14)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cJN(v.b,h,o,f,j,x,i)}else{if(v.c==null)throw C.o(C.bQ(p))
for(t=0;t<v.b;++t){s=d[v.c[t]]&63
for(;;){w=o[1]
if(!(w<s&&f.d<n))break
A.cJM(o,f)}if(w>=s){u=v.c
w-=s
if(d[u[t]]>>>6===(D.c.lx(o[0],w)&D.c.c7(1,s)-1)>>>0){o[1]=w
r=A.cJN(u[t],h,o,f,j,x,i)
x=r
break}}}if(t===v.b)throw C.o(C.bQ(p))}}}q=8-g&7
o[0]=D.c.U(o[0],q)
o[1]=o[1]-q
while(w=o[1],w>0){v=e[D.c.bX(o[0],14-w)&16383]
u=v.a
if(u!==0){o[1]=w-u
x=A.cJN(v.b,h,o,f,j,x,i)}else throw C.o(C.bQ(p))}if(x!==i)throw C.o(C.bQ("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
cJN(d,e,f,g,h,i,j){var x,w,v,u,t,s="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.cJM(f,g)
x=f[1]-8
f[1]=x
w=D.c.lx(f[0],x)&255
if(i+w>j)throw C.o(C.bQ(s))
v=h[i-1]
for(x=h.$flags|0;u=w-1,w>0;w=u,i=t){t=i+1
x&2&&C.A(h)
h[i]=v}}else{if(i<j){h.toString
t=i+1
h.$flags&2&&C.A(h)
h[i]=d}else throw C.o(C.bQ(s))
i=t}return i},
dhK(d,e,f,g){var x,w,v,u,t,s,r,q="Error in Huffman-encoded data (invalid code table entry)."
for(x=y.t;e<=f;++e){w=d[e]
v=w>>>6
u=w&63
if(D.c.ff(v,u)!==0)throw C.o(C.bQ(q))
if(u>14){t=g[D.c.dS(v,u-14)]
if(t.a!==0)throw C.o(C.bQ(q));++t.b
w=t.c;(w==null?t.c=C.a([],x):w).push(e)}else if(u!==0){w=14-u
s=D.c.bX(v,w)
for(r=D.c.bX(1,w);r>0;--r,++s){t=g[s]
if(t.a!==0||t.c!=null)throw C.o(C.bQ(q))
t.a=u
t.b=e}}}},
dhO(d,e,f,g,h){var x,w,v,u,t,s="Error in Huffman-encoded data (unexpected end of code table data).",r="Error in Huffman-encoded data (code table is longer than expected).",q=d.d,p=C.a([0,0],y.t)
for(x=g+1;f<=g;++f){if(d.d-q>e)throw C.o(C.bQ(s))
w=A.cUv(6,p,d)
h[f]=w
if(w===63){if(d.d-q>e)throw C.o(C.bQ(s))
v=A.cUv(8,p,d)+6
if(f+v>x)throw C.o(C.bQ(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}else if(w>=59){v=w-59+2
if(f+v>x)throw C.o(C.bQ(r))
for(;u=v-1,v!==0;v=u,f=t){t=f+1
h[f]=0}--f}}A.dhL(h)},
dhL(d){var x,w,v,u,t,s=C.bs(59,0,!1,y.q)
for(x=0;x<65537;++x){w=d[x]
s[w]=s[w]+1}for(v=0,x=58;x>0;--x,v=u){u=v+s[x]>>>1
s[x]=v}for(x=0;x<65537;++x){t=d[x]
if(t>0){w=s[t]
s[t]=w+1
d[x]=(t|w<<6)>>>0}}},
cJM(d,e){d[0]=((d[0]<<8|e.b3())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
cUv(d,e,f){var x
while(x=e[1],x<d){e[0]=((e[0]<<8|J.S(f.a,f.d++))&-1)>>>0
e[1]=(e[1]+8&-1)>>>0}x-=d
e[1]=x
return(D.c.lx(e[0],x)&D.c.c7(1,d)-1)>>>0},
aqP:function aqP(){this.b=this.a=0
this.c=null},
dhP(d){var x
if(d.length<8)return!1
x=C.d9(d,!1,null,0)
if(x.Y()!==20000630)return!1
if(x.b3()!==2)return!1
if((x.t6()&4294967289)>>>0!==0)return!1
return!0},
b87:function b87(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
cWb(d,e,f,g){var x=new A.at1(d,C.a([],y.h),C.t(y.N,y.n),B.OL,e)
x.bwv(d,e,f,g)
return x},
a2m:function a2m(){},
b88:function b88(d,e){this.a=d
this.b=e},
at1:function at1(d,e,f,g,h){var _=this
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
bfA:function bfA(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
aKG:function aKG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
bfB:function bfB(d,e,f){var _=this
_.r=d
_.w=e
_.x=null
_.b=_.a=0
_.c=f},
bfC:function bfC(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
at2:function at2(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
b83:function b83(d){this.a=null
this.b=d},
b86:function b86(d,e){this.a=d
this.b=e},
b84:function b84(d,e){this.a=d
this.b=e},
b85:function b85(d,e,f){this.a=d
this.b=e
this.c=f},
cVe(d){var x=new Uint8Array(d*3)
return new A.a36(A.diM(d),d,null,new C.y0(x,d,3))},
diL(d){return new A.a36(d.a,d.b,d.c,C.cY2(d.d))},
diM(d){var x
for(x=1;x<=8;++x)if(D.c.c7(1,x)>=d)return x
return 0},
a36:function a36(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a37:function a37(){},
at3:function at3(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=-1
_.y=$},
Ri:function Ri(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
baY:function baY(d){var _=this
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
bb0:function bb0(d,e){this.a=d
this.b=e},
baZ:function baZ(d,e){this.a=d
this.b=e},
bb_:function bb_(d,e,f){this.a=d
this.b=e
this.c=f},
cVu(d){var x,w,v,u,t,s
if(d.a9()!==0)return null
x=d.a9()
if(x>=3)return null
w=B.az7[x]
if(w===B.Pq)return null
v=d.a9()
u=J.hH(v,y.W)
for(t=0;t<v;++t){J.S(d.a,d.d++)
s=J.S(d.a,d.d++)
J.S(d.a,d.d++);++d.d
d.a9()
d.a9()
u[t]=new A.asw(s,d.Y(),d.Y())}return new A.bcZ(w,v,u)},
Ry:function Ry(d,e){this.a=d
this.b=e},
bcZ:function bcZ(d,e,f){this.c=d
this.d=e
this.e=f},
asw:function asw(d,e,f){this.b=d
this.d=e
this.e=f},
bcU:function bcU(d,e,f,g,h,i,j,k,l){var _=this
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
bcV:function bcV(d){this.b=this.a=null
this.c=d},
bcY:function bcY(d,e){this.a=d
this.b=e},
bcX:function bcX(d,e,f){this.a=d
this.b=e
this.c=f},
bcW:function bcW(d,e){this.a=d
this.b=e},
cWs(d){var x=new Uint8Array(64),w=new Uint8Array(64),v=new Float32Array(64),u=new Float32Array(64),t=new Int32Array(64),s=new Int32Array(64)
x=new A.bg4(x,w,v,u,t,s,new Int32Array(2048))
x.e=x.atJ(B.a_k,B.wd)
x.f=x.atJ(B.Ut,B.wd)
x.r=x.atJ(B.Rn,B.SU)
x.w=x.atJ(B.Tn,B.Wg)
x.bOS()
x.bp4(d)
return x},
djX(d,e){return d>0?d:d+D.c.bX(1,e)-1},
bg_:function bg_(d,e){this.a=d
this.b=e},
bg4:function bg4(d,e,f,g,h,i,j){var _=this
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
c4l:function c4l(d,e){this.a=d
this.b=e},
Tk:function Tk(d,e){this.a=d
this.b=e},
a5Z:function a5Z(d,e){this.a=d
this.b=e},
a6_:function a6_(){},
at4:function at4(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
F0:function F0(d,e){this.a=d
this.b=e},
brt:function brt(){},
bfD:function bfD(d,e,f){var _=this
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
cYd(d){var x=y.N,w=C.a([],y.d),v=C.a([],y.t),u=d==null?268435456:d
return new A.bro(new A.bfD(C.t(x,x),w,v),u)},
bro:function bro(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=$
_.f=0},
brr:function brr(d,e){this.a=d
this.b=e},
brp:function brp(d,e){this.a=d
this.b=e},
brq:function brq(d,e,f){this.a=d
this.b=e
this.c=f},
ajA:function ajA(){},
F1:function F1(d,e){this.a=d
this.b=e},
KW:function KW(d){this.b=this.a=0
this.e=d},
bru:function bru(d,e){var _=this
_.b=_.a=null
_.c=d
_.d=e},
brx:function brx(d,e,f){this.a=d
this.b=e
this.c=f},
bry:function bry(d,e){this.a=d
this.b=e},
brw:function brw(d,e){this.a=d
this.b=e},
brv:function brv(){},
avV:function avV(){this.b=this.a=null},
avW:function avW(){this.b=this.a=null},
y7:function y7(){},
avY:function avY(){this.b=this.a=null},
avZ:function avZ(){this.b=this.a=null},
aw1:function aw1(){this.b=this.a=null},
aw2:function aw2(){this.b=this.a=null},
a6k:function a6k(d){this.b=d},
aw0:function aw0(){this.b=$
this.c=null},
bt1:function bt1(){var _=this
_.w=_.r=_.f=_.e=$},
TB:function TB(d){this.a=d
this.c=null},
cYu(d,e){var x=C.a([],y.l),w=e==null?268435456:e
w=new A.bt6(x,C.t(y.q,y.j),d.length,w)
w.bx2(d,e)
return w},
cLi(d,e,f,g){var x=d/255,w=e/255,v=f/255,u=g/255,t=w*(1-v),s=x*(1-u)
return D.e.H(D.e.aE((2*x<v?2*w*x+t+s:u*v-2*(v-x)*(u-w)+t+s)*255,0,255))},
bt7(d,e){if(e===0)return 0
return D.c.H(D.c.aE(D.e.H(255*(1-(1-d/255)/(e/255))),0,255))},
bt9(d,e){return D.c.H(D.c.aE(d+e-255,0,255))},
cLk(d,e){return D.c.H(D.c.aE(255-(255-e)*(255-d),0,255))},
bt8(d,e){if(e===255)return 255
return D.e.H(D.e.aE(d/255/(1-e/255)*255,0,255))},
cLl(d,e){var x=d/255,w=e/255,v=1-w
return D.e.ar(255*(v*w*x+w*(1-v*(1-x))))},
cLg(d,e){var x=e/255,w=d/255
if(w<0.5)return D.e.ar(510*x*w)
else return D.e.ar(255*(1-2*(1-x)*(1-w)))},
cLm(d,e){if(e<128)return A.bt7(d,2*e)
else return A.bt8(d,2*(e-128))},
cLh(d,e){var x
if(e<128)return A.bt9(d,2*e)
else{x=2*(e-128)
return x+d>255?255:d+x}},
cLj(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
cLf(d,e){return D.e.ar(e+d-2*e*d/255)},
q2(d,e,f){var x
if(d==null)x=0
else x=f===1?d[e]:(d[e]<<8|d[e+1])>>>8
return x},
cYv(b5,b6,b7,b8,b9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=C.t(y.q,y.e)
for(x=b9.length,w=0;v=b9.length,w<v;b9.length===x||(0,C.r)(b9),++w){u=b9[w]
b4.j(0,u.a,u)}if(b6===8)t=1
else t=b6===16?2:-1
s=C.hG(b3,b3,D.ak,0,D.bN,b8,b3,0,v,b3,D.ak,b7,!1)
if(t===-1)throw C.o(C.bQ("PSD: unsupported bit depth: "+C.v(b6)))
r=b4.h(0,0)
q=b4.h(0,1)
p=b4.h(0,2)
o=b4.h(0,-1)
n=C.a([0,0,0],y.t)
m=-t
for(x=s.a,x=x.gL(x),l=v>=5,k=v===4,j=v>=2,v=v>=4;x.l();){i=x.gq()
m+=t
switch(b5){case B.aaf:i.saA(A.q2(r.c,m,t))
i.saO(A.q2(q.c,m,t))
i.saN(A.q2(p.c,m,t))
i.saL(v?A.q2(o.c,m,t):255)
if(i.gaL()!==0){i.saA((i.gaA()+i.gaL()-255)*255/i.gaL())
i.saO((i.gaO()+i.gaL()-255)*255/i.gaL())
i.saN((i.gaN()+i.gaL()-255)*255/i.gaL())}break
case B.aah:h=A.q2(r.c,m,t)
g=A.q2(q.c,m,t)
f=A.q2(p.c,m,t)
e=v?A.q2(o.c,m,t):255
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
a8=[D.e.ar(D.e.aE(a5*255,0,255)),D.e.ar(D.e.aE(a6*255,0,255)),D.e.ar(D.e.aE(a7*255,0,255))]
i.saA(a8[0])
i.saO(a8[1])
i.saN(a8[2])
i.saL(e)
break
case B.aae:a9=A.q2(r.c,m,t)
e=j?A.q2(o.c,m,t):255
i.saA(a9)
i.saO(a9)
i.saN(a9)
i.saL(e)
break
case B.aag:b0=A.q2(r.c,m,t)
b1=A.q2(q.c,m,t)
d=A.q2(p.c,m,t)
b2=A.q2(b4.h(0,k?-1:3).c,m,t)
e=l?A.q2(o.c,m,t):255
A.d4R(255-b0,255-b1,255-d,255-b2,n)
i.saA(n[0])
i.saO(n[1])
i.saN(n[2])
i.saL(e)
break
default:throw C.o(C.bQ("Unhandled color mode: "+C.v(b5)))}}return s},
vJ:function vJ(d,e){this.a=d
this.b=e},
bt6:function bt6(d,e,f,g){var _=this
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
avX:function avX(d){this.a=d},
aw_:function aw_(d,e,f){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=d
_.ch=e
_.cx=null
_.cy=f},
dmG(d,e){var x,w
switch(d){case"lsct":x=new A.aw0()
w=e.c-e.d
x.b=e.Y()
if(w>=12){if(e.iz(4)!=="8BIM")C.X(C.bQ("Invalid key in layer additional data"))
x.c=e.iz(4)}if(w>=16)e.Y()
return x
default:return new A.a6k(e)}},
TC:function TC(){},
bt2:function bt2(d){this.a=null
this.b=d},
bt4:function bt4(d,e,f){this.a=d
this.b=e
this.c=f},
bt5:function bt5(d,e){this.a=d
this.b=e},
bt3:function bt3(d,e){this.a=d
this.b=e},
aw5:function aw5(){},
B6:function B6(d,e,f){this.a=d
this.b=e
this.c=f},
n1:function n1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6m:function a6m(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
TE:function TE(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
aw4:function aw4(){this.y=this.b=this.a=0},
B7(d,e){return(B.yT[d>>>8]<<17|B.yT[e>>>8]<<16|B.yT[d&255]<<1|B.yT[e&255])>>>0},
tL:function tL(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
btw:function btw(d){this.b=this.a=null
this.c=d},
btz:function btz(d,e){this.a=d
this.b=e},
btx:function btx(d,e){this.a=d
this.b=e},
bty:function bty(d,e,f){this.a=d
this.b=e
this.c=f},
aAh:function aAh(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
p1:function p1(d,e){this.a=d
this.b=e},
bHV:function bHV(d){this.a=null
this.b=$
this.c=d},
bHX:function bHX(d,e,f){this.a=d
this.b=e
this.c=f},
bHY:function bHY(d,e){this.a=d
this.b=e},
bHW:function bHW(d,e){this.a=d
this.b=e},
bI4:function bI4(d){this.a=d
this.c=this.b=0},
aAj:function aAj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
cMs(d,e,f){var x=new A.bI8(e,f,d),w=y.I
x.e=C.bs(e,null,!1,w)
x.f=C.bs(e,null,!1,w)
return x},
bI8:function bI8(d,e,f){var _=this
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
aAk:function aAk(d,e,f,g){var _=this
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
Mx:function Mx(d,e){this.a=d
this.b=e},
l3:function l3(d,e){this.a=d
this.b=e},
u5:function u5(d,e){this.a=d
this.b=e},
bI9:function bI9(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
cX2(){return new A.bkH(new Uint8Array(4096))},
bkH:function bkH(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
bI5:function bI5(d){this.a=null
this.c=$
this.d=d},
bI6:function bI6(d,e){this.a=d
this.b=e},
bI7:function bI7(d,e,f){this.a=d
this.b=e
this.c=f},
cME(d,e){var x=new Int32Array(4),w=new Int32Array(4),v=new Int8Array(4),u=new Int8Array(4),t=C.bs(8,null,!1,y.ak),s=C.bs(4,null,!1,y.Z)
return new A.bKl(d,e,new A.bKt(),new A.bKw(),new A.bKn(x,w),new A.bKy(v,u),t,s,new Uint8Array(4))},
p3(d,e,f,g,h){var x,w,v
for(x=d.$flags|0,w=0;w<h;++w){v=f[g+w]
x&2&&C.A(d)
d[e+w]=v}},
d0F(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
bKl:function bKl(d,e,f,g,h,i,j,k,l){var _=this
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
_.bw=null
_.E=$
_.a5=_.a2=null
_.ad=$},
d0D(d){var x=new A.aaN(d)
x.b=254
x.c=0
x.d=-8
return x},
aaN:function aaN(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
ex(d,e,f){return D.c.nu(D.c.U(d+2*e+f+2,2),32)},
drx(d){var x,w=C.a([A.ex(J.S(d.a,d.d+-33),J.S(d.a,d.d+-32),J.S(d.a,d.d+-31)),A.ex(J.S(d.a,d.d+-32),J.S(d.a,d.d+-31),J.S(d.a,d.d+-30)),A.ex(J.S(d.a,d.d+-31),J.S(d.a,d.d+-30),J.S(d.a,d.d+-29)),A.ex(J.S(d.a,d.d+-30),J.S(d.a,d.d+-29),J.S(d.a,d.d+-28))],y.t)
for(x=0;x<4;++x)d.aBd(x*32,4,w)},
drp(d){var x=J.S(d.a,d.d+-33),w=J.S(d.a,d.d+-1),v=J.S(d.a,d.d+31),u=J.S(d.a,d.d+63),t=J.S(d.a,d.d+95),s=A.dk(d,null,0),r=s.aDa(),q=A.ex(x,w,v)
r.$flags&2&&C.A(r)
r[0]=16843009*q
s.d+=32
q=s.aDa()
r=A.ex(w,v,u)
q.$flags&2&&C.A(q)
q[0]=16843009*r
s.d+=32
r=s.aDa()
q=A.ex(v,u,t)
r.$flags&2&&C.A(r)
r[0]=16843009*q
s.d+=32
q=s.aDa()
r=A.ex(u,t,t)
q.$flags&2&&C.A(q)
q[0]=16843009*r},
drn(d){var x,w,v,u
for(x=4,w=0;w<4;++w)x+=J.S(d.a,d.d+(w-32))+J.S(d.a,d.d+(-1+w*32))
x=D.c.U(x,3)
for(w=0;w<4;++w){v=d.a
u=d.d+w*32
J.CO(v,u,u+4,x)}},
cMF(d,e){var x,w,v,u,t,s=255-J.S(d.a,d.d+-33)
for(x=0,w=0;w<e;++w){v=s+J.S(d.a,d.d+(x-1))
for(u=0;u<e;++u){t=$.cHG()[v+J.S(d.a,d.d+(-32+u))]
J.dI(d.a,d.d+(x+u),t)}x+=32}},
drv(d){A.cMF(d,4)},
drw(d){A.cMF(d,8)},
dru(d){A.cMF(d,16)},
drt(d){var x,w=J.S(d.a,d.d+-1),v=J.S(d.a,d.d+31),u=J.S(d.a,d.d+63),t=J.S(d.a,d.d+95),s=J.S(d.a,d.d+-33),r=J.S(d.a,d.d+-32),q=J.S(d.a,d.d+-31),p=J.S(d.a,d.d+-30),o=J.S(d.a,d.d+-29)
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
drs(d){var x,w=J.S(d.a,d.d+-32),v=J.S(d.a,d.d+-31),u=J.S(d.a,d.d+-30),t=J.S(d.a,d.d+-29),s=J.S(d.a,d.d+-28),r=J.S(d.a,d.d+-27),q=J.S(d.a,d.d+-26),p=J.S(d.a,d.d+-25)
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
drz(d){var x=J.S(d.a,d.d+-1),w=J.S(d.a,d.d+31),v=J.S(d.a,d.d+63),u=J.S(d.a,d.d+-33),t=J.S(d.a,d.d+-32),s=J.S(d.a,d.d+-31),r=J.S(d.a,d.d+-30),q=J.S(d.a,d.d+-29),p=D.c.nu(D.c.U(u+t+1,1),32)
d.j(0,65,p)
d.j(0,0,p)
p=D.c.nu(D.c.U(t+s+1,1),32)
d.j(0,66,p)
d.j(0,1,p)
p=D.c.nu(D.c.U(s+r+1,1),32)
d.j(0,67,p)
d.j(0,2,p)
d.j(0,3,D.c.nu(D.c.U(r+q+1,1),32))
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
dry(d){var x,w=J.S(d.a,d.d+-32),v=J.S(d.a,d.d+-31),u=J.S(d.a,d.d+-30),t=J.S(d.a,d.d+-29),s=J.S(d.a,d.d+-28),r=J.S(d.a,d.d+-27),q=J.S(d.a,d.d+-26),p=J.S(d.a,d.d+-25)
d.j(0,0,D.c.nu(D.c.U(w+v+1,1),32))
x=D.c.nu(D.c.U(v+u+1,1),32)
d.j(0,64,x)
d.j(0,1,x)
x=D.c.nu(D.c.U(u+t+1,1),32)
d.j(0,65,x)
d.j(0,2,x)
x=D.c.nu(D.c.U(t+s+1,1),32)
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
drq(d){var x,w=J.S(d.a,d.d+-1),v=J.S(d.a,d.d+31),u=J.S(d.a,d.d+63),t=J.S(d.a,d.d+95)
d.j(0,0,D.c.nu(D.c.U(w+v+1,1),32))
x=D.c.nu(D.c.U(v+u+1,1),32)
d.j(0,32,x)
d.j(0,2,x)
x=D.c.nu(D.c.U(u+t+1,1),32)
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
dro(d){var x=J.S(d.a,d.d+-1),w=J.S(d.a,d.d+31),v=J.S(d.a,d.d+63),u=J.S(d.a,d.d+95),t=J.S(d.a,d.d+-33),s=J.S(d.a,d.d+-32),r=J.S(d.a,d.d+-31),q=J.S(d.a,d.d+-30),p=D.c.nu(D.c.U(x+t+1,1),32)
d.j(0,34,p)
d.j(0,0,p)
p=D.c.nu(D.c.U(w+x+1,1),32)
d.j(0,66,p)
d.j(0,32,p)
p=D.c.nu(D.c.U(v+w+1,1),32)
d.j(0,98,p)
d.j(0,64,p)
d.j(0,96,D.c.nu(D.c.U(u+v+1,1),32))
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
drK(d){var x
for(x=0;x<16;++x)d.RR(x*32,16,d,-32)},
drI(d){var x,w,v,u,t
for(x=0,w=16;w>0;--w){v=J.S(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.CO(u,t,t+16,v)
x+=32}},
bKr(d,e){var x,w,v
for(x=0;x<16;++x){w=e.a
v=e.d+x*32
J.CO(w,v,v+16,d)}},
drA(d){var x,w
for(x=16,w=0;w<16;++w)x+=J.S(d.a,d.d+(-1+w*32))+J.S(d.a,d.d+(w-32))
A.bKr(D.c.U(x,5),d)},
drC(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.S(d.a,d.d+(-1+w*32))
A.bKr(D.c.U(x,4),d)},
drB(d){var x,w
for(x=8,w=0;w<16;++w)x+=J.S(d.a,d.d+(w-32))
A.bKr(D.c.U(x,4),d)},
drD(d){A.bKr(128,d)},
drL(d){var x
for(x=0;x<8;++x)d.RR(x*32,8,d,-32)},
drJ(d){var x,w,v,u,t
for(x=0,w=0;w<8;++w){v=J.S(d.a,d.d+(x-1))
u=d.a
t=d.d+x
J.CO(u,t,t+8,v)
x+=32}},
bKs(d,e){var x,w,v
for(x=0;x<8;++x){w=e.a
v=e.d+x*32
J.CO(w,v,v+8,d)}},
drE(d){var x,w
for(x=8,w=0;w<8;++w)x+=J.S(d.a,d.d+(w-32))+J.S(d.a,d.d+(-1+w*32))
A.bKs(D.c.U(x,4),d)},
drF(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.S(d.a,d.d+(w-32))
A.bKs(D.c.U(x,3),d)},
drG(d){var x,w
for(x=4,w=0;w<8;++w)x+=J.S(d.a,d.d+(-1+w*32))
A.bKs(D.c.U(x,3),d)},
drH(d){A.bKs(128,d)},
bKo(d,e){return D.c.U(d*e+1073741824,16)-16384},
bKp(d,e,f,g,h){var x=e+f+g*32
d.j(0,x,A.drm(J.S(d.a,d.d+x)+(D.c.U(h+65536,3)-8192)))},
bKq(d,e,f,g,h){A.bKp(d,0,0,e,f+g)
A.bKp(d,0,1,e,f+h)
A.bKp(d,0,2,e,f-h)
A.bKp(d,0,3,e,f-g)},
drr(){var x,w,v,u
if(!$.d0E){for(x=-255;x<=255;++x){w=$.cQq()
v=255+x
u=x<0?-x:x
w.$flags&2&&C.A(w)
w[v]=u
u=$.cQr()
w=D.c.U(w[v],1)
u.$flags&2&&C.A(u)
u[v]=w}for(x=-1020;x<=1020;++x){w=$.cQs()
if(x<-128)v=-128
else v=x>127?127:x
w.$flags&2&&C.A(w)
w[1020+x]=v}for(x=-112;x<=112;++x){w=$.cQt()
if(x<-16)v=-16
else v=x>15?15:x
w.$flags&2&&C.A(w)
w[112+x]=v}for(x=-255;x<=510;++x){w=$.cHG()
if(x<0)v=0
else v=x>255?255:x
w.$flags&2&&C.A(w)
w[255+x]=v}$.d0E=!0}},
drm(d){var x
if((d&-256)>>>0===0)x=d
else x=d<0?0:255
return x},
bKm:function bKm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
drl(){var x,w=J.kU(3,y.p)
for(x=0;x<3;++x)w[x]=new Uint8Array(11)
return new A.aaM(w)},
ds0(){var x,w,v,u,t=new Uint8Array(3),s=J.kU(4,y.B)
for(x=y.V,w=0;w<4;++w){v=J.kU(8,x)
for(u=0;u<8;++u)v[u]=A.drl()
s[w]=v}D.n.dl(t,0,3,255)
return new A.bKx(t,s)},
bKt:function bKt(){this.d=$},
bKw:function bKw(){this.b=null},
bKy:function bKy(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
aaM:function aaM(d){this.a=d},
bKx:function bKx(d,e){this.a=d
this.b=e},
bKn:function bKn(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
Gb:function Gb(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
aAV:function aAV(){this.b=this.a=0},
aAX:function aAX(d,e,f){this.a=d
this.b=e
this.c=f},
aAW:function aAW(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
aAY:function aAY(d,e,f){this.a=d
this.b=e
this.c=f},
cMG(d,e){var x,w=C.a([],y.A),v=C.a([],y.F),u=new Uint32Array(2),t=new A.aAT(d,u)
u=t.e=J.cV(D.bi.ga6(u),0,null)
x=d.b3()
u.$flags&2&&C.A(u)
u[0]=x
x=d.b3()
u.$flags&2&&C.A(u)
u[1]=x
x=d.b3()
u.$flags&2&&C.A(u)
u[2]=x
x=d.b3()
u.$flags&2&&C.A(u)
u[3]=x
x=d.b3()
u.$flags&2&&C.A(u)
u[4]=x
x=d.b3()
u.$flags&2&&C.A(u)
u[5]=x
x=d.b3()
u.$flags&2&&C.A(u)
u[6]=x
x=d.b3()
u.$flags&2&&C.A(u)
u[7]=x
t.b=!1
return new A.aaO(t,e,w,v)},
Gc(d,e){return D.c.U(d+D.c.c7(1,e)-1,e)},
aaO:function aaO(d,e,f,g){var _=this
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
at8:function at8(d,e,f,g){var _=this
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
aAT:function aAT(d,e){var _=this
_.a=0
_.b=!0
_.c=d
_.d=e
_.e=$},
bKu:function bKu(d,e){this.a=d
this.b=e},
BR(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
MS(d){if(d<0)return 0
if(d>255)return 255
return d},
bKv(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
drM(d,e,f){return 4278190080},
drN(d,e,f){return d},
drS(d,e,f){return e[f]},
drT(d,e,f){return e[f+1]},
drU(d,e,f){return e[f-1]},
drV(d,e,f){var x=e[f]
return A.BR(A.BR(d,e[f+1]),x)},
drW(d,e,f){return A.BR(d,e[f-1])},
drX(d,e,f){return A.BR(d,e[f])},
drY(d,e,f){return A.BR(e[f-1],e[f])},
drZ(d,e,f){return A.BR(e[f],e[f+1])},
drO(d,e,f){var x=e[f-1],w=e[f],v=e[f+1]
return A.BR(A.BR(d,x),A.BR(w,v))},
drP(d,e,f){var x=e[f],w=e[f-1]
return A.bKv(x>>>24,d>>>24,w>>>24)+A.bKv(x>>>16&255,d>>>16&255,w>>>16&255)+A.bKv(x>>>8&255,d>>>8&255,w>>>8&255)+A.bKv(x&255,d&255,w&255)<=0?x:d},
drQ(d,e,f){var x=e[f],w=e[f-1]
return(A.MS((d>>>24)+(x>>>24)-(w>>>24))<<24|A.MS((d>>>16&255)+(x>>>16&255)-(w>>>16&255))<<16|A.MS((d>>>8&255)+(x>>>8&255)-(w>>>8&255))<<8|A.MS((d&255)+(x&255)-(w&255)))>>>0},
drR(d,e,f){var x,w,v,u=e[f],t=e[f-1],s=A.BR(d,u)
u=s>>>24
x=s>>>16&255
w=s>>>8&255
v=s>>>0&255
return(A.MS(u+D.c.ab(u-(t>>>24),2))<<24|A.MS(x+D.c.ab(x-(t>>>16&255),2))<<16|A.MS(w+D.c.ab(w-(t>>>8&255),2))<<8|A.MS(v+D.c.ab(v-(t&255),2)))>>>0},
MR:function MR(d,e){this.a=d
this.b=e},
aAU:function aAU(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
bMq:function bMq(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
ab0:function ab0(){},
at9:function at9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=_.f=$
_.w=1
_.y=_.x=$},
cK6(d){var x,w=J.hH(d,y.R)
for(x=0;x<d;++x)w[x]=new A.asb()
return new A.a3q(w,0)},
diT(){var x,w,v=J.kU(5,y.O)
for(x=0;x<5;++x)v[x]=A.cK6(0)
w=J.kU(64,y.u)
for(x=0;x<64;++x)w[x]=new A.asc()
return new A.a3e(v,w)},
asb:function asb(){this.b=this.a=0},
asc:function asc(){this.b=this.a=0},
a3q:function a3q(d,e){this.a=d
this.b=e},
a3e:function a3e(d,e){var _=this
_.a=d
_.b=!1
_.c=0
_.e=_.d=!1
_.f=e},
a3r:function a3r(){var _=this
_.b=_.a=null
_.e=_.d=0},
asd:function asd(d){this.a=d
this.b=null},
Wj:function Wj(d,e){this.a=d
this.b=e},
Wk:function Wk(d,e){var _=this
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
ata:function ata(d,e){var _=this
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
bMr:function bMr(d){this.a=null
this.b=d
this.c=null},
bMu:function bMu(d,e){this.a=d
this.b=e},
bMs:function bMs(d,e){this.a=d
this.b=e},
bMt:function bMt(d,e,f){this.a=d
this.b=e
this.c=f},
d4N(d,e){var x
if(e===D.qj)x=A.qz(d)>0
else x=d.gcq()===D.ak&&!d.gyK()
return x},
d64(d,e){return e>=5&&e<=8?d.gaW():d.gbV()},
d63(d,e){return e>=5&&e<=8?d.gbV():d.gaW()},
dFL(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t
if(!A.d4N(d,f))return!1
x=d.bN()
w=A.qz(d)
v=new A.cb9(x,w,A.d64(d,o),A.d63(d,o))
v.bxl(d,o)
u=e.bN()
t=e.a.gjJ()
if(f===D.qj){if(A.qz(e)!==w)return!1
A.dzu(v,u,t,g,h,i,j,m,n)
return!0}if(e.gcq()!==D.ak||e.a.c!==d.a.c)return!1
switch(f.a){case 1:A.dzt(v,u,t,g,h,i,j,k,l)
return!0
case 3:A.dzr(v,u,t,g,h,i,j,k,l)
return!0
case 2:A.dzs(v,u,t,g,h,i,j,k,l)
return!0
case 0:return!1}},
dzu(d,e,f,g,h,i,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=d.b,k=d.a,j=new Int32Array(i)
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
x&2&&C.A(e)
e[p]=r}}}},
dzt(d,e,f,g,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m=d.b,l=d.c-1,k=d.d-1,j=new Int32Array(a1),i=new Int32Array(a1),h=new Float64Array(a1)
for(x=0;x<a1;++x){w=x*a3
v=D.e.H(w)
h[x]=w-v
u=d.f
u===$&&C.d()
j[x]=v*u
i[x]=D.c.aE(v+1,0,l)*u}for(u=d.a,t=g*m,s=0;s<a2;++s){r=s*a4
q=D.e.H(r)
p=D.c.aE(q+1,0,k)
o=d.e
o===$&&C.d()
n=d.r
n===$&&C.d()
A.dyt(u,o+q*n,o+p*n,e,(a0+s)*f+t,m,a1,j,i,h,r-q)}},
dyt(d,e,f,g,h,i,j,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
x&2&&C.A(g)
g[h]=v}}},
dzr(a4,a5,a6,a7,a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a4.b,a2=new Int32Array(a9),a3=new Int32Array(a9)
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
A.dA5(r,g+h*f+w*e,i,e,a1,t)}d=1/(k*i)
for(j=0;j<a1;++j,l=a0){a0=l+1
i=D.e.H(t[j]*d)
s&2&&C.A(a5)
a5[l]=i}}}},
dA5(d,e,f,g,h,i){var x,w,v,u,t
for(x=i.$flags|0,w=0;w<f;++w,e+=g)for(v=0;v<h;++v){u=i[v]
t=d[e+v]
x&2&&C.A(i)
i[v]=u+t}},
dzs(b4,b5,b6,b7,b8,b9,c0,c1,c2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b4.b,a9=b4.a,b0=b9*4,b1=new Int32Array(b0),b2=new Uint8Array(b0),b3=new Float64Array(b9)
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
m[a0]=A.d31(a3,a9[n[a5]+a4],a9[n[a5+1]+a4],a9[n[a5+2]+a4],a9[n[a5+3]+a4])}a6=A.d31(h,m[0],m[1],m[2],m[3])
a7=f+1
if(a6<0)e=0
else e=a6>255?255:D.e.H(a6)
b0&2&&C.A(b5)
b5[f]=e}}}},
d31(d,e,f,g,h){var x=-e,w=d*d
return f+0.5*(d*(x+g)+w*(2*e-5*f+4*g-h)+w*d*(x+3*f-3*g+h))},
cb9:function cb9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.r=_.f=_.e=$},
cAk(e8,e9,f0,f1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5=null,e6="ifd0",e7={}
e7.a=f0
if(e8.gyK())e7.a=D.qj
x=1
if(e8.gu8().h(0,e6).a.R(274)&&e8.gu8().h(0,e6).ghC()!==1){w=e8.gu8().h(0,e6).ghC()
w.toString
if(w>=2&&w<=8&&D.b.d7(e8.ghR(),new A.cAl(e7)))x=w
else e8=A.czp(e8)}v=A.d64(e8,x)
u=A.d63(e8,x)
if(e9<=0)e9=D.e.ar(f1*(u/v))
if(f1<=0)f1=D.e.ar(e9*(v/u))
if(f1===v&&e9===u)return x===1?C.tp(e8,!1,!1):A.czp(e8)
t=new Int32Array(f1)
for(s=0;s<f1;++s)t[s]=D.c.dv(s*v,f1)
r=new Int32Array(e9)
for(q=0;q<e9;++q)r[q]=D.c.dv(q*u,e9)
p=e8.ghR().length
for(w=x>=5,o=y.g,n=x<=8,m=e5,l=0;l<p;++l){k=e8.x
j=(k===$?e8.x=C.a([],o):k)[l]
i=A.a3w(j,e9,!0,f1)
h=m==null
if(!h)m.pX(i)
if(h)m=i
h=w&&n
g=j.a
if(h){h=g==null?e5:g.a
if(h==null)h=0}else{h=g==null?e5:g.b
if(h==null)h=0}f=h/e9
if(w&&n){h=g==null?e5:g.b
if(h==null)h=0}else{h=g==null?e5:g.a
if(h==null)h=0}e=h/f1
if(A.dFL(j,i,e7.a,0,0,f1,e9,e,f,t,r,x))continue
h=e7.a
if(h===D.vl){d=j.ik(0,0)
for(q=0;q<e9;q=a1){a0=D.e.H(q*f)
a1=q+1
a2=D.e.H(a1*f)
if(a2===a0)++a2
for(s=0;s<f1;s=a4){a3=D.e.H(s*e)
a4=s+1
a5=D.e.H(a4*e)
if(a5===a3)++a5
for(a6=a0,a7=0,a8=0,a9=0,b0=0,b1=0;a6<a2;++a6)for(b2=a3;b2<a5;++b2,++b1){h=j.a
if(h!=null)h.d1(b2,a6,d)
a7+=d.gaA()
a8+=d.gaO()
a9+=d.gaN()
b0+=d.gaL()}b3=1/b1
h=i.a
if(h!=null)h.iV(s,q,a7*b3,a8*b3,a9*b3,b0*b3)}}}else if(h===D.qj){h=j.a
if((h==null?e5:h.gdX())!=null)for(q=0;q<e9;++q){b4=r[q]
for(s=0;s<f1;++s){h=t[s]
g=j.a
h=g==null?e5:D.e.H(g.nB(h,b4).gcT())
if(h==null)h=0
g=i.a
if(g!=null)g.m2(s,q,h)}}else{d=j.ik(0,0)
for(q=0;q<e9;++q){a6=r[q]
for(s=0;s<f1;++s){h=t[s]
g=j.a
if(g!=null)g.d1(h,a6,d)
h=d.gaA()
g=d.gaO()
b5=d.gaN()
b6=d.gaL()
b7=i.a
if(b7!=null)b7.iV(s,q,h,g,b5,b6)}}}}else if(h===D.ay1){b8=j.ik(0,0)
b9=j.ik(0,0)
c0=j.ik(0,0)
c1=j.ik(0,0)
h=j.a
g=h==null
b5=g?e5:h.a
c2=(b5==null?0:b5)-1
h=g?e5:h.b
c3=(h==null?0:h)-1
for(q=0;q<e9;++q){c4=q*f
c5=D.e.H(c4)
c6=c4-c5
c7=D.c.aE(c5+1,0,c3)
for(s=0;s<f1;++s){c8=s*e
c9=D.e.H(c8)
d0=c8-c9
d1=D.c.aE(c9+1,0,c2)
h=j.a
if(h!=null)h.d1(c9,c5,b8)
h=j.a
if(h!=null)h.d1(c9,c7,b9)
h=j.a
if(h!=null)h.d1(d1,c5,c0)
h=j.a
if(h!=null)h.d1(d1,c7,c1)
h=b8.gaA()
g=c0.gaA()
b5=b9.gaA()
b6=c1.gaA()
b7=b8.gaO()
d2=c0.gaO()
d3=b9.gaO()
d4=c1.gaO()
d5=b8.gaN()
d6=c0.gaN()
d7=b9.gaN()
d8=c1.gaN()
d9=b8.gaL()
e0=c0.gaL()
e1=b9.gaL()
e2=c1.gaL()
e3=i.a
if(e3!=null)e3.iV(s,q,h+d0*(g-h+c6*(h+b6-b5-g))+c6*(b5-h),b7+d0*(d2-b7+c6*(b7+d4-d3-d2))+c6*(d3-b7),d5+d0*(d6-d5+c6*(d5+d8-d7-d6))+c6*(d7-d5),d9+d0*(e0-d9+c6*(d9+e2-e1-e0))+c6*(e1-d9))}}}else for(q=0;q<e9;++q){e4=q*f
for(s=0;s<f1;++s)i.DX(s,q,j.aTt(s*e,e4,e7.a))}}if(x!==1)m.gu8().h(0,e6).shC(e5)
m.toString
return m},
cAl:function cAl(d){this.a=d},
dCV(d,e){switch(e.a){case 0:A.cBw(d)
break
case 1:A.d5k(d)
break
case 2:A.dCY(d)
break}return d},
d5k(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a1.ghR().length
for(x=y.g,w=0;w<a0;++w){v=a1.x
u=(v===$?a1.x=C.a([],x):v)[w]
t=u.a
s=t==null
r=s?d:t.a
if(r==null)r=0
q=s?d:t.b
if(q==null)q=0
p=D.c.ab(q,2)
if(!s){o=J.dC(t.ga6(t))
if(o==null){t=u.a
t=t==null?d:t.ga6(t)
if(t==null)t=D.n.ga6(new Uint8Array(0))
o=J.dC(t)}n=u.a.gjJ()
m=new Uint8Array(n)
for(l=q-1,k=0;k<p;++k,--l){j=k*n
i=l*n
D.n.bW(m,0,n,o,j)
D.n.bW(o,j,j+n,o,i)
D.n.di(o,i,i+n,m)}continue}t=a1.a
if((t==null?d:t.gdX())!=null)for(l=q-1,k=0;k<p;++k,--l)for(h=0;h<r;++h){t=u.a
g=t==null?d:t.d1(h,k,d)
if(g==null)g=new C.fr()
t=u.a
f=t==null?d:t.d1(h,l,d)
if(f==null)f=new C.fr()
e=g.gcT()
g.scT(f.gcT())
f.scT(e)}else for(l=q-1,k=0;k<p;++k,--l)for(h=0;h<r;++h){t=u.a
g=t==null?d:t.d1(h,k,d)
if(g==null)g=new C.fr()
t=u.a
f=t==null?d:t.d1(h,l,d)
if(f==null)f=new C.fr()
e=g.gaA()
g.saA(f.gaA())
f.saA(e)
e=g.gaO()
g.saO(f.gaO())
f.saO(e)
e=g.gaN()
g.saN(f.gaN())
f.saN(e)
e=g.gaL()
g.saL(f.gaL())
f.saL(e)}}return a1},
cBw(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.ghR().length
for(x=y.g,w=0;w<d;++w){v=a0.x
u=(v===$?a0.x=C.a([],x):v)[w]
t=u.a
s=t==null
r=s?e:t.a
if(r==null)r=0
q=s?e:t.b
if(q==null)q=0
p=D.c.ab(r,2)
o=A.qz(u)
if(o>0){t=u.a
n=t==null?e:J.dC(t.ga6(t))
if(n==null){t=u.a
t=t==null?e:t.ga6(t)
if(t==null)t=D.n.ga6(new Uint8Array(0))
n=J.dC(t)}m=u.a.gjJ()
for(l=0;l<q;++l)A.d6z(n,l*m,r,o)
continue}t=a0.a
if((t==null?e:t.gdX())!=null)for(k=r-1,l=0;l<q;++l)for(j=k,i=0;i<p;++i,--j){t=u.a
h=t==null?e:t.d1(i,l,e)
if(h==null)h=new C.fr()
t=u.a
g=t==null?e:t.d1(j,l,e)
if(g==null)g=new C.fr()
f=h.gcT()
h.scT(g.gcT())
g.scT(f)}else for(k=r-1,l=0;l<q;++l)for(j=k,i=0;i<p;++i,--j){t=u.a
h=t==null?e:t.d1(i,l,e)
if(h==null)h=new C.fr()
t=u.a
g=t==null?e:t.d1(j,l,e)
if(g==null)g=new C.fr()
f=h.gaA()
h.saA(g.gaA())
g.saA(f)
f=h.gaO()
h.saO(g.gaO())
g.saO(f)
f=h.gaN()
h.saN(g.gaN())
g.saN(f)
f=h.gaL()
h.saL(g.gaL())
g.saL(f)}}return a0},
dCY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.ghR().length
for(x=y.g,w=0;w<e;++w){v=d.x
u=(v===$?d.x=C.a([],x):v)[w]
t=u.a
s=t==null
r=s?f:t.a
if(r==null)r=0
q=s?f:t.b
if(q==null)q=0
p=A.qz(u)
if(p>0){t=u.a
t=t==null?f:J.dC(t.ga6(t))
if(t==null){t=u.a
t=t==null?f:t.ga6(t)
if(t==null)t=D.n.ga6(new Uint8Array(0))
t=J.dC(t)}A.d6z(t,0,r*q,p)
continue}t=u.a
if((t==null?f:t.gdX())!=null)for(o=q-1,n=r-1,m=0;m<=o;++m,--o){l=m===o?D.c.ab(r,2):r
for(k=n,j=0;j<l;++j,--k){t=u.a
i=t==null?f:t.d1(j,m,f)
if(i==null)i=new C.fr()
t=u.a
h=t==null?f:t.d1(k,o,f)
if(h==null)h=new C.fr()
g=i.gcT()
i.scT(h.gcT())
h.scT(g)}}else for(o=q-1,n=r-1,m=0;m<=o;++m,--o){l=m===o?D.c.ab(r,2):r
for(k=n,j=0;j<l;++j,--k){t=u.a
i=t==null?f:t.d1(j,m,f)
if(i==null)i=new C.fr()
t=u.a
h=t==null?f:t.d1(k,o,f)
if(h==null)h=new C.fr()
g=i.gaA()
i.saA(h.gaA())
h.saA(g)
g=i.gaO()
i.saO(h.gaO())
h.saO(g)
g=i.gaN()
i.saN(h.gaN())
h.saN(g)
g=i.gaL()
i.saL(h.gaL())
h.saL(g)}}}return d},
b8V:function b8V(d,e){this.a=d
this.b=e},
a5A(d,e){return new A.bq4(d,new Uint8Array(e))},
bq4:function bq4(d,e){this.a=0
this.b=d
this.c=e},
cOs(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s,r,q
if(m==null)m=0
if(n==null)n=0
if(l==null)l=e.gbV()
if(k==null)k=e.gaW()
if(h==null)h=d.gbV()<e.gbV()?d.gbV():e.gbV()
if(g==null)g=d.gaW()<e.gaW()?d.gaW():e.gaW()
x=f===B.tp
if(!x&&d.gyK())d=d.bcs(d.gqq())
w=k/g
v=l/h
u=y.q
t=J.kU(g,u)
for(s=0;s<g;++s)t[s]=n+D.e.H(s*w)
r=J.kU(h,u)
for(q=0;q<h;++q)r[q]=m+D.e.H(q*v)
if(x)A.dwV(e,d,i,j,h,g,r,t,null,D.MG)
else A.dwm(e,d,i,j,h,g,r,t,f,!1,null,D.MG)
return d},
dwV(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.gbV(),d=a2.gaW(),a0=A.qz(a1)
if(a0>0&&A.qz(a2)===a0&&a1.gcq()===a2.gcq()&&a1.gyK()===a2.gyK()&&a3>=0&&a4>=0){x=a1.bN()
w=a2.bN()
v=a1.a.gjJ()
u=a2.a.gjJ()
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
s&2&&C.A(w)
w[o]=j}}++q}return}for(i=null,q=0;q<a6;++q)for(h=a4+q,s=h>=d,n=0;n<a5;++n){g=a3+n
if(g>=e||s)continue
r=a7[n]
j=a8[q]
f=a1.a
i=f==null?null:f.d1(r,j,i)
if(i==null)i=new C.fr()
a2.DX(g,h,i)}},
dwm(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r
for(x=null,w=0;w<i;++w)for(v=g+w,u=0;u<h;++u){t=j[u]
s=k[w]
r=d.a
x=r==null?null:r.d1(t,s,x)
if(x==null)x=new C.fr()
A.dCt(e,f+u,v,x,l,!1,n,o)}},
dCt(a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
if(!a6.bg7(a7,a8))return a6
if(b0===B.tp||a6.gyK())if(a6.bg7(a7,a8)){a6.nB(a7,a8).fm(a9)
return a6}x=a9.ghl()
w=a9.gh5()
v=a9.gha()
u=a9.gt(a9)<4?1:a9.gel()
if(u===0)return a6
t=a6.nB(a7,a8)
s=t.ghl()
r=t.gh5()
q=t.gha()
p=t.gel()
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
m=D.e.aE(u,0.01,1)
n=u<0
i=n?0:1
h=D.e.aE(x/m*i,0,0.99)
i=D.e.aE(u,0.01,1)
m=n?0:1
g=D.e.aE(w/i*m,0,0.99)
m=D.e.aE(u,0.01,1)
n=n?0:1
f=D.e.aE(v/m*n,0,0.99)
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
t.shl((x*u+s*p*a3)*a5)
t.sh5((w*u+r*p*a3)*a5)
t.sha((v*u+q*p*a3)*a5)
t.sel(a4)
return a6},
d5i(d,e,f,g,h,i,j){var x,w=D.e.aE(Math.min(g,h),0,d.gbV()-1),v=D.e.aE(Math.min(i,j),0,d.gaW()-1),u=D.e.aE(Math.max(g,h),0,d.gbV()-1),t=D.e.aE(Math.max(i,j),0,d.gaW()-1),s=d.a.qH(0,w,v,u-w+1,t-v+1)
for(x=s.a;s.l();)x.fm(f)
return d},
cJJ(d){var x=new C.IT(C.t(y.N,y.P))
x.bg(d)
return x},
dhQ(a4,a5,a6,a7,a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=b0<16384,a3=a6>a8?a8:a6
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
if(a2){A.a2n(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a2n(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a2n(f,d,v)
a1=v[0]
u&2&&C.A(a4)
a4[j]=a1
a4[i]=v[1]
A.a2n(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}else{A.a2o(a4[j],a4[h],v)
f=v[0]
e=v[1]
A.a2o(a4[i],a4[g],v)
d=v[0]
a0=v[1]
A.a2o(f,d,v)
a1=v[0]
u&2&&C.A(a4)
a4[j]=a1
a4[i]=v[1]
A.a2o(e,a0,v)
a4[h]=v[0]
a4[g]=v[1]}}if(n){h=j+r
if(a2){A.a2n(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.A(a4)
a4[h]=a1}else{A.a2o(a4[j],a4[h],v)
f=v[0]
a1=v[1]
u&2&&C.A(a4)
a4[h]=a1}u&2&&C.A(a4)
a4[j]=f}}if((a8&x)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a2){A.a2n(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.A(a4)
a4[i]=n}else{A.a2o(a4[j],a4[i],v)
f=v[0]
n=v[1]
u&2&&C.A(a4)
a4[i]=n}u&2&&C.A(a4)
a4[j]=f}}w=x>>>1}},
a2n(d,e,f){var x,w,v,u,t=$.ou()
t.$flags&2&&C.A(t)
t[0]=d
x=$.po()
w=x[0]
t[0]=e
v=x[0]
u=w+(v&1)+D.c.U(v,1)
f[0]=u
f[1]=u-v},
a2o(d,e,f){var x=d-D.c.U(e,1)&65535
f[1]=x
f[0]=e+x-32768&65535},
dCU(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=268435456,j=C.cKs()
if(j.lk(d))return j
x=A.cYd(l)
if(x.lk(d))return x
w=new A.baY(k)
if(w.lk(d))return w
v=new A.bMr(k)
if(v.lk(d))return v
u=new A.bI5(k)
if(u.b8b(C.d9(d,!1,l,0),!0)!=null)return u
t=new A.bt2(k)
if(t.lk(d))return t
if(A.dhP(d))return new A.b83(k)
s=A.deN(!1,l)
if(s.lk(d))return s
r=C.tv(l,y.N)
q=new A.bru(r,k)
if(q.lk(d))return q
p=new A.bHV(k)
o=C.d9(d,!1,l,0)
r=p.a=new A.aAh(B.Ci)
r.bg(o)
if(r.bgx())return p
n=new A.bcV(k)
if(n.lk(d))return n
m=new A.btw(k)
if(m.lk(d))return m
return l},
d5a(d){var x=A.dCU(d)
return x==null?null:x.p5(d,null)},
alO(d,e){return(d&65535)*e+((d>>>16)*e&65535)*65536>>>0},
dsp(d,e,f,g,h,i){A.dsm(i,d,e,f,g,h,!0,i)},
dsq(d,e,f,g,h,i){A.dsn(i,d,e,f,g,h,!0,i)},
dso(d,e,f,g,h,i){A.dsl(i,d,e,f,g,h,!0,i)},
Wi(d,e,f,g,h){var x,w,v
for(x=0;x<g;++x){w=J.S(d.a,d.d+x)
v=J.S(e.a,e.d+x)
J.dI(f.a,f.d+x,w+v)}},
dsm(d,e,f,g,h,i,j,k){var x,w,v=null,u=h*g,t=h+i,s=C.d9(d,!1,v,u),r=C.d9(k,!1,v,u),q=A.dk(r,v,0)
if(h===0){r.j(0,0,J.S(s.a,s.d))
A.Wi(A.dk(s,v,1),q,A.dk(r,v,1),e-1,!0)
q.d+=g
s.d+=g
r.d+=g
h=1}for(x=-g,w=e-1;h<t;){A.Wi(s,A.dk(q,v,x),r,1,!0)
A.Wi(A.dk(s,v,1),q,A.dk(r,v,1),w,!0);++h
q.d+=g
s.d+=g
r.d+=g}},
dsn(d,e,f,g,h,i,j,k){var x=null,w=h*g,v=h+i,u=C.d9(d,!1,x,w),t=C.d9(k,!1,x,w),s=A.dk(t,x,0)
if(h===0){t.j(0,0,J.S(u.a,u.d))
A.Wi(A.dk(u,x,1),s,A.dk(t,x,1),e-1,!0)
u.d+=g
t.d+=g
h=1}else s.d-=g
while(h<v){A.Wi(u,s,t,e,!0);++h
s.d+=g
u.d+=g
t.d+=g}},
dsl(d,e,f,g,h,i,j,k){var x,w,v,u,t,s=null,r=h*g,q=h+i,p=C.d9(d,!1,s,r),o=C.d9(k,!1,s,r),n=A.dk(o,s,0)
if(h===0){o.j(0,0,J.S(p.a,p.d))
A.Wi(A.dk(p,s,1),n,A.dk(o,s,1),e-1,!0)
n.d+=g
p.d+=g
o.d+=g
h=1}for(x=-g;h<q;){A.Wi(p,A.dk(n,s,x),o,1,!0)
for(w=1;w<e;++w){v=w-g
u=J.S(n.a,n.d+(w-1))+J.S(n.a,n.d+v)-J.S(n.a,n.d+(v-1))
if((u&4294967040)>>>0===0)t=u
else t=u<0?0:255
v=J.S(p.a,p.d+w)
J.dI(o.a,o.d+w,v+t)}++h
n.d+=g
p.d+=g
o.d+=g}},
a3w(d,e,f,g){var x,w,v,u,t=null,s=d.e
s=s==null?t:C.a2j(s)
x=d.c
x=x==null?t:C.cVt(x)
w=d.w
v=d.r
u=d.f
u=u==null?t:new C.uS(new Uint8Array(C.bn(u.a)))
w=new C.lZ(t,x,s,u,v,w,d.y,d.z)
w.bwM(d,e,f,g)
return w},
cVK(d,e,f,g,h){var x=null,w=new C.lZ(x,x,x,x,0,D.bN,0,0)
w.bwL(x,d,0,x,D.ak,0,0,D.bN,e,x,0,f,g,x,D.ak,x,x,h,!1)
return w},
qz(d){var x,w,v,u=d.a
if(u==null)return 0
x=u.gri()
if(x==null)x=0
w=x*u.c
if((w&7)!==0)return 0
v=D.c.U(w,3)
return u.gjJ()===d.gbV()*v?v:0},
dGt(d,e,f,g){var x,w,v,u,t,s
for(x=d.$flags|0,w=0;w<g;++w){v=e+w
u=d[v]
t=f+w
s=d[t]
x&2&&C.A(d)
d[v]=s
d[t]=u}},
d6z(d,e,f,g){var x,w
for(x=e+(f-1)*g,w=e;w<x;w+=g,x-=g)A.dGt(d,w,x,g)},
czp(d){var x,w="ifd0"
if(!d.gu8().h(0,w).a.R(274)||d.gu8().h(0,w).ghC()===1)return C.tp(d,!1,!1)
switch(d.gu8().h(0,w).ghC()){case 2:x=A.cBw(C.tp(d,!1,!1))
break
case 3:x=A.dCV(C.tp(d,!1,!1),B.atW)
break
case 4:x=A.d5k(C.tp(d,!1,!1))
break
case 5:x=A.cBw(A.cAm(d,90))
break
case 6:x=A.cAm(d,90)
break
case 7:x=A.cBw(A.cAm(d,-90))
break
case 8:x=A.cAm(d,-90)
break
default:x=C.tp(d,!1,!1)
break}x.e=C.a2j(d.gu8())
x.gu8().h(0,w).shC(null)
return x},
d4W(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
a2=D.c.H(D.c.aE(a2,0,d.gbV()-1))
a3=D.c.H(D.c.aE(a3,0,d.gaW()-1))
if(a2+a1>d.gbV())a1=d.gbV()-a2
if(a3+a0>d.gaW())a0=d.gaW()-a3
x=d.ghR().length
for(w=y.g,v=e,u=0;u<x;++u){t=d.x
s=(t===$?d.x=C.a([],w):t)[u]
r=v==null
q=r?e:v.a3R()
if(q==null)q=A.a3w(s,a0,!0,a1)
if(r)v=q
p=A.qz(s)
r=!1
if(p>0)if(A.qz(q)===p){r=q.a
r=r==null?e:r.gcq()
if(r==null)r=D.ak
o=s.a
o=o==null?e:o.gcq()
r=r===(o==null?D.ak:o)}if(r){r=s.a
n=r==null?e:J.dC(r.ga6(r))
if(n==null){r=s.a
r=r==null?e:r.ga6(r)
if(r==null)r=D.n.ga6(new Uint8Array(0))
n=J.dC(r)}r=q.a
m=r==null?e:J.dC(r.ga6(r))
if(m==null){r=q.a
r=r==null?e:r.ga6(r)
if(r==null)r=D.n.ga6(new Uint8Array(0))
m=J.dC(r)}l=s.a.gjJ()
k=a1*p
for(r=a2*p,j=0;j<a0;j=i){i=j+1
D.n.bW(m,j*k,i*k,n,(a3+j)*l+r)}}else for(r=q.a,r=r.gL(r);r.l();){h=r.gq()
o=h.glt()
g=h.glZ()
f=s.a
o=f==null?e:f.d1(a2+o,a3+g,e)
h.fm(o==null?new C.fr():o)}}v.toString
return v},
cAm(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=D.c.a_(b0,360)
a9.gyK()
if(D.c.a_(a8,90)===0)switch(D.c.ab(a8,90)){case 1:return A.dzI(a9)
case 2:return A.dzG(a9)
case 3:return A.dzH(a9)
default:return C.tp(a9,!1,!1)}x=a8*3.141592653589793/180
w=Math.cos(x)
v=Math.sin(x)
u=a9.gbV()
t=a9.gbV()
s=a9.gaW()
r=a9.gaW()
q=0.5*a9.gbV()
p=0.5*a9.gaW()
s=Math.abs(u*w)+Math.abs(s*v)
o=0.5*s
r=Math.abs(t*v)+Math.abs(r*w)
n=0.5*r
m=a9.ghR().length
for(u=y.g,l=a9.f,k=a7,j=0;j<m;++j){i=a9.x
h=(i===$?a9.x=C.a([],u):i)[j]
t=k==null
g=t?a7:k.a3R()
if(g==null){f=D.e.H(s)
g=A.a3w(a9,D.e.H(r),!0,f)}if(t)k=g
e=h.f
if(e==null)e=l
if(e!=null){t=g.a
if(t!=null)t.o_(0,e)}for(t=g.a,t=t.gL(t);t.l();){d=t.gq()
a0=d.glt()
a1=d.glZ()
f=a0-o
a2=a1-n
a3=q+f*w+a2*v
a4=p-f*v+a2*w
f=!1
if(a3>=0)if(a4>=0){a2=h.a
a5=a2==null
a6=a5?a7:a2.a
if(a3<(a6==null?0:a6)){f=a5?a7:a2.b
f=a4<(f==null?0:f)}}if(f)g.DX(a0,a1,h.aTt(a3,a4,D.qj))}}k.toString
return k},
dzI(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(x=d.ghR(),w=x.length,v=g,u=0;u<x.length;x.length===w||(0,C.r)(x),++u){t=x[u]
s=v==null
r=s?g:v.a3R()
if(r==null){q=t.a
p=q==null
o=p?g:q.b
if(o==null)o=0
q=p?g:q.a
r=A.a3w(t,q==null?0:q,!0,o)}if(s)v=r
s=t.a
s=s==null?g:s.b
n=(s==null?0:s)-1
m=A.qz(t)
if(m>0&&A.qz(r)===m){s=t.a
q=s==null
p=q?g:s.a
l=-(p==null?0:p)*m
k=q?g:J.dC(s.ga6(s))
if(k==null){s=t.a
s=s==null?g:s.ga6(s)
if(s==null)s=D.n.ga6(new Uint8Array(0))
k=J.dC(s)}s=r.a
j=s==null?g:J.dC(s.ga6(s))
if(j==null){s=r.a
s=s==null?g:s.ga6(s)
if(s==null)s=D.n.ga6(new Uint8Array(0))
j=J.dC(s)}i=0
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
A.cNJ(k,(n*p+i)*m,l,j,i*o*m,s,m);++i}continue}i=0
for(;;){s=r.a
s=s==null?g:s.b
if(!(i<(s==null?0:s)))break
h=0
for(;;){s=r.a
s=s==null?g:s.a
if(!(h<(s==null?0:s)))break
s=t.a
s=s==null?g:s.d1(i,n-h,g)
r.DX(h,i,s==null?new C.fr():s);++h}++i}}v.toString
return v},
dzG(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null
for(x=d.ghR(),w=x.length,v=h,u=0;u<x.length;x.length===w||(0,C.r)(x),++u){t=x[u]
s=t.a
r=s==null
q=r?h:s.a
p=(q==null?0:q)-1
s=r?h:s.b
o=(s==null?0:s)-1
s=v==null
n=s?h:v.a3R()
if(n==null)n=C.tp(t,!0,!0)
if(s)v=n
m=A.qz(t)
if(m>0&&A.qz(n)===m){s=t.a
r=s==null
q=r?h:s.a
if(q==null)q=0
l=r?h:s.b
k=q*(l==null?0:l)
s=r?h:J.dC(s.ga6(s))
if(s==null){s=t.a
s=s==null?h:s.ga6(s)
if(s==null)s=D.n.ga6(new Uint8Array(0))
s=J.dC(s)}r=n.a
r=r==null?h:J.dC(r.ga6(r))
if(r==null){r=n.a
r=r==null?h:r.ga6(r)
if(r==null)r=D.n.ga6(new Uint8Array(0))
r=J.dC(r)}A.cNJ(s,(k-1)*m,-m,r,0,k,m)
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
r=r==null?h:r.d1(p-i,s,h)
n.DX(i,j,r==null?new C.fr():r);++i}++j}}v.toString
return v},
dzH(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
for(x=d.ghR(),w=x.length,v=g,u=0;u<x.length;x.length===w||(0,C.r)(x),++u){t=x[u]
s=d.a
s=s==null?g:s.a
r=(s==null?0:s)-1
s=v==null
q=s?g:v.a3R()
if(q==null){p=t.a
o=p==null
n=o?g:p.b
if(n==null)n=0
p=o?g:p.a
q=A.a3w(t,p==null?0:p,!0,n)}if(s)v=q
m=A.qz(t)
s=!1
if(m>0)if(A.qz(q)===m){s=t.a
s=s==null?g:s.a
if(s==null)s=0
p=d.a
p=p==null?g:p.a
s=s===(p==null?0:p)}if(s){s=t.a
p=s==null
o=p?g:s.a
l=(o==null?0:o)*m
k=p?g:J.dC(s.ga6(s))
if(k==null){s=t.a
s=s==null?g:s.ga6(s)
if(s==null)s=D.n.ga6(new Uint8Array(0))
k=J.dC(s)}s=q.a
j=s==null?g:J.dC(s.ga6(s))
if(j==null){s=q.a
s=s==null?g:s.ga6(s)
if(s==null)s=D.n.ga6(new Uint8Array(0))
j=J.dC(s)}i=0
for(;;){s=q.a
p=s==null
o=p?g:s.b
if(!(i<(o==null?0:o)))break
o=p?g:s.a
if(o==null)o=0
s=p?g:s.a
if(s==null)s=0
A.cNJ(k,(r-i)*m,l,j,i*o*m,s,m);++i}continue}i=0
for(;;){s=q.a
s=s==null?g:s.b
if(!(i<(s==null?0:s)))break
s=r-i
h=0
for(;;){p=q.a
p=p==null?g:p.a
if(!(h<(p==null?0:p)))break
p=t.a
p=p==null?g:p.d1(s,h,g)
q.DX(h,i,p==null?new C.fr():p);++h}++i}}v.toString
return v},
cNJ(d,e,f,g,h,i,j){var x,w,v,u,t
for(x=g.$flags|0,w=0;w<i;++w,e+=f)for(v=0;v<j;++v,h=u){u=h+1
t=d[e+v]
x&2&&C.A(g)
g[h]=t}},
cAn(d){var x
d=(d&-d)>>>0
x=d!==0?31:32
if((d&65535)!==0)x-=16
if((d&16711935)!==0)x-=8
if((d&252645135)!==0)x-=4
if((d&858993459)!==0)x-=2
return(d&1431655765)!==0?x-1:x},
d4R(d,e,f,g,h){var x=1-g/255
h[0]=D.e.ar(255*(1-d/255)*x)
h[1]=D.e.ar(255*(1-e/255)*x)
h[2]=D.e.ar(255*(1-f/255)*x)},
dk(d,e,f){var x=d.a,w=d.d,v=J.aK(x),u=e==null?d.c:d.d+f+e
return new C.m0(x,d.b,Math.min(v,u),w+f,d.e)}},B
J=c[1]
C=c[0]
D=c[2]
E=c[22]
A=a.updateHolder(c[7],A)
B=c[8]
A.x3.prototype={
O(){return"ChannelOrder."+this.b}}
A.a0Z.prototype={
dj(){return new A.a0Z(this.a)},
gcq(){return D.ak},
gt(d){return 4},
gdX(){return null},
h(d,e){var x
if(e>=0&&e<4){x=e<<3>>>0
x=D.c.ff((this.a&D.c.c7(255,x))>>>0,x)}else x=0
return x},
j(d,e,f){},
gcT(){return this.h(0,0)},
gaA(){return this.h(0,0)},
gaO(){return this.h(0,1)},
gaN(){return this.h(0,2)},
gaL(){return this.h(0,3)},
gel(){return this.gaL()/255},
gis(){return C.jm(this)},
gL(d){return new C.hQ(this)},
m(d,e){var x,w,v=this
if(e==null)return!1
x=!1
if(y.G.b(e))if(e.gt(e)===v.gt(v)){x=e.gD(e)
w=C.M(v,C.y(v).i("F.E"))
x=x===C.aW(w)}return x},
gD(d){var x=C.M(this,C.y(this).i("F.E"))
return C.aW(x)},
$idD:1}
A.aoV.prototype={
gaL(){return 255},
gel(){return 1},
gt(d){return 3}}
A.anG.prototype={
O(){return"BlendMode."+this.b}}
A.AV.prototype={
j2(d,e,f){var x,w=this.c+e*f
this.c=w
x=this.a
if(x>0&&w>x)throw C.o(C.bQ("Animation frames exceed the maximum of "+x+" pixels"))}}
A.mC.prototype={
O(){return"BmpCompression."+this.b}}
A.b_x.prototype={}
A.zH.prototype={
aW4(d,e){var x,w,v,u,t,s,r,q=this,p=q.d,o=p<=40
if(o){x=q.r
x=x===B.Du||x===B.Dv}else x=!0
if(x){x=q.as=d.Y()
w=A.cAn(x)
q.CW=w
v=D.c.dS(x,w)
x=v>0
q.cx=x?255/v:0
w=q.at=d.Y()
u=A.cAn(w)
q.cy=u
t=D.c.dS(w,u)
q.db=x?255/t:0
w=q.ax=d.Y()
u=A.cAn(w)
q.dx=u
s=D.c.dS(w,u)
q.dy=x?255/s:0
if(!o||q.r===B.Dv){o=q.ay=d.Y()
x=A.cAn(o)
q.fr=x
r=D.c.dS(o,x)
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
if(q.f<=8)q.cnU(d)},
gaej(){var x=this.d
if(x!==40)if(x===124){x=this.ay
x===$&&C.d()
x=x===0}else x=!1
else x=!0
return x},
gaW(){return Math.abs(this.c)},
cnU(d){var x,w,v,u,t,s=this,r=s.z
if(r===0)r=D.c.c7(1,s.f)
s.ch=new C.y0(new Uint8Array(r*3),r,3)
for(x=0;x<r;++x){w=J.S(d.a,d.d++)
v=J.S(d.a,d.d++)
u=J.S(d.a,d.d++)
t=J.S(d.a,d.d++)
s.ch.asq(x,u,v,w,t)}},
cbI(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(o.ch!=null){x=o.f
if(x===1){w=d.b3()
for(v=7;v>=0;--v)e.$4(D.c.lx(w,v)&1,0,0,0)
return}else if(x===2){w=d.b3()
for(v=6;v>=0;v-=2)e.$4(D.c.lx(w,v)&2,0,0,0)}else if(x===4){w=d.b3()
e.$4(D.c.U(w,4)&15,0,0,0)
e.$4(w&15,0,0,0)
return}else if(x===8){e.$4(d.b3(),0,0,0)
return}}x=o.r
if(x===B.Du&&o.f===32){u=d.Y()
x=o.as
x===$&&C.d()
t=o.CW
t===$&&C.d()
t=D.c.dS((u&x)>>>0,t)
x=o.cx
x===$&&C.d()
s=D.e.H(t*x)
x=o.at
x===$&&C.d()
t=o.cy
t===$&&C.d()
t=D.c.dS((u&x)>>>0,t)
x=o.db
x===$&&C.d()
r=D.e.H(t*x)
x=o.ax
x===$&&C.d()
t=o.dx
t===$&&C.d()
t=D.c.dS((u&x)>>>0,t)
x=o.dy
x===$&&C.d()
q=D.e.H(t*x)
if(o.gaej())p=255
else{x=o.ay
x===$&&C.d()
t=o.fr
t===$&&C.d()
t=D.c.dS((u&x)>>>0,t)
x=o.fx
x===$&&C.d()
p=D.e.H(t*x)}return e.$4(s,r,q,p)}else{t=o.f
if(t===32&&x===B.LF){q=d.b3()
r=d.b3()
s=d.b3()
p=d.b3()
return e.$4(s,r,q,o.gaej()?255:p)}else if(t===24){q=d.b3()
r=d.b3()
return e.$4(d.b3(),r,q,255)}else if(t===16){u=d.a9()
x=o.as
x===$&&C.d()
t=o.CW
t===$&&C.d()
t=D.c.dS((u&x)>>>0,t)
x=o.cx
x===$&&C.d()
s=D.e.H(t*x)
x=o.at
x===$&&C.d()
t=o.cy
t===$&&C.d()
t=D.c.dS((u&x)>>>0,t)
x=o.db
x===$&&C.d()
r=D.e.H(t*x)
x=o.ax
x===$&&C.d()
t=o.dx
t===$&&C.d()
t=D.c.dS((u&x)>>>0,t)
x=o.dy
x===$&&C.d()
q=D.e.H(t*x)
if(o.gaej())p=255
else{x=o.ay
x===$&&C.d()
t=o.fr
t===$&&C.d()
t=D.c.dS((u&x)>>>0,t)
x=o.fx
x===$&&C.d()
p=D.e.H(t*x)}return e.$4(s,r,q,p)}else throw C.o(C.bQ("Unsupported bitsPerPixel ("+t+") or compression ("+x.k(0)+")."))}},
gbV(){return this.b}}
A.anJ.prototype={
lk(d){var x,w
if(!A.cSL(C.d9(d,!1,null,0))||d.length<18)return!1
x=C.d9(d,!1,null,0)
x.d+=14
w=x.Y()
return w>=12&&w<=124},
jL(d){return C.fX(new A.b_w(this,d))},
bzj(d){var x
if(!this.lk(d))return null
x=C.d9(d,!1,null,0)
this.a=x
return this.b=A.deO(x,null)},
i8(d){return C.fX(new A.b_u(this,d))},
bzi(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b
if(e==null)return new C.lZ(f,f,f,f,0,D.bN,0,0)
x=g.a
x===$&&C.d()
w=e.a.b
w===$&&C.d()
x.d=w
w=e.b
A.oq(w,e.gaW(),g.d,!1)
v=e.f
u=D.c.ab(w*v+31,32)*4
x=e.gaW()
t=g.a
if(u*x>t.c-t.d)throw C.o(C.bQ("Truncated BMP data"))
x=g.c
if(x)s=4
else if(v===1||v===4||v===8)s=1
else{t=v===32?4:3
s=t}if(x)r=D.ak
else if(v===1)r=D.fS
else{if(v===2)t=D.hp
else if(v===4)t=D.hq
else t=D.ak
r=t}q=x?f:e.ch
p=C.hG(f,f,r,0,D.bN,e.gaW(),f,0,s,q,D.ak,w,!1)
for(o=p.gaW()-1,x=e.c,w=1/x<0,t=x<0,x=x===0;o>=0;--o){n={}
if(!(x?w:t))m=o
else{l=p.a
l=l==null?f:l.b
m=(l==null?0:l)-1-o}l=g.a
k=l.h8(u)
l.d=l.d+(k.c-k.d)
l=p.a
j=l==null
i=j?f:l.a
if(i==null)i=0
n.a=0
h=j?f:l.d1(0,m,f)
if(h==null)h=new C.fr()
while(n.a<i)e.cbI(k,new A.b_t(n,g,i,e,h))}return p},
p5(d,e){return C.fX(new A.b_v(this,d,e))},
bzh(d,e){var x=this.jL(d)
if(x==null||x.b<1||x.gaW()<1)return null
return this.i8(0)}}
A.b4z.prototype={}
A.a1o.prototype={}
A.b7b.prototype={}
A.aqN.prototype={}
A.at0.prototype={
aiN(){return this.w},
tc(d,e,f,g,h){throw C.o(C.bQ("B44 compression not yet supported."))},
Ul(d,e,f){return this.tc(d,e,f,null,null)},
k(d){return C.v(this.r)+" "+this.x}}
A.IX.prototype={
O(){return"ExrChannelType."+this.b}}
A.IW.prototype={
O(){return"ExrChannelName."+this.b}}
A.aqO.prototype={
bwt(d){var x=this,w=d.amr()
x.a=w
if(w.length===0)return
x.c=B.aEu[d.Y()]
d.b3()
d.d+=3
x.f=d.Y()
x.r=d.Y()
w=x.a
if(w==="R"){x.w=!0
x.b=B.ats}else if(w==="G"){x.w=!0
x.b=B.att}else if(w==="B"){x.w=!0
x.b=B.atu}else if(w==="A"){x.w=!0
x.b=B.atv}else{x.w=!1
x.b=B.atw}switch(x.c.a){case 0:x.d=4
break
case 1:x.d=2
break
case 2:x.d=4
break}}}
A.v5.prototype={
O(){return"ExrCompressorType."+this.b}}
A.b82.prototype={
tc(d,e,f,g,h){throw C.o(C.bQ("Unsupported compression type"))},
Ul(d,e,f){return this.tc(d,e,f,null,null)}}
A.bfz.prototype={}
A.aqP.prototype={}
A.b87.prototype={
bwu(d,e){var x,w,v,u,t,s=this,r=C.d9(d,!1,null,0)
if(r.Y()!==20000630)throw C.o(C.bQ("File is not an OpenEXR image file."))
x=s.d=r.b3()
if(x!==2)throw C.o(C.bQ("Cannot read version "+x+" image files."))
x=s.e=r.t6()
if((x&4294967289)>>>0!==0)throw C.o(C.bQ("The file format version number's flag field contains unrecognized flags."))
w=new A.AV(e)
if((x&16)===0){v=s.c
u=A.cWb(v.length,(x&2)!==0,r,e)
if(u.w>0)v.push(u)}else for(x=s.c;;){u=A.cWb(x.length,(s.e&2)!==0,r,e)
v=u.w
if(v<=0)break
w.j2(0,v,u.x)
x.push(u)}x=s.c
v=x.length
if(v===0)throw C.o(C.bQ("Error reading image header"))
for(t=0;t<x.length;x.length===v||(0,C.r)(x),++t)x[t].cnS(r)
s.bX3(r)},
bX3(d){var x,w,v,u,t=this
for(x=t.c,w=x.length,v=0;v<x.length;x.length===w||(0,C.r)(x),++v){u=x[v]
t.a=Math.max(t.a,u.w)
t.b=Math.max(t.b,u.x)
if(u.db)t.bXk(u,d)
else t.bXf(u,d)}},
bXk(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&C.d()
x=(b3&16)!==0
b3=b4.b
b3.toString
w=b4.CW
v=b4.ay
u=A.dk(b5,b2,0)
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
i=u.h8(u.Y())
u.d=u.d+(i.c-i.d)
h=b4.dy
h.toString
g=j*h
f=b4.dx
f.toString
h=w.tc(i,k*f,g,f,h)
f=h.length
f=Math.min(f,f)
e=new C.m0(h,0,f,0,!1)
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
a8=$.fB
a9=(a8!=null?a8:C.ha())[h]
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
b0=h==null?b2:h.d1(a6,g,b2)
if(b0==null)b0=new C.fr()
h=a5.b
h===$&&C.d()
b0.j(0,h.a,a9)}else{h=a5.a
h===$&&C.d()
a8=b3.b
b1=a8!=null?a8.h(0,h):b2
if(b1!=null)b1.jX(a6,g,a9,0,0)}}}++a3;++g}}++o;++q}++r}},
bXf(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.d()
x=(a5&16)!==0
a5=a6.b
a5.toString
w=a6.CW
v=a6.ay[0]
u=a6.cx
t=A.dk(a7,a4,0)
for(s=v.length,r=a6.c,q=w!=null,p=0,o=0;o<s;++o){t.d=v[o]
if(x)if(t.Y()!==3.141592653589793)throw C.o(C.bQ("Invalid Image Data"))
n=t.Y()
m=$.hl()
m.$flags&2&&C.A(m)
m[0]=n
n=$.kG()
m[0]=t.Y()
l=t.h8(n[0])
t.d=t.d+(l.c-l.d)
if(q){n=w.Ul(l,0,p)
m=n.length
k=new C.m0(n,0,Math.min(m,m),0,!1)}else k=l
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
m=$.fB
a1=(m!=null?m:C.ha())[n]
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
a2=n==null?a4:n.d1(a0,p,a4)
if(a2==null)a2=new C.fr()
n=e.b
n===$&&C.d()
a2.j(0,n.a,a1)}else{n=e.a
n===$&&C.d()
m=a5.b
a3=m!=null?m.h(0,n):a4
if(a3!=null)a3.jX(a0,p,a1,0,0)}}}++h;++p}}},
gbV(){return this.a},
gaW(){return this.b}}
A.a2m.prototype={
bwv(b2,b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=C.t(y.N,y.v)
for(x=a9.e,w=y.t,v=a9.c,u=D.ia;;){t=b4.amr()
if(t.length===0)break
s=b4.amr()
r=b4.Y()
q=b4.h8(r)
b4.d=b4.d+(q.c-q.d)
x.j(0,t,new A.aqN(s,r))
switch(t){case"channels":for(;;){p=new A.aqO()
p.bwt(q)
o=p.a
o===$&&C.d()
if(o.length===0)break
n=p.w
n===$&&C.d()
if(n){++a9.d
o=p.c
o===$&&C.d()
if(o===B.OJ)u=D.ia
else u=o===B.OK?D.j3:D.jS}else{n=p.c
n===$&&C.d()
b1.j(0,o,n)}v.push(p)}break
case"chromaticities":o=new Float32Array(8)
a9.at=o
n=q.Y()
m=$.hl()
m.$flags&2&&C.A(m)
m[0]=n
n=$.Hq()
o[0]=n[0]
o=a9.at
m[0]=q.Y()
l=n[0]
o.$flags&2&&C.A(o)
o[1]=l
l=a9.at
m[0]=q.Y()
o=n[0]
l.$flags&2&&C.A(l)
l[2]=o
o=a9.at
m[0]=q.Y()
l=n[0]
o.$flags&2&&C.A(o)
o[3]=l
l=a9.at
m[0]=q.Y()
o=n[0]
l.$flags&2&&C.A(l)
l[4]=o
o=a9.at
m[0]=q.Y()
l=n[0]
o.$flags&2&&C.A(o)
o[5]=l
l=a9.at
m[0]=q.Y()
o=n[0]
l.$flags&2&&C.A(l)
l[6]=o
o=a9.at
m[0]=q.Y()
n=n[0]
o.$flags&2&&C.A(o)
o[7]=n
break
case"compression":a9.ax=B.aH8[J.S(q.a,q.d++)]
break
case"dataWindow":o=q.Y()
n=$.hl()
n.$flags&2&&C.A(n)
n[0]=o
o=$.kG()
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
n=$.hl()
n.$flags&2&&C.A(n)
n[0]=o
$.kG()
n[0]=q.Y()
n[0]=q.Y()
n[0]=q.Y()
break
case"lineOrder":break
case"pixelAspectRatio":o=q.Y()
n=$.hl()
n.$flags&2&&C.A(n)
n[0]=o
$.Hq()
break
case"screenWindowCenter":o=q.Y()
n=$.hl()
n.$flags&2&&C.A(n)
n[0]=o
$.Hq()
n[0]=q.Y()
break
case"screenWindowWidth":o=q.Y()
n=$.hl()
n.$flags&2&&C.A(n)
n[0]=o
$.Hq()
break
case"tiles":a9.dx=q.Y()
a9.dy=q.Y()
j=J.S(q.a,q.d++)
a9.fr=j&15
a9.fx=D.c.U(j,4)&15
break
case"type":i=q.amr()
if(i!=="deepscanline")if(i!=="deeptile")throw C.o(C.bQ("EXR Invalid type: "+i))
break
default:break}}x=a9.w
if(x===0&&a9.x===0)return
A.oq(x,a9.x,b5,!1)
x=a9.w
a9.b=C.hG(b0,b0,u,0,D.bN,a9.x,b0,0,a9.d,b0,D.ak,x,!1)
for(x=new C.aT(b1,b1.$ti.i("aT<1,2>")).gL(0);x.l();){h=x.d
switch(h.b.a){case 1:w=a9.w
o=a9.x
w=new C.RH(new Uint16Array(w*o),w,o,1)
break
case 2:w=a9.w
o=a9.x
w=new C.RI(new Float32Array(w*o),w,o,1)
break
case 0:w=a9.w
o=a9.x
w=new C.RL(new Uint32Array(w*o),w,o,1)
break
default:w=b0}o=a9.b
o.toString
o.boF(h.a,w)}if(a9.db){g={}
f=a9.dx
if(f==null)f=0
e=a9.dy
if(e==null)e=0
if(f<1||e<1)throw C.o(C.bQ("Invalid EXR tile size"))
A.oq(f,e,b5,!1)
x=a9.r
x===$&&C.d()
a9.id=a9.bAh(x[0],x[2],x[1],x[3])
x=a9.r
a9.k1=a9.bAi(x[0],x[2],x[1],x[3])
if(a9.fr!==2)a9.k1=1
x=a9.id
x.toString
w=a9.r
a9.fy=a9.aXC(x,w[0],w[2],a9.dx,a9.fx)
w=a9.k1
w.toString
x=a9.r
a9.go=a9.aXC(w,x[1],x[3],a9.dy,a9.fx)
x=a9.bAd()
a9.k2=x
w=a9.dx
w.toString
w=x*w
a9.k3=w
a9.CW=A.cUu(a9.ax,a9,w,a9.dy)
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
a9.ay=C.a4A(x*w,new A.b88(g,a9),!0,y.E)}else{x=a9.x
w=a9.ch=new Uint32Array(x+1)
for(o=v.length,n=a9.r,m=a9.w,a2=0;a2<o;++a2){a3=v[a2]
l=a3.d
l===$&&C.d()
k=a3.f
k===$&&C.d()
a4=D.c.dv(l*m,k)
for(l=a3.r,a5=0;a5<x;++a5){n===$&&C.d()
k=n[1]
l===$&&C.d()
if(D.c.a_(a5+k,l)===0)w[a5]=w[a5]+a4}}for(a6=0,a5=0;a5<x;++a5)a6=Math.max(a6,w[a5])
x=A.cUu(a9.ax,a9,a6,b0)
a9.CW=x
x=a9.cx=x.aiN()
w=a9.ch
v=w.length
o=new Uint32Array(v)
a9.cy=o
for(--v,a7=0,a8=0;a8<=v;++a8){if(D.c.a_(a8,x)===0)a7=0
o[a8]=a7
a7+=w[a8]}x=D.c.dv(a9.x+x,x)
a9.ay=C.a([new Uint32Array(x-1)],y.w)}},
bAh(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.auk(w):u.atv(w))+1
break
case 2:v=e-d+1
x=(u.fx===0?u.auk(v):u.atv(v))+1
break
default:throw C.o(C.bQ("Unknown LevelMode format."))}return x},
bAi(d,e,f,g){var x,w,v,u=this
switch(u.fr){case 0:x=1
break
case 1:w=Math.max(e-d+1,g-f+1)
x=(u.fx===0?u.auk(w):u.atv(w))+1
break
case 2:v=g-f+1
x=(u.fx===0?u.auk(v):u.atv(v))+1
break
default:throw C.o(C.bQ("Unknown LevelMode format."))}return x},
auk(d){var x
for(x=0;d>1;){++x
d=D.c.U(d,1)}return x},
atv(d){var x,w
for(x=0,w=0;d>1;){if((d&1)!==0)w=1;++x
d=D.c.U(d,1)}return x+w},
bAd(){var x,w,v,u,t
for(x=this.c,w=x.length,v=0,u=0;u<w;++u){t=x[u].d
t===$&&C.d()
v+=t}return v},
aXC(d,e,f,g,h){var x,w,v,u,t,s,r=J.kU(d,y.q)
for(x=h===1,w=f-e+1,v=0;v<d;++v){u=D.c.c7(1,v)
t=D.c.dv(w,u)
if(x&&t*u<w)++t
s=Math.max(t,1)
g.toString
r[v]=D.c.dv(s+g-1,g)}return r}}
A.at1.prototype={
cnS(d){var x,w,v,u,t,s=this
if(s.db)for(x=0;x<s.ay.length;++x)for(w=0;v=s.ay[x],w<v.length;++w){u=d.mD()
v.$flags&2&&C.A(v)
v[w]=u}else{t=s.ay[0].length
for(x=0;x<t;++x){v=s.ay[0]
u=d.mD()
v.$flags&2&&C.A(v)
v[x]=u}}}}
A.bfA.prototype={
bwN(d,e,f){var x,w,v,u=this,t=d.c.length,s=J.kU(t,y.bc)
for(x=0;x<t;++x)s[x]=new A.aKG()
u.y=s
w=u.w
w.toString
v=D.c.ab(w*u.x,2)
u.z=new Uint16Array(v)},
aiN(){return this.x},
tc(a4,a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
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
n=D.c.dv(a5,v)
m=D.c.dv(x,v)
v=n*v<a5?0:1
v=m-n+v
o.c=v
u=p.r
u===$&&C.d()
n=D.c.dv(a6,u)
m=D.c.dv(w,u)
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
if(k<=j){h=a4.dg(j-k+1)
g=h.c-h.d
for(f=k,q=0;q<g;++q,f=e){e=f+1
i[f]=J.S(h.a,h.d+q)}}d=new Uint16Array(65536)
a0=a3.bYR(i,d)
A.dhN(a4,a4.Y(),a3.z,r)
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
A.dhQ(u,l+f,a1,v,a2,a1*v,a0);++f}}v=a3.z
v.toString
a3.byM(d,v,r)
v=a3.r
if(v==null){v=a3.w
v.toString
v=a3.r=A.a5A(!1,v*a3.x+73728)}v.a=0
for(;a6<=w;++a6)for(q=0;q<s;++q){v=a3.y
v===$&&C.d()
o=v[q]
v=o.e
v===$&&C.d()
if(D.c.a_(a6,v)!==0)continue
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
v.kt(u[l])}}v=a3.r
return J.cV(D.n.ga6(v.c),0,v.a)},
Ul(d,e,f){return this.tc(d,e,f,null,null)},
byM(d,e,f){var x,w,v
for(x=e.$flags|0,w=0;w<f;++w){v=d[e[w]]
x&2&&C.A(e)
e[w]=v}},
bYR(d,e){var x,w,v,u,t
for(x=e.$flags|0,w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
x&2&&C.A(e)
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
x&2&&C.A(e)
e[u]=0}return w-1}}
A.aKG.prototype={}
A.bfB.prototype={
aiN(){return this.w},
tc(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.bN(),d=f.r
d.toString
d=f.w*d
x=C.aVr(e,d)
e=f.x;(e==null?f.x=A.a5A(!1,d):e).a=0
w=C.a([0,0,0,0],y.t)
v=new Uint32Array(1)
u=J.cV(D.bi.ga6(v),0,null)
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
if(D.c.a_(a2,d)!==0)continue
d=n.f
d===$&&C.d()
m=D.c.dv(a1,d)
l=D.c.dv(t,d)
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
for(g=0;g<4;++g)f.x.b1(u[g])}break
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
for(g=0;g<2;++g)f.x.b1(u[g])}break
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
for(g=0;g<4;++g)f.x.b1(u[g])}break}}e=f.x
return J.cV(D.n.ga6(e.c),0,e.a)},
Ul(d,e,f){return this.tc(d,e,f,null,null)}}
A.bfC.prototype={
aiN(){return 1},
tc(d,e,f,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.c,g=A.a5A(!1,(h-d.d)*2)
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
u=$.ov()
u.$flags&2&&C.A(u)
u[0]=v
t=$.pp()[0]
if(t<0){s=-t
for(;r=s-1,s>0;s=r)g.b1(J.S(d.a,d.d++))}else for(s=t;r=s-1,s>=0;s=r)g.b1(J.S(d.a,d.d++))}q=J.cV(D.n.ga6(g.c),0,g.a)
p=q.length
for(h=q.$flags|0,o=1;o<p;++o){v=q[o-1]
u=q[o]
h&2&&C.A(q)
q[o]=v+u-128}h=i.r
if(h==null||h.length!==p)h=i.r=new Uint8Array(p)
v=D.c.ab(p+1,2)
for(n=0,m=0;;v=j,n=k){if(m<p){l=m+1
k=n+1
u=q[n]
h.$flags&2&&C.A(h)
h[m]=u}else break
if(l<p){m=l+1
j=v+1
h[l]=q[v]}else break}return h},
Ul(d,e,f){return this.tc(d,e,f,null,null)},
k(d){return C.v(this.w)}}
A.at2.prototype={
aiN(){return this.x},
tc(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=d.bN(),k=m.w
if(k==null)k=0
x=C.aVr(l,k*m.x)
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
l&2&&C.A(x)
x[t]=k+s-128}l=m.y
if(l==null||l.length!==u)l=m.y=new Uint8Array(u)
k=D.c.ab(u+1,2)
for(r=0,q=0;;k=n,r=o){if(q<u){p=q+1
o=r+1
s=x[r]
l.$flags&2&&C.A(l)
l[q]=s}else break
if(p<u){q=p+1
n=k+1
l[p]=x[k]}else break}return l},
Ul(d,e,f){return this.tc(d,e,f,null,null)},
k(d){return C.v(this.w)}}
A.b83.prototype={
jL(d){return C.fX(new A.b86(this,d))},
i8(d){return C.fX(new A.b84(this,d))},
bGp(d){var x=this.a
if(x==null)return null
return x.c[d].b},
p5(d,e){return C.fX(new A.b85(this,d,e))},
bGo(d,e){if(this.jL(d)==null)return null
return this.i8(0)}}
A.a36.prototype={
ceN(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(g===0&&j.c!=null){x=j.c
x.toString
return x}for(x=j.b,w=j.d,v=-1,u=-1,t=0;t<x;++t){s=w.oy(t)
r=w.ow(t)
q=w.ou(t)
p=w.ot(t)
if(s===d&&r===e&&q===f&&p===g)return t
o=d-s
n=e-r
m=f-q
l=g-p
k=o*o+n*n+m*m+l*l
if(u===-1){u=t
v=k}else if(k<v){u=t
v=k}}return u},
aTr(){var x,w,v,u,t,s,r,q=this
if(q.c==null)return q.d
x=q.d
w=x.a
v=new C.y0(new Uint8Array(w*4),w,4)
for(u=0;u<w;++u){t=x.oy(u)
s=x.ow(u)
r=x.ou(u)
v.asq(u,t,s,r,u===q.c?0:255)}return v}}
A.a37.prototype={
bwx(d){var x,w,v,u,t,s,r=this
r.a=d.a9()
r.b=d.a9()
r.c=d.a9()
r.d=d.a9()
x=d.b3()
r.e=(x&64)!==0
if((x&128)!==0){r.f=A.cVe(D.c.c7(1,(x&7)+1))
for(w=0;v=r.f,w<v.b;++w){u=J.S(d.a,d.d++)
t=J.S(d.a,d.d++)
s=J.S(d.a,d.d++)
v.d.qO(w,u,t,s)}}r.y=d.d-d.b}}
A.at3.prototype={}
A.Ri.prototype={
gbV(){return this.a},
gaW(){return this.b}}
A.baY.prototype={
lk(d){var x,w
this.r=C.d9(d,!1,null,0)
this.a=new A.Ri(C.a([],y.b))
try{x=this.b0G()
return x}catch(w){return!1}},
jL(d){return C.fX(new A.bb0(this,d))},
bIz(d){var x,w,v,u,t,s,r,q,p,o,n=this
n.r=C.d9(d,!1,null,0)
n.a=new A.Ri(C.a([],y.b))
if(!n.b0G())return null
u=n.a
A.oq(u.a,u.b,n.b,!0)
try{while(u=n.r,t=u.d,t<u.c){s=u.a
u.d=t+1
x=J.S(s,t)
switch(x){case 44:w=n.b79()
if(w==null){u=n.a
return u}u=w
u.r=n.f
u.w=n.d
if(n.c!==0){if(w.f==null&&n.a.e!=null){u=n.a.e
t=u.a
s=u.b
r=u.c
u=u.d
w.f=new A.a36(t,s,r,new C.y0(new Uint8Array(C.bn(u.c)),u.a,u.b))}if(w.f!=null)w.f.c=n.e}n.a.r.push(w)
break
case 33:u=n.r
v=J.S(u.a,u.d++)
if(J.p(v,255)){u=n.r
if(u.iz(J.S(u.a,u.d++))==="NETSCAPE2.0"){q=J.S(u.a,u.d++)
p=J.S(u.a,u.d++)
if(q===3&&p===1)n.w=u.a9()}else n.awN()}else if(J.p(v,249)){u=n.r
u.toString
n.bWV(u)}else n.awN()
break
case 59:u=n.a
return u
default:break}}}catch(o){}return n.a},
bWV(d){var x,w,v,u=this
d.b3()
x=d.b3()
u.f=d.a9()
u.e=d.b3()
d.b3()
u.d=D.c.U(x,2)&7
u.c=x&1
w=d.asJ(1,0)
if(J.S(w.a,w.d)===44){++d.d
v=u.b79()
if(v==null)return
v.r=u.f
v.w=u.d
w=u.c!==0
v.x=w?u.e:-1
if(w){w=v.f
if(w==null&&u.a.e!=null){w=u.a.e
w.toString
w=v.f=A.diL(w)}if(w!=null)w.c=u.e}u.a.r.push(v)}},
i8(d){return C.fX(new A.baZ(this,d))},
bIy(d){var x,w,v,u=this,t=u.r
if(t==null||u.a==null)return null
x=u.a.r
w=x.length
if(d>=w)return null
v=x[d]
x=v.y
x===$&&C.d()
t.d=x
return u.bDC(v)},
p5(d,e){return C.fX(new A.bb_(this,d,e))},
bIx(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
if(a2.jL(a4)==null)return a3
x=a2.a
w=x.r.length
if(w===1)return a2.i8(0)
new A.AV(a2.b).j2(0,x.a*w,x.b)
for(x=y.q,v=a3,u=v,t=0;w=a2.a.r,t<w.length;++t){a5=w[t]
s=a2.i8(t)
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
if(w){u.pX(s)
v=s
continue}l=a5.f
if(!(l!=null)){w=a2.a.e
w.toString
l=w}w=o?a3:p.a
if(w==null)w=0
r=o?a3:p.b
if(r==null)r=0
k=C.hG(a3,a3,D.ak,0,D.bN,r,a3,0,1,l.aTr(),D.ak,w,!1)
w=a5.w
if(w===2){w=k.a
j=w==null?a3:J.dC(w.ga6(w))
if(j==null){w=k.a
w=w==null?a3:w.ga6(w)
if(w==null)w=D.n.ga6(new Uint8Array(0))
j=J.dC(w)}w=a5.x
r=j.length
if(w!==-1)D.n.dl(j,0,r,w)
else{w=a2.a.c.a
D.n.dl(j,0,r,!D.n.gX(w)?w[0]:0)}}else if(w!==3)if(a5.f!=null){w=v.a
i=w==null?a3:w.gdX()
h=C.t(x,x)
for(w=i.a,g=0;g<w;++g)h.j(0,g,l.ceN(i.oy(g),i.ow(g),i.ou(g),i.ot(g)))
w=k.a
f=w==null?a3:J.dC(w.ga6(w))
if(f==null){w=k.a
w=w==null?a3:w.ga6(w)
if(w==null)w=D.n.ga6(new Uint8Array(0))
f=J.dC(w)}w=v.a
e=w==null?a3:J.dC(w.ga6(w))
if(e==null){w=v.a
w=w==null?a3:w.ga6(w)
if(w==null)w=D.n.ga6(new Uint8Array(0))
e=J.dC(w)}for(d=f.length,w=f.$flags|0,a0=0;a0<d;++a0){a1=h.h(0,e[a0])
if(a1!=null&&a1!==-1){w&2&&C.A(f)
f[a0]=a1}}}k.y=s.y
w=a5.a
w===$&&C.d()
r=a5.b
r===$&&C.d()
a2.bBW(s,k,w,r)
u.pX(k)
v=k}return u},
b79(){var x,w=this.r
if(w.d>=w.c)return null
x=new A.at3()
x.bwx(w);++this.r.d
this.awN()
return x},
bDC(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.x==null){k.x=new Uint8Array(256)
k.y=new Uint8Array(4095)
k.z=new Uint8Array(4096)
k.Q=new Uint32Array(4096)}x=k.as=k.r.b3()
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
x.$flags&2&&C.A(x)
x[0]=0
x=k.Q
x.toString
D.bi.dl(x,0,4096,4098)
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
s=C.hG(j,j,D.ak,0,D.bN,w,j,0,1,t.aTr(),D.ak,x,!1)
r=new Uint8Array(x)
v=d.e
v===$&&C.d()
if(v){v=d.b
v===$&&C.d()
for(w=v+w,q=0,p=0;q<4;++q)for(o=v+B.az3[q];o<w;o+=B.aCJ[q],++p){if(!k.b0b(r))return s
u=s.a
n=u==null
m=n?j:u.a
l=o*(m==null?0:m)
u=n?j:J.dC(u.ga6(u))
if(u==null){u=s.a
u=u==null?j:u.ga6(u)
if(u==null)u=D.n.ga6(new Uint8Array(0))
u=J.dC(u)}D.n.di(u,l,l+x,r)}}else for(o=0;o<w;++o){if(!k.b0b(r))return s
v=s.a
u=v==null
n=u?j:v.a
l=o*(n==null?0:n)
v=u?j:J.dC(v.ga6(v))
if(v==null){v=s.a
v=v==null?j:v.ga6(v)
if(v==null)v=D.n.ga6(new Uint8Array(0))
v=J.dC(v)}D.n.di(v,l,l+x,r)}return s},
bBW(d,e,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a,h=i==null?null:i.gdX(),g=h.a,f=J.hH(g,y.cB)
for(x=0;x<g;++x)f[x]=h.ot(x)!==0
w=d.bN()
v=e.bN()
u=d.gbV()
t=e.gbV()
s=e.gaW()
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
if(x<r&&f[x]){q&2&&C.A(v)
v[n+j]=x}}++o}},
b0G(){var x,w,v,u,t,s=this,r=s.r.iz(6)
if(r!=="GIF87a"&&r!=="GIF89a")return!1
x=s.a
x.toString
x.a=s.r.a9()
x=s.a
x.toString
x.b=s.r.a9()
w=s.r.b3()
x=s.a
x.toString
x.c=new C.uS(new Uint8Array(C.bn(C.a([s.r.b3()],y.t))));++s.r.d
if((w&128)!==0){x=s.a
x.toString
x.e=A.cVe(D.c.c7(1,(w&7)+1))
for(v=0;v<s.a.e.b;++v){x=s.r
u=J.S(x.a,x.d++)
x=s.r
t=J.S(x.a,x.d++)
x=s.r
w=J.S(x.a,x.d++)
s.a.e.d.qO(v,u,t,w)}}s.a.toString
return!0},
b0b(d){var x=this,w=x.at
w.toString
x.at=w-d.length
if(!x.bDY(d))return!1
if(x.at===0)x.awN()
return!0},
awN(){var x,w,v,u=this.r
if(u.d>=u.c)return!0
x=u.b3()
for(;;){if(x!==0){u=this.r
u=u.d<u.c}else u=!1
if(!u)break
u=this.r
w=u.d+=x
if(w>=u.c)return!0
v=u.a
u.d=w+1
x=J.S(v,w)}return!0},
bDY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ch
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
v&2&&C.A(d)
d[w]=t
w=u}}for(k=d.$flags|0;w<x;){s=l.CW=l.bDX()
if(s==null)return!1
v=l.dy
if(s===v)return!1
t=l.fr
if(s===t){for(t=l.Q,r=0;r<=4095;++r){t.toString
t.$flags&2&&C.A(t)
t[r]=4098}l.dx=v+1
v=l.as+1
l.db=v
l.cy=D.c.bX(1,v)
l.cx=4098}else{if(s<t){u=w+1
k&2&&C.A(d)
d[w]=s
w=u}else{v=l.Q
if(v[s]===4098){q=l.dx-2
if(s===q){s=l.cx
p=l.z
p===$&&C.d()
o=l.y
o===$&&C.d()
n=l.ch++
t=l.aI_(v,s,t)
o.$flags&2&&C.A(o)
o[n]=t
p.$flags&2&&C.A(p)
p[q]=t}else return!1}r=0
for(;;){m=r+1
if(!(r<=4095&&s>l.fr&&s<=4095))break
v=l.y
v===$&&C.d()
t=l.ch++
q=l.z
q===$&&C.d()
q=q[s]
v.$flags&2&&C.A(v)
v[t]=q
s=l.Q[s]
r=m}if(m>=4095||s>4095)return!1
v=l.y
v===$&&C.d()
t=l.ch
q=l.ch=t+1
v.$flags&2&&C.A(v)
v[t]=s
t=q
for(;;){if(!(t!==0&&w<x))break
u=w+1
t=l.ch=t-1
q=v[t]
k&2&&C.A(d)
d[w]=q
w=u}}v=l.cx
if(v!==4098&&l.Q[l.dx-2]===4098){t=l.Q
t.toString
q=l.dx-2
t.$flags&2&&C.A(t)
t[q]=v
p=l.CW
o=l.z
n=l.fr
if(p===q){o===$&&C.d()
v=l.aI_(t,v,n)
o.$flags&2&&C.A(o)
o[q]=v}else{o===$&&C.d()
p.toString
v=l.aI_(t,p,n)
o.$flags&2&&C.A(o)
o[q]=v}}v=l.CW
v.toString
l.cx=v}}return!0},
bDX(){var x,w,v,u,t=this
if(t.db>12)return null
while(x=t.ay,w=t.db,x<w){x=t.bzw()
x.toString
w=t.ax
v=t.ay
t.ax=(w|D.c.bX(x,v))>>>0
t.ay=v+8}v=t.ax
u=B.aDh[w]
t.ax=D.c.dS(v,w)
t.ay=x-w
x=t.dx
if(x<4097){++x
t.dx=x
x=x>t.cy&&w<12}else x=!1
if(x){t.cy=t.cy<<1>>>0
t.db=w+1}return v&u},
aI_(d,e,f){var x,w,v=0
for(;;){if(e>f){x=v+1
w=v<=4095
v=x}else w=!1
if(!w)break
if(e>4095)return 4098
e=d[e]}return e},
bzw(){var x,w,v=this,u=v.x,t=u[0],s=u.$flags|0
if(t===0){t=v.r.b3()
s&2&&C.A(u)
u[0]=t
u=v.x
t=u[0]
if(t===0)return null
D.n.di(u,1,1+t,v.r.dg(t).bN())
u=v.x
x=u[1]
u.$flags&2&&C.A(u)
u[1]=2
u[0]=u[0]-1}else{w=u[1]
s&2&&C.A(u)
u[1]=w+1
x=u[w]
u[0]=t-1}return x}}
A.Ry.prototype={
O(){return"IcoType."+this.b}}
A.bcZ.prototype={
gbV(){return 0},
gaW(){return 0}}
A.asw.prototype={}
A.bcU.prototype={
gaW(){return D.c.ab(A.zH.prototype.gaW.call(this),2)},
gaej(){return!(this.d===40&&this.f===32)&&A.zH.prototype.gaej.call(this)}}
A.bcV.prototype={
lk(d){var x,w=this,v=C.d9(d,!1,null,0)
w.a=v
try{w.b=A.cVu(v)}catch(x){w.b=null}return w.b!=null},
jL(d){return C.fX(new A.bcY(this,d))},
p5(d,e){return C.fX(new A.bcX(this,d,e))},
bOg(d,e){var x,w,v,u,t,s,r=this,q=null
if(r.jL(d)==null)return q
x=r.b.e.length
if(x===1)return r.i8(0)
w=new A.AV(r.c)
for(v=q,u=0;u<r.b.e.length;++u){e=r.i8(u)
if(e==null)continue
x=e.a
t=x==null
s=t?q:x.a
if(s==null)s=0
x=t?q:x.b
w.j2(0,s,x==null?0:x)
if(v==null){e.w=D.bN
v=e}else v.pX(e)}return v},
i8(d){return C.fX(new A.bcW(this,d))},
bOh(b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9!=null){x=a7.b
x=x==null||b0>=x.d}else x=!0
if(x)return a8
w=a7.b.e[b0]
x=a9.a
a9=a9.b+w.e
v=w.d
u=J.HA(x,a9,a9+v)
a9=a7.c
t=A.cYd(a9)
y.p.a(u)
if(t.lk(u))return t.p5(u,0)
s=A.a5A(!1,14)
s.kt(19778)
s.ku(v)
s.ku(0)
s.ku(0)
x=C.d9(u,!1,a8,0)
v=A.cSK(C.d9(J.cV(D.n.ga6(s.c),0,s.a),!1,a8,0))
r=x.d
q=x.Y()
p=x.Y()
o=$.hl()
o.$flags&2&&C.A(o)
o[0]=p
p=$.kG()
n=p[0]
o[0]=x.Y()
p=p[0]
m=x.a9()
l=x.a9()
k=x.Y()
if(k>=14)C.X(C.bQ("Unsupported BMP compression type: "+k))
k=B.YB[k]
x.Y()
o[0]=x.Y()
o[0]=x.Y()
o=x.Y()
x.Y()
j=new A.bcU(v,n,p,q,m,l,k,o,r)
j.aW4(x,v)
if(q!==40&&m!==1)return a8
i=o===0&&l<=8?40+4*D.c.c7(1,l):40+4*o
v.b=i
s.a-=4
s.ku(i)
h=C.d9(u,!1,a8,0)
g=new A.b4z(!0,a9)
g.a=h
g.b=j
f=g.i8(0)
if(l>=32)return f
e=32-D.c.a_(n,32)
d=D.c.ab(e===32?n:n+e,8)
for(a9=p<0,x=p===0,p=1/p<0,a0=0;a0<D.c.ab(A.zH.prototype.gaW.call(j),2);++a0){if(!(x?p:a9))a1=a0
else{v=f.a
v=v==null?a8:v.b
a1=(v==null?0:v)-1-a0}a2=h.h8(d)
h.d=h.d+(a2.c-a2.d)
v=f.a
a3=v==null?a8:v.d1(0,a1,a8)
if(a3==null)a3=new C.fr()
for(a4=0;a4<n;){a5=J.S(a2.a,a2.d++)
a6=7
for(;;){if(!(a6>-1&&a4<n))break
if((a5&D.c.bX(1,a6))>>>0!==0)a3.saL(0)
a3.l();++a4;--a6}}}return f}}
A.bg_.prototype={
O(){return"JpegChroma."+this.b}}
A.bg4.prototype={
bp4(d){d=D.c.H(D.c.aE(d,1,100))
if(this.Q===d)return
this.bOR(d<50?D.e.dK(5000/d):D.c.dK(200-d*2))
this.Q=d},
bdV(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
if(b4.gbV()<1||b4.gaW()<1||b4.a==null)C.X(C.bQ("Cannot encode an empty image"))
x=A.a5A(!0,8192)
b3.xT(x,216)
b3.xT(x,224)
x.kt(16)
x.b1(74)
x.b1(70)
x.b1(73)
x.b1(70)
x.b1(0)
x.b1(1)
x.b1(1)
x.b1(0)
x.kt(1)
x.kt(1)
x.b1(0)
x.b1(0)
b3.c5e(x,b4.gu8())
w=b4.c
if(w!=null){b3.xT(x,226)
v=w.cbQ()
u=C.a([73,67,67,95,80,82,79,70,73,76,69,0],y.t)
x.kt(14+v.length)
x.hZ(u)
x.hZ(v)}b3.c5d(x)
w=b4.gbV()
t=b4.gaW()
b3.xT(x,192)
x.kt(17)
x.b1(8)
x.kt(t)
x.kt(w)
x.b1(3)
x.b1(1)
w=b5===B.Gg
x.b1(w?17:34)
x.b1(0)
x.b1(2)
x.b1(17)
x.b1(1)
x.b1(3)
x.b1(17)
x.b1(1)
b3.c5c(x)
b3.xT(x,218)
x.kt(12)
x.b1(3)
x.b1(1)
x.b1(0)
x.b1(2)
x.b1(17)
x.b1(3)
x.b1(17)
x.b1(0)
x.b1(63)
x.b1(0)
b3.at=b3.as=0
s=b4.gbV()
r=b4.gaW()
q=b4.f
if(q==null)q=B.apy
if(w){p=new Float32Array(64)
o=new Float32Array(64)
n=new Float32Array(64)
for(w=b3.c,t=b3.d,m=0,l=0,k=0,j=0;j<r;j+=8)for(i=0;i<s;i+=8){b3.YT(b4,i,j,s,r,p,o,n,q)
h=b3.e
h===$&&C.d()
g=b3.r
g===$&&C.d()
m=b3.xA(x,p,w,m,h,g)
g=b3.f
g===$&&C.d()
h=b3.w
h===$&&C.d()
l=b3.xA(x,o,t,l,g,h)
k=b3.xA(x,n,t,k,b3.f,b3.w)}}else{w=y.z
p=J.hH(4,w)
for(f=0;f<4;++f)p[f]=new Float32Array(64)
o=J.hH(4,w)
for(f=0;f<4;++f)o[f]=new Float32Array(64)
n=J.hH(4,w)
for(f=0;f<4;++f)n[f]=new Float32Array(64)
e=new Float32Array(64)
d=new Float32Array(64)
for(w=b3.c,t=b3.d,m=0,l=0,k=0,j=0;j<r;j+=16)for(h=j+8,i=0;i<s;i+=16){g=p[0]
a0=o[0]
a1=n[0]
b3.YT(b4,i,j,s,r,g,a0,a1,q)
a2=i+8
a3=p[1]
a4=o[1]
a5=n[1]
b3.YT(b4,a2,j,s,r,a3,a4,a5,q)
a6=p[2]
a7=o[2]
a8=n[2]
b3.YT(b4,i,h,s,r,a6,a7,a8,q)
a9=p[3]
b0=o[3]
b1=n[3]
b3.YT(b4,a2,h,s,r,a9,b0,b1,q)
b3.aZR(e,a0,a4,a7,b0)
b3.aZR(d,a1,a5,a8,b1)
b1=b3.e
b1===$&&C.d()
a8=b3.r
a8===$&&C.d()
m=b3.xA(x,a9,w,b3.xA(x,a6,w,b3.xA(x,a3,w,b3.xA(x,g,w,m,b1,a8),b3.e,b3.r),b3.e,b3.r),b3.e,b3.r)
a8=b3.f
a8===$&&C.d()
b1=b3.w
b1===$&&C.d()
l=b3.xA(x,e,t,l,a8,b1)
k=b3.xA(x,d,t,k,b3.f,b3.w)}}b2=8-b3.at
b3.xS(x,D.c.bX(1,b2)-1,b2)
b3.xT(x,217)
return J.cV(D.n.ga6(x.c),0,x.a)},
YT(d,e,f,g,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(d.gcq()===D.ak&&!d.gyK()&&d.gqq()>=3){x=d.a
this.bAk(J.dC(x.ga6(x)),d.a.gjJ(),d.gqq(),e,f,g,a0,a1,a2,a3,a4)
return}for(x=this.z,w=a1.$flags|0,v=a2.$flags|0,u=a3.$flags|0,t=f+1,s=null,r=0;r<64;++r){q=r>>>3
p=f+q
o=e+(r&7)
if(p>=a0)p-=t+q-a0
if(o>=g)o-=o-g+1
n=d.a
s=n==null?null:n.d1(o,p,s)
if(s==null)s=new C.fr()
m=s.gcq()!==D.ak?s.q6(D.ak):s
l=D.e.H(m.gaA())
k=D.e.H(m.gaO())
j=D.e.H(m.gaN())
if(m.gt(m)>3){i=m.gel()
h=1-i
l=D.c.aE(D.e.ar(l*i+a4.gaA()*h),0,255)
k=D.c.aE(D.e.ar(k*i+a4.gaO()*h),0,255)
j=D.c.aE(D.e.ar(j*i+a4.gaN()*h),0,255)}n=D.c.U(x[l]+x[k+256]+x[j+512],16)
w&2&&C.A(a1)
a1[r]=n-128
n=D.c.U(x[l+768]+x[k+1024]+x[j+1280],16)
v&2&&C.A(a2)
a2[r]=n-128
n=D.c.U(x[l+1280]+x[k+1536]+x[j+1792],16)
u&2&&C.A(a3)
a3[r]=n-128}},
bAk(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.z,d=b2.gaA(),a0=b2.gaO(),a1=b2.gaN()
for(x=a9.$flags|0,w=b0.$flags|0,v=b1.$flags|0,u=a4>3,t=a7-1,s=a8-1,r=0,q=0;r<8;++r){p=a6+r
o=(p<a8?p:s)*a3
for(n=0;n<8;++n,++q){m=a5+n
l=o+(m<a7?m:t)*a4
k=a2[l]
j=a2[l+1]
i=a2[l+2]
if(u){h=a2[l+3]/255
g=1-h
k=D.c.aE(D.e.ar(k*h+d*g),0,255)
j=D.c.aE(D.e.ar(j*h+a0*g),0,255)
i=D.c.aE(D.e.ar(i*h+a1*g),0,255)}f=D.c.U(e[k]+e[j+256]+e[i+512],16)
x&2&&C.A(a9)
a9[q]=f-128
f=D.c.U(e[k+768]+e[j+1024]+e[i+1280],16)
w&2&&C.A(b0)
b0[q]=f-128
f=D.c.U(e[k+1280]+e[j+1536]+e[i+1792],16)
v&2&&C.A(b1)
b1[q]=f-128}}},
aZR(d,e,f,g,h){var x,w,v,u,t,s,r,q
for(x=d.$flags|0,w=0;w<64;++w){if(w<32)v=D.c.a_(w,8)<4?e:f
else v=D.c.a_(w,8)<4?g:h
u=(D.c.ab(D.c.a_(w,32),8)<<4>>>0)+(D.c.a_(w,4)<<1>>>0)
t=v[u]
s=v[u+1]
r=v[u+8]
q=v[u+9]
x&2&&C.A(d)
d[w]=(t+s+r+q)/4}},
xT(d,e){d.b1(255)
d.b1(e&255)},
bOR(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=g.a,w=x.$flags|0,v=0;v<64;++v){u=D.e.dK((B.aJ3[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
t=B.wM[v]
w&2&&C.A(x)
x[t]=u}for(w=g.b,t=w.$flags|0,s=0;s<64;++s){r=D.e.dK((B.aCg[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
q=B.wM[s]
t&2&&C.A(w)
w[q]=r}for(t=g.c,q=t.$flags|0,p=g.d,o=p.$flags|0,n=0,m=0;m<8;++m)for(l=0;l<8;++l){k=B.wM[n]
j=x[k]
i=B.Sx[m]
h=B.Sx[l]
q&2&&C.A(t)
t[n]=1/(j*i*h*8)
k=w[k]
o&2&&C.A(p)
p[n]=1/(k*i*h*8);++n}},
atJ(d,e){var x,w,v,u,t,s=new Int32Array(256),r=new Uint8Array(256)
for(x=0,w=0,v=1;v<=16;++v){for(u=1;u<=d[v];++u){t=e[w]
s[t]=x
r[t]=v;++w;++x}x*=2}return new A.c4l(s,r)},
bOS(){var x,w,v
for(x=this.z,w=x.$flags|0,v=0;v<256;++v){w&2&&C.A(x)
x[v]=19595*v
x[v+256]=38470*v
x[v+512]=7471*v+32768
x[v+768]=-11059*v
x[v+1024]=-21709*v
x[v+1280]=32768*v+8421375
x[v+1536]=-27439*v
x[v+1792]=-5329*v}},
bGt(d4,d5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
x&2&&C.A(d4)
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
x&2&&C.A(d4)
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
x.$flags&2&&C.A(x)
x[v]=t}return x},
c5e(d,e){var x,w
if(e.gX(0))return
x=A.a5A(!1,8192)
e.bZ(x)
w=J.cV(D.n.ga6(x.c),0,x.a)
this.xT(d,225)
d.kt(w.length+8)
d.ku(1165519206)
d.kt(0)
d.hZ(w)},
c5d(d){var x,w,v
this.xT(d,219)
d.kt(132)
d.b1(0)
for(x=this.a,w=0;w<64;++w)d.b1(x[w])
d.b1(1)
for(x=this.b,v=0;v<64;++v)d.b1(x[v])},
c5c(d){var x,w,v,u,t,s,r,q
this.xT(d,196)
d.kt(418)
d.b1(0)
for(x=0;x<16;){++x
d.b1(B.a_k[x])}for(w=0;w<=11;++w)d.b1(B.wd[w])
d.b1(16)
for(v=0;v<16;){++v
d.b1(B.Rn[v])}for(u=0;u<=161;++u)d.b1(B.SU[u])
d.b1(1)
for(t=0;t<16;){++t
d.b1(B.Ut[t])}for(s=0;s<=11;++s)d.b1(B.wd[s])
d.b1(17)
for(r=0;r<16;){++r
d.b1(B.Tn[r])}for(q=0;q<=161;++q)d.b1(B.Wg[q])},
xA(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.bGt(e,f),h=j.y
for(x=h.$flags|0,w=0;w<64;++w){v=B.wM[w]
u=i[w]
x&2&&C.A(h)
h[v]=u}x=h[0]
t=x-g
if(t===0)j.xS(d,a0.a[0],a0.b[0])
else{s=D.c.gtS(t<0?-t:t)
j.xS(d,a0.a[s],a0.b[s])
j.xS(d,A.djX(t,s),s)}r=63
for(;;){if(!(r>0&&h[r]===0))break;--r}if(r===0){j.xS(d,a1.a[0],a1.b[0])
return x}for(v=a1.a,u=a1.b,q=1;q<=r;){p=q
for(;;){if(!(h[p]===0&&p<=r))break;++p}o=p-q
if(o>=16){n=D.c.U(o,4)
for(m=1;m<=n;++m)j.xS(d,v[240],u[240])
o&=15}l=h[p]
s=D.c.gtS(l<0?-l:l)
k=(o<<4>>>0)+s
j.xS(d,v[k],u[k])
j.xS(d,l>0?l:l+D.c.bX(1,s)-1,s)
q=p+1}if(r!==63)j.xS(d,v[0],u[0])
return x},
xS(d,e,f){var x,w,v=this
v.as=(D.c.bX(v.as,f)|e)>>>0
v.at+=f
while(x=v.at,x>=8){x-=8
v.at=x
w=D.c.dS(v.as,x)&255
d.b1(w)
if(w===255)d.b1(0)}v.as=(v.as&D.c.bX(1,x)-1)>>>0}}
A.c4l.prototype={
gt(d){return this.b}}
A.Tk.prototype={
O(){return"PngDisposeMode."+this.b}}
A.a5Z.prototype={
O(){return"PngBlendMode."+this.b}}
A.a6_.prototype={}
A.at4.prototype={}
A.F0.prototype={
O(){return"PngFilterType."+this.b}}
A.brt.prototype={
gbV(){return this.a},
gaW(){return this.b}}
A.bfD.prototype={}
A.bro.prototype={
lk(d){var x
if(d.length<8)return!1
for(x=0;x<8;++x)if(d[x]!==B.YO[x])return!1
return!0},
jL(d){return C.fX(new A.brr(this,d))},
bVD(b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=C.d9(b6,!0,b4,0)
b3.e=b5
x=b5.dg(8)
for(w=0;w<8;++w)if(J.S(x.a,x.d+w)!==B.YO[w])return b4
for(b5=b3.a,v=b5.cy,u=y.t,t=b5.db,s=y.H,r=b3.b,q=b5.ax;;){p=b3.e
o=p.d-p.b
n=p.Y()
m=b3.e.iz(4)
switch(m){case"tEXt":p=b3.e
l=p.h8(n)
p.d=p.d+(l.c-l.d)
k=l.bN()
j=k.length
for(w=0;w<j;++w)if(k[w]===0){p=w+1
q.j(0,D.eG.cv(new Uint8Array(k.subarray(0,C.on(0,w,j)))),D.eG.cv(new Uint8Array(k.subarray(p,C.on(p,b4,j)))))
break}b3.e.d+=4
break
case"pHYs":p=b3.e
l=p.h8(n)
p.d=p.d+(l.c-l.d)
i=A.dk(l,b4,0)
i.Y()
i.Y()
J.S(i.a,i.d++)
b3.e.d+=4
break
case"IHDR":p=b3.e
l=p.h8(n)
p.d=p.d+(l.c-l.d)
h=A.dk(l,b4,0)
g=h.bN()
b5.a=h.Y()
p=h.Y()
b5.b=p
A.oq(b5.a,p,r,!1)
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
break}if(b3.e.Y()!==C.or(g,C.or(new C.f1(m),0)))throw C.o(C.bQ("Invalid "+m+" checksum"))
break
case"PLTE":p=b3.e
l=p.h8(n)
p.d=p.d+(l.c-l.d)
b5.w=l.bN()
if(b3.e.Y()!==C.or(s.a(b5.w),C.or(new C.f1(m),0)))throw C.o(C.bQ("Invalid "+m+" checksum"))
break
case"tRNS":p=b3.e
l=p.h8(n)
p.d=p.d+(l.c-l.d)
b5.x=l.bN()
f=b3.e.Y()
p=b5.x
p.toString
if(f!==C.or(p,C.or(new C.f1(m),0)))throw C.o(C.bQ("Invalid "+m+" checksum"))
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
p=B.azQ[a4]
a6=B.aGd[a5]
v.push(new A.at4(C.a([],u),e,d,a0,a1,a2,a3,p,a6))
b3.e.d+=4
break
case"fdAT":b3.e.Y()
D.b.ga8(v).y.push(o)
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
b5.z=new C.Ih(a6)}else{p=new Uint8Array(3)
p[0]=a9
p[1]=b0
p[2]=b1
b5.z=new C.aoG(p)}}else if(p===0||p===4){b3.e.a9()
n-=2}else if(p===2||p===6){p=b3.e
p.a9()
p.a9()
p.a9()
n-=24}if(n>0)b3.e.d+=n
b3.e.d+=4
break
case"iCCP":b5.Q=b3.e.amr()
p=b3.e
J.S(p.a,p.d++)
p=b5.Q
a6=b3.e
l=a6.h8(n-(p.length+2))
a6.d=a6.d+(l.c-l.d)
b5.at=l.bN()
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
i8(d){return C.fX(new A.brp(this,d))},
bVB(b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=b1.a,b4=b3.a,b5=b3.b,b6=b3.cy,b7=b6.length
if(b7===0||b8===0){r=C.a([],y.a)
b6=b3.db
q=b6.length
for(p=0,o=0;o<q;++o){b7=b1.e
b7===$&&C.d()
b7.d=b6[o]
n=b7.Y()
m=b1.e.iz(4)
b7=b1.e
l=b7.h8(n)
b7.d=b7.d+(l.c-l.d)
k=l.bN()
p+=k.length
r.push(k)
if(b1.e.Y()!==C.or(k,C.or(new C.f1(m),0)))throw C.o(C.bQ("Invalid "+m+" checksum"))}j=new Uint8Array(p)
for(b6=r.length,i=0,h=0;h<r.length;r.length===b6||(0,C.r)(r),++h){k=r[h]
D.n.hJ(j,i,k)
i+=k.length}}else{if(b8>=b7)throw C.o(C.bQ("Invalid Frame Number: "+b8))
g=b6[b8]
b4=g.b
b5=g.c
A.oq(b4,b5,b1.b,!1)
r=C.a([],y.a)
for(b6=g.y,p=0,o=0;o<b6.length;++o){b7=b1.e
b7===$&&C.d()
b7.d=b6[o]
n=b7.Y()
b7=b1.e
b7.iz(4)
b7.d+=4
b7=b1.e
l=b7.h8(n-4)
b7.d=b7.d+(l.c-l.d)
k=l.bN()
p+=k.length
r.push(k)}j=new Uint8Array(p)
for(b6=r.length,i=0,h=0;h<r.length;r.length===b6||(0,C.r)(r),++h){k=r[h]
D.n.hJ(j,i,k)
i+=k.length}}b6=b3.d
f=1
if(!(b6===3))if(!(b6===0)){if(b6===4)b6=2
else b6=b6===6?4:3
f=b6}b6=C.kq(j,D.ay,b2,b2)
x=C.cW6(new C.asV(b6,D.nE,!1,D.KZ))
b1.d=b1.c=0
e=b2
if(b3.d===3){b6=b3.w
if(b6!=null){d=b6.length/3|0
a0=b3.x
b7=a0!=null
a1=b7?a0.length:0
a2=b7?4:3
e=new C.y0(new Uint8Array(d*a2),d,a2)
for(b7=a2===4,o=0,a3=0;o<d;++o,a3+=3){a4=b7&&o<a1?a0[o]:255
e.asq(o,b6[a3],b6[a3+1],b6[a3+2],a4)}}}if(b3.d===0&&b3.x!=null&&e==null&&b3.c<=8){a0=b3.x
a5=a0.length
b6=b3.c
d=D.c.bX(1,b6)
b7=new Uint8Array(d*4)
e=new C.y0(b7,d,4)
if(b6===1)a6=255
else if(b6===2)a6=85
else{b6=b6===4?17:1
a6=b6}for(o=0;o<d;++o){a7=o*a6
e.asq(o,a7,a7,a7,255)}for(o=0;o<a5;o+=2){a8=(a0[o]&255)<<8|a0[o+1]&255
if(a8<d)b7[a8*4+3]=0}}b6=b3.c
if(b6===1)a9=D.fS
else if(b6===2)a9=D.hp
else{if(b6===4)b7=D.hq
else b7=b6===16?D.dp:D.ak
a9=b7}b7=b3.d
if(b7===0&&b3.x!=null&&b6>8)f=4
w=C.hG(b2,b2,a9,0,D.bN,b5,b2,0,b7===2&&b3.x!=null?4:f,e,D.ak,b4,!1)
v=b3.a
u=b3.b
b3.a=b4
b3.b=b5
t=b4
s=b5
b1.f=0
try{if(b3.r!==0){b1.Ff(x,w,0,0,8,8,D.e.U(t+7,3),D.e.U(s+7,3))
b1.Ff(x,w,4,0,8,8,D.e.U(t+3,3),D.e.U(s+7,3))
b1.Ff(x,w,0,4,4,8,D.e.U(t+3,2),D.e.U(s+3,3))
b1.Ff(x,w,2,0,4,4,D.e.U(t+1,2),D.e.U(s+3,2))
b1.Ff(x,w,0,2,2,4,D.e.U(t+1,1),D.e.U(s+1,2))
b1.Ff(x,w,1,0,2,2,D.e.U(t,1),D.e.U(s+1,1))
b1.Ff(x,w,0,1,1,2,t,D.e.U(s,1))}else b1.bVC(x,w)}catch(b0){b6=C.Z(b0)
if(b6 instanceof C.uI)return b2
else if(y.Y.b(b6))return b2
else if(b6 instanceof A.ajA)return b2
else throw b0}finally{x.G9()
b3.a=v
b3.b=u}b6=b3.at
if(b6!=null)w.c=new C.An(b3.Q,B.auN,b6)
b3=b3.ax
if(b3.a!==0)w.c6t(b3)
return w},
p5(d,e){return C.fX(new A.brq(this,d,e))},
bVA(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.jL(d)==null)return e
x=f.a
w=x.cy
v=w.length
if(v===0||a0!=null)return f.i8(a0==null?0:a0)
u=Math.min(x.CW,v)
new A.AV(f.b).j2(0,x.a*u,x.b)
for(v=y.g,t=e,s=t,r=0;r<u;++r){a0=w[r]
q=f.i8(r)
if(q==null)continue
if(s==null||t==null){s=q.bcs(q.gqq())
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
n=n===(m==null?0:m)&&a0.d===0&&a0.e===0&&a0.x===B.a9X}else n=!1
if(n){p=a0.f
q.y=D.e.H((p===0||a0.r===0?0:p/a0.r)*1000)
s.pX(q)
t=q
continue}h=s.x
t=C.tp((h===$?s.x=C.a([],v):h)[p],!1,!1)
g=o.w
if(g===B.a9Z){p=o.d
n=o.e
m=x.z
if(m==null){m=new Uint8Array(4)
l=new C.Ih(m)
m[0]=0
m[1]=0
m[2]=0
m[3]=0
m=l}A.d5i(t,!1,m,p,p+o.b-1,n,n+o.c-1)}else if(g===B.aa_&&r>1){h=s.x
if(h===$)h=s.x=C.a([],v)
p=o.d
n=o.e
m=o.b
l=o.c
t=A.cOs(t,h[r-2],B.Dt,l,m,p,n,l,m,p,n)}p=a0.f
t.y=D.e.H((p===0||a0.r===0?0:p/a0.r)*1000)
p=a0.x===B.a9Y?B.Dt:B.tp
t=A.cOs(t,q,p,e,e,a0.d,a0.e,e,e,e,e)
s.pX(t)}return s},
gaJN(){var x=this.a.d
if(x===4)x=2
else if(x===2)x=3
else x=x===6?4:1
return x},
Ff(d,e,f,g,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
if(a2===0||a3===0)return
x=h.gaJN()
w=h.a.c
v=x*w
u=D.c.U(v+7,3)
t=D.c.ab(v*a2+7,8)
s=w===8||w===16
r=C.a([0,0,0,0],y.t)
for(q=g,p=null,o=null,n=0;n<a3;++n,q+=a1,++h.f,o=l){m=B.Y_[d.b3()]
l=d.dg(t).bN()
x=l.length
if(x!==t)throw C.o(B.Mx)
h.b8D(m,u,l,o)
if(s){h.bad(l,e,q,f,a0,a2)
continue}h.d=h.c=0
k=new C.m0(l,0,Math.min(x,x),0,!0)
for(j=f,i=0;i<a2;++i,j+=a0){h.b4T(k,r)
x=e.a
p=x==null?null:x.d1(j,q,p)
if(p==null)p=new C.fr()
h.b6O(p,r)}}},
bVC(d,e){var x,w,v,u,t,s,r,q=this,p=q.gaJN(),o=q.a,n=o.c,m=p*n,l=o.a,k=o.b,j=D.c.ab(l*m+7,8),i=D.c.U(m+7,3),h=n===8||n===16,g=C.a([0,0,0,0],y.t)
p=e.a
x=p.gL(p)
x.l()
for(w=null,v=0;v<k;++v,w=t){u=B.Y_[d.b3()]
t=d.dg(j).bN()
p=t.length
if(p!==j)throw C.o(B.Mx)
q.b8D(u,i,t,w)
if(h){q.bad(t,e,v,0,1,l)
continue}q.d=q.c=0
s=new C.m0(t,0,Math.min(p,p),0,!0)
for(r=0;r<l;++r){q.b4T(s,g)
q.b6O(x.gq(),g)
x.l()}}},
bad(d,e,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.gaJN(),i=e.a,h=i.c,g=this.a,f=g.x
if(g.c===8){x=J.dC(i.ga6(i))
w=a0*e.a.gjJ()+a1*h
v=a2*h
if(h===j){if(a2===1){D.n.di(x,w,w+a3*j,d)
return}for(i=x.$flags|0,u=0,t=0;u<a3;++u,w+=v)for(s=0;s<j;++s,t=r){r=t+1
g=d[t]
i&2&&C.A(x)
x[w+s]=g}return}q=(f[0]&255)<<8|f[1]&255
p=(f[2]&255)<<8|f[3]&255
o=(f[4]&255)<<8|f[5]&255
for(i=x.$flags|0,u=0,t=0;u<a3;++u,t+=3,w+=v){n=d[t]
m=d[t+1]
l=d[t+2]
i&2&&C.A(x)
x[w]=n
x[w+1]=m
x[w+2]=l
g=n===q&&m===p&&l===o?0:255
x[w+3]=g}return}x=y.Q.a(i).d
w=(a0*e.gbV()+a1)*h
v=a2*h
if(h===j)for(i=x.$flags|0,u=0,t=0;u<a3;++u,w+=v)for(s=0;s<j;++s,t+=2){g=d[t]
k=d[t+1]
i&2&&C.A(x)
x[w+s]=(g<<8|k)>>>0}else if(j===3){q=(f[0]&255)<<8|f[1]&255
p=(f[2]&255)<<8|f[3]&255
o=(f[4]&255)<<8|f[5]&255
for(i=x.$flags|0,u=0,t=0;u<a3;++u,t+=6,w+=v){n=(d[t]<<8|d[t+1])>>>0
m=(d[t+2]<<8|d[t+3])>>>0
l=(d[t+4]<<8|d[t+5])>>>0
i&2&&C.A(x)
x[w]=n
x[w+1]=m
x[w+2]=l
g=n===q&&m===p&&l===o?0:65535
x[w+3]=g}}else{p=(f[0]&255)<<8|f[1]&255
for(i=x.$flags|0,u=0,t=0;u<a3;++u,t+=2,w+=v){m=(d[t]<<8|d[t+1])>>>0
i&2&&C.A(x)
x[w]=m
x[w+1]=m
x[w+2]=m
g=m===p?0:65535
x[w+3]=g}}},
b8D(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=f.length,l=e<m?e:m
switch(d.a){case 0:break
case 1:for(x=f.$flags|0,w=e;w<m;++w){v=f[w]
u=f[w-e]
x&2&&C.A(f)
f[w]=v+u}break
case 2:if(g!=null)for(x=f.$flags|0,w=0;w<m;++w){v=f[w]
u=g[w]
x&2&&C.A(f)
f[w]=v+u}break
case 3:if(g==null)for(x=f.$flags|0,w=e;w<m;++w){v=f[w]
u=f[w-e]
x&2&&C.A(f)
f[w]=v+(u>>>1)}else{for(x=f.$flags|0,w=0;w<l;++w){v=f[w]
u=g[w]
x&2&&C.A(f)
f[w]=v+(u>>>1)}for(w=e;w<m;++w){v=f[w]
u=f[w-e]
t=g[w]
x&2&&C.A(f)
f[w]=v+(u+t>>>1)}}break
case 4:if(g==null)for(x=f.$flags|0,w=e;w<m;++w){v=f[w]
u=f[w-e]
x&2&&C.A(f)
f[w]=v+u}else{for(x=f.$flags|0,w=0;w<l;++w){v=f[w]
u=g[w]
x&2&&C.A(f)
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
x&2&&C.A(f)
f[w]=v+u}}break}},
tF(d,e){var x,w,v,u,t,s=this
if(e===0)return 0
if(e===8)return d.b3()
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
w=D.c.dS(s.c,x)
s.d=x
return w&t},
b4T(d,e){var x=this,w=x.a,v=w.d
switch(v){case 0:e[0]=x.tF(d,w.c)
return
case 2:e[0]=x.tF(d,w.c)
e[1]=x.tF(d,w.c)
e[2]=x.tF(d,w.c)
return
case 3:e[0]=x.tF(d,w.c)
return
case 4:e[0]=x.tF(d,w.c)
e[1]=x.tF(d,w.c)
return
case 6:e[0]=x.tF(d,w.c)
e[1]=x.tF(d,w.c)
e[2]=x.tF(d,w.c)
e[3]=x.tF(d,w.c)
return}throw C.o(C.bQ("Invalid color type: "+v+"."))},
b6O(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.d
switch(p){case 0:p=q.x
if(p!=null&&q.c>8){q=p[0]
p=p[1]
x=e[0]
d.il(x,x,x,x!==((q&255)<<8|p&255)?d.gbM():0)
return}d.jY(e[0],0,0)
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
if(w!==((p&255)<<8|u&255)||x!==((t&255)<<8|s&255)||v!==((r&255)<<8|q&255)){d.il(w,x,v,d.gbM())
return}}d.jY(w,x,v)
return
case 3:d.scT(e[0])
return
case 4:d.il(e[0],0,0,e[1])
return
case 6:d.il(e[0],e[1],e[2],e[3])
return}throw C.o(C.bQ("Invalid color type: "+p+"."))}}
A.ajA.prototype={$iaR:1}
A.F1.prototype={
O(){return"PnmFormat."+this.b}}
A.KW.prototype={
gbV(){return this.a},
gaW(){return this.b}}
A.bru.prototype={
lk(d){var x
this.b=C.d9(d,!1,null,0)
x=this.auA()
if(x==="P1"||x==="P2"||x==="P5"||x==="P3"||x==="P6")return!0
return!1},
p5(d,e){return C.fX(new A.brx(this,d,e))},
bVE(d,e){if(this.jL(d)==null)return null
return this.i8(0)},
jL(d){return C.fX(new A.bry(this,d))},
bVG(d){var x,w,v,u=this
u.b=C.d9(d,!1,null,0)
x=u.auA()
if(x==="P1"){w=u.a=new A.KW(B.r5)
w.e=B.aa0}else if(x==="P2"){w=u.a=new A.KW(B.r5)
w.e=B.aa1}else if(x==="P5"){w=u.a=new A.KW(B.r5)
w.e=B.I5}else if(x==="P3"){w=u.a=new A.KW(B.r5)
w.e=B.aa2}else if(x==="P6"){w=u.a=new A.KW(B.r5)
w.e=B.I6}else return u.b=null
w.a=u.a_F()
w=u.a
w.toString
w.b=u.a_F()
w=u.a
v=w.a
if(v<1||w.b<1)return u.a=u.b=null
A.oq(v,w.b,u.d,!1)
return u.a},
i8(d){return C.fX(new A.brw(this,d))},
bVF(d){var x,w,v,u,t,s=this,r=null,q=s.a
if(q==null)return r
q=q.e
if(q===B.aa0){s.aGh(1)
q=s.a
x=q.a
w=C.hG(r,r,D.fS,0,D.bN,q.b,r,0,1,r,D.ak,x,!1)
for(q=w.a,q=q.gL(q);q.l();){v=q.gq()
if(s.auA()==="1")v.jY(1,1,1)
else v.jY(0,0,0)}return w}else if(q===B.aa1||q===B.I5){u=s.a_F()
if(u===0)return r
s.aGh(1)
q=s.a
x=q.a
q=q.b
w=C.hG(r,r,s.beM(u),0,D.bN,q,r,0,1,r,D.ak,x,!1)
for(q=w.a,q=q.gL(q);q.l();){v=q.gq()
t=s.aw9(s.a.e,u)
v.jY(t,t,t)}return w}else if(q===B.aa2||q===B.I6){u=s.a_F()
if(u===0)return r
s.aGh(3)
q=s.a
x=q.a
q=q.b
w=C.hG(r,r,s.beM(u),0,D.bN,q,r,0,3,r,D.ak,x,!1)
for(q=w.a,q=q.gL(q);q.l();)q.gq().jY(s.aw9(s.a.e,u),s.aw9(s.a.e,u),s.aw9(s.a.e,u))
return w}return r},
aGh(d){var x,w=this.a,v=w.a
w=w.b
x=this.b
if(x.c-x.d+this.c.gt(0)<v*w*d)throw C.o(C.bQ("Truncated PNM data"))},
beM(d){if(d>255)return D.dp
if(d>15)return D.ak
if(d>3)return D.hq
if(d>1)return D.hp
return D.fS},
aw9(d,e){if(d===B.I5||d===B.I6)return this.b.b3()
return this.a_F()},
a_F(){var x,w,v=this.auA()
if(J.aK(v)===0)return 0
try{x=C.c0(v,null,null)
return x}catch(w){return 0}},
auA(){var x,w,v,u,t=this.b
if(t==null)return""
x=this.c
if(!x.gX(0))return x.wG()
w=D.d.Z(t.cnW())
if(w.length===0)return""
while(D.d.aF(w,"#"))w=D.d.Z(this.b.biM(70))
t=y.U
v=C.M(new C.aw(C.a(w.split(" "),y.s),new A.brv(),t),t.i("F.E"))
for(t=v.length,u=0;u<t;++u)if(D.d.aF(v[u],"#")){D.b.st(v,u)
break}x.C(0,v)
if(x.b===x.c)return""
return x.wG()}}
A.avV.prototype={}
A.avW.prototype={}
A.y7.prototype={}
A.avY.prototype={}
A.avZ.prototype={}
A.aw1.prototype={}
A.aw2.prototype={}
A.a6k.prototype={}
A.aw0.prototype={}
A.bt1.prototype={
bx1(d){var x,w,v,u,t=this
d.a9()
d.a9()
d.a9()
d.a9()
x=D.c.ab(d.c-d.d,8)
if(x>0){t.e=new Uint16Array(x)
t.f=new Uint16Array(x)
t.r=new Uint16Array(x)
t.w=new Uint16Array(x)
for(w=0;w<x;++w){v=t.e
u=d.a9()
v.$flags&2&&C.A(v)
v[w]=u
u=t.f
v=d.a9()
u.$flags&2&&C.A(u)
u[w]=v
v=t.r
u=d.a9()
v.$flags&2&&C.A(v)
v[w]=u
u=t.w
v=d.a9()
u.$flags&2&&C.A(u)
u[w]=v}}}}
A.TB.prototype={
biI(d,e,f,g,h,i,j){if(d.c-d.d<2)return
if(h==null)h=d.a9()
switch(h){case 0:g.toString
this.bXc(d,e,f,g)
break
case 1:if(i==null)i=this.bX6(d,f)
g.toString
this.bXb(d,e,f,g,i,j)
break
default:throw C.o(C.bQ("Unsupported compression: "+h))}},
cnV(d,e,f,g){return this.biI(d,e,f,g,null,null,0)},
bX6(d,e){var x,w=new Uint16Array(e)
for(x=0;x<e;++x)w[x]=d.a9()
return w},
bXc(d,e,f,g){var x,w=e*f
if(g===16)w*=2
if(w>d.c-d.d){x=new Uint8Array(w)
this.c=x
D.n.dl(x,0,w,255)
return}this.c=d.dg(w).bN()},
bXb(d,e,f,g,h,i){var x,w,v,u,t,s,r=e*f
if(g===16)r*=2
x=new Uint8Array(r)
this.c=x
w=i*f
if(w>=h.length){D.n.dl(x,0,r,255)
return}for(v=0,u=0;u<f;++u,w=t){t=w+1
s=d.h8(h[w])
d.d=d.d+(s.c-s.d)
x=this.c
x.toString
this.bDK(s,x,v)
v+=e}},
bDK(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=d.c,w=e.$flags|0,v=e.length;u=d.d,u<x;){t=d.a
d.d=u+1
u=J.S(t,u)
t=$.ov()
t.$flags&2&&C.A(t)
t[0]=u
s=$.pp()[0]
if(s<0){s=1-s
u=d.d
if(u>=x)break
t=d.a
d.d=u+1
r=J.S(t,u)
if(f+s>v)s=v-f
for(q=0;q<s;++q,f=p){p=f+1
w&2&&C.A(e)
e[f]=r}}else{++s
if(f+s>v)s=v-f
s=Math.min(s,x-d.d)
for(q=0;q<s;++q,f=p){p=f+1
u=J.S(d.a,d.d++)
w&2&&C.A(e)
e[f]=u}}}},
gaB(){return this.a}}
A.vJ.prototype={
O(){return"PsdColorMode."+this.b}}
A.bt6.prototype={
gc8m(){var x=this.e
x===$&&C.d()
return x},
bx2(d,e){var x,w,v=this
v.as=C.d9(d,!0,null,0)
v.bWe()
if(v.c!==943870035)return
x=v.as.Y()
v.as.dg(x)
x=v.as.Y()
v.ax=v.as.dg(x)
x=v.as.Y()
v.ay=v.as.dg(x)
w=v.as
v.ch=w.dg(w.c-w.d)},
o3(){var x,w=this
if(w.c===943870035){x=w.as
x===$&&C.d()
x=x==null}else x=!0
if(x)return!1
A.oq(w.a,w.b,w.CW,!1)
x=w.e
x===$&&C.d()
if(x<1||x>56)throw C.o(C.bQ("Invalid number of PSD channels: "+w.gc8m()))
w.bX4()
w.bX5()
w.bX8()
w.ch=w.ay=w.ax=w.as=null
return!0},
cbF(){if(!this.o3())return null
return this.coN()},
coN(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.y
if(a0!=null)return a0
a0=e.a
a0=C.hG(d,d,D.ak,0,D.bN,e.b,d,0,4,d,D.ak,a0,!1)
e.y=a0
a0.a3(0)
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
l=m==null?d:m.d1(n,q,d)
if(l==null)l=new C.fr()
k=D.e.H(l.gaA())
j=D.e.H(l.gaO())
i=D.e.H(l.gaN())
h=D.e.H(l.gaL())
o.toString
if(o>=0&&o<e.a&&v&&r<e.b){m=w.b
m.toString
g=e.y.a
f=g==null?d:g.d1(m+n,p,d)
if(f==null)f=new C.fr()
e.bze(D.e.H(f.gaA()),D.e.H(f.gaO()),D.e.H(f.gaN()),D.e.H(f.gaL()),k,j,i,h,t,u,f)}++n;++o}++q;++r}}a0=e.y
a0.toString
return a0},
bze(d,e,f,g,h,i,j,k,l,m,n){var x,w,v,u,t,s=k/255*m
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
case 1768188278:u=A.bt7(d,h)
v=A.bt7(e,i)
w=A.bt7(f,j)
x=k
break
case 1818391150:u=A.bt9(d,h)
v=A.bt9(e,i)
w=A.bt9(f,j)
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
case 1935897198:u=A.cLk(d,h)
v=A.cLk(e,i)
w=A.cLk(f,j)
x=k
break
case 1684633120:u=A.bt8(d,h)
v=A.bt8(e,i)
w=A.bt8(f,j)
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
case 1870030194:u=A.cLi(d,h,g,k)
v=A.cLi(e,i,g,k)
w=A.cLi(f,j,g,k)
x=k
break
case 1934387572:u=A.cLl(d,h)
v=A.cLl(e,i)
w=A.cLl(f,j)
x=k
break
case 1749838196:u=A.cLg(d,h)
v=A.cLg(e,i)
w=A.cLg(f,j)
x=k
break
case 1984719220:u=A.cLm(d,h)
v=A.cLm(e,i)
w=A.cLm(f,j)
x=k
break
case 1816947060:u=A.cLh(d,h)
v=A.cLh(e,i)
w=A.cLh(f,j)
x=k
break
case 1884055924:u=A.cLj(d,h)
v=A.cLj(e,i)
w=A.cLj(f,j)
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
case 1936553316:u=A.cLf(d,h)
v=A.cLf(e,i)
w=A.cLf(f,j)
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
n.saA(D.e.H(d*t+u*s))
n.saO(D.e.H(e*t+v*s))
n.saN(D.e.H(f*t+w*s))
n.saL(D.e.H(g*t+x*s))},
bWe(){var x,w,v=this,u=v.as
u===$&&C.d()
v.c=u.Y()
u=v.as.a9()
v.d=u
if(u!==1){v.c=0
return}x=v.as.dg(6)
for(w=0;w<6;++w)if(J.S(x.a,x.d+w)!==0){v.c=0
return}v.e=v.as.a9()
v.b=v.as.Y()
v.a=v.as.Y()
v.f=v.as.a9()
v.r=B.aYc[v.as.a9()]},
bX4(){var x,w,v,u,t,s=this,r=s.ax
r.d=r.b
for(r=s.z;x=s.ax,x.d<x.c;){w=x.Y()
v=s.ax.a9()
x=s.ax
u=J.S(x.a,x.d++)
s.ax.iz(u)
if((u&1)===0)++s.ax.d
u=s.ax.Y()
x=s.ax
t=x.h8(u)
x.d=x.d+(t.c-t.d)
if((u&1)===1)++s.ax.d
if(w===943868237)r.j(0,v,new A.avX(v))}},
bX5(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ay
h.d=h.b
x=h.Y()
if((x&1)!==0)++x
w=i.ay.dg(x)
h=i.w
D.b.a3(h)
if(x>0){v=w.a9()
u=$.ou()
u.$flags&2&&C.A(u)
u[0]=v
t=$.po()[0]
if(t<0)t=-t
for(v=y.N,u=y.c,s=y.l,r=y.x,q=0;q<t;++q){p=new A.aw_(C.t(v,u),C.a([],s),C.a([],r))
p.bx3(w)
h.push(p)}}v=i.CW
o=new A.AV(v)
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
A.oq(s,r,v,!0)
o.j2(0,p.e,p.f)
r=p.e
s=p.f
k=p.as
k===$&&C.d()
m+=r*s*k.length*n}if(m>Math.max(128*i.at,16777216))throw C.o(C.bQ("PSD data is too small for its size"))
for(q=0;q<h.length;++q)h[q].cnN(w,i)
x=i.ay.Y()
j=i.ay.dg(x)
if(x>0){j.a9()
j.a9()
j.a9()
j.a9()
j.a9()
j.a9()
j.b3()}},
bX8(){var x,w,v,u,t,s,r=this,q=r.ch
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
s=new A.TB(s)
s.biI(w,r.a,r.b,r.f,x,u,t)
q.push(s);++t}r.y=A.cYv(r.r,r.f,r.a,r.b,r.x)},
gbV(){return this.a},
gaW(){return this.b}}
A.avX.prototype={
gaB(){return this.a}}
A.aw_.prototype={
bx3(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a1.Y(),a0=$.hl()
a0.$flags&2&&C.A(a0)
a0[0]=d
d=$.kG()
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
a0=$.ou()
a0.$flags&2&&C.A(a0)
a0[0]=d
v=$.po()[0]
a1.Y()
e.as.push(new A.TB(v))}u=a1.Y()
if(u!==943868237)throw C.o(C.bQ("Invalid PSD layer signature: "+D.c.hF(u,16)))
e.r=a1.Y()
e.w=a1.b3()
a1.b3()
e.y=a1.b3()
if(a1.b3()!==0)throw C.o(C.bQ("Invalid PSD layer data"))
t=a1.Y()
s=a1.dg(t)
if(t>0){t=s.Y()
if(t>0){r=s.dg(t)
d=r.d
r.Y()
r.Y()
r.Y()
r.Y()
r.b3()
r.b3()
if(r.c-d===20)r.d+=2
else{r.b3()
r.b3()
r.Y()
r.Y()
r.Y()
r.Y()}}t=s.Y()
if(t>0)new A.bt1().bx1(s.dg(t))
t=s.b3()
s.iz(t)
q=4-D.c.a_(t,4)-1
if(q>0)s.d+=q
for(d=s.c,a0=e.ay,p=e.cy,o=y.C;s.d<d;){u=s.Y()
if(u!==943868237)throw C.o(C.bQ("PSD invalid signature for layer additional data: "+D.c.hF(u,16)))
n=s.iz(4)
t=s.Y()
m=s.h8(t)
l=s.d+(m.c-m.d)
s.d=l
if((t&1)===1)s.d=l+1
a0.j(0,n,A.dmG(n,m))
if(n==="lrFX"){k=A.dk(o.a(a0.h(0,"lrFX")).b,null,0)
k.a9()
j=k.a9()
for(i=0;i<j;++i){k.iz(4)
h=k.iz(4)
g=k.Y()
if(h==="dsdw"){f=new A.avW()
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
k.iz(8)
f.b=J.S(k.a,k.d++)!==0
J.S(k.a,k.d++)
J.S(k.a,k.d++)
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()}else if(h==="isdw"){f=new A.avZ()
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
k.iz(8)
f.b=J.S(k.a,k.d++)!==0
J.S(k.a,k.d++)
J.S(k.a,k.d++)
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()}else if(h==="oglw"){f=new A.aw1()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.iz(8)
f.b=J.S(k.a,k.d++)!==0
J.S(k.a,k.d++)
if(f.a===2){k.a9()
k.a9()
k.a9()
k.a9()
k.a9()}}else if(h==="iglw"){f=new A.avY()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()
k.iz(8)
f.b=J.S(k.a,k.d++)!==0
J.S(k.a,k.d++)
if(f.a===2){J.S(k.a,k.d++)
k.a9()
k.a9()
k.a9()
k.a9()
k.a9()}}else if(h==="bevl"){f=new A.avV()
p.push(f)
f.a=k.Y()
k.Y()
k.Y()
k.Y()
k.iz(8)
k.iz(8)
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
k.a9()}}else if(h==="sofi"){f=new A.aw2()
p.push(f)
f.a=k.Y()
k.iz(4)
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
cnN(d,e){var x,w,v,u,t,s=this,r=0
for(;;){x=s.as
x===$&&C.d()
if(!(r<x.length))break
x=x[r]
w=s.e
w===$&&C.d()
v=s.f
v===$&&C.d()
x.cnV(d,w,v,e.f);++r}w=e.r
v=e.f
u=s.e
u===$&&C.d()
t=s.f
t===$&&C.d()
s.cx=A.cYv(w,v,u,t,x)}}
A.TC.prototype={}
A.bt2.prototype={
lk(d){var x,w
try{x=A.cYu(d,null).c
return x===943870035}catch(w){return!1}},
p5(d,e){return C.fX(new A.bt4(this,d,e))},
bWd(d,e){var x,w,v,u=this
if(u.jL(d)==null)return null
x=u.a==null?null:1
if(x==null)x=0
if(x===1)return u.i8(0)
for(w=null,v=0;v<x;++v){e=u.i8(v)
if(e==null)continue
if(w==null){e.w=B.Ph
w=e}else w.pX(e)}return w},
jL(d){return C.fX(new A.bt5(this,d))},
i8(d){return C.fX(new A.bt3(this,d))}}
A.aw5.prototype={}
A.B6.prototype={
aP(d,e){return new A.B6(this.a*e,this.b*e,this.c*e)},
ag(d,e){return new A.B6(this.a+e.a,this.b+e.b,this.c+e.c)},
aD(d,e){return new A.B6(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.n1.prototype={
aP(d,e){var x=this
return new A.n1(x.a*e,x.b*e,x.c*e,x.d*e)},
ag(d,e){var x=this
return new A.n1(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
aD(d,e){var x=this
return new A.n1(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)}}
A.a6m.prototype={
gbV(){return this.a},
gaW(){return this.b}}
A.TE.prototype={
gaW(){return this.f},
gbV(){return this.r}}
A.aw4.prototype={
gbV(){return this.a},
gaW(){return this.b}}
A.tL.prototype={
sa7r(d){var x=this.a,w=this.b
x.$flags&2&&C.A(x)
x[w+1]=d},
arJ(){var x=this.e,w=this.d
if(x)return new A.B6(B.iu[w>>>9],B.iu[w>>>4&31],B.h1[w&15])
else return new A.B6(B.h1[w>>>7&15],B.h1[w>>>3&15],B.AE[w&7])},
arL(){var x=this.e,w=this.d
if(x)return new A.n1(B.iu[w>>>9],B.iu[w>>>4&31],B.h1[w&15],255)
else return new A.n1(B.h1[w>>>7&15],B.h1[w>>>3&15],B.AE[w&7],B.AE[w>>>11&7])},
arK(){var x=this.r,w=this.f
if(x)return new A.B6(B.iu[w>>>10],B.iu[w>>>5&31],B.iu[w&31])
else return new A.B6(B.h1[w>>>8&15],B.h1[w>>>4&15],B.h1[w&15])},
arM(){var x=this.r,w=this.f
if(x)return new A.n1(B.iu[w>>>10],B.iu[w>>>5&31],B.iu[w&31],255)
else return new A.n1(B.h1[w>>>8&15],B.h1[w>>>4&15],B.h1[w&15],B.AE[w>>>12&7])},
ZE(){var x=this,w=x.c?1:0,v=x.d,u=x.e?1:0,t=x.f,s=x.r?1:0
return(w|(v&16383)<<1|u<<15|(t&32767)<<16|s<<31)>>>0},
vh(){var x=this,w=x.a[x.b+1]
x.c=(w&1)===1
x.sa7r(x.ZE())
x.d=w>>>1&16383
x.sa7r(x.ZE())
x.e=(w>>>15&1)===1
x.sa7r(x.ZE())
x.f=w>>>16&32767
x.sa7r(x.ZE())
x.r=(w>>>31&1)===1
x.sa7r(x.ZE())}}
A.btw.prototype={
lk(d){var x,w
try{x=this.jL(d)
return x!=null}catch(w){return!1}},
jL(d){return C.fX(new A.btz(this,d))},
c1g(d){var x,w=this,v=d.length,u=v-(v>>>1&1431655765)>>>0
u=(u&858993459)+(u>>>2&858993459)
if((u+(u>>>4)>>>0&252645135)*16843009>>>0>>>24===1){x=w.bDl(d)
if(x!=null){w.a=d
return w.b=x}}x=w.bDJ(d)
if(x!=null){w.a=d
return w.b=x}x=w.bDH(d)
if(x!=null){w.a=d
return w.b=x}return null},
bDJ(d){var x,w,v=C.d9(d,!1,null,0)
if(v.c-v.d<52)return null
if(v.Y()!==55727696)return null
x=C.a([0,0,0,0],y.t)
w=new A.TE(x)
v.Y()
w.b=v.Y()
x[0]=v.b3()
x[1]=v.b3()
x[2]=v.b3()
x[3]=v.b3()
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
bDH(d){var x,w,v=C.d9(d,!1,null,0)
if(v.Y()!==52)return null
x=new A.a6m()
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
bDl(d){var x,w,v,u,t,s,r=null,q=d.length,p=C.d9(d,!1,r,0)
if(p.Y()!==0)return r
x=new A.aw4()
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
if((D.c.c7(64,s)&q)>>>0!==0){u=D.c.c7(16,t)
v=1
break}if((D.c.c7(128,s)&q)>>>0!==0){u=D.c.c7(16,t)
break}++t}if(t===10)return r}if((v+1)*2===4)return r
x.b=x.a=u
return x},
i8(d){return C.fX(new A.btx(this,d))},
bDz(d){var x,w,v=this,u=v.b
if(u==null||v.a==null)return null
A.oq(u.gbV(),v.b.gaW(),v.c,!1)
u=v.b
if(u instanceof A.aw4){u=u.a
x=v.b.gaW()
w=v.a
w.toString
return v.aGR(u,x,w)}else if(u instanceof A.a6m){u=v.a
u.toString
return v.bDG(u)}else if(u instanceof A.TE){u=v.a
u.toString
return v.bDI(u)}return null},
p5(d,e){return C.fX(new A.bty(this,d,e))},
bWo(d,e){if(this.jL(d)==null)return null
return this.i8(0)},
bDG(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.length
if(j<52||l.b==null)return k
x=l.b
x.toString
y.T.a(x)
w=C.d9(d,!1,k,0)
w.d+=52
v=x.Q
if(v<1)v=(x.d&4096)!==0?6:1
if(v!==1)return k
u=x.a
t=x.b
if(u*t*x.f/8>j-52)return k
switch(x.d&255){case 16:s=C.hG(k,k,D.ak,0,D.bN,t,k,0,4,k,D.ak,u,!1)
for(x=s.a,x=x.gL(x);x.l();){r=x.gq()
q=J.S(w.a,w.d++)
p=J.S(w.a,w.d++)
r.saA(p&240)
r.saO((p&15)<<4)
r.saN(q&240)
r.saL((q&15)<<4)}return s
case 17:s=C.hG(k,k,D.ak,0,D.bN,t,k,0,4,k,D.ak,u,!1)
for(x=s.a,x=x.gL(x);x.l();){r=x.gq()
o=w.a9()
n=(o&1)!==0?255:0
r.saA(o>>>8&248)
r.saO(o>>>3&248)
r.saN((o&62)<<2)
r.saL(n)}return s
case 18:s=C.hG(k,k,D.ak,0,D.bN,t,k,0,4,k,D.ak,u,!1)
for(x=s.a,x=x.gL(x);x.l();){r=x.gq()
r.saA(J.S(w.a,w.d++))
r.saO(J.S(w.a,w.d++))
r.saN(J.S(w.a,w.d++))
r.saL(J.S(w.a,w.d++))}return s
case 19:s=C.hG(k,k,D.ak,0,D.bN,t,k,0,3,k,D.ak,u,!1)
for(x=s.a,x=x.gL(x);x.l();){r=x.gq()
o=w.a9()
r.saA(o>>>8&248)
r.saO(o>>>3&252)
r.saN((o&31)<<3)}return s
case 20:s=C.hG(k,k,D.ak,0,D.bN,t,k,0,3,k,D.ak,u,!1)
for(x=s.a,x=x.gL(x);x.l();){r=x.gq()
o=w.a9()
r.saA((o&31)<<3)
r.saO(o>>>2&248)
r.saN(o>>>7&248)}return s
case 21:s=C.hG(k,k,D.ak,0,D.bN,t,k,0,3,k,D.ak,u,!1)
for(x=s.a,x=x.gL(x);x.l();){r=x.gq()
r.saA(J.S(w.a,w.d++))
r.saO(J.S(w.a,w.d++))
r.saN(J.S(w.a,w.d++))}return s
case 22:s=C.hG(k,k,D.ak,0,D.bN,t,k,0,1,k,D.ak,u,!1)
for(x=s.a,x=x.gL(x);x.l();)x.gq().saA(J.S(w.a,w.d++))
return s
case 23:s=C.hG(k,k,D.ak,0,D.bN,t,k,0,4,k,D.ak,u,!1)
for(x=s.a,x=x.gL(x);x.l();){r=x.gq()
n=J.S(w.a,w.d++)
m=J.S(w.a,w.d++)
r.saA(m)
r.saO(m)
r.saN(m)
r.saL(n)}return s
case 24:return k
case 25:return x.y===0?l.aZg(u,t,w.bN()):l.aGR(u,t,w.bN())}return k},
bDI(d){var x,w,v,u=this
if(!(u.b instanceof A.TE))return null
x=C.d9(d,!1,null,0)
w=x.d+=52
v=y.k.a(u.b)
x.d=w+v.Q
if(v.c[0]===0)switch(v.b){case 2:return u.aZg(v.r,v.f,x.bN())
case 3:return u.aGR(v.r,v.f,x.bN())}return null},
aZg(c5,c6,c7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.hG(b5,b5,D.ak,0,D.bN,c6,b5,0,3,b5,D.ak,c5,!1),b7=c5/4|0,b8=b7-1,b9=J.mz(D.n.ga6(c7),0,null),c0=new A.tL(b9),c1=new A.tL(J.mz(D.n.ga6(c7),0,null)),c2=new A.tL(J.mz(D.n.ga6(c7),0,null)),c3=new A.tL(J.mz(D.n.ga6(c7),0,null)),c4=new A.tL(J.mz(D.n.ga6(c7),0,null))
for(x=0,w=0;x<b7;++x,w+=4)for(v=0,u=0;v<b7;++v,u+=4){c0.b=A.B7(v,x)<<1>>>0
c0.vh()
t=b9[c0.b]
s=c0.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&b8)>>>0
o=(p+1&b8)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&b8)>>>0
k=(l+1&b8)>>>0
c1.b=A.B7(l,p)<<1>>>0
c1.vh()
c2.b=A.B7(k,p)<<1>>>0
c2.vh()
c3.b=A.B7(l,o)<<1>>>0
c3.vh()
c4.b=A.B7(k,o)<<1>>>0
c4.vh()
j=c1.arJ()
i=B.es[r][0]
h=c2.arJ()
g=B.es[r][1]
f=c3.arJ()
e=B.es[r][2]
d=c4.arJ()
a0=B.es[r][3]
a1=c1.arK()
a2=B.es[r][0]
a3=c2.arK()
a4=B.es[r][1]
a5=c3.arK()
a6=B.es[r][2]
a7=c4.arK()
a8=B.es[r][3]
a9=B.Wz[s+t&3]
b0=a9[0]
b1=a9[1]
b2=D.c.U((j.a*i+h.a*g+f.a*e+d.a*a0)*b0+(a1.a*a2+a3.a*a4+a5.a*a6+a7.a*a8)*b1,7)
b3=D.c.U((j.b*i+h.b*g+f.b*e+d.b*a0)*b0+(a1.b*a2+a3.b*a4+a5.b*a6+a7.b*a8)*b1,7)
b4=D.c.U((j.c*i+h.c*g+f.c*e+d.c*a0)*b0+(a1.c*a2+a3.c*a4+a5.c*a6+a7.c*a8)*b1,7)
b1=b6.a
if(b1!=null)b1.jX(m+u,n,b2,b3,b4)
t=t>>>2;++r}}}return b6},
aGR(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=C.hG(a4,a4,D.ak,0,D.bN,b5,a4,0,4,a4,D.ak,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.mz(D.n.ga6(b6),0,null),a9=new A.tL(a8),b0=new A.tL(J.mz(D.n.ga6(b6),0,null)),b1=new A.tL(J.mz(D.n.ga6(b6),0,null)),b2=new A.tL(J.mz(D.n.ga6(b6),0,null)),b3=new A.tL(J.mz(D.n.ga6(b6),0,null))
for(x=0,w=0;x<a6;++x,w+=4)for(v=0,u=0;v<a6;++v,u+=4){a9.b=A.B7(v,x)<<1>>>0
a9.vh()
t=a8[a9.b]
s=a9.c?4:0
for(r=0,q=0;q<4;++q){p=(x+(q<2?-1:0)&a7)>>>0
o=(p+1&a7)>>>0
for(n=q+w,m=0;m<4;++m){l=(v+(m<2?-1:0)&a7)>>>0
k=(l+1&a7)>>>0
b0.b=A.B7(l,p)<<1>>>0
b0.vh()
b1.b=A.B7(k,p)<<1>>>0
b1.vh()
b2.b=A.B7(l,o)<<1>>>0
b2.vh()
b3.b=A.B7(k,o)<<1>>>0
b3.vh()
j=b0.arL()
i=B.es[r][0]
h=b1.arL()
g=B.es[r][1]
g=new A.n1(j.a*i,j.b*i,j.c*i,j.d*i).ag(0,new A.n1(h.a*g,h.b*g,h.c*g,h.d*g))
h=b2.arL()
i=B.es[r][2]
i=g.ag(0,new A.n1(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.arL()
g=B.es[r][3]
f=i.ag(0,new A.n1(h.a*g,h.b*g,h.c*g,h.d*g))
g=b0.arM()
h=B.es[r][0]
i=b1.arM()
j=B.es[r][1]
j=new A.n1(g.a*h,g.b*h,g.c*h,g.d*h).ag(0,new A.n1(i.a*j,i.b*j,i.c*j,i.d*j))
i=b2.arM()
h=B.es[r][2]
h=j.ag(0,new A.n1(i.a*h,i.b*h,i.c*h,i.d*h))
i=b3.arM()
j=B.es[r][3]
e=h.ag(0,new A.n1(i.a*j,i.b*j,i.c*j,i.d*j))
d=B.Wz[s+t&3]
j=d[0]
i=d[1]
a0=D.c.U(f.a*j+e.a*i,7)
a1=D.c.U(f.b*j+e.b*i,7)
a2=D.c.U(f.c*j+e.c*i,7)
a3=D.c.U(f.d*d[2]+e.d*d[3],7)
i=a5.a
if(i!=null)i.iV(m+u,n,a0,a1,a2,a3)
t=t>>>2;++r}}}return a5}}
A.aAh.prototype={
bg(d){var x,w=this
if(d.c-d.d<18)return
w.a=d.b3()
w.b=d.b3()
x=d.b3()
w.c=x<12?B.aHw[x]:B.Ci
d.a9()
w.e=d.a9()
w.f=d.b3()
d.a9()
d.a9()
w.x=d.a9()
w.y=d.a9()
w.z=d.b3()
w.Q=d.b3()},
bgx(){var x=this,w=x.z
if(w!==8&&w!==16&&w!==24&&w!==32)return!1
w=x.c
if(w===B.kP||w===B.kQ){if(x.e>256||x.b!==1)return!1
w=x.f
if(w!==16&&w!==24&&w!==32)return!1}else if(x.b===1)return!1
return!0},
gbV(){return this.x},
gaW(){return this.y}}
A.p1.prototype={
O(){return"TgaImageType."+this.b}}
A.bHV.prototype={
p5(d,e){return C.fX(new A.bHX(this,d,e))},
c2m(d,e){if(this.jL(d)==null)return null
return this.i8(0)},
jL(d){return C.fX(new A.bHY(this,d))},
c2o(d){var x,w,v,u,t=this
t.a=new A.aAh(B.Ci)
x=C.d9(d,!1,null,0)
t.b=x
w=x.dg(18)
t.a.bg(w)
x=t.a
if(!x.bgx()||x.x<1||x.y<1)return null
v=t.b
v.d+=x.a
u=x.c
if(u===B.kP||u===B.kQ)x.as=v.dg(x.e*D.c.U(x.f,3)).bN()
x=t.a
x.ax=t.b.d
return x},
i8(d){return C.fX(new A.bHW(this,d))},
c2n(d){var x=this,w=x.a
if(w==null)return null
A.oq(w.x,w.y,x.c,!1)
w=x.a.c
if(w===B.ads)return x.aZf()
else if(w===B.adr||w===B.kQ)return x.bDM()
else if(w===B.kP)return x.aZf()
return null},
aZ5(d,e){var x,w,v,u,t,s,r,q=this,p=C.d9(d,!1,null,0),o=q.a.f
if(o===16){o=q.b
o===$&&C.d()
x=o.a9()
w=x>>>7&248
v=x>>>2&248
u=(x&31)<<3
t=(x&32768)!==0?0:255
for(s=0;s<q.a.e;++s){e.uO(s,w)
e.uN(s,v)
e.uM(s,u)
e.uL(s,t)}}else{r=o===32
for(s=0;s<q.a.e;++s){u=J.S(p.a,p.d++)
v=J.S(p.a,p.d++)
w=J.S(p.a,p.d++)
t=r?J.S(p.a,p.d++):255
e.uO(s,w)
e.uN(s,v)
e.uM(s,u)
e.uL(s,t)}}},
bDM(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=h.z,f=g===16,e=f||g===32,d=h.x,a0=h.y,a1=e?4:3
h=h.c
x=C.hG(i,i,D.ak,0,D.bN,a0,i,0,a1,i,D.ak,d,h===B.kP||h===B.kQ)
h=x.a
if((h==null?i:h.gdX())!=null){h=j.a.as
h.toString
d=x.a
d=d==null?i:d.gdX()
d.toString
j.aZ5(h,d)}w=x.gbV()
v=x.gaW()-1
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
if(d!=null)d.m2(u,v,q)
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
if(d!=null)d.iV(u,v,q,m,l,k)
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
if(d!=null)d.iV(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}}}else if(h)for(p=0;p<s;++p){d=j.b
q=J.S(d.a,d.d++)
o=u+1
d=x.a
if(d!=null)d.m2(u,v,q)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}else if(f)for(p=0;p<s;++p){n=j.b.a9()
k=(n&32768)!==0?0:255
o=u+1
d=x.a
if(d!=null)d.iV(u,v,n>>>7&248,n>>>2&248,(n&31)<<3,k)
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
if(d!=null)d.iV(u,v,q,m,l,k)
if(o>=w){--v
if(v<0){u=r
break}u=0}else u=o}if(u>=w){--v
if(v<0)break
u=0}}return x},
aZf(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&C.d()
x=i.a
g.d=x.ax
w=x.z
g=w===16
v=!0
if(!g)if(w!==32){u=x.c
if(u===B.kP||u===B.kQ){u=x.f
u=u===16||u===32}else u=!1
v=u}u=x.x
t=x.y
s=v?4:3
x=x.c
r=C.hG(h,h,D.ak,0,D.bN,t,h,0,s,h,D.ak,u,x===B.kP||x===B.kQ)
x=i.a
u=x.c
if(u===B.kP||u===B.kQ){x=x.as
x.toString
u=r.a
u=u==null?h:u.gdX()
u.toString
i.aZ5(x,u)}if(w===8)for(q=r.gaW()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
g=i.b
o=J.S(g.a,g.d++)
g=r.a
if(g!=null)g.m2(p,q,o);++p}}else if(g)for(q=r.gaW()-1;q>=0;--q){p=0
for(;;){g=r.a
g=g==null?h:g.a
if(!(p<(g==null?0:g)))break
n=i.b.a9()
m=(n&32768)!==0?0:255
g=r.a
if(g!=null)g.iV(p,q,n>>>7&248,n>>>2&248,(n&31)<<3,m);++p}}else for(q=r.gaW()-1;q>=0;--q){p=0
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
if(g!=null)g.iV(p,q,j,k,l,m);++p}}return r}}
A.bI4.prototype={
dz(d){var x,w,v,u,t=this
if(d===0)return 0
if(t.c===0){t.c=8
t.b=t.a.b3()}for(x=t.a,w=0;v=t.c,d>v;){w=D.c.bX(w,v)+(t.b&E.lS[v])
d-=v
t.c=8
t.b=J.S(x.a,x.d++)}if(d>0){if(v===0){t.c=8
t.b=x.b3()}x=D.c.bX(w,d)
v=t.b
u=t.c-d
w=x+(D.c.lx(v,u)&E.lS[d])
t.c=u}return w}}
A.aAj.prototype={
k(d){var x=this,w=x.a,v=$.cI3().h(0,w)
if(v!=null)return v.a+": "+x.b.k(0)+" "+x.c
return"<"+w+">: "+x.b.k(0)+" "+x.c},
fS(){var x,w,v,u,t,s=this,r=s.e
if(r!=null)return r
r=s.f
x=s.d
r.d=x
w=s.c
v=s.b
u=v!==D.ah
if(w*(u?D.k2[v.a]:0)>r.c-x)throw C.o(C.bQ("Invalid TIFF tag "+s.a+" count: "+w))
t=r.dg(w*(u?D.k2[v.a]:0))
switch(v.a){case 1:return s.e=new C.Ap(new Uint8Array(C.bn(t.dg(w).bN())))
case 2:return s.e=new C.JB(w===0?"":t.iz(w-1))
case 7:return s.e=new C.Ap(new Uint8Array(C.bn(t.dg(w).bN())))
case 3:return s.e=C.cVH(t,w)
case 4:return s.e=C.cVC(t,w)
case 5:return s.e=C.cVD(t,w)
case 11:return s.e=C.cVI(t,w)
case 12:return s.e=C.cVB(t,w)
case 6:return s.e=new C.E3(new Int8Array(C.bn(J.cIo(D.n.ga6(t.bN()),0,w))))
case 8:return s.e=C.cVG(t,w)
case 9:return s.e=C.cVE(t,w)
case 10:return s.e=C.cVF(t,w)
case 13:case 0:return null}}}
A.bI8.prototype={
cbw(d,e,f,g){var x,w,v,u=this
u.r=e
u.x=u.w=0
x=D.c.ab(u.a+7,8)
for(w=0,v=0;v<g;++v){u.aGP(d,w,f)
w+=x}},
aGP(d,e,f){var x,w,v,u,t,s,r,q,p=this
p.d=0
for(x=p.a,w=!0;f<x;){while(w){v=p.B_(10)
u=B.X2[v]
t=D.c.U(u,1)&15
if(t===12){u=B.z0[(v<<2&12|p.oI(2))>>>0]
s=D.c.U(u,1)
f+=D.c.U(u,4)&4095
p.kG(4-(s&7))}else if(t===0)throw C.o(C.bQ("TIFFFaxDecoder0"))
else if(t===15)throw C.o(C.bQ("TIFFFaxDecoder1"))
else{f+=D.c.U(u,5)&2047
p.kG(10-t)
if((u&1)===0){p.f[p.d++]=f
w=!1}}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}while(!w){u=B.Rq[p.oI(4)]
r=u>>>5&2047
q=!0
if(r===100){u=B.Ta[p.B_(9)]
t=D.c.U(u,1)&15
r=D.c.U(u,5)&2047
if(t===12){p.kG(5)
u=B.z0[p.oI(4)]
s=D.c.U(u,1)
r=D.c.U(u,4)&4095
p.pR(d,e,f,r)
f+=r
p.kG(4-(s&7))}else if(t===15)throw C.o(C.bQ("TIFFFaxDecoder2"))
else{p.pR(d,e,f,r)
f+=r
p.kG(9-t)
if((u&1)===0){p.f[p.d++]=f
w=q}}}else{if(r===200){u=B.Rm[p.oI(2)]
r=u>>>5&2047
p.pR(d,e,f,r)
f+=r
p.kG(2-(u>>>1&15))
p.f[p.d++]=f}else{p.pR(d,e,f,r)
f+=r
p.kG(4-(u>>>1&15))
p.f[p.d++]=f}w=q}}if(f===x){if(p.z===2)if(p.w!==0){x=p.x
x.toString
p.x=x+1
p.w=0}break}}p.f[p.d++]=f},
cbx(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.r=a0
e.z=3
e.x=e.w=0
x=e.a
w=D.c.ab(x+7,8)
v=C.bs(2,null,!1,y.I)
e.at=a3&1
e.as=a3>>>2&1
if(e.b4N()!==1)throw C.o(C.bQ("TIFFFaxDecoder3"))
e.aGP(d,0,a1)
for(u=w,t=1;t<a2;++t){if(e.b4N()===0){s=e.e
e.e=e.f
e.f=s
e.y=0
r=a1
q=-1
p=!0
o=0
for(;;){r.toString
if(!(r<x))break
e.b0f(q,p,v)
n=v[0]
m=v[1]
l=B.WJ[e.oI(7)]&255
k=l>>>3&15
j=l&7
if(k===0){if(!p){m.toString
e.pR(d,u,r,m-r)}e.kG(7-j)
r=m
q=r}else if(k===1){e.kG(7-j)
i=o+1
h=i+1
if(p){r+=e.atR()
e.f[o]=r
g=e.atQ()
e.pR(d,u,r,g)
r+=g
e.f[i]=r}else{g=e.atQ()
e.pR(d,u,r,g)
r+=g
e.f[o]=r
r+=e.atR()
e.f[i]=r}o=h
q=r}else{if(k<=8){n.toString
f=n+(k-5)
i=o+1
e.f[o]=f
p=!p
if(p)e.pR(d,u,r,f-r)
e.kG(7-j)}else throw C.o(C.bQ("TIFFFaxDecoder4"))
r=f
o=i
q=r}}e.f[o]=r
e.d=o+1}else e.aGP(d,u,a1)
u+=w}},
cbP(a3,a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
x=a2.a
w=D.c.ab(x+7,8)
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
a2.b0f(p,o,v)
m=v[0]
l=v[1]
k=B.WJ[a2.oI(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
a2.pR(a3,t,q,l-q)}a2.kG(7-i)
q=l
p=q}else if(j===1){a2.kG(7-i)
h=n+1
g=h+1
if(o){q+=a2.atR()
r[n]=q
f=a2.atQ()
a2.pR(a3,t,q,f)
q+=f
r[h]=q}else{f=a2.atQ()
a2.pR(a3,t,q,f)
q+=f
r[n]=q
q+=a2.atR()
r[h]=q}n=g
p=q}else if(j<=8){m.toString
e=m+(j-5)
h=n+1
r[n]=e
o=!o
if(o)a2.pR(a3,t,q,e-q)
a2.kG(7-i)
q=e
n=h
p=q}else if(j===11){if(a2.oI(3)!==7)throw C.o(C.bQ("TIFFFaxDecoder5"))
for(d=0,a0=!1;!a0;o=a1){while(a2.oI(1)!==1)++d
if(d>5){d-=6
if(!o&&d>0){h=n+1
r[n]=q
n=h}q+=d
if(d>0)o=!0
a1=a2.oI(1)===0
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
a2.pR(a3,t,q,1);++q
n=h}}}else throw C.o(C.bQ("TIFFFaxDecoder5 "+j))}r[n]=q
a2.d=n+1
t+=w}},
atR(){var x,w,v,u,t,s,r=this
for(x=0,w=!0;w;){v=r.B_(10)
u=B.X2[v]
t=D.c.U(u,1)&15
if(t===12){u=B.z0[(v<<2&12|r.oI(2))>>>0]
s=D.c.U(u,1)
x+=D.c.U(u,4)&4095
r.kG(4-(s&7))}else if(t===0)throw C.o(C.bQ("TIFFFaxDecoder0"))
else if(t===15)throw C.o(C.bQ("TIFFFaxDecoder1"))
else{x+=D.c.U(u,5)&2047
r.kG(10-t)
if((u&1)===0)w=!1}}return x},
atQ(){var x,w,v,u,t,s,r=this
for(x=0,w=!1;!w;){v=B.Rq[r.oI(4)]
u=v>>>5&2047
if(u===100){v=B.Ta[r.B_(9)]
t=D.c.U(v,1)&15
s=D.c.U(v,5)
if(t===12){r.kG(5)
v=B.z0[r.oI(4)]
s=D.c.U(v,1)
x+=D.c.U(v,4)&4095
r.kG(4-(s&7))}else if(t===15)throw C.o(C.bQ("TIFFFaxDecoder2"))
else{x+=s&2047
r.kG(9-t)
if((v&1)===0)w=!0}}else{if(u===200){v=B.Rm[r.oI(2)]
x+=v>>>5&2047
r.kG(2-(v>>>1&15))}else{x+=u
r.kG(4-(v>>>1&15))}w=!0}}return x},
b4N(){var x,w,v=this,u="TIFFFaxDecoder8",t=v.as
if(t===0){if(v.B_(12)!==1)throw C.o(C.bQ("TIFFFaxDecoder6"))}else if(t===1){t=v.w
t.toString
x=8-t
if(v.B_(x)!==0)throw C.o(C.bQ(u))
if(x<4)if(v.B_(8)!==0)throw C.o(C.bQ(u))
while(w=v.B_(8),w!==1)if(w!==0)throw C.o(C.bQ(u))}if(v.at===0)return 1
else return v.oI(1)},
b0f(d,e,f){var x,w=this,v=w.e,u=w.d,t=w.y,s=t>0?t-1:0
s=e?(s&4294967294)>>>0:(s|1)>>>0
for(x=s;x<u;x+=2){t=v[x]
t.toString
d.toString
if(t>d){w.y=x
f[0]=t
break}}t=x+1
if(t<u)f[1]=v[t]},
pR(d,e,f,g){var x,w,v,u,t,s=8*e+f,r=s+g,q=D.c.U(s,3),p=s&7
if(p>0){x=D.c.bX(1,7-p)
w=J.S(d.a,d.d+q)
for(;;){if(!(x>0&&s<r))break
w=(w|x)>>>0
x=x>>>1;++s}d.j(0,q,w)}q=D.c.U(s,3)
for(v=r-7;s<v;q=u){u=q+1
J.dI(d.a,d.d+q,255)
s+=8}while(s<r){q=D.c.U(s,3)
v=J.S(d.a,d.d+q)
t=D.c.bX(1,7-(s&7))
J.dI(d.a,d.d+q,(v|t)>>>0);++s}},
B_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.r
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
r=B.od[J.S(j.a,x+v)&255]
if(!(v===w)){j=v+1
x=k.r
u=x.a
x=x.d
if(j===w)t=B.od[J.S(u,x+j)&255]
else{t=B.od[J.S(u,x+j)&255]
j=k.r
s=B.od[J.S(j.a,j.d+(v+2))&255]}}}else throw C.o(C.bQ("TIFFFaxDecoder7"))
j=k.w
j.toString
q=8-j
p=d-q
if(p>8){o=p-8
n=8}else{n=p
o=0}j=k.x
j.toString
j=k.x=j+1
m=D.c.bX(r&E.lS[q],p)
l=D.c.dS(t&B.H4[n],8-n)
if(o!==0){l=D.c.bX(l,o)|D.c.dS(s&B.H4[o],8-o)
k.x=j+1
k.w=o}else if(n===8){k.w=0
k.x=j+1}else k.w=n
return(m|l)>>>0},
oI(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
s=B.od[J.S(m.a,x+v)&255]
if(!(v===w)){m=n.r
t=B.od[J.S(m.a,m.d+(v+1))&255]}}else throw C.o(C.bQ("TIFFFaxDecoder7"))
m=n.w
m.toString
r=8-m
q=d-r
p=r-d
if(p>=0){o=D.c.dS(s&E.lS[r],p)
m+=d
n.w=m
if(m===8){n.w=0
m=n.x
m.toString
n.x=m+1}}else{o=(D.c.bX(s&E.lS[r],-p)|D.c.dS(t&B.H4[q],8-q))>>>0
m=n.x
m.toString
n.x=m+1
n.w=q}return o},
kG(d){var x,w=this,v=w.w
v.toString
x=v-d
if(x<0){v=w.x
v.toString
w.x=v-1
w.w=8+x}else w.w=x}}
A.aAk.prototype={
bxc(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.dk(d,h,0),f=d.a9()
for(x=i.a,w=0;w<f;++w){v=d.a9()
u=d.a9()
t=d.Y()
if(u>13){d.d+=4
continue}s=D.V9[u]
if(t*D.k2[u]>4)r=d.Y()
else{r=d.d
d.d=r+4}q=new A.aAj(v,s,t,r,g)
x.j(0,v,q)
if(v===256){p=q.fS()
p=p==null?h:p.H(0)
i.b=p==null?0:p}else if(v===257){p=q.fS()
p=p==null?h:p.H(0)
i.c=p==null?0:p}else if(v===262){o=q.fS()
n=o==null?h:o.H(0)
if(n==null)n=17
if(n<17)i.d=B.aFP[n]
else i.d=B.JQ}else if(v===259){p=q.fS()
p=p==null?h:p.H(0)
i.e=p==null?0:p}else if(v===258){p=q.fS()
p=p==null?h:p.H(0)
i.f=p==null?0:p}else if(v===277){p=q.fS()
p=p==null?h:p.H(0)
i.r=p==null?0:p}else if(v===317){p=q.fS()
p=p==null?h:p.H(0)
i.Q=p==null?0:p}else if(v===339){p=q.fS()
o=p==null?h:p.H(0)
i.x=B.aGh[o==null?0:o]}else if(v===320){o=q.fS()
if(o!=null){p=J.ddU(D.n.ga6(o.tb()))
i.id=p
i.k1=0
p=p.length/3|0
i.k2=p
i.k3=p*2}}}p=i.id
m=p!=null
if(m&&i.d===B.JR)i.r=1
if(i.b===0||i.c===0)return
if(m&&i.f===8){l=p.length
for(m=p.$flags|0,w=0;w<l;++w){k=p[w]
m&2&&C.A(p)
p[w]=k>>>8}}if(i.d===B.JP)i.z=!0
i.w=i.r
if(x.R(324)){i.ay=i.LL(322)
i.ch=i.LL(323)
i.CW=i.aw8(324)
i.cx=i.aw8(325)}else{i.ay=i.aw7(322,i.b)
if(!x.R(278))p=i.ch=i.aw7(323,i.c)
else{j=i.LL(278)
if(j===-1){p=i.c
i.ch=p}else{i.ch=j
p=j}}m=i.c
if(p>m)i.ch=m
i.CW=i.aw8(273)
i.cx=i.aw8(279)}p=i.b
m=i.ay
i.cy=D.c.dv(p+m-1,m)
m=i.c
p=i.ch
i.db=D.c.dv(m+p-1,p)
i.dy=i.aw7(266,1)
i.fr=i.LL(292)
i.fx=i.LL(293)
i.LL(338)
switch(i.d.a){case 0:case 1:x=i.f
if(x===1&&i.r===1)i.y=B.JO
else if(x===4&&i.r===1)i.y=B.bhZ
else if(D.c.a_(x,8)===0){x=i.r
if(x===1)i.y=B.bi_
else if(x===2)i.y=B.bi0
else i.y=B.rQ}break
case 2:if(D.c.a_(i.f,8)===0){x=i.r
if(x===3)i.y=B.adu
else if(x===4)i.y=B.bi2
else i.y=B.rQ}break
case 3:x=!1
if(i.r===1)if(i.id!=null){x=i.f
x=x===4||x===8||x===16}if(x)i.y=B.bi1
break
case 4:if(i.f===1&&i.r===1)i.y=B.JO
break
case 6:if(i.e===7&&i.f===8&&i.r===3)i.y=B.adu
else{if(x.R(530)){o=x.h(0,530).fS()
i.as=o.H(0)
x=i.at=o.hE(0,1)}else x=i.at=i.as=2
p=i.as
p===$&&C.d()
if(p*x===1)i.y=B.rQ
else if(i.f===8&&i.r===3)i.y=B.bi3}break
case 5:if(D.c.a_(i.f,8)===0)i.y=B.rQ
x=i.r
if(x===4)i.w=3
else if(x===5)i.w=4
break
default:if(D.c.a_(i.f,8)===0)i.y=B.rQ
break}},
cv(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.x,d=e===B.rP,a0=e===B.bI
e=g.f
if(e===1)x=D.fS
else if(e===2)x=D.hp
else{if(e===4)e=D.hq
else if(d&&e===16)e=D.ia
else if(d&&e===32)e=D.j3
else if(d&&e===64)e=D.jR
else if(a0&&e===8)e=D.lA
else if(a0&&e===16)e=D.lB
else if(a0&&e===32)e=D.lC
else if(e===16)e=D.dp
else e=e===32?D.jS:D.ak
x=e}w=g.id!=null&&g.d===B.JR
v=w?3:g.w
e=g.b
u=C.hG(f,f,x,0,D.bN,g.c,f,0,v,f,x,e,w)
if(w){e=u.a
e=e==null?f:e.gdX()
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
e.qO(k,t[l],t[m],t[n])}}j=0
i=0
for(;;){e=g.db
e===$&&C.d()
if(!(j<e))break
h=0
for(;;){e=g.cy
e===$&&C.d()
if(!(h<e))break
g.bDS(a1,u,h,j);++h;++i}++j}return u},
bDS(b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
if(b1.y===B.JO){b1.bDq(b3,b4,b5,b6)
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
else if(u===5){w=C.d9(new Uint8Array(p),!1,b2,0)
v=A.cX2()
try{v.Oj(A.dk(b3,x,0),w.a)}catch(o){}if(b1.Q===2)for(n=0;n<b1.ch;++n){m=b1.r
u=b1.ay
l=m*(n*u+1)
k=u*m
for(;m<k;++m){u=w
r=J.S(u.a,u.d+l)
j=w
i=b1.r
i=J.S(j.a,j.d+(l-i))
J.dI(u.a,u.d+l,r+i);++l}}}else if(u===32773){w=C.d9(new Uint8Array(p),!1,b2,0)
b1.aZc(b3,p,w.a)}else if(u===32946||u===8){h=b3.aSe(0,0,x)
u=b1.f
g=u<8?1:D.c.U(u+7,3)
w=C.d9(C.aVr(h,b1.ay*b1.ch*b1.r*g),!1,b2,0)}else if(u===6||u===7){h=b3.aSe(0,0,x)
f=C.cKs().cv(y.p.a(h))
if(f!=null)b1.bPB(f,b4,s,q,b1.ay,b1.ch)
return}else throw C.o(C.bQ("Unsupported Compression Type: "+u))
e=C.a([0,0,0],y.t)
for(d=q,a0=0;a0<b1.ch;++a0,++d)for(a1=s,a2=0;a2<b1.ay;++a2,++a1){u=w
if(u.d>=u.c||a1>=b1.b||d>=b1.c)break
u=b1.r
if(u===1){u=b1.x
if(u===B.rP){u=b1.f
if(u===32){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a3=$.Hq()[0]}else if(u===64)a3=w.aCo()
else if(u===16){u=w.a9()
r=$.fB
a3=(r!=null?r:C.ha())[u]}else a3=0
if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.m2(a1,d,a3)}}else{r=b1.f
if(r===8)if(u===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
a3=$.pp()[0]}else{u=w
a3=J.S(u.a,u.d++)}else if(r===16)if(u===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
a3=$.po()[0]}else a3=w.a9()
else if(r===32)if(u===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a3=$.kG()[0]}else a3=w.Y()
else a3=0
if(b1.d===B.JP){u=b4.a
a4=u==null?b2:u.gbM()
a3=(a4==null?0:a4)-a3}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.m2(a1,d,a3)}}}else if(u===2){u=b1.f
if(u===8){if(b1.x===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
a5=$.pp()[0]}else{u=w
a5=J.S(u.a,u.d++)}if(b1.x===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
a6=$.pp()[0]}else{u=w
a6=J.S(u.a,u.d++)}}else if(u===16){if(b1.x===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
a5=$.po()[0]}else a5=w.a9()
if(b1.x===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
a6=$.po()[0]}else a6=w.a9()}else if(u===32){if(b1.x===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a5=$.kG()[0]}else a5=w.Y()
if(b1.x===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a6=$.kG()[0]}else a6=w.Y()}else{a5=0
a6=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.iV(a1,d,a5,0,0,a6)}}else if(u===3){u=b1.x
if(u===B.rP){u=b1.f
if(u===32){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
u=$.Hq()
a7=u[0]
r[0]=w.Y()
a8=u[0]
r[0]=w.Y()
a9=u[0]}else{a8=0
a9=0
if(u===64)a7=w.aCo()
else if(u===16){u=w.a9()
r=$.fB
a7=(r!=null?r:C.ha())[u]
u=w.a9()
r=$.fB
a8=(r!=null?r:C.ha())[u]
u=w.a9()
r=$.fB
a9=(r!=null?r:C.ha())[u]}else a7=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.jX(a1,d,a7,a8,a9)}}else{r=b1.f
if(r===8){if(u===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
a7=$.pp()[0]}else{u=w
a7=J.S(u.a,u.d++)}if(b1.x===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
a8=$.pp()[0]}else{u=w
a8=J.S(u.a,u.d++)}if(b1.x===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
a9=$.pp()[0]}else{u=w
a9=J.S(u.a,u.d++)}}else if(r===16){if(u===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
a7=$.po()[0]}else a7=w.a9()
if(b1.x===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
a8=$.po()[0]}else a8=w.a9()
if(b1.x===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
a9=$.po()[0]}else a9=w.a9()}else if(r===32){if(u===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a7=$.kG()[0]}else a7=w.Y()
if(b1.x===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a8=$.kG()[0]}else a8=w.Y()
if(b1.x===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a9=$.kG()[0]}else a9=w.Y()}else{a7=0
a8=0
a9=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.jX(a1,d,a7,a8,a9)}}}else if(u>=4)if(b1.x===B.rP){u=b1.f
if(u===32){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
u=$.Hq()
a7=u[0]
r[0]=w.Y()
a8=u[0]
r[0]=w.Y()
a9=u[0]
r[0]=w.Y()
b0=u[0]}else{a8=0
a9=0
b0=0
if(u===64)a7=w.aCo()
else if(u===16){u=w.a9()
r=$.fB
a7=(r!=null?r:C.ha())[u]
u=w.a9()
r=$.fB
a8=(r!=null?r:C.ha())[u]
u=w.a9()
r=$.fB
a9=(r!=null?r:C.ha())[u]
u=w.a9()
r=$.fB
b0=(r!=null?r:C.ha())[u]}else a7=0}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.iV(a1,d,a7,a8,a9,b0)}}else{u=b4.a
a6=u==null?b2:u.gbM()
if(a6==null)a6=0
u=b1.f
if(u===8){if(b1.x===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
a7=$.pp()[0]}else{u=w
a7=J.S(u.a,u.d++)}if(b1.x===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
a8=$.pp()[0]}else{u=w
a8=J.S(u.a,u.d++)}if(b1.x===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
a9=$.pp()[0]}else{u=w
a9=J.S(u.a,u.d++)}if(b1.x===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
b0=$.pp()[0]}else{u=w
b0=J.S(u.a,u.d++)}if(b1.r===5)if(b1.x===B.bI){u=w
u=J.S(u.a,u.d++)
r=$.ov()
r.$flags&2&&C.A(r)
r[0]=u
a6=$.pp()[0]}else{u=w
a6=J.S(u.a,u.d++)}}else if(u===16){if(b1.x===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
a7=$.po()[0]}else a7=w.a9()
if(b1.x===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
a8=$.po()[0]}else a8=w.a9()
if(b1.x===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
a9=$.po()[0]}else a9=w.a9()
if(b1.x===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
b0=$.po()[0]}else b0=w.a9()
if(b1.r===5)if(b1.x===B.bI){u=w.a9()
r=$.ou()
r.$flags&2&&C.A(r)
r[0]=u
a6=$.po()[0]}else a6=w.a9()}else if(u===32){if(b1.x===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a7=$.kG()[0]}else a7=w.Y()
if(b1.x===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a8=$.kG()[0]}else a8=w.Y()
if(b1.x===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a9=$.kG()[0]}else a9=w.Y()
if(b1.x===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
b0=$.kG()[0]}else b0=w.Y()
if(b1.r===5)if(b1.x===B.bI){u=w.Y()
r=$.hl()
r.$flags&2&&C.A(r)
r[0]=u
a6=$.kG()[0]}else a6=w.Y()}else{a7=0
a8=0
a9=0
b0=0}if(b1.d===B.adv){A.d4R(a7,a8,a9,b0,e)
a7=e[0]
a8=e[1]
a9=e[2]
b0=a6}if(a1<b1.b&&d<b1.c){u=b4.a
if(u!=null)u.iV(a1,d,a7,a8,a9,b0)}}}}else throw C.o(C.bQ("Unsupported bitsPerSample: "+u))},
bPB(d,e,f,g,h,i){var x,w,v,u
for(x=0;x<i;++x)for(w=x+g,v=0;v<h;++v){u=d.a
u=u==null?null:u.d1(v,x,null)
if(u==null)u=new C.fr()
e.DX(v+f,w,u)}},
bDq(a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.cy
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
if(r===32773){q=D.c.a_(a2,8)===0?D.c.ab(a2,8)*u:(D.c.ab(a2,8)+1)*u
x=C.d9(new Uint8Array(a2*u),!1,a1,0)
a0.aZc(a3,q,x.a)}else if(r===5){x=C.d9(new Uint8Array(a2*u),!1,a1,0)
A.cX2().Oj(A.dk(a3,s,0),x.a)
if(a0.Q===2)for(p=0;p<a0.c;++p){o=a0.r
n=o*(p*a0.b+1)
for(;o<a0.b*a0.r;++o){a2=x
u=J.S(a2.a,a2.d+n)
r=x
m=a0.r
m=J.S(r.a,r.d+(n-m))
J.dI(a2.a,a2.d+n,u+m);++n}}}else if(r===2){x=C.d9(new Uint8Array(a2*u),!1,a1,0)
try{A.cMs(a0.dy,a0.ay,a0.ch).cbw(x,a3,0,a0.ch)}catch(l){}}else if(r===3){x=C.d9(new Uint8Array(a2*u),!1,a1,0)
try{A.cMs(a0.dy,a0.ay,a0.ch).cbx(x,a3,0,a0.ch,a0.fr)}catch(l){}}else if(r===4){x=C.d9(new Uint8Array(a2*u),!1,a1,0)
try{A.cMs(a0.dy,a0.ay,a0.ch).cbP(x,a3,0,a0.ch,a0.fx)}catch(l){}}else if(r===8||r===32946)x=C.d9(C.aVr(a3.aSe(0,0,s),D.c.U(a0.ay+7,3)*a0.ch),!1,a1,0)
else if(r===1)x=a3
else throw C.o(C.bQ("Unsupported Compression Type: "+r))
k=new A.bI4(x)
j=a4.gbM()
a2=a0.z
i=a2?j:0
h=a2?0:j
for(g=t,f=0;f<a0.ch;++f,++g){for(e=v,d=0;d<a0.ay;++d,++e){a2=a4.a
u=a2==null
r=u?a1:a2.b
if(g<(r==null?0:r)){a2=u?a1:a2.a
a2=e>=(a2==null?0:a2)}else a2=!0
if(a2)break
a2=k.dz(1)
u=a4.a
if(a2===0){if(u!=null)u.jX(e,g,i,0,0)}else if(u!=null)u.jX(e,g,h,0,0)}k.c=0}},
aZc(d,e,f){var x,w,v,u,t,s,r,q,p,o
for(x=J.bT(f),w=0,v=0;v<e;){u=w+1
t=J.S(d.a,d.d+w)
s=$.ov()
s.$flags&2&&C.A(s)
s[0]=t
r=$.pp()[0]
if(r>=0&&r<=127)for(t=r+1,w=u,q=0;q<t;++q,v=p,w=u){p=v+1
u=w+1
x.j(f,v,J.S(d.a,d.d+w))}else{t=r<=-1&&r>=-127
w=u+1
if(t){o=J.S(d.a,d.d+u)
for(t=-r+1,q=0;q<t;++q,v=p){p=v+1
x.j(f,v,o)}}}}},
aw7(d,e){var x=this.a
if(!x.R(d))return e
x=x.h(0,d).fS()
x=x==null?null:x.H(0)
return x==null?0:x},
LL(d){return this.aw7(d,0)},
aw8(d){var x,w=this.a
if(!w.R(d))return null
x=w.h(0,d)
w=x.fS()
w.toString
return C.a4A(x.c,w.gwM(w),!0,y.q)}}
A.Mx.prototype={
O(){return"TiffFormat."+this.b}}
A.l3.prototype={
O(){return"TiffPhotometricType."+this.b}}
A.u5.prototype={
O(){return"TiffImageType."+this.b}}
A.bI9.prototype={
gbV(){return this.a},
gaW(){return this.b}}
A.bkH.prototype={
Oj(d,e){var x,w,v,u,t,s,r=this
r.r=e
x=J.aK(e)
r.w=0
w=y.p.a(d.a)
r.e=w
r.f=w.length
r.b=d.d
if(w[0]===0&&w[1]===1)throw C.o(C.bQ("Invalid LZW Data"))
r.b2d()
r.d=r.c=0
v=r.aHZ()
w=r.x
u=0
for(;;){if(!(v!==257&&r.w<x))break
if(v===256){r.b2d()
v=r.aHZ()
r.as=0
if(v===257)break
J.dI(r.r,r.w++,v)
u=v}else{t=r.Q
t.toString
if(v<t){r.b0x(v)
t=r.as
t===$&&C.d()
s=t-1
for(;s>=0;--s)J.dI(r.r,r.w++,w[s])
r.aWB(u,w[r.as-1])}else{r.b0x(u)
t=r.as
t===$&&C.d()
s=t-1
for(;s>=0;--s)J.dI(r.r,r.w++,w[s])
J.dI(r.r,r.w++,w[r.as-1])
r.aWB(u,w[r.as-1])}u=v}v=r.aHZ()}},
aWB(d,e){var x,w=this,v=w.y
v===$&&C.d()
x=w.Q
x.toString
v.$flags&2&&C.A(v)
v[x]=e
v=w.z
v===$&&C.d()
v.$flags&2&&C.A(v)
v[x]=d
x=w.Q=x+1
if(x===511)w.a=10
else if(x===1023)w.a=11
else if(x===2047)w.a=12},
b0x(d){var x,w,v,u,t,s,r=this
r.as=0
x=r.x
r.as=1
w=r.y
w===$&&C.d()
v=w[d]
x.$flags&2&&C.A(x)
x[0]=v
v=r.z
v===$&&C.d()
u=v[d]
for(t=1;u!==4098;t=s){s=t+1
r.as=s
x[t]=w[u]
u=v[u]}},
aHZ(){var x,w,v,u,t=this,s=t.b,r=t.f
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
return D.c.dS(t.c,s)&B.aBd[w-9]},
b2d(){var x,w,v=this
v.y=new Uint8Array(4096)
x=new Uint32Array(4096)
v.z=x
D.bi.dl(x,0,4096,4098)
for(x=v.y,w=0;w<256;++w){x.$flags&2&&C.A(x)
x[w]=w}v.a=9
v.Q=258}}
A.bI5.prototype={
i8(d){return C.fX(new A.bI6(this,d))},
c2y(d){var x,w,v=this.a
if(v==null)return null
x=v.f[d]
v=this.d
A.oq(x.b,x.c,v,!1)
A.oq(x.ay,x.ch,v,!1)
v=this.c
v===$&&C.d()
w=x.cv(v)
return w},
p5(d,e){return C.fX(new A.bI7(this,d,e))},
c2x(d,e){var x,w,v,u,t,s,r=this,q=null,p=C.d9(d,!1,q,0)
r.c=p
p=r.a=r.c2z(p)
if(p==null)return q
p=p.f
x=p.length
w=new A.AV(r.d)
for(v=0;v<p.length;p.length===x||(0,C.r)(p),++v){u=p[v]
w.j2(0,u.b,u.c)}t=r.i8(0)
if(t==null)return q
t.e=A.cJJ(C.d9(d,!1,q,0))
t.w=B.Ph
for(s=1;s<x;++s)t.pX(r.i8(s))
return t},
b8b(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=C.a([],y.M),k=new A.bI9(l),j=d.c
if(j-d.d<8)return m
v=d.a9()
if(v!==18761&&v!==19789)return m
if(v===19789)d.e=!0
else d.e=!1
u=d.a9()
k.d=u
if(u!==42)return m
t=d.Y()
s=A.dk(d,m,0)
s.d=t
x=s
u=y.q
r=C.a5(u)
q=y.r
for(;;){if(!(t!==0&&t<j&&l.length<1024&&r.v(0,t)))break
w=null
try{p=new A.aAk(C.t(u,q),B.JQ,B.adt,B.bi4)
p.bxc(x)
w=p
o=w
if(!(o.b!==0&&o.c!==0))break}catch(n){break}l.push(w)
if(l.length===1){o=l[0]
k.a=o.b
k.b=o.c}if(e)break
t=x.Y()
if(t!==0)x.d=t}return l.length!==0?k:m},
c2z(d){return this.b8b(d,!1)}}
A.bKl.prototype={
a7Z(){var x,w=this.a,v=w.t6()
if((v&1)!==0)return!1
if((v>>>1&7)>3)return!1
if((v>>>4&1)===0)return!1
this.f.d=v>>>5
if(w.t6()!==2752925)return!1
x=this.b
x.a=w.a9()
x.b=w.a9()
return!0},
o3(){var x,w,v,u,t=this,s=null
if(!t.bI1())return s
x=t.b
w=x.a
t.d=C.hG(s,s,D.ak,0,D.bN,x.b,s,0,4,s,D.ak,w,!1)
t.bOM()
if(!t.bUz())return s
w=x.w
if(w.length!==0){v=C.d9(new C.f1(w),!1,s,0)
w=t.d
w.toString
w.e=A.cJJ(v)}u=x.r
if(u!=null)t.d.c=new C.An("ICC_PROFILE",D.ns,u)
return t.d},
bI1(){var x,w,v,u,t=this
if(!t.a7Z())return!1
t.fr=A.ds0()
for(x=t.dy,w=0;w<4;++w){v=new Int32Array(2)
u=new Int32Array(2)
x[w]=new A.aAX(v,u,new Int32Array(2))}x=t.b
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
u=A.d0D(v.h8(u))
t.c=u
v.d+=x.d
u.f8(1)
t.c.f8(1)
t.bUG(t.x,t.fr)
t.bUy()
if(!t.bUC(v))return!1
t.bUE()
t.c.f8(1)
t.bUD()
return!0},
bUG(d,e){var x,w,v,u=this,t=u.c
t===$&&C.d()
t=t.f8(1)!==0
d.a=t
if(t){d.b=u.c.f8(1)!==0
if(u.c.f8(1)!==0){d.c=u.c.f8(1)!==0
for(t=d.d,x=0;x<4;++x){if(u.c.f8(1)!==0){w=u.c
v=w.f8(7)
w=w.f8(1)===1?-v:v}else w=0
t.$flags&2&&C.A(t)
t[x]=w}for(t=d.e,x=0;x<4;++x){if(u.c.f8(1)!==0){w=u.c
v=w.f8(6)
w=w.f8(1)===1?-v:v}else w=0
t.$flags&2&&C.A(t)
t[x]=w}}if(d.b)for(x=0;x<3;++x){t=e.a
w=u.c.f8(1)!==0?u.c.f8(8):255
t.$flags&2&&C.A(t)
t[x]=w}}else d.b=!1
return!0},
bUy(){var x,w,v,u=this,t=u.w,s=u.c
s===$&&C.d()
t.a=s.f8(1)!==0
t.b=u.c.f8(6)
t.c=u.c.f8(3)
s=u.c.f8(1)!==0
t.d=s
if(s)if(u.c.f8(1)!==0){for(s=t.e,x=0;x<4;++x)if(u.c.f8(1)!==0){w=u.c
v=w.f8(6)
w=w.f8(1)===1?-v:v
s.$flags&2&&C.A(s)
s[x]=w}for(s=t.f,x=0;x<4;++x)if(u.c.f8(1)!==0){w=u.c
v=w.f8(6)
w=w.f8(1)===1?-v:v
s.$flags&2&&C.A(s)
s[x]=w}}if(t.b===0)s=0
else s=t.a?1:2
u.bw=s
return!0},
bUC(d){var x,w,v,u,t,s,r,q=d.c-d.d,p=this.c
p===$&&C.d()
p=D.c.c7(1,p.f8(2))
this.cy=p
x=p-1
w=x*3
if(q<w)return!1
for(p=this.db,v=0,u=0;u<x;++u,w=s){t=d.asJ(3,v)
s=w+((J.S(t.a,t.d)|J.S(t.a,t.d+1)<<8|J.S(t.a,t.d+2)<<16)>>>0)
if(s>q)s=q
r=new A.aaN(d.Eb(s-w,w))
r.b=254
r.c=0
r.d=-8
p[u]=r
v+=3}p[x]=A.d0D(d.Eb(q-w,d.d-d.b+w))
return w<q},
bUE(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
h===$&&C.d()
x=h.f8(7)
w=i.c.f8(1)!==0?i.c.Vi(4):0
v=i.c.f8(1)!==0?i.c.Vi(4):0
u=i.c.f8(1)!==0?i.c.Vi(4):0
t=i.c.f8(1)!==0?i.c.Vi(4):0
s=i.c.f8(1)!==0?i.c.Vi(4):0
r=i.x
for(h=i.dy,q=r.a,p=!r.c,o=r.d,n=0;n<4;++n){if(q){m=o[n]
if(p)m+=x}else{if(n>0){h[n]=h[0]
continue}m=x}l=h[n]
k=l.a
j=m+w
if(j<0)j=0
else if(j>127)j=127
j=B.GB[j]
k.$flags&2&&C.A(k)
k[0]=j
if(m<0)j=0
else j=m>127?127:m
k[1]=B.GC[j]
j=l.b
k=m+v
if(k<0)k=0
else if(k>127)k=127
k=B.GB[k]
j.$flags&2&&C.A(j)
j[0]=k*2
k=m+u
if(k<0)k=0
else if(k>127)k=127
j[1]=B.GC[k]*101581>>>16
if(j[1]<8)j[1]=8
k=l.c
j=m+t
if(j<0)j=0
else if(j>117)j=117
j=B.GB[j]
k.$flags&2&&C.A(k)
k[0]=j
j=m+s
if(j<0)j=0
else if(j>127)j=127
k[1]=B.GC[j]}},
bUD(){var x,w,v,u,t,s,r=this,q=r.fr
for(x=0;x<4;++x)for(w=0;w<8;++w)for(v=0;v<3;++v)for(u=0;u<11;++u){t=r.c
t===$&&C.d()
s=t.hH(B.aQY[x][w][v][u])!==0?r.c.f8(8):B.aB8[x][w][v][u]
t=q.b[x][w].a[v]
t.$flags&2&&C.A(t)
t[u]=s}t=r.c
t===$&&C.d()
t=t.f8(1)!==0
r.fx=t
if(t)r.fy=r.c.f8(8)},
bVY(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.bw
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
bOM(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.b,h=i.at
if(h!=null)k.a5=h
x=J.kU(4,y.K)
for(h=y.i,w=0;w<4;++w)x[w]=C.a([new A.Gb(),new A.Gb()],h)
k.E=x
h=k.at
h.toString
x=J.kU(h,y.bt)
for(v=0;v<h;++v){u=new Uint8Array(16)
t=new Uint8Array(8)
x[v]=new A.aAY(u,t,new Uint8Array(8))}k.k2=x
k.ok=new Uint8Array(832)
h=k.at
h.toString
k.go=new Uint8Array(4*h)
u=k.p4=16*h
h=8*h
k.R8=h
t=k.bw
t.toString
s=B.Gq[t]
r=s*u
q=(s/2|0)*h
k.p1=C.d9(new Uint8Array(16*u+r),!1,j,r)
h=k.R8
h.toString
k.p2=C.d9(new Uint8Array(8*h+q),!1,j,q)
h=k.R8
h.toString
k.p3=C.d9(new Uint8Array(8*h+q),!1,j,q)
h=i.a
k.RG=C.d9(new Uint8Array(h),!1,j,0)
p=i.a+1>>>1
k.rx=C.d9(new Uint8Array(p),!1,j,0)
k.ry=C.d9(new Uint8Array(p),!1,j,0)
i=k.bw
i.toString
o=B.Gq[i]
if(i===2)k.ch=k.ay=0
else{i=D.c.ab(k.y-o,16)
k.ay=i
h=D.c.ab(k.Q-o,16)
k.ch=h
if(i<0)k.ay=0
if(h<0)k.ch=0}i=D.c.ab(k.as+15+o,16)
k.cx=i
h=D.c.ab(k.z+15+o,16)
k.CW=h
u=k.at
u.toString
if(h>u)k.CW=u
h=k.ax
h.toString
if(i>h)k.cx=h
n=u+1
x=J.kU(n,y.bQ)
for(v=0;v<n;++v)x[v]=new A.aAV()
k.k3=x
i=k.at
i.toString
x=J.kU(i,y.bl)
for(v=0;v<i;++v){h=new Int16Array(384)
x[v]=new A.aAW(h,new Uint8Array(16))}k.bA=x
i=k.at
i.toString
x=J.kU(i,y.ac)
for(v=0;v<i;++v)x[v]=new A.Gb()
k.k4=x
k.bVY()
i=$.cQq()
h=$.cQr()
u=$.cQs()
t=$.cQt()
m=$.cHG()
l=new Int32Array(16)
A.drr()
k.e=new A.bKm(i,h,u,t,m,l)
return!0},
bUz(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
u=u.hH(k.fr.a[0])
t=k.c
o=k.fr
k.k1=u===0?t.hH(o.a[1]):2+t.hH(o.a[2])}u=k.fx
u===$&&C.d()
if(u){u=k.c
u===$&&C.d()
t=k.fy
t===$&&C.d()
n=u.hH(t)!==0}else n=!1
k.bUA()
if(!n)n=k.bUF(q,s)
else{r.a=q.a=0
u=p.b
u===$&&C.d()
if(!u)r.b=q.b=0
p.f=p.e=0}u=k.bw
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
D.n.dl(x,0,4,0)
k.y1=0
k.bXz()
u=k.bw
u.toString
l=!1
if(u>0){u=k.y2
t=k.ch
t===$&&C.d()
if(u>=t){t=k.cx
t.toString
t=u<=t
l=t}}if(!k.bGV(l))return!1
u=++k.y2}return!0},
bXz(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.y2,b0=a7.ok
b0===$&&C.d()
x=C.d9(b0,!1,a8,40)
w=C.d9(b0,!1,a8,584)
v=C.d9(b0,!1,a8,600)
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
A.p3(b0,m-4,b0,m+12,4)}for(k=-1;k<8;++k){m=k*32
j=584+m
A.p3(b0,j-4,b0,j+4,4)
m=600+m
A.p3(b0,m-4,b0,m+4,4)}}else{for(k=0;k<16;++k){o&2&&C.A(b0)
b0[40+k*32-1]=129}for(k=0;k<8;++k){m=k*32
o&2&&C.A(b0)
b0[584+m-1]=129
b0[600+m-1]=129}if(p){o&2&&C.A(b0)
b0[567]=129
b0[551]=129
b0[7]=129}}m=a7.k2
m===$&&C.d()
i=m[n]
h=l.a
g=l.e
if(p){A.p3(b0,8,i.a,0,16)
A.p3(b0,552,i.b,0,8)
A.p3(b0,568,i.c,0,8)}else if(n===0){D.n.dl(b0,7,28,127)
D.n.dl(b0,551,560,127)
D.n.dl(b0,567,576,127)}m=l.b
m===$&&C.d()
if(m){if(p){m=a7.at
m.toString
if(n>=m-1)D.n.dl(b0,24,28,i.a[15])
else A.p3(b0,24,a7.k2[n+1].a,0,4)}A.p3(b0,152,b0,24,4)
A.p3(b0,280,b0,24,4)
A.p3(b0,408,b0,24,4)
for(m=l.c,f=0;f<16;++f,g=g<<2>>>0){e=A.dk(x,a8,B.ZC[f])
B.aIh[m[f]].$1(e)
g.toString
j=f*16
a7.aZQ(g,new C.m0(h,j,Math.min(384,384),j,!1),e)}}else{m=A.d0F(n,a9,l.c[0])
m.toString
B.aXc[m].$1(x)
if(g!==0)for(f=0;f<16;++f,g=g<<2>>>0){e=A.dk(x,a8,B.ZC[f])
g.toString
m=f*16
a7.aZQ(g,new C.m0(h,m,Math.min(384,384),m,!1),e)}}m=l.f
m===$&&C.d()
j=A.d0F(n,a9,l.d)
j.toString
B.U1[j].$1(w)
B.U1[j].$1(v)
j=Math.min(384,384)
d=new C.m0(h,256,j,256,!1)
if((m&255)!==0){a0=a7.e
if((m&170)!==0){a0===$&&C.d()
a0.wQ(d,w)
a0.wQ(A.dk(d,a8,16),A.dk(w,a8,4))
a1=A.dk(d,a8,32)
a2=A.dk(w,a8,128)
a0.wQ(a1,a2)
a0.wQ(A.dk(a1,a8,16),A.dk(a2,a8,4))}else{a0===$&&C.d()
a0.bk0(d,w)}}a3=new C.m0(h,320,j,320,!1)
m=m>>>8
if((m&255)!==0){j=a7.e
if((m&170)!==0){j===$&&C.d()
j.wQ(a3,v)
j.wQ(A.dk(a3,a8,16),A.dk(v,a8,4))
m=A.dk(a3,a8,32)
a0=A.dk(v,a8,128)
j.wQ(m,a0)
j.wQ(A.dk(m,a8,16),A.dk(a0,a8,4))}else{j===$&&C.d()
j.bk0(a3,v)}}m=a7.ax
m.toString
if(a9<m-1){A.p3(i.a,0,b0,520,16)
A.p3(i.b,0,b0,808,8)
A.p3(i.c,0,b0,824,8)}a4=a7.p1.d+n*16
m=n*8
a5=a7.p2.d+m
a6=a7.p3.d+m
for(k=0;k<16;++k)A.p3(s,a4+k*u,b0,40+k*32,16)
for(k=0;k<8;++k){m=k*t
j=k*32
A.p3(r,a5+m,b0,584+j,8)
A.p3(q,a6+m,b0,600+j,8)}++n}},
aZQ(d,e,f){var x,w,v,u,t,s
switch(d>>>30){case 3:x=this.e
x===$&&C.d()
x.cqJ(e,f,!1)
break
case 2:this.e===$&&C.d()
w=J.S(e.a,e.d)+4
v=A.bKo(J.S(e.a,e.d+4),35468)
u=A.bKo(J.S(e.a,e.d+4),85627)
t=A.bKo(J.S(e.a,e.d+1),35468)
s=A.bKo(J.S(e.a,e.d+1),85627)
A.bKq(f,0,w+u,s,t)
A.bKq(f,1,w+v,s,t)
A.bKq(f,2,w-v,s,t)
A.bKq(f,3,w-u,s,t)
break
case 1:x=this.e
x===$&&C.d()
x.aoM(e,f)
break
default:break}},
bF6(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.p4
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
if(j.bw===1){if(d>0){x=j.e
x===$&&C.d()
x.aUF(u,t,i,s+4)}if(w.c){x=j.e
x===$&&C.d()
x.bpX(u,t,i,s)}if(e>0){x=j.e
x===$&&C.d()
x.aUG(u,t,i,s+4)}if(w.c){x=j.e
x===$&&C.d()
x.bpY(u,t,i,s)}}else{r=w.b
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
v.Lc(u,t,1,i,16,q,r,k)
v.Lc(p,n,1,x,8,q,r,k)
v.Lc(m,l,1,x,8,q,r,k)}if(w.c){v=j.e
v===$&&C.d()
v.cfk(u,t,i,s,r,k)
v.Lb(p,n+4,1,x,8,s,r,k)
v.Lb(m,l+4,1,x,8,s,r,k)}if(e>0){v=j.e
v===$&&C.d()
q=s+4
v.Lc(u,t,i,1,16,q,r,k)
v.Lc(p,n,x,1,8,q,r,k)
v.Lc(m,l,x,1,8,q,r,k)}if(w.c){v=j.e
v===$&&C.d()
v.crh(u,t,i,s,r,k)
i=4*x
v.Lb(p,n+i,x,1,8,s,r,k)
v.Lb(m,l+i,x,1,8,s,r,k)}}},
bGH(){var x,w=this,v=w.ay
v===$&&C.d()
x=v
for(;;){v=w.CW
v.toString
if(!(x<v))break
w.bF6(x,w.y2);++x}},
bGV(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.bw
d.toString
x=B.Gq[d]
d=f.p4
d.toString
w=x*d
d=f.R8
d.toString
v=(x/2|0)*d
d=f.p1
d===$&&C.d()
u=-w
t=A.dk(d,e,u)
d=f.p2
d===$&&C.d()
s=-v
r=A.dk(d,e,s)
d=f.p3
d===$&&C.d()
q=A.dk(d,e,s)
p=f.y2
d=f.cx
d.toString
o=p*16
n=(p+1)*16
if(a0)f.bGH()
if(p!==0){o-=x
f.to=A.dk(t,e,0)
f.x1=A.dk(r,e,0)
f.x2=A.dk(q,e,0)}else{f.to=A.dk(f.p1,e,0)
f.x1=A.dk(f.p2,e,0)
f.x2=A.dk(f.p3,e,0)}d=p<d-1
if(d)n-=x
m=f.as
if(n>m)n=m
f.xr=null
if(f.a5!=null&&o<n){l=f.xr=f.bDW(o,n-o)
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
f.c4R(o-k,f.z-g,n-o)}if(d){d=f.p1
l=f.p4
l.toString
d.RR(u,w,t,16*l)
l=f.p2
u=f.R8
u.toString
l.RR(s,v,r,8*u)
u=f.p3
l=f.R8
l.toString
u.RR(s,v,q,8*l)}return!0},
c4R(d,e,f){if(e<=0||f<=0)return!1
this.bFT(d,e,f)
this.bFS(d,e,f)
return!0},
aGq(d){var x
if((d&-4194304)>>>0===0)x=D.c.U(d,14)
else x=d<0?0:255
return x},
Bu(d,e,f,g,h){var x=19077*d,w=this.aGq(x+26149*f+-3644112)
g.$flags&2&&C.A(g)
g[h]=w
g[h+1]=this.aGq(x-6419*e-13320*f+2229552)
g[h+2]=this.aGq(x+33050*e+-4527440)
g[h+3]=255},
axh(b4,b5,b6,b7,b8,b9,c0,c1,c2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=y.p,d=e.a(b4.a),a0=b4.d,a1=e.a(b6.a),a2=b6.d,a3=e.a(b7.a),a4=b7.d,a5=e.a(b8.a),a6=b8.d,a7=e.a(b9.a),a8=b9.d,a9=e.a(c0.a),b0=c0.d,b1=b5==null,b2=b1?f:e.a(b5.a),b3=b1?f:b5.d
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
g.Bu(d[a0],s&255,s>>>16,a9,b0)
b1=b2!=null
if(b1){s=3*t+u+131074>>>2
r=b2[b3]
x.toString
g.Bu(r,s&255,s>>>16,x,w)}for(q=1;q<=v;++q,t=o,u=p){p=(a1[a2+q]|a3[a4+q]<<16)>>>0
o=(a5[a6+q]|a7[a8+q]<<16)>>>0
n=u+p+t+o+524296
m=n+2*(p+t)>>>3
l=n+2*(u+o)>>>3
s=m+u>>>1
k=l+p>>>1
r=2*q
j=a0+r
i=(r-1)*4
g.Bu(d[j-1],s&255,s>>>16,a9,b0+i)
h=r*4
g.Bu(d[j],k&255,k>>>16,a9,b0+h)
if(b1){s=l+t>>>1
k=m+o>>>1
r=b3+r
j=b2[r-1]
x.toString
g.Bu(j,s&255,s>>>16,x,w+i)
g.Bu(b2[r],k&255,k>>>16,x,w+h)}}if((c2&1)===0){s=3*u+t+131074>>>2
e*=4
g.Bu(d[a0+c2-1],s&255,s>>>16,a9,b0+e)
if(b1){s=3*t+u+131074>>>2
b1=b2[b3+c2-1]
x.toString
g.Bu(b1,s&255,s>>>16,x,w+e)}}},
bFS(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.xr
if(l==null)return
x=y.p.a(l.a)
w=l.d
if(d===0){v=f-1
u=d}else{u=d-1
w-=m.b.a
v=f}l=m.Q
t=m.as
if(l+d+f===t)v=t-l-u
s=m.d.bN()
r=m.d.gbV()*4
for(l=m.b.a,t=s.$flags|0,q=0;q<v;++q){p=(q+u)*r+3
for(o=0;o<e;++o,p+=4){n=x[w+o]
t&2&&C.A(s)
s[p]=n}w+=l}},
bFT(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=C.d9(J.cV(l.d.ga6(0),0,null),!1,k,d*j.a*4),h=l.to
h===$&&C.d()
x=A.dk(h,k,0)
h=l.x1
h===$&&C.d()
w=A.dk(h,k,0)
h=l.x2
h===$&&C.d()
v=A.dk(h,k,0)
u=d+f
t=D.c.U(e+1,1)
s=j.a*4
j=l.rx
j===$&&C.d()
r=A.dk(j,k,0)
j=l.ry
j===$&&C.d()
q=A.dk(j,k,0)
if(d===0){l.axh(x,k,w,v,w,v,i,k,e)
p=f}else{j=l.RG
j===$&&C.d()
l.axh(j,x,r,q,w,v,A.dk(i,k,-s),i,e)
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
l.axh(A.dk(x,k,-n),x,r,q,w,v,A.dk(i,k,h),i,e)}j=x.d
h=l.p4
h.toString
x.d=j+h
if(l.Q+u<l.as){j=l.RG
j===$&&C.d()
j.aBd(0,e,x)
l.rx.aBd(0,t,w)
l.ry.aBd(0,t,v);--p}else if((u&1)===0)l.axh(x,k,w,v,w,v,A.dk(i,k,s),k,e)
return p},
bDW(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.b,m=n.a,l=n.b
if(d<0||e<=0||d+e>l)return null
if(d===0){n=m*l
o.ad=new Uint8Array(n)
x=o.a5
w=new A.bMq(x,m,l)
v=x.b3()
u=w.d=v&3
w.e=D.c.U(v,2)&3
w.f=D.c.U(v,4)&3
w.r=D.c.U(v,6)&3
if(w.gdW())if(u===0){if(x.c-x.d<n)w.r=1}else if(u===1){t=new A.Wk(B.t6,C.a([],y.J))
t.a=m
t.b=l
n=C.a([],y.A)
u=C.a([],y.F)
s=new Uint32Array(2)
r=new A.aAT(x,s)
s=r.e=J.cV(D.bi.ga6(s),0,null)
q=x.b3()
s.$flags&2&&C.A(s)
s[0]=q
q=x.b3()
s.$flags&2&&C.A(s)
s[1]=q
q=x.b3()
s.$flags&2&&C.A(s)
s[2]=q
q=x.b3()
s.$flags&2&&C.A(s)
s[3]=q
q=x.b3()
s.$flags&2&&C.A(s)
s[4]=q
q=x.b3()
s.$flags&2&&C.A(s)
s[5]=q
q=x.b3()
s.$flags&2&&C.A(s)
s[6]=q
x=x.b3()
s.$flags&2&&C.A(s)
s[7]=x
r.b=!1
u=new A.at8(r,t,n,u)
u.dy=m
u.fr=l
w.x=u
u.Zg(m,l,!0)
n=w.x
x=n.ch
if(x.length===1&&x[0].a===B.aeh&&n.bPj()){w.y=!0
n=w.x
x=n.c
p=x.a*x.b
n.db=0
x=D.c.a_(p,4)
x=new Uint8Array(p+(4-x))
n.cy=x
n.cx=J.mz(D.n.ga6(x),0,null)}else{w.y=!1
w.x.aWL(m)}}else w.r=1
o.a2=w}n=o.a2
if(n!=null)if(!n.w){x=o.ad
x===$&&C.d()
if(!n.a7Y(d,e,x))return null}n=o.ad
n===$&&C.d()
return C.d9(n,!1,null,d*m)},
bUF(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.fr.b,a3=a1.k1
a3===$&&C.d()
x=a1.dy[a3]
a3=a1.bA
a3===$&&C.d()
w=a3[a1.y1]
v=C.d9(w.a,!1,null,0)
a3=a1.k3
a3===$&&C.d()
u=a3[0]
v.cjF(0,v.c-v.d,0)
a3=w.b
a3===$&&C.d()
if(!a3){t=C.d9(new Int16Array(16),!1,null,0)
a3=a4.b
s=u.b
r=a1.aHT(a5,a2[1],a3+s,x.b,0,t)
a4.b=u.b=r>0?1:0
if(r>1)a1.c32(t,v)
else{q=D.c.U(J.S(t.a,t.d)+3,3)
for(p=0;p<256;p+=16)J.dI(v.a,v.d+p,q)}o=a2[0]
n=1}else{o=a2[3]
n=0}m=a4.a&15
l=u.a&15
for(k=0,j=0;j<4;++j){i=l&1
for(h=0,g=0;g<4;++g){r=a1.aHT(a5,o,i+(m&1),x.a,n,v)
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
for(g=0;g<2;++g){r=a1.aHT(a5,a2[2],i+(m&1),x.c,0,v)
i=r>0?1:0
m=m>>>1|i<<3
a3=J.S(v.a,v.d)!==0?1:0
if(r>3)a3=3
else if(r>1)a3=2
h=(h<<2|a3)>>>0
v.d+=16}m=m>>>2
l=l>>>1|i<<5}d=(d|D.c.c7(h,4*a0))>>>0
e=(e|D.c.c7(m<<4>>>0,a0))>>>0
f=(f|D.c.c7(l&240,a0))>>>0}a4.a=e
u.a=f
w.e=k
w.f=d
if((d&43690)===0)x.toString
return(k|d)>>>0===0},
c32(d,e){var x,w,v,u,t,s,r,q,p,o,n=new Int32Array(16)
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
J.dI(e.a,e.d+p,u)
u=D.c.U(q+r,3)
J.dI(e.a,e.d+(p+16),u)
u=D.c.U(v-s,3)
J.dI(e.a,e.d+(p+32),u)
u=D.c.U(q-r,3)
J.dI(e.a,e.d+(p+48),u)
p+=64}},
bI5(d,e){var x,w,v,u,t,s
if(d.hH(e[3])===0)x=d.hH(e[4])===0?2:3+d.hH(e[5])
else if(d.hH(e[6])===0)x=d.hH(e[7])===0?5+d.hH(159):7+2*d.hH(165)+d.hH(145)
else{w=d.hH(e[8])
v=2*w+d.hH(e[9+w])
u=B.aCL[v]
t=u.length
for(x=0,s=0;s<t;++s)x+=x+d.hH(u[s])
x+=3+D.c.c7(8,v)}return x},
aHT(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=e[h].a[f]
for(;h<16;h=x){if(d.hH(p[0])===0)return h
while(d.hH(p[1])===0){++h
p=e[B.XZ[h]].a[0]
if(h===16)return 16}x=h+1
w=e[B.XZ[x]].a
if(d.hH(p[2])===0){p=w[1]
v=1}else{v=this.bI5(d,p)
p=w[2]}u=B.aH5[h]
t=d.b
t===$&&C.d()
s=d.aXb(D.c.U(t,1))
t=d.b
r=B.WQ[t]
d.b=B.WO[t]
t=d.d
t===$&&C.d()
d.d=t-r
t=s!==0?-v:v
q=g[h>0?1:0]
J.dI(i.a,i.d+u,t*q)}return 16},
bUA(){var x,w,v,u,t,s,r,q,p,o=this,n=o.y1,m=4*n,l=o.go,k=o.id,j=o.bA
j===$&&C.d()
x=j[n]
n=o.c
n===$&&C.d()
n=n.hH(145)===0
x.b=n
if(!n){if(o.c.hH(156)!==0)w=o.c.hH(128)!==0?1:3
else w=o.c.hH(163)!==0?2:0
n=x.c
n.$flags&2&&C.A(n)
n[0]=w
l.toString
D.n.dl(l,m,m+4,w)
D.n.dl(k,0,4,w)}else{v=x.c
for(n=k.$flags|0,u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){j=m+s
r=B.aHn[l[j]][w]
q=B.V5[o.c.hH(r[0])]
while(q>0)q=B.V5[2*q+o.c.hH(r[q])]
w=-q
l.$flags&2&&C.A(l)
l[j]=w}p=u+4
l.toString
D.n.bW(v,u,p,l,m)
n&2&&C.A(k)
k[t]=w}}if(o.c.hH(142)===0)n=0
else if(o.c.hH(114)===0)n=2
else n=o.c.hH(183)!==0?1:3
x.d=n}}
A.aaN.prototype={
f8(d){var x,w
for(x=0;w=d-1,d>0;d=w)x=(x|D.c.bX(this.hH(128),w))>>>0
return x},
Vi(d){var x=this.f8(d)
return this.f8(1)===1?-x:x},
hH(d){var x,w=this,v=w.b
v===$&&C.d()
x=w.aXb(D.c.U(v*d,8))
if(w.b<=126)w.c0q()
return x},
aXb(d){var x,w,v,u,t,s=this,r=s.d
r===$&&C.d()
if(r<0){x=s.a
w=x.c
v=x.d
if(w-v>=1){u=x.b3()
r=s.c
r===$&&C.d()
s.c=(u|r<<8)>>>0
r=s.d+8
s.d=r
t=r}else{if(v<w){r=x.b3()
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
if(D.c.lx(r,t)>d){x=s.b
x===$&&C.d()
w=d+1
s.b=x-w
s.c=r-D.c.bX(w,t)
return 1}else{s.b=d
return 0}},
c0q(){var x,w=this,v=w.b
v===$&&C.d()
x=B.WQ[v]
w.b=B.WO[v]
v=w.d
v===$&&C.d()
w.d=v-x}}
A.bKm.prototype={
aUG(d,e,f,g){var x,w
for(x=0;x<16;++x){w=e+x
if(this.b3h(d,w,f,g))this.atY(d,w,f)}},
aUF(d,e,f,g){var x,w
for(x=0;x<16;++x){w=e+x*f
if(this.b3h(d,w,1,g))this.atY(d,w,1)}},
bpY(d,e,f,g){var x
for(x=1;x<=3;++x)this.aUG(d,e+4*x*f,f,g)},
bpX(d,e,f,g){var x
for(x=1;x<=3;++x)this.aUF(d,e+4*x,f,g)},
crh(d,e,f,g,h,i){var x
for(x=1;x<=3;++x)this.Lb(d,e+4*x*f,f,1,16,g,h,i)},
cfk(d,e,f,g,h,i){var x
for(x=1;x<=3;++x)this.Lb(d,e+4*x,1,f,16,g,h,i)},
Lc(a2,a3,a4,a5,a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(x=3*a4,w=2*a4,v=a1.c,u=a1.e,t=a2.$flags|0,s=0;s<a6;++s,a3+=a5)if(a1.b3i(a2,a3,a4,a7,a8))if(a1.b1L(a2,a3,a4,a9))a1.atY(a2,a3,a4)
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
t&2&&C.A(a2)
a2[r]=a0
a2[p]=u[255+o+e]
a2[n]=u[255+m+f]
a2[a3]=u[255+l-f]
a2[k]=u[255+j-e]
a2[i]=u[255+h-d]}},
Lb(d,e,f,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=2*f,w=g.d,v=g.e,u=d.$flags|0,t=0;t<a1;++t,e+=a0)if(g.b3i(d,e,f,a2,a3))if(g.b1L(d,e,f,a4))g.atY(d,e,f)
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
u&2&&C.A(d)
d[s]=h
d[q]=v[255+p+j]
d[e]=v[255+o-k]
d[n]=v[255+m-i]}},
atY(d,e,f){var x=d[e-2*f],w=e-f,v=d[w],u=d[e],t=3*(u-v)+this.c[1020+x-d[e+f]],s=this.d,r=s[D.c.U(t+4+1024,3)-128+112],q=this.e
s=q[255+v+s[D.c.U(t+3+1024,3)-128+112]]
d.$flags&2&&C.A(d)
d[w]=s
d[e]=q[255+u-r]},
b1L(d,e,f,g){var x=d[e-2*f],w=d[e-f],v=d[e],u=d[e+f],t=this.a
return t[255+x-w]>g||t[255+u-v]>g},
b3h(d,e,f,g){var x=d[e-2*f],w=d[e-f],v=d[e],u=d[e+f]
return 2*this.a[255+w-v]+this.b[255+x-u]<=g},
b3i(d,e,f,g,h){var x=d[e-4*f],w=3*f,v=d[e-w],u=2*f,t=d[e-u],s=d[e-f],r=d[e],q=d[e+f],p=d[e+u],o=d[e+w]
w=this.a
u=255+t
if(2*w[255+s-r]+this.b[u-q]>g)return!1
return w[255+x-v]<=h&&w[255+v-t]<=h&&w[u-s]<=h&&w[255+o-p]<=h&&w[255+p-q]<=h&&w[255+q-r]<=h},
wQ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=y._.a(d.a),j=y.p.a(e.a),i=this.f,h=d.d
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
x&2&&C.A(i)
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
x&2&&C.A(j)
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
cqJ(d,e,f){this.wQ(d,e)
if(f)this.wQ(A.dk(d,null,16),A.dk(e,null,4))},
aoM(d,e){var x,w,v,u,t,s
for(x=J.S(d.a,d.d)+4+65536,w=0;w<4;++w)for(v=w*32,u=0;u<4;++u){t=u+v
s=J.S(e.a,e.d+t)+(D.c.U(x,3)-8192)
if(!((s&-256)>>>0===0))s=s<0?0:255
J.dI(e.a,e.d+t,s)}},
bk0(d,e){var x=this,w=null
if(J.S(d.a,d.d)!==0)x.aoM(d,e)
if(J.S(d.a,d.d+16)!==0)x.aoM(A.dk(d,w,16),A.dk(e,w,4))
if(J.S(d.a,d.d+32)!==0)x.aoM(A.dk(d,w,32),A.dk(e,w,128))
if(J.S(d.a,d.d+48)!==0)x.aoM(A.dk(d,w,48),A.dk(e,w,132))}}
A.bKt.prototype={}
A.bKw.prototype={}
A.bKy.prototype={}
A.aaM.prototype={}
A.bKx.prototype={}
A.bKn.prototype={}
A.Gb.prototype={}
A.aAV.prototype={}
A.aAX.prototype={}
A.aAW.prototype={}
A.aAY.prototype={}
A.aaO.prototype={
a7Z(){var x,w,v,u,t=this,s=t.b
if(s.dz(8)!==47)return!1
x=s.dz(14)+1
w=s.dz(14)+1
v=s.dz(1)
t.dy=x
t.fr=w
u=t.c
u.f=B.CF
u.a=x
u.b=w
u.d=v!==0
if(s.dz(3)!==0)return!1
return!0},
o3(){var x,w,v,u,t,s,r=this,q=null
r.f=0
if(!r.a7Z())return q
r.Zg(r.dy,r.fr,!0)
r.aWL(r.dy)
x=r.dy
r.d=C.hG(q,q,D.ak,0,D.bN,r.fr,q,0,4,q,D.ak,x,!1)
x=r.cx
x.toString
w=r.c
v=w.a
u=w.b
if(!r.aGO(x,v,u,u,r.gbW5()))return q
x=w.w
if(x.length!==0){t=C.d9(new C.f1(x),!1,q,0)
x=r.d
x.toString
x.e=A.cJJ(t)}s=w.r
if(s!=null)r.d.c=new C.An("ICC_PROFILE",D.ns,s)
return r.d},
aWL(d){var x,w=this,v=w.c
v=v.a*v.b+d
x=new Uint32Array(v+d*16)
w.cx=x
w.cy=J.cV(D.bi.ga6(x),0,null)
w.db=v
return!0},
bXm(d){var x,w,v,u=this,t=u.b,s=t.dz(2),r=u.CW,q=D.c.c7(1,s)
if((r&q)>>>0!==0)return!1
u.CW=(r|q)>>>0
x=new A.aAU(B.aeg)
u.ch.push(x)
r=B.aUi[s]
x.a=r
x.b=d[0]
x.c=d[1]
switch(r.a){case 0:case 1:t=t.dz(3)+2
x.e=t
x.d=u.Zg(A.Gc(x.b,t),A.Gc(x.c,x.e),!1)
break
case 3:w=t.dz(8)+1
if(w>16)v=0
else if(w>4)v=1
else{t=w>2?2:3
v=t}d[0]=A.Gc(x.b,v)
x.e=v
x.d=u.Zg(w,1,!1)
u.bGi(w,x)
break
case 2:break}return!0},
Zg(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(f)for(x=p.b,w=y.t,v=e,u=d;x.dz(1)!==0;){t=C.a([u,v],w)
if(!p.bXm(t))throw C.o(C.bQ("Invalid Transform"))
u=t[0]
v=t[1]}else{v=e
u=d}x=p.b
if(x.dz(1)!==0){s=x.dz(4)
if(!(s>=1&&s<=11))throw C.o(C.bQ("Invalid Color Cache"))}else s=0
if(!p.bX0(u,v,s,f))throw C.o(C.bQ("Invalid Huffman Codes"))
if(s>0){x=D.c.c7(1,s)
p.w=x
p.x=new A.bKu(new Uint32Array(x),32-s)}else p.w=0
x=p.c
x.a=u
x.b=v
r=p.z
p.Q=A.Gc(u,r)
p.y=r===0?4294967295:D.c.c7(1,r)-1
if(f){p.f=0
return null}q=new Uint32Array(u*v)
if(!p.aGO(q,u,v,v,null))throw C.o(C.bQ("Failed to decode image data."))
p.f=0
return q},
aGO(b0,b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=506832829,a5=a3.f,a6=D.c.dv(a5,b1),a7=D.c.a_(a5,b1),a8=b1*b2,a9=b1*b3
if(a5>=a9){if(b4!=null)b4.$2(b3,!1)
return!0}x=a3.b07(a7,a6)
w=a3.w
v=280+w
u=w>0?a3.x:null
t=a3.y
for(w=b0.$flags|0,s=a3.b,r=b4!=null,q=a5;q<a9;){if((a7&t)>>>0===0){p=a3.ZJ(a3.as,a3.Q,a3.z,a7,a6)
x=a3.ax[p]}o=0
if(x.d){n=x.c
w&2&&C.A(b0)
b0[q]=n;++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dS(A.alO(k,a4),m)
l&2&&C.A(n)
n[j]=k;++a5}a7=o}continue}if(s.a>=32)s.Fq()
if(x.e){i=x.f[s.ako()&63]
n=i.a
m=s.a
if(n<256){s.a=m+n
n=i.b
w&2&&C.A(b0)
b0[q]=n
h=0}else{s.a=m+(n-256)
h=i.b}if(s.b)break
if(h===0){++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dS(A.alO(k,a4),m)
l&2&&C.A(n)
n[j]=k;++a5}a7=o}continue}}else h=x.Ik(0,s)
if(h<256){if(x.b){n=x.c
w&2&&C.A(b0)
b0[q]=(n|h<<8)>>>0}else{g=x.Ik(1,s)
if(s.a>=32)s.Fq()
f=C.d6A(x.Ik(2,s),h,g,x.Ik(3,s))
w&2&&C.A(b0)
b0[q]=f}++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dS(A.alO(k,a4),m)
l&2&&C.A(n)
n[j]=k;++a5}a7=o}}else if(h<280){e=a3.aut(h-256)
d=x.Ik(4,s)
if(s.a>=32)s.Fq()
a0=a3.b4e(b1,a3.aut(d))
if(q<a0||a8-q<e)return!1
else{a1=q-a0
for(a2=0;a2<e;++a2){n=b0[a1+a2]
w&2&&C.A(b0)
b0[q+a2]=n}}q+=e
a7+=e
while(a7>=b1){a7-=b1;++a6
if(r&&a6<=b3)b4.$2(a6,!0)}if((a7&t)>>>0!==0){p=a3.ZJ(a3.as,a3.Q,a3.z,a7,a6)
x=a3.ax[p]}if(u!=null)for(n=u.a,m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dS(A.alO(k,a4),m)
l&2&&C.A(n)
n[j]=k;++a5}}else if(h<v){while(a5<q){n=b0[a5]
m=u.a
l=u.b
l=D.c.dS(A.alO(n,a4),l)
m.$flags&2&&C.A(m)
m[l]=n;++a5}n=u.a
m=n[h-280]
w&2&&C.A(b0)
b0[q]=m;++q;++a7
if(a7>=b1){++a6
if(r&&a6<=b3)b4.$2(a6,!0)
for(m=u.b,l=n.$flags|0;a5<q;){k=b0[a5]
j=D.c.dS(A.alO(k,a4),m)
l&2&&C.A(n)
n[j]=k;++a5}a7=o}}else return!1}if(r)b4.$2(a6>b3?b3:a6,!1)
a3.f=q
return!0},
bPj(){var x,w,v,u,t
if(this.w>0)return!1
for(x=this.at,w=this.ax,v=0;v<x;++v){u=w[v].a
t=u[1]
if(t.a[t.b].a>0)return!1
t=u[2]
if(t.a[t.b].a>0)return!1
t=u[3]
if(t.a[t.b].a>0)return!1}return!0},
bGr(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(e&&D.c.a_(d,16)!==0)return
x=m.r
w=d-x
v=m.dy
u=v*x
while(w>0){t=w>16?16:w
s=v*t
r=v*x
q=m.db
m.aWU(x,t,u)
for(v=m.dx,p=m.cx,o=0;o<s;++o){v.toString
n=p[q+o]
v.$flags&2&&C.A(v)
v[r+o]=n>>>8&255}w-=t
v=m.dy
u+=t*v
x+=t}m.r=d},
bDk(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.f,j=D.c.dv(k,d),i=D.c.a_(k,d),h=d*e,g=d*f
if(k>=g){l.aud(j)
return!0}x=l.b07(i,j)
w=l.y
v=l.b
for(;;){if(!(!v.b&&k<g))break
if((i&w)>>>0===0){u=l.ZJ(l.as,l.Q,l.z,i,j)
x=l.ax[u]}if(v.a>=32)v.Fq()
t=x.Ik(0,v)
if(t<256){s=l.cy
s===$&&C.d()
s.$flags&2&&C.A(s)
s[k]=t;++k;++i
if(i>=d){++j
if(D.c.a_(j,16)===0)l.aud(j)
i=0}}else if(t<280){r=l.aut(t-256)
q=x.Ik(4,v)
if(v.a>=32)v.Fq()
p=l.b4e(d,l.aut(q))
if(k>=p&&h-k>=r)for(s=l.cy,o=0;o<r;++o){s===$&&C.d()
n=k+o
m=s[n-p]
s.$flags&2&&C.A(s)
s[n]=m}else{l.f=k
return!0}k+=r
i+=r
while(i>=d){i-=d;++j
if(D.c.a_(j,16)===0)l.aud(j)}if(k<g&&(i&w)>>>0!==0){u=l.ZJ(l.as,l.Q,l.z,i,j)
x=l.ax[u]}}else return!1}l.aud(j)
l.f=k
return!0},
aud(d){var x,w,v,u=this,t=u.r,s=d-t,r=u.cy
r===$&&C.d()
x=C.d9(r,!1,null,u.c.a*t)
if(s>0){w=u.r
t=u.dx
t.toString
v=C.d9(t,!1,null,u.dy*w)
u.ch[0].c8Z(w,w+s,x,v)}u.r=d},
bW6(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.c.a,m=o.r
if(e)if(D.c.a_(d,16)!==0)return
x=d-m
if(x<=0){o.r=d
return}o.aWU(m,x,n*m)
n=o.cx
n.toString
w=o.d.bN()
m=o.r
v=o.dy
u=m*v*4
for(t=o.db,m=w.$flags|0,s=0;s<x;++s)for(r=0;r<v;++r,++t){q=n[t]
p=u+1
m&2&&C.A(w)
w[u]=q>>>16&255
u=p+1
w[p]=q>>>8&255
p=u+1
w[u]=q&255
u=p+1
w[p]=q>>>24&255}o.r=d},
aWU(d,e,f){var x,w=this,v=w.ch,u=v.length,t=w.c.a,s=d+e,r=w.db,q=w.cx
q.toString
D.bi.bW(q,r,r+t*e,q,f)
for(;x=u-1,u>0;u=x){t=v[x]
q=w.cx
q.toString
t.chz(d,s,q,r,q,r)}},
bX0(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=1,i=null
if(g&&k.b.dz(1)!==0){x=2+k.b.dz(3)
w=A.Gc(d,x)
v=A.Gc(e,x)
u=w*v
t=k.Zg(w,v,!1)
if(t==null)return!1
k.z=x
for(s=t.$flags|0,r=j,q=0;q<u;++q){p=t[q]>>>8&65535
s&2&&C.A(t)
t[q]=p
if(p>=r)r=p+1}if(r>1000||r>d*e){i=new Int32Array(1)
D.df.dl(i,0,1,255)
for(j=0,q=0;q<u;++q){o=t[q]
if(i[o]===-1){n=j+1
i[o]=j
j=n}m=i[o]
s&2&&C.A(t)
t[q]=m}}else j=r}else{t=null
r=1}if(k.b.b)return!1
l=k.bX1(f,j,r,i)
if(l==null)return!1
k.as=t
k.at=j
k.ax=l
return!0},
aKl(d,e,f,g,h,i){var x,w=d.a,v=d.b,u=g
do{u-=f
x=w[v+(e+u)]
x.a=h
x.b=i}while(u>0)},
bS0(d,e,f){var x=D.c.bX(1,e-f)
while(e<15){x-=d[e]
if(x<=0)break;++e
x=x<<1>>>0}return e-f},
b0g(d,e){var x=D.c.bX(1,e-1)
while((d&x)>>>0!==0)x=x>>>1
return x!==0?((d&x-1)>>>0)+x:d},
b9X(a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=D.c.c7(1,a3),a0=new Int32Array(16),a1=new Int32Array(16)
for(x=0;x<a5;++x){w=a4[x]
if(w>15)return 0
a0[w]=a0[w]+1}if(a0[0]===a5)return 0
a1[1]=0
for(v=1;v<15;v=u){w=a0[v]
if(w>D.c.c7(1,v))return 0
u=v+1
a1[u]=a1[v]+w}for(w=a6!=null,x=0;x<a5;++x){t=a4[x]
if(t>0)if(w){s=a1[t]
if(s>=a5)return 0
a1[t]=s+1
a6.$flags&2&&C.A(a6)
a6[s]=x}else a1[t]=a1[t]+1}if(a1[15]===1){if(w){a2.toString
e.aKl(a2,0,1,d,0,a6[0])}return d}r=d-1
for(q=0,p=1,o=1,x=0,v=1,n=2;v<=a3;++v,n=n<<1>>>0){o=o<<1>>>0
p+=o
o-=a0[v]
if(o<0)return 0
if(a2==null)continue
for(m=v&255;a0[v]>0;a0[v]=a0[v]-1,x=l){l=x+1
e.aKl(a2,q,n,d,m,a6[x])
q=e.b0g(q,v)}}for(v=a3+1,w=a2!=null,k=d,j=0,i=4294967295,n=2;v<=15;++v,n=n<<1>>>0){o=o<<1>>>0
p+=o
o-=a0[v]
if(o<0)return 0
for(m=v-a3&255;a0[v]>0;a0[v]=a0[v]-1){h=(q&r)>>>0
if(h!==i){if(w)j+=k
g=e.bS0(a0,v,a3)
k=D.c.bX(1,g)
d+=k
if(w){s=a2.a[a2.b+h]
s.a=g+a3&255
s.b=j-h}i=h}if(w){l=x+1
f=a6[x]
e.aKl(a2,j+D.c.ff(q,a3),n,k,m,f)
x=l}q=e.b0g(q,v)}}if(p!==2*a1[15]-1)return 0
return d},
b9Y(d,e,f,g){var x,w,v,u,t,s,r=this.b9X(null,e,f,g,null)
if(r===0||d==null)return r
x=d.b
w=x.d
v=x.e
if(w+r>=v){u=new A.a3r()
if(r>v)v=r
t=A.cK6(v)
u.e=v
u.b=u.a=t
d.b=u
x=u}s=new Uint16Array(g)
this.b9X(x.b,e,f,g,s)
return r},
bX_(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.asd(new A.a3r())
h.aW7(128)
if(this.b9Y(h,7,d,19)===0)return!1
x=this.b
if(x.dz(1)!==0){w=2+x.dz(2+2*x.dz(3))
if(w>e)return!1}else w=e
for(v=f.$flags|0,u=8,t=0;t<e;w=s){s=w-1
if(w===0)break
if(x.a>=32)x.Fq()
r=h.b.a
r.toString
q=r.a[r.b+(x.ako()&127)]
x.a=x.a+q.a
p=q.b
if(p<16){o=t+1
v&2&&C.A(f)
f[t]=p
if(p!==0)u=p
t=o}else{n=p-16
m=B.aA1[n]
l=B.aAj[n]
k=x.dz(m)+l
if(t+k>e)return!1
j=p===16?u:0
for(;i=k-1,k>0;k=i,t=o){o=t+1
v&2&&C.A(f)
f[t]=j}}}return!0},
b4Q(d,e,f){var x,w,v,u,t,s,r=this.b,q=r.dz(1)
D.df.dl(e,0,d,0)
if(q!==0){x=r.dz(1)
w=r.dz(r.dz(1)===0?1:8)
e.$flags&2&&C.A(e)
e[w]=1
if(x+1===2)e[r.dz(8)]=1
v=!0}else{u=new Int32Array(19)
t=r.dz(4)+4
for(s=0;s<t;++s)u[B.aGo[s]]=r.dz(3)
v=this.bX_(u,d,e)}return v&&!r.b?this.b9Y(f,8,e,d):0},
at8(d,e,f){var x=f.a,w=d.a
f.a=x+w
f.b=(f.b|D.c.c7(d.b,e))>>>0
return w},
bzR(d){var x,w,v,u,t,s,r,q=this
for(x=d.a,w=d.f,v=0;v<64;++v){u=w[v]
t=x[0]
s=t.a[t.b+v]
t=s.b
if(t>=256){u.a=s.a+256
u.b=t}else{u.b=u.a=0
r=D.c.ff(v,q.at8(s,8,u))
t=x[1]
r=D.c.ff(r,q.at8(t.a[t.b+r],16,u))
t=x[2]
r=D.c.ff(r,q.at8(t.a[t.b+r],0,u))
t=x[3]
D.c.ff(r,q.at8(t.a[t.b+r],24,u))}}},
bX1(a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a5>0,a2=a1?D.c.c7(1,a5):0,a3=B.aDE[a5],a4=a8==null
if(a4&&a6!==a7)return a0
x=new Int32Array(280+a2)
w=J.kU(a6,y.f)
for(v=0;v<a6;++v)w[v]=A.diT()
a2=new A.asd(new A.a3r())
a2.aW7(a6*a3)
d.ay=a2
for(a2=!a4,u=0;u<a7;++u)if(a2&&a8[u]===-1)for(t=0;t<5;++t){s=B.T5[t]
if(d.b4Q(t===0&&a1?s+D.c.c7(1,a5):s,x,a0)===0)return a0}else{r=w[a4?u:a8[u]]
q=r.a
for(p=0,o=!0,n=0,t=0;t<5;++t){s=B.T5[t]
if(t===0&&a1)s+=D.c.c7(1,a5)
m=d.b4Q(s,x,d.ay)
l=d.ay.b
k=l.b
k.toString
q[t]=k
if(m===0)return a0
if(o&&B.aIf[t]===1)o=k.a[k.b].a===0
j=k.a
k=k.b
n+=j[k].a
l.d+=m
l.b=new A.a3q(j,k+m)
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
if(l)d.bzR(r)}return w},
aut(d){var x
if(d<4)return d+1
x=D.c.U(d-2,1)
return D.c.c7(2+(d&1),x)+this.b.dz(x)+1},
b4e(d,e){var x,w
if(e>120)return e-120
else{x=B.aE6[e-1]
w=(x>>>4)*d+(8-(x&15))
return w>=1?w:1}},
bGi(d,e){var x,w,v,u,t,s,r=D.c.c7(1,D.c.ff(8,e.e)),q=new Uint32Array(r),p=e.d
p.toString
x=J.cV(D.bi.ga6(p),0,null)
w=J.cV(D.bi.ga6(q),0,null)
q[0]=e.d[0]
v=4*d
for(p=w.$flags|0,u=4;u<v;++u){t=x[u]
s=w[u-4]
p&2&&C.A(w)
w[u]=t+s&255}for(v=4*r;u<v;++u){p&2&&C.A(w)
w[u]=0}e.d=q
return!0},
ZJ(d,e,f,g,h){if(f===0||d==null)return 0
return d[e*D.c.U(h,f)+D.c.U(g,f)]},
b07(d,e){var x=this,w=x.ZJ(x.as,x.Q,x.z,d,e)
return x.ax[w]}}
A.at8.prototype={
cer(d,e){return this.bGr(d,e)}}
A.aAT.prototype={
ako(){var x,w,v=this.a
if(v<32){x=this.d
w=D.c.dS(x[0],v)+((x[1]&B.H5[v])>>>0)*(B.H5[32-v]+1)}else{x=this.d
w=v===32?x[1]:D.c.dS(x[1],v-32)}return w},
dz(d){var x,w,v=this
if(!v.b&&d<25){x=v.ako()
w=B.H5[d]
v.a+=d
v.Fq()
return(x&w)>>>0}else{v.b=!0
throw C.o(C.bQ("Not enough data in input."))}},
Fq(){var x,w,v,u=this,t=u.c,s=u.d,r=s.$flags|0,q=t.c
for(;;){if(!(u.a>=8&&t.d<q))break
x=J.S(t.a,t.d++)
w=s[0]
v=s[1]
r&2&&C.A(s)
s[0]=(w>>>8)+(v&255)*16777216
s[1]=v>>>8
s[1]=(s[1]|x*16777216)>>>0
u.a-=8}}}
A.bKu.prototype={}
A.MR.prototype={
O(){return"VP8LImageTransformType."+this.b}}
A.aAU.prototype={
chz(d,e,f,g,h,i){var x,w,v,u,t=this,s=t.b
switch(t.a.a){case 2:t.c65(h,i,(e-d)*s)
break
case 0:t.cmS(d,e,f,g,h,i)
if(e!==t.c){x=i-s
D.bi.bW(h,x,x+s,f,i+(e-d-1)*s)}break
case 1:t.c9_(d,e,f,g,h,i)
break
case 3:if(g===i&&t.e>0){w=e-d
v=w*A.Gc(s,t.e)
u=i+w*s-v
D.bi.bW(h,u,u+v,f,i)
t.bce(d,e,f,u,h,i)}else t.bce(d,e,f,g,h,i)
break}},
c8Z(d,e,f,g){var x,w,v,u,t,s,r=this.e,q=D.c.ff(8,r),p=this.b,o=this.d
if(q<8){x=D.c.c7(1,r)-1
w=D.c.c7(1,q)-1
for(v=d;v<e;++v)for(u=0,t=0;t<p;++t){if((t&x)>>>0===0){u=J.S(f.a,f.d);++f.d}r=o[(u&w)>>>0]
J.dI(g.a,g.d,r>>>8&255);++g.d
u=D.c.U(u,q)}}else for(v=d;v<e;++v)for(t=0;t<p;++t){s=J.S(f.a,f.d);++f.d
r=o[s]
J.dI(g.a,g.d,r>>>8&255);++g.d}},
bce(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this.e,o=D.c.ff(8,p),n=this.b,m=this.d
if(o<8){x=D.c.c7(1,p)-1
w=D.c.c7(1,o)-1
for(p=h.$flags|0,v=d;v<e;++v)for(u=0,t=0;t<n;++t,i=r){if((t&x)>>>0===0){s=g+1
u=f[g]>>>8&255
g=s}r=i+1
q=m[u&w]
p&2&&C.A(h)
h[i]=q
u=D.c.ff(u,o)}}else for(p=h.$flags|0,v=d;v<e;++v)for(t=0;t<n;++t,i=r,g=s){r=i+1
s=g+1
q=m[f[g]>>>8&255]
p&2&&C.A(h)
h[i]=q}},
c9_(a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b,f=h.e,e=D.c.c7(1,f)-1,d=A.Gc(g,f),a0=D.c.U(a1,h.e)*d
for(f=a5.$flags|0,x=a1;x<a2;){w=new Uint8Array(3)
for(v=a0,u=0;u<g;++u){if((u&e)>>>0===0){t=v+1
s=h.d[v]
w[0]=s&255
w[1]=s>>>8&255
w[2]=s>>>16&255
v=t}s=a3[a4+u]
r=s>>>8&255
q=w[0]
p=$.ov()
p.$flags&2&&C.A(p)
p[0]=q
q=$.pp()
o=q[0]
p[0]=r
n=q[0]
m=$.aWd()
m.$flags&2&&C.A(m)
m[0]=o*n
l=$.cHL()
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
f&2&&C.A(a5)
a5[a6+u]=(s&4278255360|k<<16|((s&255)+(j>>>5)>>>0)+(i>>>5)>>>0&255)>>>0}a6+=g
a4+=g;++x
if((x&e)>>>0===0)a0+=d}},
KL(d,e){return(((d&4278255360)>>>0)+((e&4278255360)>>>0)&4278255360|(d&16711935)+(e&16711935)&16711935)>>>0},
cmS(a6,a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=4278190080,a5=a3.b
if(a6===0){x=a3.KL(a8[a9],a4)
b0.$flags&2&&C.A(b0)
b0[b1]=x
w=a9+1
v=b1+1
u=a5-1
t=b0[b1]
for(s=0;s<u;++s){t=a3.KL(a8[w+s],t)
b0[v+s]=t}a9+=a5
b1+=a5;++a6}x=a3.e
r=D.c.c7(1,x)
q=r-1
p=A.Gc(a5,x)
o=D.c.U(a6,a3.e)*p
for(x=~q,n=b0.$flags|0,m=a6;m<a7;){l=b0[b1-a5]
k=a3.KL(a8[a9],l)
n&2&&C.A(b0)
b0[b1]=k
for(j=o,i=1;i<a5;i=e,j=h){h=j+1
g=a3.d[j]>>>8&15
f=$.ds_[g]
e=((i&x)>>>0)+r
if(e>a5)e=a5
d=a9+i
k=b1+i
a0=k-a5
a1=e-i
if(g===0)for(s=0;s<a1;++s)b0[k+s]=a3.KL(a8[d+s],a4)
else if(g===1){t=b0[k-1]
for(s=0;s<a1;++s){t=a3.KL(a8[d+s],t)
b0[k+s]=t}}else for(s=0;s<a1;++s){a2=k+s
l=f.$3(b0[a2-1],b0,a0+s)
b0[a2]=a3.KL(a8[d+s],l)}}a9+=a5
b1+=a5;++m
if((m&q)>>>0===0)o+=p}},
c65(d,e,f){var x,w,v,u,t
for(x=d.$flags|0,w=0;w<f;++w){v=e+w
u=d[v]
t=u>>>8&255
x&2&&C.A(d)
d[v]=(u&4278255360|(u&16711935)+(t<<16|t)&16711935)>>>0}}}
A.bMq.prototype={
gdW(){var x=this,w=x.d
if(w>1||x.e>=4||x.f>1||x.r!==0)return!1
return!0},
a7Y(d,e,f){var x,w,v,u,t,s,r=this
if(!r.gdW())return!1
x=B.aXm[r.e]
if(r.d===0){w=r.b
v=d*w
u=r.a
D.n.bW(f,v,v+e*w,u.a,u.d-u.b+v)}else{w=d+e
u=r.x
u===$&&C.d()
u.dx=f
t=u.c
if(r.y)w=u.bDk(t.a,t.b,w)
else{s=u.cx
s.toString
u=u.aGO(s,t.a,t.b,w,u.gceq())
w=u}if(!w)return!1}if(x!=null){w=r.b
x.$6(w,r.c,w,d,e,f)}if(r.f===1)if(!r.bEh(f,r.b,r.c,d,e))return!1
if(d+e>=r.c)r.w=!0
return!0},
bEh(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.ab0.prototype={
bxf(d,e){var x=this,w=d.b3()
x.w=0
x.f=(w&1)!==0
x.r=(w&2)===0
x.x=d.d-d.b
x.y=e-16}}
A.at9.prototype={}
A.asb.prototype={}
A.asc.prototype={}
A.a3q.prototype={
gt(d){return this.a.length-this.b},
h(d,e){return this.a[this.b+e]},
j(d,e,f){var x=this.a,w=this.b
x[D.c.ag(w,e)].a=f.gNJ()
x[D.c.ag(w,e)].b=f.gu()}}
A.a3e.prototype={
h(d,e){return this.a[e]},
Ik(d,e){var x,w=e.ako()&255,v=this.a,u=v[d],t=u.a[u.b+w].a-8
if(t>0){e.a+=8
x=e.ako()
v=v[d]
w=w+v.a[v.b+w].b+((x&D.c.bX(1,t)-1)>>>0)}else v=u
u=e.a
v=v.a[v.b+w]
e.a=u+v.a
return v.b}}
A.a3r.prototype={}
A.asd.prototype={
aW7(d){var x=this.b=this.a,w=A.cK6(d)
x.e=d
x.b=x.a=w}}
A.Wj.prototype={
O(){return"WebPFormat."+this.b}}
A.Wk.prototype={
gbV(){return this.a},
gaW(){return this.b}}
A.ata.prototype={}
A.bMr.prototype={
lk(d){var x,w=C.d9(d,!1,null,0)
this.c=w
try{w=this.b04(w)
return w}catch(x){return!1}},
jL(d){return C.fX(new A.bMu(this,d))},
c51(d){var x,w,v,u,t=this,s=null,r=C.d9(d,!1,s,0)
t.c=r
if(!t.b04(r))return s
r=new A.ata(B.t6,C.a([],y.J))
t.a=r
x=t.c
x.toString
if(!t.b08(x,r))return s
r=t.a
switch(r.f.a){case 3:x=t.b
A.oq(r.a,r.b,x,!1)
for(r=t.a.z,w=r.length,v=0;v<r.length;r.length===w||(0,C.r)(r),++v){u=r[v]
A.oq(u.c,u.d,x,!1)}r=t.a
r.as=r.z.length
return r
case 2:x=t.c
x.toString
x.d=r.ay
if(!A.cMG(x,r).a7Z())return s
r=t.a
A.oq(r.a,r.b,t.b,!1)
r=t.a
r.as=r.z.length
return r
case 1:x=t.c
x.toString
x.d=r.ay
if(!A.cME(x,r).a7Z())return s
r=t.a
A.oq(r.a,r.b,t.b,!1)
r=t.a
r.as=r.z.length
return r
case 0:throw C.o(C.bQ("Unknown format for WebP"))}},
i8(d){return C.fX(new A.bMs(this,d))},
bDA(d){var x,w,v,u,t=this,s=t.c
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
return t.ba3(s.Eb(x,w),d)}w=x.f
if(w===B.CF){u=s.Eb(x.ch,x.ay)
s=t.a
s.toString
return A.cMG(u,s).o3()}else if(w===B.Kw){u=s.Eb(x.ch,x.ay)
s=t.a
s.toString
return A.cME(u,s).o3()}return null},
p5(d,e){return C.fX(new A.bMt(this,d,e))},
c50(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null
if(d.jL(a1)==null)return a0
x=d.a
w=x.e
if(!w)return d.i8(0)
new A.AV(d.b).j2(0,x.a*x.as,x.b)
for(x=y.N,w=y.P,v=a0,u=v,t=u,s=0;r=d.a,s<r.as;++s){a2=r.z[s]
q=d.i8(s)
if(q==null)continue
r=a2.e
q.y=r
if(t==null||u==null){p=d.a
o=p.a
p=p.b
n=q.gqq()
m=q.a
m=m==null?a0:m.gcq()
if(m==null)m=D.ak
l=q.y
k=d.a
j=k.y
i=k.c
k=k.w
if(k.length===0)k=a0
else{k=new C.f1(k)
h=k.gt(0)
g=k.gt(0)
f=new C.IT(C.t(x,w))
f.bg(new C.m0(k,0,Math.min(h,g),0,!1))
k=f}e=d.a.r
t=C.hG(i,k,m,l,D.bN,p,e==null?a0:new C.An("ICC_PROFILE",D.ns,e),j,n,a0,D.ak,o,!1)
u=t}else{u=C.tp(u,!1,!1)
if(v!=null){p=v.f
p===$&&C.d()}else p=!1
if(p){p=v.a
o=v.b
n=v.c
m=v.d
A.d5i(u,!1,$.d9V(),p,p+n-1,o,o+m-1)}}u.y=r
r=a2.r
r===$&&C.d()
r=r?B.Dt:B.tp
A.cOs(u,q,r,a0,a0,a2.a,a2.b,a0,a0,a0,a0)
if(u!==t)t.pX(u)
v=a2}return t},
ba3(d,e){var x,w,v,u=null,t=C.a([],y.J),s=new A.ata(B.t6,t)
if(!this.b08(d,s))return u
if(s.f===B.t6)return u
s.as=this.a.as
if(s.e){x=t.length
if(e>=x)return u
w=t[e]
t=w.y
t===$&&C.d()
x=w.x
x===$&&C.d()
return this.ba3(d.Eb(t,x),e)}else{v=d.Eb(s.ch,s.ay)
t=s.f
if(t===B.CF)return A.cMG(v,s).o3()
else if(t===B.Kw)return A.cME(v,s).o3()}return u},
b04(d){if(d.iz(4)!=="RIFF")return!1
d.Y()
if(d.iz(4)!=="WEBP")return!1
return!0},
b08(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=d.c,w=d.b;d.d<x;){v=d.iz(4)
u=d.Y()
t=u+1>>>1<<1>>>0
s=d.d
r=s-w
switch(v){case"VP8X":if(!this.bIu(d,e))return!1
break
case"VP8 ":e.ay=r
e.ch=u
e.f=B.Kw
break
case"VP8L":e.ay=r
e.ch=u
e.f=B.CF
break
case"ALPH":e.toString
s=d.a
q=d.e
p=J.au(s)
o=p.gt(s)
p=p.gt(s)
s=new C.m0(s,0,Math.min(o,p),0,q)
e.at=s
s.d=d.d
d.d+=t
break
case"ANIM":e.f=B.blr
n=d.Y()
s=new Uint8Array(4)
s[0]=n>>>16&255
s[1]=n>>>8&255
s[2]=n&255
s[3]=n>>>24&255
e.c=new C.Ih(s)
e.y=d.a9()
break
case"ANMF":if(!this.bHB(d,e,u))return!1
break
case"ICCP":e.toString
m=d.h8(u)
d.d=d.d+(m.c-m.d)
e.r=m.bN()
break
case"EXIF":e.toString
e.w=d.iz(u)
break
case"XMP ":e.toString
d.iz(u)
break
default:d.d=s+t
break}s=d.d
l=t-(s-w-r)
if(l>0)d.d=s+l}if(!e.d)e.d=e.at!=null
return e.f!==B.t6},
bIu(d,e){var x,w,v,u,t=d.b3()
if((t&192)!==0)return!1
x=D.c.U(t,4)
w=D.c.U(t,1)
if((t&1)!==0)return!1
if(d.t6()!==0)return!1
v=d.t6()
u=d.t6()
e.a=v+1
e.b=u+1
e.e=(w&1)!==0
e.d=(x&1)!==0
return!0},
bHB(d,e,f){var x=new A.at9(d.t6()*2,d.t6()*2,d.t6()+1,d.t6()+1,d.t6())
x.bxf(d,f)
if(x.w!==0)return!1
e.z.push(x)
return!0}}
A.cb9.prototype={
bxl(d,e){var x=this,w=d.a.gjJ(),v=x.b,u=(d.gbV()-1)*v,t=(d.gaW()-1)*w,s=x.e
switch(e){case 2:s!==$&&C.b5()
x.e=u
x.f!==$&&C.b5()
x.f=-v
x.r!==$&&C.b5()
x.r=w
break
case 3:s!==$&&C.b5()
x.e=t+u
x.f!==$&&C.b5()
x.f=-v
x.r!==$&&C.b5()
x.r=-w
break
case 4:s!==$&&C.b5()
x.e=t
x.f!==$&&C.b5()
x.f=v
x.r!==$&&C.b5()
x.r=-w
break
case 5:s!==$&&C.b5()
x.e=0
x.f!==$&&C.b5()
x.f=w
x.r!==$&&C.b5()
x.r=v
break
case 6:s!==$&&C.b5()
x.e=t
x.f!==$&&C.b5()
x.f=-w
x.r!==$&&C.b5()
x.r=v
break
case 7:s!==$&&C.b5()
x.e=t+u
x.f!==$&&C.b5()
x.f=-w
x.r!==$&&C.b5()
x.r=-v
break
case 8:s!==$&&C.b5()
x.e=u
x.f!==$&&C.b5()
x.f=w
x.r!==$&&C.b5()
x.r=-v
break
default:s!==$&&C.b5()
x.e=0
x.f!==$&&C.b5()
x.f=v
x.r!==$&&C.b5()
x.r=w
break}}}
A.b8V.prototype={
O(){return"FlipDirection."+this.b}}
A.bq4.prototype={
b1(d){var x,w=this,v=w.a
if(v===w.c.length)w.b3Q(v+1)
v=w.c
x=w.a++
v.$flags&2&&C.A(v)
v[x]=d&255},
hZ(d){var x,w=this,v=J.aK(d),u=w.a+v
if(u>w.c.length)w.b3Q(u)
u=w.c
x=w.a
D.n.di(u,x,x+v,d)
w.a+=v},
kt(d){var x=this
if(x.b){x.b1(D.c.U(d,8)&255)
x.b1(d&255)
return}x.b1(d&255)
x.b1(D.c.U(d,8)&255)},
ku(d){var x=this
if(x.b){x.b1(D.c.U(d,24)&255)
x.b1(D.c.U(d,16)&255)
x.b1(D.c.U(d,8)&255)
x.b1(d&255)
return}x.b1(d&255)
x.b1(D.c.U(d,8)&255)
x.b1(D.c.U(d,16)&255)
x.b1(D.c.U(d,24)&255)},
csk(d){var x,w=this,v=new Float32Array(1)
v[0]=d
x=J.cV(D.hH.ga6(v),0,null)
if(w.b){w.b1(x[3])
w.b1(x[2])
w.b1(x[1])
w.b1(x[0])
return}w.b1(x[0])
w.b1(x[1])
w.b1(x[2])
w.b1(x[3])},
csl(d){var x,w=this,v=new Float64Array(1)
v[0]=d
x=J.cV(D.h4.ga6(v),0,null)
if(w.b){w.b1(x[7])
w.b1(x[6])
w.b1(x[5])
w.b1(x[4])
w.b1(x[3])
w.b1(x[2])
w.b1(x[1])
w.b1(x[0])
return}w.b1(x[0])
w.b1(x[1])
w.b1(x[2])
w.b1(x[3])
w.b1(x[4])
w.b1(x[5])
w.b1(x[6])
w.b1(x[7])},
b3Q(d){var x=this.c,w=Math.max(x.length*3,d+8192),v=new Uint8Array(w)
D.n.di(v,0,this.a,x)
this.c=v},
gt(d){return this.a}}
var z=a.updateTypes(["~(m0)","e(e,qi,e)","~(e,e,e,e,e,dG)","~(e,z)","zH?()","Ri?()","Wk?()"])
A.b_w.prototype={
$0(){return this.a.bzj(this.b)},
$S:z+4}
A.b_u.prototype={
$0(){return this.a.bzi(this.b)},
$S:1739}
A.b_t.prototype={
$4(d,e,f,g){var x,w,v=this,u=v.a
if(u.a<v.c){x=v.b.c&&v.d.ch!=null
w=v.e
if(x){x=v.d
w.il(x.ch.oy(d),x.ch.ow(d),x.ch.ou(d),x.ch.ot(d))}else w.il(d,e,f,g)
w.l();++u.a}},
$S:1740}
A.b_v.prototype={
$0(){return this.a.bzh(this.b,this.c)},
$S:35}
A.b88.prototype={
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
$S:1741}
A.b86.prototype={
$0(){var x=this.a,w=new A.b87(C.a([],y.m))
w.bwu(this.b,x.b)
return x.a=w},
$S:99}
A.b84.prototype={
$0(){return this.a.bGp(this.b)},
$S:35}
A.b85.prototype={
$0(){return this.a.bGo(this.b,this.c)},
$S:35}
A.bb0.prototype={
$0(){return this.a.bIz(this.b)},
$S:z+5}
A.baZ.prototype={
$0(){return this.a.bIy(this.b)},
$S:35}
A.bb_.prototype={
$0(){return this.a.bIx(this.b,this.c)},
$S:35}
A.bcY.prototype={
$0(){var x=this.a,w=C.d9(this.b,!1,null,0)
x.a=w
return x.b=A.cVu(w)},
$S:99}
A.bcX.prototype={
$0(){return this.a.bOg(this.b,this.c)},
$S:35}
A.bcW.prototype={
$0(){return this.a.bOh(this.b)},
$S:35}
A.brr.prototype={
$0(){return this.a.bVD(this.b)},
$S:99}
A.brp.prototype={
$0(){return this.a.bVB(this.b)},
$S:35}
A.brq.prototype={
$0(){return this.a.bVA(this.b,this.c)},
$S:35}
A.brx.prototype={
$0(){return this.a.bVE(this.b,this.c)},
$S:35}
A.bry.prototype={
$0(){return this.a.bVG(this.b)},
$S:99}
A.brw.prototype={
$0(){return this.a.bVF(this.b)},
$S:35}
A.brv.prototype={
$1(d){return d!==""},
$S:6}
A.bt4.prototype={
$0(){return this.a.bWd(this.b,this.c)},
$S:35}
A.bt5.prototype={
$0(){var x=this.a
return x.a=A.cYu(this.b,x.b)},
$S:99}
A.bt3.prototype={
$0(){var x=this.a.a
return x==null?null:x.cbF()},
$S:35}
A.btz.prototype={
$0(){return this.a.c1g(this.b)},
$S:99}
A.btx.prototype={
$0(){return this.a.bDz(this.b)},
$S:35}
A.bty.prototype={
$0(){return this.a.bWo(this.b,this.c)},
$S:35}
A.bHX.prototype={
$0(){return this.a.c2m(this.b,this.c)},
$S:35}
A.bHY.prototype={
$0(){return this.a.c2o(this.b)},
$S:99}
A.bHW.prototype={
$0(){return this.a.c2n(this.b)},
$S:35}
A.bI6.prototype={
$0(){return this.a.c2y(this.b)},
$S:35}
A.bI7.prototype={
$0(){return this.a.c2x(this.b,this.c)},
$S:35}
A.bMu.prototype={
$0(){return this.a.c51(this.b)},
$S:z+6}
A.bMs.prototype={
$0(){return this.a.bDA(this.b)},
$S:35}
A.bMt.prototype={
$0(){return this.a.c50(this.b,this.c)},
$S:35}
A.cAl.prototype={
$1(d){return A.d4N(d,this.a.a)},
$S:1742};(function installTearOffs(){var x=a._static_1,w=a._instance_2u,v=a.installStaticTearOff
x(A,"dHm","drx",0)
x(A,"dHf","drp",0)
x(A,"dHd","drn",0)
x(A,"dHk","drv",0)
x(A,"dHl","drw",0)
x(A,"dHj","dru",0)
x(A,"dHi","drt",0)
x(A,"dHh","drs",0)
x(A,"dHo","drz",0)
x(A,"dHn","dry",0)
x(A,"dHg","drq",0)
x(A,"dHe","dro",0)
x(A,"dHz","drK",0)
x(A,"dHx","drI",0)
x(A,"dHp","drA",0)
x(A,"dHr","drC",0)
x(A,"dHq","drB",0)
x(A,"dHs","drD",0)
x(A,"dHA","drL",0)
x(A,"dHy","drJ",0)
x(A,"dHt","drE",0)
x(A,"dHu","drF",0)
x(A,"dHv","drG",0)
x(A,"dHw","drH",0)
w(A.aaO.prototype,"gbW5","bW6",3)
w(A.at8.prototype,"gceq","cer",3)
v(A,"cPv",3,null,["$3"],["drM"],1,0)
v(A,"dHB",3,null,["$3"],["drN"],1,0)
v(A,"dHG",3,null,["$3"],["drS"],1,0)
v(A,"dHH",3,null,["$3"],["drT"],1,0)
v(A,"dHI",3,null,["$3"],["drU"],1,0)
v(A,"dHJ",3,null,["$3"],["drV"],1,0)
v(A,"dHK",3,null,["$3"],["drW"],1,0)
v(A,"dHL",3,null,["$3"],["drX"],1,0)
v(A,"dHM",3,null,["$3"],["drY"],1,0)
v(A,"dHN",3,null,["$3"],["drZ"],1,0)
v(A,"dHC",3,null,["$3"],["drO"],1,0)
v(A,"dHD",3,null,["$3"],["drP"],1,0)
v(A,"dHE",3,null,["$3"],["drQ"],1,0)
v(A,"dHF",3,null,["$3"],["drR"],1,0)
v(A,"dHR",6,null,["$6"],["dsp"],2,0)
v(A,"dHS",6,null,["$6"],["dsq"],2,0)
v(A,"dHQ",6,null,["$6"],["dso"],2,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.Cc,[A.x3,A.anG,A.mC,A.IX,A.IW,A.v5,A.Ry,A.bg_,A.Tk,A.a5Z,A.F0,A.F1,A.vJ,A.p1,A.Mx,A.l3,A.u5,A.MR,A.Wj,A.b8V])
w(A.a0Z,C.F)
w(A.aoV,A.a0Z)
x(C.G,[A.AV,A.b_x,A.zH,A.a1o,A.b7b,A.aqN,A.b82,A.aqO,A.aqP,A.b87,A.a2m,A.aKG,A.a36,A.a37,A.Ri,A.bcZ,A.asw,A.c4l,A.a6_,A.brt,A.ajA,A.y7,A.TC,A.bt1,A.TB,A.bt6,A.avX,A.aw_,A.aw5,A.a6m,A.TE,A.aw4,A.tL,A.aAh,A.bI4,A.aAj,A.bI8,A.aAk,A.bI9,A.bkH,A.bKl,A.aaN,A.bKm,A.bKt,A.bKw,A.bKy,A.aaM,A.bKx,A.bKn,A.Gb,A.aAV,A.aAX,A.aAW,A.aAY,A.aaO,A.aAT,A.bKu,A.aAU,A.bMq,A.ab0,A.asb,A.asc,A.a3q,A.a3e,A.a3r,A.asd,A.Wk,A.cb9,A.bq4])
x(C.apy,[A.anJ,A.b83,A.baY,A.bcV,A.bro,A.bru,A.bt2,A.btw,A.bHV,A.bI5,A.bMr])
x(C.x5,[A.b_w,A.b_u,A.b_v,A.b86,A.b84,A.b85,A.bb0,A.baZ,A.bb_,A.bcY,A.bcX,A.bcW,A.brr,A.brp,A.brq,A.brx,A.bry,A.brw,A.bt4,A.bt5,A.bt3,A.btz,A.btx,A.bty,A.bHX,A.bHY,A.bHW,A.bI6,A.bI7,A.bMu,A.bMs,A.bMt])
x(C.pA,[A.b_t,A.b88,A.brv,A.cAl])
w(A.b4z,A.anJ)
w(A.bfz,A.b82)
x(A.bfz,[A.at0,A.bfA,A.bfB,A.bfC,A.at2])
w(A.at1,A.a2m)
w(A.at3,A.a37)
w(A.bcU,A.zH)
w(A.bg4,A.b7b)
w(A.at4,A.a6_)
w(A.bfD,A.brt)
w(A.KW,A.a1o)
x(A.y7,[A.avV,A.avW,A.avY,A.avZ,A.aw1,A.aw2])
x(A.TC,[A.a6k,A.aw0])
x(A.aw5,[A.B6,A.n1])
w(A.at8,A.aaO)
w(A.at9,A.ab0)
w(A.ata,A.Wk)})()
C.z6(b.typeUniverse,JSON.parse('{"a0Z":{"dD":[],"F":["br"],"F.E":"br"},"aoV":{"dD":[],"F":["br"],"F.E":"br"},"at1":{"a2m":[]},"at3":{"a37":[]},"at4":{"a6_":[]},"ajA":{"aR":[]},"avV":{"y7":[]},"avW":{"y7":[]},"avY":{"y7":[]},"avZ":{"y7":[]},"aw1":{"y7":[]},"aw2":{"y7":[]},"a6k":{"TC":[]},"aw0":{"TC":[]},"at9":{"ab0":[]}}'))
C.csw(b.typeUniverse,JSON.parse('{"aw5":1}'))
var y=(function rtii(){var x=C.ac
return{G:x("dD"),n:x("aqN"),v:x("IX"),D:x("aqP"),z:x("ar0"),Y:x("eb"),f:x("a3e"),R:x("asb"),u:x("asc"),O:x("a3q"),W:x("asw"),P:x("pO"),Q:x("JH"),_:x("Ax"),h:x("C<aqO>"),m:x("C<a2m>"),b:x("C<a37>"),A:x("C<a3e>"),g:x("C<lZ>"),L:x("C<x<x<x<e>>>>"),o:x("C<x<x<e>>>"),S:x("C<x<e>>"),d:x("C<a6_>"),X:x("C<TB>"),x:x("C<y7>"),l:x("C<aw_>"),s:x("C<f>"),M:x("C<aAk>"),a:x("C<dG>"),i:x("C<Gb>"),F:x("C<aAU>"),J:x("C<ab0>"),t:x("C<e>"),w:x("C<qi?>"),y:x("C<~(m0)>"),B:x("x<aaM>"),K:x("x<Gb>"),H:x("x<e>"),e:x("TB"),j:x("avX"),C:x("a6k"),c:x("TC"),T:x("a6m"),k:x("TE"),N:x("f"),r:x("aAj"),E:x("qi"),p:x("dG"),V:x("aaM"),ac:x("Gb"),bQ:x("aAV"),bl:x("aAW"),bt:x("aAY"),U:x("aw<f>"),bc:x("aKG"),cB:x("z"),q:x("e"),ak:x("aaN?"),Z:x("aAX?"),I:x("e?")}})();(function constants(){var x=a.makeConstList
B.tp=new A.anG(0,"direct")
B.Dt=new A.anG(1,"alpha")
B.LF=new A.mC(0,"none")
B.Du=new A.mC(3,"bitfields")
B.Dv=new A.mC(6,"alphaBitfields")
B.Mx=new A.ajA()
B.tK=new A.x3(0,"rgba")
B.MB=new A.x3(1,"bgra")
B.MC=new A.x3(2,"abgr")
B.MD=new A.x3(3,"argb")
B.ME=new A.x3(4,"rgb")
B.MF=new A.x3(5,"bgr")
B.alK=new A.x3(6,"grayAlpha")
B.alL=new A.x3(7,"red")
B.apy=new A.aoV(4294967295)
B.ats=new A.IW(0,"red")
B.att=new A.IW(1,"green")
B.atu=new A.IW(2,"blue")
B.atv=new A.IW(3,"alpha")
B.atw=new A.IW(4,"other")
B.OJ=new A.IX(1,"half")
B.OK=new A.IX(2,"float")
B.OL=new A.v5(0,"none")
B.atW=new A.b8V(2,"both")
B.Ph=new C.ard(1,"page")
B.auN=new C.asv(1,"deflate")
B.Pq=new A.Ry(2,"cur")
B.Gg=new A.bg_(0,"yuv444")
B.Gq=x([0,2,8],y.t)
B.az3=x([0,4,2,1],y.t)
B.auO=new A.Ry(0,"invalid")
B.auP=new A.Ry(1,"ico")
B.az7=x([B.auO,B.auP,B.Pq],C.ac("C<Ry>"))
B.b5S=new A.Tk(0,"none")
B.a9Z=new A.Tk(1,"background")
B.aa_=new A.Tk(2,"previous")
B.azQ=x([B.b5S,B.a9Z,B.aa_],C.ac("C<Tk>"))
B.Rm=x([292,260,226,226],y.t)
B.Rn=x([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],y.t)
B.aA1=x([2,3,7],y.t)
B.Rq=x([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],y.t)
B.aAj=x([3,3,11],y.t)
B.H2=x([128,128,128,128,128,128,128,128,128,128,128],y.t)
B.Sm=x([B.H2,B.H2,B.H2],y.S)
B.aCF=x([253,136,254,255,228,219,128,128,128,128,128],y.t)
B.aEU=x([189,129,242,255,227,213,255,219,128,128,128],y.t)
B.aF1=x([106,126,227,252,214,209,255,255,128,128,128],y.t)
B.aIR=x([B.aCF,B.aEU,B.aF1],y.S)
B.aJN=x([1,98,248,255,236,226,255,255,128,128,128],y.t)
B.aAI=x([181,133,238,254,221,234,255,154,128,128,128],y.t)
B.aAq=x([78,134,202,247,198,180,255,219,128,128,128],y.t)
B.aO2=x([B.aJN,B.aAI,B.aAq],y.S)
B.aCu=x([1,185,249,255,243,255,128,128,128,128,128],y.t)
B.aJ_=x([184,150,247,255,236,224,128,128,128,128,128],y.t)
B.aUh=x([77,110,216,255,236,230,128,128,128,128,128],y.t)
B.aHM=x([B.aCu,B.aJ_,B.aUh],y.S)
B.aI_=x([1,101,251,255,241,255,128,128,128,128,128],y.t)
B.aCC=x([170,139,241,252,236,209,255,255,128,128,128],y.t)
B.aIg=x([37,116,196,243,228,255,255,255,128,128,128],y.t)
B.aBM=x([B.aI_,B.aCC,B.aIg],y.S)
B.aFI=x([1,204,254,255,245,255,128,128,128,128,128],y.t)
B.aXG=x([207,160,250,255,238,128,128,128,128,128,128],y.t)
B.aXp=x([102,103,231,255,211,171,128,128,128,128,128],y.t)
B.aDr=x([B.aFI,B.aXG,B.aXp],y.S)
B.aBo=x([1,152,252,255,240,255,128,128,128,128,128],y.t)
B.aY7=x([177,135,243,255,234,225,128,128,128,128,128],y.t)
B.aHu=x([80,129,211,255,194,224,128,128,128,128,128],y.t)
B.aIQ=x([B.aBo,B.aY7,B.aHu],y.S)
B.T3=x([1,1,255,128,128,128,128,128,128,128,128],y.t)
B.aLX=x([246,1,255,128,128,128,128,128,128,128,128],y.t)
B.aGK=x([255,128,128,128,128,128,128,128,128,128,128],y.t)
B.aZK=x([B.T3,B.aLX,B.aGK],y.S)
B.aDf=x([B.Sm,B.aIR,B.aO2,B.aHM,B.aBM,B.aDr,B.aIQ,B.aZK],y.o)
B.aUu=x([198,35,237,223,193,187,162,160,145,155,62],y.t)
B.aCD=x([131,45,198,221,172,176,220,157,252,221,1],y.t)
B.aUs=x([68,47,146,208,149,167,221,162,255,223,128],y.t)
B.aG7=x([B.aUu,B.aCD,B.aUs],y.S)
B.aOk=x([1,149,241,255,221,224,255,255,128,128,128],y.t)
B.aQ4=x([184,141,234,253,222,220,255,199,128,128,128],y.t)
B.aGy=x([81,99,181,242,176,190,249,202,255,255,128],y.t)
B.aSr=x([B.aOk,B.aQ4,B.aGy],y.S)
B.aQX=x([1,129,232,253,214,197,242,196,255,255,128],y.t)
B.aX8=x([99,121,210,250,201,198,255,202,128,128,128],y.t)
B.aIV=x([23,91,163,242,170,187,247,210,255,255,128],y.t)
B.aGQ=x([B.aQX,B.aX8,B.aIV],y.S)
B.aE5=x([1,200,246,255,234,255,128,128,128,128,128],y.t)
B.aQP=x([109,178,241,255,231,245,255,255,128,128,128],y.t)
B.azU=x([44,130,201,253,205,192,255,255,128,128,128],y.t)
B.aTh=x([B.aE5,B.aQP,B.azU],y.S)
B.aB6=x([1,132,239,251,219,209,255,165,128,128,128],y.t)
B.az9=x([94,136,225,251,218,190,255,255,128,128,128],y.t)
B.aRn=x([22,100,174,245,186,161,255,199,128,128,128],y.t)
B.aHX=x([B.aB6,B.az9,B.aRn],y.S)
B.aQ3=x([1,182,249,255,232,235,128,128,128,128,128],y.t)
B.aIE=x([124,143,241,255,227,234,128,128,128,128,128],y.t)
B.aEM=x([35,77,181,251,193,211,255,205,128,128,128],y.t)
B.aF9=x([B.aQ3,B.aIE,B.aEM],y.S)
B.aZL=x([1,157,247,255,236,231,255,255,128,128,128],y.t)
B.aDb=x([121,141,235,255,225,227,255,255,128,128,128],y.t)
B.aQV=x([45,99,188,251,195,217,255,224,128,128,128],y.t)
B.aBB=x([B.aZL,B.aDb,B.aQV],y.S)
B.aza=x([1,1,251,255,213,255,128,128,128,128,128],y.t)
B.aAa=x([203,1,248,255,255,128,128,128,128,128,128],y.t)
B.aQc=x([137,1,177,255,224,255,128,128,128,128,128],y.t)
B.aBr=x([B.aza,B.aAa,B.aQc],y.S)
B.aPE=x([B.aG7,B.aSr,B.aGQ,B.aTh,B.aHX,B.aF9,B.aBB,B.aBr],y.o)
B.aDC=x([253,9,248,251,207,208,255,192,128,128,128],y.t)
B.aLY=x([175,13,224,243,193,185,249,198,255,255,128],y.t)
B.aZJ=x([73,17,171,221,161,179,236,167,255,234,128],y.t)
B.aKk=x([B.aDC,B.aLY,B.aZJ],y.S)
B.aOU=x([1,95,247,253,212,183,255,255,128,128,128],y.t)
B.aH7=x([239,90,244,250,211,209,255,255,128,128,128],y.t)
B.aUg=x([155,77,195,248,188,195,255,255,128,128,128],y.t)
B.aQ2=x([B.aOU,B.aH7,B.aUg],y.S)
B.aFL=x([1,24,239,251,218,219,255,205,128,128,128],y.t)
B.aNo=x([201,51,219,255,196,186,128,128,128,128,128],y.t)
B.aH6=x([69,46,190,239,201,218,255,228,128,128,128],y.t)
B.aOK=x([B.aFL,B.aNo,B.aH6],y.S)
B.aEX=x([1,191,251,255,255,128,128,128,128,128,128],y.t)
B.aIe=x([223,165,249,255,213,255,128,128,128,128,128],y.t)
B.aJ8=x([141,124,248,255,255,128,128,128,128,128,128],y.t)
B.aQW=x([B.aEX,B.aIe,B.aJ8],y.S)
B.aGa=x([1,16,248,255,255,128,128,128,128,128,128],y.t)
B.aD8=x([190,36,230,255,236,255,128,128,128,128,128],y.t)
B.aCH=x([149,1,255,128,128,128,128,128,128,128,128],y.t)
B.aB7=x([B.aGa,B.aD8,B.aCH],y.S)
B.aIY=x([1,226,255,128,128,128,128,128,128,128,128],y.t)
B.aLa=x([247,192,255,128,128,128,128,128,128,128,128],y.t)
B.aU8=x([240,128,255,128,128,128,128,128,128,128,128],y.t)
B.aAf=x([B.aIY,B.aLa,B.aU8],y.S)
B.aTg=x([1,134,252,255,255,128,128,128,128,128,128],y.t)
B.aIB=x([213,62,250,255,255,128,128,128,128,128,128],y.t)
B.aXO=x([55,93,255,128,128,128,128,128,128,128,128],y.t)
B.aIX=x([B.aTg,B.aIB,B.aXO],y.S)
B.aCm=x([B.aKk,B.aQ2,B.aOK,B.aQW,B.aB7,B.aAf,B.aIX,B.Sm],y.o)
B.aIG=x([202,24,213,235,186,191,220,160,240,175,255],y.t)
B.aCB=x([126,38,182,232,169,184,228,174,255,187,128],y.t)
B.aBa=x([61,46,138,219,151,178,240,170,255,216,128],y.t)
B.aPK=x([B.aIG,B.aCB,B.aBa],y.S)
B.aHt=x([1,112,230,250,199,191,247,159,255,255,128],y.t)
B.aBz=x([166,109,228,252,211,215,255,174,128,128,128],y.t)
B.aI4=x([39,77,162,232,172,180,245,178,255,255,128],y.t)
B.aPG=x([B.aHt,B.aBz,B.aI4],y.S)
B.aHD=x([1,52,220,246,198,199,249,220,255,255,128],y.t)
B.aDn=x([124,74,191,243,183,193,250,221,255,255,128],y.t)
B.aEL=x([24,71,130,219,154,170,243,182,255,255,128],y.t)
B.aPF=x([B.aHD,B.aDn,B.aEL],y.S)
B.aEI=x([1,182,225,249,219,240,255,224,128,128,128],y.t)
B.aXL=x([149,150,226,252,216,205,255,171,128,128,128],y.t)
B.b_1=x([28,108,170,242,183,194,254,223,255,255,128],y.t)
B.aVc=x([B.aEI,B.aXL,B.b_1],y.S)
B.b_6=x([1,81,230,252,204,203,255,192,128,128,128],y.t)
B.aQH=x([123,102,209,247,188,196,255,233,128,128,128],y.t)
B.aTF=x([20,95,153,243,164,173,255,203,128,128,128],y.t)
B.aQM=x([B.b_6,B.aQH,B.aTF],y.S)
B.aGr=x([1,222,248,255,216,213,128,128,128,128,128],y.t)
B.aIx=x([168,175,246,252,235,205,255,255,128,128,128],y.t)
B.aEP=x([47,116,215,255,211,212,255,255,128,128,128],y.t)
B.aD_=x([B.aGr,B.aIx,B.aEP],y.S)
B.aGi=x([1,121,236,253,212,214,255,255,128,128,128],y.t)
B.aHG=x([141,84,213,252,201,202,255,219,128,128,128],y.t)
B.aKa=x([42,80,160,240,162,185,255,205,128,128,128],y.t)
B.aFg=x([B.aGi,B.aHG,B.aKa],y.S)
B.aYx=x([244,1,255,128,128,128,128,128,128,128,128],y.t)
B.az5=x([238,1,255,128,128,128,128,128,128,128,128],y.t)
B.aLf=x([B.T3,B.aYx,B.az5],y.S)
B.azL=x([B.aPK,B.aPG,B.aPF,B.aVc,B.aQM,B.aD_,B.aFg,B.aLf],y.o)
B.aB8=x([B.aDf,B.aPE,B.aCm,B.azL],y.L)
B.aBd=x([511,1023,2047,4095],y.t)
B.RW=x([85,75,65,55,45,35],y.t)
B.aCg=x([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],y.t)
B.wd=x([0,1,2,3,4,5,6,7,8,9,10,11],y.t)
B.aCJ=x([8,8,4,2],y.t)
B.azn=x([173,148,140],y.t)
B.azo=x([176,155,140,135],y.t)
B.azl=x([180,157,141,134,130],y.t)
B.aA9=x([254,254,243,230,196,177,153,140,133,130,129],y.t)
B.aCL=x([B.azn,B.azo,B.azl,B.aA9],y.S)
B.Sx=x([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379],C.ac("C<V>"))
B.aDh=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],y.t)
B.SU=x([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],y.t)
B.aDE=x([2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],y.t)
B.T5=x([280,256,256,256,40],y.t)
B.wM=x([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],y.t)
B.Ta=x([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],y.t)
B.GB=x([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],y.t)
B.aE6=x([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],y.t)
B.GC=x([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],y.t)
B.Tn=x([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],y.t)
B.atx=new A.IX(0,"uint")
B.aEu=x([B.atx,B.OJ,B.OK],C.ac("C<IX>"))
B.U1=x([A.dHt(),A.dHl(),A.dHA(),A.dHy(),A.dHv(),A.dHu(),A.dHw()],y.y)
B.JP=new A.l3(0,"whiteIsZero")
B.bi5=new A.l3(1,"blackIsZero")
B.bic=new A.l3(2,"rgb")
B.JR=new A.l3(3,"palette")
B.bid=new A.l3(4,"transparencyMask")
B.adv=new A.l3(5,"cmyk")
B.bie=new A.l3(6,"yCbCr")
B.bif=new A.l3(7,"reserved7")
B.big=new A.l3(8,"cieLab")
B.bih=new A.l3(9,"iccLab")
B.bi6=new A.l3(10,"ituLab")
B.bi7=new A.l3(11,"logL")
B.bi8=new A.l3(12,"logLuv")
B.bi9=new A.l3(13,"colorFilterArray")
B.bia=new A.l3(14,"linearRaw")
B.bib=new A.l3(15,"depth")
B.JQ=new A.l3(16,"unknown")
B.aFP=x([B.JP,B.bi5,B.bic,B.JR,B.bid,B.adv,B.bie,B.bif,B.big,B.bih,B.bi6,B.bi7,B.bi8,B.bi9,B.bia,B.bib,B.JQ],C.ac("C<l3>"))
B.Ut=x([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],y.t)
B.a9X=new A.a5Z(0,"source")
B.a9Y=new A.a5Z(1,"over")
B.aGd=x([B.a9X,B.a9Y],C.ac("C<a5Z>"))
B.bhY=new A.Mx(0,"invalid")
B.adt=new A.Mx(1,"uint")
B.bI=new A.Mx(2,"int")
B.rP=new A.Mx(3,"float")
B.aGh=x([B.bhY,B.adt,B.bI,B.rP],C.ac("C<Mx>"))
B.aGo=x([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],y.t)
B.V5=x([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],y.t)
B.aH5=x([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],y.t)
B.aty=new A.v5(1,"rle")
B.atz=new A.v5(2,"zips")
B.atA=new A.v5(3,"zip")
B.atB=new A.v5(4,"piz")
B.atC=new A.v5(5,"pxr24")
B.atD=new A.v5(6,"b44")
B.atE=new A.v5(7,"b44a")
B.aH8=x([B.OL,B.aty,B.atz,B.atA,B.atB,B.atC,B.atD,B.atE],C.ac("C<v5>"))
B.aK2=x([231,120,48,89,115,113,120,152,112],y.t)
B.azM=x([152,179,64,126,170,118,46,70,95],y.t)
B.aH3=x([175,69,143,80,85,82,72,155,103],y.t)
B.aAR=x([56,58,10,171,218,189,17,13,152],y.t)
B.aI1=x([114,26,17,163,44,195,21,10,173],y.t)
B.aIv=x([121,24,80,195,26,62,44,64,85],y.t)
B.aHV=x([144,71,10,38,171,213,144,34,26],y.t)
B.aRV=x([170,46,55,19,136,160,33,206,71],y.t)
B.aE8=x([63,20,8,114,114,208,12,9,226],y.t)
B.aFJ=x([81,40,11,96,182,84,29,16,36],y.t)
B.azb=x([B.aK2,B.azM,B.aH3,B.aAR,B.aI1,B.aIv,B.aHV,B.aRV,B.aE8,B.aFJ],y.S)
B.aD7=x([134,183,89,137,98,101,106,165,148],y.t)
B.aQs=x([72,187,100,130,157,111,32,75,80],y.t)
B.aIM=x([66,102,167,99,74,62,40,234,128],y.t)
B.aAe=x([41,53,9,178,241,141,26,8,107],y.t)
B.aFq=x([74,43,26,146,73,166,49,23,157],y.t)
B.aEo=x([65,38,105,160,51,52,31,115,128],y.t)
B.aEA=x([104,79,12,27,217,255,87,17,7],y.t)
B.aH1=x([87,68,71,44,114,51,15,186,23],y.t)
B.aPI=x([47,41,14,110,182,183,21,17,194],y.t)
B.aLV=x([66,45,25,102,197,189,23,18,22],y.t)
B.aTM=x([B.aD7,B.aQs,B.aIM,B.aAe,B.aFq,B.aEo,B.aEA,B.aH1,B.aPI,B.aLV],y.S)
B.aJR=x([88,88,147,150,42,46,45,196,205],y.t)
B.aI7=x([43,97,183,117,85,38,35,179,61],y.t)
B.aEO=x([39,53,200,87,26,21,43,232,171],y.t)
B.aGF=x([56,34,51,104,114,102,29,93,77],y.t)
B.aHQ=x([39,28,85,171,58,165,90,98,64],y.t)
B.aEh=x([34,22,116,206,23,34,43,166,73],y.t)
B.azc=x([107,54,32,26,51,1,81,43,31],y.t)
B.aS8=x([68,25,106,22,64,171,36,225,114],y.t)
B.aD6=x([34,19,21,102,132,188,16,76,124],y.t)
B.aUA=x([62,18,78,95,85,57,50,48,51],y.t)
B.aDx=x([B.aJR,B.aI7,B.aEO,B.aGF,B.aHQ,B.aEh,B.azc,B.aS8,B.aD6,B.aUA],y.S)
B.aHJ=x([193,101,35,159,215,111,89,46,111],y.t)
B.aCl=x([60,148,31,172,219,228,21,18,111],y.t)
B.aB5=x([112,113,77,85,179,255,38,120,114],y.t)
B.aUw=x([40,42,1,196,245,209,10,25,109],y.t)
B.aGe=x([88,43,29,140,166,213,37,43,154],y.t)
B.aEj=x([61,63,30,155,67,45,68,1,209],y.t)
B.aF0=x([100,80,8,43,154,1,51,26,71],y.t)
B.aAh=x([142,78,78,16,255,128,34,197,171],y.t)
B.aHp=x([41,40,5,102,211,183,4,1,221],y.t)
B.aDN=x([51,50,17,168,209,192,23,25,82],y.t)
B.aDt=x([B.aHJ,B.aCl,B.aB5,B.aUw,B.aGe,B.aEj,B.aF0,B.aAh,B.aHp,B.aDN],y.S)
B.aEJ=x([138,31,36,171,27,166,38,44,229],y.t)
B.aDp=x([67,87,58,169,82,115,26,59,179],y.t)
B.aO1=x([63,59,90,180,59,166,93,73,154],y.t)
B.aTl=x([40,40,21,116,143,209,34,39,175],y.t)
B.aAo=x([47,15,16,183,34,223,49,45,183],y.t)
B.aCA=x([46,17,33,183,6,98,15,32,183],y.t)
B.b_8=x([57,46,22,24,128,1,54,17,37],y.t)
B.aF5=x([65,32,73,115,28,128,23,128,205],y.t)
B.aIL=x([40,3,9,115,51,192,18,6,223],y.t)
B.aFn=x([87,37,9,115,59,77,64,21,47],y.t)
B.aHo=x([B.aEJ,B.aDp,B.aO1,B.aTl,B.aAo,B.aCA,B.b_8,B.aF5,B.aIL,B.aFn],y.S)
B.aYt=x([104,55,44,218,9,54,53,130,226],y.t)
B.aBy=x([64,90,70,205,40,41,23,26,57],y.t)
B.aO_=x([54,57,112,184,5,41,38,166,213],y.t)
B.aEi=x([30,34,26,133,152,116,10,32,134],y.t)
B.aKl=x([39,19,53,221,26,114,32,73,255],y.t)
B.aDL=x([31,9,65,234,2,15,1,118,73],y.t)
B.aHm=x([75,32,12,51,192,255,160,43,51],y.t)
B.aEm=x([88,31,35,67,102,85,55,186,85],y.t)
B.aFV=x([56,21,23,111,59,205,45,37,192],y.t)
B.aG3=x([55,38,70,124,73,102,1,34,98],y.t)
B.aZc=x([B.aYt,B.aBy,B.aO_,B.aEi,B.aKl,B.aDL,B.aHm,B.aEm,B.aFV,B.aG3],y.S)
B.aFT=x([125,98,42,88,104,85,117,175,82],y.t)
B.aEt=x([95,84,53,89,128,100,113,101,45],y.t)
B.aIi=x([75,79,123,47,51,128,81,171,1],y.t)
B.aBt=x([57,17,5,71,102,57,53,41,49],y.t)
B.aNd=x([38,33,13,121,57,73,26,1,85],y.t)
B.aXK=x([41,10,67,138,77,110,90,47,114],y.t)
B.aH9=x([115,21,2,10,102,255,166,23,6],y.t)
B.aD9=x([101,29,16,10,85,128,101,196,26],y.t)
B.aEW=x([57,18,10,102,102,213,34,20,43],y.t)
B.aGc=x([117,20,15,36,163,128,68,1,26],y.t)
B.aGZ=x([B.aFT,B.aEt,B.aIi,B.aBt,B.aNd,B.aXK,B.aH9,B.aD9,B.aEW,B.aGc],y.S)
B.aFk=x([102,61,71,37,34,53,31,243,192],y.t)
B.aXg=x([69,60,71,38,73,119,28,222,37],y.t)
B.aFo=x([68,45,128,34,1,47,11,245,171],y.t)
B.azk=x([62,17,19,70,146,85,55,62,70],y.t)
B.aZX=x([37,43,37,154,100,163,85,160,1],y.t)
B.aVf=x([63,9,92,136,28,64,32,201,85],y.t)
B.aQx=x([75,15,9,9,64,255,184,119,16],y.t)
B.aDk=x([86,6,28,5,64,255,25,248,1],y.t)
B.aLh=x([56,8,17,132,137,255,55,116,128],y.t)
B.aBf=x([58,15,20,82,135,57,26,121,40],y.t)
B.aHU=x([B.aFk,B.aXg,B.aFo,B.azk,B.aZX,B.aVf,B.aQx,B.aDk,B.aLh,B.aBf],y.S)
B.aIp=x([164,50,31,137,154,133,25,35,218],y.t)
B.aDj=x([51,103,44,131,131,123,31,6,158],y.t)
B.aV8=x([86,40,64,135,148,224,45,183,128],y.t)
B.aH2=x([22,26,17,131,240,154,14,1,209],y.t)
B.aCs=x([45,16,21,91,64,222,7,1,197],y.t)
B.aTm=x([56,21,39,155,60,138,23,102,213],y.t)
B.aYZ=x([83,12,13,54,192,255,68,47,28],y.t)
B.aIN=x([85,26,85,85,128,128,32,146,171],y.t)
B.aGL=x([18,11,7,63,144,171,4,4,246],y.t)
B.aDz=x([35,27,10,146,174,171,12,26,128],y.t)
B.aGt=x([B.aIp,B.aDj,B.aV8,B.aH2,B.aCs,B.aTm,B.aYZ,B.aIN,B.aGL,B.aDz],y.S)
B.aPD=x([190,80,35,99,180,80,126,54,45],y.t)
B.aRU=x([85,126,47,87,176,51,41,20,32],y.t)
B.aNq=x([101,75,128,139,118,146,116,128,85],y.t)
B.aQn=x([56,41,15,176,236,85,37,9,62],y.t)
B.aBn=x([71,30,17,119,118,255,17,18,138],y.t)
B.aHT=x([101,38,60,138,55,70,43,26,142],y.t)
B.aGB=x([146,36,19,30,171,255,97,27,20],y.t)
B.aJP=x([138,45,61,62,219,1,81,188,64],y.t)
B.aUx=x([32,41,20,117,151,142,20,21,163],y.t)
B.aS1=x([112,19,12,61,195,128,48,4,24],y.t)
B.aOJ=x([B.aPD,B.aRU,B.aNq,B.aQn,B.aBn,B.aHT,B.aGB,B.aJP,B.aUx,B.aS1],y.S)
B.aHn=x([B.azb,B.aTM,B.aDx,B.aDt,B.aHo,B.aZc,B.aGZ,B.aHU,B.aGt,B.aOJ],y.o)
B.Ci=new A.p1(0,"none")
B.kP=new A.p1(1,"palette")
B.ads=new A.p1(2,"rgb")
B.bhO=new A.p1(3,"gray")
B.bhP=new A.p1(4,"reserved4")
B.bhQ=new A.p1(5,"reserved5")
B.bhR=new A.p1(6,"reserved6")
B.bhS=new A.p1(7,"reserved7")
B.bhT=new A.p1(8,"reserved8")
B.kQ=new A.p1(9,"paletteRle")
B.adr=new A.p1(10,"rgbRle")
B.bhN=new A.p1(11,"grayRle")
B.aHw=x([B.Ci,B.kP,B.ads,B.bhO,B.bhP,B.bhQ,B.bhR,B.bhS,B.bhT,B.kQ,B.adr,B.bhN],C.ac("C<p1>"))
B.Wg=x([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250],y.t)
B.aIf=x([0,1,1,1,0],y.t)
B.aIh=x([A.dHd(),A.dHk(),A.dHm(),A.dHf(),A.dHi(),A.dHo(),A.dHh(),A.dHn(),A.dHe(),A.dHg()],y.y)
B.Gz=x([8,0,8,0],y.t)
B.aBx=x([5,3,5,3],y.t)
B.aAk=x([3,5,3,5],y.t)
B.Ra=x([0,8,0,8],y.t)
B.RK=x([4,4,4,4],y.t)
B.aB3=x([4,4,0,0],y.t)
B.Wz=x([B.Gz,B.aBx,B.aAk,B.Ra,B.Gz,B.RK,B.aB3,B.Ra],y.S)
B.WJ=x([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],y.t)
B.aJ3=x([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],y.t)
B.yT=x([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],y.t)
B.WO=x([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],y.t)
B.WQ=x([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],y.t)
B.z0=x([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],y.t)
B.X2=x([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],y.t)
B.XZ=x([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],y.t)
B.b5T=new A.F0(0,"none")
B.b5U=new A.F0(1,"sub")
B.b5V=new A.F0(2,"up")
B.b5W=new A.F0(3,"average")
B.b5X=new A.F0(4,"paeth")
B.Y_=x([B.b5T,B.b5U,B.b5V,B.b5W,B.b5X],C.ac("C<F0>"))
B.fZ=x([255,255,255,255,255,255,255,255,255,255,255],y.t)
B.oc=x([B.fZ,B.fZ,B.fZ],y.S)
B.aGE=x([176,246,255,255,255,255,255,255,255,255,255],y.t)
B.aY5=x([223,241,252,255,255,255,255,255,255,255,255],y.t)
B.aCX=x([249,253,253,255,255,255,255,255,255,255,255],y.t)
B.aHj=x([B.aGE,B.aY5,B.aCX],y.S)
B.aFN=x([255,244,252,255,255,255,255,255,255,255,255],y.t)
B.aFd=x([234,254,254,255,255,255,255,255,255,255,255],y.t)
B.Z9=x([253,255,255,255,255,255,255,255,255,255,255],y.t)
B.aDg=x([B.aFN,B.aFd,B.Z9],y.S)
B.aUG=x([255,246,254,255,255,255,255,255,255,255,255],y.t)
B.aKZ=x([239,253,254,255,255,255,255,255,255,255,255],y.t)
B.Yx=x([254,255,254,255,255,255,255,255,255,255,255],y.t)
B.aQu=x([B.aUG,B.aKZ,B.Yx],y.S)
B.U6=x([255,248,254,255,255,255,255,255,255,255,255],y.t)
B.aE0=x([251,255,254,255,255,255,255,255,255,255,255],y.t)
B.aIu=x([B.U6,B.aE0,B.fZ],y.S)
B.Gv=x([255,253,254,255,255,255,255,255,255,255,255],y.t)
B.aIl=x([251,254,254,255,255,255,255,255,255,255,255],y.t)
B.aEe=x([B.Gv,B.aIl,B.Yx],y.S)
B.aAO=x([255,254,253,255,254,255,255,255,255,255,255],y.t)
B.aFH=x([250,255,254,255,254,255,255,255,255,255,255],y.t)
B.zi=x([254,255,255,255,255,255,255,255,255,255,255],y.t)
B.aGf=x([B.aAO,B.aFH,B.zi],y.S)
B.aEV=x([B.oc,B.aHj,B.aDg,B.aQu,B.aIu,B.aEe,B.aGf,B.oc],y.o)
B.azK=x([217,255,255,255,255,255,255,255,255,255,255],y.t)
B.aGx=x([225,252,241,253,255,255,254,255,255,255,255],y.t)
B.aNR=x([234,250,241,250,253,255,253,254,255,255,255],y.t)
B.aS3=x([B.azK,B.aGx,B.aNR],y.S)
B.H9=x([255,254,255,255,255,255,255,255,255,255,255],y.t)
B.aD0=x([223,254,254,255,255,255,255,255,255,255,255],y.t)
B.aCt=x([238,253,254,254,255,255,255,255,255,255,255],y.t)
B.aKf=x([B.H9,B.aD0,B.aCt],y.S)
B.aFm=x([249,254,255,255,255,255,255,255,255,255,255],y.t)
B.aUz=x([B.U6,B.aFm,B.fZ],y.S)
B.aSg=x([255,253,255,255,255,255,255,255,255,255,255],y.t)
B.aIj=x([247,254,255,255,255,255,255,255,255,255,255],y.t)
B.aHY=x([B.aSg,B.aIj,B.fZ],y.S)
B.aCh=x([252,255,255,255,255,255,255,255,255,255,255],y.t)
B.aAg=x([B.Gv,B.aCh,B.fZ],y.S)
B.Zk=x([255,254,254,255,255,255,255,255,255,255,255],y.t)
B.aCq=x([B.Zk,B.Z9,B.fZ],y.S)
B.aK9=x([255,254,253,255,255,255,255,255,255,255,255],y.t)
B.Uq=x([250,255,255,255,255,255,255,255,255,255,255],y.t)
B.aCe=x([B.aK9,B.Uq,B.zi],y.S)
B.aAT=x([B.aS3,B.aKf,B.aUz,B.aHY,B.aAg,B.aCq,B.aCe,B.oc],y.o)
B.aOL=x([186,251,250,255,255,255,255,255,255,255,255],y.t)
B.aDQ=x([234,251,244,254,255,255,255,255,255,255,255],y.t)
B.aQw=x([251,251,243,253,254,255,254,255,255,255,255],y.t)
B.aEb=x([B.aOL,B.aDQ,B.aQw],y.S)
B.aE3=x([236,253,254,255,255,255,255,255,255,255,255],y.t)
B.aK8=x([251,253,253,254,254,255,255,255,255,255,255],y.t)
B.aG6=x([B.Gv,B.aE3,B.aK8],y.S)
B.aPA=x([254,254,254,255,255,255,255,255,255,255,255],y.t)
B.aDW=x([B.Zk,B.aPA,B.fZ],y.S)
B.aQO=x([254,254,255,255,255,255,255,255,255,255,255],y.t)
B.aE1=x([B.H9,B.aQO,B.zi],y.S)
B.Zm=x([B.fZ,B.zi,B.fZ],y.S)
B.aAQ=x([B.aEb,B.aG6,B.aDW,B.aE1,B.Zm,B.oc,B.oc,B.oc],y.o)
B.aFA=x([248,255,255,255,255,255,255,255,255,255,255],y.t)
B.aEs=x([250,254,252,254,255,255,255,255,255,255,255],y.t)
B.aDM=x([248,254,249,253,255,255,255,255,255,255,255],y.t)
B.aG8=x([B.aFA,B.aEs,B.aDM],y.S)
B.aAr=x([255,253,253,255,255,255,255,255,255,255,255],y.t)
B.aTa=x([246,253,253,255,255,255,255,255,255,255,255],y.t)
B.aEd=x([252,254,251,254,254,255,255,255,255,255,255],y.t)
B.aT9=x([B.aAr,B.aTa,B.aEd],y.S)
B.aZN=x([255,254,252,255,255,255,255,255,255,255,255],y.t)
B.aDG=x([248,254,253,255,255,255,255,255,255,255,255],y.t)
B.aCd=x([253,255,254,254,255,255,255,255,255,255,255],y.t)
B.aIH=x([B.aZN,B.aDG,B.aCd],y.S)
B.aYW=x([255,251,254,255,255,255,255,255,255,255,255],y.t)
B.aHL=x([245,251,254,255,255,255,255,255,255,255,255],y.t)
B.aHS=x([253,253,254,255,255,255,255,255,255,255,255],y.t)
B.aCP=x([B.aYW,B.aHL,B.aHS],y.S)
B.aCU=x([255,251,253,255,255,255,255,255,255,255,255],y.t)
B.aFS=x([252,253,254,255,255,255,255,255,255,255,255],y.t)
B.aPQ=x([B.aCU,B.aFS,B.H9],y.S)
B.aBP=x([255,252,255,255,255,255,255,255,255,255,255],y.t)
B.aYe=x([249,255,254,255,255,255,255,255,255,255,255],y.t)
B.aEE=x([255,255,254,255,255,255,255,255,255,255,255],y.t)
B.azj=x([B.aBP,B.aYe,B.aEE],y.S)
B.aZZ=x([255,255,253,255,255,255,255,255,255,255,255],y.t)
B.aE_=x([B.aZZ,B.Uq,B.fZ],y.S)
B.aCc=x([B.aG8,B.aT9,B.aIH,B.aCP,B.aPQ,B.azj,B.aE_,B.Zm],y.o)
B.aQY=x([B.aEV,B.aAT,B.aAQ,B.aCc],y.L)
B.ai0=new A.mC(1,"rle8")
B.ai5=new A.mC(2,"rle4")
B.ai6=new A.mC(4,"jpeg")
B.ai7=new A.mC(5,"png")
B.ai8=new A.mC(7,"reserved7")
B.ai9=new A.mC(8,"reserved8")
B.aia=new A.mC(9,"reserved9")
B.ai1=new A.mC(10,"reserved10")
B.ai2=new A.mC(11,"cmyk")
B.ai3=new A.mC(12,"cmykRle8")
B.ai4=new A.mC(13,"cmykRle4")
B.YB=x([B.LF,B.ai0,B.ai5,B.Du,B.ai6,B.ai7,B.Dv,B.ai8,B.ai9,B.aia,B.ai1,B.ai2,B.ai3,B.ai4],C.ac("C<mC>"))
B.H4=x([0,128,192,224,240,248,252,254,255],y.t)
B.YO=x([137,80,78,71,13,10,26,10],y.t)
B.H5=x([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],y.t)
B.aeg=new A.MR(0,"predictor")
B.bkh=new A.MR(1,"crossColor")
B.bki=new A.MR(2,"subtractGreen")
B.aeh=new A.MR(3,"colorIndexing")
B.aUi=x([B.aeg,B.bkh,B.bki,B.aeh],C.ac("C<MR>"))
B.h1=x([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],y.t)
B.aXc=x([A.dHp(),A.dHj(),A.dHz(),A.dHx(),A.dHr(),A.dHq(),A.dHs()],y.y)
B.ZC=x([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],y.t)
B.aXm=x([null,A.dHR(),A.dHS(),A.dHQ()],C.ac("C<~(e,e,e,e,e,dG)?>"))
B.AE=x([0,36,72,109,145,182,218,255],y.t)
B.iu=x([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],y.t)
B.b6r=new A.vJ(0,"bitmap")
B.aae=new A.vJ(1,"grayscale")
B.b6s=new A.vJ(2,"indexed")
B.aaf=new A.vJ(3,"rgb")
B.aag=new A.vJ(4,"cmyk")
B.b6t=new A.vJ(5,"multiChannel")
B.b6u=new A.vJ(6,"duoTone")
B.aah=new A.vJ(7,"lab")
B.aYc=x([B.b6r,B.aae,B.b6s,B.aaf,B.aag,B.b6t,B.b6u,B.aah],C.ac("C<vJ>"))
B.a_k=x([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],y.t)
B.aA5=x([2,6,2,6],y.t)
B.aC0=x([6,2,6,2],y.t)
B.azZ=x([2,2,6,6],y.t)
B.azC=x([1,3,3,9],y.t)
B.aAV=x([4,0,12,0],y.t)
B.aAi=x([3,1,9,3],y.t)
B.aCI=x([8,8,0,0],y.t)
B.aAX=x([4,12,0,0],y.t)
B.azm=x([16,0,0,0],y.t)
B.azh=x([12,4,0,0],y.t)
B.aCb=x([6,6,2,2],y.t)
B.aAl=x([3,9,1,3],y.t)
B.azg=x([12,0,4,0],y.t)
B.aCV=x([9,3,3,1],y.t)
B.es=x([B.RK,B.aA5,B.Gz,B.aC0,B.azZ,B.azC,B.aAV,B.aAi,B.aCI,B.aAX,B.azm,B.azh,B.aCb,B.aAl,B.azg,B.aCV],y.S)
B.od=x([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],y.t)
B.b2f=new C.ds([D.fS,1,D.hp,1,D.hq,1,D.ak,1,D.dp,2,D.jS,4,D.lA,1,D.lB,2,D.lC,4,D.ia,2,D.j3,4,D.jR,8],C.ac("ds<mO,e>"))
B.r5=new A.F1(0,"invalid")
B.aa0=new A.F1(1,"pbm")
B.aa1=new A.F1(2,"pgm2")
B.I5=new A.F1(3,"pgm5")
B.aa2=new A.F1(4,"ppm3")
B.I6=new A.F1(5,"ppm6")
B.acT=new C.rw(null,null)
B.JO=new A.u5(0,"bilevel")
B.bhZ=new A.u5(1,"gray4bit")
B.bi_=new A.u5(2,"gray")
B.bi0=new A.u5(3,"grayAlpha")
B.bi1=new A.u5(4,"palette")
B.adu=new A.u5(5,"rgb")
B.bi2=new A.u5(6,"rgba")
B.bi3=new A.u5(7,"yCbCrSub")
B.rQ=new A.u5(8,"generic")
B.bi4=new A.u5(9,"invalid")
B.t6=new A.Wj(0,"undefined")
B.Kw=new A.Wj(1,"lossy")
B.CF=new A.Wj(2,"lossless")
B.blr=new A.Wj(3,"animated")})();(function staticFields(){$.d0E=!1
$.ds_=C.a([A.cPv(),A.dHB(),A.dHG(),A.dHH(),A.dHI(),A.dHJ(),A.dHK(),A.dHL(),A.dHM(),A.dHN(),A.dHC(),A.dHD(),A.dHE(),A.dHF(),A.cPv(),A.cPv()],C.ac("C<e(e,qi,e)>"))})();(function lazyInitializers(){var x=a.lazy,w=a.lazyFinal
x($,"dMu","cQq",()=>C.tF(511))
x($,"dMv","cQr",()=>C.tF(511))
x($,"dMx","cQs",()=>C.cXE(2041))
x($,"dMy","cQt",()=>C.cXE(225))
x($,"dMw","cHG",()=>C.tF(766))
w($,"dMG","d9V",()=>C.cTi(0,0,0,0))})()};
(a=>{a["8KBfQc9KgGrsC3D3SbRfV1SmFGw="]=a.current})($__dart_deferred_initializers__);