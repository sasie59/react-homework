import add from './add';

for (let i = 0; i < 300; i++) {
  test(`給${i}跟${i + 2}預期拿到${2 * i + 2}`, () => {
    expect(add(i, i + 2)).toBe(2 * i + 2);
  });
}

// test('should 2 + 4 to equal 6', () => {
//   expect(add(2, 4)).toBe(6);
// });
