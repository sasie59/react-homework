import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW25Modal';

test('should HW25Modal', () => {
  const {container, getByTestId } = render(<HW />);
  userEvent.click(getByTestId('arr-0'));
  expect(container).toMatchSnapshot();

  userEvent.click(getByTestId('arr-1'));
  expect(container).toMatchSnapshot();

  userEvent.click(getByTestId('arr-2'));
  expect(container).toMatchSnapshot();
  
  userEvent.click(getByTestId('arr-3'));
  expect(container).toMatchSnapshot();

  userEvent.click(getByTestId('arr-4'));
  expect(container).toMatchSnapshot();
});
