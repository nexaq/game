let ctx: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;

const setCanvas = (canvasElement: HTMLCanvasElement) => {
  canvas = canvasElement;
};

const setContext = (context: CanvasRenderingContext2D) => {
  ctx = context;
};

export const heightRatio = 0.7;

const prepareCanvas = () => {
  canvas.height = canvas.width * heightRatio;
};

export const getCanvas = () => {
  return canvas;
};

export const getCtx = () => {
  return ctx;
};

export const prepareContext = (canvas: HTMLCanvasElement) => {
  const canvasSelected = canvas;
  const context = canvasSelected?.getContext("2d");

  if (!context || !canvasSelected) {
    throw new Error("No canvas or canvas context!");
  }

  setContext(context);
  setCanvas(canvasSelected);

  prepareCanvas();
};
