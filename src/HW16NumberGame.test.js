import React from 'react';
import { render } from '@testing-library/react';
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
  const { container  }  =render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, '5');
  expect(container).toMatchSnapshot();
});




