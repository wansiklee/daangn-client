import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./themes/GlobalStyles";
import Theme from "./themes/Theme";

import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
