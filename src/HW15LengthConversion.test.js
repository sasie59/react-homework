import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW15LengthConversion';

test('should input number to lengthType', () => {
  const { container,getByTestId } = render(<HW />);
  const input1 = getByTestId('1');
  const input2 = getByTestId('2');
  const input3 = getByTestId('3');
  const input4 = getByTestId('4');

  userEvent.type(input1, '100');
  expect(input2.textContent).toBe('10');
  expect(input3.textContent).toBe('0.1');
  expect(input4.textContent).toBe('0.0001');
  expect(container).toMatchSnapshot();
});


