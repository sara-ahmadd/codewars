/*
You will be given an array of events, which are represented by strings. 
The strings are dates in HH:MM:SS format.

It is known that all events are recorded in chronological order and 
two events can't occur in the same second.

Return the minimum number of days
 during which the log is written.
*/

/**
 * Return the minimum number of days
 during which the log is written.
 * @param {string[]} log
 * @returns number
 */

// loop through the array
//check if an item is repeated or after 23:00:00 comes number less than 23
//so, count += 1
function checkLogs(log = []) {
  if (log.length <= 1) return log.length;
  let count = 1;
  for (let i = 1; i < log.length; i++) {
    let hr = +log[i].slice(0, 2),
      mn = +log[i].slice(3, 5),
      sec = +log[i].slice(6);

    let prevHr = +log[i - 1].slice(0, 2),
      prevMn = +log[i - 1].slice(3, 5),
      prevSec = +log[i - 1].slice(6);

    if (hr < prevHr) {
      count++;
    } else if (hr === prevHr && mn <= prevMn) {
      count++;
    } else if (hr === prevHr && mn === prevMn && sec <= prevSec) {
      count++;
    }
  }
  return count;
}
// console.log(checkLogs(["12:00:00", "12:00:00", "23:59:59", "00:00:00"]));

function dropCap(n) {
  //split the string
  //loop through the array resulted
  //capitalize each word

  let arr = n.split(" ");
  return arr
    .map((x) => {
      return x.length > 2
        ? `${x[0].toUpperCase()}${x.slice(1).toLowerCase()}`
        : x;
    })
    .join(" ");
}
// console.log(
//   dropCap(
//     "Revelation of the contents outraged American public OPINION, and helped generate"
//   )
// );

function twoArePositive(a, b, c) {
  return a > 0 && b > 0 && c < 0
    ? true
    : b > 0 && c > 0 && a < 0
    ? true
    : a > 0 && c > 0 && b < 0
    ? true
    : false;
}

function lastManStanding(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  while (arr.length > 1) {
    let exArr = [];
    for (let i = 1; i < arr.length; i += 2) {
      exArr.push(arr[i]);
    }
    arr = exArr.reverse();
  }
  return arr[0];
}
// console.log(lastManStanding(100));
function nato(word) {
  var letters = {
    A: "Alpha",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",
  };
  return word
    .split("")
    .map((x) => x.replace(/[a-z]/gi, (char) => letters[char.toUpperCase()]))
    .join(" ");
}
// console.log(nato("hi"));

/**
 * Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666
 */
var AmIAfraid = function (day, num) {
  switch (day.toLowerCase()) {
    case "monday":
      return num === 12 ? true : false;
    case "tuesday":
      return num > 95 ? true : false;
    case "wednesday":
      return num === 34 ? true : false;
    case "thursday":
      return num === 0 ? true : false;
    case "friday":
      return num % 2 === 0 ? true : false;
    case "saturday":
      return num === 56 ? true : false;
    case "sunday":
      return Math.abs(num) === 666 ? true : false;
  }
};
function tailSwap(arr) {
  // let newArr = arr.map((x) => x.split(":")).flat();
  // let temp = newArr[1];
  // newArr[1] = newArr[3];
  // newArr[3] = temp;
  // let arr_1 = [newArr[0], newArr[1]];
  // let arr_2 = [newArr[2], newArr[3]];
  // newArr = [arr_1.join(":"), arr_2.join(":")];
  // return newArr;

  const [[a, b], [c, d]] = arr.map((x) => x.split(":"));
  return [`${a}:${d}`, `${c}:${b}`];
}
// console.log(tailSwap(["123:abc", "def:222"]));

function eliminateUnsetBits(number) {
  let nums = number.split("").filter((x) => x == 1);
  return parseInt(nums.length > 0 ? nums.join("") : 0, 2);
}
// console.log(eliminateUnsetBits("000"));
function getMean(arr, x, y) {
  if (x <= 1 || y <= 1 || y > arr.length) return -1;
  let arr_1 = arr.slice(0, x);
  let arr_2 = arr.slice(-y);
  let mean_1 = arr_1.reduce((a, b) => a + b, 0) / arr_1.length;
  let mean_2 = arr_2.reduce((a, b) => a + b, 0) / arr_2.length;
  return (mean_1 + mean_2) / 2;
}
// console.log(getMean([1, 2, 3, 4], 3, 2));

function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(-arr[i])) {
      return arr[i];
    }
  }
}
// console.log(solve([1, -1, 2, 3, -3, -2, 5]));

function isDivisible(...args) {
  return args.every((x) => args[0] % x === 0);
}
// console.log(isDivisible(12, 3, 4));

var filterString = function (value) {
  let temp = "";

  for (let i in value) {
    if (/[0-9]/g.test(value[i])) {
      temp += value[i];
    }
  }
  return temp;
};
// console.log(filterString("a1b2c3"));

function to24hourtime(hour, minute, period) {
  //check if hr >= 1 && period is pm
  //so, add that hr to 12
  hour = hour >= 1 && period == "pm" && hour < 12 ? (hour += 12) : hour;
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute > 10 ? minute : `0${minute}`;

  if (hour == 12 && period == "am") hour = "00";
  return `${hour}${minute}`;
}
// console.log(to24hourtime(12, 3, "pm"));

