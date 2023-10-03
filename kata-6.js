function kebabize(str) {
  str = str.replace(/([0-9])/g, "");
  str = str.split(/(?=[A-Z])/g).map((x) => x.toLowerCase());
  return str.join("-");
}
// console.log(kebabize("CamelsHave3ThreeHumps"));

// function alignRight(text, width) {
//   let s = "";
//   let arr = [];
//   for (let i = 0; i < text.length; i++) {
//     s += text[i];
//     if (s.length === width) {
//       if (s.endsWith(" ")) {
//         s = s.slice(0, s.length - 1);
//       }
//       arr.push(s);
//       s = "";
//     }
//   }
//   arr.push(s);
//   arr = arr.map((x) => x.padStart(width, " "));
//   return arr.join("\n");
// }

function alignRight(text, width) {
  let regex = new RegExp("(.{0," + width + "})( |$)", "g");
  return (
    text
      .replace(
        regex,
        (_, chars) => " ".repeat(width - chars.length) + chars + "\n"
      )
      //remove whit spaces in the end
      .replace(/\s+$/, "")
  );
}
// console.log(
//   alignRight(
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     62
//   )
// );

function biggest(nums) {
  return nums
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("")
    .replace(/^0+/g, "0");
}
// console.log(biggest([3, 30, 9, 5, 34]));
function findChildren(s) {
  let text = "";
  let arr = [];
  s = s.split("").sort().join("");
  for (let i in s) {
    if (s[i].toUpperCase() === s[i]) {
      text += s[i];
      text += s
        .split("")
        .filter((x) => x == s[i].toLowerCase())
        .join("");
      arr.push(text);
      text = "";
    }
  }
  return arr.join("");
}
/* 
function findChildren(dancingBrigade){
  return dancingBrigade.split("")
        .sort((a,b)=>a.localeCompare(b,"kf",{caseFirst:"upper"}))
        .join("");
  
};
*/
// console.log(findChildren("AaBaCabbcccc"));
//2,3,5,7
let notPrimes = (a, b) => {
  let arr = [];
  for (let i = a; i < b; i++) {
    if (!/[014689]/.test(i)) {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          arr.push(i);
          break;
        }
      }
    }
  }
  return arr;
};
// console.log(notPrimes(2, 222));

function lastFibDigit(n) {
  //last digit sequence of fibonacci numbers repeats in cycles of 60.
  n = n % 60;
  let num1 = 0,
    num2 = 1;
  for (let i = 2; i <= n; i++) {
    [num1, num2] = [num2, (num1 + num2) % 10];
  }
  return num2;
}
// console.log(lastFibDigit(1000000));
// console.log(302 % 60);
// function fibonacci(n) {
//   if (n <= 0) return 0;
//   if (n === 1) return 1;

//   let fib = new Array(n + 1);
//   fib[0] = 0;
//   fib[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     fib[i] = BigInt(fib[i - 1]) + BigInt(fib[i - 2]);
//   }

//   let res = fib[n].toString();
//   return res[res.length - 1];
// }

