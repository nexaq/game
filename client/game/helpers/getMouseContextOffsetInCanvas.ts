/**
 * Т.к. реальная (offsetWidth, offsetHeight) высота/ширина
 * может отличаться от той которая указанна в канвасе
 * */
export function getMouseContextOffsetInCanvas(
  canvas: HTMLCanvasElement,
  event: MouseEvent
) {
  const topOffsetMouse: number = event.clientY;
  const leftOffsetMouse: number = event.clientX;

  const { top: topOffsetCanvas, left: leftOffsetCanvas } =
    canvas.getClientRects()[0];

  const topOffsetMouseInsideCanvas = topOffsetMouse - topOffsetCanvas;
  const canvasContextHeight = canvas.height;
  const canvasHeight = canvas.offsetHeight;
  const contextHeightRatio = canvasContextHeight / canvasHeight;
  const contextTopOffsetMouseInsideCanvas =
    topOffsetMouseInsideCanvas * contextHeightRatio;

  const leftOffsetMouseInsideCanvas = leftOffsetMouse - leftOffsetCanvas;
  const canvasContextWidth = canvas.width;
  const canvasWidth = canvas.offsetWidth;
  const contextWidthRatio = canvasContextWidth / canvasWidth;
  const contextLeftOffsetMouseInsideCanvas =
    leftOffsetMouseInsideCanvas * contextWidthRatio;

  return {
    top: contextTopOffsetMouseInsideCanvas,
    left: contextLeftOffsetMouseInsideCanvas,
  };
}
