import{S as Z,i as x,s as ee,e as k,t as B,c as w,a as z,h as H,d as p,g as v,M as F,j as ae,a9 as oe,k as S,w as N,m as y,x as I,b,y as E,aa as de,ab as Pe,T as se,ac as Ae,q as $,o as d,B as C,G as Re,N as X,v as He,O as qe,_ as Te,E as P,l as O,n as q,p as T,R as U,ad as Oe,I as Y,Y as Ue,H as me,J as K,K as J,L as Q,a8 as ne,ae as We,af as ve,f as Ge}from"../chunks/index-a913e400.js";import{p as pe}from"../chunks/stores-34c141af.js";import{a as Me,g as fe}from"../chunks/navigation-6709cf39.js";import{r as le,a as Ye,b as Ke,c as Je}from"../chunks/route-for-0fcfcb54.js";import{I as W}from"../chunks/index-f7be1e29.js";import{v as Qe,F as Xe}from"../chunks/feature-tag-0f87d7df.js";import{n as re,a as Ze}from"../chunks/nav-open-4cb7220a.js";import{N as xe,a as G}from"../chunks/_nav-row-e0a9ea15.js";import{E as Be}from"../chunks/empty-state-1d3c440c.js";import{T as te}from"../chunks/tooltip-1ef43f1f.js";import{D as et}from"../chunks/data-encoder-status-47acf89a.js";import{l as ue}from"../chunks/namespaces-4b5056c0.js";import{g as tt}from"../chunks/get-api-origin-7e36d6d7.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/persist-store-1373753b.js";import"../chunks/index-de429506.js";import"../chunks/is-function-b969a126.js";import"../chunks/copyable-2074d3f9.js";import"../chunks/copy-to-clipboard-e19b63bd.js";import"../chunks/data-converter-config-7122577a.js";import"../chunks/is-http-c467dd4a.js";import"../chunks/modal-5a5e4495.js";import"../chunks/button-da65b156.js";import"../chunks/badge-5aadb1e2.js";/* empty css                                                     */function he(a,e,n){const t=a.slice();return t[12]=e[n],t}function ge(a){let e,n,t=a[4].params.namespace+"",l;return{c(){e=k("p"),n=B("You are currently viewing "),l=B(t)},l(i){e=w(i,"P",{});var s=z(e);n=H(s,"You are currently viewing "),l=H(s,t),s.forEach(p)},m(i,s){v(i,e,s),F(e,n),F(e,l)},p(i,s){s&16&&t!==(t=i[4].params.namespace+"")&&ae(l,t)},d(i){i&&p(e)}}}function lt(a){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function nt(a){let e,n,t,l;const i=[at,st],s=[];function o(r,u){return r[11]?0:1}return e=o(a),n=s[e]=i[e](a),{c(){n.c(),t=O()},l(r){n.l(r),t=O()},m(r,u){s[e].m(r,u),v(r,t,u),l=!0},p(r,u){let m=e;e=o(r),e===m?s[e].p(r,u):(q(),d(s[m],1,1,()=>{s[m]=null}),T(),n=s[e],n?n.p(r,u):(n=s[e]=i[e](r),n.c()),$(n,1),n.m(t.parentNode,t))},i(r){l||($(n),l=!0)},o(r){d(n),l=!1},d(r){s[e].d(r),r&&p(t)}}}function st(a){let e,n;return e=new Be({props:{title:"Could not list Namespaces"}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p:P,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function at(a){let e,n,t=a[11].filter(a[8]),l=[];for(let o=0;o<t.length;o+=1)l[o]=we(he(a,t,o));const i=o=>d(l[o],1,1,()=>{l[o]=null});let s=null;return t.length||(s=be()),{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=O(),s&&s.c()},l(o){for(let r=0;r<l.length;r+=1)l[r].l(o);e=O(),s&&s.l(o)},m(o,r){for(let u=0;u<l.length;u+=1)l[u].m(o,r);v(o,e,r),s&&s.m(o,r),n=!0},p(o,r){if(r&26){t=o[11].filter(o[8]);let u;for(u=0;u<t.length;u+=1){const m=he(o,t,u);l[u]?(l[u].p(m,r),$(l[u],1)):(l[u]=we(m),l[u].c(),$(l[u],1),l[u].m(e.parentNode,e))}for(q(),u=t.length;u<l.length;u+=1)i(u);T(),!t.length&&s?s.p(o,r):t.length?s&&(q(),d(s,1,1,()=>{s=null}),T()):(s=be(),s.c(),$(s,1),s.m(e.parentNode,e))}},i(o){if(!n){for(let r=0;r<t.length;r+=1)$(l[r]);n=!0}},o(o){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)d(l[r]);n=!1},d(o){Oe(l,o),o&&p(e),s&&s.d(o)}}}function be(a){let e,n;return e=new Be({props:{title:"No Namespaces"}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p:P,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function ke(a){let e,n;return e=new W({props:{stroke:"currentcolor",name:"checkMark"}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function we(a){var h;let e,n,t,l,i=a[12].namespace+"",s,o,r,u,m,c,f=a[12].namespace===((h=a[4].params)==null?void 0:h.namespace)&&ke();function _(){return a[9](a[12])}return{c(){e=k("li"),n=k("div"),f&&f.c(),t=S(),l=k("a"),s=B(i),r=S(),this.h()},l(L){e=w(L,"LI",{class:!0});var V=z(e);n=w(V,"DIV",{class:!0});var j=z(n);f&&f.l(j),j.forEach(p),t=y(V),l=w(V,"A",{href:!0,class:!0});var A=z(l);s=H(A,i),A.forEach(p),r=y(V),V.forEach(p),this.h()},h(){var L;b(n,"class","w-6 h-6 pl-3 active svelte-12338m3"),b(l,"href",o=a[12].href),b(l,"class","link svelte-12338m3"),U(l,"active",a[12].namespace===((L=a[4].params)==null?void 0:L.namespace)),b(e,"class","first:rounded-t-md first:border-t last:rounded-b-md border-b border-l border-r p-3 flex border-collapse gap-2 hover:bg-gray-50 cursor-pointer")},m(L,V){v(L,e,V),F(e,n),f&&f.m(n,null),F(e,t),F(e,l),F(l,s),F(e,r),u=!0,m||(c=se(e,"click",_),m=!0)},p(L,V){var j,A;a=L,a[12].namespace===((j=a[4].params)==null?void 0:j.namespace)?f?V&26&&$(f,1):(f=ke(),f.c(),$(f,1),f.m(n,null)):f&&(q(),d(f,1,1,()=>{f=null}),T()),(!u||V&10)&&i!==(i=a[12].namespace+"")&&ae(s,i),(!u||V&10&&o!==(o=a[12].href))&&b(l,"href",o),V&26&&U(l,"active",a[12].namespace===((A=a[4].params)==null?void 0:A.namespace))},i(L){u||($(f),u=!0)},o(L){d(f),u=!1},d(L){L&&p(e),f&&f.d(),m=!1,c()}}}function it(a){let e;return{c(){e=B("Loading ...")},l(n){e=H(n,"Loading ...")},m(n,t){v(n,e,t)},p:P,i:P,o:P,d(n){n&&p(e)}}}function rt(a){var g;let e,n,t,l,i,s,o,r,u,m,c,f,_,h,L,V,j=((g=a[4].params)==null?void 0:g.namespace)&&ge(a);r=new W({props:{name:"search",scale:1}});let A={ctx:a,current:null,token:null,hasCatch:!1,pending:it,then:nt,catch:lt,value:11,blocks:[,,,]};return oe(_=a[1],A),{c(){e=k("div"),n=k("h2"),t=B("Select a namespace"),l=S(),j&&j.c(),i=S(),s=k("div"),o=k("div"),N(r.$$.fragment),u=S(),m=k("input"),c=S(),f=k("ul"),A.block.c(),this.h()},l(D){e=w(D,"DIV",{class:!0});var R=z(e);n=w(R,"H2",{class:!0});var M=z(n);t=H(M,"Select a namespace"),M.forEach(p),l=y(R),j&&j.l(R),R.forEach(p),i=y(D),s=w(D,"DIV",{class:!0});var ie=z(s);o=w(ie,"DIV",{class:!0});var _e=z(o);I(r.$$.fragment,_e),_e.forEach(p),u=y(ie),m=w(ie,"INPUT",{class:!0,placeholder:!0}),ie.forEach(p),c=y(D),f=w(D,"UL",{"data-cy":!0});var $e=z(f);A.block.l($e),$e.forEach(p),this.h()},h(){b(n,"class","text-2xl"),b(e,"class","prose mt-16 mb-8"),b(o,"class","ml-4 mr-2"),b(m,"class","w-full"),b(m,"placeholder","Search"),b(s,"class","mb-5 flex rounded-full border p-1 pr-4"),b(f,"data-cy","namespace-list")},m(D,R){v(D,e,R),F(e,n),F(n,t),F(e,l),j&&j.m(e,null),v(D,i,R),v(D,s,R),F(s,o),E(r,o,null),F(s,u),F(s,m),de(m,a[3]),a[7](m),v(D,c,R),v(D,f,R),A.block.m(f,A.anchor=null),A.mount=()=>f,A.anchor=null,h=!0,L||(V=[Pe(a[0].call(null,m)),se(m,"input",a[6])],L=!0)},p(D,[R]){var M;a=D,(M=a[4].params)!=null&&M.namespace?j?j.p(a,R):(j=ge(a),j.c(),j.m(e,null)):j&&(j.d(1),j=null),R&8&&m.value!==a[3]&&de(m,a[3]),A.ctx=a,R&2&&_!==(_=a[1])&&oe(_,A)||Ae(A,a,R)},i(D){h||($(r.$$.fragment,D),$(A.block),h=!0)},o(D){d(r.$$.fragment,D);for(let R=0;R<3;R+=1){const M=A.blocks[R];d(M)}h=!1},d(D){D&&p(e),j&&j.d(),D&&p(i),D&&p(s),C(r),a[7](null),D&&p(c),D&&p(f),A.block.d(),A.token=null,A=null,L=!1,Re(V)}}}function ot(a,e,n){let t,l;X(a,pe,h=>n(4,l=h));let{getNamespaceList:i=null}=e,s=null,o=null;He(()=>{n(1,s=i()),o.focus()});const r=qe();function u(h){const L=V=>{h&&!V.defaultPrevented&&V.key==="Escape"&&r("closeNamespaceList")};return document.addEventListener("keydown",L,!0),{destroy(){document.removeEventListener("keydown",L,!0)}}}function m(){t=this.value,n(3,t)}function c(h){Te[h?"unshift":"push"](()=>{o=h,n(2,o)})}const f=({namespace:h})=>h.includes(t),_=h=>h==null?void 0:h.onClick();return a.$$set=h=>{"getNamespaceList"in h&&n(5,i=h.getNamespaceList)},n(3,t=""),[u,s,o,t,l,i,m,c,f,_]}class ft extends Z{constructor(e){super(),x(this,e,ot,rt,ee,{getNamespaceList:5,rootDocumentHandler:0})}get rootDocumentHandler(){return this.$$.ctx[0]}}function ut(a){const e=n=>{a&&!a.contains(n.target)&&!n.defaultPrevented&&a.dispatchEvent(new CustomEvent("click-outside"))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function ct(a){let e,n,t,l,i,s,o,r;l=new W({props:{name:"close",scale:1}});const u=a[4].default,m=Y(u,a,a[3],null);return{c(){e=k("div"),n=k("div"),t=k("div"),N(l.$$.fragment),i=S(),m&&m.c(),this.h()},l(c){e=w(c,"DIV",{class:!0});var f=z(e);n=w(f,"DIV",{class:!0});var _=z(n);t=w(_,"DIV",{class:!0});var h=z(t);I(l.$$.fragment,h),h.forEach(p),_.forEach(p),i=y(f),m&&m.l(f),f.forEach(p),this.h()},h(){b(t,"class","absolute right-0 top-0 cursor-pointer"),b(n,"class","relative"),b(e,"class",Ue(`
  absolute 
  right-[300px]
  z-10 
  h-full 
  w-[300px] 
  overflow-auto 
  border-r-2 
  border-gray-200 
  bg-white 
  p-5 
  text-gray-900 
  md:right-[500px] 
  md:w-[500px]`)+" svelte-17tbjlh"),U(e,"flyin",a[0]),U(e,"flyout",a[1])},m(c,f){v(c,e,f),F(e,n),F(n,t),E(l,t,null),F(e,i),m&&m.m(e,null),s=!0,o||(r=[se(t,"click",function(){me(a[2])&&a[2].apply(this,arguments)}),Pe(ut.call(null,e)),se(e,"click-outside",function(){me(a[2])&&a[2].apply(this,arguments)})],o=!0)},p(c,[f]){a=c,m&&m.p&&(!s||f&8)&&K(m,u,a,a[3],s?Q(u,a[3],f,null):J(a[3]),null),f&1&&U(e,"flyin",a[0]),f&2&&U(e,"flyout",a[1])},i(c){s||($(l.$$.fragment,c),$(m,c),s=!0)},o(c){d(l.$$.fragment,c),d(m,c),s=!1},d(c){c&&p(e),C(l),m&&m.d(c),o=!1,Re(r)}}}function mt(a,e,n){let{$$slots:t={},$$scope:l}=e,{flyin:i}=e,{flyout:s}=e,{onClose:o}=e;return a.$$set=r=>{"flyin"in r&&n(0,i=r.flyin),"flyout"in r&&n(1,s=r.flyout),"onClose"in r&&n(2,o=r.onClose),"$$scope"in r&&n(3,l=r.$$scope)},[i,s,o,l,t]}class pt extends Z{constructor(e){super(),x(this,e,mt,ct,ee,{flyin:0,flyout:1,onClose:2})}}const _t=a=>({}),Ne=a=>({});function $t(a){let e;const n=a[3].default,t=Y(n,a,a[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&4)&&K(t,n,l,l[2],e?Q(n,l[2],i,null):J(l[2]),null)},i(l){e||($(t,l),e=!0)},o(l){d(t,l),e=!1},d(l){t&&t.d(l)}}}function dt(a){let e;const n=a[3].fallback,t=Y(n,a,a[2],Ne);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&4)&&K(t,n,l,l[2],e?Q(n,l[2],i,_t):J(l[2]),Ne)},i(l){e||($(t,l),e=!0)},o(l){d(t,l),e=!1},d(l){t&&t.d(l)}}}function vt(a){let e,n,t,l;const i=[dt,$t],s=[];function o(r,u){var m,c,f;return r[0]||((f=(c=(m=r[1].stuff)==null?void 0:m.settings)==null?void 0:c.runtimeEnvironment)==null?void 0:f.isCloud)?0:1}return e=o(a),n=s[e]=i[e](a),{c(){n.c(),t=O()},l(r){n.l(r),t=O()},m(r,u){s[e].m(r,u),v(r,t,u),l=!0},p(r,[u]){let m=e;e=o(r),e===m?s[e].p(r,u):(q(),d(s[m],1,1,()=>{s[m]=null}),T(),n=s[e],n?n.p(r,u):(n=s[e]=i[e](r),n.c()),$(n,1),n.m(t.parentNode,t))},i(r){l||($(n),l=!0)},o(r){d(n),l=!1},d(r){s[e].d(r),r&&p(t)}}}function ht(a,e,n){let t;X(a,pe,o=>n(1,t=o));let{$$slots:l={},$$scope:i}=e,{isCloud:s=!1}=e;return a.$$set=o=>{"isCloud"in o&&n(0,s=o.isCloud),"$$scope"in o&&n(2,i=o.$$scope)},[s,t,i,l]}class ce extends Z{constructor(e){super(),x(this,e,ht,vt,ee,{isCloud:0})}}const gt=a=>({}),Ee=a=>({});function bt(a){let e;const n=a[2].fallback,t=Y(n,a,a[1],Ee);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&2)&&K(t,n,l,l[1],e?Q(n,l[1],i,gt):J(l[1]),Ee)},i(l){e||($(t,l),e=!0)},o(l){d(t,l),e=!1},d(l){t&&t.d(l)}}}function kt(a){let e;const n=a[2].default,t=Y(n,a,a[1],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&2)&&K(t,n,l,l[1],e?Q(n,l[1],i,null):J(l[1]),null)},i(l){e||($(t,l),e=!0)},o(l){d(t,l),e=!1},d(l){t&&t.d(l)}}}function wt(a){let e,n,t,l;const i=[kt,bt],s=[];function o(r,u){return r[0]?0:1}return e=o(a),n=s[e]=i[e](a),{c(){n.c(),t=O()},l(r){n.l(r),t=O()},m(r,u){s[e].m(r,u),v(r,t,u),l=!0},p(r,[u]){let m=e;e=o(r),e===m?s[e].p(r,u):(q(),d(s[m],1,1,()=>{s[m]=null}),T(),n=s[e],n?n.p(r,u):(n=s[e]=i[e](r),n.c()),$(n,1),n.m(t.parentNode,t))},i(r){l||($(n),l=!0)},o(r){d(n),l=!1},d(r){s[e].d(r),r&&p(t)}}}function Nt(a,e,n){let{$$slots:t={},$$scope:l}=e,{enabled:i=!1}=e;return a.$$set=s=>{"enabled"in s&&n(0,i=s.enabled),"$$scope"in s&&n(1,l=s.$$scope)},[i,l,t]}class Et extends Z{constructor(e){super(),x(this,e,Nt,wt,ee,{enabled:0})}}const{Boolean:Ct}=We,zt=a=>({}),Ce=a=>({}),It=a=>({}),ze=a=>({});function Ie(a,e,n){const t=a.slice();return t[16]=e[n],t}function Lt(a){let e,n,t;return n=new W({props:{name:"workflow",scale:1.5}}),{c(){e=k("div"),N(n.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var i=z(e);I(n.$$.fragment,i),i.forEach(p),this.h()},h(){b(e,"class","nav-icon svelte-aivzzg")},m(l,i){v(l,e,i),E(n,e,null),t=!0},p:P,i(l){t||($(n.$$.fragment,l),t=!0)},o(l){d(n.$$.fragment,l),t=!1},d(l){l&&p(e),C(n)}}}function Dt(a){let e,n,t,l,i;return e=new te({props:{right:!0,hide:a[9],text:"Workflows",$$slots:{default:[Lt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),n=S(),t=k("div"),l=B("Workflows"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=w(s,"DIV",{class:!0});var o=z(t);l=H(o,"Workflows"),o.forEach(p),this.h()},h(){b(t,"class","nav-title svelte-aivzzg")},m(s,o){E(e,s,o),v(s,n,o),v(s,t,o),F(t,l),i=!0},p(s,o){const r={};o&512&&(r.hide=s[9]),o&32768&&(r.$$scope={dirty:o,ctx:s}),e.$set(r)},i(s){i||($(e.$$.fragment,s),i=!0)},o(s){d(e.$$.fragment,s),i=!1},d(s){C(e,s),s&&p(n),s&&p(t)}}}function Vt(a){let e,n,t,l,i;return n=new W({props:{name:"calendarPlus",scale:1}}),l=new Xe({props:{feature:"schedules",alpha:!0}}),{c(){e=k("div"),N(n.$$.fragment),t=S(),N(l.$$.fragment),this.h()},l(s){e=w(s,"DIV",{class:!0});var o=z(e);I(n.$$.fragment,o),t=y(o),I(l.$$.fragment,o),o.forEach(p),this.h()},h(){b(e,"class","nav-icon svelte-aivzzg")},m(s,o){v(s,e,o),E(n,e,null),F(e,t),E(l,e,null),i=!0},p:P,i(s){i||($(n.$$.fragment,s),$(l.$$.fragment,s),i=!0)},o(s){d(n.$$.fragment,s),d(l.$$.fragment,s),i=!1},d(s){s&&p(e),C(n),C(l)}}}function jt(a){let e,n,t,l,i;return e=new te({props:{right:!0,hide:a[9],text:"Schedules",$$slots:{default:[Vt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),n=S(),t=k("div"),l=B("Schedules"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=w(s,"DIV",{class:!0});var o=z(t);l=H(o,"Schedules"),o.forEach(p),this.h()},h(){b(t,"class","nav-title svelte-aivzzg")},m(s,o){E(e,s,o),v(s,n,o),v(s,t,o),F(t,l),i=!0},p(s,o){const r={};o&512&&(r.hide=s[9]),o&32768&&(r.$$scope={dirty:o,ctx:s}),e.$set(r)},i(s){i||($(e.$$.fragment,s),i=!0)},o(s){d(e.$$.fragment,s),i=!1},d(s){C(e,s),s&&p(n),s&&p(t)}}}function Ft(a){let e,n;return e=new G({props:{link:a[3].schedules,isCloud:a[0],"data-cy":"schedules-button",$$slots:{default:[jt]},$$scope:{ctx:a}}}),e.$on("click",a[14]),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const i={};l&8&&(i.link=t[3].schedules),l&1&&(i.isCloud=t[0]),l&33280&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function St(a){var t,l;let e,n;return e=new Et({props:{enabled:Boolean((l=(t=a[1])==null?void 0:t.namespaceInfo)==null?void 0:l.supportsSchedules),$$slots:{default:[Ft]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(i){I(e.$$.fragment,i)},m(i,s){E(e,i,s),n=!0},p(i,s){var r,u;const o={};s&2&&(o.enabled=Boolean((u=(r=i[1])==null?void 0:r.namespaceInfo)==null?void 0:u.supportsSchedules)),s&33289&&(o.$$scope={dirty:s,ctx:i}),e.$set(o)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){d(e.$$.fragment,i),n=!1},d(i){C(e,i)}}}function yt(a){let e,n,t;return n=new W({props:{name:"namespace",scale:1.5}}),{c(){e=k("div"),N(n.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var i=z(e);I(n.$$.fragment,i),i.forEach(p),this.h()},h(){b(e,"class","nav-icon svelte-aivzzg")},m(l,i){v(l,e,i),E(n,e,null),t=!0},p:P,i(l){t||($(n.$$.fragment,l),t=!0)},o(l){d(n.$$.fragment,l),t=!1},d(l){l&&p(e),C(n)}}}function Pt(a){let e,n,t,l,i;return e=new te({props:{right:!0,hide:a[9],text:"Namespaces",$$slots:{default:[yt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),n=S(),t=k("div"),l=B("Namespaces"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=w(s,"DIV",{class:!0});var o=z(t);l=H(o,"Namespaces"),o.forEach(p),this.h()},h(){b(t,"class","nav-title svelte-aivzzg")},m(s,o){E(e,s,o),v(s,n,o),v(s,t,o),F(t,l),i=!0},p(s,o){const r={};o&512&&(r.hide=s[9]),o&32768&&(r.$$scope={dirty:o,ctx:s}),e.$set(r)},i(s){i||($(e.$$.fragment,s),i=!0)},o(s){d(e.$$.fragment,s),i=!1},d(s){C(e,s),s&&p(n),s&&p(t)}}}function At(a){let e,n;return e=new G({props:{link:a[3].namespaces,isCloud:a[0],"data-cy":"namespaces-button",$$slots:{default:[Pt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const i={};l&8&&(i.link=t[3].namespaces),l&1&&(i.isCloud=t[0]),l&33280&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Rt(a){let e,n,t;return n=new W({props:{name:"archive",scale:1.2}}),{c(){e=k("div"),N(n.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var i=z(e);I(n.$$.fragment,i),i.forEach(p),this.h()},h(){b(e,"class","nav-icon svelte-aivzzg")},m(l,i){v(l,e,i),E(n,e,null),t=!0},p:P,i(l){t||($(n.$$.fragment,l),t=!0)},o(l){d(n.$$.fragment,l),t=!1},d(l){l&&p(e),C(n)}}}function Ot(a){let e,n,t,l,i;return e=new te({props:{right:!0,hide:a[9],text:"Archive",$$slots:{default:[Rt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),n=S(),t=k("div"),l=B("Archive"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=w(s,"DIV",{class:!0});var o=z(t);l=H(o,"Archive"),o.forEach(p),this.h()},h(){b(t,"class","nav-title svelte-aivzzg")},m(s,o){E(e,s,o),v(s,n,o),v(s,t,o),F(t,l),i=!0},p(s,o){const r={};o&512&&(r.hide=s[9]),o&32768&&(r.$$scope={dirty:o,ctx:s}),e.$set(r)},i(s){i||($(e.$$.fragment,s),i=!0)},o(s){d(e.$$.fragment,s),i=!1},d(s){C(e,s),s&&p(n),s&&p(t)}}}function Bt(a){let e,n;return e=new G({props:{link:a[3].archive,isCloud:a[0],"data-cy":"archive-button",$$slots:{default:[Ot]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const i={};l&8&&(i.link=t[3].archive),l&1&&(i.isCloud=t[0]),l&33280&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Ht(a){let e,n,t,l,i,s,o,r,u;e=new G({props:{link:a[3].workflows,isCloud:a[0],"data-cy":"workflows-button",$$slots:{default:[Dt]},$$scope:{ctx:a}}}),t=new ce({props:{isCloud:a[0],$$slots:{default:[St]},$$scope:{ctx:a}}}),i=new ce({props:{$$slots:{default:[At]},$$scope:{ctx:a}}});const m=a[11].usage,c=Y(m,a,a[15],Ce);return r=new ce({props:{isCloud:a[0],$$slots:{default:[Bt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),n=S(),N(t.$$.fragment),l=S(),N(i.$$.fragment),s=S(),c&&c.c(),o=S(),N(r.$$.fragment)},l(f){I(e.$$.fragment,f),n=y(f),I(t.$$.fragment,f),l=y(f),I(i.$$.fragment,f),s=y(f),c&&c.l(f),o=y(f),I(r.$$.fragment,f)},m(f,_){E(e,f,_),v(f,n,_),E(t,f,_),v(f,l,_),E(i,f,_),v(f,s,_),c&&c.m(f,_),v(f,o,_),E(r,f,_),u=!0},p(f,_){const h={};_&8&&(h.link=f[3].workflows),_&1&&(h.isCloud=f[0]),_&33280&&(h.$$scope={dirty:_,ctx:f}),e.$set(h);const L={};_&1&&(L.isCloud=f[0]),_&33291&&(L.$$scope={dirty:_,ctx:f}),t.$set(L);const V={};_&33289&&(V.$$scope={dirty:_,ctx:f}),i.$set(V),c&&c.p&&(!u||_&32768)&&K(c,m,f,f[15],u?Q(m,f[15],_,zt):J(f[15]),Ce);const j={};_&1&&(j.isCloud=f[0]),_&33289&&(j.$$scope={dirty:_,ctx:f}),r.$set(j)},i(f){u||($(e.$$.fragment,f),$(t.$$.fragment,f),$(i.$$.fragment,f),$(c,f),$(r.$$.fragment,f),u=!0)},o(f){d(e.$$.fragment,f),d(t.$$.fragment,f),d(i.$$.fragment,f),d(c,f),d(r.$$.fragment,f),u=!1},d(f){C(e,f),f&&p(n),C(t,f),f&&p(l),C(i,f),f&&p(s),c&&c.d(f),f&&p(o),C(r,f)}}}function Le(a){let e,n,t=a[5],l=[];for(let s=0;s<t.length;s+=1)l[s]=De(Ie(a,t,s));const i=s=>d(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=O()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);e=O()},m(s,o){for(let r=0;r<l.length;r+=1)l[r].m(s,o);v(s,e,o),n=!0},p(s,o){if(o&33){t=s[5];let r;for(r=0;r<t.length;r+=1){const u=Ie(s,t,r);l[r]?(l[r].p(u,o),$(l[r],1)):(l[r]=De(u),l[r].c(),$(l[r],1),l[r].m(e.parentNode,e))}for(q(),r=t.length;r<l.length;r+=1)i(r);T()}},i(s){if(!n){for(let o=0;o<t.length;o+=1)$(l[o]);n=!0}},o(s){l=l.filter(Ct);for(let o=0;o<l.length;o+=1)d(l[o]);n=!1},d(s){Oe(l,s),s&&p(e)}}}function qt(a){let e,n,t,l,i=a[16].name+"",s,o,r;var u=a[16].component;function m(c){return{}}return u&&(n=new u(m())),{c(){e=k("div"),n&&N(n.$$.fragment),t=S(),l=k("div"),s=B(i),o=S(),this.h()},l(c){e=w(c,"DIV",{class:!0});var f=z(e);n&&I(n.$$.fragment,f),f.forEach(p),t=y(c),l=w(c,"DIV",{class:!0});var _=z(l);s=H(_,i),_.forEach(p),o=y(c),this.h()},h(){b(e,"class","nav-icon svelte-aivzzg"),b(l,"class","nav-title svelte-aivzzg")},m(c,f){v(c,e,f),n&&E(n,e,null),v(c,t,f),v(c,l,f),F(l,s),v(c,o,f),r=!0},p(c,f){if(u!==(u=c[16].component)){if(n){q();const _=n;d(_.$$.fragment,1,0,()=>{C(_,1)}),T()}u?(n=new u(m()),N(n.$$.fragment),$(n.$$.fragment,1),E(n,e,null)):n=null}(!r||f&32)&&i!==(i=c[16].name+"")&&ae(s,i)},i(c){r||(n&&$(n.$$.fragment,c),r=!0)},o(c){n&&d(n.$$.fragment,c),r=!1},d(c){c&&p(e),n&&C(n),c&&p(t),c&&p(l),c&&p(o)}}}function De(a){let e,n;return e=new G({props:{isCloud:a[0],noFilter:!0,$$slots:{default:[qt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const i={};l&1&&(i.isCloud=t[0]),l&32800&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Tt(a){let e,n,t;return n=new W({props:{name:"feedback",scale:1.4}}),{c(){e=k("div"),N(n.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var i=z(e);I(n.$$.fragment,i),i.forEach(p),this.h()},h(){b(e,"class","nav-icon svelte-aivzzg")},m(l,i){v(l,e,i),E(n,e,null),t=!0},p:P,i(l){t||($(n.$$.fragment,l),t=!0)},o(l){d(n.$$.fragment,l),t=!1},d(l){l&&p(e),C(n)}}}function Ut(a){let e,n,t,l,i;return e=new te({props:{right:!0,hide:a[9],text:"Feedback",$$slots:{default:[Tt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),n=S(),t=k("div"),l=B("Feedback"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=w(s,"DIV",{class:!0});var o=z(t);l=H(o,"Feedback"),o.forEach(p),this.h()},h(){b(t,"class","nav-title svelte-aivzzg")},m(s,o){E(e,s,o),v(s,n,o),v(s,t,o),F(t,l),i=!0},p(s,o){const r={};o&512&&(r.hide=s[9]),o&32768&&(r.$$scope={dirty:o,ctx:s}),e.$set(r)},i(s){i||($(e.$$.fragment,s),i=!0)},o(s){d(e.$$.fragment,s),i=!1},d(s){C(e,s),s&&p(n),s&&p(t)}}}function Wt(a){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Gt(a){var l;let e,n,t=((l=a[6])==null?void 0:l.email)&&Ve(a);return{c(){t&&t.c(),e=O()},l(i){t&&t.l(i),e=O()},m(i,s){t&&t.m(i,s),v(i,e,s),n=!0},p(i,s){var o;(o=i[6])!=null&&o.email?t?(t.p(i,s),s&64&&$(t,1)):(t=Ve(i),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(q(),d(t,1,1,()=>{t=null}),T())},i(i){n||($(t),n=!0)},o(i){d(t),n=!1},d(i){t&&t.d(i),i&&p(e)}}}function Ve(a){var m,c;let e,n,t,l,i,s,o;e=new G({props:{isCloud:a[0],$$slots:{default:[Yt]},$$scope:{ctx:a}}}),e.$on("click",function(){me(a[4])&&a[4].apply(this,arguments)});let r=((m=a[6])==null?void 0:m.picture)&&je(a),u=((c=a[6])==null?void 0:c.name)&&Se(a);return{c(){N(e.$$.fragment),n=S(),t=k("div"),l=k("div"),r&&r.c(),i=S(),s=k("div"),u&&u.c(),this.h()},l(f){I(e.$$.fragment,f),n=y(f),t=w(f,"DIV",{class:!0});var _=z(t);l=w(_,"DIV",{});var h=z(l);r&&r.l(h),h.forEach(p),i=y(_),s=w(_,"DIV",{class:!0});var L=z(s);u&&u.l(L),L.forEach(p),_.forEach(p),this.h()},h(){b(s,"class","nav-title truncate svelte-aivzzg"),b(t,"class","profile-row svelte-aivzzg")},m(f,_){E(e,f,_),v(f,n,_),v(f,t,_),F(t,l),r&&r.m(l,null),F(t,i),F(t,s),u&&u.m(s,null),o=!0},p(f,_){var L,V;a=f;const h={};_&1&&(h.isCloud=a[0]),_&33280&&(h.$$scope={dirty:_,ctx:a}),e.$set(h),(L=a[6])!=null&&L.picture?r?r.p(a,_):(r=je(a),r.c(),r.m(l,null)):r&&(r.d(1),r=null),(V=a[6])!=null&&V.name?u?u.p(a,_):(u=Se(a),u.c(),u.m(s,null)):u&&(u.d(1),u=null)},i(f){o||($(e.$$.fragment,f),o=!0)},o(f){d(e.$$.fragment,f),o=!1},d(f){C(e,f),f&&p(n),f&&p(t),r&&r.d(),u&&u.d()}}}function Mt(a){let e,n,t;return n=new W({props:{name:"logout",scale:1.4}}),{c(){e=k("div"),N(n.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var i=z(e);I(n.$$.fragment,i),i.forEach(p),this.h()},h(){b(e,"class","nav-icon svelte-aivzzg")},m(l,i){v(l,e,i),E(n,e,null),t=!0},p:P,i(l){t||($(n.$$.fragment,l),t=!0)},o(l){d(n.$$.fragment,l),t=!1},d(l){l&&p(e),C(n)}}}function Yt(a){let e,n,t,l,i;return e=new te({props:{right:!0,hide:a[9],text:"Logout",$$slots:{default:[Mt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment),n=S(),t=k("div"),l=B("Logout"),this.h()},l(s){I(e.$$.fragment,s),n=y(s),t=w(s,"DIV",{class:!0});var o=z(t);l=H(o,"Logout"),o.forEach(p),this.h()},h(){b(t,"class","nav-title cursor-pointer svelte-aivzzg")},m(s,o){E(e,s,o),v(s,n,o),v(s,t,o),F(t,l),i=!0},p(s,o){const r={};o&512&&(r.hide=s[9]),o&32768&&(r.$$scope={dirty:o,ctx:s}),e.$set(r)},i(s){i||($(e.$$.fragment,s),i=!0)},o(s){d(e.$$.fragment,s),i=!1},d(s){C(e,s),s&&p(n),s&&p(t)}}}function je(a){var u;let e,n,t,l,i,s,o,r=((u=a[6])==null?void 0:u.name)&&Fe(a);return{c(){e=k("img"),l=S(),i=k("div"),r&&r.c(),this.h()},l(m){e=w(m,"IMG",{src:!0,alt:!0,class:!0}),l=y(m),i=w(m,"DIV",{class:!0});var c=z(i);r&&r.l(c),c.forEach(p),this.h()},h(){var m,c;ve(e.src,n=(m=a[6])==null?void 0:m.picture)||b(e,"src",n),b(e,"alt",t=(c=a[6])==null?void 0:c.profile),b(e,"class","rounded-md p-1 w-8 h-8"),U(e,"hidden",!a[7]),b(i,"class","rounded-full p-0.5 bg-blue-200 h-full aspect-square"),U(i,"hidden",a[7])},m(m,c){v(m,e,c),v(m,l,c),v(m,i,c),r&&r.m(i,null),s||(o=se(e,"error",a[10]),s=!0)},p(m,c){var f,_,h;c&64&&!ve(e.src,n=(f=m[6])==null?void 0:f.picture)&&b(e,"src",n),c&64&&t!==(t=(_=m[6])==null?void 0:_.profile)&&b(e,"alt",t),c&128&&U(e,"hidden",!m[7]),(h=m[6])!=null&&h.name?r?r.p(m,c):(r=Fe(m),r.c(),r.m(i,null)):r&&(r.d(1),r=null),c&128&&U(i,"hidden",m[7])},d(m){m&&p(e),m&&p(l),m&&p(i),r&&r.d(),s=!1,o()}}}function Fe(a){var l;let e,n=((l=a[6])==null?void 0:l.name.trim().charAt(0))+"",t;return{c(){e=k("div"),t=B(n),this.h()},l(i){e=w(i,"DIV",{class:!0});var s=z(e);t=H(s,n),s.forEach(p),this.h()},h(){b(e,"class","text-black text-center ")},m(i,s){v(i,e,s),F(e,t)},p(i,s){var o;s&64&&n!==(n=((o=i[6])==null?void 0:o.name.trim().charAt(0))+"")&&ae(t,n)},d(i){i&&p(e)}}}function Se(a){var t;let e=((t=a[6])==null?void 0:t.name)+"",n;return{c(){n=B(e)},l(l){n=H(l,e)},m(l,i){v(l,n,i)},p(l,i){var s;i&64&&e!==(e=((s=l[6])==null?void 0:s.name)+"")&&ae(n,e)},d(l){l&&p(n)}}}function Kt(a){let e,n;return e=new G({props:{isCloud:a[0],$$slots:{default:[Jt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const i={};l&1&&(i.isCloud=t[0]),l&32768&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Jt(a){let e,n,t,l,i;return{c(){e=k("div"),n=k("div"),t=S(),l=k("div"),i=k("div"),this.h()},l(s){e=w(s,"DIV",{class:!0,style:!0});var o=z(e);n=w(o,"DIV",{class:!0}),z(n).forEach(p),o.forEach(p),t=y(s),l=w(s,"DIV",{class:!0});var r=z(l);i=w(r,"DIV",{class:!0}),z(i).forEach(p),r.forEach(p),this.h()},h(){b(n,"class","rounded-full bg-blueGray-200 h-full aspect-square"),b(e,"class","motion-safe:animate-pulse"),Ge(e,"margin-left","1rem"),b(i,"class","h-2 bg-blueGray-50 rounded mt-1"),b(l,"class","nav-title svelte-aivzzg")},m(s,o){v(s,e,o),F(e,n),v(s,t,o),v(s,l,o),F(l,i)},p:P,d(s){s&&p(e),s&&p(t),s&&p(l)}}}function Qt(a){let e,n,t,l,i,s,o,r=a[5]&&Le(a);n=new G({props:{link:a[3].feedback,isCloud:a[0],externalLink:!0,$$slots:{default:[Ut]},$$scope:{ctx:a}}});const u=a[11].settings,m=Y(u,a,a[15],ze);let c={ctx:a,current:null,token:null,hasCatch:!1,pending:Kt,then:Gt,catch:Wt,value:6,blocks:[,,,]};return oe(s=a[6],c),{c(){r&&r.c(),e=S(),N(n.$$.fragment),t=S(),m&&m.c(),l=S(),i=O(),c.block.c()},l(f){r&&r.l(f),e=y(f),I(n.$$.fragment,f),t=y(f),m&&m.l(f),l=y(f),i=O(),c.block.l(f)},m(f,_){r&&r.m(f,_),v(f,e,_),E(n,f,_),v(f,t,_),m&&m.m(f,_),v(f,l,_),v(f,i,_),c.block.m(f,c.anchor=_),c.mount=()=>i.parentNode,c.anchor=i,o=!0},p(f,_){a=f,a[5]?r?(r.p(a,_),_&32&&$(r,1)):(r=Le(a),r.c(),$(r,1),r.m(e.parentNode,e)):r&&(q(),d(r,1,1,()=>{r=null}),T());const h={};_&8&&(h.link=a[3].feedback),_&1&&(h.isCloud=a[0]),_&33280&&(h.$$scope={dirty:_,ctx:a}),n.$set(h),m&&m.p&&(!o||_&32768)&&K(m,u,a,a[15],o?Q(u,a[15],_,It):J(a[15]),ze),c.ctx=a,_&64&&s!==(s=a[6])&&oe(s,c)||Ae(c,a,_)},i(f){o||($(r),$(n.$$.fragment,f),$(m,f),$(c.block),o=!0)},o(f){d(r),d(n.$$.fragment,f),d(m,f);for(let _=0;_<3;_+=1){const h=c.blocks[_];d(h)}o=!1},d(f){r&&r.d(f),f&&p(e),C(n,f),f&&p(t),m&&m.d(f),f&&p(l),f&&p(i),c.block.d(f),c.token=null,c=null}}}function ye(a){let e,n;return e=new ft({props:{getNamespaceList:a[2]}}),e.$on("closeNamespaceList",a[12]),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const i={};l&4&&(i.getNamespaceList=t[2]),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Xt(a){let e,n,t=a[8]&&ye(a);return{c(){t&&t.c(),e=O()},l(l){t&&t.l(l),e=O()},m(l,i){t&&t.m(l,i),v(l,e,i),n=!0},p(l,i){l[8]?t?(t.p(l,i),i&256&&$(t,1)):(t=ye(l),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(q(),d(t,1,1,()=>{t=null}),T())},i(l){n||($(t),n=!0)},o(l){d(t),n=!1},d(l){t&&t.d(l),l&&p(e)}}}function Zt(a){let e,n;return e=new pt({props:{flyin:a[8]===!0,flyout:a[8]===!1,onClose:a[13],$$slots:{default:[Xt]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const i={};l&256&&(i.flyin=t[8]===!0),l&256&&(i.flyout=t[8]===!1),l&256&&(i.onClose=t[13]),l&33028&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function xt(a){let e,n;return e=new xe({props:{isCloud:a[0],linkList:a[3],$$slots:{drawer:[Zt],bottom:[Qt],top:[Ht]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,[l]){const i={};l&1&&(i.isCloud=t[0]),l&8&&(i.linkList=t[3]),l&33791&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function el(a,e,n){let t,l;X(a,re,g=>n(8,t=g)),X(a,Ze,g=>n(9,l=g));let{$$slots:i={},$$scope:s}=e,{isCloud:o=!1}=e,{activeNamespace:r}=e,{getNamespaceList:u}=e,{linkList:m}=e,{user:c}=e,{logout:f}=e,{extras:_=null}=e,h=!0;function L(){n(7,h=!1)}Me(()=>{t&&ne(re,t=!1,t)});const V=g=>{ne(re,t=!1,t)},j=()=>{t===!0&&ne(re,t=!1,t)},A=()=>Qe("schedules");return a.$$set=g=>{"isCloud"in g&&n(0,o=g.isCloud),"activeNamespace"in g&&n(1,r=g.activeNamespace),"getNamespaceList"in g&&n(2,u=g.getNamespaceList),"linkList"in g&&n(3,m=g.linkList),"user"in g&&n(6,c=g.user),"logout"in g&&n(4,f=g.logout),"extras"in g&&n(5,_=g.extras),"$$scope"in g&&n(15,s=g.$$scope)},[o,r,u,m,f,_,c,h,t,l,L,i,V,j,A,s]}class tl extends Z{constructor(e){super(),x(this,e,el,xt,ee,{isCloud:0,activeNamespace:1,getNamespaceList:2,linkList:3,user:6,logout:4,extras:5})}}function ll(a){let e,n;return e=new tl({props:{getNamespaceList:a[13],activeNamespace:a[2],linkList:a[1],isCloud:a[3],user:Promise.resolve(a[0]),logout:a[5],extras:[{component:et,name:"Data Encoder"}]}}),{c(){N(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,[l]){const i={};l&4&&(i.activeNamespace=t[2]),l&2&&(i.linkList=t[1]),l&1&&(i.user=Promise.resolve(t[0])),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function nl(a,e,n){let t,l,i,s,o;X(a,pe,g=>n(11,s=g)),X(a,ue,g=>n(12,o=g));var r,u,m,c;let{user:f}=e;const{showTemporalSystemNamespace:_}=s.stuff.settings,{isCloud:h}=s.stuff.settings.runtimeEnvironment,L=(s.stuff.namespaces||[]).map(g=>{var D;return(D=g==null?void 0:g.namespaceInfo)===null||D===void 0?void 0:D.name}).filter(g=>_||g!=="temporal-system"),V=L.map(g=>{const D=le({namespace:g});return{namespace:g,href:D,onClick:()=>{ne(ue,o=g,o),fe(le({namespace:g}))}}});if(h&&s.params.namespace&&!L.length){const g=le({namespace:s.params.namespace});V.push({namespace:s.params.namespace,href:g,onClick:()=>{ne(ue,o=s.params.namespace,o),fe(g)}})}const j=()=>fe(tt()+"/auth/logout"),A=()=>Promise.resolve(V);return a.$$set=g=>{"user"in g&&n(0,f=g.user)},a.$$.update=()=>{a.$$.dirty&6336&&n(10,t=n(7,u=n(6,r=s.params)===null||r===void 0?void 0:r.namespace)!==null&&u!==void 0?u:o),a.$$.dirty&3072&&n(2,l=(s.stuff.namespaces||[]).find(g=>{var D;return((D=g==null?void 0:g.namespaceInfo)===null||D===void 0?void 0:D.name)===t})),a.$$.dirty&3840&&n(1,i={home:le({namespace:t}),archive:Ye({namespace:t}),namespaces:Ke(),schedules:Je({namespace:t}),workflows:le({namespace:t}),feedback:(n(9,c=n(8,m=s.stuff)===null||m===void 0?void 0:m.settings)===null||c===void 0?void 0:c.feedbackURL)||"https://github.com/temporalio/ui/issues/new/choose"})},[f,i,l,h,V,j,r,u,m,c,t,s,o,A]}class Dl extends Z{constructor(e){super(),x(this,e,nl,ll,ee,{user:0})}}export{Dl as default};