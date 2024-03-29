import React from "react";
import { render, act } from "@testing-library/react";
import HW ,{countDownTime}from './HW9HappyNewYear';
const ONE_HOUR = 60 * 60;
const ONE_DAY = ONE_HOUR * 24;

const day = Math.floor((countDownTime / (ONE_DAY)) / 1000 );
const hour = Math.floor((Math.floor(countDownTime / 1000) % (ONE_DAY)) / (ONE_HOUR));
const min = Math.floor((Math.floor(countDownTime / 1000) % (ONE_HOUR)) / 60);
const sec = Math.floor((countDownTime / 1000)) % 60;

test('should ', () => {
  act(() => {
    jest.useFakeTimers();
    const { getByTestId } = render(<HW />);
    const rightNow = getByTestId('countDown');
    jest.advanceTimersByTime(1000);
    expect(rightNow.textContent).toBe(`距離2023跨年還有 : ${day}天 ${hour}時 ${min}分 ${sec}秒`);
  });
});
