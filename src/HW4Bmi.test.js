import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW4Bmi';
test('should HW4Bmi', () => {
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

test('should 90kg / 170cm get 31', () => {
  const { container, getByTestId } = render(<HW />);
  const bmi = getByTestId('bmi');

  userEvent.type(container.querySelector('input[name="cm"]'), '170');
  userEvent.type(container.querySelector('input[name="kg"]'), '90');
  userEvent.click(container.querySelector('button'));

  expect(bmi.innerText).toBe(31);
  expect(container).toMatchSnapshot();
});


// test('should 160cm/60kg get 23', () => {
//   const { container, getByTestId } = render(<HW />);
//   const cmInput = container.querySelector('input[name="cm"]');
//   const kgInput = container.querySelector('input[name="kg"]');
//   const button = container.querySelector('button');
//   const bmiSpan = getByTestId('bmi');

//   userEvent.type(cmInput, '160');
//   userEvent.type(kgInput, '60');
//   userEvent.click(button);

//   expect(bmiSpan.innerText).toBe(23);
//   expect(container).toMatchSnapshot();
// });

// test('should 185cm / 90kg get 26', () => {
//   const { container , getByTestId } = render(<HW/>);
//   const cmInput = container.querySelector('input[name="cm"]');
//   const kgInput = container.querySelector('input[name="kg"]');
//   const button = container.querySelector('button');
//   const bmiSpan = getByTestId('bmi');

//   userEvent.type(cmInput, '185');
//   userEvent.type(kgInput, '90');
//   userEvent.click(button);

//   expect(bmiSpan.innerText).toBe(26);
//   expect(container).toMatchSnapshot();
// });




