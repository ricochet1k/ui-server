var w=Object.defineProperty;var i=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var v=(t,e,r)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e)=>{for(var r in e||(e={}))A.call(e,r)&&v(t,r,e[r]);if(i)for(var r of i(e))m.call(e,r)&&v(t,r,e[r]);return t};var k=(t,e)=>{var r={};for(var s in t)A.call(t,s)&&e.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&i)for(var s of i(t))e.indexOf(s)<0&&m.call(t,s)&&(r[s]=t[s]);return r};import{h as F,i as u,r as P,a as b}from"./route-for-api-865b24d3.js";import{t as j}from"./index-b40aeffa.js";const E=(t={},e={})=>{const r=g({},t);for(const s of Object.keys(e)){const n=r[s];Array.isArray(n)?r[s]=r[s].concat(e[s]):typeof n=="object"&&!Array.isArray(n)?r[s]=E(r[s],e[s]):r[s]=e[s]}return r},l=async(t,{onStart:e,onUpdate:r,onComplete:s,onError:n=F,token:f,previousProps:o}={})=>{!o&&u(e)&&e();try{const y=await t(f),{nextPageToken:h}=y,p=k(y,["nextPageToken"]),c=E(o,p);return u(r)&&r(c,p),h?l(t,{onStart:e,onUpdate:r,onComplete:s,token:h,previousProps:c}):(u(s)&&s(c),c)}catch(a){n(a)}},x=async({namespace:t,workflowId:e,runId:r,onStart:s,onUpdate:n,onComplete:f},o=fetch)=>(await l(async a=>P(b("events",{namespace:t,workflowId:e,runId:r}),{token:a,request:o}),{onStart:s,onUpdate:n,onComplete:f})).history.events,O=async(t,e=fetch)=>x(t,e).then(j);export{O as a,x as f};