import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW25ModalCpm';

test('should HW25ModalCpm', () => {
  const onClick = jest.fn(
    (index) => ({index})
  );
  const {container, getByTestId } = render(
    <HW
      index={0}
      onClick={onClick}
    />);
  userEvent.click(getByTestId('modal-bg'));
  expect(container).toMatchSnapshot();

  userEvent.click(getByTestId('close'));
  expect(container).toMatchSnapshot();
});
