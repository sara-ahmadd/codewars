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
  let day = 24 * 60;
  let time = day + n;
  let hrs = parseInt(time / 60);
  let mins = Math.abs(Math.floor(((time / 60) % 1).toFixed(2) * 60));

  hrs = hrs >= 24 ? hrs - 24 : hrs;
  hrs = hrs > 10 ? hrs : `0${hrs}`;
  mins = mins > 10 ? mins : `0${mins}`;
}
// console.log(dayAndTime(759));
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
console.log(testit_5(["run", "run", "run", "run", "run"], "_|_|_"));
