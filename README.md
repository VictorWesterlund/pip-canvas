# pip-canvas

Open DOM elements in Picture-in-Picture with the help of `<canvas>`, `<video>` and JavaScript. This is a librabry/API sorta, kinda thing.

### Early Access

Only `HTMLImageElement` is supported at this time, but I intend to add more elements later. As well as support for `URL` and URL strings.

## Get started

1. **Clone this repo**

```
git clone https://github.com/VictorWesterlund/pip-canvas.git
```

2. **Import as ESM into your project**
```js
import { PipCanvas } from "./pip-canvas/PipCanvas.mjs"
```

3. **Initialize `PipCanvas()` with an `HTMLImageElement`**

```js
const pip = new PipCanvas(HTMLImageElement);
pip.open();
```
