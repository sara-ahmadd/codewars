function number(arr = []) {
  let res = [];
  let item = "";
  if (!arr) return [];
  for (let i = 0; i < arr.length; i++) {
    item += `${i + 1}: ${arr[i]}`;
    res.push(item);
    item = "";
  }
  return res;
}
// console.log(number(["a", "b", "c"]));

function isCoprime(x, y) {
  let primeX = [],
    primeY = [];
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      primeX.push(i);
    }
  }
  for (let i = 1; i <= y; i++) {
    if (y % i === 0) {
      primeY.push(i);
    }
  }
  let common = primeX.filter((x) => primeY.includes(x));
  return common.reduce((x, y) => (x > y ? x : y)) === 1 ? true : false;
}

// console.log(isCoprime(20, 27));

function evenNumInArray(arr, num) {
  let result = arr.reverse().filter((x) => x % 2 === 0);
  result = result.splice(0, num);
  return result.reverse();
}
// console.log(evenNumInArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

function triangle(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += i;
  }
  return count;
}
// console.log(triangle(3));

function squareDigits(num) {
  let s = num.toString().split("");
  for (let i = 0; i < s.length; i++) {
    s[i] = Math.pow(s[i], 2);
  }
  return s.join("");
}
// console.log(squareDigits(9119));

function sumOfN(n) {
  let arr = [];
  let sum = 0;
  if (n > 0) {
    for (let i = 0; i <= n; i++) {
      sum += i;
      arr.push(sum);
    }
  } else {
    for (let i = 0; i <= Math.abs(n); i++) {
      sum += -i;
      arr.push(sum);
    }
  }
  return arr;
}
console.log(basicSequence(7));