/**examples =>
    "07:05:45PM"  -->  "19:05:45"
    "12:00:01AM"  -->  "00:00:01"
    "11:46:47PM"  -->  "23:46:47
 */
var getMilitaryTime = function (input) {
  let hr = +input.slice(0, 2);
  let mn = +input.slice(3, 5);
  let sec = +input.slice(6, 8);
  let period = input.slice(8);

  hr = hr >= 1 && period == "PM" && hr < 12 ? (hr += 12) : hr;
  hr = hr >= 10 ? hr : `0${hr}`;
  hr = hr == 12 && period == "AM" ? (hr = "00") : hr;
  mn = mn >= 10 ? mn : `0${mn}`;
  sec = sec >= 10 ? sec : `0${sec}`;
  return `${hr}:${mn}:${sec}${period}`;
};

function whoTookTheCarKey(message) {
  return message.map((x) => String.fromCharCode(parseInt(x, 2))).join("");
}
// console.log(
//   whoTookTheCarKey([
//     "01000001",
//     "01101100",
//     "01100101",
//     "01111000",
//     "01100001",
//     "01101110",
//     "01100100",
//     "01100101",
//     "01110010",
//   ])
// );

function numberOfHooks(length, maxHookDist) {
  let hookCount = 1;
  for (let i = length; i > maxHookDist; i /= 2) {
    hookCount *= 2;
  }
  return hookCount + 1;
}
function showBits(n) {
  return (n >>> 0)
    .toString(2)
    .padStart(32, 0)
    .split("")
    .map((x) => Number(x));
}
// console.log(showBits(1));

function maxlen(l1, l2) {
  let max = l1 > l2 ? l1 : l2;
  let min = l1 < l2 ? l1 : l2;
  if (max / 3 == min) return max / 3;
  return max / 2;
}
function toIndustrial(time) {
  if (Number(time)) {
    let min = time / 60;
    return Number(min.toFixed(2));
  }
  if (typeof time === "string") {
    let hr = +time.split(":")[0];
    let min = +time.split(":")[1];
    min = min / 60;
    return Number((hr + min).toFixed(2));
  }
}
// console.log(toIndustrial("1:45"));

function toNormal(time) {
  let hr = +time.toString().split(".")[0];
  let min = +(time % 1).toFixed(2);
  min = Math.round(min * 60);
  return `${hr}:${min < 10 ? `0${min}` : min}`;
}
// console.log(toNormal(67.07));
// Return the nth triangular number
function triangular(n) {
  let sum = 0;
  let resultArr = [];
  for (let i = 1; i <= n; i++) {
    sum += i;
    resultArr.push(sum);
  }
  return resultArr[resultArr.length - 1];
}
/**
 * function triangular(n) {
  if(n <= 0) return 0;
  return n + triangular(n - 1); 
}
 */
// console.log(triangular(4));
// A utility function to compute sum
// of digits in a given number x
function sumOfDigits(x) {
  return (x * (x + 1)) / 2;
}
// console.log(sumOfDigits(5));

function theVar(theVariables) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let str = theVariables.split("+");
  let lettersArr = [];
  for (let i in str) {
    let letter = letters.indexOf(str[i]) + 1;
    lettersArr.push(letter);
  }
  return lettersArr.reduce((a, b) => a + b, 0);
}
// console.log(theVar("d+g"));

function squaresNeeded(grains) {
  let grainCount = 1;
  let squares = 0;
  for (let i = 1; grainCount <= grains; i++) {
    grainCount *= 2;
    squares += 1;
  }
  return squares;
}
function amicableNumbers(num1, num2) {
  let numArr = [];
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      numArr.push(i);
    }
  }
  let sum = numArr.reduce((a, b) => a + b, 0);
  return sum === num2 ? true : false;
}
/**<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
 */
function boredom(staff) {
  let departments = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  let scoreArr = [];
  for (let i in staff) {
    let score = departments[staff[i]];
    scoreArr.push(score);
  }
  let total = scoreArr.reduce((a, b) => a + b, 0);
  return total <= 80
    ? "kill me now"
    : total < 100 && total > 80
    ? "i can handle this"
    : total >= 100
    ? "party time!!"
    : null;
}
// console.log(boredom({ tim: "change", jim: "accounts" }));

function vowel2index(str) {
  let vowels = "aeoiu";
  str = str
    .split("")
    .map((x, ind) => (vowels.includes(x.toLowerCase()) ? ind + 1 : x))
    .join("");
  return str;
}
// console.log(vowel2index("this"));

function encode(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  str = str
    .split("")
    .map((x) =>
      alpha.includes(x.toLowerCase()) ? alpha.indexOf(x.toLowerCase()) + 1 : x
    )
    .join("");
  return str;
}

