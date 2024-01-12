import{u as g,f as x,i as v,s as f,x as d}from"./lit-element-uD7Gf95r.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=t=>(s,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,s)}):customElements.define(t,s)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:x},w=(t=_,s,r)=>{const{kind:o,metadata:i}=r;let e=globalThis.litPropertyMetadata.get(i);if(e===void 0&&globalThis.litPropertyMetadata.set(i,e=new Map),e.set(r.name,t),o==="accessor"){const{name:n}=r;return{set(a){const p=s.get.call(this);s.set.call(this,a),this.requestUpdate(n,p,t)},init(a){return a!==void 0&&this.C(n,void 0,t),a}}}if(o==="setter"){const{name:n}=r;return function(a){const p=this[n];s.call(this,a),this.requestUpdate(n,p,t)}}throw Error("Unsupported decorator location: "+o)};function b(t){return(s,r)=>typeof r=="object"?w(t,s,r):((o,i,e)=>{const n=i.hasOwnProperty(e);return i.constructor.createProperty(e,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(i,e):void 0})(t,s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(t){return b({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=(t,s,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof s!="object"&&Object.defineProperty(t,s,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(t){return(s,r)=>{const{slot:o,selector:i}=t??{},e="slot"+(o?`[name=${o}]`:":not([name])");return P(s,r,{get(){const n=this.renderRoot?.querySelector(e),a=n?.assignedElements(t)??[];return i===void 0?a:a.filter(p=>p.matches(i))}})}}function $(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var y={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var s={}.hasOwnProperty;function r(){for(var e="",n=0;n<arguments.length;n++){var a=arguments[n];a&&(e=i(e,o(a)))}return e}function o(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var a in e)s.call(e,a)&&e[a]&&(n=i(n,a));return n}function i(e,n){return n?e?e+" "+n:e+n:e}t.exports?(r.default=r,t.exports=r):window.classNames=r})()})(y);var j=y.exports;const E=$(j);var D=Object.defineProperty,C=Object.getOwnPropertyDescriptor,q=(t,s,r,o)=>{for(var i=o>1?void 0:o?C(s,r):s,e=t.length-1,n;e>=0;e--)(n=t[e])&&(i=(o?n(s,r,i):n(i))||i);return o&&i&&D(s,r,i),i};let h=class extends f{render(){return d`
      <slot></slot>
    `}};h.styles=v`
    :host {
        grid-area: all;
        position: relative;
        clip-path: inset(0 0 0 0);
        transition: translate var(--slider-speed), clip-path var(--slider-speed);
    }    

    :host(.before) {
        translate: -50% 0%;
        clip-path: inset(0 50% 0 0);       
    }
        
        
    :host(.after) {
        translate: 50% 0%;
        clip-path: inset(0 0 0 50%);
    }

    :host(.active) {
        translate: 0% 0%;
        clip-path: inset(0 0 0 0);
    }
  `;h=q([m("slider-item")],h);var I=Object.defineProperty,N=Object.getOwnPropertyDescriptor,u=(t,s,r,o)=>{for(var i=o>1?void 0:o?N(s,r):s,e=t.length-1,n;e>=0;e--)(n=t[e])&&(i=(o?n(s,r,i):n(i))||i);return o&&i&&I(s,r,i),i};let l=class extends f{constructor(){super(...arguments),this.speed="1000ms",this.active=0,this.updateClasses=()=>{this.listItems.forEach((t,s)=>{const r=E({active:this.active===s,after:s>this.active,before:s<this.active});t.className=r}),this.dispatchEvent(new CustomEvent("change",{detail:{active:this.active}}))},this.next=()=>{this.active=this._next},this.prev=()=>{this.active=this._prev}}firstUpdated(){this.updateClasses()}willUpdate(){this.updateClasses()}get _next(){return this.active===this.listItems.length-1?this.active:this.active+1}get _prev(){return this.active===0?0:this.active-1}render(){return d`
      <div class="container" style="--slider-speed: ${this.speed}">
        <slot></slot>
      </div>
    `}};l.styles=v`
    :host {
      display: block;
      overflow: hidden;
      --slider-speed: 1000ms;
    }

    .container {
      display: grid;
      grid-template-areas: "all";
      height: 100%;
    }
  `;u([b({type:String})],l.prototype,"speed",2);u([O()],l.prototype,"active",2);u([S({})],l.prototype,"listItems",2);l=u([m("appletv-slider")],l);const A={title:"AppleTV Slider",component:"appletv-slider",parameters:{docs:{description:{component:"Description…"}}},argTypes:{}},T=()=>{const t=[];for(let s=0;s<10;s++)t.push(d`
      <slider-item>
        <img
          style="width: 100%; height: 100%; position: absolute; object-fit: cover;"
          src="https://picsum.photos/1600/900?${s}"
        />
      </slider-item>
    `);return t},c={args:{speed:"1000ms"},render:t=>d`
      <appletv-slider speed="${t.speed}"> ${T()} </appletv-slider>
      <div class="buttons">
        <button
          class="button"
          @click="${()=>document.querySelector("appletv-slider")?.prev()}"
        >
          Prev
        </button>
        <button
          class="button"
          @click="${()=>document.querySelector("appletv-slider")?.next()}"
        >
          Next
        </button>
      </div>
      <style>
        appletv-slider {
          height: 75vh;
          max-height: 700px;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          padding-bottom: 50px;
        }
        .button {
          border: 1px solid #ccc;
          padding: 5px 20px;
        }
      </style>
    `};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    speed: "1000ms"
  },
  render: args => {
    return html\`
      <appletv-slider speed="\${args.speed}"> \${renderItems()} </appletv-slider>
      <div class="buttons">
        <button
          class="button"
          @click="\${() => document.querySelector("appletv-slider")?.prev()}"
        >
          Prev
        </button>
        <button
          class="button"
          @click="\${() => document.querySelector("appletv-slider")?.next()}"
        >
          Next
        </button>
      </div>
      <style>
        appletv-slider {
          height: 75vh;
          max-height: 700px;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          padding-bottom: 50px;
        }
        .button {
          border: 1px solid #ccc;
          padding: 5px 20px;
        }
      </style>
    \`;
  }
}`,...c.parameters?.docs?.source}}};const M=["Default"];export{c as Default,M as __namedExportsOrder,A as default};
