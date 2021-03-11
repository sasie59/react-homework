import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW20GuessNum';

global.Math.random = () => 0.240;

test('should HW20GuessNum', () => {
  const { container } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, '25{enter}');
  expect(container).toMatchSnapshot();
});
test('should HW20GuessNum', () => {
  const { container } = render(<HW />);
  const button = container.querySelector('button');
  const input = container.querySelector('input');
  userEvent.type(input, '25');
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});

test('should reset game', () => {
  const { container,getByTestId } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, '241{enter}');
  expect(getByTestId('answer').textContent).toBe('答對了!答案就是241重新一局');

  userEvent.click(getByTestId('reset'));
  expect(getByTestId('range').textContent).toBe('現在範圍 :1 ~ 1000');
});

