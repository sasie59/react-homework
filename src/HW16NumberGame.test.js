import React from 'react';
import { getByText, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW16NumberGame';


test('should fail number', () => {
  const { container, getByTestId } = render(<HW />);
  const input = container.querySelector('input');
  const fail = getByTestId('fail');
  userEvent.type(input,"r");
  expect(fail.textContent).toBe("答錯: 1");
  expect(container).toMatchSnapshot();
});

test('should bingo number', () => {
  const { container , getByTestId }  =render(<HW />);
  const input = container.querySelector('input');
  const random = getByTestId('random', 5);
  const bingo = getByTestId('bingo');
  userEvent.type(input, '5');
  expect(bingo.textContent).toBe("答對: 1");
  expect(container).toMatchSnapshot();
});