// console.log(fibonacci(1000));
function levenshtein(a, b) {
  let lena = a.length;
  let lenb = b.length;
  //create matrix to store distances
  let matrix = Array(lena + 1)
    .fill(0)
    .map(() => Array(lenb + 1).fill(0));
  //initialize rows
  for (let i = 1; i <= lena; i++) {
    matrix[i][0] = i;
  }
  //initialize columns
  for (let j = 1; j <= lenb; j++) {
    matrix[0][j] = j;
  }
  //compute distances
  for (let i = 1; i <= lena; i++) {
    for (let j = 1; j <= lenb; j++) {
      if (a[i - 1] == b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        let a = matrix[i - 1][j - 1],
          b = matrix[i][j - 1],
          c = matrix[i - 1][j];
        matrix[i][j] = 1 + Math.min(a, b, c);
      }
    }
  }
  return matrix[lena][lenb];
}
// console.log(levenshtein("qqq", "rqq"));
const isPrime = (x) => {
  if (x < 2) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
};
// console.log(isPrime(11));
const solve = (x, y) => {
  let count = 0;
  for (let m = 0; m < 100; m++) {
    for (let n = 0; n < 100; n++) {
      let specialPrime = Math.pow(2, m) * Math.pow(3, n) + 1;
      if (specialPrime >= x && specialPrime <= y && isPrime(specialPrime))
        count++;
    }
  }
  return count;
};
// console.log(solve(0, 15));
const recursiveSquaringDigitsOfNumber = (n) => {
  let sum = 0;
  n = String(n)
    .split("")
    .map((x) => (sum += Math.pow(Number(x), 2)))[0];
  if (sum >= 10) {
    return recursiveSquaringDigitsOfNumber(sum);
  }
  if (sum > 1 && sum < 10) {
    return sum;
  }
  if (sum == 10 || sum == 1) return 1;
};
// console.log(recursiveSquaringDigitsOfNumber(25));

const primeReducion = (x, y) => {
  let primes = [];
  for (let i = x; i <= y; i++) {
    if (isPrime(i)) primes.push(i);
  }
  let count = 0;
  primes.forEach((x) => {
    if (recursiveSquaringDigitsOfNumber(x) === 1) {
      count++;
    }
  });
  return count;
};
// console.log(primeReducion(1, 25));
function count(str) {
  let count = {};
  for (let i in str) {
    count[str[i]] = (count[str[i]] || 0) + 1;
  }
  return count;
}
// console.log(count(""));
// console.log(count("zzzsdffs"));

function largestRadialSum(arr = [], d) {
  let len = arr.length;
  let maxSum = -Infinity;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = 0; j < d; j++) {
      let index = i + (j * len) / d;
      sum += arr[index];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}
// console.log(largestRadialSum([-2, -1, -2, -2], 2));

function findOdd(A) {
  let count = {};
  for (let i = 0; i < A.length; i++) {
    count[A[i]] = (count[A[i]] || 0) + 1;
  }
  let entries = Object.entries(count);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] % 2 !== 0) {
      return +entries[i][0];
    }
  }
}
// console.log(findOdd([1, 1, 2]));
const validBrackets = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] == "{" || str[i] == "[") {
      count++;
    } else {
      count--;
    }
  }
  return count === 0;
};
// console.log(validBrackets("((()))[[[]]]{{}}"));

function closedBrackets(s) {
  let a = 0,
    b = 0;
  for (let i of s) {
    if (i == ")") {
      if (b == 0) return false;
      b--;
    } else {
      b++;
    }
    if (i == "(") {
      a++;
    } else if (a > 0) {
      a--;
    }
  }
  return a == 0;
}
// console.log(closedBrackets("(J))"));

function rot(string) {
  return string.split("").reverse().join("");
}

function selfieAndRot(strng) {
  let s = strng
    .split("\n")
    .map((x) => x + ".".repeat(x.length))
    .join("\n");

  let rotatedStr = rot(strng);
  let newRot = rotatedStr
    .split("\n")
    .map((x) => ".".repeat(x.length) + x)
    .join("\n");
  return `${s}\n${newRot}`;
}
function oper(fct, s) {
  return fct(s);
}
const getSum = (n1, n2) => {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
};
function finance(n) {
  let count = 0;
  let val = n;
  for (let i = 0; i <= n * 2; i += 2, val++) {
    count += getSum(i, val);
  }
  return count;
}
// console.log(finance(15));
function howMuch(m, n) {
  let cars = 0,
    boats = 0,
    smaller = m < n ? m : n,
    larger = m > n ? m : n;
  let arr = [];
  for (let i = smaller; i <= larger; i++) {
    let obj = {};
    let product = (i - 2) / 7;
    let product_2 = (i - 1) / 9;
    if (product % 1 === 0 && product_2 % 1 === 0) {
      boats = product;
      cars = product_2;
      obj["M"] = i;
      obj["B"] = boats;
      obj["C"] = cars;
      arr.push(Object.entries(obj).map((x) => x.join(": ")));
    }
  }
  return arr;
}
// console.log(howMuch(10000, 9950));

