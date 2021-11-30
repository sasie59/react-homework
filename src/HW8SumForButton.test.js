import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW8SumForButton';

test('should HW6RemovableList', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('should sum = sum + number', () => {
  const { container, getByTestId } = render(<HW />);
  const div = container.querySelector('div[name="sum"]');
  userEvent.click(getByTestId(0));
  userEvent.click(getByTestId(2));

  expect(div.textContent).toBe('加總值 : 4');
  expect(container).toMatchSnapshot();
});
test('should sum = sum + number', () => {
  const { container, getByTestId } = render(<HW />);
  const div = container.querySelector('div[name="sum"]');
  userEvent.click(getByTestId(8));
  userEvent.click(getByTestId(6));

  expect(div.textContent).toBe('加總值 : 16');
  expect(container).toMatchSnapshot();
});
