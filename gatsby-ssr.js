import * as React from "react";

import ThemeProvider from "./src/components/ThemeProvider";

export const wrapPageElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
