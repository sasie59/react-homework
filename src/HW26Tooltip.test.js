import React from 'react';
import { render } from '@testing-library/react';
import HW from './HW26Tooltip';

test('should ', () => {
  const {container} = render(<HW />);
  expect(container).toMatchSnapshot();
});
