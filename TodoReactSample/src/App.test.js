import * as React from "react";
import * as ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import {render, fireEvent} from "@testing-library/react";

//github.com/testing-library/user-event
import { App } from "./App";

import {api} from "./api";

const mockCreateItem = (api.createItem = jest.fn());


// const render = () => {
//     const root = document.createElement("div");
//     ReactDOM.render(<App />, root);
//     return getQueriesForElement(root);

// }


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

//testing user interaction
test ("allows users to add items to their list", () => {
    const { getByText, getByLabelText } = render(<App />);
    const input = getByLabelText("What needs to be done?");
    fireEvent.change(input, {target:{value:"RTL"}})
    fireEvent.click(getByText("Add #1"));

    expect(getByText("RTL")).not.toBeNull();
    expect(getByText("Add #2")).not.toBeNull();

})