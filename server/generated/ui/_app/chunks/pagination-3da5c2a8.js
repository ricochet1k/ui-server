import{at as A,au as pe,D as ce,S as be,i as ve,s as Ie,L as fe,av as Pe,aw as Ne,F as ye,e as j,t as B,k as M,w as z,c as k,a as E,h as D,d as N,m as q,x as $,b as F,g as je,G as l,y as ee,W as ge,j as te,H as ke,I as Ee,J as Te,q as H,o as J,B as ne,ad as we,K as Fe,a7 as Oe,O as xe}from"./vendor-c58cc9e7.js";import{p as Be}from"./stores-810f7c97.js";import{F as De}from"./filter-select-913ec031.js";const se=["100","250","500"],_e=e=>{const t=String(e);return se.includes(t)?se:[e,...se]},K=(e,t)=>Math.floor(e/t)+1,me=(e,t,r)=>isNaN(e)||e<=1?0:e>he(t,r)?r.length-t:Math.floor(t*(e-1)),Se=(e,t,r)=>{const u=K(e,t);return me(u,t,r)},he=(e,t)=>Math.ceil(t.length/e),ae=(e,t)=>isNaN(e)||e<0?0:e<t.length?e:t.length-1,re=(e,t)=>e>=t.length||e<0,Ve=(e=[],t=100,r=0)=>{const u=Se(Number(r),Number(t),e),o=ce(Number(t)),h=ce(u),y=n=>{o.set(Number(n))},g=()=>{h.update(n=>{const s=n+A(o);return re(s,e)?n:ae(s,e)})},T=()=>{h.update(n=>{const s=n-A(o);return ae(s,e)})},f=n=>{const s=A(o);return h.set(me(Number(n),s,e))},_=n=>{const s=K(Number(n),A(o));f(s)},d=n=>{for(let s=0;s<e.length;s++)if(n(e[s]))return s},b=n=>{const s=d(n);return K(s,A(o))},{subscribe:v}=pe([h,o],([n,s])=>({items:e.slice(n,n+s),hasPrevious:!re(n-s,e),hasNext:!re(n+s,e),startingIndex:n,endingIndex:ae(n+s-1,e),length:e.length,pageSize:s,currentPage:K(n,s),totalPages:he(s,e)}));return{subscribe:v,adjustPageSize:y,next:g,previous:T,jumpToPage:f,jumpToIndex:_,findIndex:d,findPage:b}};const Ae=e=>({visibleItems:e&8}),de=e=>({visibleItems:e[3].items});function Me(e){let t,r,u,o,h,y,g,T,f,_,d,b,v,n,s=e[3].startingIndex+1+"",i,R,S=e[3].endingIndex+1+"",L,W,V=e[3].length+"",U,Q,I,w,C,X,p,Y,oe;g=new De({props:{label:"Per Page",parameter:e[0],value:e[2],options:_e(e[2])}}),d=new fe({props:{icon:Pe}}),w=new fe({props:{icon:Ne}});const Z=e[8].default,m=ye(Z,e,e[7],de);return{c(){t=j("div"),r=j("nav"),u=j("div"),o=j("p"),h=B("Per Page"),y=M(),z(g.$$.fragment),T=M(),f=j("div"),_=j("button"),z(d.$$.fragment),v=M(),n=j("p"),i=B(s),R=B("\u2013"),L=B(S),W=B(" of "),U=B(V),Q=M(),I=j("button"),z(w.$$.fragment),X=M(),m&&m.c(),this.h()},l(a){t=k(a,"DIV",{class:!0});var c=E(t);r=k(c,"NAV",{class:!0});var P=E(r);u=k(P,"DIV",{class:!0});var G=E(u);o=k(G,"P",{class:!0});var le=E(o);h=D(le,"Per Page"),le.forEach(N),y=q(G),$(g.$$.fragment,G),G.forEach(N),T=q(P),f=k(P,"DIV",{class:!0});var O=E(f);_=k(O,"BUTTON",{class:!0});var ue=E(_);$(d.$$.fragment,ue),ue.forEach(N),v=q(O),n=k(O,"P",{});var x=E(n);i=D(x,s),R=D(x,"\u2013"),L=D(x,S),W=D(x," of "),U=D(x,V),x.forEach(N),Q=q(O),I=k(O,"BUTTON",{class:!0});var ie=E(I);$(w.$$.fragment,ie),ie.forEach(N),O.forEach(N),P.forEach(N),X=q(c),m&&m.l(c),c.forEach(N),this.h()},h(){F(o,"class","w-fit text-right"),F(u,"class","flex gap-2 items-center justify-center"),F(_,"class","caret svelte-15p08gy"),_.disabled=b=!e[3].hasPrevious,F(I,"class","caret svelte-15p08gy"),I.disabled=C=!e[3].hasNext,F(f,"class","flex gap-6 items-center justify-center"),F(r,"class","flex justify-end gap-8"),F(t,"class","flex flex-col gap-4")},m(a,c){je(a,t,c),l(t,r),l(r,u),l(u,o),l(o,h),l(u,y),ee(g,u,null),l(r,T),l(r,f),l(f,_),ee(d,_,null),l(f,v),l(f,n),l(n,i),l(n,R),l(n,L),l(n,W),l(n,U),l(f,Q),l(f,I),ee(w,I,null),l(t,X),m&&m.m(t,null),p=!0,Y||(oe=[ge(_,"click",e[9]),ge(I,"click",e[10])],Y=!0)},p(a,[c]){const P={};c&1&&(P.parameter=a[0]),c&4&&(P.value=a[2]),c&4&&(P.options=_e(a[2])),g.$set(P),(!p||c&8&&b!==(b=!a[3].hasPrevious))&&(_.disabled=b),(!p||c&8)&&s!==(s=a[3].startingIndex+1+"")&&te(i,s),(!p||c&8)&&S!==(S=a[3].endingIndex+1+"")&&te(L,S),(!p||c&8)&&V!==(V=a[3].length+"")&&te(U,V),(!p||c&8&&C!==(C=!a[3].hasNext))&&(I.disabled=C),m&&m.p&&(!p||c&136)&&ke(m,Z,a,a[7],p?Te(Z,a[7],c,Ae):Ee(a[7]),de)},i(a){p||(H(g.$$.fragment,a),H(d.$$.fragment,a),H(w.$$.fragment,a),H(m,a),p=!0)},o(a){J(g.$$.fragment,a),J(d.$$.fragment,a),J(w.$$.fragment,a),J(m,a),p=!1},d(a){a&&N(t),ne(g),ne(d),ne(w),m&&m.d(a),Y=!1,we(oe)}}}function qe(e,t,r){let u,o,h,y,g=xe,T=()=>(g(),g=Oe(o,i=>r(3,y=i)),o);Fe(e,Be,i=>r(6,h=i)),e.$$.on_destroy.push(()=>g());let{$$slots:f={},$$scope:_}=t,{key:d="per-page"}=t,{items:b}=t,{startingIndex:v=null}=t;const n=()=>o.previous(),s=()=>o.next();return e.$$set=i=>{"key"in i&&r(0,d=i.key),"items"in i&&r(4,b=i.items),"startingIndex"in i&&r(5,v=i.startingIndex),"$$scope"in i&&r(7,_=i.$$scope)},e.$$.update=()=>{e.$$.dirty&65&&r(2,u=h.url.searchParams.get(d)||"100"),e.$$.dirty&20&&T(r(1,o=Ve(b,u))),e.$$.dirty&6&&o.adjustPageSize(u),e.$$.dirty&34&&o.jumpToIndex(v)},[d,o,u,y,b,v,h,_,f,n,s]}class Ge extends be{constructor(t){super();ve(this,t,qe,Me,Ie,{key:0,items:4,startingIndex:5})}}export{Ge as P};
