import styleConfig from "styles/variables.module.pcss";

type Size = "xl" | "lg" | "md" | "sm";

type ActiveBreakPointsConfig = {
  [K in Size | "default"]?: () => boolean | undefined;
};

type BreakPointsMatch = {
  [K in Size]: boolean;
};

const activeBreakPoints = (config: ActiveBreakPointsConfig) => {
  const breakpoints: BreakPointsMatch = {
    sm: window.matchMedia(`(min-width: ${styleConfig["breakpoint-sm"]})`)
      .matches,
    md: window.matchMedia(`(min-width: ${styleConfig["breakpoint-md"]})`)
      .matches,
    lg: window.matchMedia(`(min-width: ${styleConfig["breakpoint-lg"]})`)
      .matches,
    xl: window.matchMedia(`(min-width: ${styleConfig["breakpoint-xl"]})`)
      .matches,
  };

  // Порядок важен!
  // С xl по sm
  const breakpointKeysReversed = (Object.keys(breakpoints) as Size[]).reverse();

  let stoppedOnBreakPoint = false;

  breakpointKeysReversed.forEach((size) => {
    const matchesBreakPoint = breakpoints[size];

    if (!matchesBreakPoint || stoppedOnBreakPoint) {
      return false;
    }

    const callback = config[size];
    stoppedOnBreakPoint = callback ? callback() ?? false : false;
  });

  if (!stoppedOnBreakPoint && config.default) {
    config.default();
  }
};

export default activeBreakPoints;