function parameter(n) {
  let sum = String(n)
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
  let product = String(n)
    .split("")
    .reduce((a, b) => Number(a) * Number(b), 1);

  //LCM(sum, product)
  //get the GCM for both
  let gcfSum = [];
  let gcfProduct = [];

  for (let i = 1; i <= sum; i++) {
    if (sum % i === 0) {
      gcfSum.push(i);
    }
  }
  for (let i = 1; i <= product; i++) {
    if (product % i === 0) {
      gcfProduct.push(i);
    }
  }
  gcfSum = gcfSum.sort((a, b) => b - a);
  gcfProduct = gcfProduct.sort((a, b) => b - a);
  let GCF = gcfSum.find((x) => gcfProduct.includes(x));
  let LCM = (sum * product) / GCF;
  return LCM;
}
// console.log(parameter(22));

/*
8,W,T,Y,U,I,O,A,H,X,V and M

''0v0''
*/
function owlPic(text) {
  text = text.match(/(8|W|T|Y|U|I|O|A|H|X|V|M)/gi).join("");
  return `${text.toUpperCase()}''0v0''${text
    .split("")
    .reverse()
    .join("")
    .toUpperCase()}`;
}
// console.log(owlPic("345trrr"));

function closestPairTonum(n) {
  let nums = [];
  for (let i = n - 1; i > 0; i--) {
    nums.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (
        Math.sqrt(nums[i] + nums[j]) % 1 === 0 &&
        Math.sqrt(nums[i] - nums[j]) % 1 === 0 &&
        nums[i] !== nums[j]
      ) {
        return [nums[i], nums[j]];
      }
    }
  }
}
// console.log(closestPairTonum(10));

function inverseSlice(items, a, b) {
  items = items.slice(0, a).concat(items.slice(b));
  return items;
}
function processData(data) {
  return data.map((x) => x.reduce((a, b) => a - b)).reduce((x, y) => x * y, 1);
}
// console.log(
//   processData([
//     [2, 5],
//     [3, 4],
//     [8, 7],
//   ])
// );

function checkParity(parity, bin) {
  let ones = "";
  for (let i in bin) {
    if (bin[i] == 1) {
      ones += 1;
    }
  }
  return ones.length % 2 === 0 && parity == "even"
    ? 0
    : ones.length % 2 !== 0 && parity == "odd"
    ? 0
    : 1;
}
// console.log(checkParity("even", "0101010"));

/**
 * - raining or cloudy && chance >= 0.20 ===>> true
 * - sunny ===> false BUT sunny && chance > 0.2 ===> true
 */
function takeUmbrella(weather, chance) {
  console.log(weather, chance);
  return weather == "rainy" ||
    (weather == "cloudy" && chance > 0.2) ||
    (weather == "sunny" && chance > 0.5)
    ? true
    : false;
}
/* 
  - convert feet to inches
  - divide each of (l, w & h) by 16inch => which is 
  the edge length of the cubic crate.
*/
function boxCapacity(length, width, height) {
  //feet --(* 12)---> inch
  let len_inch = (length * 12) / 16,
    wid_inch = (width * 12) / 16,
    height_inch = (height * 12) / 16;
  let box =
    Math.floor(len_inch) * Math.floor(wid_inch) * Math.floor(height_inch);
  return box;
}
// console.log(boxCapacity(80, 40, 20));

/*
  b2 − 4ac > 0
*/
function quadraticFormula(a, b, c) {
  let x_1 = -(b / (a * 2)) + Math.sqrt(Math.pow(b / (2 * a), 2) - c / a),
    x_2 = -(b / (a * 2)) - Math.sqrt(Math.pow(b / (2 * a), 2) - c / a);
  return [x_1, x_2];
}
// console.log(quadraticFormula(2, 16, 1));

/* 
(x × (21/40) + 7.5) 
*/
function celsiusToRomer(temp) {
  return temp * (21 / 40) + 7.5;
}

class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1 / 3;
    this.interact = (q) => {
      let temp_color = this.color;
      let temp_flavor = this.flavor;

      this.color = q.color;
      this.flavor = q.flavor;

      q.color = temp_color;
      q.flavor = temp_flavor;
    };
  }
}

// let q = new Quark("red", "up");
// let q_2 = new Quark("blue", "down");
// q_2.interact(q);
// console.log(q);

function areaCode(text = "") {
  return text
    .match(/\(.*\)/g)
    .join("")
    .slice(1, 4);
}
// console.log(areaCode("The supplier's phone number is (555) 867-5309"));

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.add = (vector) => {
      return new Vector(this.x + vector.x, this.y + vector.y);
    };
  }
}

// let vec_1 = new Vector(1, 2);
// let vec_2 = new Vector(3, 4);

// let vec_c = vec_1.add(vec_2);
// console.log(vec_c);

function formatPoem(poem) {
  return poem.split(/\.\s/g).join(".\n");
}
// console.log(
//   formatPoem(
//     "Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated."
//   )
// );

function quotable(name, quote) {
  return `${name} said: \"${quote}\"`;
}
function testit_1(n) {
  let ones = "";
  n = n.toString(2);
  for (let i in n) {
    if (n[i] == 1) {
      ones += n[i];
    }
  }
  return ones.length;
}
// console.log(testit(3));

