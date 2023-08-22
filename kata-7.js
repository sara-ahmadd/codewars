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