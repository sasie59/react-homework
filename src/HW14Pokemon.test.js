import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@babel/polyfill";
import HW from "./HW14Pokemon";
import userEvent from "@testing-library/user-event";

global.fetch = jest.fn(
  () =>
    new Promise((resolve) => {
      resolve({
        json: () =>
          new Promise((resolve) => {
            resolve(                {
              count: 1118,
              next: "https://pokeapi.co/api/v2/pokemon/?offset=100&limit=3",
              previous: null,
              results: [
                {
                  name: "bulbasaur",
                  url: "https://pokeapi.co/api/v2/pokemon/1/",
                },
                {
                  name: "ivysaur",
                  url: "https://pokeapi.co/api/v2/pokemon/2/",
                },
                {
                  name: "venusaur",
                  url: "https://pokeapi.co/api/v2/pokemon/3/",
                },
              ],
            });
          }),
      });
    })
);

test("should HW14Pokemon", async () => {
  const { container } = render(<HW />);
  await waitFor(() => expect(container).toMatchSnapshot());
});

test('should enter keyword to filter',async () => {
  const { container } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, "bul{enter}");
  await waitFor(() => expect(container).toMatchSnapshot());
});



/** 根據我GOOGLE，我發現只要有 fetch 的測試，都要使用 await / async 去接測試，像這樣 */
// test("should HW14Pokemon", async () => {
//   const { container } = render(<HW />);
//   await waitFor(() => expect(container).toMatchSnapshot());
// });
