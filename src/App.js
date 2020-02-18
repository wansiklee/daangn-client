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

// Routes
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// Header and Footer Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Router>
        <Switch>
          <Route exact path={["/@username", "/"]} component={Home} />
          <Route path="/signup" component={Signup} />
          <Route paht="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
