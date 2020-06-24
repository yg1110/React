import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

// import Render from "./Render";
import NumberBaseball from "./NumberBaseball-class";
// import NumberBaseball from "./NumberBaseball-hooks";

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector("#root"));
