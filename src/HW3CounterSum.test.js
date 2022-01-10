import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW3CounterSum';
test('should HW3CounterSum', () => {
  const {container } =render(<HW />);
  expect(container).toMatchSnapshot;
});

test('從1開始累加至按的次數 ', () => {
  const {container} = render(<HW />);
  const button = container.querySelector('button');
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});

test('從1開始累加至按的次數 ', () => {
  const {container, getByTestId} = render(<HW />);
  const button1 = getByTestId('add');
  const button2 = getByTestId('subtract');
  const button3 = getByTestId('multiply');
  const button4 = getByTestId('divide');
  userEvent.click(button1);
  userEvent.click(button2);
  userEvent.click(button3);
  userEvent.click(button4);
  expect(container).toMatchSnapshot();
});

// test('從1開始累加至按的次數 ', () => {
//   const {container} = render(<HW />);
//   const button1 = container.querySelector('button');
//   const button2 = container.querySelector('button');
//   const button3 = container.querySelector('button');
//   const button = container.querySelector('button');
//   userEvent.click(button);
//   userEvent.click(button);
//   userEvent.click(button);
//   userEvent.click(button);
//   userEvent.click(button);
//   expect(container).toMatchSnapshot();
// });

