import{C as s}from"./vendor-6d2fcc6d.js";const o=s([],()=>{const t=setInterval(()=>{requestIdleCallback(()=>{const e=Date.now();o.update(n=>n.filter(r=>r.expiration<e))})},5e3);return()=>{clearInterval(t)}}),a=(t,e,n=30)=>{const r=Date.now();return{id:String(r+Math.random()),type:t,message:e,expiration:r+n*1e3}},i=(t,e,n=30)=>{o.update(r=>[...r,a(t,e,n)])},c=t=>{o.update(e=>e.filter(n=>n.id!==t))},d=()=>{o.set([])},u={subscribe:o.subscribe,add:i,dismiss:c,clear:d};export{u as n};
