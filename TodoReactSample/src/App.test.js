import * as React from "react";
import * as ReactDOM from "react-dom";
import {getQueriesForElement} from "@testing-library/dom";

import {App} from "./App";

test (" renders the correct content", () => {
// redner a react component to the DOM
  const root = document.createElement("div");
  ReactDOM.render(<App />, root); 

const {getByText, getByLabelText} = getQueriesForElement(root);
expect (getByText("TODOS")).not.toBeNull();
expect (getByLabelText("What needs to be done?")).not.toBeNull();
expect (getbyText(" Add #1")).not.toBeNull();

// //  Use DOm APIs ( queryselector) to make assertions

//   expect ( root.querySelector("h1").textContent).toBe("TODOS")
//   expect (root.querySelector("label").textContent).toBe("What needs to be done?");
//   expect ( root.querySelector("button").textContent).toBe("Add #1")


});