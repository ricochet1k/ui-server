var c=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var u=(r,e)=>{var s={};for(var o in r)a.call(r,o)&&e.indexOf(o)<0&&(s[o]=r[o]);if(r!=null&&c)for(var o of c(r))e.indexOf(o)<0&&$.call(r,o)&&(s[o]=r[o]);return s};const f=({namespace:r})=>`/namespaces/${r}`,k=r=>`${f(r)}/workflows`,n=o=>{var t=o,{workflow:r,run:e}=t,s=u(t,["workflow","run"]);return`${k(s)}/${r}/${e}`},m=s=>{var o=s,{view:r}=o,e=u(o,["view"]);const t=`${n(e)}/history`;if(!r)return t;if(r==="summary")return`${t}/summary`;if(r==="compact")return`${t}/compact`;if(r==="json")return`${t}/json`},F=r=>`${m(r)}/${r.eventId}`,i=r=>`${n(r)}/workers`,l=r=>`${n(r)}/stack-trace`,p=r=>`${n(r)}/query`;export{n as a,m as b,i as c,l as d,p as e,F as f,k as r};
