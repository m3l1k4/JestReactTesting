import * as React from "react";
import * as ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import {render, fireEvent, waitFor} from "@testing-library/react";

//github.com/testing-library/user-event
import { App } from "./App";


// jest.mock("./api");

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

// //testing user interaction
// test ("allows users to add items to their list", () => {
//     const { getByText, getByLabelText } = render(<App />);
//     const input = getByLabelText("What needs to be done?");
//     fireEvent.change(input, {target:{value:"RTL"}})
//     fireEvent.click(getByText("Add #1"));

//     expect(getByText("RTL")).not.toBeNull();
//     expect(getByText("Add #2")).not.toBeNull();

// })


//testing user interaction with async and mock
test ("allows users to add items to their list", async() => {
    
    const todoText = "RTL"
    mockCreateItem.mockResolvedValueOnce({ id: 123, text: todoText})
    const { getByText, getByLabelText } = render(<App />);
    
    const input = getByLabelText("What needs to be done?");
    fireEvent.change(input, {target:{value:todoText}})
    fireEvent.click(getByText("Add #1"));

    await waitFor(() => {
        expect(getByText(todoText));
      });
    // expect(getByText("RTL")).not.toBeNull();
    // expect(getByText("Add #2")).not.toBeNull();

    // make assertion to see mock was actually hit
    expect(mockCreateItem).toHaveBeenCalledTimes(1);
    //assert that it was hit with the correct value
    expect(mockCreateItem).toHaveBeenCalledWith(
        "/items",
        expect.objectContaining({text: todoText})
    );

}) 