import serialize from "serialize-javascript";

export const renderObject = <T>(data: T | never): string =>
  serialize(data).replace(/</g, "\\\u003c");
