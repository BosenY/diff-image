// @ts-ignore
import pixelmatch from "pixelmatch";

type Image = string;
interface pixelmatchOptions {
  threshold?: number;
  includeAA?: boolean;
  alpha?: number;
  aaColor?: [number, number, number];
  diffColor?: [number, number, number];
  diffColorAlt?: [number, number, number];
  diffMask?: boolean;
}
class DiffImage {
  canvasInfo: { width: number; height: number };
  constructor() {
    this.canvasInfo = {
      width: 0,
      height: 0,
    };
  }

  async compressImg(imgSrc: Image): Promise<ImageData | undefined> {
    return new Promise((resolve, reject) => {
      if (!imgSrc) {
        reject("imgSrc can not be empty!");
      }
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        this.canvasInfo.width = img.width;
        this.canvasInfo.height = img.height;
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0, img.width, img.height);
        const data: ImageData | undefined = ctx?.getImageData(
          0,
          0,
          img.width,
          img.height
        );
        resolve(data);
      };
      img.src = imgSrc;
    });
  }

  async diff(img1: Image, img2: Image, options: pixelmatchOptions) {
    let img1Data = await this.compressImg(img1);
    let img2Data = await this.compressImg(img2);
    const diffCanvas = document.createElement("canvas");
    const imgWidth = this.canvasInfo.width;
    const imgHeight = this.canvasInfo.height;
    diffCanvas.width = imgWidth;
    diffCanvas.height = imgHeight;
    const diffCtx = diffCanvas.getContext("2d");
    if (diffCtx && img1Data && img2Data) {
      const diff = diffCtx.createImageData(imgWidth, imgHeight);
      const diffCount = await pixelmatch(
        img1Data.data,
        img2Data.data,
        diff.data,
        imgWidth,
        imgHeight,
        {
          ...options,
        }
      );
      diffCtx.putImageData(diff, 0, 0);
      return diffCount;
    } else {
      return null;
    }
  }
}

export default DiffImage;
