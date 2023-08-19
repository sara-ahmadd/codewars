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
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = 24 * 60;
  let time = day + n;
  let hrs = parseInt(time / 60);
  let mins = Math.abs(Math.floor(((time / 60) % 1).toFixed(2) * 60));

  hrs = hrs >= 24 ? hrs - 24 : hrs;
  hrs = hrs > 10 ? hrs : `0${hrs}`;
  mins = mins > 10 ? mins : `0${mins}`;
}
// console.log(dayAndTime(1447));
function eliminateUnsetBits(number) {
  let nums = number.split("").filter((x) => x == 1);
  return parseInt(nums.length > 0 ? nums.join("") : 0, 2);
}
console.log(eliminateUnsetBits("000"));
function getMean(arr, x, y) {
  if (x <= 1 || y <= 1 || y > arr.length) return -1;
  let arr_1 = arr.slice(0, x);
  let arr_2 = arr.slice(-y);
  let mean_1 = arr_1.reduce((a, b) => a + b, 0) / arr_1.length;
  let mean_2 = arr_2.reduce((a, b) => a + b, 0) / arr_2.length;
  return (mean_1 + mean_2) / 2;
}
console.log(getMean([1, 2, 3, 4], 3, 2));
