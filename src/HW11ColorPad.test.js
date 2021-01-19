import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW11ColorPad';

test('should HW11ColorPad', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('should change rgb range', () => {
  const { container, getByTestId} = render(<HW />);
  const redInput = getByTestId('red');
  const greenInput = getByTestId('green');
  const blueInput = getByTestId('blue');
  
  userEvent.type(redInput, '200');
  userEvent.type(greenInput, '10');
  userEvent.type(blueInput, '173');

  expect(container).toMatchSnapshot();
});

