import{S as D,i as Y,s as M,w as C,k as T,e as $,t as k,l as I,x as F,m as A,c as d,a as g,h as x,d as i,b as B,y as H,g as _,M as p,q as b,o as v,B as P,N as R,E,n as V,p as j,ad as z}from"../../chunks/index-a913e400.js";import{u as G}from"../../chunks/route-for-0fcfcb54.js";import{p as J}from"../../chunks/stores-34c141af.js";import{P as K}from"../../chunks/page-title-2fee4cfa.js";import{T as L,a as O,b as Q}from"../../chunks/table-row-920ceab5.js";function S(f,t,r){const e=f.slice();return e[3]=t[r],e}function U(f){let t,r,e,a,l,s,o,n;return{c(){t=$("div"),r=$("h3"),e=k("No Namespaces Found"),a=T(),l=$("p"),s=k(`You do not have access to a Namespace.
      `),o=$("br"),n=k(`
      Contact your Administrator for assistance.`),this.h()},l(u){t=d(u,"DIV",{class:!0});var h=g(t);r=d(h,"H3",{});var N=g(r);e=x(N,"No Namespaces Found"),N.forEach(i),a=A(h),l=d(h,"P",{});var w=g(l);s=x(w,`You do not have access to a Namespace.
      `),o=d(w,"BR",{}),n=x(w,`
      Contact your Administrator for assistance.`),w.forEach(i),h.forEach(i),this.h()},h(){B(t,"class","prose mt-[15vh] max-w-none text-center")},m(u,h){_(u,t,h),p(t,r),p(r,e),p(t,a),p(t,l),p(l,s),p(l,o),p(l,n)},p:E,i:E,o:E,d(u){u&&i(t)}}}function W(f){let t,r;return t=new L({props:{variant:"fancy",class:"w-full",$$slots:{headers:[te],default:[Z]},$$scope:{ctx:f}}}),{c(){C(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,a){H(t,e,a),r=!0},p(e,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}function X(f){let t,r,e=f[3].namespaceInfo.name+"",a,l;return{c(){t=$("td"),r=$("a"),a=k(e),l=T(),this.h()},l(s){t=d(s,"TD",{});var o=g(t);r=d(o,"A",{href:!0,class:!0});var n=g(r);a=x(n,e),n.forEach(i),o.forEach(i),l=A(s),this.h()},h(){B(r,"href",G({namespace:f[3].namespaceInfo.name})),B(r,"class","hover:text-blue-700 hover:underline hover:decoration-blue-700")},m(s,o){_(s,t,o),p(t,r),p(r,a),_(s,l,o)},p:E,d(s){s&&i(t),s&&i(l)}}}function q(f){let t,r;return t=new Q({props:{$$slots:{default:[X]},$$scope:{ctx:f}}}),{c(){C(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,a){H(t,e,a),r=!0},p(e,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}function Z(f){let t,r,e=f[1],a=[];for(let s=0;s<e.length;s+=1)a[s]=q(S(f,e,s));const l=s=>v(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();t=I()},l(s){for(let o=0;o<a.length;o+=1)a[o].l(s);t=I()},m(s,o){for(let n=0;n<a.length;n+=1)a[n].m(s,o);_(s,t,o),r=!0},p(s,o){if(o&2){e=s[1];let n;for(n=0;n<e.length;n+=1){const u=S(s,e,n);a[n]?(a[n].p(u,o),b(a[n],1)):(a[n]=q(u),a[n].c(),b(a[n],1),a[n].m(t.parentNode,t))}for(V(),n=e.length;n<a.length;n+=1)l(n);j()}},i(s){if(!r){for(let o=0;o<e.length;o+=1)b(a[o]);r=!0}},o(s){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)v(a[o]);r=!1},d(s){z(a,s),s&&i(t)}}}function ee(f){let t,r;return{c(){t=$("th"),r=k("Name")},l(e){t=d(e,"TH",{});var a=g(t);r=x(a,"Name"),a.forEach(i)},m(e,a){_(e,t,a),p(t,r)},p:E,d(e){e&&i(t)}}}function te(f){let t,r;return t=new O({props:{slot:"headers",$$slots:{default:[ee]},$$scope:{ctx:f}}}),{c(){C(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,a){H(t,e,a),r=!0},p(e,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}function ae(f){let t,r,e,a,l,s,o,n,u;t=new K({props:{title:"Namespaces",url:f[0].url.href}});const h=[W,U],N=[];function w(c,m){var y;return((y=c[1])==null?void 0:y.length)>0?0:1}return s=w(f),o=N[s]=h[s](f),{c(){C(t.$$.fragment),r=T(),e=$("h1"),a=k("Namespaces"),l=T(),o.c(),n=I(),this.h()},l(c){F(t.$$.fragment,c),r=A(c),e=d(c,"H1",{class:!0});var m=g(e);a=x(m,"Namespaces"),m.forEach(i),l=A(c),o.l(c),n=I(),this.h()},h(){B(e,"class","mb-8 text-2xl")},m(c,m){H(t,c,m),_(c,r,m),_(c,e,m),p(e,a),_(c,l,m),N[s].m(c,m),_(c,n,m),u=!0},p(c,[m]){const y={};m&1&&(y.url=c[0].url.href),t.$set(y),o.p(c,m)},i(c){u||(b(t.$$.fragment,c),b(o),u=!0)},o(c){v(t.$$.fragment,c),v(o),u=!1},d(c){P(t,c),c&&i(r),c&&i(e),c&&i(l),N[s].d(c),c&&i(n)}}}function se(f,t,r){let e;R(f,J,s=>r(0,e=s));const{showTemporalSystemNamespace:a}=e.stuff.settings,l=(e.stuff.namespaces||[]).filter(s=>a||s.namespaceInfo.name!=="temporal-system");return[e,l]}class fe extends D{constructor(t){super(),Y(this,t,se,ae,M,{})}}export{fe as default};