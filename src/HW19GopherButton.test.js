import React from "react";
import { render,act, cleanup } from "@testing-library/react";
import HW from './HW19GopherButton';

afterEach(cleanup);

jest.useFakeTimers();

global.Math.random = () => 0;

test('should HW19GopherButton', () => {
  act(()=> {
    const {container, getByTestId} = render(<HW />);
    jest.advanceTimersByTime(1000);
    expect(getByTestId('isG').innerHTML).toBe('G');
    jest.advanceTimersByTime(1000);
    expect(getByTestId('isG').innerHTML).toBe('-');
  });
});
