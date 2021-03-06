import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./lib/themes/Theme";
import Global from "./containers/base/Global";

// Routes
import loadable from "@loadable/component";
const MainPage = loadable(() => import("./pages/MainPage"));
const UploadPage = loadable(() => import("./pages/UploadPage"));
const ProductListPage = loadable(() => import("./pages/ProductListPage"));
const ProductDetailPage = loadable(() => import("./pages/ProductDetailPage"));
const SearchPage = loadable(() => import("./pages/SearchPage"));
const ProfilePage = loadable(() => import("./pages/ProfilePage"));

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/upload" component={UploadPage} />
          <Route path="/products" component={ProductListPage} exact />
          <Route path="/products/:productId" component={ProductDetailPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/users/:userId" component={ProfilePage} />
          <Redirect from="*" to="/" />
        </Switch>
        <Global />
      </Router>
    </ThemeProvider>
  );
};

export default App;
