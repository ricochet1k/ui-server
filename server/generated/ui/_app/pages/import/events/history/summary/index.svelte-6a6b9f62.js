import{S as p,i as c,s as u,w as f,x as g,y as _,q as y,o as l,B as d,I as a}from"../../../../../chunks/vendor-f2f66dce.js";import{p as E}from"../../../../../chunks/stores-7c72d97e.js";import{i as $}from"../../../../../chunks/import-events-9ac7fcc7.js";import{E as h}from"../../../../../chunks/event-summary-3f5e25d3.js";import"../../../../../chunks/loading-row-6c25c65a.js";import"../../../../../chunks/filter-select-6015346b.js";import"../../../../../chunks/navigation-093db9e2.js";import"../../../../../chunks/singletons-a6a7384f.js";import"../../../../../chunks/select-e2429f65.js";import"../../../../../chunks/event-summary-row-6afa3572.js";import"../../../../../chunks/event-empty-row-332cba3a.js";import"../../../../../chunks/get-event-categorization-90555be0.js";import"../../../../../chunks/code-block-8e50137e.js";import"../../../../../chunks/format-camel-case-8b7e013d.js";import"../../../../../chunks/empty-state-5f369cbb.js";import"../../../../../chunks/format-date-f4b2075a.js";function v(o){let r,e;return r=new h({props:{items:o[0]}}),{c(){f(r.$$.fragment)},l(t){g(r.$$.fragment,t)},m(t,m){_(r,t,m),e=!0},p(t,[m]){const n={};m&1&&(n.items=t[0]),r.$set(n)},i(t){e||(y(r.$$.fragment,t),e=!0)},o(t){l(r.$$.fragment,t),e=!1},d(t){d(r,t)}}}function x(o,r,e){let t,m,n,i;return a(o,$,s=>e(2,n=s)),a(o,E,s=>e(3,i=s)),o.$$.update=()=>{o.$$.dirty&8&&e(1,t=i.url.searchParams.get("category")),o.$$.dirty&6&&e(0,m=n.filter(s=>t?s.category===t:s))},[m,t,n,i]}class J extends p{constructor(r){super();c(this,r,x,v,u,{})}}export{J as default};