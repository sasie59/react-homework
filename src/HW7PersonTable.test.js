import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HW from "./HW7PersonTable";

// global.fetch = jest.fn(x => x * 2);
// test('should fetch', () => {
//   fetch(1);
//   fetch(2);
//   fetch(3);
//   expect(fetch.mock.calls.length).toBe(3);
// });

global.fetch = jest.fn(
  () =>
    new Promise((resolve) => {
      resolve({
        json: () =>
          new Promise((resolve) => {
            resolve({
              results: [],
            });
          }),
      });
    })
);

test("should HW7PersonTable", () => {
  act(() => {
    const { container } = render(<HW />);
    expect(container).toMatchSnapshot();
  });
});

test("should upData personList", () => {
  act(() => {
    const { container } = render(<HW />);
    const button = container.querySelector("button");

    userEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});
