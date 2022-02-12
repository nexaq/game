import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const FullScreenControl: Props = ({ containerRef }) => {
  const toggleFullScreen = () => {
    if (!containerRef.current) {
      return;
    }

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return <button className={`${css.fullscreen}`} onClick={toggleFullScreen} />;
};

export default FullScreenControl;
