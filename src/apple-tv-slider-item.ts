import { css, html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"
import { createRef, Ref, ref } from "lit/directives/ref.js"

@customElement("slider-item")
export class SliderItem extends LitElement {
  static styles = css`
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
  `

  render() {
    return html`
      <slot></slot>
    `
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "slider-item": SliderItem
  }
}
