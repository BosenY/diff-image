import DiffImage from "../dist/index";

const img1 =
  "https://raw.githubusercontent.com/mapbox/pixelmatch/main/test/fixtures/1a.png";
const img2 =
  "https://raw.githubusercontent.com/mapbox/pixelmatch/main/test/fixtures/1b.png";
async function main() {
  const diffImageIns = new DiffImage();
  let diffCount = await diffImageIns.diff(img1, img2);
  console.log("diffCount", diffCount);
  document.querySelector("#app").innerHTML = ` 
    <p>
      img1
    </p>
    <img src="${img1}" class="img" alt="img" />
    <p>
      img2
    </p>
    <img src="${img1}" class="img" alt="img" />
    <p class="count">
      diffCount - ${diffCount}
    </p>
  `;
}
main();
