import React from 'react';
import { render,cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW22CartFruit';

afterEach(cleanup);

test('should HW22CartFruit', () => {
  const onSubmit = jest.fn(
    (index,value) => ({index, value})
  );
  const {container } = render(
    <HW
      name='蘋果'
      price={20}
      index={1}
      onSubmit={onSubmit}
    />);
  const input = container.querySelector('input');
  userEvent.type(input, '25{enter}');
  expect(input.textContent).toBe('');
  expect(container).toMatchSnapshot();
});
