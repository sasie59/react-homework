import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW6RemovableList';

test('should HW6RemovableList', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('should add || remove something to list', () => {
  const { container,getByTestId } = render(<HW />);
  const input = container.querySelector('input');
  
  userEvent.type(input, "remove{enter}");
  userEvent.click(getByTestId(0));

  expect(container).toMatchSnapshot();
});
test('should add || remove something to list', () => {
  const { container,getByTestId } = render(<HW />);
  const input = container.querySelector('input');
  
  userEvent.type(input, "remove{enter}");
  userEvent.type(input, "test{enter}");

  userEvent.click(getByTestId(1));

  expect(container).toMatchSnapshot();
});
