import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW4Bmi';
test('should HW4Bmi', () => {
  const {container } =render(<HW />);
  expect(container).toMatchSnapshot;
});

test('should 體重/身高平方(公尺)', () => {
  const {container } =render(<HW />);
  expect(60/Math.pow(1.7)).toBe(Math.round(20.76));
  expect(container).toMatchSnapshot();
});
test('should 體重/身高平方(公尺)', () => {
  const {container } =render(<HW />);
  expect(80/Math.pow(1.9)).toBe(Math.round(20.76));
  expect(container).toMatchSnapshot(Math.round(20.16));
  expect(container).toMatchSnapshot();
});
