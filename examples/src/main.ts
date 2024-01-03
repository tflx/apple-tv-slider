import CSS from "./style.css.ts"
import "apple-tv-slider"
import { AppleTVSlider } from "apple-tv-slider"
import { html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"
import { createRef, Ref, ref } from "lit/directives/ref.js"

@customElement("main-element")
export class MainElement extends LitElement {
  static get styles() {
    return [CSS]
  }
  slider: Ref<AppleTVSlider> = createRef()

  handleNext = () => {
    this.slider.value?.next()
  }
  handlePrev = () => {
    this.slider.value?.prev()
  }

  renderItems = () => {
    const items = []
    for (let i = 0; i < 10; i++) {
      items.push(html`
        <slider-item>
          <img
            style="width: 100%; object-fit: cover;"
            src="https://picsum.photos/600/400?${i}"
          />
        </slider-item>
      `)
    }
    return items
  }

  render() {
    return html`
      <section class="wrapper">
        <appletv-slider speed="900ms" ${ref(this.slider)}>
          ${this.renderItems()}
        </appletv-slider>
        <div class="buttons">
          <button class="button" @click="${this.handlePrev}">Prev</button>
          <button class="button" @click="${this.handleNext}">Next</button>
        </div>
      </section>
    `
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "main-element": MainElement
  }
}
