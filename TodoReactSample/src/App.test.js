import * as React from "react";
import * as ReactDOM from "react-dom";

import {App} from "./App";

test (" renders the correct content", () => {
// redner a react component to the DOM
  const root = document.createElement("div");
  ReactDOM.render(<App />, root); 

  // Use DOm APIs ( queryselector) to make assertions

  expect ( root.querySelector("h1").textContent).toBe("TODOS")
  expect (root.querySelector("label").textContent).toBe("What needs to be done?");

});