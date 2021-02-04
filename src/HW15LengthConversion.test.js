import React from 'react';
import { render,getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW15LengthConversion';

test('should input number to lengthType', () => {
  const { container } = render(<HW />);
  const input = container.querySelector('input[name="mm"]');
  userEvent.type(input, '1000');
  expect(container.querySelector('input[name="cm"]').value).toBe('100');
  expect(container.querySelector('input[name="m"]').value).toBe('1');
  expect(container.querySelector('input[name="km"]').value).toBe('0.001');
});

test('should input number to lengthType', () => {
  const { container } = render(<HW />);
  const input = container.querySelector('input[name="cm"]');
  userEvent.type(input, '25');
  expect(container.querySelector('input[name="mm"]').value).toBe('250');
  expect(container.querySelector('input[name="m"]').value).toBe('0.25');
  expect(container.querySelector('input[name="km"]').value).toBe('0.00025');
});

test('should input number to lengthType', () => {
  const { container } = render(<HW />);
  const input = container.querySelector('input[name="m"]');
  userEvent.type(input, '3');
  expect(container.querySelector('input[name="mm"]').value).toBe('3000');
  expect(container.querySelector('input[name="cm"]').value).toBe('300');
  expect(container.querySelector('input[name="km"]').value).toBe('0.003');
});

test('should input number to lengthType', () => {
  const { container } = render(<HW />);
  const input = container.querySelector('input[name="km"]');
  userEvent.type(input, '1.6');
  expect(container.querySelector('input[name="mm"]').value).toBe('1600000');
  expect(container.querySelector('input[name="cm"]').value).toBe('160000');
  expect(container.querySelector('input[name="m"]').value).toBe('1600');
});


