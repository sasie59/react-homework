// import add from './add';
var add = require('./add');

// test(`給${i}跟${i + 2}預期拿到${2 * i + 2}`, () => {
//   expect(add(i, i + 2)).toBe(2 * i + 2);
// });

test('should add(1,2) get 3', () => {
  expect(add(1,2)).toBe(3);
});