function testit(s) {
  return s.match(/w.*?o.*?r.*?d.*?/gi || []).length;
}
// console.log(testit("hello world"));
function breakChocolate(n, m) {
  if (m <= 1 || n <= 1) return 0;
}
//In summary, this function replaces every two consecutive
//characters in the input string with a single character,
//where the replacement character is calculated
//as the average of their Unicode values.
function testit_3(s) {
  return s.replace(/../g, (s) =>
    String.fromCharCode((s.charCodeAt(0) + s.charCodeAt(1)) / 2)
  );
}
function squareDigits(num) {
  return +String(num)
    .split("")
    .map((x) => Math.pow(Number(x), 2))
    .join("");
}

function descendingOrder(n) {
  return +String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
function getMiddle(str) {
  let len = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return `${str[len - 1]}${str[len]}`;
  }
  if (str.length % 2 !== 0) {
    return str[len];
  }
}
// console.log(getMiddle("testy"));

function accum(s) {
  let arr = s.split("");
  let newArr = arr.map((x, ind) => {
    return x.toLowerCase().repeat(ind + 1);
  });
  return newArr.map((x) => `${x[0].toUpperCase()}${x.slice(1)}`);
}
// console.log(accum("ZpglnRxqenU"));
var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};
function filter_list(l) {
  return l.filter((x) => typeof x === "number");
}

function isIsogram(str) {
  // let counts = {};
  // let arr = str.split("");
  // arr.forEach((x) => {
  //   counts[x] = (counts[x] || 0) + 1;
  // });
  // return counts;

  // let arr = str.split("");
  // let unique = [...new Set(arr)];
  // return unique.map((x) => [x, arr.filter((y) => y === x).length]);
  return new Set(str.toLowerCase().split("")).size === str.length;
}

// console.log(isIsogram("abc"));

function testit_4(s) {
  return s
    .split(" ")
    .map((x) => {
      if (x.length >= 2) {
        let last_letter = x[x.length - 1];
        x = x.slice(0, x.length - 1);
        return `${x}${last_letter.toUpperCase()}`;
      } else if (x.length === 1) {
        return x.toUpperCase();
      }
    })
    .join(" ");
}
// console.log(testit_4("ab ab"));

function testit_5(act, s) {
  let str = "";
  for (let i = 0; i < act.length; i++) {
    if (s[i] === "_" && act[i] === "run") {
      str += "_";
    } else if (s[i] === "_" && act[i] !== "run") {
      str += "x";
    }
    if (s[i] === "|" && act[i] === "jump") {
      str += "|";
    } else if (s[i] === "|" && act[i] !== "jump") {
      str += "/";
    }
  }
  return str;
}
// console.log(testit_5(["run", "run", "run", "run", "run"], "_|_|_"));

