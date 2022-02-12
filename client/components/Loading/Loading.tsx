import React, { useEffect, useState } from "react";

import Heading from "../@typography";
import { Props } from "./types";

const Loading: Props = ({ delay = 0 }) => {
  const [active, setActive] = useState(!delay);
  useEffect(() => {
    if (delay > 0) {
      setTimeout(() => setActive(true), delay);
    }
  }, []);

  return <>{active && <Heading level="h3">Loading...</Heading>}</>;
};

export default Loading;
