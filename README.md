# diff-image

Compare two images using pixelmatch.

## install

```sh
yarn add diff-image
```

## use

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
