import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

import ResponsCheck from "./ResponseCheck-class";

const Hot = hot(ResponsCheck);

ReactDom.render(<Hot />, document.querySelector("#root"));
