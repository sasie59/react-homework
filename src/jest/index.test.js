import { double } from './index';

jest.mock('./add', () => {
  return {
    add: (a, b) => 100
  };
});

test('should index', () => {
  expect(double(1, 2)).toBe(200);
});
