import { css } from 'lit'

const CSS = css`
:host {
    display: block;
    overflow: hidden;
    
    --slider-speed: 1000ms;
}

.container {
    display: grid;
    grid-template-areas: 'all';
    height: 100%;
}
`;

export default CSS;