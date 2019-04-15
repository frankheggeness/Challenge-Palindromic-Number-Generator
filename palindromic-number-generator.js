function palindromicNumberGenerator(num) {
  function reverseNum(input) {
    return parseInt(
      input
        .toString()
        .split('')
        .reverse()
        .join(''),
    );
  }
  let steps = 0;
  while (num !== reverseNum(num)) {
    let reverse = reverseNum(num);
    num += reverse;
    steps++;
  }
  let returnObj = {
    value: num,
    steps: steps,
  };
  return returnObj;
}

module.exports = palindromicNumberGenerator;
