import { css } from "lit"

const CSS = css`
  :host {
    display: block;
  }
  body {
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  appletv-slider {
    height: 500px;
  }

  slider-controller {
    --slider-controller-gap: 10px;
    /* --slider-controller-item-size: 250px; */
  }

  slide-item {
    border: 1px solid black;
    text-align: center;
    height: 100%;

    &[active="true"] {
      border-color: red;
    }
  }
`
export default CSS
