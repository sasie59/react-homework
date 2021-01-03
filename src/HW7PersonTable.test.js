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
              results: [
                {
                  cell: "0797-132-135",
                  dob: {
                    age: 54,
                    date: "1967-11-09T20:55:53.822Z",
                    email: "teresa.hopkins@example.com",
                    gender: "female",
                  },
                  id: {
                    name: "NINO",
                    value: "TS 02 44 68 B",
                  },
                  location: {
                    city: "Plymouth",
                    coordinates: {
                      latitude: "13.9581",
                      longitude: "88.8914",
                    },
                    country: "United Kingdom",
                    postcode: "KT1O 1RF",
                    state: "Herefordshire",
                    street: {
                      name: "Victoria Street",
                      number: 4061,
                    },
                    timezone: {
                      description: "Kabul",
                      offset: "+4:30",
                    },
                  },
                  login: {
                    md5: "55bde07e6c7fce8e5945bcfcaed465c2",
                    password: "parker",
                    salt: "wJ1b2goI",
                    sha1: "5bbc03d336f698e1b1db7ffe5f09b007ba4fdced",
                    sha256:
                      "d44add62238e49f70452128048eb0c04caefb8cb70102e0b9302df115d539633",
                    username: "smallbird109",
                    uuid: "f60a6ea7-159d-40d1-b8ac-006425408023",
                  },
                  name: {
                    first: "Teresa",
                    last: "Hopkins",
                    title: "Miss",
                  },
                  nat: "GB",
                  phone: "017683 11697",
                  picture: {
                    large: "https://randomuser.me/api/portraits/women/13.jpg",
                    medium:
                      "https://randomuser.me/api/portraits/med/women/13.jpg",
                    thumbnail:
                      "https://randomuser.me/api/portraits/thumb/women/13.jpg",
                  },
                  registered: {
                    age: 15,
                    date: "2006-10-20T16:01:40.273Z",
                  },
                },
              ],
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
