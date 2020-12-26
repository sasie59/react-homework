import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW5ItemList';

test('should HW5ItemList', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('should add something to list', () => {
  const { container } = render(<HW />);
  const input = container.querySelector('input');

  userEvent.type(input, "hooks{enter}");

  expect(container).toMatchSnapshot();
});
test('should add something to list', () => {
  const { container } = render(<HW />);
  const input = container.querySelector('input');

  userEvent.type(input, "react{enter}");
  userEvent.type(input, "jest{enter}");

  expect(container).toMatchSnapshot();
});

