import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './';

test('should todoList', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(container.querySelector('input' ),'abc{enter}');
  expect(getByTestId('todo-0').textContent).toBe('abctoggleremove');
  
  userEvent.click(getByTestId('toggle-0'));
  expect(container).toMatchSnapshot();
  
  userEvent.click(getByTestId('remove-0'));
  expect(container).toMatchSnapshot();
});
