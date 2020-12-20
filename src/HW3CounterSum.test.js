import React from 'react';
import { render } from '@testing-library/react';
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
  const {container} = render(<HW />);
  const button = container.querySelector('button');
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});

test('從1開始累加至按的次數 ', () => {
  const {container} = render(<HW />);
  const button = container.querySelector('button');
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});

