import{S as te,i as re,s as ne,I as $e,l as k,m as $,n as v,h as c,b,J as ve,K as ye,L as Ee,f as h,af as Ze,ag as xe,t as w,ah as et,al as tt,P as rt,e as ue,g as Je,d as Ke,N as q,w as E,a as W,x as I,c as D,y as T,B as S,r as N,u as U,p as d,M as p,E as ie,Y as Ve,T as Ye,a3 as ze,D as nt,C as Be,V as Re,W as at,R as z,v as ee,am as st}from"../../../../../../chunks/index-8e660855.js";import{p as Ge}from"../../../../../../chunks/stores-f70708fe.js";import{r as Fe,l as ot,w as lt}from"../../../../../../chunks/workflow-run-985fb701.js";import{t as Me}from"../../../../../../chunks/events-f9682b5b.js";import{f as qe}from"../../../../../../chunks/index-77c8c021.js";import{I as it}from"../../../../../../chunks/icon-39b683f1.js";import{e as ft}from"../../../../../../chunks/event-view-c7800548.js";import{w as ut}from"../../../../../../chunks/workflows-211c1683.js";import{t as ct}from"../../../../../../chunks/workflow-service-9915ed9d.js";import{g as fe,h as we,i as ge,j as be,k as ke,l as He}from"../../../../../../chunks/route-for-62d7d3b1.js";import{W as mt}from"../../../../../../chunks/workflow-status-88bb0111.js";import{n as Le}from"../../../../../../chunks/notifications-faca15d4.js";import{r as dt,a as pt}from"../../../../../../chunks/route-for-api-c2cf7683.js";import{B as Xe}from"../../../../../../chunks/button-8f2dcb01.js";import{M as _t}from"../../../../../../chunks/modal-8cd20322.js";import{r as ht}from"../../../../../../chunks/index-71be9f1c.js";import{T as wt}from"../../../../../../chunks/tooltip-bdf6848f.js";import{f as gt}from"../../../../../../chunks/events-service-38252efa.js";import{L as bt}from"../../../../../../chunks/loading-ab7d5c92.js";import"../../../../../../chunks/with-loading-f07bedaf.js";import"../../../../../../chunks/pollers-service-282af5e9.js";import"../../../../../../chunks/is-http-9a6dffcd.js";import"../../../../../../chunks/persist-store-4b4c2e6c.js";import"../../../../../../chunks/decode-payload-6be25ef1.js";import"../../../../../../chunks/data-converter-config-7e60fe97.js";import"../../../../../../chunks/auth-user-f8954649.js";import"../../../../../../chunks/index-9319d41b.js";import"../../../../../../chunks/has-ae9b6b71.js";import"../../../../../../chunks/is-6159121b.js";import"../../../../../../chunks/settings-7aeda309.js";import"../../../../../../chunks/version-check-ee13dce7.js";import"../../../../../../chunks/simplify-attributes-34cbbe81.js";import"../../../../../../chunks/format-date-2e95557a.js";import"../../../../../../chunks/get-public-path-6c4a8950.js";import"../../../../../../chunks/is-network-error-5f9e2367.js";import"../../../../../../chunks/badge-b5d60de0.js";import"../../../../../../chunks/copyable-46fdb031.js";import"../../../../../../chunks/copy-to-clipboard-2ccea087.js";import"../../../../../../chunks/paginated-3141047f.js";import"../../../../../../chunks/index-e9bb0e44.js";import"../../../../../../chunks/get-event-categorization-2cfb578f.js";function kt(a){let e,r,t,s;const n=a[1].default,o=$e(n,a,a[0],null);return{c(){e=k("div"),o&&o.c()},l(l){e=$(l,"DIV",{});var i=v(e);o&&o.l(i),i.forEach(c)},m(l,i){b(l,e,i),o&&o.m(e,null),s=!0},p(l,[i]){o&&o.p&&(!s||i&1)&&ve(o,n,l,l[0],s?Ee(n,l[0],i,null):ye(l[0]),null)},i(l){s||(h(o,l),Ze(()=>{t&&t.end(1),r=xe(e,qe,{y:-50,duration:150,delay:50}),r.start()}),s=!0)},o(l){w(o,l),r&&r.invalidate(),t=et(e,qe,{y:-50,duration:150}),s=!1},d(l){l&&c(e),o&&o.d(l),l&&t&&t.end()}}}function $t(a,e,r){let{$$slots:t={},$$scope:s}=e;return a.$$set=n=>{"$$scope"in n&&r(0,s=n.$$scope)},[s,t]}class vt extends te{constructor(e){super(),re(this,e,$t,kt,ne,{})}}async function yt({workflow:a,namespace:e,reason:r}){const t=await dt("workflow.terminate",{namespace:e,workflowId:a.id,runId:a.runId});return await pt(t,{options:{method:"POST",body:JSON.stringify({reason:r})},shouldRetry:!1,notifyOnError:!1})}const Oe="CoreUser",Et=ht({terminateDisabled:()=>!1}),It=()=>tt(Oe)?rt(Oe):Et;function je(a){let e,r,t,s;return e=new wt({props:{bottomLeft:!0,hide:!a[3],width:200,text:"You do not have permission to terminate this workflow. Contact your admin for assistance.",$$slots:{default:[St]},$$scope:{ctx:a}}}),t=new _t({props:{open:a[2],confirmText:"Terminate",confirmType:"destructive",$$slots:{content:[At],title:[Ct]},$$scope:{ctx:a}}}),t.$on("cancelModal",a[5]),t.$on("confirmModal",a[6]),{c(){E(e.$$.fragment),r=W(),E(t.$$.fragment)},l(n){I(e.$$.fragment,n),r=D(n),I(t.$$.fragment,n)},m(n,o){T(e,n,o),b(n,r,o),T(t,n,o),s=!0},p(n,o){const l={};o&8&&(l.hide=!n[3]),o&16392&&(l.$$scope={dirty:o,ctx:n}),e.$set(l);const i={};o&4&&(i.open=n[2]),o&16386&&(i.$$scope={dirty:o,ctx:n}),t.$set(i)},i(n){s||(h(e.$$.fragment,n),h(t.$$.fragment,n),s=!0)},o(n){w(e.$$.fragment,n),w(t.$$.fragment,n),s=!1},d(n){S(e,n),n&&c(r),S(t,n)}}}function Tt(a){let e;return{c(){e=N("Terminate")},l(r){e=U(r,"Terminate")},m(r,t){b(r,e,t)},d(r){r&&c(e)}}}function St(a){let e,r;return e=new Xe({props:{variant:"destructive",disabled:a[3],dataCy:"terminate-button",$$slots:{default:[Tt]},$$scope:{ctx:a}}}),e.$on("click",a[4]),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,s){const n={};s&8&&(n.disabled=t[3]),s&16384&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function Ct(a){let e,r;return{c(){e=k("h3"),r=N("Terminate Workflow"),this.h()},l(t){e=$(t,"H3",{slot:!0});var s=v(e);r=U(s,"Terminate Workflow"),s.forEach(c),this.h()},h(){d(e,"slot","title")},m(t,s){b(t,e,s),p(e,r)},p:ie,d(t){t&&c(e)}}}function At(a){let e,r,t,s,n,o,l;return{c(){e=k("div"),r=k("p"),t=N(`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),s=W(),n=k("input"),this.h()},l(i){e=$(i,"DIV",{slot:!0});var f=v(e);r=$(f,"P",{});var m=v(r);t=U(m,`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),m.forEach(c),s=D(f),n=$(f,"INPUT",{class:!0,placeholder:!0}),f.forEach(c),this.h()},h(){d(n,"class","mt-4 block w-full rounded-md border border-gray-200 p-2"),d(n,"placeholder","Enter a reason"),d(e,"slot","content")},m(i,f){b(i,e,f),p(e,r),p(r,t),p(e,s),p(e,n),Ve(n,a[1]),o||(l=Ye(n,"input",a[10]),o=!0)},p(i,f){f&2&&n.value!==i[1]&&Ve(n,i[1])},d(i){i&&c(e),o=!1,l()}}}function Wt(a){let e,r,t=a[0].canBeTerminated&&je(a);return{c(){t&&t.c(),e=ue()},l(s){t&&t.l(s),e=ue()},m(s,n){t&&t.m(s,n),b(s,e,n),r=!0},p(s,[n]){s[0].canBeTerminated?t?(t.p(s,n),n&1&&h(t,1)):(t=je(s),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(Je(),w(t,1,1,()=>{t=null}),Ke())},i(s){r||(h(t),r=!0)},o(s){w(t),r=!1},d(s){t&&t.d(s),s&&c(e)}}}function Dt(a,e,r){let t,s,n;q(a,Fe,y=>r(11,n=y));let{workflow:o}=e,{namespace:l}=e,i="",f=!1;const m=()=>r(2,f=!0),C=()=>r(2,f=!1),B=async()=>{r(2,f=!1),r(1,i=""),ze(Fe,n=Date.now(),n),await nt(),Le.add("success","Workflow Terminated")},_=()=>{r(2,f=!1),r(1,i=""),Le.add("error","Cannot Terminate Workflow")},R=()=>{!o.canBeTerminated||yt({workflow:o,namespace:l,reason:i}).then(B).catch(_)};let G=It();q(a,G,y=>r(9,s=y));function oe(){i=this.value,r(1,i)}return a.$$set=y=>{"workflow"in y&&r(0,o=y.workflow),"namespace"in y&&r(8,l=y.namespace)},a.$$.update=()=>{a.$$.dirty&768&&r(3,t=s.terminateDisabled(l))},[o,i,f,t,m,C,R,G,l,s,oe]}class Pt extends te{constructor(e){super(),re(this,e,Dt,Wt,ne,{workflow:0,namespace:8})}}function Nt(a){let e,r;return{c(){e=k("span"),r=N("Download"),this.h()},l(t){e=$(t,"SPAN",{class:!0});var s=v(e);r=U(s,"Download"),s.forEach(c),this.h()},h(){d(e,"class","hidden md:inline")},m(t,s){b(t,e,s),p(e,r)},p:ie,d(t){t&&c(e)}}}function Ut(a){let e,r;return e=new Xe({props:{variant:"secondary",icon:"download",$$slots:{default:[Nt]},$$scope:{ctx:a}}}),e.$on("click",a[0]),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,[s]){const n={};s&16&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function Vt(a,e,r){let{namespace:t}=e,{workflowId:s}=e,{runId:n}=e;const o=async()=>{const l=await gt({namespace:t,workflowId:s,runId:n,sort:"ascending"}),i=JSON.stringify({events:l},null,2);f(i,`${n}/events.json`,"text/plain");function f(m,C,B){const _=document.createElement("a"),R=new Blob([m],{type:B});_.href=URL.createObjectURL(R),_.download=C,_.click()}};return a.$$set=l=>{"namespace"in l&&r(1,t=l.namespace),"workflowId"in l&&r(2,s=l.workflowId),"runId"in l&&r(3,n=l.runId)},[o,t,s,n]}class Bt extends te{constructor(e){super(),re(this,e,Vt,Ut,ne,{namespace:1,workflowId:2,runId:3})}}function Rt(a){let e,r,t,s;function n(i,f){return i[2]||i[2]===0?qt:Mt}let o=n(a),l=o(a);return{c(){e=k("div"),l.c(),this.h()},l(i){e=$(i,"DIV",{class:!0,"data-cy":!0});var f=v(e);l.l(f),f.forEach(c),this.h()},h(){d(e,"class","block cursor-pointer whitespace-nowrap border-b-2 border-white text-sm hover:border-b-2 hover:border-blue-700 md:text-base svelte-1gctro0"),d(e,"data-cy",r=a[5].dataCy),z(e,"active",a[3]),z(e,"disabled",a[4])},m(i,f){b(i,e,f),l.m(e,null),t||(s=Ye(e,"click",a[6]),t=!0)},p(i,f){o===(o=n(i))&&l?l.p(i,f):(l.d(1),l=o(i),l&&(l.c(),l.m(e,null))),f&32&&r!==(r=i[5].dataCy)&&d(e,"data-cy",r),f&8&&z(e,"active",i[3]),f&16&&z(e,"disabled",i[4])},d(i){i&&c(e),l.d(),t=!1,s()}}}function Ft(a){let e,r;function t(o,l){return o[2]||o[2]===0?Lt:Ht}let s=t(a),n=s(a);return{c(){e=k("a"),n.c(),this.h()},l(o){e=$(o,"A",{class:!0,href:!0,"data-cy":!0});var l=v(e);n.l(l),l.forEach(c),this.h()},h(){d(e,"class","block whitespace-nowrap border-b-2 border-white text-sm hover:border-b-2 hover:border-blue-700 md:text-base svelte-1gctro0"),d(e,"href",a[0]),d(e,"data-cy",r=a[5].dataCy),z(e,"active",a[3]),z(e,"disabled",a[4])},m(o,l){b(o,e,l),n.m(e,null)},p(o,l){s===(s=t(o))&&n?n.p(o,l):(n.d(1),n=s(o),n&&(n.c(),n.m(e,null))),l&1&&d(e,"href",o[0]),l&32&&r!==(r=o[5].dataCy)&&d(e,"data-cy",r),l&8&&z(e,"active",o[3]),l&16&&z(e,"disabled",o[4])},d(o){o&&c(e),n.d()}}}function Mt(a){let e;return{c(){e=N(a[1])},l(r){e=U(r,a[1])},m(r,t){b(r,e,t)},p(r,t){t&2&&ee(e,r[1])},d(r){r&&c(e)}}}function qt(a){let e,r,t,s;return{c(){e=N(a[1]),r=W(),t=k("span"),s=N(a[2]),this.h()},l(n){e=U(n,a[1]),r=D(n),t=$(n,"SPAN",{class:!0});var o=v(t);s=U(o,a[2]),o.forEach(c),this.h()},h(){d(t,"class","rounded-sm bg-blue-100 px-2 text-blue-700")},m(n,o){b(n,e,o),b(n,r,o),b(n,t,o),p(t,s)},p(n,o){o&2&&ee(e,n[1]),o&4&&ee(s,n[2])},d(n){n&&c(e),n&&c(r),n&&c(t)}}}function Ht(a){let e;return{c(){e=N(a[1])},l(r){e=U(r,a[1])},m(r,t){b(r,e,t)},p(r,t){t&2&&ee(e,r[1])},d(r){r&&c(e)}}}function Lt(a){let e,r,t,s;return{c(){e=N(a[1]),r=W(),t=k("span"),s=N(a[2]),this.h()},l(n){e=U(n,a[1]),r=D(n),t=$(n,"SPAN",{class:!0});var o=v(t);s=U(o,a[2]),o.forEach(c),this.h()},h(){d(t,"class","rounded-sm bg-blue-100 px-2 text-blue-700")},m(n,o){b(n,e,o),b(n,r,o),b(n,t,o),p(t,s)},p(n,o){o&2&&ee(e,n[1]),o&4&&ee(s,n[2])},d(n){n&&c(e),n&&c(r),n&&c(t)}}}function Ot(a){let e;function r(n,o){return n[0]?Ft:Rt}let t=r(a),s=t(a);return{c(){s.c(),e=ue()},l(n){s.l(n),e=ue()},m(n,o){s.m(n,o),b(n,e,o)},p(n,[o]){t===(t=r(n))&&s?s.p(n,o):(s.d(1),s=t(n),s&&(s.c(),s.m(e.parentNode,e)))},i:ie,o:ie,d(n){s.d(n),n&&c(e)}}}function jt(a,e,r){let{href:t=""}=e,{label:s}=e,{amount:n=null}=e,{active:o=!1}=e,{disabled:l=!1}=e;function i(f){at.call(this,a,f)}return a.$$set=f=>{r(5,e=Be(Be({},e),Re(f))),"href"in f&&r(0,t=f.href),"label"in f&&r(1,s=f.label),"amount"in f&&r(2,n=f.amount),"active"in f&&r(3,o=f.active),"disabled"in f&&r(4,l=f.disabled)},e=Re(e),[t,s,n,o,l,e,i]}class le extends te{constructor(e){super(),re(this,e,jt,Ot,ne,{href:0,label:1,amount:2,active:3,disabled:4})}}const Qe=a=>{const e=a==null?void 0:a.indexOf("?");return e>-1?a.slice(0,e):a},V=(a,e,r=!1)=>{const t=Qe(a).split("/"),s=Qe(e).split("/");if(r&&t.length!==s.length)return!1;for(let n=0;n<t.length;n++){const o=t[n],l=s[n];if(o!==l)return!1}return!0};function Qt(a){var Ie,Te,Se,Ce,Ae;let e,r,t,s,n,o,l,i,f,m,C,B,_,R=a[1].id+"",G,oe,y,H,ce,L,me,A,O,de,j,pe,Q,_e,J,he,K,ae;return n=new it({props:{name:"chevron-left",class:"inline"}}),C=new mt({props:{status:(Ie=a[1])==null?void 0:Ie.status}}),H=new Bt({props:{namespace:a[0],workflowId:a[1].id,runId:a[1].runId}}),L=new Pt({props:{workflow:a[1],namespace:a[0]}}),O=new le({props:{label:"History",href:fe({view:a[3],...a[5]}),amount:(Te=a[1])==null?void 0:Te.historyEvents,dataCy:"history-tab",active:V(a[4].url.pathname,fe({view:a[3],...a[5]}))}}),j=new le({props:{label:"Workers",href:we(a[5]),amount:(Ce=(Se=a[2])==null?void 0:Se.pollers)==null?void 0:Ce.length,dataCy:"workers-tab",active:V(a[4].url.pathname,we(a[5]))}}),Q=new le({props:{label:"Pending Activities",href:ge(a[5]),amount:(Ae=a[1].pendingActivities)==null?void 0:Ae.length,dataCy:"pending-activities-tab",active:V(a[4].url.pathname,ge(a[5]))}}),J=new le({props:{label:"Stack Trace",href:be(a[5]),dataCy:"stack-trace-tab",active:V(a[4].url.pathname,be(a[5]))}}),K=new le({props:{label:"Queries",href:ke(a[5]),dataCy:"queries-tab",active:V(a[4].url.pathname,ke(a[5]))}}),{c(){e=k("header"),r=k("main"),t=k("div"),s=k("a"),E(n.$$.fragment),o=N("Back to Workflows"),i=W(),f=k("div"),m=k("h1"),E(C.$$.fragment),B=W(),_=k("span"),G=N(R),oe=W(),y=k("div"),E(H.$$.fragment),ce=W(),E(L.$$.fragment),me=W(),A=k("nav"),E(O.$$.fragment),de=W(),E(j.$$.fragment),pe=W(),E(Q.$$.fragment),_e=W(),E(J.$$.fragment),he=W(),E(K.$$.fragment),this.h()},l(u){e=$(u,"HEADER",{class:!0});var g=v(e);r=$(g,"MAIN",{class:!0});var F=v(r);t=$(F,"DIV",{class:!0});var X=v(t);s=$(X,"A",{href:!0,"data-cy":!0,class:!0});var Z=v(s);I(n.$$.fragment,Z),o=U(Z,"Back to Workflows"),Z.forEach(c),X.forEach(c),i=D(F),f=$(F,"DIV",{class:!0});var M=v(f);m=$(M,"H1",{class:!0});var Y=v(m);I(C.$$.fragment,Y),B=D(Y),_=$(Y,"SPAN",{class:!0});var se=v(_);G=U(se,R),se.forEach(c),Y.forEach(c),oe=D(M),y=$(M,"DIV",{class:!0});var x=v(y);I(H.$$.fragment,x),ce=D(x),I(L.$$.fragment,x),x.forEach(c),M.forEach(c),me=D(F),A=$(F,"NAV",{class:!0});var P=v(A);I(O.$$.fragment,P),de=D(P),I(j.$$.fragment,P),pe=D(P),I(Q.$$.fragment,P),_e=D(P),I(J.$$.fragment,P),he=D(P),I(K.$$.fragment,P),P.forEach(c),F.forEach(c),g.forEach(c),this.h()},h(){d(s,"href",l=`/namespaces/${a[0]}/workflows?query=${He(a[7])}&search=${a[6]}`),d(s,"data-cy","back-to-workflows"),d(s,"class","back-to-workflows svelte-st9g8m"),d(t,"class","-mt-3 -ml-2 block"),d(_,"class","select-all font-medium"),d(m,"class","relative flex items-center gap-4 text-2xl"),d(y,"class","ml-8 flex items-center justify-end gap-4"),d(f,"class","mb-8 flex items-center justify-between"),d(A,"class","flex flex-wrap gap-6"),d(r,"class","relative flex flex-col gap-1"),d(e,"class","mb-4 flex flex-col gap-4")},m(u,g){b(u,e,g),p(e,r),p(r,t),p(t,s),T(n,s,null),p(s,o),p(r,i),p(r,f),p(f,m),T(C,m,null),p(m,B),p(m,_),p(_,G),p(f,oe),p(f,y),T(H,y,null),p(y,ce),T(L,y,null),p(r,me),p(r,A),T(O,A,null),p(A,de),T(j,A,null),p(A,pe),T(Q,A,null),p(A,_e),T(J,A,null),p(A,he),T(K,A,null),ae=!0},p(u,[g]){var We,De,Pe,Ne,Ue;(!ae||g&1&&l!==(l=`/namespaces/${u[0]}/workflows?query=${He(u[7])}&search=${u[6]}`))&&d(s,"href",l);const F={};g&2&&(F.status=(We=u[1])==null?void 0:We.status),C.$set(F),(!ae||g&2)&&R!==(R=u[1].id+"")&&ee(G,R);const X={};g&1&&(X.namespace=u[0]),g&2&&(X.workflowId=u[1].id),g&2&&(X.runId=u[1].runId),H.$set(X);const Z={};g&2&&(Z.workflow=u[1]),g&1&&(Z.namespace=u[0]),L.$set(Z);const M={};g&8&&(M.href=fe({view:u[3],...u[5]})),g&2&&(M.amount=(De=u[1])==null?void 0:De.historyEvents),g&24&&(M.active=V(u[4].url.pathname,fe({view:u[3],...u[5]}))),O.$set(M);const Y={};g&4&&(Y.amount=(Ne=(Pe=u[2])==null?void 0:Pe.pollers)==null?void 0:Ne.length),g&16&&(Y.active=V(u[4].url.pathname,we(u[5]))),j.$set(Y);const se={};g&2&&(se.amount=(Ue=u[1].pendingActivities)==null?void 0:Ue.length),g&16&&(se.active=V(u[4].url.pathname,ge(u[5]))),Q.$set(se);const x={};g&16&&(x.active=V(u[4].url.pathname,be(u[5]))),J.$set(x);const P={};g&16&&(P.active=V(u[4].url.pathname,ke(u[5]))),K.$set(P)},i(u){ae||(h(n.$$.fragment,u),h(C.$$.fragment,u),h(H.$$.fragment,u),h(L.$$.fragment,u),h(O.$$.fragment,u),h(j.$$.fragment,u),h(Q.$$.fragment,u),h(J.$$.fragment,u),h(K.$$.fragment,u),ae=!0)},o(u){w(n.$$.fragment,u),w(C.$$.fragment,u),w(H.$$.fragment,u),w(L.$$.fragment,u),w(O.$$.fragment,u),w(j.$$.fragment,u),w(Q.$$.fragment,u),w(J.$$.fragment,u),w(K.$$.fragment,u),ae=!1},d(u){u&&c(e),S(n),S(C),S(H),S(L),S(O),S(j),S(Q),S(J),S(K)}}}function Jt(a,e,r){let t,s,n;q(a,ut,_=>r(8,t=_)),q(a,ft,_=>r(3,s=_)),q(a,Ge,_=>r(4,n=_));let{namespace:o}=e,{workflow:l}=e,{workers:i}=e;const f={namespace:o,workflow:l.id,run:l.runId},{parameters:m,searchType:C}=t,B=ct(m);return a.$$set=_=>{"namespace"in _&&r(0,o=_.namespace),"workflow"in _&&r(1,l=_.workflow),"workers"in _&&r(2,i=_.workers)},[o,l,i,s,n,f,C,B]}class Kt extends te{constructor(e){super(),re(this,e,Jt,Qt,ne,{namespace:0,workflow:1,workers:2})}}function Yt(a){let e,r;return e=new vt({props:{$$slots:{default:[Gt]},$$scope:{ctx:a}}}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,s){const n={};s&18&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function zt(a){let e,r;return e=new bt({}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p:ie,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function Gt(a){let e,r,t;e=new Kt({props:{namespace:a[2],workflow:a[1].workflow,workers:a[1].workers}});const s=a[3].default,n=$e(s,a,a[4],null);return{c(){E(e.$$.fragment),r=W(),n&&n.c()},l(o){I(e.$$.fragment,o),r=D(o),n&&n.l(o)},m(o,l){T(e,o,l),b(o,r,l),n&&n.m(o,l),t=!0},p(o,l){const i={};l&2&&(i.workflow=o[1].workflow),l&2&&(i.workers=o[1].workers),e.$set(i),n&&n.p&&(!t||l&16)&&ve(n,s,o,o[4],t?Ee(s,o[4],l,null):ye(o[4]),null)},i(o){t||(h(e.$$.fragment,o),h(n,o),t=!0)},o(o){w(e.$$.fragment,o),w(n,o),t=!1},d(o){S(e,o),o&&c(r),n&&n.d(o)}}}function Xt(a){let e,r,t,s;const n=[zt,Yt],o=[];function l(i,f){return i[0]?0:1}return r=l(a),t=o[r]=n[r](a),{c(){e=k("main"),t.c(),this.h()},l(i){e=$(i,"MAIN",{class:!0});var f=v(e);t.l(f),f.forEach(c),this.h()},h(){d(e,"class","flex h-full flex-col gap-6")},m(i,f){b(i,e,f),o[r].m(e,null),s=!0},p(i,[f]){let m=r;r=l(i),r===m?o[r].p(i,f):(Je(),w(o[m],1,1,()=>{o[m]=null}),Ke(),t=o[r],t?t.p(i,f):(t=o[r]=n[r](i),t.c()),h(t,1),t.m(e,null))},i(i){s||(h(t),s=!0)},o(i){w(t),s=!1},d(i){i&&c(e),o[r].d()}}}function Zt(a,e,r){let t,s,n,o;q(a,Me,m=>r(5,t=m)),q(a,Ge,m=>r(6,s=m)),q(a,ot,m=>r(0,n=m)),q(a,lt,m=>r(1,o=m));let{$$slots:l={},$$scope:i}=e;const{namespace:f}=s.params;return st(()=>{ze(Me,t=null,t)}),a.$$set=m=>{"$$scope"in m&&r(4,i=m.$$scope)},[n,o,f,l,i]}class xt extends te{constructor(e){super(),re(this,e,Zt,Xt,ne,{})}}function er(a){let e;const r=a[0].default,t=$e(r,a,a[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&2)&&ve(t,r,s,s[1],e?Ee(r,s[1],n,null):ye(s[1]),null)},i(s){e||(h(t,s),e=!0)},o(s){w(t,s),e=!1},d(s){t&&t.d(s)}}}function tr(a){let e,r;return e=new xt({props:{$$slots:{default:[er]},$$scope:{ctx:a}}}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,[s]){const n={};s&2&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function rr(a,e,r){let{$$slots:t={},$$scope:s}=e;return a.$$set=n=>{"$$scope"in n&&r(1,s=n.$$scope)},[t,s]}class jr extends te{constructor(e){super(),re(this,e,rr,tr,ne,{})}}export{jr as default};