import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW13TodoList';

test('should HW13TodoList', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('should add something to list', () => {
  const { container } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, "aaa{enter}");
  expect(container).toMatchSnapshot();
});

test('should something has done', () => {
  const { container, getByText } = render(<HW />);
  const input = container.querySelector('input');
  userEvent.type(input, "bbb{enter}");
  userEvent.click(getByText('bbb'));
  userEvent.click(getByText('bbb'));
  expect(container).toMatchSnapshot();
});


