# diff-image

Use pixelmatch to compare two images in a browser environment.

## Install

```sh
npm install diff-image --save
or
yarn add diff-image
```

## Use

```js
import DiffImage from "diff-image";

const img1 =
  "https://raw.githubusercontent.com/mapbox/pixelmatch/main/test/fixtures/1a.png";
const img2 =
  "https://raw.githubusercontent.com/mapbox/pixelmatch/main/test/fixtures/1b.png";
async function main() {
  const diffImageIns = new DiffImage();
  let diffCount = await diffImageIns.diff(img1, img2);
  console.log("diffCount", diffCount);
}
main();
```

## Options

### diff(img1, img2, options)

- `img1`
  - `type string`
- `img2`
  - `type string`
- `options`
  - For more information, see https://github.com/mapbox/pixelmatch
  - `threshold` — Matching threshold, ranges from `0` to `1`. Smaller values make the comparison more sensitive. `0.1` by default.
  - `includeAA` — If `true`, disables detecting and ignoring anti-aliased pixels. `false` by default.
  - `alpha` — Blending factor of unchanged pixels in the diff output. Ranges from `0` for pure white to `1` for original brightness. `0.1` by default.
  - `aaColor` — The color of anti-aliased pixels in the diff output in `[R, G, B]` format. `[255, 255, 0]` by default.
  - `diffColor` — The color of differing pixels in the diff output in `[R, G, B]` format. `[255, 0, 0]` by default.
  - `diffColorAlt` — An alternative color to use for dark on light differences to differentiate between "added" and "removed" parts. If not provided, all differing pixels use the color specified by `diffColor`. `null` by default.
  - `diffMask` — Draw the diff over a transparent background (a mask), rather than over the original image. Will not draw anti-aliased pixels (if detected).
