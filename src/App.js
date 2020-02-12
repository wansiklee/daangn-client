import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./themes/GlobalStyles";
import Theme from "./themes/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
