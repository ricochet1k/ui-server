import{S as k,i as g,s as b,Y as y,e as _,b as h,$ as P,f as i,t as c,h as d,O as w,F as s,x as m,y as p,z as f,C as $,a as C,c as v}from"../../../../chunks/index-e693a59e.js";import{p as q}from"../../../../chunks/stores-e2727ac0.js";import{W as Q}from"../../../../chunks/workers-list-72c85b7a.js";import{g as S}from"../../../../chunks/pollers-service-fc388046.js";import{P as T}from"../../../../chunks/page-title-5657446d.js";import"../../../../chunks/icon-9e3c01e3.js";import"../../../../chunks/time-format-3020d225.js";import"../../../../chunks/persist-store-1e827ec5.js";import"../../../../chunks/index-8f8207c2.js";import"../../../../chunks/parse-with-big-int-561ccb8b.js";import"../../../../chunks/format-date-016d7451.js";import"../../../../chunks/is-44021919.js";import"../../../../chunks/empty-state-435a3ca7.js";import"../../../../chunks/route-for-api-2a8bef97.js";import"../../../../chunks/route-for-06e4a074.js";import"../../../../chunks/auth-user-9d5760b4.js";import"../../../../chunks/notifications-ef755750.js";import"../../../../chunks/is-network-error-5f9e2367.js";function W(o){return{c:s,l:s,m:s,p:s,i:s,o:s,d:s}}function x(o){let r,a;return r=new Q({props:{taskQueue:o[0],workers:o[1]}}),{c(){m(r.$$.fragment)},l(e){p(r.$$.fragment,e)},m(e,n){f(r,e,n),a=!0},p:s,i(e){a||(i(r.$$.fragment,e),a=!0)},o(e){c(r.$$.fragment,e),a=!1},d(e){$(r,e)}}}function z(o){return{c:s,l:s,m:s,p:s,i:s,o:s,d:s}}function A(o){let r,a,e={ctx:o,current:null,token:null,hasCatch:!1,pending:z,then:x,catch:W,value:1,blocks:[,,,]};return y(o[1],e),{c(){r=_(),e.block.c()},l(n){r=_(),e.block.l(n)},m(n,t){h(n,r,t),e.block.m(n,e.anchor=t),e.mount=()=>r.parentNode,e.anchor=r,a=!0},p(n,[t]){o=n,P(e,o,t)},i(n){a||(i(e.block),a=!0)},o(n){for(let t=0;t<3;t+=1){const l=e.blocks[t];c(l)}a=!1},d(n){n&&d(r),e.block.d(n),e.token=null,e=null}}}function B(o,r,a){let e;w(o,q,u=>a(2,e=u));let{queue:n,namespace:t}=e.params,l=S({queue:n,namespace:t},{returnAllPollers:!0});return[n,l]}class D extends k{constructor(r){super(),g(this,r,B,A,b,{})}}function F(o){let r,a,e,n;return r=new T({props:{title:`Task Queue | ${o[1]}`,url:o[0].url.href}}),e=new D({}),{c(){m(r.$$.fragment),a=C(),m(e.$$.fragment)},l(t){p(r.$$.fragment,t),a=v(t),p(e.$$.fragment,t)},m(t,l){f(r,t,l),h(t,a,l),f(e,t,l),n=!0},p(t,[l]){const u={};l&1&&(u.url=t[0].url.href),r.$set(u)},i(t){n||(i(r.$$.fragment,t),i(e.$$.fragment,t),n=!0)},o(t){c(r.$$.fragment,t),c(e.$$.fragment,t),n=!1},d(t){$(r,t),t&&d(a),$(e,t)}}}function N(o,r,a){let e;w(o,q,t=>a(0,e=t));const n=e.params.queue;return[e,n]}class re extends k{constructor(r){super(),g(this,r,N,F,b,{})}}export{re as default};