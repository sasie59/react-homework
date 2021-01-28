import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HW from './HW14Pokemon';

test('should HW14Pokemon', () => {
  const { container } = render(<HW />);
  expect (container).toMatchSnapshot();
});

test('should HW14Pokemon', () => {
  const { container } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input,"ab{enter}");
  expect(container).toMatchSnapshot();


  // expect (container).toMatchSnapshot();
});
