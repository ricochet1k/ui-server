import{p as d}from"./paginated-ddf8551c.js";import{r as p,a as f}from"./route-for-api-ad1e0920.js";import{t as u}from"./index-a5de7c0a.js";import{b as g}from"./is-6159121b.js";const m=e=>!g(e)||e==="descending"?"events.descending":e==="ascending"?"events.ascending":"events.descending",v=async({namespace:e,workflowId:n,runId:t,sort:s,onStart:r,onUpdate:o,onComplete:i})=>{const a=m(s);return(await d(async c=>p(f(a,{namespace:e,workflowId:n,runId:t}),{token:c,request:fetch}),{onStart:r,onUpdate:o,onComplete:i})).history.events},w=async e=>{const{settings:n,namespace:t}=e;return v(e).then(s=>u({response:s,namespace:t,settings:n}))};export{w as a,v as f};