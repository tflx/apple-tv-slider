import { html, LitElement, css } from "lit"
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from "lit/decorators.js"
import classNames from "classnames"
import "./apple-tv-slider-item"

/**
 * Slider in the style of Apple TV
 *
 * @element appletv-slider
 * @slot The <slide-item> slides *
 * @attribute speed - The speed of the slide transition
 * @fires change - When the active slide changes
 *
 */

@customElement("appletv-slider")
export class AppleTVSlider extends LitElement {
  static styles = css`
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
  `

  @property({ type: String }) speed = "1000ms"
  @state() active = 0
  @queryAssignedElements({}) listItems!: Array<HTMLElement>

  protected firstUpdated(): void {
    this.updateClasses()
  }

  protected willUpdate(): void {
    this.updateClasses()
  }

  private updateClasses = () => {
    this.listItems.forEach((item, i) => {
      const c = classNames({
        active: this.active === i,
        after: i > this.active,
        before: i < this.active,
      })
      item.className = c
    })
    this.dispatchEvent(
      new CustomEvent("change", { detail: { active: this.active } })
    )
  }

  private get _next() {
    return this.active === this.listItems.length - 1
      ? this.active
      : this.active + 1
  }

  private get _prev() {
    return this.active === 0 ? 0 : this.active - 1
  }

  public next = () => {
    this.active = this._next
  }

  public prev = () => {
    this.active = this._prev
  }

  render() {
    return html`
      <div class="container" style="--slider-speed: ${this.speed}">
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "appletv-slider": AppleTVSlider
  }
}
