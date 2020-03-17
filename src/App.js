import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./lib/themes/Theme";
import Global from "./containers/base/Global";

// Routes
import loadable from "@loadable/component";
const MainPage = loadable(() => import("./pages/MainPage"));
const UploadPage = loadable(() => import("./pages/UploadPage"));
const ProductDetailPage = loadable(() => import("./pages/ProductDetailPage"));

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/:productId" component={ProductDetailPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      <Global />
    </ThemeProvider>
  );
};

export default App;
