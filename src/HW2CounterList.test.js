import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW2CounterList';
test('should HW2CounterList', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('should add 1 item', () => {
  const { container } = render(<HW />);
  const button = container.querySelector('button');
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});

test('should add 3 item', () => {
  const { container } = render(<HW />);
  const button = container.querySelector('button');
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});

test('should add 5 item', () => {
  const { container } = render(<HW />);
  const button = container.querySelector('button');
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});



