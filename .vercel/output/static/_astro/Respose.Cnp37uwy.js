import{r as D,g as w,R as I}from"./index.C--6pZtI.js";const m=e=>{let t;const n=new Set,r=(s,d)=>{const c=typeof s=="function"?s(t):s;if(!Object.is(c,t)){const i=t;t=d??(typeof c!="object"||c===null)?c:Object.assign({},t,c),n.forEach(a=>a(t,i))}},o=()=>t,p={setState:r,getState:o,getInitialState:()=>E,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{n.clear()}},E=t=e(r,o,p);return p},A=e=>e?m(e):m;var x={exports:{}},g={},_={exports:{}},b={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=D;function O(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var P=typeof Object.is=="function"?Object.is:O,C=f.useState,T=f.useEffect,U=f.useLayoutEffect,B=f.useDebugValue;function F(e,t){var n=t(),r=C({inst:{value:n,getSnapshot:t}}),o=r[0].inst,u=r[1];return U(function(){o.value=n,o.getSnapshot=t,h(o)&&u({inst:o})},[e,n,t]),T(function(){return h(o)&&u({inst:o}),e(function(){h(o)&&u({inst:o})})},[e]),B(n),n}function h(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!P(e,n)}catch{return!0}}function L(e,t){return t()}var j=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?L:F;b.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:j;_.exports=b;var V=_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=D,q=V;function W(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $=typeof Object.is=="function"?Object.is:W,M=q.useSyncExternalStore,z=v.useRef,K=v.useEffect,N=v.useMemo,X=v.useDebugValue;g.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var u=z(null);if(u.current===null){var l={hasValue:!1,value:null};u.current=l}else l=u.current;u=N(function(){function p(i){if(!E){if(E=!0,s=i,i=r(i),o!==void 0&&l.hasValue){var a=l.value;if(o(a,i))return d=a}return d=i}if(a=d,$(s,i))return a;var y=r(i);return o!==void 0&&o(a,y)?a:(s=i,d=y)}var E=!1,s,d,c=n===void 0?null:n;return[function(){return p(t())},c===null?void 0:function(){return p(c())}]},[t,n,r,o]);var S=M(e,u[0],u[1]);return K(function(){l.hasValue=!0,l.value=S},[S]),X(S),S};x.exports=g;var k=x.exports;const G=w(k),{useDebugValue:H}=I,{useSyncExternalStoreWithSelector:J}=G;const Q=e=>e;function Y(e,t=Q,n){const r=J(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return H(r),r}const R=e=>{const t=typeof e=="function"?A(e):e,n=(r,o)=>Y(t,r,o);return Object.assign(n,t),n},Z=e=>e?R(e):R,te=Z(e=>({response_id:null,content:"",username:"",setResponseId:t=>e({response_id:t}),setContent:t=>e({content:t}),setUsername:t=>e({username:t}),clearResponse:()=>e({response_id:null,content:"",username:""})}));export{te as u};