function tidyNumber(n) {
  let arr = String(n).split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
// console.log(tidyNumber(69));
function testit_6(a, b) {
  a = [...new Set(a)];
  b = [...new Set(b)];
  let similar = a.concat(b);
  return similar.sort((a, b) => a - b);
}
// console.log(testit_6([6, 4], [6]));

function validParentheses(parenStr) {
  //iterat over the string
  //creat an empty array
  if (parenStr.length == 0) return true;
  // let arr = [];
  // for (let i = 0; i < parenStr.length; i++) {
  //   let lastOpen = arr[arr.length - 1];
  //   if (parenStr[i] === "(") {
  //     arr.push(parenStr[i]);
  //   } else if (lastOpen === "(" && parenStr[i] === ")") {
  //     arr.pop();
  //   } else {
  //     return false;
  //   }
  // }
  // return arr.length ? false : true;
  let count = 0;

  for (let i = 0; i < parenStr.length; i++) {
    let char = parenStr[i];
    if (char === "(") {
      count++;
    } else {
      count--;
    }
  }
  return count === 0;
}
// console.log(validParentheses("()))()"));

function asciiEncrypt(plaintext) {
  return plaintext
    .split("")
    .map((x, ind) => plaintext.charCodeAt(ind) + ind)
    .map((x) => String.fromCharCode(x))
    .join("");
}

function asciiDecrypt(ciphertext) {
  return ciphertext
    .split("")
    .map((x, ind) => ciphertext.charCodeAt(ind) - ind)
    .map((x) => String.fromCharCode(x))
    .join("");
}

// console.log(asciiEncrypt("password"));

// console.log(asciiDecrypt("pbuv{txk"));

function toBinary(n) {
  return n > 0 ? n.toString(2) : (n >>> 0).toString(2);
}
function maxDiff(list) {
  if (list.length <= 1) return 0;
  list = list.sort((a, b) => b - a);
  return list[0] - list[list.length - 1];
}

// console.log(maxDiff([1, 4, 2, 7, 4]));
// let dict = {
//   d: "disturbing",
//   g: "gregarious",
//   m: "mustache",
//   l: "literal",
//   k: "klingon",
//   j: "joke",
//   i: "ingestable",
//   n: "newtonian",
//   t: "turn",
//   e: "eager",
// };,
let dict = {
  D: "disturbing",
  G: "gregarious",
  M: "mustache",
  L: "literal",
  K: "klingon",
  J: "joke",
  I: "ingestable",
  N: "newtonian",
  E: "eager",
  R: "rant",
  E: "eager",
  S: "stylish",
  T: "turn",
  C: "confident",
  O: "oscillating",
  W: "weird",
  A: "awesome",
  H: "hippy",
};
function makeBackronym(string) {
  let str = string.split("");
  let result = [];
  for (let i in str) {
    let s = str[i];
    result.push(dict[s.toUpperCase()]);
  }
  return result.join(" ");
}
// console.log(makeBackronym("adh"));

function maskify(cc) {
  if (cc.length <= 1) return cc;
  let s = cc.slice(-4);
  cc = cc.slice(0, -4);
  let rest = cc.split("").fill("#");

  return `${rest.join("")}${s}`;
}
function racePodium(blocks) {
  let fir = Math.ceil(blocks / 3) + 1;
  let sec = fir - 1;
  let thir = blocks - (fir + sec);

  if (thir === 0) {
    thir = 1;
    sec -= 1;
  }
  return [sec, fir, thir];
}
// console.log(racePodium(100000));

function calculate(n1, n2, o) {
  let operations = ["+", "-", "*"];
  let num_1 = parseInt(n1, 2);
  let num_2 = parseInt(n2, 2);

  if (o === "add") {
    o = operations[0];
  } else if (o === "subtract") {
    o = operations[1];
  } else {
    o = operations[2];
  }
  return eval(num_1 + o + num_2).toString(2);
}
// console.log(calculate("1", "1", "add"));

function squareAreaToCircle(size) {
  return Math.pow(Math.sqrt(size) / 2, 2) * Math.PI;
}

function replaceNth(text, n, oldValue, newValue) {
  let count = 1;
  return n > 0
    ? text.replace(new RegExp(oldValue, "g"), (char) =>
        count++ % n === 0 ? newValue : char
      )
    : text;
}
// console.log(
//   replaceNth(
//     "Vader no said: Noooooooo, I am your father noooooooo!",
//     4,
//     "o",
//     "i"
//   )
// );

function cookPancakes(n, m) {
  let time = Math.ceil(n * 2) * m;
  return time === 1 ? 2 : time;
}
// console.log(cookPancakes(1, 2));

function reverseNumber(n, b) {
  if (b === 1n) return n;
  let result = 0n;
  while (n > 0n) {
    result = result * b + (n % b);
    n /= b;
  }
  return result;
}
// console.log(reverseNumber(12n, 2n));

function maxMultiple(divisor, bound) {
  let result = [];
  for (let i = 1; i <= bound; i++) {
    if (i % divisor === 0) {
      result.push(i);
    }
  }
  return result[result.length - 1];
}
// console.log(maxMultiple(2, 7));

var capitals = function (word) {
  let arr = [];
  for (let i in word) {
    if (word[i].toUpperCase() === word[i]) {
      arr.push(+i);
    }
  }
  return arr;
};

function convert(degrees) {
  let degree = parseInt(degrees);
  let minuites = degrees.toString().split(".")[1] || 0;
  minuites = Number(`0.${minuites}`) * 60;

  let seconds = Math.round((minuites % 1) * 60);

  minuites = parseInt(minuites);
  if (seconds === 60) {
    minuites += 1;
    seconds = 0;
  }
  if (minuites === 60) {
    degree += 1;
    minuites = 0;
  }

  let result = [degree, minuites, seconds];

  if (result.every((x) => x === 0)) {
    return [0];
  } else if (result[1] === 0 && result[2] === 0) {
    return [result[0]];
  } else if (result[2] === 0) {
    return [result[0], result[1]];
  }
  return result;
}

// console.log(convert(0.999999));

function bingo(a) {
  let alpha = ".abcdefghijklmnopqrstuvwxyz";
  a = a.map((x) => alpha[x]);
  let text = "bingo";
  let res = a.filter((x) => text.includes(x));
  res = [...new Set(res)];
  console.log(res);
  return res.length >= 4 ? "WIN" : "LOSE";
}
// console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));

function solution(nums) {
  return !nums ? [] : nums.sort((a, b) => a - b);
}
function removeUrlAnchor(url) {
  return url.split("#")[0];
}

function printerError(s) {
  let len = s.length;
  let notMatch = s.match(/[^a-m]/gi)?.length || 0;
  return `${notMatch}/${len}`;
}
// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

/* 
new Date(2016, 2, 8, 16, 42, 59)
//Should return: 
"16:42:59,000"
*/
function convert(time) {
  let newDate = time.toJSON().slice(11, -1);
  return newDate.replace(".", ",");
}
// console.log(convert(new Date(2016, 2, 8, 16, 42, 59)));

function sortIt(arr) {
  let repeats = {};

  for (let i = 0; i < arr.length; i++) {
    repeats[arr[i]] = (repeats[arr[i]] || 0) + 1;
  }
  return arr.slice().sort((a, b) => repeats[a] - repeats[b] || b - a);
}
// console.log(sortIt([1, 1, 1, 2, 2, 3, 3, 3]));

const xMarksTheSpot = (input) => {
  let numOfX = input.flat().filter((x) => x === "x").length;
  if (!input || numOfX > 1 || numOfX === 0) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "x") {
        return [i, j];
      }
    }
  }
};
// console.log(
//   xMarksTheSpot([
//     ["x", "o"],
//     ["o", "o"],
//   ])
// );

function convert(number) {
  let numbers = number.match(/(\d{2})/g);
  console.log(numbers);
  return numbers.map((x) => String.fromCharCode(Number(x))).join("");
}
// console.log(convert("73327673756932858080698267658369"));

