/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,k=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),D=new WeakMap;let F=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(k&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=D.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&D.set(e,t))}return t}toString(){return this.cssText}};const st=r=>new F(typeof r=="string"?r:r+"",void 0,L),Ct=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new F(e,r,L)},it=(r,t)=>{if(k)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=U.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},I=k?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return st(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:rt,defineProperty:nt,getOwnPropertyDescriptor:ot,getOwnPropertyNames:ht,getOwnPropertySymbols:at,getPrototypeOf:lt}=Object,N=globalThis,B=N.trustedTypes,ct=B?B.emptyScript:"",dt=N.reactiveElementPolyfillSupport,S=(r,t)=>r,M={toAttribute(r,t){switch(t){case Boolean:r=r?ct:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},G=(r,t)=>!rt(r,t),j={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:G};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;class m extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&nt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=ot(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i?.call(this)},set(o){const p=i?.call(this);n.call(this,o),this.requestUpdate(t,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??j}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=lt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,s=[...ht(e),...at(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(I(i))}else t!==void 0&&e.push(I(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return it(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:M).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:M;this._$Em=i,this[i]=o.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??G)(i?n:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$ET()}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(t){}firstUpdated(t){}}m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[S("elementProperties")]=new Map,m[S("finalized")]=new Map,dt?.({ReactiveElement:m}),(N.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,T=z.trustedTypes,W=T?T.createPolicy("lit-html",{createHTML:r=>r}):void 0,Q="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,X="?"+_,pt=`<${X}>`,g=document,b=()=>g.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",Y=Array.isArray,$t=r=>Y(r)||typeof r?.[Symbol.iterator]=="function",R=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,q=/>/g,f=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,J=/"/g,tt=/^(?:script|style|textarea|title)$/i,ut=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),wt=ut(1),y=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),K=new WeakMap,A=g.createTreeWalker(g,129);function et(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return W!==void 0?W.createHTML(t):t}const _t=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":"",o=E;for(let p=0;p<e;p++){const h=r[p];let l,d,a=-1,$=0;for(;$<h.length&&(o.lastIndex=$,d=o.exec(h),d!==null);)$=o.lastIndex,o===E?d[1]==="!--"?o=V:d[1]!==void 0?o=q:d[2]!==void 0?(tt.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=f):d[3]!==void 0&&(o=f):o===f?d[0]===">"?(o=i??E,a=-1):d[1]===void 0?a=-2:(a=o.lastIndex-d[2].length,l=d[1],o=d[3]===void 0?f:d[3]==='"'?J:Z):o===J||o===Z?o=f:o===V||o===q?o=E:(o=f,i=void 0);const u=o===f&&r[p+1].startsWith("/>")?" ":"";n+=o===E?h+pt:a>=0?(s.push(l),h.slice(0,a)+Q+h.slice(a)+_+u):h+_+(a===-2?p:u)}return[et(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class w{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const p=t.length-1,h=this.parts,[l,d]=_t(t,e);if(this.el=w.createElement(l,s),A.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=A.nextNode())!==null&&h.length<p;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(Q)){const $=d[o++],u=i.getAttribute(a).split(_),x=/([.?@])?(.*)/.exec($);h.push({type:1,index:n,name:x[2],strings:u,ctor:x[1]==="."?At:x[1]==="?"?gt:x[1]==="@"?mt:O}),i.removeAttribute(a)}else a.startsWith(_)&&(h.push({type:6,index:n}),i.removeAttribute(a));if(tt.test(i.tagName)){const a=i.textContent.split(_),$=a.length-1;if($>0){i.textContent=T?T.emptyScript:"";for(let u=0;u<$;u++)i.append(a[u],b()),A.nextNode(),h.push({type:2,index:++n});i.append(a[$],b())}}}else if(i.nodeType===8)if(i.data===X)h.push({type:2,index:n});else{let a=-1;for(;(a=i.data.indexOf(_,a+1))!==-1;)h.push({type:7,index:n}),a+=_.length-1}n++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function v(r,t,e=r,s){if(t===y)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const n=C(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=v(r,i._$AS(r,t.values),i,s)),t}class ft{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??g).importNode(e,!0);A.currentNode=i;let n=A.nextNode(),o=0,p=0,h=s[0];for(;h!==void 0;){if(o===h.index){let l;h.type===2?l=new P(n,n.nextSibling,this,t):h.type===1?l=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(l=new yt(n,this,t)),this._$AV.push(l),h=s[++p]}o!==h?.index&&(n=A.nextNode(),o++)}return A.currentNode=g,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class P{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=v(this,t,e),C(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):$t(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==c&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=w.createElement(et(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const n=new ft(i,this),o=n.u(this.options);n.p(e),this.$(o),this._$AH=n}}_$AC(t){let e=K.get(t.strings);return e===void 0&&K.set(t.strings,e=new w(t)),e}T(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new P(this.k(b()),this.k(b()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class O{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=v(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==y,o&&(this._$AH=t);else{const p=t;let h,l;for(t=n[0],h=0;h<n.length-1;h++)l=v(this,p[s+h],e,h),l===y&&(l=this._$AH[h]),o||=!C(l)||l!==this._$AH[h],l===c?t=c:t!==c&&(t+=(l??"")+n[h+1]),this._$AH[h]=l}o&&!i&&this.O(t)}O(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class At extends O{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===c?void 0:t}}class gt extends O{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class mt extends O{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=v(this,t,e,0)??c)===y)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class yt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){v(this,t)}}const vt=z.litHtmlPolyfillSupport;vt?.(w,P),(z.litHtmlVersions??=[]).push("3.1.0");const Et=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const n=e?.renderBefore??null;s._$litPart$=i=new P(t.insertBefore(b(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class H extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return y}}H._$litElement$=!0,H.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:H});const St=globalThis.litElementPolyfillSupport;St?.({LitElement:H});(globalThis.litElementVersions??=[]).push("4.0.2");export{G as f,Ct as i,Et as j,H as s,M as u,wt as x};
