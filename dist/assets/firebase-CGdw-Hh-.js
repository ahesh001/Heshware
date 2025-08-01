const xo=()=>{};var pr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let a=i.charCodeAt(r);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Fo=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const a=i[n++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[r++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],h=i[n++],_=i[n++],I=((a&7)<<18|(c&63)<<12|(h&63)<<6|_&63)-65536;e[r++]=String.fromCharCode(55296+(I>>10)),e[r++]=String.fromCharCode(56320+(I&1023))}else{const c=i[n++],h=i[n++];e[r++]=String.fromCharCode((a&15)<<12|(c&63)<<6|h&63)}}return e.join("")},ns={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<i.length;a+=3){const c=i[a],h=a+1<i.length,_=h?i[a+1]:0,I=a+2<i.length,E=I?i[a+2]:0,S=c>>2,C=(c&3)<<4|_>>4;let A=(_&15)<<2|E>>6,M=E&63;I||(M=64,h||(A=64)),r.push(n[S],n[C],n[A],n[M])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ts(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Fo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],_=a<i.length?n[i.charAt(a)]:0;++a;const E=a<i.length?n[i.charAt(a)]:64;++a;const C=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||_==null||E==null||C==null)throw new jo;const A=c<<2|_>>4;if(r.push(A),E!==64){const M=_<<4&240|E>>2;if(r.push(M),C!==64){const k=E<<6&192|C;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class jo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bo=function(i){const e=ts(i);return ns.encodeByteArray(e,!0)},Yt=function(i){return Bo(i).replace(/\./g,"")},is=function(i){try{return ns.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=()=>Vo().__FIREBASE_DEFAULTS__,$o=()=>{if(typeof process>"u"||typeof pr>"u")return;const i=pr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},zo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&is(i[1]);return e&&JSON.parse(e)},Qn=()=>{try{return xo()||Ho()||$o()||zo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},rs=i=>{var e,n;return(n=(e=Qn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Wo=i=>{const e=rs(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ss=()=>{var i;return(i=Qn())===null||i===void 0?void 0:i.config},os=i=>{var e;return(e=Qn())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(i){return i.endsWith(".cloudworkstations.dev")}async function as(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Yt(JSON.stringify(n)),Yt(JSON.stringify(h)),""].join(".")}const gt={};function Ko(){const i={prod:[],emulator:[]};for(const e of Object.keys(gt))gt[e]?i.emulator.push(e):i.prod.push(e);return i}function Jo(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let gr=!1;function cs(i,e){if(typeof window>"u"||typeof document>"u"||!wt(window.location.host)||gt[i]===e||gt[i]||gr)return;gt[i]=e;function n(A){return`__firebase__banner__${A}`}const r="__firebase__banner",c=Ko().prod.length>0;function h(){const A=document.getElementById(r);A&&A.remove()}function _(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function I(A,M){A.setAttribute("width","24"),A.setAttribute("id",M),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function E(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{gr=!0,h()},A}function S(A,M){A.setAttribute("id",M),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function C(){const A=Jo(r),M=n("text"),k=document.getElementById(M)||document.createElement("span"),U=n("learnmore"),D=document.getElementById(U)||document.createElement("a"),Q=n("preprendIcon"),j=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const F=A.element;_(F),S(D,U);const Z=E();I(j,Q),F.append(j,k,D,Z),document.body.appendChild(F)}c?(k.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function Yo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zo(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Qo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ea(){const i=K();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ta(){try{return typeof indexedDB=="object"}catch{return!1}}function na(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="FirebaseError";class ge extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ia,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Et.prototype.create)}}class Et{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],h=c?ra(c,r):"Error",_=`${this.serviceName}: ${h} (${a}).`;return new ge(a,_,r)}}function ra(i,e){return i.replace(sa,(n,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const sa=/\{\$([^}]+)}/g;function oa(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Me(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const a of n){if(!r.includes(a))return!1;const c=i[a],h=e[a];if(mr(c)&&mr(h)){if(!Me(c,h))return!1}else if(c!==h)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function mr(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function aa(i,e){const n=new ca(i,e);return n.subscribe.bind(n)}class ca{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let a;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");la(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:r},a.next===void 0&&(a.next=Un),a.error===void 0&&(a.error=Un),a.complete===void 0&&(a.complete=Un);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function la(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Un(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(i){return i&&i._delegate?i._delegate:i}class Ue{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Go;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(da(e))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});r.resolve(c)}catch{}}}}clearInstance(e=Ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ne){return this.instances.has(e)}getOptions(e=Ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,h]of this.instancesDeferred.entries()){const _=this.normalizeInstanceIdentifier(c);r===_&&h.resolve(a)}return a}onInit(e,n){var r;const a=this.normalizeInstanceIdentifier(n),c=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(a,c);const h=this.instances.get(a);return h&&e(h,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const a of r)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ua(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ne){return this.component?this.component.multipleInstances?e:Ne:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ua(i){return i===Ne?void 0:i}function da(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ha(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(O||(O={}));const pa={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},ga=O.INFO,ma={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},va=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),a=ma[e];if(a)console[a](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ei{constructor(e){this.name=e,this._logLevel=ga,this._logHandler=va,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const _a=(i,e)=>e.some(n=>i instanceof n);let vr,_r;function ya(){return vr||(vr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ia(){return _r||(_r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ls=new WeakMap,zn=new WeakMap,hs=new WeakMap,xn=new WeakMap,ti=new WeakMap;function wa(i){const e=new Promise((n,r)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{n(Se(i.result)),a()},h=()=>{r(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&ls.set(n,i)}).catch(()=>{}),ti.set(e,i),e}function Ea(i){if(zn.has(i))return;const e=new Promise((n,r)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{n(),a()},h=()=>{r(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});zn.set(i,e)}let Wn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return zn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||hs.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Ta(i){Wn=i(Wn)}function Aa(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Fn(this),e,...n);return hs.set(r,e.sort?e.sort():[e]),Se(r)}:Ia().includes(i)?function(...e){return i.apply(Fn(this),e),Se(ls.get(this))}:function(...e){return Se(i.apply(Fn(this),e))}}function ba(i){return typeof i=="function"?Aa(i):(i instanceof IDBTransaction&&Ea(i),_a(i,ya())?new Proxy(i,Wn):i)}function Se(i){if(i instanceof IDBRequest)return wa(i);if(xn.has(i))return xn.get(i);const e=ba(i);return e!==i&&(xn.set(i,e),ti.set(e,i)),e}const Fn=i=>ti.get(i);function Sa(i,e,{blocked:n,upgrade:r,blocking:a,terminated:c}={}){const h=indexedDB.open(i,e),_=Se(h);return r&&h.addEventListener("upgradeneeded",I=>{r(Se(h.result),I.oldVersion,I.newVersion,Se(h.transaction),I)}),n&&h.addEventListener("blocked",I=>n(I.oldVersion,I.newVersion,I)),_.then(I=>{c&&I.addEventListener("close",()=>c()),a&&I.addEventListener("versionchange",E=>a(E.oldVersion,E.newVersion,E))}).catch(()=>{}),_}const Ca=["get","getKey","getAll","getAllKeys","count"],ka=["put","add","delete","clear"],jn=new Map;function yr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(jn.get(e))return jn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,a=ka.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||Ca.includes(n)))return;const c=async function(h,..._){const I=this.transaction(h,a?"readwrite":"readonly");let E=I.store;return r&&(E=E.index(_.shift())),(await Promise.all([E[n](..._),a&&I.done]))[0]};return jn.set(e,c),c}Ta(i=>({...i,get:(e,n,r)=>yr(e,n)||i.get(e,n,r),has:(e,n)=>!!yr(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ra(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ra(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gn="@firebase/app",Ir="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new ei("@firebase/app"),Oa="@firebase/app-compat",Da="@firebase/analytics-compat",Na="@firebase/analytics",La="@firebase/app-check-compat",Ma="@firebase/app-check",Ua="@firebase/auth",xa="@firebase/auth-compat",Fa="@firebase/database",ja="@firebase/data-connect",Ba="@firebase/database-compat",Va="@firebase/functions",Ha="@firebase/functions-compat",$a="@firebase/installations",za="@firebase/installations-compat",Wa="@firebase/messaging",Ga="@firebase/messaging-compat",qa="@firebase/performance",Ka="@firebase/performance-compat",Ja="@firebase/remote-config",Xa="@firebase/remote-config-compat",Ya="@firebase/storage",Za="@firebase/storage-compat",Qa="@firebase/firestore",ec="@firebase/ai",tc="@firebase/firestore-compat",nc="firebase",ic="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]",rc={[Gn]:"fire-core",[Oa]:"fire-core-compat",[Na]:"fire-analytics",[Da]:"fire-analytics-compat",[Ma]:"fire-app-check",[La]:"fire-app-check-compat",[Ua]:"fire-auth",[xa]:"fire-auth-compat",[Fa]:"fire-rtdb",[ja]:"fire-data-connect",[Ba]:"fire-rtdb-compat",[Va]:"fire-fn",[Ha]:"fire-fn-compat",[$a]:"fire-iid",[za]:"fire-iid-compat",[Wa]:"fire-fcm",[Ga]:"fire-fcm-compat",[qa]:"fire-perf",[Ka]:"fire-perf-compat",[Ja]:"fire-rc",[Xa]:"fire-rc-compat",[Ya]:"fire-gcs",[Za]:"fire-gcs-compat",[Qa]:"fire-fst",[tc]:"fire-fst-compat",[ec]:"fire-vertex","fire-js":"fire-js",[nc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Map,sc=new Map,Kn=new Map;function wr(i,e){try{i.container.addComponent(e)}catch(n){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Ke(i){const e=i.name;if(Kn.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;Kn.set(e,i);for(const n of Zt.values())wr(n,i);for(const n of sc.values())wr(n,i);return!0}function ni(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function re(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ce=new Et("app","Firebase",oc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=ic;function cc(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qn,automaticDataCollectionEnabled:!0},e),a=r.name;if(typeof a!="string"||!a)throw Ce.create("bad-app-name",{appName:String(a)});if(n||(n=ss()),!n)throw Ce.create("no-options");const c=Zt.get(a);if(c){if(Me(n,c.options)&&Me(r,c.config))return c;throw Ce.create("duplicate-app",{appName:a})}const h=new fa(a);for(const I of Kn.values())h.addComponent(I);const _=new ac(n,r,h);return Zt.set(a,_),_}function us(i=qn){const e=Zt.get(i);if(!e&&i===qn&&ss())return cc();if(!e)throw Ce.create("no-app",{appName:i});return e}function ke(i,e,n){var r;let a=(r=rc[i])!==null&&r!==void 0?r:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const _=[`Unable to register library "${a}" with version "${e}":`];c&&_.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&h&&_.push("and"),h&&_.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(_.join(" "));return}Ke(new Ue(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="firebase-heartbeat-database",hc=1,yt="firebase-heartbeat-store";let Bn=null;function ds(){return Bn||(Bn=Sa(lc,hc,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(yt)}catch(n){console.warn(n)}}}}).catch(i=>{throw Ce.create("idb-open",{originalErrorMessage:i.message})})),Bn}async function uc(i){try{const n=(await ds()).transaction(yt),r=await n.objectStore(yt).get(fs(i));return await n.done,r}catch(e){if(e instanceof ge)fe.warn(e.message);else{const n=Ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fe.warn(n.message)}}}async function Er(i,e){try{const r=(await ds()).transaction(yt,"readwrite");await r.objectStore(yt).put(e,fs(i)),await r.done}catch(n){if(n instanceof ge)fe.warn(n.message);else{const r=Ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fe.warn(r.message)}}}function fs(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=1024,fc=30;class pc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Tr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>fc){const h=vc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){fe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tr(),{heartbeatsToSend:r,unsentEntries:a}=gc(this._heartbeatsCache.heartbeats),c=Yt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return fe.warn(n),""}}}function Tr(){return new Date().toISOString().substring(0,10)}function gc(i,e=dc){const n=[];let r=i.slice();for(const a of i){const c=n.find(h=>h.agent===a.agent);if(c){if(c.dates.push(a.date),Ar(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Ar(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ta()?na().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Er(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Er(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Ar(i){return Yt(JSON.stringify({version:2,heartbeats:i})).length}function vc(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let r=1;r<i.length;r++)i[r].date<n&&(n=i[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(i){Ke(new Ue("platform-logger",e=>new Pa(e),"PRIVATE")),Ke(new Ue("heartbeat",e=>new pc(e),"PRIVATE")),ke(Gn,Ir,i),ke(Gn,Ir,"esm2017"),ke("fire-js","")}_c("");function ii(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(i);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(i,r[a])&&(n[r[a]]=i[r[a]]);return n}function ps(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yc=ps,gs=new Et("auth","Firebase",ps());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new ei("@firebase/auth");function Ic(i,...e){Qt.logLevel<=O.WARN&&Qt.warn(`Auth (${Ye}): ${i}`,...e)}function qt(i,...e){Qt.logLevel<=O.ERROR&&Qt.error(`Auth (${Ye}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(i,...e){throw ri(i,...e)}function se(i,...e){return ri(i,...e)}function ms(i,e,n){const r=Object.assign(Object.assign({},yc()),{[e]:n});return new Et("auth","Firebase",r).create(e,{appName:i.name})}function Le(i){return ms(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ri(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return gs.create(i,...e)}function b(i,e,...n){if(!i)throw ri(e,...n)}function ue(i){const e="INTERNAL ASSERTION FAILED: "+i;throw qt(e),new Error(e)}function pe(i,e){i||ue(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function wc(){return br()==="http:"||br()==="https:"}function br(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wc()||Zo()||"connection"in navigator)?navigator.onLine:!0}function Tc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.shortDelay=e,this.longDelay=n,pe(n>e,"Short delay should be less than long delay!"),this.isMobile=Xo()||Qo()}get(){return Ec()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(i,e){pe(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Sc=new At(3e4,6e4);function an(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Fe(i,e,n,r,a={}){return _s(i,a,async()=>{let c={},h={};r&&(e==="GET"?h=r:c={body:JSON.stringify(r)});const _=Tt(Object.assign({key:i.config.apiKey},h)).slice(1),I=await i._getAdditionalHeaders();I["Content-Type"]="application/json",i.languageCode&&(I["X-Firebase-Locale"]=i.languageCode);const E=Object.assign({method:e,headers:I},c);return Yo()||(E.referrerPolicy="no-referrer"),i.emulatorConfig&&wt(i.emulatorConfig.host)&&(E.credentials="include"),vs.fetch()(await ys(i,i.config.apiHost,n,_),E)})}async function _s(i,e,n){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ac),e);try{const a=new kc(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Wt(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const _=c.ok?h.errorMessage:h.error.message,[I,E]=_.split(" : ");if(I==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wt(i,"credential-already-in-use",h);if(I==="EMAIL_EXISTS")throw Wt(i,"email-already-in-use",h);if(I==="USER_DISABLED")throw Wt(i,"user-disabled",h);const S=r[I]||I.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw ms(i,S,E);ae(i,S)}}catch(a){if(a instanceof ge)throw a;ae(i,"network-request-failed",{message:String(a)})}}async function Cc(i,e,n,r,a={}){const c=await Fe(i,e,n,r,a);return"mfaPendingCredential"in c&&ae(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function ys(i,e,n,r){const a=`${e}${n}?${r}`,c=i,h=c.config.emulator?si(i.config,a):`${i.config.apiScheme}://${a}`;return bc.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class kc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(se(this.auth,"network-request-failed")),Sc.get())})}}function Wt(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const a=se(i,e,r);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(i,e){return Fe(i,"POST","/v1/accounts:delete",e)}async function en(i,e){return Fe(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rc(i,e=!1){const n=me(i),r=await n.getIdToken(e),a=oi(r);b(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:a,token:r,authTime:mt(Vn(a.auth_time)),issuedAtTime:mt(Vn(a.iat)),expirationTime:mt(Vn(a.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Vn(i){return Number(i)*1e3}function oi(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return qt("JWT malformed, contained fewer than 3 sections"),null;try{const a=is(n);return a?JSON.parse(a):(qt("Failed to decode base64 JWT payload"),null)}catch(a){return qt("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Sr(i){const e=oi(i);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ge&&Oc(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function Oc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mt(this.lastLoginAt),this.creationTime=mt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(i){var e;const n=i.auth,r=await i.getIdToken(),a=await It(i,en(n,{idToken:r}));b(a==null?void 0:a.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Is(c.providerUserInfo):[],_=Lc(i.providerData,h),I=i.isAnonymous,E=!(i.email&&c.passwordHash)&&!(_!=null&&_.length),S=I?E:!1,C={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:_,metadata:new Xn(c.createdAt,c.lastLoginAt),isAnonymous:S};Object.assign(i,C)}async function Nc(i){const e=me(i);await tn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lc(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function Is(i){return i.map(e=>{var{providerId:n}=e,r=ii(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(i,e){const n=await _s(i,{},async()=>{const r=Tt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,h=await ys(i,a,"/v1/token",`key=${c}`),_=await i._getAdditionalHeaders();_["Content-Type"]="application/x-www-form-urlencoded";const I={method:"POST",headers:_,body:r};return i.emulatorConfig&&wt(i.emulatorConfig.host)&&(I.credentials="include"),vs.fetch()(h,I)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Uc(i,e){return Fe(i,"POST","/v2/accounts:revokeToken",an(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=Sr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:a,expiresIn:c}=await Mc(e,n);this.updateTokensAndExpiration(r,a,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:a,expirationTime:c}=n,h=new We;return r&&(b(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),a&&(b(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),c&&(b(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new We,this.toJSON())}_performRefresh(){return ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(i,e){b(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ne{constructor(e){var{uid:n,auth:r,stsTokenManager:a}=e,c=ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Xn(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await It(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rc(this,e)}reload(){return Nc(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(re(this.auth.app))return Promise.reject(Le(this.auth));const e=await this.getIdToken();return await It(this,Pc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,a,c,h,_,I,E,S;const C=(r=n.displayName)!==null&&r!==void 0?r:void 0,A=(a=n.email)!==null&&a!==void 0?a:void 0,M=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,k=(h=n.photoURL)!==null&&h!==void 0?h:void 0,U=(_=n.tenantId)!==null&&_!==void 0?_:void 0,D=(I=n._redirectEventId)!==null&&I!==void 0?I:void 0,Q=(E=n.createdAt)!==null&&E!==void 0?E:void 0,j=(S=n.lastLoginAt)!==null&&S!==void 0?S:void 0,{uid:F,emailVerified:Z,isAnonymous:Pe,providerData:J,stsTokenManager:m}=n;b(F&&m,e,"internal-error");const u=We.fromJSON(this.name,m);b(typeof F=="string",e,"internal-error"),we(C,e.name),we(A,e.name),b(typeof Z=="boolean",e,"internal-error"),b(typeof Pe=="boolean",e,"internal-error"),we(M,e.name),we(k,e.name),we(U,e.name),we(D,e.name),we(Q,e.name),we(j,e.name);const f=new ne({uid:F,auth:e,email:A,emailVerified:Z,displayName:C,isAnonymous:Pe,photoURL:k,phoneNumber:M,tenantId:U,stsTokenManager:u,createdAt:Q,lastLoginAt:j});return J&&Array.isArray(J)&&(f.providerData=J.map(p=>Object.assign({},p))),D&&(f._redirectEventId=D),f}static async _fromIdTokenResponse(e,n,r=!1){const a=new We;a.updateFromServerResponse(n);const c=new ne({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await tn(c),c}static async _fromGetAccountInfoResponse(e,n,r){const a=n.users[0];b(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?Is(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!(c!=null&&c.length),_=new We;_.updateFromIdToken(r);const I=new ne({uid:a.localId,auth:e,stsTokenManager:_,isAnonymous:h}),E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Xn(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(c!=null&&c.length)};return Object.assign(I,E),I}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Map;function de(i){pe(i instanceof Function,"Expected a class definition");let e=Cr.get(i);return e?(pe(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Cr.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ws.type="NONE";const kr=ws;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(i,e,n){return`firebase:${i}:${e}:${n}`}class Ge{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:a,name:c}=this.auth;this.fullUserKey=Kt(this.userKey,a.apiKey,c),this.fullPersistenceKey=Kt("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await en(this.auth,{idToken:e}).catch(()=>{});return n?ne._fromGetAccountInfoResponse(this.auth,n,e):null}return ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ge(de(kr),e,r);const a=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=a[0]||de(kr);const h=Kt(r,e.config.apiKey,e.name);let _=null;for(const E of n)try{const S=await E._get(h);if(S){let C;if(typeof S=="string"){const A=await en(e,{idToken:S}).catch(()=>{});if(!A)break;C=await ne._fromGetAccountInfoResponse(e,A,S)}else C=ne._fromJSON(e,S);E!==c&&(_=C),c=E;break}}catch{}const I=a.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!I.length?new Ge(c,e,r):(c=I[0],_&&await c._set(h,_.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(h)}catch{}})),new Ge(c,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Es(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cs(e))return"Blackberry";if(ks(e))return"Webos";if(Ts(e))return"Safari";if((e.includes("chrome/")||As(e))&&!e.includes("edge/"))return"Chrome";if(Ss(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Es(i=K()){return/firefox\//i.test(i)}function Ts(i=K()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function As(i=K()){return/crios\//i.test(i)}function bs(i=K()){return/iemobile/i.test(i)}function Ss(i=K()){return/android/i.test(i)}function Cs(i=K()){return/blackberry/i.test(i)}function ks(i=K()){return/webos/i.test(i)}function ai(i=K()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function xc(i=K()){var e;return ai(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fc(){return ea()&&document.documentMode===10}function Ps(i=K()){return ai(i)||Ss(i)||ks(i)||Cs(i)||/windows phone/i.test(i)||bs(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(i,e=[]){let n;switch(i){case"Browser":n=Pr(K());break;case"Worker":n=`${Pr(K())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ye}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((h,_)=>{try{const I=e(c);h(I)}catch(I){_(I)}});r.onAbort=n,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(i,e={}){return Fe(i,"GET","/v2/passwordPolicy",an(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=6;class Hc{constructor(e){var n,r,a,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:Vc,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,a,c,h,_;const I={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,I),this.validatePasswordCharacterOptions(e,I),I.isValid&&(I.isValid=(n=I.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),I.isValid&&(I.isValid=(r=I.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),I.isValid&&(I.isValid=(a=I.containsLowercaseLetter)!==null&&a!==void 0?a:!0),I.isValid&&(I.isValid=(c=I.containsUppercaseLetter)!==null&&c!==void 0?c:!0),I.isValid&&(I.isValid=(h=I.containsNumericCharacter)!==null&&h!==void 0?h:!0),I.isValid&&(I.isValid=(_=I.containsNonAlphanumericCharacter)!==null&&_!==void 0?_:!0),I}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rr(this),this.idTokenSubscription=new Rr(this),this.beforeStateQueue=new jc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=de(n)),this._initializationPromise=this.queue(async()=>{var r,a,c;if(!this._deleted&&(this.persistenceManager=await Ge.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await en(this,{idToken:e}),r=await ne._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(re(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(_=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(_,_))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,_=a==null?void 0:a._redirectEventId,I=await this.tryRedirectSignIn(e);(!h||h===_)&&(I!=null&&I.user)&&(a=I.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(re(this.app))return Promise.reject(Le(this));const n=e?me(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return re(this.app)?Promise.reject(Le(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return re(this.app)?Promise.reject(Le(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bc(this),n=new Hc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Et("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Uc(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&de(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Ge.create(this,[de(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let h=!1;const _=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(_,this,"internal-error"),_.then(()=>{h||c(this.currentUser)}),typeof n=="function"){const I=e.addObserver(n,r,a);return()=>{h=!0,I()}}else{const I=e.addObserver(n);return()=>{h=!0,I()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;if(re(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ic(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bt(i){return me(i)}class Rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=aa(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zc(i){ci=i}function Wc(i){return ci.loadJS(i)}function Gc(){return ci.gapiScript}function qc(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(i,e){const n=ni(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(Me(c,e??{}))return a;ae(a,"already-initialized")}return n.initialize({options:e})}function Jc(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(de);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xc(i,e,n){const r=bt(i);b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!1,c=Os(e),{host:h,port:_}=Yc(e),I=_===null?"":`:${_}`,E={url:`${c}//${h}${I}/`},S=Object.freeze({host:h,port:_,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){b(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),b(Me(E,r.config.emulator)&&Me(S,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=E,r.emulatorConfig=S,r.settings.appVerificationDisabledForTesting=!0,wt(h)?(as(`${c}//${h}${I}`),cs("Auth",!0)):Zc()}function Os(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Yc(i){const e=Os(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const c=a[1];return{host:c,port:Or(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:Or(h)}}}function Or(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Zc(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ue("not implemented")}_getIdTokenResponse(e){return ue("not implemented")}_linkToIdToken(e,n){return ue("not implemented")}_getReauthenticationResolver(e){return ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(i,e){return Fe(i,"POST","/v1/accounts:resetPassword",an(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(i,e){return Cc(i,"POST","/v1/accounts:signInWithIdp",an(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="http://localhost";class xe extends Ds{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ae("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=n,c=ii(n,["providerId","signInMethod"]);if(!r||!a)return null;const h=new xe(r,a);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return qe(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qe(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qe(e,n)}buildRequest(){const e={requestUri:Qc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Tt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Ls{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends St{constructor(){super("facebook.com")}static credential(e){return xe._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ee.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends St{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xe._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Te.credential(n,r)}catch{return null}}}Te.GOOGLE_SIGN_IN_METHOD="google.com";Te.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends St{constructor(){super("github.com")}static credential(e){return xe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.GITHUB_SIGN_IN_METHOD="github.com";Ae.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends St{constructor(){super("twitter.com")}static credential(e,n){return xe._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return be.credential(n,r)}catch{return null}}}be.TWITTER_SIGN_IN_METHOD="twitter.com";be.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,a=!1){const c=await ne._fromIdTokenResponse(e,r,a),h=Dr(r);return new Je({user:c,providerId:h,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const a=Dr(r);return new Je({user:e,providerId:a,_tokenResponse:r,operationType:n})}}function Dr(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends ge{constructor(e,n,r,a){var c;super(n.code,n.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,nn.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,a){return new nn(e,n,r,a)}}function Ms(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?nn._fromErrorAndOperation(i,c,e,r):c})}async function el(i,e,n=!1){const r=await It(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Je._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(i,e,n=!1){const{auth:r}=i;if(re(r.app))return Promise.reject(Le(r));const a="reauthenticate";try{const c=await It(i,Ms(r,a,e,i),n);b(c.idToken,r,"internal-error");const h=oi(c.idToken);b(h,r,"internal-error");const{sub:_}=h;return b(i.uid===_,r,"user-mismatch"),Je._forOperation(i,a,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&ae(r,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(i,e,n=!1){if(re(i.app))return Promise.reject(Le(i));const r="signIn",a=await Ms(i,r,e),c=await Je._fromIdTokenResponse(i,r,a);return n||await i._updateCurrentUser(c.user),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?hi._fromServerResponse(e,n):"totpInfo"in n?ui._fromServerResponse(e,n):ae(e,"internal-error")}}class hi extends li{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new hi(n)}}class ui extends li{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new ui(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(i){const e=bt(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xh(i,e,n){await Ns(me(i),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&il(i),r})}async function rl(i,e){const n=me(i),r=await Ns(n,{oobCode:e}),a=r.requestType;switch(b(a,n,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":b(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":b(r.mfaInfo,n,"internal-error");default:b(r.email,n,"internal-error")}let c=null;return r.mfaInfo&&(c=li._fromServerResponse(bt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:c},operation:a}}async function Fh(i,e){const{data:n}=await rl(me(i),e);return n.email}function sl(i,e,n,r){return me(i).onIdTokenChanged(e,n,r)}function ol(i,e,n){return me(i).beforeAuthStateChanged(e,n)}const rn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rn,"1"),this.storage.removeItem(rn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=1e3,cl=10;class xs extends Us{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ps(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),a=this.localCache[n];r!==a&&e(n,a,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,_,I)=>{this.notifyListeners(h,I)});return}const r=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(r);!n&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);Fc()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,cl):a()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},al)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xs.type="LOCAL";const ll=xs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Us{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fs.type="SESSION";const js=Fs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const r=new cn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:a,data:c}=n.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const _=Array.from(h).map(async E=>E(n.origin,c)),I=await hl(_);n.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:I})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,h;return new Promise((_,I)=>{const E=di("",20);a.port1.start();const S=setTimeout(()=>{I(new Error("unsupported_event"))},r);h={messageChannel:a,onMessage(C){const A=C;if(A.data.eventId===E)switch(A.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{I(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),_(A.data.response);break;default:clearTimeout(S),clearTimeout(c),I(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return window}function dl(i){oe().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(){return typeof oe().WorkerGlobalScope<"u"&&typeof oe().importScripts=="function"}async function fl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pl(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function gl(){return Bs()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="firebaseLocalStorageDb",ml=1,sn="firebaseLocalStorage",Hs="fbase_key";class Ct{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ln(i,e){return i.transaction([sn],e?"readwrite":"readonly").objectStore(sn)}function vl(){const i=indexedDB.deleteDatabase(Vs);return new Ct(i).toPromise()}function Yn(){const i=indexedDB.open(Vs,ml);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(sn,{keyPath:Hs})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(sn)?e(r):(r.close(),await vl(),e(await Yn()))})})}async function Nr(i,e,n){const r=ln(i,!0).put({[Hs]:e,value:n});return new Ct(r).toPromise()}async function _l(i,e){const n=ln(i,!1).get(e),r=await new Ct(n).toPromise();return r===void 0?null:r.value}function Lr(i,e){const n=ln(i,!0).delete(e);return new Ct(n).toPromise()}const yl=800,Il=3;class $s{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Il)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cn._getInstance(gl()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fl(),!this.activeServiceWorker)return;this.sender=new ul(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yn();return await Nr(e,rn,"1"),await Lr(e,rn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_l(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=ln(a,!1).getAll();return new Ct(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$s.type="LOCAL";const wl=$s;new At(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(i,e){return e?de(e):(b(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Ds{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Tl(i){return nl(i.auth,new fi(i),i.bypassAuthState)}function Al(i){const{auth:e,user:n}=i;return b(n,e,"internal-error"),tl(n,new fi(i),i.bypassAuthState)}async function bl(i){const{auth:e,user:n}=i;return b(n,e,"internal-error"),el(n,new fi(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,r,a,c=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:a,tenantId:c,error:h,type:_}=e;if(h){this.reject(h);return}const I={auth:this.auth,requestUri:n,sessionId:r,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(_)(I))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tl;case"linkViaPopup":case"linkViaRedirect":return bl;case"reauthViaPopup":case"reauthViaRedirect":return Al;default:ae(this.auth,"internal-error")}}resolve(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new At(2e3,1e4);class ze extends zs{constructor(e,n,r,a,c){super(e,n,a,c),this.provider=r,this.authWindow=null,this.pollId=null,ze.currentPopupAction&&ze.currentPopupAction.cancel(),ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){pe(this.filter.length===1,"Popup operations only handle one event");const e=di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sl.get())};e()}}ze.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="pendingRedirect",Jt=new Map;class kl extends zs{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jt.get(this.auth._key());if(!e){try{const r=await Pl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jt.set(this.auth._key(),e)}return this.bypassAuthState||Jt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pl(i,e){const n=Dl(e),r=Ol(i);if(!await r._isAvailable())return!1;const a=await r._get(n)==="true";return await r._remove(n),a}function Rl(i,e){Jt.set(i._key(),e)}function Ol(i){return de(i._redirectPersistence)}function Dl(i){return Kt(Cl,i.config.apiKey,i.name)}async function Nl(i,e,n=!1){if(re(i.app))return Promise.reject(Le(i));const r=bt(i),a=El(r,e),h=await new kl(r,a,n).execute();return h&&!n&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=10*60*1e3;class Ml{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ul(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ws(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(se(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ll&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mr(e))}saveEventToCache(e){this.cachedEventUids.add(Mr(e)),this.lastProcessedEventTime=Date.now()}}function Mr(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Ws({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ul(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ws(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(i,e={}){return Fe(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jl=/^https?/;async function Bl(i){if(i.config.emulator)return;const{authorizedDomains:e}=await xl(i);for(const n of e)try{if(Vl(n))return}catch{}ae(i,"unauthorized-domain")}function Vl(i){const e=Jn(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===r}if(!jl.test(n))return!1;if(Fl.test(i))return r===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new At(3e4,6e4);function Ur(){const i=oe().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function $l(i){return new Promise((e,n)=>{var r,a,c;function h(){Ur(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ur(),n(se(i,"network-request-failed"))},timeout:Hl.get()})}if(!((a=(r=oe().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=oe().gapi)===null||c===void 0)&&c.load)h();else{const _=qc("iframefcb");return oe()[_]=()=>{gapi.load?h():n(se(i,"network-request-failed"))},Wc(`${Gc()}?onload=${_}`).catch(I=>n(I))}}).catch(e=>{throw Xt=null,e})}let Xt=null;function zl(i){return Xt=Xt||$l(i),Xt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new At(5e3,15e3),Gl="__/auth/iframe",ql="emulator/auth/iframe",Kl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xl(i){const e=i.config;b(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?si(e,ql):`https://${i.config.authDomain}/${Gl}`,r={apiKey:e.apiKey,appName:i.name,v:Ye},a=Jl.get(i.config.apiHost);a&&(r.eid=a);const c=i._getFrameworks();return c.length&&(r.fw=c.join(",")),`${n}?${Tt(r).slice(1)}`}async function Yl(i){const e=await zl(i),n=oe().gapi;return b(n,i,"internal-error"),e.open({where:document.body,url:Xl(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kl,dontclear:!0},r=>new Promise(async(a,c)=>{await r.restyle({setHideOnLeave:!1});const h=se(i,"network-request-failed"),_=oe().setTimeout(()=>{c(h)},Wl.get());function I(){oe().clearTimeout(_),a(r)}r.ping(I).then(I,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ql=500,eh=600,th="_blank",nh="http://localhost";class xr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ih(i,e,n,r=Ql,a=eh){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let _="";const I=Object.assign(Object.assign({},Zl),{width:r.toString(),height:a.toString(),top:c,left:h}),E=K().toLowerCase();n&&(_=As(E)?th:n),Es(E)&&(e=e||nh,I.scrollbars="yes");const S=Object.entries(I).reduce((A,[M,k])=>`${A}${M}=${k},`,"");if(xc(E)&&_!=="_self")return rh(e||"",_),new xr(null);const C=window.open(e||"",_,S);b(C,i,"popup-blocked");try{C.focus()}catch{}return new xr(C)}function rh(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="__/auth/handler",oh="emulator/auth/handler",ah=encodeURIComponent("fac");async function Fr(i,e,n,r,a,c){b(i.config.authDomain,i,"auth-domain-config-required"),b(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:Ye,eventId:a};if(e instanceof Ls){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",oa(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,C]of Object.entries({}))h[S]=C}if(e instanceof St){const S=e.getScopes().filter(C=>C!=="");S.length>0&&(h.scopes=S.join(","))}i.tenantId&&(h.tid=i.tenantId);const _=h;for(const S of Object.keys(_))_[S]===void 0&&delete _[S];const I=await i._getAppCheckToken(),E=I?`#${ah}=${encodeURIComponent(I)}`:"";return`${ch(i)}?${Tt(_).slice(1)}${E}`}function ch({config:i}){return i.emulator?si(i,oh):`https://${i.authDomain}/${sh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="webStorageSupport";class lh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=js,this._completeRedirectFn=Nl,this._overrideRedirectResult=Rl}async _openPopup(e,n,r,a){var c;pe((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await Fr(e,n,r,Jn(),a);return ih(e,h,di())}async _openRedirect(e,n,r,a){await this._originValidation(e);const c=await Fr(e,n,r,Jn(),a);return dl(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(pe(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Yl(e),r=new Ml(e);return n.register("authEvent",a=>(b(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hn,{type:Hn},a=>{var c;const h=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[Hn];h!==void 0&&n(!!h),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ps()||Ts()||ai()}}const hh=lh;var jr="@firebase/auth",Br="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fh(i){Ke(new Ue("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:_}=r.options;b(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const I={apiKey:h,authDomain:_,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rs(i)},E=new $c(r,a,c,I);return Jc(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ke(new Ue("auth-internal",e=>{const n=bt(e.getProvider("auth").getImmediate());return(r=>new uh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(jr,Br,dh(i)),ke(jr,Br,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=5*60,gh=os("authIdTokenMaxAge")||ph;let Vr=null;const mh=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gh)return;const a=n==null?void 0:n.token;Vr!==a&&(Vr=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function jh(i=us()){const e=ni(i,"auth");if(e.isInitialized())return e.getImmediate();const n=Kc(i,{popupRedirectResolver:hh,persistence:[wl,ll,js]}),r=os("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=mh(c.toString());ol(n,h,()=>h(n.currentUser)),sl(n,_=>h(_))}}const a=rs("auth");return a&&Xc(n,`http://${a}`),n}function vh(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}zc({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=a=>{const c=se("internal-error");c.customData=a,n(c)},r.type="text/javascript",r.charset="UTF-8",vh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fh("Browser");var _h="firebase",yh="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke(_h,yh,"app");var Hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gs;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,u){function f(){}f.prototype=u.prototype,m.D=u.prototype,m.prototype=new f,m.prototype.constructor=m,m.C=function(p,g,y){for(var d=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)d[ce-2]=arguments[ce];return u.prototype[g].apply(p,d)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(m,u,f){f||(f=0);var p=Array(16);if(typeof u=="string")for(var g=0;16>g;++g)p[g]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(g=0;16>g;++g)p[g]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=m.g[0],f=m.g[1],g=m.g[2];var y=m.g[3],d=u+(y^f&(g^y))+p[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=y+(g^u&(f^g))+p[1]+3905402710&4294967295,y=u+(d<<12&4294967295|d>>>20),d=g+(f^y&(u^f))+p[2]+606105819&4294967295,g=y+(d<<17&4294967295|d>>>15),d=f+(u^g&(y^u))+p[3]+3250441966&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(y^f&(g^y))+p[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(g^u&(f^g))+p[5]+1200080426&4294967295,y=u+(d<<12&4294967295|d>>>20),d=g+(f^y&(u^f))+p[6]+2821735955&4294967295,g=y+(d<<17&4294967295|d>>>15),d=f+(u^g&(y^u))+p[7]+4249261313&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(y^f&(g^y))+p[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(g^u&(f^g))+p[9]+2336552879&4294967295,y=u+(d<<12&4294967295|d>>>20),d=g+(f^y&(u^f))+p[10]+4294925233&4294967295,g=y+(d<<17&4294967295|d>>>15),d=f+(u^g&(y^u))+p[11]+2304563134&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(y^f&(g^y))+p[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(g^u&(f^g))+p[13]+4254626195&4294967295,y=u+(d<<12&4294967295|d>>>20),d=g+(f^y&(u^f))+p[14]+2792965006&4294967295,g=y+(d<<17&4294967295|d>>>15),d=f+(u^g&(y^u))+p[15]+1236535329&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(g^y&(f^g))+p[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^g&(u^f))+p[6]+3225465664&4294967295,y=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(y^u))+p[11]+643717713&4294967295,g=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(g^y))+p[0]+3921069994&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^y&(f^g))+p[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^g&(u^f))+p[10]+38016083&4294967295,y=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(y^u))+p[15]+3634488961&4294967295,g=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(g^y))+p[4]+3889429448&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^y&(f^g))+p[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^g&(u^f))+p[14]+3275163606&4294967295,y=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(y^u))+p[3]+4107603335&4294967295,g=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(g^y))+p[8]+1163531501&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^y&(f^g))+p[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^g&(u^f))+p[2]+4243563512&4294967295,y=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(y^u))+p[7]+1735328473&4294967295,g=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(g^y))+p[12]+2368359562&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(f^g^y)+p[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^g)+p[8]+2272392833&4294967295,y=u+(d<<11&4294967295|d>>>21),d=g+(y^u^f)+p[11]+1839030562&4294967295,g=y+(d<<16&4294967295|d>>>16),d=f+(g^y^u)+p[14]+4259657740&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^y)+p[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^g)+p[4]+1272893353&4294967295,y=u+(d<<11&4294967295|d>>>21),d=g+(y^u^f)+p[7]+4139469664&4294967295,g=y+(d<<16&4294967295|d>>>16),d=f+(g^y^u)+p[10]+3200236656&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^y)+p[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^g)+p[0]+3936430074&4294967295,y=u+(d<<11&4294967295|d>>>21),d=g+(y^u^f)+p[3]+3572445317&4294967295,g=y+(d<<16&4294967295|d>>>16),d=f+(g^y^u)+p[6]+76029189&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^y)+p[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^g)+p[12]+3873151461&4294967295,y=u+(d<<11&4294967295|d>>>21),d=g+(y^u^f)+p[15]+530742520&4294967295,g=y+(d<<16&4294967295|d>>>16),d=f+(g^y^u)+p[2]+3299628645&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(g^(f|~y))+p[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~g))+p[7]+1126891415&4294967295,y=u+(d<<10&4294967295|d>>>22),d=g+(u^(y|~f))+p[14]+2878612391&4294967295,g=y+(d<<15&4294967295|d>>>17),d=f+(y^(g|~u))+p[5]+4237533241&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~y))+p[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~g))+p[3]+2399980690&4294967295,y=u+(d<<10&4294967295|d>>>22),d=g+(u^(y|~f))+p[10]+4293915773&4294967295,g=y+(d<<15&4294967295|d>>>17),d=f+(y^(g|~u))+p[1]+2240044497&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~y))+p[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~g))+p[15]+4264355552&4294967295,y=u+(d<<10&4294967295|d>>>22),d=g+(u^(y|~f))+p[6]+2734768916&4294967295,g=y+(d<<15&4294967295|d>>>17),d=f+(y^(g|~u))+p[13]+1309151649&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~y))+p[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~g))+p[11]+3174756917&4294967295,y=u+(d<<10&4294967295|d>>>22),d=g+(u^(y|~f))+p[2]+718787259&4294967295,g=y+(d<<15&4294967295|d>>>17),d=f+(y^(g|~u))+p[9]+3951481745&4294967295,m.g[0]=m.g[0]+u&4294967295,m.g[1]=m.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+y&4294967295}r.prototype.u=function(m,u){u===void 0&&(u=m.length);for(var f=u-this.blockSize,p=this.B,g=this.h,y=0;y<u;){if(g==0)for(;y<=f;)a(this,m,y),y+=this.blockSize;if(typeof m=="string"){for(;y<u;)if(p[g++]=m.charCodeAt(y++),g==this.blockSize){a(this,p),g=0;break}}else for(;y<u;)if(p[g++]=m[y++],g==this.blockSize){a(this,p),g=0;break}}this.h=g,this.o+=u},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var u=1;u<m.length-8;++u)m[u]=0;var f=8*this.o;for(u=m.length-8;u<m.length;++u)m[u]=f&255,f/=256;for(this.u(m),m=Array(16),u=f=0;4>u;++u)for(var p=0;32>p;p+=8)m[f++]=this.g[u]>>>p&255;return m};function c(m,u){var f=_;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=u(m)}function h(m,u){this.h=u;for(var f=[],p=!0,g=m.length-1;0<=g;g--){var y=m[g]|0;p&&y==u||(f[g]=y,p=!1)}this.g=f}var _={};function I(m){return-128<=m&&128>m?c(m,function(u){return new h([u|0],0>u?-1:0)}):new h([m|0],0>m?-1:0)}function E(m){if(isNaN(m)||!isFinite(m))return C;if(0>m)return D(E(-m));for(var u=[],f=1,p=0;m>=f;p++)u[p]=m/f|0,f*=4294967296;return new h(u,0)}function S(m,u){if(m.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(m.charAt(0)=="-")return D(S(m.substring(1),u));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(u,8)),p=C,g=0;g<m.length;g+=8){var y=Math.min(8,m.length-g),d=parseInt(m.substring(g,g+y),u);8>y?(y=E(Math.pow(u,y)),p=p.j(y).add(E(d))):(p=p.j(f),p=p.add(E(d)))}return p}var C=I(0),A=I(1),M=I(16777216);i=h.prototype,i.m=function(){if(U(this))return-D(this).m();for(var m=0,u=1,f=0;f<this.g.length;f++){var p=this.i(f);m+=(0<=p?p:4294967296+p)*u,u*=4294967296}return m},i.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(k(this))return"0";if(U(this))return"-"+D(this).toString(m);for(var u=E(Math.pow(m,6)),f=this,p="";;){var g=Z(f,u).g;f=Q(f,g.j(u));var y=((0<f.g.length?f.g[0]:f.h)>>>0).toString(m);if(f=g,k(f))return y+p;for(;6>y.length;)y="0"+y;p=y+p}},i.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function k(m){if(m.h!=0)return!1;for(var u=0;u<m.g.length;u++)if(m.g[u]!=0)return!1;return!0}function U(m){return m.h==-1}i.l=function(m){return m=Q(this,m),U(m)?-1:k(m)?0:1};function D(m){for(var u=m.g.length,f=[],p=0;p<u;p++)f[p]=~m.g[p];return new h(f,~m.h).add(A)}i.abs=function(){return U(this)?D(this):this},i.add=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0,g=0;g<=u;g++){var y=p+(this.i(g)&65535)+(m.i(g)&65535),d=(y>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);p=d>>>16,y&=65535,d&=65535,f[g]=d<<16|y}return new h(f,f[f.length-1]&-2147483648?-1:0)};function Q(m,u){return m.add(D(u))}i.j=function(m){if(k(this)||k(m))return C;if(U(this))return U(m)?D(this).j(D(m)):D(D(this).j(m));if(U(m))return D(this.j(D(m)));if(0>this.l(M)&&0>m.l(M))return E(this.m()*m.m());for(var u=this.g.length+m.g.length,f=[],p=0;p<2*u;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<m.g.length;g++){var y=this.i(p)>>>16,d=this.i(p)&65535,ce=m.i(g)>>>16,Ze=m.i(g)&65535;f[2*p+2*g]+=d*Ze,j(f,2*p+2*g),f[2*p+2*g+1]+=y*Ze,j(f,2*p+2*g+1),f[2*p+2*g+1]+=d*ce,j(f,2*p+2*g+1),f[2*p+2*g+2]+=y*ce,j(f,2*p+2*g+2)}for(p=0;p<u;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=u;p<2*u;p++)f[p]=0;return new h(f,0)};function j(m,u){for(;(m[u]&65535)!=m[u];)m[u+1]+=m[u]>>>16,m[u]&=65535,u++}function F(m,u){this.g=m,this.h=u}function Z(m,u){if(k(u))throw Error("division by zero");if(k(m))return new F(C,C);if(U(m))return u=Z(D(m),u),new F(D(u.g),D(u.h));if(U(u))return u=Z(m,D(u)),new F(D(u.g),u.h);if(30<m.g.length){if(U(m)||U(u))throw Error("slowDivide_ only works with positive integers.");for(var f=A,p=u;0>=p.l(m);)f=Pe(f),p=Pe(p);var g=J(f,1),y=J(p,1);for(p=J(p,2),f=J(f,2);!k(p);){var d=y.add(p);0>=d.l(m)&&(g=g.add(f),y=d),p=J(p,1),f=J(f,1)}return u=Q(m,g.j(u)),new F(g,u)}for(g=C;0<=m.l(u);){for(f=Math.max(1,Math.floor(m.m()/u.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),y=E(f),d=y.j(u);U(d)||0<d.l(m);)f-=p,y=E(f),d=y.j(u);k(y)&&(y=A),g=g.add(y),m=Q(m,d)}return new F(g,m)}i.A=function(m){return Z(this,m).h},i.and=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)&m.i(p);return new h(f,this.h&m.h)},i.or=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)|m.i(p);return new h(f,this.h|m.h)},i.xor=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)^m.i(p);return new h(f,this.h^m.h)};function Pe(m){for(var u=m.g.length+1,f=[],p=0;p<u;p++)f[p]=m.i(p)<<1|m.i(p-1)>>>31;return new h(f,m.h)}function J(m,u){var f=u>>5;u%=32;for(var p=m.g.length-f,g=[],y=0;y<p;y++)g[y]=0<u?m.i(y+f)>>>u|m.i(y+f+1)<<32-u:m.i(y+f);return new h(g,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=E,h.fromString=S,Gs=h}).apply(typeof Hr<"u"?Hr:typeof self<"u"?self:typeof window<"u"?window:{});var Gt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,o){return t==Array.prototype||t==Object.prototype||(t[s]=o.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gt=="object"&&Gt];for(var s=0;s<t.length;++s){var o=t[s];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var r=n(this);function a(t,s){if(s)e:{var o=r;t=t.split(".");for(var l=0;l<t.length-1;l++){var v=t[l];if(!(v in o))break e;o=o[v]}t=t[t.length-1],l=o[t],s=s(l),s!=l&&s!=null&&e(o,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var o=0,l=!1,v={next:function(){if(!l&&o<t.length){var w=o++;return{value:s(w,t[w]),done:!1}}return l=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}a("Array.prototype.values",function(t){return t||function(){return c(this,function(s,o){return o})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},_=this||self;function I(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function E(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function S(t,s,o){return t.call.apply(t.bind,arguments)}function C(t,s,o){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,l),t.apply(s,v)}}return function(){return t.apply(s,arguments)}}function A(t,s,o){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:C,A.apply(null,arguments)}function M(t,s){var o=Array.prototype.slice.call(arguments,1);return function(){var l=o.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function k(t,s){function o(){}o.prototype=s.prototype,t.aa=s.prototype,t.prototype=new o,t.prototype.constructor=t,t.Qb=function(l,v,w){for(var T=Array(arguments.length-2),N=2;N<arguments.length;N++)T[N-2]=arguments[N];return s.prototype[v].apply(l,T)}}function U(t){const s=t.length;if(0<s){const o=Array(s);for(let l=0;l<s;l++)o[l]=t[l];return o}return[]}function D(t,s){for(let o=1;o<arguments.length;o++){const l=arguments[o];if(I(l)){const v=t.length||0,w=l.length||0;t.length=v+w;for(let T=0;T<w;T++)t[v+T]=l[T]}else t.push(l)}}class Q{constructor(s,o){this.i=s,this.j=o,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function j(t){return/^[\s\xa0]*$/.test(t)}function F(){var t=_.navigator;return t&&(t=t.userAgent)?t:""}function Z(t){return Z[" "](t),t}Z[" "]=function(){};var Pe=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function J(t,s,o){for(const l in t)s.call(o,t[l],l,t)}function m(t,s){for(const o in t)s.call(void 0,t[o],o,t)}function u(t){const s={};for(const o in t)s[o]=t[o];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,s){let o,l;for(let v=1;v<arguments.length;v++){l=arguments[v];for(o in l)t[o]=l[o];for(let w=0;w<f.length;w++)o=f[w],Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}}function g(t){var s=1;t=t.split(":");const o=[];for(;0<s&&t.length;)o.push(t.shift()),s--;return t.length&&o.push(t.join(":")),o}function y(t){_.setTimeout(()=>{throw t},0)}function d(){var t=hn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class ce{constructor(){this.h=this.g=null}add(s,o){const l=Ze.get();l.set(s,o),this.h?this.h.next=l:this.g=l,this.h=l}}var Ze=new Q(()=>new Qs,t=>t.reset());class Qs{constructor(){this.next=this.g=this.h=null}set(s,o){this.h=s,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,et=!1,hn=new ce,mi=()=>{const t=_.Promise.resolve(void 0);Qe=()=>{t.then(eo)}};var eo=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(o){y(o)}var s=Ze;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}et=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function V(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var to=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};_.addEventListener("test",o,s),_.removeEventListener("test",o,s)}catch{}return t}();function tt(t,s){if(V.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var o=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(Pe){e:{try{Z(s.nodeName);var v=!0;break e}catch{}v=!1}v||(s=null)}}else o=="mouseover"?s=t.fromElement:o=="mouseout"&&(s=t.toElement);this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:no[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tt.aa.h.call(this)}}k(tt,V);var no={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),io=0;function ro(t,s,o,l,v){this.listener=t,this.proxy=null,this.src=s,this.type=o,this.capture=!!l,this.ha=v,this.key=++io,this.da=this.fa=!1}function Rt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ot(t){this.src=t,this.g={},this.h=0}Ot.prototype.add=function(t,s,o,l,v){var w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);var T=dn(t,s,l,v);return-1<T?(s=t[T],o||(s.fa=!1)):(s=new ro(s,this.src,w,!!l,v),s.fa=o,t.push(s)),s};function un(t,s){var o=s.type;if(o in t.g){var l=t.g[o],v=Array.prototype.indexOf.call(l,s,void 0),w;(w=0<=v)&&Array.prototype.splice.call(l,v,1),w&&(Rt(s),t.g[o].length==0&&(delete t.g[o],t.h--))}}function dn(t,s,o,l){for(var v=0;v<t.length;++v){var w=t[v];if(!w.da&&w.listener==s&&w.capture==!!o&&w.ha==l)return v}return-1}var fn="closure_lm_"+(1e6*Math.random()|0),pn={};function vi(t,s,o,l,v){if(Array.isArray(s)){for(var w=0;w<s.length;w++)vi(t,s[w],o,l,v);return null}return o=Ii(o),t&&t[Pt]?t.K(s,o,E(l)?!!l.capture:!1,v):so(t,s,o,!1,l,v)}function so(t,s,o,l,v,w){if(!s)throw Error("Invalid event type");var T=E(v)?!!v.capture:!!v,N=mn(t);if(N||(t[fn]=N=new Ot(t)),o=N.add(s,o,l,T,w),o.proxy)return o;if(l=oo(),o.proxy=l,l.src=t,l.listener=o,t.addEventListener)to||(v=T),v===void 0&&(v=!1),t.addEventListener(s.toString(),l,v);else if(t.attachEvent)t.attachEvent(yi(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return o}function oo(){function t(o){return s.call(t.src,t.listener,o)}const s=ao;return t}function _i(t,s,o,l,v){if(Array.isArray(s))for(var w=0;w<s.length;w++)_i(t,s[w],o,l,v);else l=E(l)?!!l.capture:!!l,o=Ii(o),t&&t[Pt]?(t=t.i,s=String(s).toString(),s in t.g&&(w=t.g[s],o=dn(w,o,l,v),-1<o&&(Rt(w[o]),Array.prototype.splice.call(w,o,1),w.length==0&&(delete t.g[s],t.h--)))):t&&(t=mn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=dn(s,o,l,v)),(o=-1<t?s[t]:null)&&gn(o))}function gn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Pt])un(s.i,t);else{var o=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(o,l,t.capture):s.detachEvent?s.detachEvent(yi(o),l):s.addListener&&s.removeListener&&s.removeListener(l),(o=mn(s))?(un(o,t),o.h==0&&(o.src=null,s[fn]=null)):Rt(t)}}}function yi(t){return t in pn?pn[t]:pn[t]="on"+t}function ao(t,s){if(t.da)t=!0;else{s=new tt(s,this);var o=t.listener,l=t.ha||t.src;t.fa&&gn(t),t=o.call(l,s)}return t}function mn(t){return t=t[fn],t instanceof Ot?t:null}var vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ii(t){return typeof t=="function"?t:(t[vn]||(t[vn]=function(s){return t.handleEvent(s)}),t[vn])}function H(){ve.call(this),this.i=new Ot(this),this.M=this,this.F=null}k(H,ve),H.prototype[Pt]=!0,H.prototype.removeEventListener=function(t,s,o,l){_i(this,t,s,o,l)};function W(t,s){var o,l=t.F;if(l)for(o=[];l;l=l.F)o.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new V(s,t);else if(s instanceof V)s.target=s.target||t;else{var v=s;s=new V(l,t),p(s,v)}if(v=!0,o)for(var w=o.length-1;0<=w;w--){var T=s.g=o[w];v=Dt(T,l,!0,s)&&v}if(T=s.g=t,v=Dt(T,l,!0,s)&&v,v=Dt(T,l,!1,s)&&v,o)for(w=0;w<o.length;w++)T=s.g=o[w],v=Dt(T,l,!1,s)&&v}H.prototype.N=function(){if(H.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var o=t.g[s],l=0;l<o.length;l++)Rt(o[l]);delete t.g[s],t.h--}}this.F=null},H.prototype.K=function(t,s,o,l){return this.i.add(String(t),s,!1,o,l)},H.prototype.L=function(t,s,o,l){return this.i.add(String(t),s,!0,o,l)};function Dt(t,s,o,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var v=!0,w=0;w<s.length;++w){var T=s[w];if(T&&!T.da&&T.capture==o){var N=T.listener,B=T.ha||T.src;T.fa&&un(t.i,T),v=N.call(B,l)!==!1&&v}}return v&&!l.defaultPrevented}function wi(t,s,o){if(typeof t=="function")o&&(t=A(t,o));else if(t&&typeof t.handleEvent=="function")t=A(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:_.setTimeout(t,s||0)}function Ei(t){t.g=wi(()=>{t.g=null,t.i&&(t.i=!1,Ei(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class co extends ve{constructor(s,o){super(),this.m=s,this.l=o,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(t){ve.call(this),this.h=t,this.g={}}k(nt,ve);var Ti=[];function Ai(t){J(t.g,function(s,o){this.g.hasOwnProperty(o)&&gn(s)},t),t.g={}}nt.prototype.N=function(){nt.aa.N.call(this),Ai(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _n=_.JSON.stringify,lo=_.JSON.parse,ho=class{stringify(t){return _.JSON.stringify(t,void 0)}parse(t){return _.JSON.parse(t,void 0)}};function yn(){}yn.prototype.h=null;function bi(t){return t.h||(t.h=t.i())}function uo(){}var it={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function In(){V.call(this,"d")}k(In,V);function wn(){V.call(this,"c")}k(wn,V);var je={},Si=null;function En(){return Si=Si||new H}je.La="serverreachability";function Ci(t){V.call(this,je.La,t)}k(Ci,V);function rt(t){const s=En();W(s,new Ci(s))}je.STAT_EVENT="statevent";function ki(t,s){V.call(this,je.STAT_EVENT,t),this.stat=s}k(ki,V);function G(t){const s=En();W(s,new ki(s,t))}je.Ma="timingevent";function Pi(t,s){V.call(this,je.Ma,t),this.size=s}k(Pi,V);function st(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){t()},s)}function ot(){this.g=!0}ot.prototype.xa=function(){this.g=!1};function fo(t,s,o,l,v,w){t.info(function(){if(t.g)if(w)for(var T="",N=w.split("&"),B=0;B<N.length;B++){var R=N[B].split("=");if(1<R.length){var $=R[0];R=R[1];var z=$.split("_");T=2<=z.length&&z[1]=="type"?T+($+"="+R+"&"):T+($+"=redacted&")}}else T=null;else T=w;return"XMLHTTP REQ ("+l+") [attempt "+v+"]: "+s+`
`+o+`
`+T})}function po(t,s,o,l,v,w,T){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+v+"]: "+s+`
`+o+`
`+w+" "+T})}function Be(t,s,o,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+mo(t,o)+(l?" "+l:"")})}function go(t,s){t.info(function(){return"TIMEOUT: "+s})}ot.prototype.info=function(){};function mo(t,s){if(!t.g)return s;if(!s)return null;try{var o=JSON.parse(s);if(o){for(t=0;t<o.length;t++)if(Array.isArray(o[t])){var l=o[t];if(!(2>l.length)){var v=l[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var T=1;T<v.length;T++)v[T]=""}}}}return _n(o)}catch{return s}}var Tn={NO_ERROR:0,TIMEOUT:8},vo={},An;function Nt(){}k(Nt,yn),Nt.prototype.g=function(){return new XMLHttpRequest},Nt.prototype.i=function(){return{}},An=new Nt;function _e(t,s,o,l){this.j=t,this.i=s,this.l=o,this.R=l||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ri}function Ri(){this.i=null,this.g="",this.h=!1}var Oi={},bn={};function Sn(t,s,o){t.L=1,t.v=xt(le(s)),t.m=o,t.P=!0,Di(t,null)}function Di(t,s){t.F=Date.now(),Lt(t),t.A=le(t.v);var o=t.A,l=t.R;Array.isArray(l)||(l=[String(l)]),Gi(o.i,"t",l),t.C=0,o=t.j.J,t.h=new Ri,t.g=hr(t.j,o?s:null,!t.m),0<t.O&&(t.M=new co(A(t.Y,t,t.g),t.O)),s=t.U,o=t.g,l=t.ca;var v="readystatechange";Array.isArray(v)||(v&&(Ti[0]=v.toString()),v=Ti);for(var w=0;w<v.length;w++){var T=vi(o,v[w],l||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),rt(),fo(t.i,t.u,t.A,t.l,t.R,t.m)}_e.prototype.ca=function(t){t=t.target;const s=this.M;s&&he(t)==3?s.j():this.Y(t)},_e.prototype.Y=function(t){try{if(t==this.g)e:{const z=he(this.g);var s=this.g.Ba();const $e=this.g.Z();if(!(3>z)&&(z!=3||this.g&&(this.h.h||this.g.oa()||Qi(this.g)))){this.J||z!=4||s==7||(s==8||0>=$e?rt(3):rt(2)),Cn(this);var o=this.g.Z();this.X=o;t:if(Ni(this)){var l=Qi(this.g);t="";var v=l.length,w=he(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),at(this);var T="";break t}this.h.i=new _.TextDecoder}for(s=0;s<v;s++)this.h.h=!0,t+=this.h.i.decode(l[s],{stream:!(w&&s==v-1)});l.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=o==200,po(this.i,this.u,this.A,this.l,this.R,z,o),this.o){if(this.T&&!this.K){t:{if(this.g){var N,B=this.g;if((N=B.g?B.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(N)){var R=N;break t}}R=null}if(o=R)Be(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kn(this,o);else{this.o=!1,this.s=3,G(12),Re(this),at(this);break e}}if(this.P){o=!0;let te;for(;!this.J&&this.C<T.length;)if(te=_o(this,T),te==bn){z==4&&(this.s=4,G(14),o=!1),Be(this.i,this.l,null,"[Incomplete Response]");break}else if(te==Oi){this.s=4,G(15),Be(this.i,this.l,T,"[Invalid Chunk]"),o=!1;break}else Be(this.i,this.l,te,null),kn(this,te);if(Ni(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||T.length!=0||this.h.h||(this.s=1,G(16),o=!1),this.o=this.o&&o,!o)Be(this.i,this.l,T,"[Invalid Chunked Response]"),Re(this),at(this);else if(0<T.length&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.ba&&!$.M&&($.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Ln($),$.M=!0,G(11))}}else Be(this.i,this.l,T,null),kn(this,T);z==4&&Re(this),this.o&&!this.J&&(z==4?or(this.j,this):(this.o=!1,Lt(this)))}else Mo(this.g),o==400&&0<T.indexOf("Unknown SID")?(this.s=3,G(12)):(this.s=0,G(13)),Re(this),at(this)}}}catch{}finally{}};function Ni(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function _o(t,s){var o=t.C,l=s.indexOf(`
`,o);return l==-1?bn:(o=Number(s.substring(o,l)),isNaN(o)?Oi:(l+=1,l+o>s.length?bn:(s=s.slice(l,l+o),t.C=l+o,s)))}_e.prototype.cancel=function(){this.J=!0,Re(this)};function Lt(t){t.S=Date.now()+t.I,Li(t,t.I)}function Li(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=st(A(t.ba,t),s)}function Cn(t){t.B&&(_.clearTimeout(t.B),t.B=null)}_e.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(go(this.i,this.A),this.L!=2&&(rt(),G(17)),Re(this),this.s=2,at(this)):Li(this,this.S-t)};function at(t){t.j.G==0||t.J||or(t.j,t)}function Re(t){Cn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,Ai(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function kn(t,s){try{var o=t.j;if(o.G!=0&&(o.g==t||Pn(o.h,t))){if(!t.K&&Pn(o.h,t)&&o.G==3){try{var l=o.Da.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var v=l;if(v[0]==0){e:if(!o.u){if(o.g)if(o.g.F+3e3<t.F)$t(o),Vt(o);else break e;Nn(o),G(18)}}else o.za=v[1],0<o.za-o.T&&37500>v[2]&&o.F&&o.v==0&&!o.C&&(o.C=st(A(o.Za,o),6e3));if(1>=xi(o.h)&&o.ca){try{o.ca()}catch{}o.ca=void 0}}else De(o,11)}else if((t.K||o.g==t)&&$t(o),!j(s))for(v=o.Da.g.parse(s),s=0;s<v.length;s++){let R=v[s];if(o.T=R[0],R=R[1],o.G==2)if(R[0]=="c"){o.K=R[1],o.ia=R[2];const $=R[3];$!=null&&(o.la=$,o.j.info("VER="+o.la));const z=R[4];z!=null&&(o.Aa=z,o.j.info("SVER="+o.Aa));const $e=R[5];$e!=null&&typeof $e=="number"&&0<$e&&(l=1.5*$e,o.L=l,o.j.info("backChannelRequestTimeoutMs_="+l)),l=o;const te=t.g;if(te){const zt=te.g?te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zt){var w=l.h;w.g||zt.indexOf("spdy")==-1&&zt.indexOf("quic")==-1&&zt.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Rn(w,w.h),w.h=null))}if(l.D){const Mn=te.g?te.g.getResponseHeader("X-HTTP-Session-Id"):null;Mn&&(l.ya=Mn,L(l.I,l.D,Mn))}}o.G=3,o.l&&o.l.ua(),o.ba&&(o.R=Date.now()-t.F,o.j.info("Handshake RTT: "+o.R+"ms")),l=o;var T=t;if(l.qa=lr(l,l.J?l.ia:null,l.W),T.K){Fi(l.h,T);var N=T,B=l.L;B&&(N.I=B),N.B&&(Cn(N),Lt(N)),l.g=T}else rr(l);0<o.i.length&&Ht(o)}else R[0]!="stop"&&R[0]!="close"||De(o,7);else o.G==3&&(R[0]=="stop"||R[0]=="close"?R[0]=="stop"?De(o,7):Dn(o):R[0]!="noop"&&o.l&&o.l.ta(R),o.v=0)}}rt(4)}catch{}}var yo=class{constructor(t,s){this.g=t,this.map=s}};function Mi(t){this.l=t||10,_.PerformanceNavigationTiming?(t=_.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_.chrome&&_.chrome.loadTimes&&_.chrome.loadTimes()&&_.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ui(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xi(t){return t.h?1:t.g?t.g.size:0}function Pn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Rn(t,s){t.g?t.g.add(s):t.h=s}function Fi(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Mi.prototype.cancel=function(){if(this.i=ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ji(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const o of t.g.values())s=s.concat(o.D);return s}return U(t.i)}function Io(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(I(t)){for(var s=[],o=t.length,l=0;l<o;l++)s.push(t[l]);return s}s=[],o=0;for(l in t)s[o++]=t[l];return s}function wo(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(I(t)||typeof t=="string"){var s=[];t=t.length;for(var o=0;o<t;o++)s.push(o);return s}s=[],o=0;for(const l in t)s[o++]=l;return s}}}function Bi(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(I(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var o=wo(t),l=Io(t),v=l.length,w=0;w<v;w++)s.call(void 0,l[w],o&&o[w],t)}var Vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Eo(t,s){if(t){t=t.split("&");for(var o=0;o<t.length;o++){var l=t[o].indexOf("="),v=null;if(0<=l){var w=t[o].substring(0,l);v=t[o].substring(l+1)}else w=t[o];s(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,Mt(this,t.j),this.o=t.o,this.g=t.g,Ut(this,t.s),this.l=t.l;var s=t.i,o=new ht;o.i=s.i,s.g&&(o.g=new Map(s.g),o.h=s.h),Hi(this,o),this.m=t.m}else t&&(s=String(t).match(Vi))?(this.h=!1,Mt(this,s[1]||"",!0),this.o=ct(s[2]||""),this.g=ct(s[3]||"",!0),Ut(this,s[4]),this.l=ct(s[5]||"",!0),Hi(this,s[6]||"",!0),this.m=ct(s[7]||"")):(this.h=!1,this.i=new ht(null,this.h))}Oe.prototype.toString=function(){var t=[],s=this.j;s&&t.push(lt(s,$i,!0),":");var o=this.g;return(o||s=="file")&&(t.push("//"),(s=this.o)&&t.push(lt(s,$i,!0),"@"),t.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.s,o!=null&&t.push(":",String(o))),(o=this.l)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push(lt(o,o.charAt(0)=="/"?bo:Ao,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",lt(o,Co)),t.join("")};function le(t){return new Oe(t)}function Mt(t,s,o){t.j=o?ct(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Ut(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function Hi(t,s,o){s instanceof ht?(t.i=s,ko(t.i,t.h)):(o||(s=lt(s,So)),t.i=new ht(s,t.h))}function L(t,s,o){t.i.set(s,o)}function xt(t){return L(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ct(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lt(t,s,o){return typeof t=="string"?(t=encodeURI(t).replace(s,To),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function To(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $i=/[#\/\?@]/g,Ao=/[#\?:]/g,bo=/[#\?]/g,So=/[#\?@]/g,Co=/#/g;function ht(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function ye(t){t.g||(t.g=new Map,t.h=0,t.i&&Eo(t.i,function(s,o){t.add(decodeURIComponent(s.replace(/\+/g," ")),o)}))}i=ht.prototype,i.add=function(t,s){ye(this),this.i=null,t=Ve(this,t);var o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(s),this.h+=1,this};function zi(t,s){ye(t),s=Ve(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function Wi(t,s){return ye(t),s=Ve(t,s),t.g.has(s)}i.forEach=function(t,s){ye(this),this.g.forEach(function(o,l){o.forEach(function(v){t.call(s,v,l,this)},this)},this)},i.na=function(){ye(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),o=[];for(let l=0;l<s.length;l++){const v=t[l];for(let w=0;w<v.length;w++)o.push(s[l])}return o},i.V=function(t){ye(this);let s=[];if(typeof t=="string")Wi(this,t)&&(s=s.concat(this.g.get(Ve(this,t))));else{t=Array.from(this.g.values());for(let o=0;o<t.length;o++)s=s.concat(t[o])}return s},i.set=function(t,s){return ye(this),this.i=null,t=Ve(this,t),Wi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function Gi(t,s,o){zi(t,s),0<o.length&&(t.i=null,t.g.set(Ve(t,s),U(o)),t.h+=o.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var o=0;o<s.length;o++){var l=s[o];const w=encodeURIComponent(String(l)),T=this.V(l);for(l=0;l<T.length;l++){var v=w;T[l]!==""&&(v+="="+encodeURIComponent(String(T[l]))),t.push(v)}}return this.i=t.join("&")};function Ve(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function ko(t,s){s&&!t.j&&(ye(t),t.i=null,t.g.forEach(function(o,l){var v=l.toLowerCase();l!=v&&(zi(this,l),Gi(this,v,o))},t)),t.j=s}function Po(t,s){const o=new ot;if(_.Image){const l=new Image;l.onload=M(Ie,o,"TestLoadImage: loaded",!0,s,l),l.onerror=M(Ie,o,"TestLoadImage: error",!1,s,l),l.onabort=M(Ie,o,"TestLoadImage: abort",!1,s,l),l.ontimeout=M(Ie,o,"TestLoadImage: timeout",!1,s,l),_.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function Ro(t,s){const o=new ot,l=new AbortController,v=setTimeout(()=>{l.abort(),Ie(o,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(w=>{clearTimeout(v),w.ok?Ie(o,"TestPingServer: ok",!0,s):Ie(o,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(v),Ie(o,"TestPingServer: error",!1,s)})}function Ie(t,s,o,l,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),l(o)}catch{}}function Oo(){this.g=new ho}function Do(t,s,o){const l=o||"";try{Bi(t,function(v,w){let T=v;E(v)&&(T=_n(v)),s.push(l+w+"="+encodeURIComponent(T))})}catch(v){throw s.push(l+"type="+encodeURIComponent("_badmap")),v}}function Ft(t){this.l=t.Ub||null,this.j=t.eb||!1}k(Ft,yn),Ft.prototype.g=function(){return new jt(this.l,this.j)},Ft.prototype.i=function(t){return function(){return t}}({});function jt(t,s){H.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(jt,H),i=jt.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,dt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||_).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ut(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dt(this)),this.g&&(this.readyState=3,dt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qi(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function qi(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?ut(this):dt(this),this.readyState==3&&qi(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,ut(this))},i.Qa=function(t){this.g&&(this.response=t,ut(this))},i.ga=function(){this.g&&ut(this)};function ut(t){t.readyState=4,t.l=null,t.j=null,t.v=null,dt(t)}i.setRequestHeader=function(t,s){this.u.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var o=s.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=s.next();return t.join(`\r
`)};function dt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Ki(t){let s="";return J(t,function(o,l){s+=l,s+=":",s+=o,s+=`\r
`}),s}function On(t,s,o){e:{for(l in o){var l=!1;break e}l=!0}l||(o=Ki(o),typeof t=="string"?o!=null&&encodeURIComponent(String(o)):L(t,s,o))}function x(t){H.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(x,H);var No=/^https?$/i,Lo=["POST","PUT"];i=x.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,s,o,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():An.g(),this.v=this.o?bi(this.o):bi(An),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(w){Ji(this,w);return}if(t=o||"",o=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var v in l)o.set(v,l[v]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const w of l.keys())o.set(w,l.get(w));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(o.keys()).find(w=>w.toLowerCase()=="content-type"),v=_.FormData&&t instanceof _.FormData,!(0<=Array.prototype.indexOf.call(Lo,s,void 0))||l||v||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,T]of o)this.g.setRequestHeader(w,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zi(this),this.u=!0,this.g.send(t),this.u=!1}catch(w){Ji(this,w)}};function Ji(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,Xi(t),Bt(t)}function Xi(t){t.A||(t.A=!0,W(t,"complete"),W(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,W(this,"complete"),W(this,"abort"),Bt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bt(this,!0)),x.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Yi(this):this.bb())},i.bb=function(){Yi(this)};function Yi(t){if(t.h&&typeof h<"u"&&(!t.v[1]||he(t)!=4||t.Z()!=2)){if(t.u&&he(t)==4)wi(t.Ea,0,t);else if(W(t,"readystatechange"),he(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var o;if(!(o=s)){var l;if(l=T===0){var v=String(t.D).match(Vi)[1]||null;!v&&_.self&&_.self.location&&(v=_.self.location.protocol.slice(0,-1)),l=!No.test(v?v.toLowerCase():"")}o=l}if(o)W(t,"complete"),W(t,"success");else{t.m=6;try{var w=2<he(t)?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.Z()+"]",Xi(t)}}finally{Bt(t)}}}}function Bt(t,s){if(t.g){Zi(t);const o=t.g,l=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||W(t,"ready");try{o.onreadystatechange=l}catch{}}}function Zi(t){t.I&&(_.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function he(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<he(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),lo(s)}};function Qi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Mo(t){const s={};t=(t.g&&2<=he(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(j(t[l]))continue;var o=g(t[l]);const v=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const w=s[v]||[];s[v]=w,w.push(o)}m(s,function(l){return l.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ft(t,s,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||s}function er(t){this.Aa=0,this.i=[],this.j=new ot,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ft("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ft("baseRetryDelayMs",5e3,t),this.cb=ft("retryDelaySeedMs",1e4,t),this.Wa=ft("forwardChannelMaxRetries",2,t),this.wa=ft("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(t&&t.concurrentRequestLimit),this.Da=new Oo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=er.prototype,i.la=8,i.G=1,i.connect=function(t,s,o,l){G(0),this.W=t,this.H=s||{},o&&l!==void 0&&(this.H.OSID=o,this.H.OAID=l),this.F=this.X,this.I=lr(this,null,this.W),Ht(this)};function Dn(t){if(tr(t),t.G==3){var s=t.U++,o=le(t.I);if(L(o,"SID",t.K),L(o,"RID",s),L(o,"TYPE","terminate"),pt(t,o),s=new _e(t,t.j,s),s.L=2,s.v=xt(le(o)),o=!1,_.navigator&&_.navigator.sendBeacon)try{o=_.navigator.sendBeacon(s.v.toString(),"")}catch{}!o&&_.Image&&(new Image().src=s.v,o=!0),o||(s.g=hr(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Lt(s)}cr(t)}function Vt(t){t.g&&(Ln(t),t.g.cancel(),t.g=null)}function tr(t){Vt(t),t.u&&(_.clearTimeout(t.u),t.u=null),$t(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&_.clearTimeout(t.s),t.s=null)}function Ht(t){if(!Ui(t.h)&&!t.s){t.s=!0;var s=t.Ga;Qe||mi(),et||(Qe(),et=!0),hn.add(s,t),t.B=0}}function Uo(t,s){return xi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=st(A(t.Ga,t,s),ar(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const v=new _e(this,this.j,t);let w=this.o;if(this.S&&(w?(w=u(w),p(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)e:{for(var s=0,o=0;o<this.i.length;o++){t:{var l=this.i[o];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,4096<s){s=o;break e}if(s===4096||o===this.i.length-1){s=o+1;break e}}s=1e3}else s=1e3;s=ir(this,v,s),o=le(this.I),L(o,"RID",t),L(o,"CVER",22),this.D&&L(o,"X-HTTP-Session-Id",this.D),pt(this,o),w&&(this.O?s="headers="+encodeURIComponent(String(Ki(w)))+"&"+s:this.m&&On(o,this.m,w)),Rn(this.h,v),this.Ua&&L(o,"TYPE","init"),this.P?(L(o,"$req",s),L(o,"SID","null"),v.T=!0,Sn(v,o,null)):Sn(v,o,s),this.G=2}}else this.G==3&&(t?nr(this,t):this.i.length==0||Ui(this.h)||nr(this))};function nr(t,s){var o;s?o=s.l:o=t.U++;const l=le(t.I);L(l,"SID",t.K),L(l,"RID",o),L(l,"AID",t.T),pt(t,l),t.m&&t.o&&On(l,t.m,t.o),o=new _e(t,t.j,o,t.B+1),t.m===null&&(o.H=t.o),s&&(t.i=s.D.concat(t.i)),s=ir(t,o,1e3),o.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Rn(t.h,o),Sn(o,l,s)}function pt(t,s){t.H&&J(t.H,function(o,l){L(s,l,o)}),t.l&&Bi({},function(o,l){L(s,l,o)})}function ir(t,s,o){o=Math.min(t.i.length,o);var l=t.l?A(t.l.Na,t.l,t):null;e:{var v=t.i;let w=-1;for(;;){const T=["count="+o];w==-1?0<o?(w=v[0].g,T.push("ofs="+w)):w=0:T.push("ofs="+w);let N=!0;for(let B=0;B<o;B++){let R=v[B].g;const $=v[B].map;if(R-=w,0>R)w=Math.max(0,v[B].g-100),N=!1;else try{Do($,T,"req"+R+"_")}catch{l&&l($)}}if(N){l=T.join("&");break e}}}return t=t.i.splice(0,o),s.D=t,l}function rr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;Qe||mi(),et||(Qe(),et=!0),hn.add(s,t),t.v=0}}function Nn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=st(A(t.Fa,t),ar(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,sr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=st(A(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,G(10),Vt(this),sr(this))};function Ln(t){t.A!=null&&(_.clearTimeout(t.A),t.A=null)}function sr(t){t.g=new _e(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=le(t.qa);L(s,"RID","rpc"),L(s,"SID",t.K),L(s,"AID",t.T),L(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&L(s,"TO",t.ja),L(s,"TYPE","xmlhttp"),pt(t,s),t.m&&t.o&&On(s,t.m,t.o),t.L&&(t.g.I=t.L);var o=t.g;t=t.ia,o.L=1,o.v=xt(le(s)),o.m=null,o.P=!0,Di(o,t)}i.Za=function(){this.C!=null&&(this.C=null,Vt(this),Nn(this),G(19))};function $t(t){t.C!=null&&(_.clearTimeout(t.C),t.C=null)}function or(t,s){var o=null;if(t.g==s){$t(t),Ln(t),t.g=null;var l=2}else if(Pn(t.h,s))o=s.D,Fi(t.h,s),l=1;else return;if(t.G!=0){if(s.o)if(l==1){o=s.m?s.m.length:0,s=Date.now()-s.F;var v=t.B;l=En(),W(l,new Pi(l,o)),Ht(t)}else rr(t);else if(v=s.s,v==3||v==0&&0<s.X||!(l==1&&Uo(t,s)||l==2&&Nn(t)))switch(o&&0<o.length&&(s=t.h,s.i=s.i.concat(o)),v){case 1:De(t,5);break;case 4:De(t,10);break;case 3:De(t,6);break;default:De(t,2)}}}function ar(t,s){let o=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(o*=2),o*s}function De(t,s){if(t.j.info("Error code "+s),s==2){var o=A(t.fb,t),l=t.Xa;const v=!l;l=new Oe(l||"//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||Mt(l,"https"),xt(l),v?Po(l.toString(),o):Ro(l.toString(),o)}else G(2);t.G=0,t.l&&t.l.sa(s),cr(t),tr(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),G(2)):(this.j.info("Failed to ping google.com"),G(1))};function cr(t){if(t.G=0,t.ka=[],t.l){const s=ji(t.h);(s.length!=0||t.i.length!=0)&&(D(t.ka,s),D(t.ka,t.i),t.h.i.length=0,U(t.i),t.i.length=0),t.l.ra()}}function lr(t,s,o){var l=o instanceof Oe?le(o):new Oe(o);if(l.g!="")s&&(l.g=s+"."+l.g),Ut(l,l.s);else{var v=_.location;l=v.protocol,s=s?s+"."+v.hostname:v.hostname,v=+v.port;var w=new Oe(null);l&&Mt(w,l),s&&(w.g=s),v&&Ut(w,v),o&&(w.l=o),l=w}return o=t.D,s=t.ya,o&&s&&L(l,o,s),L(l,"VER",t.la),pt(t,l),l}function hr(t,s,o){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new x(new Ft({eb:o})):new x(t.pa),s.Ha(t.J),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ur(){}i=ur.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ee(t,s){H.call(this),this.g=new er(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!j(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!j(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new He(this)}k(ee,H),ee.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ee.prototype.close=function(){Dn(this.g)},ee.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.u&&(o={},o.__data__=_n(t),t=o);s.i.push(new yo(s.Ya++,t)),s.G==3&&Ht(s)},ee.prototype.N=function(){this.g.l=null,delete this.j,Dn(this.g),delete this.g,ee.aa.N.call(this)};function dr(t){In.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const o in s){t=o;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}k(dr,In);function fr(){wn.call(this),this.status=1}k(fr,wn);function He(t){this.g=t}k(He,ur),He.prototype.ua=function(){W(this.g,"a")},He.prototype.ta=function(t){W(this.g,new dr(t))},He.prototype.sa=function(t){W(this.g,new fr)},He.prototype.ra=function(){W(this.g,"b")},ee.prototype.send=ee.prototype.o,ee.prototype.open=ee.prototype.m,ee.prototype.close=ee.prototype.close,Tn.NO_ERROR=0,Tn.TIMEOUT=8,Tn.HTTP_ERROR=6,vo.COMPLETE="complete",uo.EventType=it,it.OPEN="a",it.CLOSE="b",it.ERROR="c",it.MESSAGE="d",H.prototype.listen=H.prototype.K,x.prototype.listenOnce=x.prototype.L,x.prototype.getLastError=x.prototype.Ka,x.prototype.getLastErrorCode=x.prototype.Ba,x.prototype.getStatus=x.prototype.Z,x.prototype.getResponseJson=x.prototype.Oa,x.prototype.getResponseText=x.prototype.oa,x.prototype.send=x.prototype.ea,x.prototype.setWithCredentials=x.prototype.Ha}).apply(typeof Gt<"u"?Gt:typeof self<"u"?self:typeof window<"u"?window:{});const $r="@firebase/firestore",zr="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}q.UNAUTHENTICATED=new q(null),q.GOOGLE_CREDENTIALS=new q("google-credentials-uid"),q.FIRST_PARTY=new q("first-party-uid"),q.MOCK_USER=new q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kt="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new ei("@firebase/firestore");function ie(i,...e){if(Xe.logLevel<=O.DEBUG){const n=e.map(pi);Xe.debug(`Firestore (${kt}): ${i}`,...n)}}function qs(i,...e){if(Xe.logLevel<=O.ERROR){const n=e.map(pi);Xe.error(`Firestore (${kt}): ${i}`,...n)}}function Ih(i,...e){if(Xe.logLevel<=O.WARN){const n=e.map(pi);Xe.warn(`Firestore (${kt}): ${i}`,...n)}}function pi(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(i,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Js(i,r,n)}function Js(i,e,n){let r=`FIRESTORE (${kt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw qs(r),new Error(r)}function vt(i,e,n,r){let a="Unexpected state";typeof n=="string"?a=n:r=n,i||Js(e,a,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Y extends ge{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(q.UNAUTHENTICATED))}shutdown(){}}class Eh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Th{constructor(e){this.t=e,this.currentUser=q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){vt(this.o===void 0,42304);let r=this.i;const a=I=>this.i!==r?(r=this.i,n(I)):Promise.resolve();let c=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new _t,e.enqueueRetryable(()=>a(this.currentUser))};const h=()=>{const I=c;e.enqueueRetryable(async()=>{await I.promise,await a(this.currentUser)})},_=I=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(I=>_(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?_(I):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new _t)}},0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(vt(typeof r.accessToken=="string",31837,{l:r}),new Xs(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return vt(e===null||typeof e=="string",2055,{h:e}),new q(e)}}class Ah{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=q.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bh{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Ah(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sh{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,re(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){vt(this.o===void 0,3512);const r=c=>{c.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const a=c=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(vt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Ch(i){return i.name==="IndexedDbTransactionError"}const Zn="(default)";class on{constructor(e,n){this.projectId=e,this.database=n||Zn}static empty(){return new on("","")}get isDefaultDatabase(){return this.database===Zn}isEqual(e){return e instanceof on&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr,P;(P=Gr||(Gr={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Gs([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=1048576;function $n(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n,r=1e3,a=1.5,c=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=a,this.V_=c,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),a=Math.max(0,n-r);a>0&&ie("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,r,a,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=a,this.removalCallback=c,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,a,c){const h=Date.now()+r,_=new gi(e,n,h,a,c);return _.start(r),_}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var qr,Kr;(Kr=qr||(qr={})).xa="default",Kr.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Map;function Dh(i,e,n,r){if(e===!0&&r===!0)throw new Y(X.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Nh(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ks(12329,{type:typeof i})}function Lh(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Y(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nh(i);throw new Y(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="firestore.googleapis.com",Xr=!0;class Yr{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ys,this.ssl=Xr}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Xr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ph)throw new Y(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new Y(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new Y(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new Y(X.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zs{constructor(e,n,r,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wh;switch(r.type){case"firstParty":return new bh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jr.get(n);r&&(ie("ComponentProvider","Removing Datastore"),Jr.delete(n),r.terminate())}(this),Promise.resolve()}}function Mh(i,e,n,r={}){var a;i=Lh(i,Zs);const c=wt(e),h=i._getSettings(),_=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),I=`${e}:${n}`;c&&(as(`https://${I}`),cs("Firestore",!0)),h.host!==Ys&&h.host!==I&&Ih("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const E=Object.assign(Object.assign({},h),{host:I,ssl:c,emulatorOptions:r});if(!Me(E,_)&&(i._setSettings(E),r.mockUserToken)){let S,C;if(typeof r.mockUserToken=="string")S=r.mockUserToken,C=q.MOCK_USER;else{S=qo(r.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new Y(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new q(A)}i._authCredentials=new Eh(new Xs(S,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="AsyncQueue";class Qr{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Rh(this,"async_queue_retry"),this.rc=()=>{const r=$n();r&&ie(Zr,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=$n();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=$n();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new _t;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Ch(e))throw e;ie(Zr,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,qs("INTERNAL UNHANDLED ERROR: ",es(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const a=gi.createAndSchedule(this,e,n,r,c=>this.uc(c));return this.Zu.push(a),a}oc(){this.Xu&&Ks(47125,{cc:es(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function es(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Uh extends Zs{constructor(e,n,r,a){super(e,n,r,a),this.type="firestore",this._queue=new Qr,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qr(e),this._firestoreClient=void 0,await e}}}function Bh(i,e){const n=typeof i=="object"?i:us(),r=typeof i=="string"?i:Zn,a=ni(n,"firestore").getImmediate({identifier:r});if(!a._initialized){const c=Wo("firestore");c&&Mh(a,...c)}return a}(function(e,n=!0){(function(a){kt=a})(Ye),Ke(new Ue("firestore",(r,{instanceIdentifier:a,options:c})=>{const h=r.getProvider("app").getImmediate(),_=new Uh(new Th(r.getProvider("auth-internal")),new Sh(h,r.getProvider("app-check-internal")),function(E,S){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new Y(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(E.options.projectId,S)}(h,a),h);return c=Object.assign({useFetchStreams:n},c),_._setSettings(c),_},"PUBLIC").setMultipleInstances(!0)),ke($r,zr,e),ke($r,zr,"esm2017")})();export{Bh as a,xh as c,jh as g,cc as i,Fh as v};
