import * as React from "react";
import Wrapper from "./src/components/Wrapper";

export const wrapPageElement = ({ element }) => {
  return <Wrapper>{element}</Wrapper>;
};
