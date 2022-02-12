const fs = require("fs");

const path = "/.dockerenv";

let resultCached: boolean | null = null;

export default function isDocker() {
  if (resultCached !== null) {
    return resultCached;
  }

  try {
    if (fs.existsSync(path)) {
      // eslint-disable-next-line no-return-assign
      return (resultCached = true);
    }
  } catch (err) {
    // eslint-disable-next-line no-return-assign
    return (resultCached = false);
  }
  return undefined;
}
