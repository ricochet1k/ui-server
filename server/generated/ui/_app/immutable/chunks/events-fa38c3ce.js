import{d as o,r as g,w as c}from"./index-71be9f1c.js";import{p as i}from"./stores-f70708fe.js";import{a as k}from"./events-service-74890d5c.js";import{a as l,b as u}from"./event-view-c7800548.js";import{m}from"./route-for-62d7d3b1.js";import{w as y,d as I}from"./with-loading-f07bedaf.js";import{g as b}from"./index-9319d41b.js";import{r as p}from"./workflow-run-c1c7e17b.js";import{a as P}from"./auth-user-f8954649.js";import{a6 as E}from"./index-8e660855.js";const G={events:[],eventGroups:[]},_=o([i],([e])=>e.params.namespace?m(e.params.namespace):""),T=o([i],([e])=>e.params.workflow?m(e.params.workflow):""),h=o([i],([e])=>e.params.run?m(e.params.run):""),S=o([i],([e])=>e.stuff.settings),q=o([P],([e])=>e==null?void 0:e.accessToken),v={namespace:null,workflowId:null,runId:null,rawPayloads:null,sort:null},d=c(v),Q=()=>{d.set(v)},H=(e,t)=>{for(const n of["namespace","workflowId","runId"])if(!e[n])return!1;let r=!0;const s=E(t);for(const n of Object.keys(s))if(s[n]!==e[n]){r=!1;break}return r?!1:(t.set(e),!0)},O=o([_,T,h,l],([e,t,r,s])=>({namespace:e,workflowId:t,runId:r,sort:s})),R=o([O,S,q,p],([e,t,r,s])=>({...e,settings:t,accessToken:r,refresh:p,$refresh:s})),j=e=>R.subscribe(async t=>{const{settings:r,...s}=t;H(s,d)&&y(F,C,async()=>{var a;const n=await k(t);(a=n==null?void 0:n.events)!=null&&a.length?e(n):setTimeout(()=>{e(n)},I)})}),f=g(G,j),x=c(null),V=o([f,u,x],([e,t,r])=>{if(r)return r;const{events:s}=e;return t?s.filter(n=>n.category===t):s}),X=o([f,u],([e,t])=>{const{eventGroups:r}=e;return t?r.filter(s=>s.category===t):r}),Y=o([f,l,u],([e,t,r])=>{const{events:s}=e,n=t==="descending"?s.slice().reverse():s,a=b(n);return r?a.filter(w=>w.category===r):a});o([f,l,u],([e,t,r])=>{const{events:s}=e,n=t==="descending"?s.slice().reverse():s;return r?n.filter(a=>a.category===r):n});const C=c(!0),F=c(!0);export{Y as a,V as b,Q as c,X as d,f as e,F as l,x as t,C as u};