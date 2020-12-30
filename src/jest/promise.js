const aPromise = x => {
  // 2
  return new Promise((resolve, reject) => {
    // 3
    setTimeout(() => {
      resolve(x + 1);
    }, 2000);
  });
};

// 1        // 4
aPromise(1).then(result => {
  console.warn(result);
});