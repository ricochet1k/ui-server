var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var W=(t,e,s)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,h=(t,e)=>{for(var s in e||(e={}))O.call(e,s)&&W(t,s,e[s]);if(b)for(var s of b(e))x.call(e,s)&&W(t,s,e[s]);return t},T=(t,e)=>Y(t,Z(e));var N=(t,e)=>{var s={};for(var n in t)O.call(t,n)&&e.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&b)for(var n of b(t))e.indexOf(n)<0&&x.call(t,n)&&(s[n]=t[n]);return s};import{h as $,r as y}from"./request-from-api-ea26a6d7.js";import{s as A,a as ee,d as te}from"./data-converter-config-53dafe45.js";import{ak as se,al as ne,am as ae,an as re,S as F,i as j,s as q,e as P,t as oe,c as C,a as I,g as ie,d as _,b as d,ao as k,f as v,K as le,h as ce,Q as R,l as z,r as ue,u as g,w as fe,x as p,aa as D,J,T as E,V as B,L,M,N as Q}from"./vendor-6d2fcc6d.js";const H=t=>{var m,w;const e=t.workflowExecutionInfo.type.name,s=t.workflowExecutionInfo.execution.workflowId,n=t.workflowExecutionInfo.execution.runId,r=String(t.workflowExecutionInfo.startTime),o=String(t.workflowExecutionInfo.closeTime),c=t.workflowExecutionInfo.status,i=t.workflowExecutionInfo.historyLength,a=`/workflows/${s}/${n}`,l=(w=(m=t==null?void 0:t.executionConfig)==null?void 0:m.taskQueue)==null?void 0:w.name,f=t.pendingActivities||[];return{name:e,id:s,runId:n,startTime:r,endTime:o,status:c,historyEvents:i,url:a,taskQueue:l,pendingActivities:f}},de=t=>(t.executions||[]).map(e=>H({workflowExecutionInfo:e})),me=/(\d+)\s(years|months|weeks|days|hours|minutes|seconds)/,_e=t=>{const[,e,s]=t.match(me);return{[s]:parseInt(e,10)}},S=t=>typeof t=="function",K=(t={},e={})=>{const s=h({},t);for(const n of Object.keys(e)){const r=s[n];Array.isArray(r)?s[n]=s[n].concat(e[n]):typeof r=="object"&&!Array.isArray(r)?s[n]=K(s[n],e[n]):s[n]=e[n]}return s},U=async(t,{onStart:e,onUpdate:s,onComplete:n,onError:r=$,token:o,previousProps:c}={})=>{!c&&S(e)&&e();try{const i=await t(o),{nextPageToken:l}=i,f=N(i,["nextPageToken"]),m=K(c,f);return S(s)&&s(m,f),l?U(t,{onStart:e,onUpdate:s,onComplete:n,token:l,previousProps:m}):(S(n)&&n(m),m)}catch(a){r(a)}},he=async({namespace:t,executionId:e,runId:s,rawPayloads:n=!1,onStart:r,onUpdate:o,onComplete:c},i=fetch)=>{let a={};return n&&(a={params:{rawPayloads:JSON.stringify(!0)}}),await U(async f=>y(`/namespaces/${t}/workflows/${e}/executions/${s}/events`,h({token:f,request:i},a)),{onStart:r,onUpdate:o,onComplete:c})};function ke(t){const e=Object.keys(t).find(s=>s.includes("Attributes"));return h({type:e},t[e])}const we=t=>t.history.events.map(e=>T(h({},e),{id:String(e.eventId),eventType:e.eventType,attributes:ke(e)})),be=t=>t==="Running"?"1":t==="Completed"?"2":t==="Failed"?"3":t==="Canceled"?"4":t==="Terminated"?"5":t==="ContinuedAsNew"?"6":t==="TimedOut"?"7":null,ye=async(t,e)=>{let s=null;try{s=new se(`ws://localhost:${e}/`,{packMessage:n=>JSON.stringify(n),unpackMessage:n=>JSON.parse(n),attachRequestId:(n,r)=>Object.assign({requestId:r},n),extractRequestId:n=>n&&n.requestId})}catch(n){return A(),Promise.reject(n)}try{await s.open();const n=[];return t.forEach(r=>{let o=[];switch(r.attributes.type){case"activityTaskCompletedEventAttributes":o=r.attributes.result.payloads;break;case"signalExternalWorkflowExecutionInitiatedEventAttributes":case"workflowExecutionStartedEventAttributes":case"activityTaskScheduledEventAttributes":o=r.attributes.input.payloads;break}o.forEach(c=>{n.push(s.sendRequest({payload:JSON.stringify(c)}).then(i=>{let a=null;try{a=JSON.parse(i.content),ee()}catch{a=i.content,A()}switch(r.attributes.type){case"activityTaskCompletedEventAttributes":r.attributes.result.payloads=a;break;case"signalExternalWorkflowExecutionInitiatedEventAttributes":case"workflowExecutionStartedEventAttributes":case"activityTaskScheduledEventAttributes":r.attributes.input.payloads=a;break}}))})}),await Promise.all(n),Promise.resolve(t)}catch(n){const r=`Unable to convert event payload: ${n}`;return A(),Promise.reject({message:r})}finally{s.isOpened&&await s.close()}},V=t=>{const e=typeof t=="string"?_e(t):t;return ae(re(new Date,e))},G=()=>Promise.resolve({executions:[]}),ve=(t,{timeRange:e,status:s},n=fetch)=>s&&s!=="Running"?G():y(`/namespaces/${t}/workflows/open`,{params:{"start_time_filter.earliest_time":V(e||{hours:24})},request:n}),ge=(t,{timeRange:e,status:s},n=fetch)=>{if(s==="Running")return G();const r={"start_time_filter.earliest_time":V(e||{hours:24})},o=be(s);return o&&(r["status_filter.status"]=o),y(`/namespaces/${t}/workflows/closed`,{params:r,request:n})},Ne=async(t,{timeRange:e,status:s},n=fetch)=>{const[r,o]=await Promise.all([ve(t,{timeRange:e,status:s},n),ge(t,{timeRange:e,status:s},n)]),c=[...r==null?void 0:r.executions,...o==null?void 0:o.executions];return{workflows:de({executions:c}),nextPageTokens:{open:r.nextPageToken,closed:o.nextPageToken}}};async function pe({executionId:t,runId:e,namespace:s},n=fetch){return y(`/namespaces/${s}/workflows/${t}/executions/${e}`,{request:n}).then(H)}async function Fe(t,e=fetch){const s=ne(te),[n,r]=await Promise.all([pe(t,e),he(T(h({},t),{rawPayloads:Boolean(s)}),e).then(we).then(async o=>{if(s!==null)try{await ye(o,s)}catch{}return Promise.resolve(o)})]);return{workflow:n,events:r}}const je=(t,e)=>{if(!!e)return`/namespaces/${t}/workflows/${e.id}/${e.runId}`};function Ee(t){let e,s,n;return{c(){e=P("span"),s=oe(t[0]),this.h()},l(r){e=C(r,"SPAN",{class:!0});var o=I(e);s=ie(o,t[0]),o.forEach(_),this.h()},h(){d(e,"class",n=""+(k(`${t[1]} rounded-xl text-center px-2 text-sm`)+" svelte-159bzvh"))},m(r,o){v(r,e,o),le(e,s)},p(r,[o]){o&1&&ce(s,r[0]),o&2&&n!==(n=""+(k(`${r[1]} rounded-xl text-center px-2 text-sm`)+" svelte-159bzvh"))&&d(e,"class",n)},i:R,o:R,d(r){r&&_(e)}}}function Te(t,e,s){let n,r,{status:o}=e;const c={Running:"Running",TimedOut:"Timed",Completed:"Completed",Failed:"Failed",ContinuedAsNew:"Continued",Canceled:"Canceled",Terminated:"Terminated"},i={Running:"green",TimedOut:"yellow",Completed:"blue",Failed:"red",ContinuedAsNew:"indigo",Canceled:"purple",Terminated:"pink"};return t.$$set=a=>{"status"in a&&s(2,o=a.status)},t.$$.update=()=>{t.$$.dirty&4&&s(1,n=i[o]),t.$$.dirty&4&&s(0,r=c[o])},[r,n,o]}class qe extends F{constructor(e){super();j(this,e,Te,Ee,q,{status:2})}}function Ae(t){let e,s,n,r,o;const c=t[7].default,i=J(c,t,t[6],null);return{c(){e=P("a"),i&&i.c(),this.h()},l(a){e=C(a,"A",{href:!0,disabled:!0,class:!0});var l=I(e);i&&i.l(l),l.forEach(_),this.h()},h(){d(e,"href",t[5]),d(e,"disabled",t[0]),d(e,"class",s=""+(k(`${t[4]} ${t[1]}`)+" svelte-11brngx")),E(e,"selected",t[3])},m(a,l){v(a,e,l),i&&i.m(e,null),n=!0,r||(o=B(e,"click",t[9]),r=!0)},p(a,l){i&&i.p&&(!n||l&64)&&L(i,c,a,a[6],n?Q(c,a[6],l,null):M(a[6]),null),(!n||l&32)&&d(e,"href",a[5]),(!n||l&1)&&d(e,"disabled",a[0]),(!n||l&18&&s!==(s=""+(k(`${a[4]} ${a[1]}`)+" svelte-11brngx")))&&d(e,"class",s),l&26&&E(e,"selected",a[3])},i(a){n||(p(i,a),n=!0)},o(a){g(i,a),n=!1},d(a){a&&_(e),i&&i.d(a),r=!1,o()}}}function Pe(t){let e,s,n,r,o;const c=t[7].default,i=J(c,t,t[6],null);return{c(){e=P("button"),i&&i.c(),this.h()},l(a){e=C(a,"BUTTON",{class:!0});var l=I(e);i&&i.l(l),l.forEach(_),this.h()},h(){e.disabled=t[0],d(e,"class",s=""+(k(`${t[4]} ${t[1]}`)+" svelte-11brngx")),E(e,"selected",t[3])},m(a,l){v(a,e,l),i&&i.m(e,null),n=!0,r||(o=B(e,"click",t[8]),r=!0)},p(a,l){i&&i.p&&(!n||l&64)&&L(i,c,a,a[6],n?Q(c,a[6],l,null):M(a[6]),null),(!n||l&1)&&(e.disabled=a[0]),(!n||l&18&&s!==(s=""+(k(`${a[4]} ${a[1]}`)+" svelte-11brngx")))&&d(e,"class",s),l&26&&E(e,"selected",a[3])},i(a){n||(p(i,a),n=!0)},o(a){g(i,a),n=!1},d(a){a&&_(e),i&&i.d(a),r=!1,o()}}}function Ce(t){let e,s,n,r;const o=[Pe,Ae],c=[];function i(a,l){return a[2]==="button"?0:1}return e=i(t),s=c[e]=o[e](t),{c(){s.c(),n=z()},l(a){s.l(a),n=z()},m(a,l){c[e].m(a,l),v(a,n,l),r=!0},p(a,[l]){let f=e;e=i(a),e===f?c[e].p(a,l):(ue(),g(c[f],1,1,()=>{c[f]=null}),fe(),s=c[e],s?s.p(a,l):(s=c[e]=o[e](a),s.c()),p(s,1),s.m(n.parentNode,n))},i(a){r||(p(s),r=!0)},o(a){g(s),r=!1},d(a){c[e].d(a),a&&_(n)}}}function Ie(t,e,s){let{$$slots:n={},$$scope:r}=e,{disabled:o=!1}=e,{variant:c="primary"}=e,{as:i="button"}=e,{active:a=!1}=e,{size:l="small"}=e,{href:f=null}=e;function m(u){D.call(this,t,u)}function w(u){D.call(this,t,u)}return t.$$set=u=>{"disabled"in u&&s(0,o=u.disabled),"variant"in u&&s(1,c=u.variant),"as"in u&&s(2,i=u.as),"active"in u&&s(3,a=u.active),"size"in u&&s(4,l=u.size),"href"in u&&s(5,f=u.href),"$$scope"in u&&s(6,r=u.$$scope)},[o,c,i,a,l,f,r,n,m,w]}class Re extends F{constructor(e){super();j(this,e,Ie,Ce,q,{disabled:0,variant:1,as:2,active:3,size:4,href:5})}}export{Re as B,qe as W,Fe as a,Ne as f,je as g,S as i};
