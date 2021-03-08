import React from "react";
import { render,act, cleanup, getByAltText } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import HW, {} from './HW19Gopher';

test('should HW19Gopher', () => {
  const { getByTestId,getAllByText } = render(<HW />);
  const count = getByTestId('count');
  userEvent.click(getAllByText('G')[0]);
  expect(count.textContent).toBe('1');
});

test('should HW19Gopher', () => {
  const { getByTestId,getAllByText } = render(<HW />);
  const count = getByTestId('count');
  userEvent.click(getAllByText('-')[0]);
  expect(count.textContent).toBe('-1');
});
test('should HW19Gopher', () => {
  const { getByTestId,getAllByText } = render(<HW />);
  const count = getByTestId('count');
  userEvent.click(getAllByText('-')[0]);
  userEvent.click(getAllByText('-')[0]);
  userEvent.click(getAllByText('-')[0]);
  expect(count.textContent).toBe('-3');
});
