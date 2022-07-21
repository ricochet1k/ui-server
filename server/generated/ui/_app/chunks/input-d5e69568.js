import{S as X,i as Z,s as x,e as N,t as $,c as j,a as A,h as ee,d,b as g,g as V,M as I,j as te,w as W,x as Y,y as J,q as h,o as S,B as K,T as E,k as z,m as B,R as M,Y as D,aa as P,n as T,p as q,G as ne,N as le,C as L,V as R,W as U}from"./index-a913e400.js";import{c as ie}from"./copy-to-clipboard-0fa4459b.js";import{I as O}from"./index-4d222e66.js";function F(l){let e,t;return{c(){e=N("label"),t=$(l[2]),this.h()},l(i){e=j(i,"LABEL",{for:!0,class:!0});var o=A(e);t=ee(o,l[2]),o.forEach(d),this.h()},h(){g(e,"for",l[1]),g(e,"class","svelte-19gnvcy")},m(i,o){V(i,e,o),I(e,t)},p(i,o){o&4&&te(t,i[2]),o&2&&g(e,"for",i[1])},d(i){i&&d(e)}}}function G(l){let e,t,i;return t=new O({props:{name:l[3],scale:.9,stroke:"currentcolor"}}),{c(){e=N("span"),W(t.$$.fragment),this.h()},l(o){e=j(o,"SPAN",{class:!0});var n=A(e);Y(t.$$.fragment,n),n.forEach(d),this.h()},h(){g(e,"class","icon-container svelte-19gnvcy")},m(o,n){V(o,e,n),J(t,e,null),i=!0},p(o,n){const v={};n&8&&(v.name=o[3]),t.$set(v)},i(o){i||(h(t.$$.fragment,o),i=!0)},o(o){S(t.$$.fragment,o),i=!1},d(o){o&&d(e),K(t)}}}function H(l){let e,t,i,o,n;return t=new O({props:{name:l[10]?"checkMark":"copy",stroke:"currentcolor"}}),{c(){e=N("div"),W(t.$$.fragment),this.h()},l(v){e=j(v,"DIV",{class:!0});var f=A(e);Y(t.$$.fragment,f),f.forEach(d),this.h()},h(){g(e,"class","copy-icon-container svelte-19gnvcy")},m(v,f){V(v,e,f),J(t,e,null),i=!0,o||(n=E(e,"click",l[11]),o=!0)},p(v,f){const b={};f&1024&&(b.name=v[10]?"checkMark":"copy"),t.$set(b)},i(v){i||(h(t.$$.fragment,v),i=!0)},o(v){S(t.$$.fragment,v),i=!1},d(v){v&&d(e),K(t),o=!1,n()}}}function oe(l){let e,t,i,o,n,v,f,b,_,k,p,w,C,y=l[2]&&F(l),s=l[3]!==""&&G(l),u=l[6]&&H(l);return{c(){e=N("div"),y&&y.c(),t=z(),i=N("div"),s&&s.c(),o=z(),n=N("input"),b=z(),u&&u.c(),this.h()},l(a){e=j(a,"DIV",{class:!0});var r=A(e);y&&y.l(r),t=B(r),i=j(r,"DIV",{class:!0});var m=A(i);s&&s.l(m),o=B(m),n=j(m,"INPUT",{class:!0,"data-lpignore":!0,placeholder:!0,id:!0,name:!0,autocomplete:!0}),b=B(m),u&&u.l(m),m.forEach(d),r.forEach(d),this.h()},h(){g(n,"class","m-2 block w-full bg-white focus:outline-none svelte-19gnvcy"),n.disabled=v=l[7]||l[6],g(n,"data-lpignore","true"),g(n,"placeholder",l[4]),g(n,"id",l[1]),g(n,"name",l[5]),g(n,"autocomplete",f=l[9]?"on":"off"),M(n,"copyable",l[6]),g(i,"class",_="input-container w-full "+l[8]+" svelte-19gnvcy"),M(i,"copyable",l[6]),g(e,"class",k=D(l[13].class)+" svelte-19gnvcy")},m(a,r){V(a,e,r),y&&y.m(e,null),I(e,t),I(e,i),s&&s.m(i,null),I(i,o),I(i,n),P(n,l[0]),I(i,b),u&&u.m(i,null),p=!0,w||(C=[E(n,"input",l[18]),E(n,"input",l[14]),E(n,"change",l[15]),E(n,"focus",l[16]),E(n,"blur",l[17])],w=!0)},p(a,[r]){a[2]?y?y.p(a,r):(y=F(a),y.c(),y.m(e,t)):y&&(y.d(1),y=null),a[3]!==""?s?(s.p(a,r),r&8&&h(s,1)):(s=G(a),s.c(),h(s,1),s.m(i,o)):s&&(T(),S(s,1,1,()=>{s=null}),q()),(!p||r&192&&v!==(v=a[7]||a[6]))&&(n.disabled=v),(!p||r&16)&&g(n,"placeholder",a[4]),(!p||r&2)&&g(n,"id",a[1]),(!p||r&32)&&g(n,"name",a[5]),(!p||r&512&&f!==(f=a[9]?"on":"off"))&&g(n,"autocomplete",f),r&1&&n.value!==a[0]&&P(n,a[0]),r&64&&M(n,"copyable",a[6]),a[6]?u?(u.p(a,r),r&64&&h(u,1)):(u=H(a),u.c(),h(u,1),u.m(i,null)):u&&(T(),S(u,1,1,()=>{u=null}),q()),(!p||r&256&&_!==(_="input-container w-full "+a[8]+" svelte-19gnvcy"))&&g(i,"class",_),r&320&&M(i,"copyable",a[6]),(!p||r&8192&&k!==(k=D(a[13].class)+" svelte-19gnvcy"))&&g(e,"class",k)},i(a){p||(h(s),h(u),p=!0)},o(a){S(s),S(u),p=!1},d(a){a&&d(e),y&&y.d(),s&&s.d(),u&&u.d(),w=!1,ne(C)}}}function ae(l,e,t){let i,{id:o}=e,{value:n}=e,{label:v=""}=e,{icon:f=""}=e,{placeholder:b=""}=e,{name:_=o}=e,{copyable:k=!1}=e,{disabled:p=!1}=e,{theme:w="light"}=e,{autocomplete:C=!1}=e;const{copy:y,copied:s}=ie(n);le(l,s,c=>t(10,i=c));function u(c){U.call(this,l,c)}function a(c){U.call(this,l,c)}function r(c){U.call(this,l,c)}function m(c){U.call(this,l,c)}function Q(){n=this.value,t(0,n)}return l.$$set=c=>{t(13,e=L(L({},e),R(c))),"id"in c&&t(1,o=c.id),"value"in c&&t(0,n=c.value),"label"in c&&t(2,v=c.label),"icon"in c&&t(3,f=c.icon),"placeholder"in c&&t(4,b=c.placeholder),"name"in c&&t(5,_=c.name),"copyable"in c&&t(6,k=c.copyable),"disabled"in c&&t(7,p=c.disabled),"theme"in c&&t(8,w=c.theme),"autocomplete"in c&&t(9,C=c.autocomplete)},e=R(e),[n,o,v,f,b,_,k,p,w,C,i,y,s,e,u,a,r,m,Q]}class ve extends X{constructor(e){super(),Z(this,e,ae,oe,x,{id:1,value:0,label:2,icon:3,placeholder:4,name:5,copyable:6,disabled:7,theme:8,autocomplete:9})}}export{ve as I};