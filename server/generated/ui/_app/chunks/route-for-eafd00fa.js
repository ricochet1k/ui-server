var f=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var c=(r,e)=>{var s={};for(var t in r)$.call(r,t)&&e.indexOf(t)<0&&(s[t]=r[t]);if(r!=null&&f)for(var t of f(r))e.indexOf(t)<0&&g.call(r,t)&&(s[t]=r[t]);return s};const h=({namespace:r})=>`/namespaces/${r}`,m=r=>`${h(r)}/workflows`,k=r=>`${h(r)}/archival`,n=t=>{var o=t,{workflow:r,run:e}=o,s=c(o,["workflow","run"]);return`${m(s)}/${r}/${e}`},F=s=>{var t=s,{view:r}=t,e=c(t,["view"]);const o=`${n(e)}/history`;if(!r)return o;if(r==="summary")return`${o}/summary`;if(r==="full")return`${o}/full`;if(r==="compact")return`${o}/compact`;if(r==="json")return`${o}/json`},w=r=>`${F(r)}/${r.eventId}`,y=r=>`${n(r)}/workers`,U=r=>`${n(r)}/stack-trace`,d=r=>`${n(r)}/query`,p=r=>`${n(r)}/pending-activities`,W=r=>{var u;const{settings:e,searchParams:s,originUrl:t}=r,o=new URL("/auth/sso",e.baseUrl);let a=(u=e.auth.options)!=null?u:[];return a=[...a,"returnUrl"],a.forEach(i=>{const l=s.get(i);l&&o.searchParams.set(i,l)}),!o.searchParams.get("returnUrl")&&t&&o.searchParams.set("returnUrl",t),o.toString()},v=()=>{{const r=new URL("login",window.location.origin);return r.searchParams.set("returnUrl",window.location.href),r.toString()}};export{k as a,v as b,n as c,F as d,p as e,y as f,U as g,d as h,w as i,W as j,m as r};