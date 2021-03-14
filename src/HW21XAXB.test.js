import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW21XAXB';

test('should wrong format', () => {
  const { container, getByTestId } = render(<HW />);
  const input = container.querySelector('input');
  const li = container.querySelector('li');
  userEvent.type(input, '1111{enter}');
  const errMsg = getByTestId('errMsg');
  expect(errMsg).toBeTruthy();

  userEvent.type(input, 'aqws{enter}');
  expect(errMsg).toBeTruthy();

  userEvent.type(input, '1234{enter}');
  // expect(li.textContent).toBe('1234: 0A0B');
  // expect(getByTestId('li').textContent).toBe('1234: 0A0B');
  // 無法透過data-testid='li'來找相對應的dom??

});
// expect(errMsg).toBeFalsy();
