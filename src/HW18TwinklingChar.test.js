import React from "react";
import { render,act, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import HW, {} from './HW18TwinklingChar';

afterEach(cleanup);

jest.useFakeTimers();

global.Math.random = () => 0;

test('should HW18TwinklingChar', () => {
  const {getByTestId} = render(<HW />);
  userEvent.type(getByTestId('input'),'8');
  expect(getByTestId('count').textContent).toBe('分數 : -1');
});

test('should HW18TwinklingChar', () => {
  const {getByTestId} = render(<HW />);
  userEvent.type(getByTestId('input'),'7');
  expect(getByTestId('count').textContent).toBe('分數 : -1');
});

test('should ', () => {
  act(() => {
    jest.useFakeTimers();
    const {container,getByTestId} = render(<HW />);
    let num ;
    jest.advanceTimersByTime(900);
    const isQ = getByTestId('isQ');
    num = isQ.textContent;
    expect(container).toMatchSnapshot();
  });
});
test('should ', () => {
  act(() => {
    jest.useFakeTimers();
    const {container,getByTestId} = render(<HW />);
    jest.advanceTimersByTime(1500);
    expect(getByTestId('isQ').textContent).toBe('-');
    jest.advanceTimersByTime(1500);
    expect(getByTestId('isQ').textContent).toBe('Q');
    expect(container).toMatchSnapshot();
  });
});