let leetDialect = {
  A: "@",
  B: "8",
  C: "(",
  D: "D",
  E: "3",
  F: "F",
  G: "6",
  H: "#",
  I: "!",
  J: "J",
  K: "K",
  L: "1",
  M: "M",
  N: "N",
  O: "0",
  P: "P",
  Q: "Q",
  R: "R",
  S: "$",
  T: "7",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "2",
};
function toLeetSpeak(str) {
  return str.replace(/./gi, (char) => leetDialect[char] || char);
}
// console.log(toLeetSpeak("LEET"));

function solution(number) {
  let a = 0,
    b = 0,
    c = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      a++;
    } else if (i % 3 !== 0 && i % 5 === 0) {
      b++;
    } else if (i % 3 === 0 && i % 5 === 0) {
      c++;
    }
  }
  return [a, b, c];
}
// console.log(solution(20));

function getMinMax(arr) {
  return [
    arr.reduce((a, b) => (a < b ? a : b)),
    arr.reduce((a, b) => (a > b ? a : b)),
  ];
}
function explode(s) {
  return s.replace(/./g, (n) => n.repeat(n));
}
// const sxore = function (n) {
// switch (n % 4) {
//   case 0:
//     return n;
//   case 1:
//     return 1;
//   case 2:
//     return n + 1;
//   default:
//     return 0;
// }
/*
  const sxore = function(n){
  let x = +n.toString(2).slice(-2)
  return x===10?n+1:
         x===11?0:
         x===01?1:n
}
  */
// };
const sxore = function (n) {
  let num = n.toString(2).slice(-2);
  return num === "10" ? n + 1 : num === "11" ? 0 : num === "01" ? 1 : n;
};
// console.log(sxore(50));

function tiyFizzBuzz(sentence) {
  return sentence.replace(/[a-zA-Z]/g, (char) =>
    char == char.toUpperCase() && "AEIOU".includes(char)
      ? "Iron Yard"
      : char == char.toUpperCase() && !"aeiou".includes(char)
      ? "Iron"
      : char == char.toLowerCase() && "aeiou".includes(char)
      ? "Yard"
      : char
  );
}
// console.log(tiyFizzBuzz("Hello WORLD!"));

function score(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let res = n.toString(2).replace(/0/g, 1);
  return parseInt(res, 2);
}
// console.log(score(1000000));

function solution_text(fullText, searchText) {
  return fullText.match(new RegExp(searchText, "gi"))?.length || 0;
}
// console.log(solution_text("aaabbbcccc", "bb"));

function pendulum(values) {
  let min = values.reduce((a, b) => (a > b ? b : a));
  let res = [];
  values.sort((a, b) => a - b);
  for (let i = 0; i < values.length; i++) {
    if (values[i] > min && i % 2 !== 0) {
      res.push(values[i]);
    } else {
      res.unshift(values[i]);
    }
  }
  return res;
}
// console.log(pendulum([4, 6, 7, 9, 2]));

function keepOrder(ary, val) {
  let arr = ary.slice();
  arr.push(val);
  let newArr = arr.sort((a, b) => a - b);
  return newArr.indexOf(val);
}
// console.log(keepOrder([1, 2, 3, 4, 7], 0));
// console.log(keepOrder([1, 1, 2, 2, 2], 2));

function toBytes(n) {
  let bin = n.toString(2);
  console.log(bin);
  console.log(bin.length);
  let bin_len = Math.ceil(bin.length / 8);
  bin = bin.padStart(bin_len * 8, "0");
  let res = [];
  for (let i = 0; i < bin.length; i += 8) {
    res.push(bin.slice(i, i + 8));
  }
  return res;
}
// console.log(toBytes(257));

function reverseMessage(str) {
  let newStr = str.split("").reverse().join("");
  let result = newStr
    .split(" ")
    .map((y) => y.toLowerCase())
    .map((x) => x.replace(x[0], x[0]?.toUpperCase()))
    .join(" ");
  return result;
}
// console.log(reverseMessage("hello world!"));

const elementLocation = (begin, end, index, size) => {
  let element = size * index;
  let location = begin + element;
  if (location >= end || location < begin) {
    throw Error("error");
  }
  return location;
};

// console.log(elementLocation(0x1000, 0x1040, 0x8, 0x8));

function friend(friends) {
  return friends.filter((x) => x.length === 4);
}

function swapAdjacentBits(n) {
  let bin = n.toString(2).padStart(32, "0").split("");
  console.log(bin);
  for (let i = 0; i < bin.length - 1; i += 2) {
    let temp = bin[i];
    bin[i] = bin[i + 1];
    bin[i + 1] = temp;
  }
  console.log(bin);
  bin = bin.join("");
  return parseInt(bin, 2);
}
// console.log(swapAdjacentBits(74));

/* 
10, 20, 50, 100, 200 and 500*/

function solve(n) {
  let dollars = [500, 200, 100, 50, 20, 10];
  let i = 0;
  let count = 0;

  while (dollars[i]) {
    if (n >= dollars[i]) {
      n -= dollars[i];
      console.log(n);
      count++;
    } else {
      i++;
      continue;
    }
  }
  if (n > 0) {
    return -1;
  }
  return count;
}
// console.log(solve(1250));