// function rotateLeft(tree) {
//   return tree || null ;
// }

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  insertNode(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNewNode(this.root, newNode);
    }
  }
  insertNewNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNewNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNewNode(root.right, newNode);
      }
    }
  }
}

const createTree = (arr) => {
  let newTree = new BinaryTree();
  for (let i = 0; i < arr.length; i++) {
    newTree.insertNode(arr[i]);
  }
  console.log(newTree);
};
// console.log(createTree([9, 7, 11, 5, 8]));

function rotateRight(tree) {}

let whatTimeIsIt = function (angle) {
  while (angle > 360) {
    angle -= 360;
  }
  let hr;
  let min;
  //when its 12 o'clock
  if (angle >= 0 && angle < 30) {
    hr = 12;
  } else {
    hr = parseInt(angle / 30);
  }
  //hour hand moves 1/2 degree for every minuite
  //minuite = (angle % 30) / (1/2)degree
  if (angle % 30 > 0) {
    min = Math.floor((angle % 30) * 2);
  } else {
    min = 0;
  }

  hr = hr >= 10 ? hr : `0${hr}`;
  min = min >= 10 ? min : `0${min}`;

  return `${hr}:${min}`;
};
// console.log(whatTimeIsIt(40));

function breakCaesar(st) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  st = st.split("").map((x) => {
    let ind = (alpha.indexOf(x) - 3) % 26;
    return alpha[ind];
  });
  console.log(st);
}
// console.log(breakCaesar("Mjqqt, btwqi!"));

//helper function to  get the longest subsequence of same incrementing values
const getSequence = (arr) => {
  let vals = [];
  let t = "";
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    t += `${n},`;
    if (n !== arr[i + 1]) {
      vals.push(t);
      t = "";
    }
  }
  let num = vals
    .map((x) => x.split(","))
    .reduce((a, b) => (a.length > b.length ? a : b)).length;
  return num;
};
//Find the length of longest subsequence of same incrementing values
function longestSequenceIn(s = "") {
  if (s.length === 0) {
    return 0;
  } else if (s.split(" ").length === 1) {
    return 1;
  } else if (s.length >= 2) {
    let res = [];
    s = s.split(" ");
    for (let i = 0; i < s.length - 1; i++) {
      let dif = s[i + 1] - s[i];
      res.push(dif);
    }
    return getSequence(res);
  }
}
// console.log(longestSequenceIn("10 11 12 13 1 3 9 15 21 8 9 15 21"));

const sumAP = (n, d) => {
  n = parseInt(n / d);
  return n * (((n + 1) * parseInt(d)) / 2);
};

function solution_3and5Mults(n) {
  n--;
  return sumAP(n, 3) + sumAP(n, 5) - sumAP(n, 15);
}

//Another solution

/**
 * function solution(n){
let n3 = (n - 1) / 3 | 0, n5 =( n -1 )/ 5 | 0, n15 = (n -1) / 15 | 0
  return summation(n3) * 3 + summation(n5) * 5- summation(n15) * 15
}

function summation(n){
  return n * (n + 1) / 2
}
 */
// console.log(solution_3and5Mults(10));
function wheatFromChaff(values = []) {
  for (let i = 0, k = values.length - 1; i < k; ) {
    while (values[i] < 0) i++;
    while (values[k] > 0) k--;
    if (i < k) [values[i], values[k]] = [values[k], values[i]];
  }
  return values;
}

// console.log(wheatFromChaff([-3, 7, 11, -22, 5, -13, -20, -23, -46, 1, 2]));
