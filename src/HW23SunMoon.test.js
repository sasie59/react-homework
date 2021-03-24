import React from 'react';
import { render,cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW23SunMoon';

test('should day to night', () => {
  const { getByTestId } = render(<HW />);
  userEvent.click(getByTestId('btn'));
  expect(getByTestId('btn').textContent).toBe('切換成 早上');

  userEvent.click(getByTestId('btn'));
  expect(getByTestId('btn').textContent).toBe('切換成 晚上');
});


