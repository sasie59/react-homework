import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW12Tab';

test('should HW12Tab', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('should click  div2 will appear  lorem 2', () => {
  const { container, getByTestId } = render(<HW />);
  const div2 = getByTestId("1");
  userEvent.click(div2);
  expect(container).toMatchSnapshot();
});

test('should click  div5 will appear  lorem 5', () => {
  const { container, getByTestId } = render(<HW />);
  const div4 = getByTestId("4");
  userEvent.click(div4);
  expect(container).toMatchSnapshot();
});


