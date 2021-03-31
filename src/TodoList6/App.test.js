import React from 'react';
import { getByTestId, render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW,{ALL,FINISH,UNFINISH} from './';

test('should todoList', () => {
  const { container, getByTestId } = render(<HW />);
  userEvent.type(container.querySelector('input' ),'abc{enter}');
  userEvent.type(container.querySelector('input' ),'123{enter}');
  expect(getByTestId('todo-0').textContent).toBe('abctoggleremove');
  expect(getByTestId('todo-1').textContent).toBe('123toggleremove');
  
  userEvent.click(getByTestId('toggle-0'));
  expect(container).toMatchSnapshot();
  
  userEvent.click(getByTestId('remove-0'));
  expect(container).toMatchSnapshot();
});

test('should selectOptions', () => {
  const { container } = render(<HW />);
  userEvent.selectOptions(screen.getByTestId('select'),['ALL']);
  expect(container).toMatchSnapshot();
  userEvent.selectOptions(screen.getByTestId('select'),['FINISH']);
  expect(container).toMatchSnapshot();
  userEvent.selectOptions(screen.getByTestId('select'),['UNFINISH']);
  expect(container).toMatchSnapshot();
});

