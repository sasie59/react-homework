import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW1Counter';
test('should HW1', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('should simulate onClick event', () => {
  const { container } = render(<HW />);
  const button = container.querySelector('button');
  userEvent.click(button);
  expect(button.textContent).toBe('counter : 1');
  expect(container).toMatchSnapshot();
});