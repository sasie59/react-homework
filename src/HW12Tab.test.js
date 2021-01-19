import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW12Tab';

test('should HW12Tab', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('should click different div will appear different text', () => {
  const { container } = render(<HW />);
  
});


