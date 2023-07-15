import{H as Ku}from"./control.f5b05b5f.js";/**
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
 *//**
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
 */const lo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Gu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},fo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,u=r+2<e.length,c=u?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;u||(m=64,o||(p=64)),s.push(n[h],n[l],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Gu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||c==null||l==null)throw new Qu;const p=i<<2|a>>4;if(s.push(p),c!==64){const m=a<<4&240|c>>2;if(s.push(m),l!==64){const S=c<<6&192|l;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Qu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wu=function(e){const t=lo(e);return fo.encodeByteArray(t,!0)},bn=function(e){return Wu(e).replace(/\./g,"")},Yu=function(e){try{return fo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Xu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ju=()=>Xu().__FIREBASE_DEFAULTS__,Zu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},tc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Yu(e[1]);return t&&JSON.parse(t)},go=()=>{try{return Ju()||Zu()||tc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ec=e=>{var t,n;return(n=(t=go())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},nc=e=>{const t=ec(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},po=()=>{var e;return(e=go())===null||e===void 0?void 0:e.config};/**
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
 */class sc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function rc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[bn(JSON.stringify(n)),bn(JSON.stringify(o)),a].join(".")}function ic(){try{return typeof indexedDB=="object"}catch{return!1}}function oc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const ac="FirebaseError";class me extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=ac,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?uc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new me(r,a,s)}}function uc(e,t){return e.replace(cc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const cc=/\{\$([^}]+)}/g;function Ms(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(ui(i)&&ui(o)){if(!Ms(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ui(e){return e!==null&&typeof e=="object"}/**
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
 */function Pe(e){return e&&e._delegate?e._delegate:e}class Fe{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const $t="[DEFAULT]";/**
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
 */class hc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new sc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fc(t))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=$t){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$t){return this.instances.has(t)}getOptions(t=$t){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=$t){return this.component?this.component.multipleInstances?t:$t:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lc(e){return e===$t?void 0:e}function fc(e){return e.instantiationMode==="EAGER"}/**
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
 */class dc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new hc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(L||(L={}));const gc={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},pc=L.INFO,mc={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},yc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=mc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yo{constructor(t){this.name=t,this._logLevel=pc,this._logHandler=yc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const vc=(e,t)=>t.some(n=>e instanceof n);let ci,hi;function wc(){return ci||(ci=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ec(){return hi||(hi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vo=new WeakMap,Ls=new WeakMap,wo=new WeakMap,ys=new WeakMap,hr=new WeakMap;function Tc(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(xt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&vo.set(n,e)}).catch(()=>{}),hr.set(t,e),t}function Sc(e){if(Ls.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ls.set(e,t)}let Ps={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ls.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ic(e){Ps=e(Ps)}function Cc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(vs(this),t,...n);return wo.set(s,t.sort?t.sort():[t]),xt(s)}:Ec().includes(e)?function(...t){return e.apply(vs(this),t),xt(vo.get(this))}:function(...t){return xt(e.apply(vs(this),t))}}function Ac(e){return typeof e=="function"?Cc(e):(e instanceof IDBTransaction&&Sc(e),vc(e,wc())?new Proxy(e,Ps):e)}function xt(e){if(e instanceof IDBRequest)return Tc(e);if(ys.has(e))return ys.get(e);const t=Ac(e);return t!==e&&(ys.set(e,t),hr.set(t,e)),t}const vs=e=>hr.get(e);function Dc(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=xt(o);return s&&o.addEventListener("upgradeneeded",u=>{s(xt(o.result),u.oldVersion,u.newVersion,xt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const _c=["get","getKey","getAll","getAllKeys","count"],bc=["put","add","delete","clear"],ws=new Map;function li(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ws.get(t))return ws.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=bc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||_c.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,r?"readwrite":"readonly");let c=u.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&u.done]))[0]};return ws.set(t,i),i}Ic(e=>({...e,get:(t,n,s)=>li(t,n)||e.get(t,n,s),has:(t,n)=>!!li(t,n)||e.has(t,n)}));/**
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
 */class Nc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fs="@firebase/app",fi="0.9.13";/**
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
 */const Ht=new yo("@firebase/app"),xc="@firebase/app-compat",Rc="@firebase/analytics-compat",Oc="@firebase/analytics",Mc="@firebase/app-check-compat",Lc="@firebase/app-check",Pc="@firebase/auth",Fc="@firebase/auth-compat",Vc="@firebase/database",Bc="@firebase/database-compat",$c="@firebase/functions",Uc="@firebase/functions-compat",jc="@firebase/installations",zc="@firebase/installations-compat",qc="@firebase/messaging",Hc="@firebase/messaging-compat",Kc="@firebase/performance",Gc="@firebase/performance-compat",Qc="@firebase/remote-config",Wc="@firebase/remote-config-compat",Yc="@firebase/storage",Xc="@firebase/storage-compat",Jc="@firebase/firestore",Zc="@firebase/firestore-compat",th="firebase",eh="9.23.0";/**
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
 */const Vs="[DEFAULT]",nh={[Fs]:"fire-core",[xc]:"fire-core-compat",[Oc]:"fire-analytics",[Rc]:"fire-analytics-compat",[Lc]:"fire-app-check",[Mc]:"fire-app-check-compat",[Pc]:"fire-auth",[Fc]:"fire-auth-compat",[Vc]:"fire-rtdb",[Bc]:"fire-rtdb-compat",[$c]:"fire-fn",[Uc]:"fire-fn-compat",[jc]:"fire-iid",[zc]:"fire-iid-compat",[qc]:"fire-fcm",[Hc]:"fire-fcm-compat",[Kc]:"fire-perf",[Gc]:"fire-perf-compat",[Qc]:"fire-rc",[Wc]:"fire-rc-compat",[Yc]:"fire-gcs",[Xc]:"fire-gcs-compat",[Jc]:"fire-fst",[Zc]:"fire-fst-compat","fire-js":"fire-js",[th]:"fire-js-all"};/**
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
 */const Nn=new Map,Bs=new Map;function sh(e,t){try{e.container.addComponent(t)}catch(n){Ht.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function kn(e){const t=e.name;if(Bs.has(t))return Ht.debug(`There were multiple attempts to register component ${t}.`),!1;Bs.set(t,e);for(const n of Nn.values())sh(n,e);return!0}function rh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const ih={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new mo("app","Firebase",ih);/**
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
 */class oh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const ah=eh;function Eo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Vs,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});if(n||(n=po()),!n)throw Rt.create("no-options");const i=Nn.get(r);if(i){if(Ms(n,i.options)&&Ms(s,i.config))return i;throw Rt.create("duplicate-app",{appName:r})}const o=new dc(r);for(const u of Bs.values())o.addComponent(u);const a=new oh(n,s,o);return Nn.set(r,a),a}function uh(e=Vs){const t=Nn.get(e);if(!t&&e===Vs&&po())return Eo();if(!t)throw Rt.create("no-app",{appName:e});return t}function se(e,t,n){var s;let r=(s=nh[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ht.warn(a.join(" "));return}kn(new Fe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const ch="firebase-heartbeat-database",hh=1,Ve="firebase-heartbeat-store";let Es=null;function To(){return Es||(Es=Dc(ch,hh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ve)}}}).catch(e=>{throw Rt.create("idb-open",{originalErrorMessage:e.message})})),Es}async function lh(e){try{return await(await To()).transaction(Ve).objectStore(Ve).get(So(e))}catch(t){if(t instanceof me)Ht.warn(t.message);else{const n=Rt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ht.warn(n.message)}}}async function di(e,t){try{const s=(await To()).transaction(Ve,"readwrite");await s.objectStore(Ve).put(t,So(e)),await s.done}catch(n){if(n instanceof me)Ht.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ht.warn(s.message)}}}function So(e){return`${e.name}!${e.options.appId}`}/**
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
 */const fh=1024,dh=30*24*60*60*1e3;class gh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=dh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gi(),{heartbeatsToSend:n,unsentEntries:s}=ph(this._heartbeatsCache.heartbeats),r=bn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function gi(){return new Date().toISOString().substring(0,10)}function ph(e,t=fh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),pi(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),pi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ic()?oc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return di(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return di(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function pi(e){return bn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function yh(e){kn(new Fe("platform-logger",t=>new Nc(t),"PRIVATE")),kn(new Fe("heartbeat",t=>new gh(t),"PRIVATE")),se(Fs,fi,e),se(Fs,fi,"esm2017"),se("fire-js","")}yh("");var vh="firebase",wh="9.23.0";/**
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
 */se(vh,wh,"app");var Eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,lr=lr||{},D=Eh||self;function Hn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function tn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Th(e){return Object.prototype.hasOwnProperty.call(e,Ts)&&e[Ts]||(e[Ts]=++Sh)}var Ts="closure_uid_"+(1e9*Math.random()>>>0),Sh=0;function Ih(e,t,n){return e.call.apply(e.bind,arguments)}function Ch(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function ot(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=Ih:ot=Ch,ot.apply(null,arguments)}function mn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function J(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Vt(){this.s=this.s,this.o=this.o}var Ah=0;Vt.prototype.s=!1;Vt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ah!=0)&&Th(this)};Vt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Io=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function fr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function mi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Hn(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function at(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var Dh=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{D.addEventListener("test",()=>{},t),D.removeEventListener("test",()=>{},t)}catch{}return e}();function Be(e){return/^[\s\xa0]*$/.test(e)}function Kn(){var e=D.navigator;return e&&(e=e.userAgent)?e:""}function yt(e){return Kn().indexOf(e)!=-1}function dr(e){return dr[" "](e),e}dr[" "]=function(){};function _h(e,t){var n=wl;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var bh=yt("Opera"),ue=yt("Trident")||yt("MSIE"),Co=yt("Edge"),$s=Co||ue,Ao=yt("Gecko")&&!(Kn().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),Nh=Kn().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function Do(){var e=D.document;return e?e.documentMode:void 0}var Us;t:{var Ss="",Is=function(){var e=Kn();if(Ao)return/rv:([^\);]+)(\)|;)/.exec(e);if(Co)return/Edge\/([\d\.]+)/.exec(e);if(ue)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Nh)return/WebKit\/(\S+)/.exec(e);if(bh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Is&&(Ss=Is?Is[1]:""),ue){var Cs=Do();if(Cs!=null&&Cs>parseFloat(Ss)){Us=String(Cs);break t}}Us=Ss}var js;if(D.document&&ue){var yi=Do();js=yi||parseInt(Us,10)||void 0}else js=void 0;var kh=js;function $e(e,t){if(at.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ao){t:{try{dr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:xh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$e.$.h.call(this)}}J($e,at);var xh={2:"touch",3:"pen",4:"mouse"};$e.prototype.h=function(){$e.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),Rh=0;function Oh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=r,this.key=++Rh,this.fa=this.ia=!1}function Gn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function gr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Mh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function _o(e){const t={};for(const n in e)t[n]=e[n];return t}const vi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bo(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<vi.length;i++)n=vi[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Qn(e){this.src=e,this.g={},this.h=0}Qn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=qs(e,t,s,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Oh(t,this.src,i,!!s,r),t.ia=n,e.push(t)),t};function zs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Io(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Gn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function qs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==s)return r}return-1}var pr="closure_lm_"+(1e6*Math.random()|0),As={};function No(e,t,n,s,r){if(s&&s.once)return xo(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)No(e,t[i],n,s,r);return null}return n=vr(n),e&&e[en]?e.O(t,n,tn(s)?!!s.capture:!!s,r):ko(e,t,n,!1,s,r)}function ko(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=tn(r)?!!r.capture:!!r,a=yr(e);if(a||(e[pr]=a=new Qn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Lh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Dh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Oo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Lh(){function e(n){return t.call(e.src,e.listener,n)}const t=Ph;return e}function xo(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)xo(e,t[i],n,s,r);return null}return n=vr(n),e&&e[en]?e.P(t,n,tn(s)?!!s.capture:!!s,r):ko(e,t,n,!0,s,r)}function Ro(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Ro(e,t[i],n,s,r);else s=tn(s)?!!s.capture:!!s,n=vr(n),e&&e[en]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=qs(i,n,s,r),-1<n&&(Gn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=yr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=qs(t,n,s,r)),(n=-1<e?t[e]:null)&&mr(n))}function mr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[en])zs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Oo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=yr(t))?(zs(n,e),n.h==0&&(n.src=null,t[pr]=null)):Gn(e)}}}function Oo(e){return e in As?As[e]:As[e]="on"+e}function Ph(e,t){if(e.fa)e=!0;else{t=new $e(t,this);var n=e.listener,s=e.la||e.src;e.ia&&mr(e),e=n.call(s,t)}return e}function yr(e){return e=e[pr],e instanceof Qn?e:null}var Ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function vr(e){return typeof e=="function"?e:(e[Ds]||(e[Ds]=function(t){return e.handleEvent(t)}),e[Ds])}function X(){Vt.call(this),this.i=new Qn(this),this.S=this,this.J=null}J(X,Vt);X.prototype[en]=!0;X.prototype.removeEventListener=function(e,t,n,s){Ro(this,e,t,n,s)};function et(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new at(t,e);else if(t instanceof at)t.target=t.target||e;else{var r=t;t=new at(s,e),bo(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=yn(o,s,!0,t)&&r}if(o=t.g=e,r=yn(o,s,!0,t)&&r,r=yn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=yn(o,s,!1,t)&&r}X.prototype.N=function(){if(X.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Gn(n[s]);delete e.g[t],e.h--}}this.J=null};X.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};X.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function yn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&zs(e.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var wr=D.JSON.stringify;class Fh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Vh(){var e=Er;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Bh{constructor(){this.h=this.g=null}add(t,n){const s=Mo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Mo=new Fh(()=>new $h,e=>e.reset());class $h{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Uh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function jh(e){D.setTimeout(()=>{throw e},0)}let Ue,je=!1,Er=new Bh,Lo=()=>{const e=D.Promise.resolve(void 0);Ue=()=>{e.then(zh)}};var zh=()=>{for(var e;e=Vh();){try{e.h.call(e.g)}catch(n){jh(n)}var t=Mo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}je=!1};function Wn(e,t){X.call(this),this.h=e||1,this.g=t||D,this.j=ot(this.qb,this),this.l=Date.now()}J(Wn,X);y=Wn.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(Tr(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}y.N=function(){Wn.$.N.call(this),Tr(this),delete this.g};function Sr(e,t,n){if(typeof e=="function")n&&(e=ot(e,n));else if(e&&typeof e.handleEvent=="function")e=ot(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(e,t||0)}function Po(e){e.g=Sr(()=>{e.g=null,e.i&&(e.i=!1,Po(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class qh extends Vt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Po(this)}N(){super.N(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){Vt.call(this),this.h=e,this.g={}}J(ze,Vt);var wi=[];function Fo(e,t,n,s){Array.isArray(n)||(n&&(wi[0]=n.toString()),n=wi);for(var r=0;r<n.length;r++){var i=No(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Vo(e){gr(e.g,function(t,n){this.g.hasOwnProperty(n)&&mr(t)},e),e.g={}}ze.prototype.N=function(){ze.$.N.call(this),Vo(this)};ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yn(){this.g=!0}Yn.prototype.Ea=function(){this.g=!1};function Hh(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Kh(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function ne(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Qh(e,n)+(s?" "+s:"")})}function Gh(e,t){e.info(function(){return"TIMEOUT: "+t})}Yn.prototype.info=function(){};function Qh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return wr(n)}catch{return t}}var Wt={},Ei=null;function Xn(){return Ei=Ei||new X}Wt.Ta="serverreachability";function Bo(e){at.call(this,Wt.Ta,e)}J(Bo,at);function qe(e){const t=Xn();et(t,new Bo(t))}Wt.STAT_EVENT="statevent";function $o(e,t){at.call(this,Wt.STAT_EVENT,e),this.stat=t}J($o,at);function ht(e){const t=Xn();et(t,new $o(t,e))}Wt.Ua="timingevent";function Uo(e,t){at.call(this,Wt.Ua,e),this.size=t}J(Uo,at);function nn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){e()},t)}var Jn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ir(){}Ir.prototype.h=null;function Ti(e){return e.h||(e.h=e.i())}function zo(){}var sn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Cr(){at.call(this,"d")}J(Cr,at);function Ar(){at.call(this,"c")}J(Ar,at);var Hs;function Zn(){}J(Zn,Ir);Zn.prototype.g=function(){return new XMLHttpRequest};Zn.prototype.i=function(){return{}};Hs=new Zn;function rn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new ze(this),this.P=Wh,e=$s?125:void 0,this.V=new Wn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new qo}function qo(){this.i=null,this.g="",this.h=!1}var Wh=45e3,Ks={},xn={};y=rn.prototype;y.setTimeout=function(e){this.P=e};function Gs(e,t,n){e.L=1,e.v=es(At(t)),e.s=n,e.S=!0,Ho(e,null)}function Ho(e,t){e.G=Date.now(),on(e),e.A=At(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),Zo(n.i,"t",s),e.C=0,n=e.l.J,e.h=new qo,e.g=Ea(e.l,n?t:null,!e.s),0<e.O&&(e.M=new qh(ot(e.Pa,e,e.g),e.O)),Fo(e.U,e.g,"readystatechange",e.nb),t=e.I?_o(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),qe(),Hh(e.j,e.u,e.A,e.m,e.W,e.s)}y.nb=function(e){e=e.target;const t=this.M;t&&vt(e)==3?t.l():this.Pa(e)};y.Pa=function(e){try{if(e==this.g)t:{const h=vt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||$s||this.g&&(this.h.h||this.g.ja()||Ai(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?qe(3):qe(2)),ts(this);var n=this.g.da();this.ca=n;e:if(Ko(this)){var s=Ai(this.g);e="";var r=s.length,i=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),xe(this);var o="";break e}this.h.i=new D.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Kh(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Be(a)){var c=a;break e}}c=null}if(n=c)ne(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qs(this,n);else{this.i=!1,this.o=3,ht(12),Ut(this),xe(this);break t}}this.S?(Go(this,h,o),$s&&this.i&&h==3&&(Fo(this.U,this.V,"tick",this.mb),this.V.start())):(ne(this.j,this.m,o,null),Qs(this,o)),h==4&&Ut(this),this.i&&!this.J&&(h==4?ma(this.l,this):(this.i=!1,on(this)))}else ml(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),Ut(this),xe(this)}}}catch{}finally{}};function Ko(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Go(e,t,n){let s=!0,r;for(;!e.J&&e.C<n.length;)if(r=Yh(e,n),r==xn){t==4&&(e.o=4,ht(14),s=!1),ne(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Ks){e.o=4,ht(15),ne(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ne(e.j,e.m,r,null),Qs(e,r);Ko(e)&&r!=xn&&r!=Ks&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ht(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),xr(t),t.M=!0,ht(11))):(ne(e.j,e.m,n,"[Invalid Chunked Response]"),Ut(e),xe(e))}y.mb=function(){if(this.g){var e=vt(this.g),t=this.g.ja();this.C<t.length&&(ts(this),Go(this,e,t),this.i&&e!=4&&on(this))}};function Yh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?xn:(n=Number(t.substring(n,s)),isNaN(n)?Ks:(s+=1,s+n>t.length?xn:(t=t.slice(s,s+n),e.C=s+n,t)))}y.cancel=function(){this.J=!0,Ut(this)};function on(e){e.Y=Date.now()+e.P,Qo(e,e.P)}function Qo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=nn(ot(e.lb,e),t)}function ts(e){e.B&&(D.clearTimeout(e.B),e.B=null)}y.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Gh(this.j,this.A),this.L!=2&&(qe(),ht(17)),Ut(this),this.o=2,xe(this)):Qo(this,this.Y-e)};function xe(e){e.l.H==0||e.J||ma(e.l,e)}function Ut(e){ts(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Tr(e.V),Vo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Qs(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Ws(n.i,e))){if(!e.K&&Ws(n.i,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Mn(n),rs(n);else break t;kr(n),ht(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=nn(ot(n.ib,n),6e3));if(1>=na(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else jt(n,11)}else if((e.K||n.g==e)&&Mn(n),!Be(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const l=c[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const S=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var i=s.i;i.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Dr(i,i.h),i.h=null))}if(s.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,V(s.I,s.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=wa(s,s.J?s.pa:null,s.Y),o.K){sa(s.i,o);var a=o,u=s.L;u&&a.setTimeout(u),a.B&&(ts(a),on(a)),s.g=o}else ga(s);0<n.j.length&&is(n)}else c[0]!="stop"&&c[0]!="close"||jt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?jt(n,7):Nr(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}qe(4)}catch{}}function Xh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Hn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Jh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Hn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Wo(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Hn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Jh(e),s=Xh(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var Yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function qt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qt){this.h=e.h,Rn(this,e.j),this.s=e.s,this.g=e.g,On(this,e.m),this.l=e.l;var t=e.i,n=new He;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Si(this,n),this.o=e.o}else e&&(t=String(e).match(Yo))?(this.h=!1,Rn(this,t[1]||"",!0),this.s=De(t[2]||""),this.g=De(t[3]||"",!0),On(this,t[4]),this.l=De(t[5]||"",!0),Si(this,t[6]||"",!0),this.o=De(t[7]||"")):(this.h=!1,this.i=new He(null,this.h))}qt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(_e(t,Ii,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(_e(t,Ii,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(_e(n,n.charAt(0)=="/"?nl:el,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",_e(n,rl)),e.join("")};function At(e){return new qt(e)}function Rn(e,t,n){e.j=n?De(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function On(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Si(e,t,n){t instanceof He?(e.i=t,il(e.i,e.h)):(n||(t=_e(t,sl)),e.i=new He(t,e.h))}function V(e,t,n){e.i.set(t,n)}function es(e){return V(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function De(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function _e(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,tl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ii=/[#\/\?@]/g,el=/[#\?:]/g,nl=/[#\?]/g,sl=/[#\?@]/g,rl=/#/g;function He(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Bt(e){e.g||(e.g=new Map,e.h=0,e.i&&Zh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=He.prototype;y.add=function(e,t){Bt(this),this.i=null,e=ye(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Xo(e,t){Bt(e),t=ye(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Jo(e,t){return Bt(e),t=ye(e,t),e.g.has(t)}y.forEach=function(e,t){Bt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};y.ta=function(){Bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};y.Z=function(e){Bt(this);let t=[];if(typeof e=="string")Jo(this,e)&&(t=t.concat(this.g.get(ye(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return Bt(this),this.i=null,e=ye(this,e),Jo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Zo(e,t,n){Xo(e,t),0<n.length&&(e.i=null,e.g.set(ye(e,t),fr(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function ye(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function il(e,t){t&&!e.j&&(Bt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Xo(this,s),Zo(this,r,n))},e)),e.j=t}var ol=class{constructor(e,t){this.g=e,this.map=t}};function ta(e){this.l=e||al,D.PerformanceNavigationTiming?(e=D.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(D.g&&D.g.Ka&&D.g.Ka()&&D.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var al=10;function ea(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function na(e){return e.h?1:e.g?e.g.size:0}function Ws(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Dr(e,t){e.g?e.g.add(t):e.h=t}function sa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ta.prototype.cancel=function(){if(this.i=ra(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ra(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return fr(e.i)}var ul=class{stringify(e){return D.JSON.stringify(e,void 0)}parse(e){return D.JSON.parse(e,void 0)}};function cl(){this.g=new ul}function hl(e,t,n){const s=n||"";try{Wo(e,function(r,i){let o=r;tn(r)&&(o=wr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function ll(e,t){const n=new Yn;if(D.Image){const s=new Image;s.onload=mn(vn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=mn(vn,n,s,"TestLoadImage: error",!1,t),s.onabort=mn(vn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=mn(vn,n,s,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function vn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function an(e){this.l=e.fc||null,this.j=e.ob||!1}J(an,Ir);an.prototype.g=function(){return new ns(this.l,this.j)};an.prototype.i=function(e){return function(){return e}}({});function ns(e,t){X.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=_r,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}J(ns,X);var _r=0;y=ns.prototype;y.open=function(e,t){if(this.readyState!=_r)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ke(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||D).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=_r};y.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ke(this)),this.g&&(this.readyState=3,Ke(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ia(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ia(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}y.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?un(this):Ke(this),this.readyState==3&&ia(this)}};y.Za=function(e){this.g&&(this.response=this.responseText=e,un(this))};y.Ya=function(e){this.g&&(this.response=e,un(this))};y.ka=function(){this.g&&un(this)};function un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ke(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ke(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var fl=D.JSON.parse;function z(e){X.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=oa,this.L=this.M=!1}J(z,X);var oa="",dl=/^https?$/i,gl=["POST","PUT"];y=z.prototype;y.Oa=function(e){this.M=e};y.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hs.g(),this.C=this.u?Ti(this.u):Ti(Hs),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Ci(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=D.FormData&&e instanceof D.FormData,!(0<=Io(gl,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ca(this),0<this.B&&((this.L=pl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=Sr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Ci(this,i)}};function pl(e){return ue&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.ua=function(){typeof lr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Ci(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,aa(e),ss(e)}function aa(e){e.F||(e.F=!0,et(e,"complete"),et(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,et(this,"complete"),et(this,"abort"),ss(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ss(this,!0)),z.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?ua(this):this.kb())};y.kb=function(){ua(this)};function ua(e){if(e.h&&typeof lr<"u"&&(!e.C[1]||vt(e)!=4||e.da()!=2)){if(e.v&&vt(e)==4)Sr(e.La,0,e);else if(et(e,"readystatechange"),vt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=o===0){var r=String(e.I).match(Yo)[1]||null;!r&&D.self&&D.self.location&&(r=D.self.location.protocol.slice(0,-1)),s=!dl.test(r?r.toLowerCase():"")}n=s}if(n)et(e,"complete"),et(e,"success");else{e.m=6;try{var i=2<vt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",aa(e)}}finally{ss(e)}}}}function ss(e,t){if(e.g){ca(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||et(e,"ready");try{n.onreadystatechange=s}catch{}}}function ca(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(D.clearTimeout(e.A),e.A=null)}y.isActive=function(){return!!this.g};function vt(e){return e.g?e.g.readyState:0}y.da=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),fl(t)}};function Ai(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case oa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function ml(e){const t={};e=(e.g&&2<=vt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<e.length;s++){if(Be(e[s]))continue;var n=Uh(e[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[r]||[];t[r]=i,i.push(n)}Mh(t,function(s){return s.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ha(e){let t="";return gr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function br(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ha(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):V(e,t,n))}function Ce(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function la(e){this.Ga=0,this.j=[],this.l=new Yn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ce("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ce("baseRetryDelayMs",5e3,e),this.hb=Ce("retryDelaySeedMs",1e4,e),this.eb=Ce("forwardChannelMaxRetries",2,e),this.xa=Ce("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ta(e&&e.concurrentRequestLimit),this.Ja=new cl,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=la.prototype;y.ra=8;y.H=1;function Nr(e){if(fa(e),e.H==3){var t=e.W++,n=At(e.I);if(V(n,"SID",e.K),V(n,"RID",t),V(n,"TYPE","terminate"),cn(e,n),t=new rn(e,e.l,t),t.L=2,t.v=es(At(n)),n=!1,D.navigator&&D.navigator.sendBeacon)try{n=D.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&D.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ea(t.l,null),t.g.ha(t.v)),t.G=Date.now(),on(t)}va(e)}function rs(e){e.g&&(xr(e),e.g.cancel(),e.g=null)}function fa(e){rs(e),e.u&&(D.clearTimeout(e.u),e.u=null),Mn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&D.clearTimeout(e.m),e.m=null)}function is(e){if(!ea(e.i)&&!e.m){e.m=!0;var t=e.Na;Ue||Lo(),je||(Ue(),je=!0),Er.add(t,e),e.C=0}}function yl(e,t){return na(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=nn(ot(e.Na,e,t),ya(e,e.C)),e.C++,!0)}y.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new rn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=_o(i),bo(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=da(this,r,t),n=At(this.I),V(n,"RID",e),V(n,"CVER",22),this.F&&V(n,"X-HTTP-Session-Id",this.F),cn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(ha(i)))+"&"+t:this.o&&br(n,this.o,i)),Dr(this.i,r),this.bb&&V(n,"TYPE","init"),this.P?(V(n,"$req",t),V(n,"SID","null"),r.aa=!0,Gs(r,n,null)):Gs(r,n,t),this.H=2}}else this.H==3&&(e?Di(this,e):this.j.length==0||ea(this.i)||Di(this))};function Di(e,t){var n;t?n=t.m:n=e.W++;const s=At(e.I);V(s,"SID",e.K),V(s,"RID",n),V(s,"AID",e.V),cn(e,s),e.o&&e.s&&br(s,e.o,e.s),n=new rn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=da(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Dr(e.i,n),Gs(n,s,t)}function cn(e,t){e.na&&gr(e.na,function(n,s){V(t,s,n)}),e.h&&Wo({},function(n,s){V(t,s,n)})}function da(e,t,n){n=Math.min(e.j.length,n);var s=e.h?ot(e.h.Va,e.h,e):null;t:{var r=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=r[u].g;const h=r[u].map;if(c-=i,0>c)i=Math.max(0,r[u].g-100),a=!1;else try{hl(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,s}function ga(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ue||Lo(),je||(Ue(),je=!0),Er.add(t,e),e.A=0}}function kr(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=nn(ot(e.Ma,e),ya(e,e.A)),e.A++,!0)}y.Ma=function(){if(this.u=null,pa(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=nn(ot(this.jb,this),e)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ht(10),rs(this),pa(this))};function xr(e){e.B!=null&&(D.clearTimeout(e.B),e.B=null)}function pa(e){e.g=new rn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=At(e.wa);V(t,"RID","rpc"),V(t,"SID",e.K),V(t,"AID",e.V),V(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&V(t,"TO",e.qa),V(t,"TYPE","xmlhttp"),cn(e,t),e.o&&e.s&&br(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=es(At(t)),n.s=null,n.S=!0,Ho(n,e)}y.ib=function(){this.v!=null&&(this.v=null,rs(this),kr(this),ht(19))};function Mn(e){e.v!=null&&(D.clearTimeout(e.v),e.v=null)}function ma(e,t){var n=null;if(e.g==t){Mn(e),xr(e),e.g=null;var s=2}else if(Ws(e.i,t))n=t.F,sa(e.i,t),s=1;else return;if(e.H!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;s=Xn(),et(s,new Uo(s,n)),is(e)}else ga(e);else if(r=t.o,r==3||r==0&&0<t.ca||!(s==1&&yl(e,t)||s==2&&kr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:jt(e,5);break;case 4:jt(e,10);break;case 3:jt(e,6);break;default:jt(e,2)}}}function ya(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function jt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var s=ot(e.pb,e);n||(n=new qt("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Rn(n,"https"),es(n)),ll(n.toString(),s)}else ht(2);e.H=0,e.h&&e.h.za(t),va(e),fa(e)}y.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ht(2)):(this.l.info("Failed to ping google.com"),ht(1))};function va(e){if(e.H=0,e.ma=[],e.h){const t=ra(e.i);(t.length!=0||e.j.length!=0)&&(mi(e.ma,t),mi(e.ma,e.j),e.i.i.length=0,fr(e.j),e.j.length=0),e.h.ya()}}function wa(e,t,n){var s=n instanceof qt?At(n):new qt(n);if(s.g!="")t&&(s.g=t+"."+s.g),On(s,s.m);else{var r=D.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new qt(null);s&&Rn(i,s),t&&(i.g=t),r&&On(i,r),n&&(i.l=n),s=i}return n=e.F,t=e.Da,n&&t&&V(s,n,t),V(s,"VER",e.ra),cn(e,s),s}function Ea(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new z(new an({ob:!0})):new z(e.va),t.Oa(e.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ta(){}y=Ta.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function Ln(){if(ue&&!(10<=Number(kh)))throw Error("Environmental error: no available transport.")}Ln.prototype.g=function(e,t){return new ft(e,t)};function ft(e,t){X.call(this),this.g=new la(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Be(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Be(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ve(this)}J(ft,X);ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ht(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=wa(e,null,e.Y),is(e)};ft.prototype.close=function(){Nr(this.g)};ft.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=wr(e),e=n);t.j.push(new ol(t.fb++,e)),t.H==3&&is(t)};ft.prototype.N=function(){this.g.h=null,delete this.j,Nr(this.g),delete this.g,ft.$.N.call(this)};function Sa(e){Cr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}J(Sa,Cr);function Ia(){Ar.call(this),this.status=1}J(Ia,Ar);function ve(e){this.g=e}J(ve,Ta);ve.prototype.Ba=function(){et(this.g,"a")};ve.prototype.Aa=function(e){et(this.g,new Sa(e))};ve.prototype.za=function(e){et(this.g,new Ia)};ve.prototype.ya=function(){et(this.g,"b")};function vl(){this.blockSize=-1}function mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}J(mt,vl);mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _s(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var i=e.g[3],o=t+(i^n&(r^i))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^i&(n^r))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^i)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~i))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+i&4294967295}mt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,r=this.h,i=0;i<t;){if(r==0)for(;i<=n;)_s(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[r++]=e.charCodeAt(i++),r==this.blockSize){_s(this,s),r=0;break}}else for(;i<t;)if(s[r++]=e[i++],r==this.blockSize){_s(this,s),r=0;break}}this.h=r,this.i+=t};mt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function P(e,t){this.h=t;for(var n=[],s=!0,r=e.length-1;0<=r;r--){var i=e[r]|0;s&&i==t||(n[r]=i,s=!1)}this.g=n}var wl={};function Rr(e){return-128<=e&&128>e?_h(e,function(t){return new P([t|0],0>t?-1:0)}):new P([e|0],0>e?-1:0)}function wt(e){if(isNaN(e)||!isFinite(e))return re;if(0>e)return tt(wt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Ys;return new P(t,0)}function Ca(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return tt(Ca(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=wt(Math.pow(t,8)),s=re,r=0;r<e.length;r+=8){var i=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+i),t);8>i?(i=wt(Math.pow(t,i)),s=s.R(i).add(wt(o))):(s=s.R(n),s=s.add(wt(o)))}return s}var Ys=4294967296,re=Rr(0),Xs=Rr(1),_i=Rr(16777216);y=P.prototype;y.ea=function(){if(dt(this))return-tt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Ys+s)*t,t*=Ys}return e};y.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(It(this))return"0";if(dt(this))return"-"+tt(this).toString(e);for(var t=wt(Math.pow(e,6)),n=this,s="";;){var r=Fn(n,t).g;n=Pn(n,r.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,It(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};y.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function It(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function dt(e){return e.h==-1}y.X=function(e){return e=Pn(this,e),dt(e)?-1:It(e)?0:1};function tt(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new P(n,~e.h).add(Xs)}y.abs=function(){return dt(this)?tt(this):this};y.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,r=0;r<=t;r++){var i=s+(this.D(r)&65535)+(e.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new P(n,n[n.length-1]&-2147483648?-1:0)};function Pn(e,t){return e.add(tt(t))}y.R=function(e){if(It(this)||It(e))return re;if(dt(this))return dt(e)?tt(this).R(tt(e)):tt(tt(this).R(e));if(dt(e))return tt(this.R(tt(e)));if(0>this.X(_i)&&0>e.X(_i))return wt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<e.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(r)>>>16,u=e.D(r)&65535;n[2*s+2*r]+=o*u,wn(n,2*s+2*r),n[2*s+2*r+1]+=i*u,wn(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,wn(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,wn(n,2*s+2*r+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new P(n,0)};function wn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ae(e,t){this.g=e,this.h=t}function Fn(e,t){if(It(t))throw Error("division by zero");if(It(e))return new Ae(re,re);if(dt(e))return t=Fn(tt(e),t),new Ae(tt(t.g),tt(t.h));if(dt(t))return t=Fn(e,tt(t)),new Ae(tt(t.g),t.h);if(30<e.g.length){if(dt(e)||dt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Xs,s=t;0>=s.X(e);)n=bi(n),s=bi(s);var r=Zt(n,1),i=Zt(s,1);for(s=Zt(s,2),n=Zt(n,2);!It(s);){var o=i.add(s);0>=o.X(e)&&(r=r.add(n),i=o),s=Zt(s,1),n=Zt(n,1)}return t=Pn(e,r.R(t)),new Ae(r,t)}for(r=re;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=wt(n),o=i.R(t);dt(o)||0<o.X(e);)n-=s,i=wt(n),o=i.R(t);It(i)&&(i=Xs),r=r.add(i),e=Pn(e,o)}return new Ae(r,e)}y.gb=function(e){return Fn(this,e).h};y.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new P(n,this.h&e.h)};y.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new P(n,this.h|e.h)};y.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new P(n,this.h^e.h)};function bi(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new P(n,e.h)}function Zt(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,r=[],i=0;i<s;i++)r[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new P(r,e.h)}Ln.prototype.createWebChannel=Ln.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;Jn.NO_ERROR=0;Jn.TIMEOUT=8;Jn.HTTP_ERROR=6;jo.COMPLETE="complete";zo.EventType=sn;sn.OPEN="a";sn.CLOSE="b";sn.ERROR="c";sn.MESSAGE="d";X.prototype.listen=X.prototype.O;z.prototype.listenOnce=z.prototype.P;z.prototype.getLastError=z.prototype.Sa;z.prototype.getLastErrorCode=z.prototype.Ia;z.prototype.getStatus=z.prototype.da;z.prototype.getResponseJson=z.prototype.Wa;z.prototype.getResponseText=z.prototype.ja;z.prototype.send=z.prototype.ha;z.prototype.setWithCredentials=z.prototype.Oa;mt.prototype.digest=mt.prototype.l;mt.prototype.reset=mt.prototype.reset;mt.prototype.update=mt.prototype.j;P.prototype.add=P.prototype.add;P.prototype.multiply=P.prototype.R;P.prototype.modulo=P.prototype.gb;P.prototype.compare=P.prototype.X;P.prototype.toNumber=P.prototype.ea;P.prototype.toString=P.prototype.toString;P.prototype.getBits=P.prototype.D;P.fromNumber=wt;P.fromString=Ca;var El=function(){return new Ln},Tl=function(){return Xn()},bs=Jn,Sl=jo,Il=Wt,Ni={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Cl=an,En=zo,Al=z,Dl=mt,ie=P;const ki="@firebase/firestore";/**
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
 */class st{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let we="9.23.0";/**
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
 */const Kt=new yo("@firebase/firestore");function xi(){return Kt.logLevel}function T(e,...t){if(Kt.logLevel<=L.DEBUG){const n=t.map(Or);Kt.debug(`Firestore (${we}): ${e}`,...n)}}function Dt(e,...t){if(Kt.logLevel<=L.ERROR){const n=t.map(Or);Kt.error(`Firestore (${we}): ${e}`,...n)}}function ce(e,...t){if(Kt.logLevel<=L.WARN){const n=t.map(Or);Kt.warn(`Firestore (${we}): ${e}`,...n)}}function Or(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function _(e="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+e;throw Dt(t),new Error(t)}function B(e,t){e||_()}function N(e,t){return e}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends me{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ot{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Aa{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _l{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class bl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Nl{constructor(t){this.t=t,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ot,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ot)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(B(typeof s.accessToken=="string"),new Aa(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return B(t===null||typeof t=="string"),new st(t)}}class kl{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=st.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class xl{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new kl(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ol{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(B(typeof n.token=="string"),this.T=n.token,new Rl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ml(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Da{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Ml(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function M(e,t){return e<t?-1:e>t?1:0}function he(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class Q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new I(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new I(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new Q(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?M(this.nanoseconds,t.nanoseconds):M(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class b{constructor(t){this.timestamp=t}static fromTimestamp(t){return new b(t)}static min(){return new b(new Q(0,0))}static max(){return new b(new Q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ge{constructor(t,n,s){n===void 0?n=0:n>t.length&&_(),s===void 0?s=t.length-n:s>t.length-n&&_(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ge.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ge?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class $ extends Ge{construct(t,n,s){return new $(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new I(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new $(n)}static emptyPath(){return new $([])}}const Ll=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ge{construct(t,n,s){return new it(t,n,s)}static isValidIdentifier(t){return Ll.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new I(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new I(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new I(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new I(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class C{constructor(t){this.path=t}static fromPath(t){return new C($.fromString(t))}static fromName(t){return new C($.fromString(t).popFirst(5))}static empty(){return new C($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&$.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return $.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new C(new $(t.slice()))}}function Pl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=b.fromTimestamp(s===1e9?new Q(n+1,0):new Q(n,s));return new Lt(r,C.empty(),t)}function Fl(e){return new Lt(e.readTime,e.key,-1)}class Lt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Lt(b.min(),C.empty(),-1)}static max(){return new Lt(b.max(),C.empty(),-1)}}function Vl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=C.comparator(e.documentKey,t.documentKey),n!==0?n:M(e.largestBatchId,t.largestBatchId))}/**
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
 */const Bl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $l{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function hn(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Bl)throw e;T("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},u=>s(u))}),o=!0,i===r&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new g((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new g((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function ln(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Mr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Mr.ct=-1;function os(e){return e==null}function Vn(e){return e===0&&1/e==-1/0}function Ul(e){return typeof e=="number"&&Number.isInteger(e)&&!Vn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ri(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ee(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _a(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class U{constructor(t,n){this.comparator=t,this.root=n||Z.EMPTY}insert(t,n){return new U(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Z.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Tn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Tn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Tn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Tn(this.root,t,this.comparator,!0)}}class Tn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Z{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??Z.RED,this.left=r??Z.EMPTY,this.right=i??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new Z(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return Z.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const t=this.left.check();if(t!==this.right.check())throw _();return t+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(e,t,n,s,r){return this}insert(e,t,n){return new Z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Oi(this.data.getIterator())}getIteratorFrom(t){return new Oi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ut(this.comparator);return n.data=t,n}}class Oi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new pt([])}unionWith(t){let n=new ut(it.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new pt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return he(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ba extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new ba("Invalid base64 string: "+r):r}}(t);return new ct(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new ct(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return M(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const jl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(e){if(B(!!e),typeof e=="string"){let t=0;const n=jl.exec(e);if(B(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:H(e.seconds),nanos:H(e.nanos)}}function H(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Gt(e){return typeof e=="string"?ct.fromBase64String(e):ct.fromUint8Array(e)}/**
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
 */function Lr(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pr(e){const t=e.mapValue.fields.__previous_value__;return Lr(t)?Pr(t):t}function Qe(e){const t=Pt(e.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}/**
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
 */class zl{constructor(t,n,s,r,i,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class We{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new We("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof We&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Sn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Lr(e)?4:ql(e)?9007199254740991:10:_()}function Tt(e,t){if(e===t)return!0;const n=Qt(e);if(n!==Qt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Qe(e).isEqual(Qe(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Pt(s.timestampValue),o=Pt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Gt(s.bytesValue).isEqual(Gt(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return H(s.geoPointValue.latitude)===H(r.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return H(s.integerValue)===H(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=H(s.doubleValue),o=H(r.doubleValue);return i===o?Vn(i)===Vn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return he(e.arrayValue.values||[],t.arrayValue.values||[],Tt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ri(i)!==Ri(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Tt(i[a],o[a])))return!1;return!0}(e,t);default:return _()}}function Ye(e,t){return(e.values||[]).find(n=>Tt(n,t))!==void 0}function le(e,t){if(e===t)return 0;const n=Qt(e),s=Qt(t);if(n!==s)return M(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=H(r.integerValue||r.doubleValue),a=H(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Mi(e.timestampValue,t.timestampValue);case 4:return Mi(Qe(e),Qe(t));case 5:return M(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Gt(r),a=Gt(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=M(o[u],a[u]);if(c!==0)return c}return M(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=M(H(r.latitude),H(i.latitude));return o!==0?o:M(H(r.longitude),H(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=le(o[u],a[u]);if(c)return c}return M(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Sn.mapValue&&i===Sn.mapValue)return 0;if(r===Sn.mapValue)return 1;if(i===Sn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=M(a[h],c[h]);if(l!==0)return l;const p=le(o[a[h]],u[c[h]]);if(p!==0)return p}return M(a.length,c.length)}(e.mapValue,t.mapValue);default:throw _()}}function Mi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return M(e,t);const n=Pt(e),s=Pt(t),r=M(n.seconds,s.seconds);return r!==0?r:M(n.nanos,s.nanos)}function fe(e){return Js(e)}function Js(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Pt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Gt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,C.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Js(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Js(s.fields[a])}`;return i+"}"}(e.mapValue):_();var t,n}function Zs(e){return!!e&&"integerValue"in e}function Fr(e){return!!e&&"arrayValue"in e}function Li(e){return!!e&&"nullValue"in e}function Pi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function An(e){return!!e&&"mapValue"in e}function Re(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ee(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Re(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Re(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ql(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!An(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Re(n)}setAll(t){let n=it.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Re(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());An(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Tt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];An(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Ee(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new gt(Re(this.value))}}function Na(e){const t=[];return Ee(e.fields,(n,s)=>{const r=new it([n]);if(An(s)){const i=Na(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new pt(t)}/**
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
 */class rt{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new rt(t,0,b.min(),b.min(),b.min(),gt.empty(),0)}static newFoundDocument(t,n,s,r){return new rt(t,1,n,b.min(),s,r,0)}static newNoDocument(t,n){return new rt(t,2,n,b.min(),b.min(),gt.empty(),0)}static newUnknownDocument(t,n){return new rt(t,3,n,b.min(),b.min(),gt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bn{constructor(t,n){this.position=t,this.inclusive=n}}function Fi(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=C.comparator(C.fromName(o.referenceValue),n.key):s=le(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Tt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Oe{constructor(t,n="asc"){this.field=t,this.dir=n}}function Hl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class ka{}class G extends ka{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Gl(t,n,s):n==="array-contains"?new Yl(t,s):n==="in"?new Xl(t,s):n==="not-in"?new Jl(t,s):n==="array-contains-any"?new Zl(t,s):new G(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Ql(t,s):new Wl(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(le(n,this.value)):n!==null&&Qt(this.value)===Qt(n)&&this.matchesComparison(le(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class St extends ka{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new St(t,n)}matches(t){return xa(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function xa(e){return e.op==="and"}function Ra(e){return Kl(e)&&xa(e)}function Kl(e){for(const t of e.filters)if(t instanceof St)return!1;return!0}function tr(e){if(e instanceof G)return e.field.canonicalString()+e.op.toString()+fe(e.value);if(Ra(e))return e.filters.map(t=>tr(t)).join(",");{const t=e.filters.map(n=>tr(n)).join(",");return`${e.op}(${t})`}}function Oa(e,t){return e instanceof G?function(n,s){return s instanceof G&&n.op===s.op&&n.field.isEqual(s.field)&&Tt(n.value,s.value)}(e,t):e instanceof St?function(n,s){return s instanceof St&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Oa(i,s.filters[o]),!0):!1}(e,t):void _()}function Ma(e){return e instanceof G?function(t){return`${t.field.canonicalString()} ${t.op} ${fe(t.value)}`}(e):e instanceof St?function(t){return t.op.toString()+" {"+t.getFilters().map(Ma).join(" ,")+"}"}(e):"Filter"}class Gl extends G{constructor(t,n,s){super(t,n,s),this.key=C.fromName(s.referenceValue)}matches(t){const n=C.comparator(t.key,this.key);return this.matchesComparison(n)}}class Ql extends G{constructor(t,n){super(t,"in",n),this.keys=La("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Wl extends G{constructor(t,n){super(t,"not-in",n),this.keys=La("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function La(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>C.fromName(s.referenceValue))}class Yl extends G{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Fr(n)&&Ye(n.arrayValue,this.value)}}class Xl extends G{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ye(this.value.arrayValue,n)}}class Jl extends G{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ye(this.value.arrayValue,n)}}class Zl extends G{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Fr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ye(this.value.arrayValue,s))}}/**
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
 */class tf{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Bi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new tf(e,t,n,s,r,i,o)}function Vr(e){const t=N(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>tr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),os(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>fe(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>fe(s)).join(",")),t.dt=n}return t.dt}function Br(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Hl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Oa(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Vi(e.startAt,t.startAt)&&Vi(e.endAt,t.endAt)}function er(e){return C.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class as{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function ef(e,t,n,s,r,i,o,a){return new as(e,t,n,s,r,i,o,a)}function $r(e){return new as(e)}function $i(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function nf(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function sf(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function rf(e){return e.collectionGroup!==null}function oe(e){const t=N(e);if(t.wt===null){t.wt=[];const n=sf(t),s=nf(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new Oe(n)),t.wt.push(new Oe(it.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Oe(it.keyField(),i))}}}return t.wt}function _t(e){const t=N(e);if(!t._t)if(t.limitType==="F")t._t=Bi(t.path,t.collectionGroup,oe(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of oe(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Oe(i.field,o))}const s=t.endAt?new Bn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bn(t.startAt.position,t.startAt.inclusive):null;t._t=Bi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function nr(e,t,n){return new as(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function us(e,t){return Br(_t(e),_t(t))&&e.limitType===t.limitType}function Pa(e){return`${Vr(_t(e))}|lt:${e.limitType}`}function sr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Ma(s)).join(", ")}]`),os(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>fe(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>fe(s)).join(",")),`Target(${n})`}(_t(e))}; limitType=${e.limitType})`}function cs(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):C.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of oe(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Fi(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,oe(n),s)||n.endAt&&!function(r,i,o){const a=Fi(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,oe(n),s))}(e,t)}function of(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Fa(e){return(t,n)=>{let s=!1;for(const r of oe(e)){const i=af(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function af(e,t,n){const s=e.field.isKeyField()?C.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?le(a,u):_()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return _()}}/**
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
 */class Te{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return _a(this.inner)}size(){return this.innerSize}}/**
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
 */const uf=new U(C.comparator);function bt(){return uf}const Va=new U(C.comparator);function be(...e){let t=Va;for(const n of e)t=t.insert(n.key,n);return t}function Ba(e){let t=Va;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function zt(){return Me()}function $a(){return Me()}function Me(){return new Te(e=>e.toString(),(e,t)=>e.isEqual(t))}const cf=new U(C.comparator),hf=new ut(C.comparator);function x(...e){let t=hf;for(const n of e)t=t.add(n);return t}const lf=new ut(M);function ff(){return lf}/**
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
 */function Ua(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vn(t)?"-0":t}}function ja(e){return{integerValue:""+e}}function df(e,t){return Ul(t)?ja(t):Ua(e,t)}/**
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
 */class hs{constructor(){this._=void 0}}function gf(e,t,n){return e instanceof $n?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Lr(r)&&(r=Pr(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Xe?qa(e,t):e instanceof Je?Ha(e,t):function(s,r){const i=za(s,r),o=Ui(i)+Ui(s.gt);return Zs(i)&&Zs(s.gt)?ja(o):Ua(s.serializer,o)}(e,t)}function pf(e,t,n){return e instanceof Xe?qa(e,t):e instanceof Je?Ha(e,t):n}function za(e,t){return e instanceof Un?Zs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class $n extends hs{}class Xe extends hs{constructor(t){super(),this.elements=t}}function qa(e,t){const n=Ka(t);for(const s of e.elements)n.some(r=>Tt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Je extends hs{constructor(t){super(),this.elements=t}}function Ha(e,t){let n=Ka(t);for(const s of e.elements)n=n.filter(r=>!Tt(r,s));return{arrayValue:{values:n}}}class Un extends hs{constructor(t,n){super(),this.serializer=t,this.gt=n}}function Ui(e){return H(e.integerValue||e.doubleValue)}function Ka(e){return Fr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function mf(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Xe&&s instanceof Xe||n instanceof Je&&s instanceof Je?he(n.elements,s.elements,Tt):n instanceof Un&&s instanceof Un?Tt(n.gt,s.gt):n instanceof $n&&s instanceof $n}(e.transform,t.transform)}class yf{constructor(t,n){this.version=t,this.transformResults=n}}class Ct{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Dn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ls{}function Ga(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Wa(e.key,Ct.none()):new fn(e.key,e.data,Ct.none());{const n=e.data,s=gt.empty();let r=new ut(it.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Yt(e.key,s,new pt(r.toArray()),Ct.none())}}function vf(e,t,n){e instanceof fn?function(s,r,i){const o=s.value.clone(),a=zi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Yt?function(s,r,i){if(!Dn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=zi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Qa(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Le(e,t,n,s){return e instanceof fn?function(r,i,o,a){if(!Dn(r.precondition,i))return o;const u=r.value.clone(),c=qi(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof Yt?function(r,i,o,a){if(!Dn(r.precondition,i))return o;const u=qi(r.fieldTransforms,a,i),c=i.data;return c.setAll(Qa(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return Dn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function wf(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=za(s.transform,r||null);i!=null&&(n===null&&(n=gt.empty()),n.set(s.field,i))}return n||null}function ji(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&he(n,s,(r,i)=>mf(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class fn extends ls{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Yt extends ls{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function zi(e,t,n){const s=new Map;B(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,pf(o,a,n[r]))}return s}function qi(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,gf(i,o,t))}return s}class Wa extends ls{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ef extends ls{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Tf{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&vf(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Le(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Le(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=$a();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const u=Ga(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(b.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),x())}isEqual(t){return this.batchId===t.batchId&&he(this.mutations,t.mutations,(n,s)=>ji(n,s))&&he(this.baseMutations,t.baseMutations,(n,s)=>ji(n,s))}}class Ur{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){B(t.mutations.length===s.length);let r=cf;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ur(t,n,s,r)}}/**
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
 */class Sf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class If{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var q,R;function Cf(e){switch(e){default:return _();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Ya(e){if(e===void 0)return Dt("GRPC error has no .code"),d.UNKNOWN;switch(e){case q.OK:return d.OK;case q.CANCELLED:return d.CANCELLED;case q.UNKNOWN:return d.UNKNOWN;case q.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case q.INTERNAL:return d.INTERNAL;case q.UNAVAILABLE:return d.UNAVAILABLE;case q.UNAUTHENTICATED:return d.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case q.NOT_FOUND:return d.NOT_FOUND;case q.ALREADY_EXISTS:return d.ALREADY_EXISTS;case q.PERMISSION_DENIED:return d.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case q.ABORTED:return d.ABORTED;case q.OUT_OF_RANGE:return d.OUT_OF_RANGE;case q.UNIMPLEMENTED:return d.UNIMPLEMENTED;case q.DATA_LOSS:return d.DATA_LOSS;default:return _()}}(R=q||(q={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class jr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return In}static getOrCreateInstance(){return In===null&&(In=new jr),In}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let In=null;/**
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
 */function Af(){return new TextEncoder}/**
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
 */const Df=new ie([4294967295,4294967295],0);function Hi(e){const t=Af().encode(e),n=new Dl;return n.update(t),new Uint8Array(n.digest())}function Ki(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ie([n,s],0),new ie([r,i],0)]}class zr{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ne(`Invalid padding: ${n}`);if(s<0)throw new Ne(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Ne(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Ne(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=ie.fromNumber(this.It)}Et(t,n,s){let r=t.add(n.multiply(ie.fromNumber(s)));return r.compare(Df)===1&&(r=new ie([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=Hi(t),[s,r]=Ki(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(t,n,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new zr(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=Hi(t),[s,r]=Ki(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Ne extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fs{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,dn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new fs(b.min(),r,new U(M),bt(),x())}}class dn{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new dn(s,n,x(),x(),x())}}/**
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
 */class _n{constructor(t,n,s,r){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=r}}class Xa{constructor(t,n){this.targetId=t,this.Vt=n}}class Ja{constructor(t,n,s=ct.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Gi{constructor(){this.St=0,this.Dt=Wi(),this.Ct=ct.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=x(),n=x(),s=x();return this.Dt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:_()}}),new dn(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=Wi()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class _f{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=bt(),this.zt=Qi(),this.Wt=new U(M)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:_()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(t){var n;const s=t.targetId,r=t.Vt.count,i=this.se(s);if(i){const o=i.target;if(er(o))if(r===0){const a=new C(o.path);this.Yt(s,a,rt.newNoDocument(a,b.min()))}else B(r===1);else{const a=this.ie(s);if(a!==r){const u=this.re(t,a);if(u!==0){this.ee(s);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=jr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,h,l){var p,m,S,v,E,O;const f={localCacheCount:h,existenceFilterCount:l.count},w=l.unchangedNames;return w&&(f.bloomFilter={applied:c===0,hashCount:(p=w==null?void 0:w.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(v=(S=(m=w==null?void 0:w.bits)===null||m===void 0?void 0:m.bitmap)===null||S===void 0?void 0:S.length)!==null&&v!==void 0?v:0,padding:(O=(E=w==null?void 0:w.bits)===null||E===void 0?void 0:E.padding)!==null&&O!==void 0?O:0}),f}(u,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:r}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let u,c;try{u=Gt(i).toUint8Array()}catch(h){if(h instanceof ba)return ce("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{c=new zr(u,o,a)}catch(h){return ce(h instanceof Ne?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return c.It===0?1:r!==n-this.oe(t.targetId,c)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(t,i,null),r++)}),r}ce(t){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&er(a.target)){const u=new C(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,rt.newNoDocument(u,t))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=x();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(t));const r=new fs(t,n,this.Wt,this.jt,s);return this.jt=bt(),this.zt=Qi(),this.Wt=new U(M),r}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new Gi,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new ut(M),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||T("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new Gi),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function Qi(){return new U(C.comparator)}function Wi(){return new U(C.comparator)}const bf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Nf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kf=(()=>({and:"AND",or:"OR"}))();class xf{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function rr(e,t){return e.useProto3Json||os(t)?t:{value:t}}function jn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Za(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Rf(e,t){return jn(e,t.toTimestamp())}function Et(e){return B(!!e),b.fromTimestamp(function(t){const n=Pt(t);return new Q(n.seconds,n.nanos)}(e))}function qr(e,t){return function(n){return new $(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function tu(e){const t=$.fromString(e);return B(ru(t)),t}function ir(e,t){return qr(e.databaseId,t.path)}function Ns(e,t){const n=tu(t);if(n.get(1)!==e.databaseId.projectId)throw new I(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new I(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new C(eu(n))}function or(e,t){return qr(e.databaseId,t)}function Of(e){const t=tu(e);return t.length===4?$.emptyPath():eu(t)}function ar(e){return new $(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function eu(e){return B(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Yi(e,t,n){return{name:ir(e,t),fields:n.value.mapValue.fields}}function Mf(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(B(c===void 0||typeof c=="string"),ct.fromBase64String(c||"")):(B(c===void 0||c instanceof Uint8Array),ct.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?d.UNKNOWN:Ya(u.code);return new I(c,u.message||"")}(o);n=new Ja(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ns(e,s.document.name),i=Et(s.document.updateTime),o=s.document.createTime?Et(s.document.createTime):b.min(),a=new gt({mapValue:{fields:s.document.fields}}),u=rt.newFoundDocument(r,i,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new _n(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Ns(e,s.document),i=s.readTime?Et(s.readTime):b.min(),o=rt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new _n([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Ns(e,s.document),i=s.removedTargetIds||[];n=new _n([],i,r,null)}else{if(!("filter"in t))return _();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new If(r,i),a=s.targetId;n=new Xa(a,o)}}return n}function Lf(e,t){let n;if(t instanceof fn)n={update:Yi(e,t.key,t.value)};else if(t instanceof Wa)n={delete:ir(e,t.key)};else if(t instanceof Yt)n={update:Yi(e,t.key,t.data),updateMask:qf(t.fieldMask)};else{if(!(t instanceof Ef))return _();n={verify:ir(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof $n)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xe)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Je)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Un)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw _()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Rf(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:_()}(e,t.precondition)),n}function Pf(e,t){return e&&e.length>0?(B(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?Et(s.updateTime):Et(r);return i.isEqual(b.min())&&(i=Et(r)),new yf(i,s.transformResults||[])}(n,t))):[]}function Ff(e,t){return{documents:[or(e,t.path)]}}function Vf(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=or(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=or(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length!==0)return su(St.create(u,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:te(h.field),direction:Uf(h.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=rr(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Bf(e){let t=Of(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){B(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=function(h){const l=nu(h);return l instanceof St&&Ra(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Oe(ee(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,os(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(h){const l=!!h.before,p=h.values||[];return new Bn(p,l)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const l=!h.before,p=h.values||[];return new Bn(p,l)}(n.endAt)),ef(t,r,o,i,a,"F",u,c)}function $f(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function nu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ee(t.unaryFilter.field);return G.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ee(t.unaryFilter.field);return G.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ee(t.unaryFilter.field);return G.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ee(t.unaryFilter.field);return G.create(i,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(e):e.fieldFilter!==void 0?function(t){return G.create(ee(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return St.create(t.compositeFilter.filters.map(n=>nu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return _()}}(t.compositeFilter.op))}(e):_()}function Uf(e){return bf[e]}function jf(e){return Nf[e]}function zf(e){return kf[e]}function te(e){return{fieldPath:e.canonicalString()}}function ee(e){return it.fromServerFormat(e.fieldPath)}function su(e){return e instanceof G?function(t){if(t.op==="=="){if(Pi(t.value))return{unaryFilter:{field:te(t.field),op:"IS_NAN"}};if(Li(t.value))return{unaryFilter:{field:te(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pi(t.value))return{unaryFilter:{field:te(t.field),op:"IS_NOT_NAN"}};if(Li(t.value))return{unaryFilter:{field:te(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:te(t.field),op:jf(t.op),value:t.value}}}(e):e instanceof St?function(t){const n=t.getFilters().map(s=>su(s));return n.length===1?n[0]:{compositeFilter:{op:zf(t.op),filters:n}}}(e):_()}function qf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ru(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class kt{constructor(t,n,s,r,i=b.min(),o=b.min(),a=ct.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Hf{constructor(t){this.fe=t}}function Kf(e){const t=Bf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?nr(t,t.limit,"L"):t}/**
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
 */class Gf{constructor(){this.rn=new Qf}addToCollectionParentIndex(t,n){return this.rn.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Lt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Lt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Qf{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new ut($.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new ut($.comparator)).toArray()}}/**
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
 */class de{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new de(0)}static Mn(){return new de(-1)}}/**
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
 */class Wf{constructor(){this.changes=new Te(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,rt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class Yf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Xf{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Le(s.mutation,r,pt.empty(),Q.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,x()).next(()=>s))}getLocalViewOfDocuments(t,n,s=x()){const r=zt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=be();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=zt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,x()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=bt();const o=Me(),a=Me();return n.forEach((u,c)=>{const h=s.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Yt)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Le(h.mutation,c,h.mutation.getFieldMask(),Q.now())):o.set(c.key,pt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new Yf(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Me();let r=new U((o,a)=>o-a),i=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=s.get(u)||pt.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(r.get(a.batchId)||x()).add(u);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=$a();h.forEach(p=>{if(!i.has(p)){const m=Ga(n.get(p),s.get(p));m!==null&&l.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return C.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):rf(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):g.resolve(zt());let a=-1,u=i;return o.next(c=>g.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?g.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,x())).next(h=>({batchId:a,changes:Ba(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new C(n)).next(s=>{let r=be();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=be();return this.indexManager.getCollectionParents(t,r).next(o=>g.forEach(o,a=>{const u=function(c,h){return new as(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,rt.newInvalidDocument(c)))});let o=be();return i.forEach((a,u)=>{const c=r.get(a);c!==void 0&&Le(c.mutation,u,pt.empty(),Q.now()),cs(n,u)&&(o=o.insert(a,u))}),o})}}/**
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
 */class Jf{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return g.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Et(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:Kf(s.bundledQuery),readTime:Et(s.readTime)}}(n)),g.resolve()}}/**
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
 */class Zf{constructor(){this.overlays=new U(C.comparator),this.ls=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=zt();return g.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.we(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const r=zt(),i=n.length+1,o=new C(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return g.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new U((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=i.get(c.largestBatchId);h===null&&(h=zt(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=zt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return g.resolve(a)}we(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Sf(n,s));let i=this.ls.get(n);i===void 0&&(i=x(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class Hr{constructor(){this.fs=new ut(Y.ds),this.ws=new ut(Y._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new Y(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new Y(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new C(new $([])),s=new Y(n,t),r=new Y(n,t+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new C(new $([])),s=new Y(n,t),r=new Y(n,t+1);let i=x();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Y(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Y{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return C.comparator(t.key,n.key)||M(t.As,n.As)}static _s(t,n){return M(t.As,n.As)||C.comparator(t.key,n.key)}}/**
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
 */class td{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ut(Y.ds)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tf(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Y(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Y(n,0),r=new Y(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new ut(M);return n.forEach(r=>{const i=new Y(r,0),o=new Y(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),g.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;C.isDocumentKey(i)||(i=i.child(""));const o=new Y(new C(i),0);let a=new ut(M);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.As)),!0)},o),g.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){B(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return g.forEach(n.mutations,r=>{const i=new Y(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new Y(n,0),r=this.Rs.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ed{constructor(t){this.Ds=t,this.docs=new U(C.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(t,n){let s=bt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():rt.newInvalidDocument(r))}),g.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=bt();const o=n.path,a=new C(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Vl(Fl(h),s)<=0||(r.has(h.key)||cs(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(t,n,s,r){_()}Cs(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new nd(this)}getSize(t){return g.resolve(this.size)}}class nd extends Wf{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(t,r)):this.os.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
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
 */class sd{constructor(t){this.persistence=t,this.xs=new Te(n=>Vr(n),Br),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Hr,this.targetCount=0,this.Ms=de.kn()}forEachTarget(t,n){return this.xs.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),g.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new de(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Fn(n),g.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.ks.containsKey(n))}}/**
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
 */class rd{constructor(t,n){this.$s={},this.overlays={},this.Os=new Mr(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new sd(this),this.indexManager=new Gf,this.remoteDocumentCache=function(s){return new ed(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Hf(n),this.qs=new Jf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Zf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new td(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){T("MemoryPersistence","Starting transaction:",t);const r=new id(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(t,n){return g.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class id extends $l{constructor(t){super(),this.currentSequenceNumber=t}}class Kr{constructor(t){this.persistence=t,this.Qs=new Hr,this.js=null}static zs(t){return new Kr(t)}get Ws(){if(this.js)return this.js;throw _()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),g.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ws,s=>{const r=C.fromPath(s);return this.Hs(t,r).next(i=>{i||n.removeEntry(r,b.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return g.or([()=>g.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
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
 */class Gr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(t,n){let s=x(),r=x();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Gr(t,n.fromCache,s,r)}}/**
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
 */class od{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ki(t,n).next(i=>i||this.Gi(t,n,r,s)).next(i=>i||this.Qi(t,n))}Ki(t,n){if($i(n))return g.resolve(null);let s=_t(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=nr(n,null,"F"),s=_t(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=x(...i);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.ji(n,a);return this.zi(n,c,o,u.readTime)?this.Ki(t,nr(n,null,"F")):this.Wi(t,c,n,u)}))})))}Gi(t,n,s,r){return $i(n)||r.isEqual(b.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(t,n):(xi()<=L.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),sr(n)),this.Wi(t,o,n,Pl(r,-1)))})}ji(t,n){let s=new ut(Fa(t));return n.forEach((r,i)=>{cs(t,i)&&(s=s.add(i))}),s}zi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,n){return xi()<=L.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",sr(n)),this.Ui.getDocumentsMatchingQuery(t,n,Lt.min())}Wi(t,n,s,r){return this.Ui.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ad{constructor(t,n,s,r){this.persistence=t,this.Hi=n,this.serializer=r,this.Ji=new U(M),this.Yi=new Te(i=>Vr(i),Br),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Xf(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function ud(e,t,n,s){return new ad(e,t,n,s)}async function iu(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=x();for(const c of r){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function cd(e,t){const n=N(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,l=h.keys();let p=g.resolve();return l.forEach(m=>{p=p.next(()=>c.getEntry(a,m)).next(S=>{const v=u.docVersions.get(m);B(v!==null),S.version.compareTo(v)<0&&(h.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),c.addEntry(S)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=x();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function ou(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function hd(e,t){const n=N(e),s=t.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];t.targetChanges.forEach((h,l)=>{const p=r.get(l);if(!p)return;a.push(n.Bs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Bs.addMatchingKeys(i,h.addedDocuments,l)));let m=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(l)!==null?m=m.withResumeToken(ct.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),r=r.insert(l,m),function(S,v,E){return S.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,m,h)&&a.push(n.Bs.updateTargetData(i,m))});let u=bt(),c=x();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(ld(i,o,t.documentUpdates).next(h=>{u=h.nr,c=h.sr})),!s.isEqual(b.min())){const h=n.Bs.getLastRemoteSnapshotVersion(i).next(l=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ji=r,i))}function ld(e,t,n){let s=x(),r=x();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=bt();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(b.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{nr:o,sr:r}})}function fd(e,t){const n=N(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function dd(e,t){const n=N(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,t).next(i=>i?(r=i,g.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new kt(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function ur(e,t,n){const s=N(e),r=s.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ln(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(r.target)}function Xi(e,t,n){const s=N(e);let r=b.min(),i=x();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=N(a),l=h.Yi.get(c);return l!==void 0?g.resolve(h.Ji.get(l)):h.Bs.getTargetData(u,c)}(s,o,_t(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?r:b.min(),n?i:x())).next(a=>(gd(s,of(t),a),{documents:a,ir:i})))}function gd(e,t,n){let s=e.Xi.get(t)||b.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Xi.set(t,s)}class Ji{constructor(){this.activeTargetIds=ff()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pd{constructor(){this.Hr=new Ji,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Ji,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class md{Yr(t){}shutdown(){}}/**
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
 */class Zi{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cn=null;function ks(){return Cn===null?Cn=268435456+Math.round(2147483648*Math.random()):Cn++,"0x"+Cn.toString(16)}/**
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
 */const yd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vd{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
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
 */const nt="WebChannelConnection";class wd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,r,i){const o=ks(),a=this.To(t,n);T("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const u={};return this.Eo(u,r,i),this.Ao(t,a,u,s).then(c=>(T("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw ce("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(t,n,s,r,i,o){return this.Io(t,n,s,r,i)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+we,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}To(t,n){const s=yd[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,r){const i=ks();return new Promise((o,a)=>{const u=new Al;u.setWithCredentials(!0),u.listenOnce(Sl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case bs.NO_ERROR:const h=u.getResponseJson();T(nt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(h)),o(h);break;case bs.TIMEOUT:T(nt,`RPC '${t}' ${i} timed out`),a(new I(d.DEADLINE_EXCEEDED,"Request time out"));break;case bs.HTTP_ERROR:const l=u.getStatus();if(T(nt,`RPC '${t}' ${i} failed with status:`,l,"response text:",u.getResponseText()),l>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const S=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(E)>=0?E:d.UNKNOWN}(m.status);a(new I(S,m.message))}else a(new I(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new I(d.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{T(nt,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(r);T(nt,`RPC '${t}' ${i} sending request:`,r),u.send(n,"POST",c,s,15)})}Ro(t,n,s){const r=ks(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=El(),a=Tl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Cl({})),this.Eo(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const h=i.join("");T(nt,`Creating RPC '${t}' stream ${r}: ${h}`,u);const l=o.createWebChannel(h,u);let p=!1,m=!1;const S=new vd({ro:E=>{m?T(nt,`Not sending because RPC '${t}' stream ${r} is closed:`,E):(p||(T(nt,`Opening RPC '${t}' stream ${r} transport.`),l.open(),p=!0),T(nt,`RPC '${t}' stream ${r} sending:`,E),l.send(E))},oo:()=>l.close()}),v=(E,O,f)=>{E.listen(O,w=>{try{f(w)}catch(A){setTimeout(()=>{throw A},0)}})};return v(l,En.EventType.OPEN,()=>{m||T(nt,`RPC '${t}' stream ${r} transport opened.`)}),v(l,En.EventType.CLOSE,()=>{m||(m=!0,T(nt,`RPC '${t}' stream ${r} transport closed`),S.wo())}),v(l,En.EventType.ERROR,E=>{m||(m=!0,ce(nt,`RPC '${t}' stream ${r} transport errored:`,E),S.wo(new I(d.UNAVAILABLE,"The operation could not be completed")))}),v(l,En.EventType.MESSAGE,E=>{var O;if(!m){const f=E.data[0];B(!!f);const w=f,A=w.error||((O=w[0])===null||O===void 0?void 0:O.error);if(A){T(nt,`RPC '${t}' stream ${r} received error:`,A);const k=A.status;let F=function(W){const K=q[W];if(K!==void 0)return Ya(K)}(k),j=A.message;F===void 0&&(F=d.INTERNAL,j="Unknown error status: "+k+" with message "+A.message),m=!0,S.wo(new I(F,j)),l.close()}else T(nt,`RPC '${t}' stream ${r} received:`,f),S._o(f)}}),v(a,Il.STAT_EVENT,E=>{E.stat===Ni.PROXY?T(nt,`RPC '${t}' stream ${r} detected buffering proxy`):E.stat===Ni.NOPROXY&&T(nt,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function xs(){return typeof document<"u"?document:null}/**
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
 */function ds(e){return new xf(e,!0)}/**
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
 */class au{constructor(t,n,s=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&T("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class uu{constructor(t,n,s,r,i,o,a,u){this.ii=t,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new au(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{t(()=>{const r=new I(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return T("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ed extends uu{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=Mf(this.serializer,t),s=function(r){if(!("targetChange"in r))return b.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?b.min():i.readTime?Et(i.readTime):b.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=ar(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=er(a)?{documents:Ff(r,a)}:{query:Vf(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Za(r,i.resumeToken);const u=rr(r,i.expectedCount);u!==null&&(o.expectedCount=u)}else if(i.snapshotVersion.compareTo(b.min())>0){o.readTime=jn(r,i.snapshotVersion.toTimestamp());const u=rr(r,i.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const s=$f(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=ar(this.serializer),n.removeTarget=t,this.Wo(n)}}class Td extends uu{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(B(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=Pf(t.writeResults,t.commitTime),s=Et(t.commitTime);return this.listener.cu(s,n)}return B(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=ar(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Lf(this.serializer,s))};this.Wo(n)}}/**
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
 */class Sd extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new I(d.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(d.UNKNOWN,r.toString())})}vo(t,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(d.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class Id{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Dt(n),this.mu=!1):T("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class Cd{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Xt(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=N(a);u.vu.add(4),await gn(u),u.bu.set("Unknown"),u.vu.delete(4),await gs(u)}(this))})}),this.bu=new Id(s,r)}}async function gs(e){if(Xt(e))for(const t of e.Ru)await t(!0)}async function gn(e){for(const t of e.Ru)await t(!1)}function cu(e,t){const n=N(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Yr(n)?Wr(n):Se(n).Ko()&&Qr(n,t))}function hu(e,t){const n=N(e),s=Se(n);n.Au.delete(t),s.Ko()&&lu(n,t),n.Au.size===0&&(s.Ko()?s.jo():Xt(n)&&n.bu.set("Unknown"))}function Qr(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(b.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Se(e).su(t)}function lu(e,t){e.Vu.qt(t),Se(e).iu(t)}function Wr(e){e.Vu=new _f({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Se(e).start(),e.bu.gu()}function Yr(e){return Xt(e)&&!Se(e).Uo()&&e.Au.size>0}function Xt(e){return N(e).vu.size===0}function fu(e){e.Vu=void 0}async function Ad(e){e.Au.forEach((t,n)=>{Qr(e,t)})}async function Dd(e,t){fu(e),Yr(e)?(e.bu.Iu(t),Wr(e)):e.bu.set("Unknown")}async function _d(e,t,n){if(e.bu.set("Online"),t instanceof Ja&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){T("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await zn(e,s)}else if(t instanceof _n?e.Vu.Ht(t):t instanceof Xa?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(b.min()))try{const s=await ou(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(u);c&&r.Au.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,u)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(ct.EMPTY_BYTE_STRING,c.snapshotVersion)),lu(r,a);const h=new kt(c.target,a,u,c.sequenceNumber);Qr(r,h)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){T("RemoteStore","Failed to raise snapshot:",s),await zn(e,s)}}async function zn(e,t,n){if(!ln(t))throw t;e.vu.add(1),await gn(e),e.bu.set("Offline"),n||(n=()=>ou(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await gs(e)})}function du(e,t){return t().catch(n=>zn(e,n,t))}async function ps(e){const t=N(e),n=Ft(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;bd(t);)try{const r=await fd(t.localStore,s);if(r===null){t.Eu.length===0&&n.jo();break}s=r.batchId,Nd(t,r)}catch(r){await zn(t,r)}gu(t)&&pu(t)}function bd(e){return Xt(e)&&e.Eu.length<10}function Nd(e,t){e.Eu.push(t);const n=Ft(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function gu(e){return Xt(e)&&!Ft(e).Uo()&&e.Eu.length>0}function pu(e){Ft(e).start()}async function kd(e){Ft(e).hu()}async function xd(e){const t=Ft(e);for(const n of e.Eu)t.uu(n.mutations)}async function Rd(e,t,n){const s=e.Eu.shift(),r=Ur.from(s,t,n);await du(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await ps(e)}async function Od(e,t){t&&Ft(e).ou&&await async function(n,s){if(r=s.code,Cf(r)&&r!==d.ABORTED){const i=n.Eu.shift();Ft(n).Qo(),await du(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ps(n)}var r}(e,t),gu(e)&&pu(e)}async function to(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const s=Xt(n);n.vu.add(3),await gn(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await gs(n)}async function Md(e,t){const n=N(e);t?(n.vu.delete(2),await gs(n)):t||(n.vu.add(2),await gn(n),n.bu.set("Unknown"))}function Se(e){return e.Su||(e.Su=function(t,n,s){const r=N(t);return r.fu(),new Ed(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{uo:Ad.bind(null,e),ao:Dd.bind(null,e),nu:_d.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),Yr(e)?Wr(e):e.bu.set("Unknown")):(await e.Su.stop(),fu(e))})),e.Su}function Ft(e){return e.Du||(e.Du=function(t,n,s){const r=N(t);return r.fu(),new Td(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{uo:kd.bind(null,e),ao:Od.bind(null,e),au:xd.bind(null,e),cu:Rd.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await ps(e)):(await e.Du.stop(),e.Eu.length>0&&(T("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
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
 */class Xr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Xr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jr(e,t){if(Dt("AsyncQueue",`${t}: ${e}`),ln(e))return new I(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ae{constructor(t){this.comparator=t?(n,s)=>t(n,s)||C.comparator(n.key,s.key):(n,s)=>C.comparator(n.key,s.key),this.keyedMap=be(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new ae(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ae)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ae;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class eo{constructor(){this.Cu=new U(C.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):_():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class ge{constructor(t,n,s,r,i,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ge(t,n,ae.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&us(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Ld{constructor(){this.Nu=void 0,this.listeners=[]}}class Pd{constructor(){this.queries=new Te(t=>Pa(t),us),this.onlineState="Unknown",this.ku=new Set}}async function Fd(e,t){const n=N(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Ld),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Jr(o,`Initialization of query '${sr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Mu(n.onlineState),i.Nu&&t.$u(i.Nu)&&Zr(n)}async function Vd(e,t){const n=N(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Bd(e,t){const n=N(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&Zr(n)}function $d(e,t,n){const s=N(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Zr(e){e.ku.forEach(t=>{t.next()})}class Ud{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new ge(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=ge.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
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
 */class mu{constructor(t){this.key=t}}class yu{constructor(t){this.key=t}}class jd{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=x(),this.mutatedKeys=x(),this.tc=Fa(t),this.ec=new ae(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new eo,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const p=r.get(h),m=cs(this.query,l)?l:null,S=!!p&&this.mutatedKeys.has(p.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;p&&m?p.data.isEqual(m.data)?S!==v&&(s.track({type:3,doc:m}),E=!0):this.rc(p,m)||(s.track({type:2,doc:m}),E=!0,(u&&this.tc(m,u)>0||c&&this.tc(m,c)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),E=!0):p&&!m&&(s.track({type:1,doc:p}),E=!0,(u||c)&&(a=!0)),E&&(m?(o=o.add(m),i=v?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort((c,h)=>function(l,p){const m=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _()}};return m(l)-m(p)}(c.type,h.type)||this.tc(c.doc,h.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,i.length!==0||u?{snapshot:new ge(this.query,t.ec,r,i,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new eo,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=x(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new yu(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new mu(s))}),n}hc(t){this.Yu=t.ir,this.Zu=x();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return ge.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class zd{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class qd{constructor(t){this.key=t,this.fc=!1}}class Hd{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Te(a=>Pa(a),us),this._c=new Map,this.mc=new Set,this.gc=new U(C.comparator),this.yc=new Map,this.Ic=new Hr,this.Tc={},this.Ec=new Map,this.Ac=de.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Kd(e,t){const n=ng(e);let s,r;const i=n.wc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await dd(n.localStore,_t(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Gd(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&cu(n.remoteStore,o)}return r}async function Gd(e,t,n,s,r){e.Rc=(l,p,m)=>async function(S,v,E,O){let f=v.view.sc(E);f.zi&&(f=await Xi(S.localStore,v.query,!1).then(({documents:k})=>v.view.sc(k,f)));const w=O&&O.targetChanges.get(v.targetId),A=v.view.applyChanges(f,S.isPrimaryClient,w);return so(S,v.targetId,A.cc),A.snapshot}(e,l,p,m);const i=await Xi(e.localStore,t,!0),o=new jd(t,i.ir),a=o.sc(i.documents),u=dn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),c=o.applyChanges(a,e.isPrimaryClient,u);so(e,n,c.cc);const h=new zd(t,n,o);return e.wc.set(t,h),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Qd(e,t){const n=N(e),s=n.wc.get(t),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!us(i,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ur(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),hu(n.remoteStore,s.targetId),cr(n,s.targetId)}).catch(hn)):(cr(n,s.targetId),await ur(n.localStore,s.targetId,!0))}async function Wd(e,t,n){const s=sg(e);try{const r=await function(i,o){const a=N(i),u=Q.now(),c=o.reduce((p,m)=>p.add(m.key),x());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=bt(),S=x();return a.Zi.getEntries(p,c).next(v=>{m=v,m.forEach((E,O)=>{O.isValidDocument()||(S=S.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,m)).next(v=>{h=v;const E=[];for(const O of o){const f=wf(O,h.get(O.key).overlayedDocument);f!=null&&E.push(new Yt(O.key,f,Na(f.value.mapValue),Ct.exists(!0)))}return a.mutationQueue.addMutationBatch(p,u,E,o)}).next(v=>{l=v;const E=v.applyToLocalDocumentSet(h,S);return a.documentOverlayCache.saveOverlays(p,v.batchId,E)})}).then(()=>({batchId:l.batchId,changes:Ba(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let u=i.Tc[i.currentUser.toKey()];u||(u=new U(M)),u=u.insert(o,a),i.Tc[i.currentUser.toKey()]=u}(s,r.batchId,n),await pn(s,r.changes),await ps(s.remoteStore)}catch(r){const i=Jr(r,"Failed to persist write");n.reject(i)}}async function vu(e,t){const n=N(e);try{const s=await hd(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(B(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?B(o.fc):r.removedDocuments.size>0&&(B(o.fc),o.fc=!1))}),await pn(n,s,t)}catch(s){await hn(s)}}function no(e,t,n){const s=N(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=N(i);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.Mu(o)&&(u=!0)}),u&&Zr(a)}(s.eventManager,t),r.length&&s.dc.nu(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Yd(e,t,n){const s=N(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.yc.get(t),i=r&&r.key;if(i){let o=new U(C.comparator);o=o.insert(i,rt.newNoDocument(i,b.min()));const a=x().add(i),u=new fs(b.min(),new Map,new U(M),o,a);await vu(s,u),s.gc=s.gc.remove(i),s.yc.delete(t),ti(s)}else await ur(s.localStore,t,!1).then(()=>cr(s,t,n)).catch(hn)}async function Xd(e,t){const n=N(e),s=t.batch.batchId;try{const r=await cd(n.localStore,t);Eu(n,s,null),wu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await pn(n,r)}catch(r){await hn(r)}}async function Jd(e,t,n){const s=N(e);try{const r=await function(i,o){const a=N(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(B(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,t);Eu(s,t,n),wu(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await pn(s,r)}catch(r){await hn(r)}}function wu(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function Eu(e,t,n){const s=N(e);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.Tc[s.currentUser.toKey()]=r}}function cr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||Tu(e,s)})}function Tu(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(hu(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),ti(e))}function so(e,t,n){for(const s of n)s instanceof mu?(e.Ic.addReference(s.key,t),Zd(e,s)):s instanceof yu?(T("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||Tu(e,s.key)):_()}function Zd(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(T("SyncEngine","New document in limbo: "+n),e.mc.add(s),ti(e))}function ti(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new C($.fromString(t)),s=e.Ac.next();e.yc.set(s,new qd(n)),e.gc=e.gc.insert(n,s),cu(e.remoteStore,new kt(_t($r(n.path)),s,"TargetPurposeLimboResolution",Mr.ct))}}async function pn(e,t,n){const s=N(e),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,u)=>{o.push(s.Rc(u,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const h=Gr.Li(u.targetId,c);i.push(h)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,u){const c=N(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,l=>g.forEach(l.Fi,p=>c.persistence.referenceDelegate.addReference(h,l.targetId,p)).next(()=>g.forEach(l.Bi,p=>c.persistence.referenceDelegate.removeReference(h,l.targetId,p)))))}catch(h){if(!ln(h))throw h;T("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const p=c.Ji.get(l),m=p.snapshotVersion,S=p.withLastLimboFreeSnapshotVersion(m);c.Ji=c.Ji.insert(l,S)}}}(s.localStore,i))}async function tg(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){T("SyncEngine","User change. New user:",t.toKey());const s=await iu(n.localStore,t);n.currentUser=t,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new I(d.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await pn(n,s.er)}}function eg(e,t){const n=N(e),s=n.yc.get(t);if(s&&s.fc)return x().add(s.key);{let r=x();const i=n._c.get(t);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function ng(e){const t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=vu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=eg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Yd.bind(null,t),t.dc.nu=Bd.bind(null,t.eventManager),t.dc.Pc=$d.bind(null,t.eventManager),t}function sg(e){const t=N(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Jd.bind(null,t),t}class ro{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ds(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return ud(this.persistence,new od,t.initialUser,this.serializer)}createPersistence(t){return new rd(Kr.zs,this.serializer)}createSharedClientState(t){return new pd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>no(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tg.bind(null,this.syncEngine),await Md(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Pd}createDatastore(t){const n=ds(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new wd(r));var r;return function(i,o,a,u){return new Sd(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>no(this.syncEngine,a,0),o=Zi.D()?new Zi:new md,new Cd(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,u,c){const h=new Hd(s,r,i,o,a,u);return c&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=N(t);T("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await gn(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class ig{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):Dt("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class og{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=st.UNAUTHENTICATED,this.clientId=Da.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{T("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(T("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Jr(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Rs(e,t){e.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await iu(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function io(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ug(e);T("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>to(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>to(t.remoteStore,i)),e._onlineComponents=t}function ag(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function ug(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!ag(n))throw n;ce("Error using user provided cache. Falling back to memory cache: "+n),await Rs(e,new ro)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await Rs(e,new ro);return e._offlineComponents}async function Su(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await io(e,e._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await io(e,new rg))),e._onlineComponents}function cg(e){return Su(e).then(t=>t.syncEngine)}async function hg(e){const t=await Su(e),n=t.eventManager;return n.onListen=Kd.bind(null,t.syncEngine),n.onUnlisten=Qd.bind(null,t.syncEngine),n}function lg(e,t,n={}){const s=new Ot;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new ig({next:l=>{i.enqueueAndForget(()=>Vd(r,h));const p=l.docs.has(o);!p&&l.fromCache?u.reject(new I(d.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&l.fromCache&&a&&a.source==="server"?u.reject(new I(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new Ud($r(o.path),c,{includeMetadataChanges:!0,Ku:!0});return Fd(r,h)}(await hg(e),e.asyncQueue,t,n,s)),s.promise}/**
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
 */function Iu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const oo=new Map;/**
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
 */function Cu(e,t,n){if(!n)throw new I(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function fg(e,t,n,s){if(t===!0&&s===!0)throw new I(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ao(e){if(!C.isDocumentKey(e))throw new I(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function uo(e){if(C.isDocumentKey(e))throw new I(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ei(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":_()}function Ze(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ei(e);throw new I(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class co{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new I(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new I(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Iu((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new I(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new I(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new I(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class ms{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new co({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new I(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new co(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _l;switch(n.type){case"firstParty":return new xl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new I(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=oo.get(t);n&&(T("ComponentProvider","Removing Datastore"),oo.delete(t),n.terminate())}(this),Promise.resolve()}}function dg(e,t,n,s={}){var r;const i=(e=Ze(e,ms))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,u;if(typeof s.mockUserToken=="string")a=s.mockUserToken,u=st.MOCK_USER;else{a=rc(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new I(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new st(c)}e._authCredentials=new bl(new Aa(a,u))}}/**
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
 */class lt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new lt(this.firestore,t,this._key)}}class ni{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ni(this.firestore,t,this._query)}}class Mt extends ni{constructor(t,n,s){super(t,n,$r(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new lt(this.firestore,null,new C(t))}withConverter(t){return new Mt(this.firestore,t,this._path)}}function gg(e,t,...n){if(e=Pe(e),Cu("collection","path",t),e instanceof ms){const s=$.fromString(t,...n);return uo(s),new Mt(e,null,s)}{if(!(e instanceof lt||e instanceof Mt))throw new I(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child($.fromString(t,...n));return uo(s),new Mt(e.firestore,null,s)}}function Au(e,t,...n){if(e=Pe(e),arguments.length===1&&(t=Da.A()),Cu("doc","path",t),e instanceof ms){const s=$.fromString(t,...n);return ao(s),new lt(e,null,new C(s))}{if(!(e instanceof lt||e instanceof Mt))throw new I(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child($.fromString(t,...n));return ao(s),new lt(e.firestore,e instanceof Mt?e.converter:null,new C(s))}}/**
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
 */class pg{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new au(this,"async_queue_retry"),this.Xc=()=>{const n=xs();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=xs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=xs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Ot;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!ln(t))throw t;T("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Dt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const r=Xr.createAndSchedule(this,t,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&_()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class si extends ms{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new pg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_u(this),this._firestoreClient.terminate()}}function mg(e,t){const n=typeof e=="object"?e:uh(),s=typeof e=="string"?e:t||"(default)",r=rh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=nc("firestore");i&&dg(r,...i)}return r}function Du(e){return e._firestoreClient||_u(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function _u(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,u,c){return new zl(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Iu(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new og(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class pe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pe(ct.fromBase64String(t))}catch(n){throw new I(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new pe(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ri{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new I(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class bu{constructor(t){this._methodName=t}}/**
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
 */class ii{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new I(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new I(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return M(this._lat,t._lat)||M(this._long,t._long)}}/**
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
 */const yg=/^__.*__$/;class vg{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Yt(t,this.data,this.fieldMask,n,this.fieldTransforms):new fn(t,this.data,n,this.fieldTransforms)}}function Nu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class oi{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.fa(t),r}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return qn(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Nu(this.ca)&&yg.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class wg{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||ds(t)}ya(t,n,s,r=!1){return new oi({ca:t,methodName:n,ga:s,path:it.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eg(e){const t=e._freezeSettings(),n=ds(e._databaseId);return new wg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Tg(e,t,n,s,r,i={}){const o=e.ya(i.merge||i.mergeFields?2:0,t,n,r);Ou("Data must be an object, but it was:",o,s);const a=xu(s,o);let u,c;if(i.merge)u=new pt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const p=Sg(t,l,n);if(!o.contains(p))throw new I(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Cg(h,p)||h.push(p)}u=new pt(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new vg(new gt(a),u,c)}function ku(e,t){if(Ru(e=Pe(e)))return Ou("Unsupported field value:",t,e),xu(e,t);if(e instanceof bu)return function(n,s){if(!Nu(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ku(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return df(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Q.fromDate(n);return{timestampValue:jn(s.serializer,r)}}if(n instanceof Q){const r=new Q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jn(s.serializer,r)}}if(n instanceof ii)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof pe)return{bytesValue:Za(s.serializer,n._byteString)};if(n instanceof lt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:qr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${ei(n)}`)}(e,t)}function xu(e,t){const n={};return _a(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(e,(s,r)=>{const i=ku(r,t.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ru(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Q||e instanceof ii||e instanceof pe||e instanceof lt||e instanceof bu)}function Ou(e,t,n){if(!Ru(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ei(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}function Sg(e,t,n){if((t=Pe(t))instanceof ri)return t._internalPath;if(typeof t=="string")return Mu(e,t);throw qn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ig=new RegExp("[~\\*/\\[\\]]");function Mu(e,t,n){if(t.search(Ig)>=0)throw qn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ri(...t.split("."))._internalPath}catch{throw qn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new I(d.INVALID_ARGUMENT,a+e+u)}function Cg(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Lu{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ag(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Pu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ag extends Lu{data(){return super.data()}}function Pu(e,t){return typeof t=="string"?Mu(e,t):t instanceof ri?t._internalPath:t._delegate._internalPath}class Dg{convertValue(t,n="none"){switch(Qt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return H(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Gt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw _()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Ee(t,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new ii(H(t.latitude),H(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Pr(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Qe(t));default:return null}}convertTimestamp(t){const n=Pt(t);return new Q(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=$.fromString(t);B(ru(s));const r=new We(s.get(1),s.get(3)),i=new C(s.popFirst(5));return r.isEqual(n)||Dt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function _g(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
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
 */class bg{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fu extends Lu{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ng(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Pu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ng extends Fu{data(t={}){return super.data(t)}}/**
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
 */function kg(e){e=Ze(e,lt);const t=Ze(e.firestore,si);return lg(Du(t),e._key).then(n=>Mg(t,e,n))}class xg extends Dg{constructor(t){super(),this.firestore=t}convertBytes(t){return new pe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function Rg(e,t,n){e=Ze(e,lt);const s=Ze(e.firestore,si),r=_g(e.converter,t,n);return Og(s,[Tg(Eg(s),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,Ct.none())])}function Og(e,t){return function(n,s){const r=new Ot;return n.asyncQueue.enqueueAndForget(async()=>Wd(await cg(n),s,r)),r.promise}(Du(e),t)}function Mg(e,t,n){const s=n.docs.get(t._key),r=new xg(e);return new Fu(e,r,t._key,s,new bg(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){we=n})(ah),kn(new Fe("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new si(new Nl(n.getProvider("auth-internal")),new Ol(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new We(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),se(ki,"3.13.0",e),se(ki,"3.13.0","esm2017")})();const Lg={development:{firebase:{apiKey:"AIzaSyABLuD6Th9x3QQuULsCG01fopxNjf4vkHY",authDomain:"bintbadint.firebaseapp.com",projectId:"bintbadint",storageBucket:"bintbadint.appspot.com",messagingSenderId:"913857577737",appId:"1:913857577737:web:3a9a3ada5983a2381289d8"}},production:{firebase:{apiKey:"AIzaSyABLuD6Th9x3QQuULsCG01fopxNjf4vkHY",authDomain:"bintbadint.firebaseapp.com",projectId:"bintbadint",storageBucket:"bintbadint.appspot.com",messagingSenderId:"913857577737",appId:"1:913857577737:web:3a9a3ada5983a2381289d8"}}},Pg="development",Vu=Lg[Pg];var ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Vg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function s(){if(this instanceof s){var r=[null];r.push.apply(r,arguments);var i=Function.bind.apply(t,r);return new i}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var r=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return e[s]}})}),n}var Bu={exports:{}};function Bg(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Os={exports:{}};const $g=new Proxy({},{get(e,t){throw new Error(`Module "" has been externalized for browser compatibility. Cannot access ".${t}" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`)}}),Ug=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),jg=Vg(Ug);var ho;function zg(){return ho||(ho=1,function(e,t){(function(n,s){e.exports=s()})(ke,function(){var n=n||function(s,r){var i;if(typeof window<"u"&&window.crypto&&(i=window.crypto),typeof self<"u"&&self.crypto&&(i=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(i=globalThis.crypto),!i&&typeof window<"u"&&window.msCrypto&&(i=window.msCrypto),!i&&typeof ke<"u"&&ke.crypto&&(i=ke.crypto),!i&&typeof Bg=="function")try{i=jg}catch{}var o=function(){if(i){if(typeof i.getRandomValues=="function")try{return i.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof i.randomBytes=="function")try{return i.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function f(){}return function(w){var A;return f.prototype=w,A=new f,f.prototype=null,A}}(),u={},c=u.lib={},h=c.Base=function(){return{extend:function(f){var w=a(this);return f&&w.mixIn(f),(!w.hasOwnProperty("init")||this.init===w.init)&&(w.init=function(){w.$super.init.apply(this,arguments)}),w.init.prototype=w,w.$super=this,w},create:function(){var f=this.extend();return f.init.apply(f,arguments),f},init:function(){},mixIn:function(f){for(var w in f)f.hasOwnProperty(w)&&(this[w]=f[w]);f.hasOwnProperty("toString")&&(this.toString=f.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),l=c.WordArray=h.extend({init:function(f,w){f=this.words=f||[],w!=r?this.sigBytes=w:this.sigBytes=f.length*4},toString:function(f){return(f||m).stringify(this)},concat:function(f){var w=this.words,A=f.words,k=this.sigBytes,F=f.sigBytes;if(this.clamp(),k%4)for(var j=0;j<F;j++){var W=A[j>>>2]>>>24-j%4*8&255;w[k+j>>>2]|=W<<24-(k+j)%4*8}else for(var K=0;K<F;K+=4)w[k+K>>>2]=A[K>>>2];return this.sigBytes+=F,this},clamp:function(){var f=this.words,w=this.sigBytes;f[w>>>2]&=4294967295<<32-w%4*8,f.length=s.ceil(w/4)},clone:function(){var f=h.clone.call(this);return f.words=this.words.slice(0),f},random:function(f){for(var w=[],A=0;A<f;A+=4)w.push(o());return new l.init(w,f)}}),p=u.enc={},m=p.Hex={stringify:function(f){for(var w=f.words,A=f.sigBytes,k=[],F=0;F<A;F++){var j=w[F>>>2]>>>24-F%4*8&255;k.push((j>>>4).toString(16)),k.push((j&15).toString(16))}return k.join("")},parse:function(f){for(var w=f.length,A=[],k=0;k<w;k+=2)A[k>>>3]|=parseInt(f.substr(k,2),16)<<24-k%8*4;return new l.init(A,w/2)}},S=p.Latin1={stringify:function(f){for(var w=f.words,A=f.sigBytes,k=[],F=0;F<A;F++){var j=w[F>>>2]>>>24-F%4*8&255;k.push(String.fromCharCode(j))}return k.join("")},parse:function(f){for(var w=f.length,A=[],k=0;k<w;k++)A[k>>>2]|=(f.charCodeAt(k)&255)<<24-k%4*8;return new l.init(A,w)}},v=p.Utf8={stringify:function(f){try{return decodeURIComponent(escape(S.stringify(f)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(f){return S.parse(unescape(encodeURIComponent(f)))}},E=c.BufferedBlockAlgorithm=h.extend({reset:function(){this._data=new l.init,this._nDataBytes=0},_append:function(f){typeof f=="string"&&(f=v.parse(f)),this._data.concat(f),this._nDataBytes+=f.sigBytes},_process:function(f){var w,A=this._data,k=A.words,F=A.sigBytes,j=this.blockSize,W=j*4,K=F/W;f?K=s.ceil(K):K=s.max((K|0)-this._minBufferSize,0);var Jt=K*j,Nt=s.min(Jt*4,F);if(Jt){for(var Ie=0;Ie<Jt;Ie+=j)this._doProcessBlock(k,Ie);w=k.splice(0,Jt),A.sigBytes-=Nt}return new l.init(w,Nt)},clone:function(){var f=h.clone.call(this);return f._data=this._data.clone(),f},_minBufferSize:0});c.Hasher=E.extend({cfg:h.extend(),init:function(f){this.cfg=this.cfg.extend(f),this.reset()},reset:function(){E.reset.call(this),this._doReset()},update:function(f){return this._append(f),this._process(),this},finalize:function(f){f&&this._append(f);var w=this._doFinalize();return w},blockSize:16,_createHelper:function(f){return function(w,A){return new f.init(A).finalize(w)}},_createHmacHelper:function(f){return function(w,A){return new O.HMAC.init(f,A).finalize(w)}}});var O=u.algo={};return u}(Math);return n})}(Os)),Os.exports}(function(e,t){(function(n,s){e.exports=s(zg())})(ke,function(n){return function(s){var r=n,i=r.lib,o=i.WordArray,a=i.Hasher,u=r.algo,c=[],h=[];(function(){function m(O){for(var f=s.sqrt(O),w=2;w<=f;w++)if(!(O%w))return!1;return!0}function S(O){return(O-(O|0))*4294967296|0}for(var v=2,E=0;E<64;)m(v)&&(E<8&&(c[E]=S(s.pow(v,1/2))),h[E]=S(s.pow(v,1/3)),E++),v++})();var l=[],p=u.SHA256=a.extend({_doReset:function(){this._hash=new o.init(c.slice(0))},_doProcessBlock:function(m,S){for(var v=this._hash.words,E=v[0],O=v[1],f=v[2],w=v[3],A=v[4],k=v[5],F=v[6],j=v[7],W=0;W<64;W++){if(W<16)l[W]=m[S+W]|0;else{var K=l[W-15],Jt=(K<<25|K>>>7)^(K<<14|K>>>18)^K>>>3,Nt=l[W-2],Ie=(Nt<<15|Nt>>>17)^(Nt<<13|Nt>>>19)^Nt>>>10;l[W]=Jt+l[W-7]+Ie+l[W-16]}var Uu=A&k^~A&F,ju=E&O^E&f^O&f,zu=(E<<30|E>>>2)^(E<<19|E>>>13)^(E<<10|E>>>22),qu=(A<<26|A>>>6)^(A<<21|A>>>11)^(A<<7|A>>>25),ai=j+qu+Uu+h[W]+l[W],Hu=zu+ju;j=F,F=k,k=A,A=w+ai|0,w=f,f=O,O=E,E=ai+Hu|0}v[0]=v[0]+E|0,v[1]=v[1]+O|0,v[2]=v[2]+f|0,v[3]=v[3]+w|0,v[4]=v[4]+A|0,v[5]=v[5]+k|0,v[6]=v[6]+F|0,v[7]=v[7]+j|0},_doFinalize:function(){var m=this._data,S=m.words,v=this._nDataBytes*8,E=m.sigBytes*8;return S[E>>>5]|=128<<24-E%32,S[(E+64>>>9<<4)+14]=s.floor(v/4294967296),S[(E+64>>>9<<4)+15]=v,m.sigBytes=S.length*4,this._process(),this._hash},clone:function(){var m=a.clone.call(this);return m._hash=this._hash.clone(),m}});r.SHA256=a._createHelper(p),r.HmacSHA256=a._createHmacHelper(p)}(Math),n.SHA256})})(Bu);var qg=Bu.exports;const Hg=Fg(qg);function Kg(e,t){if(isNaN(e)||e<400||e>599)throw new Error(`HTTP error status codes must be between 400 and 599 — ${e} is invalid`);return new Ku(e,t)}new TextEncoder;console.log(Vu);const Gg=Eo(Vu.firebase),Qg=mg(Gg),$u=gg(Qg,"pastes");async function Yg(e){const t=Hg(e).toString();return await Rg(Au($u,t),{content:e}),{message:"success",content:t}}async function Xg(e){const t=await kg(Au($u,e));if(t.exists())return{message:"success",content:t.data().content};throw Kg(404,{message:"Not Found"})}export{Kg as e,Xg as g,Yg as p};
