import * as React from "react";
import * as ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
// import {render} from "@testing-library/react";
import { App } from "./App";


const render = () => {
    const root = document.createElement("div");
    ReactDOM.render(<App />, root);
    return getQueriesForElement(root);

}


test(" renders the correct content", () => {
    // render a react component to the DOM
    const { getByText, getByLabelText } = render(<App />);

    expect(getByText("TODOS")).not.toBeNull();
    expect(getByLabelText("What needs to be done?")).not.toBeNull();
    expect(getByText("Add #1")).not.toBeNull();

    // //  Use DOm APIs ( queryselector) to make assertions

    //   expect ( root.querySelector("h1").textContent).toBe("TODOS")
    //   expect (root.querySelector("label").textContent).toBe("What needs to be done?");
    //   expect ( root.querySelector("button").textContent).toBe("Add #1")


});