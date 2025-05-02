import { ImageProps } from "next/image";
import React from "react";

const NextImageMock = (
  props: React.ComponentProps<"img"> & Partial<ImageProps>
) => {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img {...props} data-testid="next-image" />;
};

export default NextImageMock;
