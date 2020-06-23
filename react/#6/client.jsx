import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

// import NumberBaseball from "./NumberBaseball";
// import NumberBaseball from "./NumberBaseball-bind";
import NumberBaseball from "./NumberBaseball-hooks";

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector("#root"));
