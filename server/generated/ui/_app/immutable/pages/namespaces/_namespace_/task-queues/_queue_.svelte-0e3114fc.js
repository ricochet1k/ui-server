import{S as h,i as d,s as w,X as q,w as p,a as P,e as k,x as f,c as y,y as _,b as g,_ as v,f as c,t as m,B as $,h as b,N as B,E as a}from"../../../../chunks/index-9ea626a2.js";import{p as C}from"../../../../chunks/stores-3338201a.js";import{P as N}from"../../../../chunks/page-title-d5cce088.js";import{W as Q}from"../../../../chunks/workers-list-78acbc98.js";import{g as S}from"../../../../chunks/pollers-service-5734098b.js";import"../../../../chunks/get-public-path-6c4a8950.js";import"../../../../chunks/icon-3b6c42df.js";import"../../../../chunks/time-format-86c6c9e7.js";import"../../../../chunks/persist-store-140a71fe.js";import"../../../../chunks/index-ed4e6b3e.js";import"../../../../chunks/is-function-45497f08.js";import"../../../../chunks/format-date-2e95557a.js";import"../../../../chunks/is-6159121b.js";import"../../../../chunks/empty-state-821cb583.js";import"../../../../chunks/route-for-api-ad1e0920.js";import"../../../../chunks/route-for-62d7d3b1.js";import"../../../../chunks/notifications-92f665fe.js";import"../../../../chunks/is-network-error-5f9e2367.js";function T(o){return{c:a,l:a,m:a,p:a,i:a,o:a,d:a}}function W(o){let t,n;return t=new Q({props:{taskQueue:o[1],workers:o[2]}}),{c(){p(t.$$.fragment)},l(e){f(t.$$.fragment,e)},m(e,u){_(t,e,u),n=!0},p:a,i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function A(o){return{c:a,l:a,m:a,p:a,i:a,o:a,d:a}}function D(o){let t,n,e,u;t=new N({props:{title:`Task Queue | ${o[1]}`,url:o[0].url.href}});let s={ctx:o,current:null,token:null,hasCatch:!1,pending:A,then:W,catch:T,value:2,blocks:[,,,]};return q(o[2],s),{c(){p(t.$$.fragment),n=P(),e=k(),s.block.c()},l(r){f(t.$$.fragment,r),n=y(r),e=k(),s.block.l(r)},m(r,l){_(t,r,l),g(r,n,l),g(r,e,l),s.block.m(r,s.anchor=l),s.mount=()=>e.parentNode,s.anchor=e,u=!0},p(r,[l]){o=r;const i={};l&1&&(i.url=o[0].url.href),t.$set(i),v(s,o,l)},i(r){u||(c(t.$$.fragment,r),c(s.block),u=!0)},o(r){m(t.$$.fragment,r);for(let l=0;l<3;l+=1){const i=s.blocks[l];m(i)}u=!1},d(r){$(t,r),r&&b(n),r&&b(e),s.block.d(r),s.token=null,s=null}}}function E(o,t,n){let e;B(o,C,l=>n(0,e=l));let{queue:u,namespace:s}=e.params,r=S({queue:u,namespace:s},{returnAllPollers:!0});return[e,u,r]}class U extends h{constructor(t){super(),d(this,t,E,D,w,{})}}function X(o){let t,n;return t=new U({}),{c(){p(t.$$.fragment)},l(e){f(t.$$.fragment,e)},m(e,u){_(t,e,u),n=!0},p:a,i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}class re extends h{constructor(t){super(),d(this,t,null,X,w,{})}}export{re as default};