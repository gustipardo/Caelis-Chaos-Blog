import{r as R,g as I,R as O}from"./index.C--6pZtI.js";const m=e=>{let t;const n=new Set,o=(s,d)=>{const c=typeof s=="function"?s(t):s;if(!Object.is(c,t)){const i=t;t=d??(typeof c!="object"||c===null)?c:Object.assign({},t,c),n.forEach(a=>a(t,i))}},r=()=>t,p={setState:o,getState:r,getInitialState:()=>E,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{n.clear()}},E=t=e(o,r,p);return p},_=e=>e?m(e):m;var g={exports:{}},D={},b={exports:{}},w={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=R;function A(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var T=typeof Object.is=="function"?Object.is:A,F=f.useState,P=f.useEffect,j=f.useLayoutEffect,V=f.useDebugValue;function q(e,t){var n=t(),o=F({inst:{value:n,getSnapshot:t}}),r=o[0].inst,u=o[1];return j(function(){r.value=n,r.getSnapshot=t,y(r)&&u({inst:r})},[e,n,t]),P(function(){return y(r)&&u({inst:r}),e(function(){y(r)&&u({inst:r})})},[e]),V(n),n}function y(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!T(e,n)}catch{return!0}}function W(e,t){return t()}var $=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?W:q;w.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:$;b.exports=w;var C=b.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=R,U=C;function B(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var L=typeof Object.is=="function"?Object.is:B,M=U.useSyncExternalStore,z=v.useRef,X=v.useEffect,k=v.useMemo,G=v.useDebugValue;D.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var u=z(null);if(u.current===null){var l={hasValue:!1,value:null};u.current=l}else l=u.current;u=k(function(){function p(i){if(!E){if(E=!0,s=i,i=o(i),r!==void 0&&l.hasValue){var a=l.value;if(r(a,i))return d=a}return d=i}if(a=d,L(s,i))return a;var h=o(i);return r!==void 0&&r(a,h)?a:(s=i,d=h)}var E=!1,s,d,c=n===void 0?null:n;return[function(){return p(t())},c===null?void 0:function(){return p(c())}]},[t,n,o,r]);var S=M(e,u[0],u[1]);return X(function(){l.hasValue=!0,l.value=S},[S]),G(S),S};g.exports=D;var H=g.exports;const J=I(H),{useDebugValue:K}=O,{useSyncExternalStoreWithSelector:N}=J;const Q=e=>e;function Y(e,t=Q,n){const o=N(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return K(o),o}const x=e=>{const t=typeof e=="function"?_(e):e,n=(o,r)=>Y(t,o,r);return Object.assign(n,t),n},Z=e=>e?x(e):x,te=Z(e=>({response_id:null,content:"",username:"",setResponseId:t=>e({response_id:t}),setContent:t=>e({content:t}),setUsername:t=>e({username:t}),clearResponse:()=>e({response_id:null,content:"",username:""})}));export{te as u};
