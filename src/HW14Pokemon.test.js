import React from "react";
import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import HW from './HW14Pokemon';

global.fetch = jest.fn(
  () => 
  new Promise((resolve) => {
    resolve({
      json: () =>
        new Promise((resolve) => {
          resolve({
            res: [
              {
            count :1118,
            next:"https://pokeapi.co/api/v2/pokemon/?offset=100&limit=3",
            previous:null,
            results:[
              {name:"bulbasaur", url:"https://pokeapi.co/api/v2/pokemon/1/"},
              {name:"ivysaur",url:"https://pokeapi.co/api/v2/pokemon/2/"},
              {name:"venusaur",url:"https://pokeapi.co/api/v2/pokemon/3/"},
          ],
        }
      ]
      })
    })
  })
  }
  );