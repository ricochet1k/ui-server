import{S as ie,i as fe,s as ue,e as p,t as L,k as C,c as h,a as k,h as M,d as u,m as N,b as d,g as de,M as a,j as me,q as T,o as D,w as q,x as j,y as B,E as _e,B as K,n as re,a7 as pe,p as le,N as ae,al as he}from"../../../../../../chunks/index-604742bf.js";import{I as ee}from"../../../../../../chunks/index-0574ae1f.js";import{w as ke}from"../../../../../../chunks/workflow-run-0ac5a9ae.js";import{t as ve}from"../../../../../../chunks/time-format-6fa48b0d.js";import{f as se}from"../../../../../../chunks/format-date-919f4714.js";import{E as $e}from"../../../../../../chunks/empty-state-c50aaf3c.js";import"../../../../../../chunks/index-c9e619a8.js";import"../../../../../../chunks/stores-810822a9.js";import"../../../../../../chunks/with-loading-22689bcc.js";import"../../../../../../chunks/workflow-service-e418293b.js";import"../../../../../../chunks/simplify-attributes-64d6cf1a.js";import"../../../../../../chunks/route-for-api-6ab78c78.js";import"../../../../../../chunks/notifications-cfed8e58.js";import"../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../chunks/route-for-1f2060cd.js";import"../../../../../../chunks/to-duration-271d3946.js";import"../../../../../../chunks/persist-store-26f405dd.js";function oe(_,t,r){const e=_.slice();return e[4]=t[r],e}function ne(_){let t,r;return t=new $e({props:{title:"No Workers Found"}}),{c(){q(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},p:_e,i(e){r||(T(t.$$.fragment,e),r=!0)},o(e){D(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function ge(_){let t,r;return t=new ee({props:{name:"close",stroke:"black"}}),{c(){q(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(T(t.$$.fragment,e),r=!0)},o(e){D(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function we(_){let t,r;return t=new ee({props:{name:"checkMark",stroke:"blue"}}),{c(){q(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(T(t.$$.fragment,e),r=!0)},o(e){D(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function be(_){let t,r;return t=new ee({props:{name:"close",stroke:"black"}}),{c(){q(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(T(t.$$.fragment,e),r=!0)},o(e){D(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function ye(_){let t,r;return t=new ee({props:{name:"checkMark",stroke:"blue"}}),{c(){q(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(T(t.$$.fragment,e),r=!0)},o(e){D(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}function ce(_,t){let r,e,s,O=t[4].identity+"",V,w,f,m,v,A=se(t[4].lastAccessTime,t[0])+"",Q,y,E,W,$,R,x,g,H,P,i;const X=[we,ge],S=[];function I(l,o){return l[4].taskQueueTypes.includes("WORKFLOW")?0:1}W=I(t),$=S[W]=X[W](t);const Z=[ye,be],c=[];function n(l,o){return l[4].taskQueueTypes.includes("ACTIVITY")?0:1}return g=n(t),H=c[g]=Z[g](t),{key:_,first:null,c(){r=p("article"),e=p("div"),s=p("p"),V=L(O),w=C(),f=p("div"),m=p("h3"),v=p("p"),Q=L(A),y=C(),E=p("div"),$.c(),R=C(),x=p("div"),H.c(),P=C(),this.h()},l(l){r=h(l,"ARTICLE",{class:!0,"data-cy":!0});var o=k(r);e=h(o,"DIV",{class:!0,"data-cy":!0});var Y=k(e);s=h(Y,"P",{class:!0});var F=k(s);V=M(F,O),F.forEach(u),Y.forEach(u),w=N(o),f=h(o,"DIV",{class:!0,"data-cy":!0});var b=k(f);m=h(b,"H3",{});var z=k(m);v=h(z,"P",{class:!0});var G=k(v);Q=M(G,A),G.forEach(u),z.forEach(u),b.forEach(u),y=N(o),E=h(o,"DIV",{class:!0});var J=k(E);$.l(J),J.forEach(u),R=N(o),x=h(o,"DIV",{class:!0});var U=k(x);H.l(U),U.forEach(u),P=N(o),o.forEach(u),this.h()},h(){d(s,"class","select-all"),d(e,"class","links w-3/12 text-left"),d(e,"data-cy","worker-identity"),d(v,"class","select-all"),d(f,"class","links w-3/12 text-left"),d(f,"data-cy","worker-last-access-time"),d(E,"class","w-3/12 text-left"),d(x,"class","w-3/12 text-left"),d(r,"class","flex h-full w-full flex-row border-b-2 p-2 no-underline last:border-b-0"),d(r,"data-cy","worker-row"),this.first=r},m(l,o){de(l,r,o),a(r,e),a(e,s),a(s,V),a(r,w),a(r,f),a(f,m),a(m,v),a(v,Q),a(r,y),a(r,E),S[W].m(E,null),a(r,R),a(r,x),c[g].m(x,null),a(r,P),i=!0},p(l,o){t=l,(!i||o&1)&&A!==(A=se(t[4].lastAccessTime,t[0])+"")&&me(Q,A)},i(l){i||(T($),T(H),i=!0)},o(l){D($),D(H),i=!1},d(l){l&&u(r),S[W].d(),c[g].d()}}}function Ee(_){let t,r,e,s,O=_[2].taskQueue+"",V,w,f,m,v,A,Q,y,E,W,$,R,x,g,H,P,i=[],X=new Map,S,I=_[1].pollers;const Z=n=>n[4].identity;for(let n=0;n<I.length;n+=1){let l=oe(_,I,n),o=Z(l);X.set(o,i[n]=ce(o,l))}let c=null;return I.length||(c=ne()),{c(){t=p("section"),r=p("h3"),e=L("Task Queue: "),s=p("span"),V=L(O),w=C(),f=p("section"),m=p("div"),v=p("div"),A=L("ID"),Q=C(),y=p("div"),E=L("Last Accessed"),W=C(),$=p("div"),R=L("Workflow Task Handler"),x=C(),g=p("div"),H=L("Activity Handler"),P=C();for(let n=0;n<i.length;n+=1)i[n].c();c&&c.c(),this.h()},l(n){t=h(n,"SECTION",{class:!0});var l=k(t);r=h(l,"H3",{class:!0});var o=k(r);e=M(o,"Task Queue: "),s=h(o,"SPAN",{class:!0});var Y=k(s);V=M(Y,O),Y.forEach(u),o.forEach(u),w=N(l),f=h(l,"SECTION",{class:!0});var F=k(f);m=h(F,"DIV",{class:!0});var b=k(m);v=h(b,"DIV",{class:!0});var z=k(v);A=M(z,"ID"),z.forEach(u),Q=N(b),y=h(b,"DIV",{class:!0});var G=k(y);E=M(G,"Last Accessed"),G.forEach(u),W=N(b),$=h(b,"DIV",{class:!0});var J=k($);R=M(J,"Workflow Task Handler"),J.forEach(u),x=N(b),g=h(b,"DIV",{class:!0});var U=k(g);H=M(U,"Activity Handler"),U.forEach(u),b.forEach(u),P=N(F);for(let te=0;te<i.length;te+=1)i[te].l(F);c&&c.l(F),F.forEach(u),l.forEach(u),this.h()},h(){d(s,"class","select-all font-normal"),d(r,"class","text-lg font-medium"),d(v,"class","w-3/12 text-left"),d(y,"class","w-3/12 text-left"),d($,"class","w-3/12 text-left"),d(g,"class","w-2/12 text-left"),d(m,"class","flex flex-row bg-gray-900 p-2 text-white"),d(f,"class","flex w-full flex-col rounded-lg border-2 border-gray-900"),d(t,"class","flex flex-col gap-4")},m(n,l){de(n,t,l),a(t,r),a(r,e),a(r,s),a(s,V),a(t,w),a(t,f),a(f,m),a(m,v),a(v,A),a(m,Q),a(m,y),a(y,E),a(m,W),a(m,$),a($,R),a(m,x),a(m,g),a(g,H),a(f,P);for(let o=0;o<i.length;o+=1)i[o].m(f,null);c&&c.m(f,null),S=!0},p(n,[l]){l&3&&(I=n[1].pollers,re(),i=pe(i,l,Z,1,n,I,X,f,he,ce,null,oe),le(),!I.length&&c?c.p(n,l):I.length?c&&(re(),D(c,1,1,()=>{c=null}),le()):(c=ne(),c.c(),T(c,1),c.m(f,null)))},i(n){if(!S){for(let l=0;l<I.length;l+=1)T(i[l]);S=!0}},o(n){for(let l=0;l<i.length;l+=1)D(i[l]);S=!1},d(n){n&&u(t);for(let l=0;l<i.length;l+=1)i[l].d();c&&c.d()}}}function xe(_,t,r){let e,s;ae(_,ke,w=>r(3,e=w)),ae(_,ve,w=>r(0,s=w));const{workers:O,workflow:V}=e;return[s,O,V]}class Ie extends ie{constructor(t){super(),fe(this,t,xe,Ee,ue,{})}}function Te(_){let t,r;return t=new Ie({}),{c(){q(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},p:_e,i(e){r||(T(t.$$.fragment,e),r=!0)},o(e){D(t.$$.fragment,e),r=!1},d(e){K(t,e)}}}class Be extends ie{constructor(t){super(),fe(this,t,null,Te,ue,{})}}export{Be as default};