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
console.log(lastManStanding(100));
