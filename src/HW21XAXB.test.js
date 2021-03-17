import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW,{checkAb,makeRandom,isErrorValue} from './HW21XAXB';

test('should wrong format', () => {
  const { container, getByTestId } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, '1111{enter}');
  const errMsg = getByTestId('errMsg');
  expect(errMsg).toBeTruthy();

  userEvent.type(input, 'aqws{enter}');
  expect(errMsg).toBeTruthy();
});

test('should ringt input', () => {
  const { container, getByTestId } = render(<HW />);
  const input = container.querySelector('input');

  userEvent.type(input, '1234{enter}');
  expect(getByTestId('result-0').textContent).toBe('1234: 0A1B');

  userEvent.type(input, '7406{enter}');
  expect(getByTestId('result-0').textContent).toBe('1234: 1A0B');
});

test('should clear arr', () => {
  const { container, getByTestId } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, '1234{enter}');
  expect(getByTestId('result-0').textContent).toBe('1234: 1A1B');
  userEvent.type(input, '2345{enter}');
  expect(getByTestId('result-1').textContent).toBe('2345: 1A1B');
  userEvent.type(input, '2137{enter}');
  expect(getByTestId('bingo').textContent).toBe('bingo ! game over ， replay?Yes');
  expect(getByTestId('ul').children.length).toBe(1);
});

test('should bingo Game Over & new Game ', () => {
  const { container,getByTestId } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, '8521{enter}');
  expect(getByTestId('bingo').textContent).toBe('bingo ! game over ， replay?Yes');
  // expect(getByTestId('input')).toBeDisabled();
  // expect(input).toBeDisabled();
  // TypeError: expect(...).toBeDisabled is not a function
  expect(input.disabled).toBe(true);
  // 上面的input.disabled是參考網路的寫法 去抓dom裡面的屬性
  // expect(getByTestId('bingo')).toBeTruthy();
});

test('should yes', () => {
  const {getByTestId } = render(<HW />);
  userEvent.click(getByTestId('replay'));
  expect(getByTestId('ul').children.length).toBe(0);
});



