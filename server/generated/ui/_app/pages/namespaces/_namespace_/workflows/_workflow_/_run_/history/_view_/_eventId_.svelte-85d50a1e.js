import{S as R,i as z,s as K,e as v,c as b,a as g,d as u,b as m,g as E,L as d,t as S,k as C,h as T,m as P,U as O,j,J as W,l as G,q as y,o as I,p as A,a1 as X,I as Y,n as D,T as U,w as Z,x as $,y as x,B as ee,aD as te}from"../../../../../../../../chunks/vendor-ff19c65d.js";import{b as le}from"../../../../../../../../chunks/route-for-47027f7b.js";import{p as re}from"../../../../../../../../chunks/stores-4aa32d62.js";import{f as q}from"../../../../../../../../chunks/format-camel-case-8b7e013d.js";import{C as ne}from"../../../../../../../../chunks/code-block-9df75e9c.js";import{a as B}from"../../../../../../../../chunks/append-query-parameters-b8619cc0.js";const se=(i,t)=>{const n=i.id;for(const l of t){if(n===l.id)return l;for(const o of l.eventIds)if(n===o)return l}};function F(i,t,n){const l=i.slice();return l[4]=t[n][0],l[5]=t[n][1],l}function H(i,t,n){const l=i.slice();return l[8]=t[n][0],l[9]=t[n][1],l}function V(i){let t,n,l=[...i[1].events],o=[];for(let s=0;s<l.length;s+=1)o[s]=J(H(i,l,s));return{c(){t=v("nav"),n=v("ul");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){t=b(s,"NAV",{class:!0});var r=g(t);n=b(r,"UL",{class:!0});var e=g(n);for(let a=0;a<o.length;a+=1)o[a].l(e);e.forEach(u),r.forEach(u),this.h()},h(){m(n,"class","flex gap-4 w-full items-start"),m(t,"class","flex flex-col mb-4")},m(s,r){E(s,t,r),d(t,n);for(let e=0;e<o.length;e+=1)o[e].m(n,null)},p(s,r){if(r&7){l=[...s[1].events];let e;for(e=0;e<l.length;e+=1){const a=H(s,l,e);o[e]?o[e].p(a,r):(o[e]=J(a),o[e].c(),o[e].m(n,null))}for(;e<o.length;e+=1)o[e].d(1);o.length=l.length}},d(s){s&&u(t),W(o,s)}}}function J(i){let t,n,l=i[9].eventType+"",o,s,r;return{c(){t=v("li"),n=v("a"),o=S(l),r=C(),this.h()},l(e){t=b(e,"LI",{});var a=g(t);n=b(a,"A",{"sveltekit:noscroll":!0,href:!0,class:!0});var c=g(n);o=T(c,l),c.forEach(u),r=P(a),a.forEach(u),this.h()},h(){m(n,"sveltekit:noscroll",""),m(n,"href",s=B(i[8],i[2].url.searchParams)),m(n,"class","border-b-2 border-blue-600 svelte-kcbmue"),O(n,"active",i[8]===i[0].id)},m(e,a){E(e,t,a),d(t,n),d(n,o),d(t,r)},p(e,a){a&2&&l!==(l=e[9].eventType+"")&&j(o,l),a&6&&s!==(s=B(e[8],e[2].url.searchParams))&&m(n,"href",s),a&3&&O(n,"active",e[8]===e[0].id)},d(e){e&&u(t)}}}function M(i){let t,n,l=q(i[4])+"",o,s,r,e,a,c,f;const h=[ae,oe],k=[];function L(_,p){return typeof _[5]=="object"?0:1}return e=L(i),a=k[e]=h[e](i),{c(){t=v("article"),n=v("h4"),o=S(l),s=C(),r=v("div"),a.c(),c=C(),this.h()},l(_){t=b(_,"ARTICLE",{class:!0});var p=g(t);n=b(p,"H4",{class:!0});var w=g(n);o=T(w,l),w.forEach(u),s=P(p),r=b(p,"DIV",{class:!0});var N=g(r);a.l(N),N.forEach(u),c=P(p),p.forEach(u),this.h()},h(){m(n,"class","w-96 flex-grow"),m(r,"class","flex-grow w-full"),m(t,"class","flex items-center content-start w-full border-b-2 last:border-b-0 border-gray-200 py-1")},m(_,p){E(_,t,p),d(t,n),d(n,o),d(t,s),d(t,r),k[e].m(r,null),d(t,c),f=!0},p(_,p){(!f||p&1)&&l!==(l=q(_[4])+"")&&j(o,l);let w=e;e=L(_),e===w?k[e].p(_,p):(D(),I(k[w],1,1,()=>{k[w]=null}),A(),a=k[e],a?a.p(_,p):(a=k[e]=h[e](_),a.c()),y(a,1),a.m(r,null))},i(_){f||(y(a),f=!0)},o(_){I(a),f=!1},d(_){_&&u(t),k[e].d()}}}function oe(i){let t,n,l=i[5]+"",o;return{c(){t=v("p"),n=v("span"),o=S(l),this.h()},l(s){t=b(s,"P",{});var r=g(t);n=b(r,"SPAN",{class:!0});var e=g(n);o=T(e,l),e.forEach(u),r.forEach(u),this.h()},h(){m(n,"class","bg-gray-300 text-gray-700 px-2")},m(s,r){E(s,t,r),d(t,n),d(n,o)},p(s,r){r&1&&l!==(l=s[5]+"")&&j(o,l)},i:U,o:U,d(s){s&&u(t)}}}function ae(i){let t,n;return t=new ne({props:{content:i[5]}}),{c(){Z(t.$$.fragment)},l(l){$(t.$$.fragment,l)},m(l,o){x(t,l,o),n=!0},p(l,o){const s={};o&1&&(s.content=l[5]),t.$set(s)},i(l){n||(y(t.$$.fragment,l),n=!0)},o(l){I(t.$$.fragment,l),n=!1},d(l){ee(t,l)}}}function Q(i,t){let n,l=t[3](t[4],t[5]),o,s,r=l&&M(t);return{key:i,first:null,c(){n=G(),r&&r.c(),o=G(),this.h()},l(e){n=G(),r&&r.l(e),o=G(),this.h()},h(){this.first=n},m(e,a){E(e,n,a),r&&r.m(e,a),E(e,o,a),s=!0},p(e,a){t=e,a&1&&(l=t[3](t[4],t[5])),l?r?(r.p(t,a),a&1&&y(r,1)):(r=M(t),r.c(),y(r,1),r.m(o.parentNode,o)):r&&(D(),I(r,1,1,()=>{r=null}),A())},i(e){s||(y(r),s=!0)},o(e){I(r),s=!1},d(e){e&&u(n),r&&r.d(e),e&&u(o)}}}function ie(i){let t,n,l=[],o=new Map,s,r=i[1]&&V(i),e=Object.entries(i[0].attributes);const a=c=>c[4];for(let c=0;c<e.length;c+=1){let f=F(i,e,c),h=a(f);o.set(h,l[c]=Q(h,f))}return{c(){t=v("section"),r&&r.c(),n=C();for(let c=0;c<l.length;c+=1)l[c].c();this.h()},l(c){t=b(c,"SECTION",{class:!0});var f=g(t);r&&r.l(f),n=P(f);for(let h=0;h<l.length;h+=1)l[h].l(f);f.forEach(u),this.h()},h(){m(t,"class","overflow-y-scroll max-h-full")},m(c,f){E(c,t,f),r&&r.m(t,null),d(t,n);for(let h=0;h<l.length;h+=1)l[h].m(t,null);s=!0},p(c,[f]){c[1]?r?r.p(c,f):(r=V(c),r.c(),r.m(t,n)):r&&(r.d(1),r=null),f&9&&(e=Object.entries(c[0].attributes),D(),l=X(l,f,a,1,c,e,o,t,te,Q,null,F),A())},i(c){if(!s){for(let f=0;f<e.length;f+=1)y(l[f]);s=!0}},o(c){for(let f=0;f<l.length;f+=1)I(l[f]);s=!1},d(c){c&&u(t),r&&r.d();for(let f=0;f<l.length;f+=1)l[f].d()}}}const me=async function({params:i,stuff:t,url:n}){const{eventId:l}=i,{events:o,eventGroups:s,matchingEvents:r}=t,e=o.find(c=>c.id===l),a=se(e,s);return e?r.includes(e)?{props:{event:e,eventGroup:a}}:(n.pathname=le(i),{status:302,redirect:String(n)}):{status:404}};function ce(i,t,n){let l;Y(i,re,e=>n(2,l=e));let{event:o}=t,{eventGroup:s}=t;const r=(e,a)=>!(a===null||a===void 0||a===""||a==="0s"||e==="type");return i.$$set=e=>{"event"in e&&n(0,o=e.event),"eventGroup"in e&&n(1,s=e.eventGroup)},[o,s,l,r]}class ve extends R{constructor(t){super();z(this,t,ce,ie,K,{event:0,eventGroup:1})}}export{ve as default,me as load};
