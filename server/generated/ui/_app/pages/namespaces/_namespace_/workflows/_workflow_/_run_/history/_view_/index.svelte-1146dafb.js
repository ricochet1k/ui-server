import{S as c,i as r,s as m}from"../../../../../../../../chunks/vendor-ff19c65d.js";const l=async function({url:t,params:n,stuff:s}){const{matchingEvents:a,matchingEventGroups:o}=s;let e;n.view==="summary"&&(e=a),n.view==="compact"&&(e=o);const[i]=e;return s.matchingEvents.length&&i?(t.pathname=`${t.pathname}/${i.id}`,{status:302,redirect:String(t)}):{}};class h extends c{constructor(n){super();r(this,n,null,null,m,{})}}export{h as default,l as load};
