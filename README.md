# AppleTV Slider

This is a custom web component that creates a slider in the style of Apple TV.

## Installation

First, you need to import the component:

```typescript
import './apple-tv-slider';
```

## Usage

To use the `appletv-slider` component, you can add it to your HTML:

```html
<appletv-slider speed="2000ms">
  <slide-item>Slide 1</slide-item>
  <slide-item>Slide 2</slide-item>
  <!-- Add more slide items as needed -->
</appletv-slider>
```

### Attributes

- `speed`: The speed of the slide transition. Default is '1000ms'.

### Slots

- The `<slide-item>` slides: This is where you put the content of each slide.

### Events

- `change`: This event is fired when the active slide changes.
