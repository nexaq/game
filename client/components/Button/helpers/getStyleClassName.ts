import css from "../style.module.pcss";

export default function getStyleClassName(style?: string): string {
  if (!style) {
    return "";
  }
  return style ? css[`_${style}`] : "";
}