function spacey(array) {
  let result = [];
  let items = "";
  for (let i = 0; i < array.length; i++) {
    items += array[i];
    result.push(items);
  }
  return result;
}

// console.log(spacey(["i", "have", "no", "space"]));

var removeVowels = function (str) {
  return str.replace(/[a|e|i|o|u]/gi, "");
};
function isLeapYear(duration, year) {
  let reminder = duration % 1;
  return year % (1 / reminder) === 0;
}
// console.log(isLeapYear(124.125, 102));
function realNumbers(n) {
  // n(a^b^c) = n - n(a) - n(b) - n(c) + n(a^b) + n(b^c) + n(a^c) - n(a^b^c)
  let { floor } = Math;
  return (
    n -
    floor(n / 2) -
    floor(n / 3) -
    floor(n / 5) +
    floor(n / 6) +
    floor(n / 15) +
    floor(n / 10) -
    floor(n / 30)
  );
}
// console.log(realNumbers(99751));

function initials(n) {
  let str = n.split(" ");
  let res = [];
  for (let i = 0; i < str.length - 1; i++) {
    res.push(str[i].slice(0, 1).toUpperCase());
  }
  let lastItem = str[str.length - 1];
  res.push(lastItem.replace(lastItem[0], lastItem[0].toUpperCase()));
  return res.join(".");
}

function squareIt(int) {
  let res = Math.sqrt(String(int).length);
  let ans = [];
  if (res % 1 === 0) {
    for (let i = 0; i < String(int).length; i += res) {
      let s = String(int).slice(i, i + res);
      ans.push(s);
    }
    return ans.join("\n");
  } else {
    return "Not a perfect square!";
  }
}
// console.log(squareIt(123123123));

function rangeBitCount(a, b) {
  let res = [];
  for (let i = a; i <= b; i++) {
    res.push(i);
  }
  res = res
    .map((x) => x.toString(2))
    .map((y) => y.replace(/0{1,}/g, ""))
    .map((x) => x.length);
  return res.reduce((a, b) => a + b);
}
// console.log(rangeBitCount(2, 7));

function powerOf4(n) {
  if (typeof n !== "number") {
    return false;
  }

  for (let i = 0; i <= 100; i++) {
    if (Math.pow(4, i) === n) {
      return true;
    }
  }
  return false;
}
//const powerOf4 = (n) => typeof n === 'number' && Number.isInteger(Math.log(n) / Math.log(4));

/* 
function center(strng, width, fill = ' ') {
if (strng.length > width) return strng;
const fillRepeatCount = width - strng.length;
const lefthand = Math.ceil(fillRepeatCount / 2);
const righthand = Math.floor(fillRepeatCount / 2);
return `${fill.repeat(lefthand)}${strng}${fill.repeat(righthand)}`;
}
*/
function center(strng, width, fill = " ") {
  if (strng.length > width) return strng;
  let res = [strng];
  let len = width - strng.length;
  for (let i = 0; i < width; i += 1) {
    if (len > 0) {
      res.unshift(fill);
      len--;
    }
    if (len > 0) {
      res.push(fill);
      len--;
    }
  }
  return res.join("");
}
// console.log(center("abc", 1, "/"));

var circleArea = function (radius) {
  if (typeof radius !== "number" || radius <= 0) return false;
  return +(Math.PI * radius * radius).toFixed(2);
};

function wordPattern(word) {
  let letters = {};
  word = word.split("").map((x) => x.toLowerCase());
  let newWord = [...new Set(word)];
  for (let i in newWord) {
    letters[newWord[i]] = letters[newWord[i]] || i;
  }
  word = word.join("").replace(/\w/gi, (char) => `${letters[char]}.`);
  word = word.slice(0, word.length - 1);
  return word;
}
// console.log(
//   wordPattern("HilzPllrOkqQZTCFvxvGhhyvydqWtocHfMPzovBPOvFcyQarBZppopoth")
// );

function clockDegree(s) {
  let hrs = +s.split(":")[0];
  let mns = +s.split(":")[1];
  if (isNaN(hrs) || isNaN(mns) || hrs >= 24 || mns > 59 || hrs < 0 || mns < 0) {
    return "Check your time !";
  }
  let resHrs = 0;
  let resMns = 0;
  for (let i = 1; i <= hrs; i++) {
    if (i === 12) {
      resHrs = 0;
      continue;
    }
    resHrs += 30;
  }
  for (let i = 1; i <= mns; i++) {
    resMns += 6;
  }
  if (hrs == 0 || hrs == 12) {
    resHrs = 360;
  }
  if (mns == 0) {
    resMns = 360;
  }
  return `${resHrs}:${resMns}`;
}
// console.log(clockDegree("-01:00"));

const toRgb = ([r, g, b]) => {
  let grey = Math.floor((r + g + b) / 3);
  return [grey, grey, grey];
};

function color2grey(image) {
  return image.map((x) => x.map((y) => toRgb(y)));
}

// console.log(
//   color2grey([
//     [
//       [123, 231, 12],
//       [56, 43, 124],
//     ],
//     [
//       [78, 152, 76],
//       [64, 132, 200],
//     ],
//   ])
// );

