import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./lib/themes/GlobalStyles";
import Theme from "./lib/themes/Theme";

// Routes
import MainPage from "./pages/main/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path={["/@username", "/"]} component={MainPage} />
          <Route path="/signup" component={Signup} />
          <Route paht="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
