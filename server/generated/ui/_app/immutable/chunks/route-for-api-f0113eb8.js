import{d as g,e as l,t as P}from"./route-for-62d7d3b1.js";import{g as $}from"./auth-user-f8954649.js";import{E as O}from"./index-8e660855.js";import{w as z}from"./index-71be9f1c.js";import{n as N}from"./notifications-faca15d4.js";import{i as W}from"./is-network-error-5f9e2367.js";import{i as L}from"./persist-store-4b4c2e6c.js";import{p as S}from"./get-public-path-6c4a8950.js";const _=z(null),G=(c,n=N,s=_,i=l)=>{if(E(c)&&i){window.location.assign(g(c==null?void 0:c.message));return}if(A(c)&&i){window.location.assign(g(c==null?void 0:c.message));return}if(W(c))throw n.add("error",`${c.statusCode} ${c.statusText}`),s.set(c),c;typeof c=="string"&&n.add("error",c),c instanceof Error&&n.add("error",c.message)},cn=(c,n=l)=>{var i;const s=`${c==null?void 0:c.status} ${(i=c==null?void 0:c.body)==null?void 0:i.message}`;if(E(c)&&n){window.location.assign(g(s));return}if(A(c)&&n){window.location.assign(g(s));return}},E=c=>(c==null?void 0:c.statusCode)===401||(c==null?void 0:c.status)===401,A=c=>(c==null?void 0:c.statusCode)===403||(c==null?void 0:c.status)===403,sn=c=>(c==null?void 0:c.message)!==void 0&&typeof(c==null?void 0:c.message)=="string",H=async(c,n={},s=10)=>{var T;const{params:i={},request:f=fetch,token:u,shouldRetry:t=!1,notifyOnError:U=!0,handleError:v=G,onRetry:b=O,onError:k,retryInterval:q=5e3,isBrowser:I=l}=n;let{options:w}=n;const x=u?{next_page_token:u}:{},C=new URLSearchParams({...i,...x}),R=P(c,C);try{w=K(w,I),w=await X(w,I);const o=await f(R,w),d=await o.json(),{status:h,statusText:F}=o;if(!o.ok)if(k&&L(k))k({status:h,statusText:F,body:d});else throw{statusCode:o.status,statusText:o.statusText,response:o,message:(T=d==null?void 0:d.message)!=null?T:o.statusText};return d}catch(o){if(U){if(v(o),t&&s>0)return new Promise(d=>{const h=s-1;b(h),setTimeout(()=>{d(H(c,n,h))},q)})}else throw o}},K=(c,n=l)=>{const s={credentials:"include",...c};return s.headers=D(c==null?void 0:c.headers,n),s},X=async(c,n=l)=>($().accessToken?(c.headers=await y(c==null?void 0:c.headers,async()=>$().accessToken,n),c.headers=B(c==null?void 0:c.headers,$().idToken,n)):globalThis!=null&&globalThis.AccessToken&&(c.headers=await y(c==null?void 0:c.headers,globalThis.AccessToken,n)),c),y=async(c,n,s=l)=>{if(c||(c={}),!s)return c;try{const i=await n();i&&(c.Authorization=`Bearer ${i}`)}catch(i){console.error(i)}return c},B=(c={},n,s=l)=>(s&&n&&(c["Authorization-Extras"]=n),c),D=(c,n=l)=>{if(c||(c={}),!n)return c;const s="_csrf=",i="X-CSRF-TOKEN";try{let u=document.cookie.split(";").find(t=>t.includes(s));u&&!c[i]&&(u=u.trim().slice(s.length),c[i]=u)}catch(f){console.error(f)}return c};function J(c=l){const n="",s=!n.startsWith("http");let i="";return s?i=c?window.location.origin+n:"":i=n,i.endsWith("/")&&(i=i.slice(0,-1)),i}const M=(c,n)=>c?c.replace("%namespace%",n):"",Q=async c=>{var s,i;let n="";if((globalThis==null?void 0:globalThis.GetNamespaces)&&c){const f=await globalThis.GetNamespaces(),u=f==null?void 0:f.find(t=>t.namespace===c);n=(i=u==null?void 0:u.webUri)!=null?i:M((s=globalThis==null?void 0:globalThis.AppConfig)==null?void 0:s.apiUrl,c)}else n=J();return n.endsWith("/")&&(n=n.slice(0,-1)),n=`${n}${S}`,n},V=async(c,n)=>(c.startsWith("/")&&(c=c.slice(1)),`${await Q(n)}/api/v1/${c}`),Y=c=>Object.keys(c!=null?c:{}).reduce((n,s)=>(n[s]=encodeURIComponent(encodeURIComponent(c[s])),n),{namespace:"",workflowId:"",scheduleId:"",runId:"",queue:""});function un(c,n,s=!0){s&&(n=Y(n));const i={cluster:"/cluster","events.ascending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events`,"events.descending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events/reverse`,namespaces:"/namespaces",query:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/query`,"schedule.delete":`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,schedule:`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,schedules:`/namespaces/${n==null?void 0:n.namespace}/schedules`,"search-attributes":"/search-attributes",settings:"/settings","task-queue":`/namespaces/${n==null?void 0:n.namespace}/task-queues/${n==null?void 0:n.queue}`,user:"/me","workflow.terminate":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/terminate`,workflow:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}`,"workflows.archived":`/namespaces/${n==null?void 0:n.namespace}/workflows/archived`,workflows:`/namespaces/${n==null?void 0:n.namespace}/workflows`};return V(i[c],n==null?void 0:n.namespace)}export{H as a,cn as b,J as g,G as h,sn as i,_ as n,un as r};
