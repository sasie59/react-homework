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
  const input = container.querySelector('input');
  const button = container.querySelector('button');
});
