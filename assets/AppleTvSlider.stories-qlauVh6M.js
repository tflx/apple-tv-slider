import{u as g,f as x,i as v,s as f,x as d}from"./lit-element-uD7Gf95r.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=e=>(s,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,s)}):customElements.define(e,s)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:x},_=(e=w,s,r)=>{const{kind:o,metadata:i}=r;let t=globalThis.litPropertyMetadata.get(i);if(t===void 0&&globalThis.litPropertyMetadata.set(i,t=new Map),t.set(r.name,e),o==="accessor"){const{name:n}=r;return{set(a){const p=s.get.call(this);s.set.call(this,a),this.requestUpdate(n,p,e)},init(a){return a!==void 0&&this.C(n,void 0,e),a}}}if(o==="setter"){const{name:n}=r;return function(a){const p=this[n];s.call(this,a),this.requestUpdate(n,p,e)}}throw Error("Unsupported decorator location: "+o)};function b(e){return(s,r)=>typeof r=="object"?_(e,s,r):((o,i,t)=>{const n=i.hasOwnProperty(t);return i.constructor.createProperty(t,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(i,t):void 0})(e,s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(e){return b({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=(e,s,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof s!="object"&&Object.defineProperty(e,s,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(e){return(s,r)=>{const{slot:o,selector:i}=e??{},t="slot"+(o?`[name=${o}]`:":not([name])");return P(s,r,{get(){const n=this.renderRoot?.querySelector(t),a=n?.assignedElements(e)??[];return i===void 0?a:a.filter(p=>p.matches(i))}})}}function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var y={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var s={}.hasOwnProperty;function r(){for(var t="",n=0;n<arguments.length;n++){var a=arguments[n];a&&(t=i(t,o(a)))}return t}function o(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var n="";for(var a in t)s.call(t,a)&&t[a]&&(n=i(n,a));return n}function i(t,n){return n?t?t+" "+n:t+n:t}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(y);var $=y.exports;const E=j($);var D=Object.defineProperty,C=Object.getOwnPropertyDescriptor,q=(e,s,r,o)=>{for(var i=o>1?void 0:o?C(s,r):s,t=e.length-1,n;t>=0;t--)(n=e[t])&&(i=(o?n(s,r,i):n(i))||i);return o&&i&&D(s,r,i),i};let h=class extends f{render(){return d`
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
  `;h=q([m("slider-item")],h);var I=Object.defineProperty,N=Object.getOwnPropertyDescriptor,u=(e,s,r,o)=>{for(var i=o>1?void 0:o?N(s,r):s,t=e.length-1,n;t>=0;t--)(n=e[t])&&(i=(o?n(s,r,i):n(i))||i);return o&&i&&I(s,r,i),i};let l=class extends f{constructor(){super(...arguments),this.speed="1000ms",this.active=0,this.updateClasses=()=>{this.listItems.forEach((e,s)=>{const r=E({active:this.active===s,after:s>this.active,before:s<this.active});e.className=r}),this.dispatchEvent(new CustomEvent("change",{detail:{active:this.active}}))},this.next=()=>{this.active=this._next},this.prev=()=>{this.active=this._prev}}firstUpdated(){this.updateClasses()}willUpdate(){this.updateClasses()}get _next(){return this.active===this.listItems.length-1?this.active:this.active+1}get _prev(){return this.active===0?0:this.active-1}render(){return d`
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
  `;u([b({type:String})],l.prototype,"speed",2);u([O()],l.prototype,"active",2);u([S({})],l.prototype,"listItems",2);l=u([m("appletv-slider")],l);const A={title:"AppleTV Slider",component:"appletv-slider",parameters:{docs:{description:{component:"Description…"}}},argTypes:{}},T=()=>{const e=[];for(let s=0;s<10;s++)e.push(d`
      <slider-item>
        <img
          style="width: 100%; height: 100%; position: absolute; object-fit: cover;"
          src="https://picsum.photos/1600/900?${s}"
        />
      </slider-item>
    `);return e},c={args:{},render:()=>d`
      <section class="wrapper">
        <appletv-slider speed="900ms"> ${T()} </appletv-slider>
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
      </section>
      <style>
        appletv-slider {
          height: 900px;
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
  args: {},
  render: () => {
    return html\`
      <section class="wrapper">
        <appletv-slider speed="900ms"> \${renderItems()} </appletv-slider>
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
      </section>
      <style>
        appletv-slider {
          height: 900px;
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
