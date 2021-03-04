import React from "react";
import { render,act, cleanup } from "@testing-library/react";
import HW, {num, numChange } from './HW17RandomNum';

test('should ', () => {
  act(() => {
    jest.useFakeTimers();
    const { getByTestId } = render(<HW />);
    const number = getByTestId('num');
    expect(number.innerText).toBe(num);
  });
});
test('should ', () => {
  act(() => {
    jest.useFakeTimers();
    const { getByTestId } = render(<HW />);
    let num1 = null;
    jest.advanceTimersByTime(900);
    const number = getByTestId('num');
    num1 = number.innerText;
    expect(num1).toBe(num);
  });
});
