import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW10Currency';

test('should HW10Currency', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();

});

test('should  1 usd change 30 twd', () => {
  const { container } = render(<HW />);
  const usdInput = container.querySelector('input[name="usd"]');

  userEvent.type(usdInput, '1');
  expect(container).toMatchSnapshot();
});

test('should 30 twd change 1 usd', () => {
  const { container } = render(<HW />);
  const twdInput = container.querySelector('input[name="twd"]');

  userEvent.type(twdInput, '30');
  expect(container).toMatchSnapshot();
});


