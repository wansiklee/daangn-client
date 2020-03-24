import React from "react";
import Search from "../components/Search";
import { withRouter } from "react-router-dom";

const SearchContainer = ({ location }) => {
  console.log(location.search);
  return <Search />;
};

export default withRouter(SearchContainer);
