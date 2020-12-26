import React from 'react';
import {render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW7PersonTable';

test('should HW7PersonTable', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});
test('should upData personList', () => {
  const { container } = render(<HW />);
  const button = container.querySelector('button');

  userEvent.click(button);
  expect(container).toMatchSnapshot();
});
