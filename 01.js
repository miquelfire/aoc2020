const part1 = data =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(
        Array.from(data)
          .reverse()
          .join("")
      );
    }, 1000);
  });

module.exports = {
  part1
};
