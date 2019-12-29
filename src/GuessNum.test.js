import { makeRand } from './GuessNum';

test('should makeRand() is valid', () => {
  let a = 0;
  let b = 0;
  let n = 0;
  let min = 0;
  let max = 0;
  for (let i = 0; i < 100; i++) {
    a = makeRand(1, 10000);
    b = makeRand(1, 10000);
    min = Math.min(a, b);
    max = Math.max(a, b);
    n = makeRand(min, max);
    expect(n >= min && n <= max).toBeTruthy();
  }
})
