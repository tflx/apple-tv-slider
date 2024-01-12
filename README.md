# AppleTV Slider

This is a custom web component that creates a slider in the style of Apple TV.

[See demo here](https://tflx.github.io/apple-tv-slider/?path=/story/appletv-slider--default)

## Installation

First, you need to import the component:

```typescript
import "./apple-tv-slider"
```

## Usage

To use the `appletv-slider` component, you can add it to your HTML:

```html
<appletv-slider speed="2000ms">
  <slide-item>
    <img
      style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;"
      src="https://picsum.photos/600/400?1"
    />
  </slide-item>
  <slide-item>
    <img
      style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;"
      src="https://picsum.photos/600/400?2"
    />
  </slide-item>
  <slide-item>
    <img
      style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;"
      src="https://picsum.photos/600/400?3"
    />
  </slide-item>
  <slide-item>
    <img
      style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;"
      src="https://picsum.photos/600/400?4"
    />
  </slide-item>
  <slide-item>
    <img
      style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;"
      src="https://picsum.photos/600/400?5"
    />
  </slide-item>
  <!-- Add more slide items as needed -->
</appletv-slider>
```

### Attributes

- `speed`: The speed of the slide transition. Default is '1000ms'.

### Slots

- The `<slide-item>` slides: This is where you put the content of each slide.

### Events

- `change`: This event is fired when the active slide changes.
