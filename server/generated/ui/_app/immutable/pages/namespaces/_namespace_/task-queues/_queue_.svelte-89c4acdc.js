import{S as k,i as g,s as b,X as y,e as _,b as h,_ as P,f as i,t as c,h as d,N as w,E as s,w as m,x as p,y as f,B as $,a as v,c as B}from"../../../../chunks/index-9d69cec5.js";import{p as q}from"../../../../chunks/stores-d806cb81.js";import{W as C}from"../../../../chunks/workers-list-51741142.js";import{g as N}from"../../../../chunks/pollers-service-af03a4b1.js";import{P as Q}from"../../../../chunks/page-title-8c387746.js";import"../../../../chunks/icon-c89f2c4c.js";import"../../../../chunks/time-format-da94d3c3.js";import"../../../../chunks/persist-store-7662fc0b.js";import"../../../../chunks/index-ad6f072e.js";import"../../../../chunks/parse-with-big-int-561ccb8b.js";import"../../../../chunks/format-date-eb94f038.js";import"../../../../chunks/is-44021919.js";import"../../../../chunks/empty-state-ec9374e8.js";import"../../../../chunks/route-for-api-d16befb1.js";import"../../../../chunks/route-for-ad343b08.js";import"../../../../chunks/auth-user-db7289b0.js";import"../../../../chunks/notifications-677e5039.js";import"../../../../chunks/is-network-error-5f9e2367.js";function S(o){return{c:s,l:s,m:s,p:s,i:s,o:s,d:s}}function T(o){let r,a;return r=new C({props:{taskQueue:o[0],workers:o[1]}}),{c(){m(r.$$.fragment)},l(e){p(r.$$.fragment,e)},m(e,n){f(r,e,n),a=!0},p:s,i(e){a||(i(r.$$.fragment,e),a=!0)},o(e){c(r.$$.fragment,e),a=!1},d(e){$(r,e)}}}function W(o){return{c:s,l:s,m:s,p:s,i:s,o:s,d:s}}function x(o){let r,a,e={ctx:o,current:null,token:null,hasCatch:!1,pending:W,then:T,catch:S,value:1,blocks:[,,,]};return y(o[1],e),{c(){r=_(),e.block.c()},l(n){r=_(),e.block.l(n)},m(n,t){h(n,r,t),e.block.m(n,e.anchor=t),e.mount=()=>r.parentNode,e.anchor=r,a=!0},p(n,[t]){o=n,P(e,o,t)},i(n){a||(i(e.block),a=!0)},o(n){for(let t=0;t<3;t+=1){const l=e.blocks[t];c(l)}a=!1},d(n){n&&d(r),e.block.d(n),e.token=null,e=null}}}function A(o,r,a){let e;w(o,q,u=>a(2,e=u));let{queue:n,namespace:t}=e.params,l=N({queue:n,namespace:t},{returnAllPollers:!0});return[n,l]}class D extends k{constructor(r){super(),g(this,r,A,x,b,{})}}function E(o){let r,a,e,n;return r=new Q({props:{title:`Task Queue | ${o[1]}`,url:o[0].url.href}}),e=new D({}),{c(){m(r.$$.fragment),a=v(),m(e.$$.fragment)},l(t){p(r.$$.fragment,t),a=B(t),p(e.$$.fragment,t)},m(t,l){f(r,t,l),h(t,a,l),f(e,t,l),n=!0},p(t,[l]){const u={};l&1&&(u.url=t[0].url.href),r.$set(u)},i(t){n||(i(r.$$.fragment,t),i(e.$$.fragment,t),n=!0)},o(t){c(r.$$.fragment,t),c(e.$$.fragment,t),n=!1},d(t){$(r,t),t&&d(a),$(e,t)}}}function U(o,r,a){let e;w(o,q,t=>a(0,e=t));const n=e.params.queue;return[e,n]}class re extends k{constructor(r){super(),g(this,r,U,E,b,{})}}export{re as default};