function stringsConstruction(a, b) {
  let count = 0;
  let position;
  let found = true;
  b = b.split("");

  while (found) {
    for (let i = 0; i < a.length; i++) {
      position = b.indexOf(a[i]);
      if (position >= 0) {
        b.splice(position, 1);
      } else {
        found = false;
        break;
      }
    }
    if (found === true) {
      count++;
    }
  }
  return count;
}
// console.log(stringsConstruction("abc", "abccba"));
function testit_7(a, b) {
  return a | b;
}

function solution_cats_shelves(start, finish) {
  let res = [];
  let i = start;
  while (i < finish) {
    if (i + 3 > finish) {
      i += 1;
      res.push(i);
    } else {
      i += 3;
      res.push(i);
    }
  }
  return res.length;
}
// console.log(solution_cats_shelves(1, 5));
// function dayAndTime(n) {
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let hrs = parseInt(n / 60);
//   let mnsRatio = +((n / 60) % 1).toFixed(2);
//   let mns = parseInt(mnsRatio * 60);
//   let count = 0;

//   if (n >= 0) {
//     while (hrs > 0) {
//       if (hrs - 24 >= 0) {
//         hrs -= 24;
//         count++;
//         if (count > days.length - 1) {
//           count = 0;
//         }
//       } else {
//         break;
//       }
//     }
//   }
//   if (n < 0) {
//     let day = 24 * 60;
//     hrs = parseInt(n / 60);
//     mnsRatio = +((n / 60) % 1).toFixed(2);
//     mns = parseInt(mnsRatio * 60);
//     count = days.length - 1;
//     while (hrs < 0) {
//       if (hrs + 24 <= 0) {
//         hrs += 24;
//         count--;
//         if (count < 0) {
//           count = days.length - 1;
//         }
//       } else {
//         break;
//       }
//     }
//   }
//   return `${days[count]} ${hrs >= 10 ? hrs : "0" + hrs}:${
//     mns >= 10 ? mns : "0" + mns
//   }`;
// }

function dayAndTime(n) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(0, 0, 0);
  date.setTime(date.getTime() + n * 60 * 1000);

  return `${days[date.getDay()]} ${
    date.getHours() >= 10 ? date.getHours() : "0" + date.getHours()
  }:${date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()}`;
}
// console.log(dayAndTime(-349000));

//kyu 6
function comparePowers(n1, n2) {
  let num_1 = Math.log10(n1[0]) * n1[1];
  let num_2 = Math.log10(n2[0]) * n2[1];

  return num_2 === num_1 ? 0 : num_2 < num_1 ? -1 : 1;
}

// console.log(comparePowers([2, 10], [2, 15]));

function londonCityHacker(journey = []) {
  let cost = 0;
  let i = 0;
  while (i < journey.length) {
    if (typeof journey[i] === "string") {
      cost += +(2.4).toFixed(2);
      console.log("string" + cost);
      i++;
    }
    if (typeof journey[i] === "number" && typeof journey[i + 1] === "number") {
      cost += +(1.5).toFixed(2);
      console.log("numbers" + cost);
      i += 2;
    } else if (typeof journey[i] === "number") {
      console.log("number" + cost);
      cost += +(1.5).toFixed(2);
      i++;
    }
  }
  return `£${cost.toFixed(2)}`;
}
// console.log(londonCityHacker([0, 195, 0, 53, 57]));

function solve(s) {
  s = s.split(/[a-z]/gi).filter((x) => x !== "");
  return s.reduce((a, b) => (Number(a) > Number(b) ? Number(a) : Number(b)));
}
// console.log(solve("gh12cdy695m1"));

function extraPerfect(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}
function sumOfIntegersInString(s) {
  s = s.split(/\D/gi).filter((x) => Number(x));
  return s.reduce((a, b) => Number(a) + Number(b), 0);
}
// console.log(
//   sumOfIntegersInString(
//     "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
//   )
// );

function charConcat(s) {
  let res = "",
    count = 1;
  s = s.split("");
  if (s.length % 2 === 0) {
    while (s.length > 0) {
      res += `${s[0]}${s[s.length - 1]}${count}`;
      count++;
      s.splice(0, 1);
      s.splice(s.length - 1, 1);
    }
  } else {
    while (s.length > 1) {
      res += `${s[0]}${s[s.length - 1]}${count}`;
      count++;
      s.splice(0, 1);
      s.splice(s.length - 1, 1);
    }
  }
  return res;
}
// console.log(charConcat("abc!def"));

function hammingWeight(x) {
  let binary = "";
  while (x > 0) {
    binary = (x % 2) + binary;
    x = Math.floor(x / 2);
  }
  let count = 0;
  for (let i in binary) {
    if (binary[i] == "1") {
      count++;
    }
  }
  return count;
}
// console.log(hammingWeight(2));

function countAnimals(animals, count) {
  let resArr = [];
  let n = 0;
  for (let i = 0; i < count.length; i++) {
    n = animals.match(new RegExp(count[i]))?.length || 0;
    resArr.push(n);
    n = 0;
  }
  return resArr;
}
console.log(countAnimals("dog,cat", ["dog", "cat", "pig"]));

/*  

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

*/
