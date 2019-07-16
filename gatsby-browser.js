import * as React from "react";

import ThemeProvider from "./src/components/ThemeProvider";
import "prismjs/themes/prism-solarizedlight.css";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
