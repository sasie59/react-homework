import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

global.Math.random = () => .25;

// ↓ 啊你這邊那麼多函數沒用到你 import 進來幹嘛
import HW,{makeRandom, checkAb,isErrorValue} from './HW21XAXB';

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
  expect(getByTestId('result-0').textContent).toBe('1234: 0A0B');

  // 這邊不對，你的正確答案是「隨機」的所以你應無法預期它是幾A幾B
  // 正解: 請看本頁第5行，使用這種方式把你的亂數「固定」讓答案恆為 9876，才有辦法測試
  userEvent.type(input, '7406{enter}');
  expect(getByTestId('result-0').textContent).toBe('7406: 1A1B');
});

test('should clear arr', () => {
  const { container, getByTestId } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, '1234{enter}');
  expect(getByTestId('result-0').textContent).toBe('1234: 0A0B');
  userEvent.type(input, '2345{enter}');
  expect(getByTestId('result-0').textContent).toBe('2345: 0A0B');
  userEvent.type(input, '9876{enter}');
  expect(getByTestId('bingo').textContent).toBe('bingo ! game over ， replay?Yes');
  expect(getByTestId('ul').children.length).toBe(0);
});

test('should bingo Game Over & new Game ', () => {
  const { container,getByTestId } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, '9876{enter}');
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



