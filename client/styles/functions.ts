import cssVariables from "./variables.module.pcss";

const browserContext: number = parseInt(cssVariables.mainFontSize, 10);

export const em = (pixels: number, context: number = browserContext): string =>
  `${pixels / context}em`;
export const rem = (pixels: number): string => `${pixels / browserContext}rem`;
