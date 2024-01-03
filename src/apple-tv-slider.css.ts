import { css } from 'lit'

const CSS = css`
:host {
    display: block;
    overflow: hidden;
    
    --slider-speed: 1000ms;
}

.container {
    display: grid;
    grid-template-areas: 'all'
}

::slotted(slider-item) {
    grid-area: all;
    position: relative;
    clip-path: inset(0 0 0 0);
    transition: translate var(--slider-speed), clip-path var(--slider-speed);
}

::slotted(slider-item.before) {
    translate: -50% 0%;
    clip-path: inset(0 50% 0 0);       
}
    
    
::slotted(slider-item.after) {
    translate: 50% 0%;
    clip-path: inset(0 0 0 50%);
}

::slotted(slider-item.active) {
    translate: 0% 0%;
    clip-path: inset(0 0 0 0);
}
`;

export default CSS;