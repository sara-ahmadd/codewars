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
console.log(closedBrackets("(J))"));
