import type { Meta, StoryObj } from "@storybook/web-components"
import { html, LitElement } from "lit"
import "../apple-tv-slider"
import { AppleTVSlider } from "../apple-tv-slider"

const meta: Meta = {
  title: "AppleTV Slider",
  component: "appletv-slider",
  parameters: {
    docs: {
      description: {
        // 👈 The description of the component
        component: "Description…",
      },
    },
  },

  argTypes: {},
}
export default meta

const renderItems = () => {
  const items = []
  for (let i = 0; i < 10; i++) {
    items.push(html`
      <slider-item>
        <img
          style="width: 100%; height: 100%; position: absolute; object-fit: cover;"
          src="https://picsum.photos/1600/900?${i}"
        />
      </slider-item>
    `)
  }
  return items
}

export const Default: StoryObj<AppleTVSlider> = {
  args: { speed: "1000ms" },
  render: (args) => {
    return html`
      <appletv-slider speed="${args.speed}"> ${renderItems()} </appletv-slider>
      <div class="buttons">
        <button
          class="button"
          @click="${() => document.querySelector("appletv-slider")?.prev()}"
        >
          Prev
        </button>
        <button
          class="button"
          @click="${() => document.querySelector("appletv-slider")?.next()}"
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
    `
  },
}
