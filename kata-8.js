function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
// console.log(evenOrOdd(25));

function sumOfPositives(array = []) {
  // let positives = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  // for (let i = 0; i < positives.length; i++) {
  //   sum += positives[i];
  // }
  return sum;
}
// console.log(sumOfPositives([1, -3, 5, 9]));

function sumOfPositives_2(array = []) {
  // let positives = array.filter((x) => x > 0);
  // let sum = positives.reduce((x, y) => x + y, 0);
  // return sum;

  return array.filter((x) => x > 0).reduce((x, y) => x + y, 0);
}
// console.log(sumOfPositives_2([]));

function addWithoutHighestAndLowest(array = []) {
  //loop on the array
  //sorting algorithm
  //get highest
  //get lowest
  // execlude them form the array
  //add the rest of the elements
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      let temp = array[i];
      if (array[i + 1] > array[i]) {
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  array.shift();
  array.pop();
  console.log(array);
  return array.reduce((acc, curr) => acc + curr, 0);
}
// console.log(addWithoutHighestAndLowest([2, 3, 9, 5, 2, 8, 7]));

function addWithoutHighestAndLowest_2(array) {
  return array
    .sort((x, y) => x - y)
    .slice(1, -1)
    .reduce((a, b) => a + b);
}
// console.log(addWithoutHighestAndLowest_2([2, 3, 9, 5, 2, 8, 7]));

function stringRepeat(number, string) {
  //loop ,limit is the given number of times
  //array to hold repeated strings
  //join the array

  let arrayOfStrings = [];
  for (let i = 0; i < number; i++) {
    arrayOfStrings.push(string);
  }
  return arrayOfStrings.join("");
}
// console.log(stringRepeat(3, "Hi"));

function stringRepeat_2(number, string) {
  // return string.repeat(number);
  let newString = "";
  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
}
// console.log(stringRepeat_2(3, "Hi"));

function convertNumToReversedArrayOfDigits(num = 0) {
  //split the number to get array
  let digits = num.toString().split("");
  for (let i = 1; i <= Math.ceil(digits.length / 2); i++) {
    let temp = digits[i];
    digits[i] = digits[digits.length - i];
    digits[digits.length - i] = temp;
  }
  digits.push(digits[0]);
  digits.shift();
  return digits.map((x) => Number(x));
}
// console.log(convertNumToReversedArrayOfDigits(2335649976));

function convertNumToReversedArrayOfDigits_2(number = 0) {
  return number
    .toString()
    .split("")
    .map((x) => Number(x))
    .reverse();
}
// console.log(convertNumToReversedArrayOfDigits_2(233564));

function countSheep(array) {
  return array.filter((x) => x === true).length;
}

// console.log(countSheep([true, false, true]));

function oppositeNumber(number) {
  return -number;
}

// console.log(oppositeNumber("2"));

function returnNegative(number) {
  return number < 0 ? number : number == 0 ? 0 : -number;
}
// console.log(returnNegative(7));

//jenny's secret

function greet(name) {
  if (name === "SpecialName") {
    return "Hello, special!";
  }
  return "Hello " + name + "!";
}
// console.log(greet("SpecialName"));

function findNeedle(array = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "needle") return `found the needle at position ${i}`;
  }
}
// console.log(findNeedle(["ht", "dsw", "needle", "grfkg", "fkholtkh"]));

function findNeedle_2(array = []) {
  return `found the needle at position ${array.indexOf("needle")}`;
}
// console.log(findNeedle_2(["ht", "dsw", "needle", "grfkg", "fkholtkh"]));

function countOfPositivesSumOfNegatives(array = []) {
  //loop over the array
  /*initial value of positive nums = 0, initial value of
  sum of negative nums is 0*/
  //increase count if num > 0
  //add to sum if num < 0
  //return [count, sum]
  if (array.length == 0 || !array) return [];
  let count = 0,
    sum = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] > 0 ? count++ : (sum += array[i]);
  }
  return [count, sum];
}
// console.log(countOfPositivesSumOfNegatives());

function doubleChar(string) {
  //split the string
  //loop through array
  //repeat every element
  //join the array
  return (
    string
      .split("")
      // .map((x) => `${x}${x}`)
      .map((x) => x.repeat(2))
      .join("")
  );
}
// console.log(doubleChar("sara"));

function basicMathematicalOperations(operator = "", value1 = 0, value2 = 0) {
  // switch (operator) {
  //   case "+":
  //     return value1 + value2;
  //   case "-":
  //     return value1 - value2;
  //   case "/":
  //     return value1 / value2;
  //   case "*":
  //     return value1 * value2;
  //   default:
  //     return 0;
  // }

  //another solution
  return eval(value1 + operator + value2);
}
// console.log(basicMathematicalOperations("+", 2, 3));

function toSquareRootOrNot(array = []) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    // if (parseInt(Math.sqrt(array[i])) === parseFloat(Math.sqrt(array[i]))) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
      newArray.push(Math.sqrt(array[i]));
    } else {
      newArray.push(Math.pow(array[i], 2));
    }
  }
  return newArray;
}
function toSquareRootOrNot_2(array = []) {
  return array.map((x) =>
    Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x * x
  );
}
// console.log(toSquareRootOrNot_2([4, 2, 5, 49]));

function countByX(value1, value2) {
  let countArray = [];
  for (let i = 1; i <= value2; i++) {
    countArray.push(value1 * i);
  }
  return countArray;
}
// console.log(countByX(2, 5));

function removeStringSpaces(string = "") {
  let newStr = string
    .split("")
    .filter((x) => x !== " ")
    .join("");
  return newStr;
}

// console.log(removeStringSpaces("s r"));

function invertValues(array = []) {
  //loop through the array
  //get the opposite of each number

  // for (let i = 0; i < array.length; i++) {
  //   array[i] = -array[i];
  // }
  // return array;

  return array.map((x) => -x);
}
// console.log(invertValues([1, 2, 3, -4]));

function booleanToString(bool) {
  return bool ? "Yes" : "No";
}
// console.log(booleanToString(true));

function reverseString(string = "") {
  return string.split(" ").reverse().join(" ");
}

// console.log(reverseString("Hello, world"));

function keepHydrated(time) {
  return Math.floor(time * 0.5);
}
// console.log(keepHydrated(6.7));

function numberToString(number) {
  // return number.toString();
  // return number + "";
  return `${number}`;
}
// console.log(numberToString(233));

function calculateAverage(array = []) {
  array.length === 0 && 0;
  return array.reduce((a, b) => a + b, 0) / array.length;

  // array.length === 0 && 0;
  // let sum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }
  // return sum / array.length;
}
// console.log(calculateAverage([1, 2, 3, 4]));

function stringToNumber(string) {
  // return Number(string);
  return +string;
}
// console.log(stringToNumber("123444"));

function countMonkeys(n) {
  let arr = [];
  // for (let i = 1; i <= n; i++) {
  //   arr.push(i);
  // }

  let i = 1;
  while (i <= n) {
    arr.push(i++);
  }
  return arr;
}
// console.log(countMonkeys(9));

function welcome(language) {
  let database = {
    english: "welcome",
    arabic: "ابحرم",
    french: "bienvenue",
    dutch: "welkom",
  };

  if (database[language] === undefined || !language) {
    return "welcome";
  }
  return database[language];
}

// console.log(welcome("fg"));

function sentenceSmash(array) {
  return array.join(" ");
}
// console.log(sentenceSmash(["hello", "world"]));

function switchItUp(num) {
  let numbers = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };
  return numbers[num];
  // switch (num) {
  //   case 0:
  //     return "Zero";
  //   case 1:
  //     return "One";
  //   case 2:
  //     return "Two";
  //   case 3:
  //     return "Three";
  //   case 4:
  //     return "Four";
  //   case 5:
  //     return "Five";
  //   case 6:
  //     return "Six";
  //   case 7:
  //     return "Seven";
  //   case 8:
  //     return "Eight";
  //   case 9:
  //     return "Nine";
  // default:
  // return 'Wrong input'
  // }
}
// console.log(switchItUp(3));

function doIGetBonus(salary, bonus) {
  return bonus ? `\u00A3${salary * 10}` : "\u00A3" + salary;
}
// console.log(doIGetBonus(8000, false));

function removeExeclamationMark(string = "") {
  return string.replace(/!$/, "");
}
// console.log(removeExeclamationMark("h!i!"));

function areYouPlayingBanjo(name = "") {
  // if (name.charAt(0) === "r" || name.charAt(0) === "R") {
  //   return `${name} plays banjo`;
  // }
  // return `${name} does not play banjo`;

  return /^r/gi.test(name)
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

// console.log(areYouPlayingBanjo("rara"));

function removeElements(array = []) {
  // for (let i = 0; i < array.length; i++) {
  //   array.splice(i + 1, 1);
  // }
  // return array;

  return array.filter((x, index) => index % 2 === 0);
}
// console.log(
//   removeElements([
//     "keep",
//     "remove",
//     "keep",
//     "remove",
//     "keep",
//     "remove",
//     "keep",
//     "remove",
//   ])
// );

function transportationOnVacation(days) {
  //calc total cost => $40 for each day
  //for 3 or more days => $20 off
  //for 7 or more days => $50 off
  let cost = days * 40;
  if (days >= 3 && days < 7) {
    cost -= 20;
  } else if (days >= 7) {
    cost -= 50;
  }
  return cost;
}

// console.log(transportationOnVacation(2));

function execlusiveOr(a, b) {
  return a === b ? false : true;
}
// console.log(execlusiveOr(true, false));

function firstNonConsecutive(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] - 1 !== array[i - 1]) {
      return array[i];
    }
  }
  return null;
}
// console.log(firstNonConsecutive([1, 2, 3, 5, 6, 7]));

function cuboidVolume(l, w, h) {
  return l * w * h;
}
// console.log(cuboidVolume(6.3, 2, 5));

class kata {
  static volumeOfCuboid(h, w, l) {
    return h * l * w;
  }
}
// console.log(kata.volumeOfCuboid(1, 2, 3));

function formatDecimal(number) {
  return Number(number.toFixed(2));
}
// console.log(formatDecimal(2.33556));

function dollarsAndCents(num) {
  return `$${num.toFixed(2)}`;
}
// console.log(dollarsAndCents(3.98));

function findPositon(letter) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabets.indexOf(letter) + 1}`;
}
// console.log(findPositon("b"));

function loveFunction(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2 ? true : false;
}
// console.log(loveFunction(2, 9));

/**
 * @param {number} number
 * @returns  number
 */

//convert num to string
// function noBoringZeros(number) {
//   let numString = numberToString(number);
//   while (numString.endsWith(0)) {
//     numString = numString.slice(0, numString.length - 1);
//   }
//   return stringToNumber(numString);
// }
// console.log(noBoringZeros(102000));
function meanOfArray(array) {
  return Math.floor(array.reduce((a, b) => a + b, 0) / array.length);
}
// console.log(meanOfArray([2, 2, 2, 2]));

/**
 * Remove lowercase vowels from a given string
 * @param {string} string
 * @returns string
 */
function shortcut(string) {
  let vowels = "aeiou";
  return string
    .split("")
    .filter((x) => vowels.includes(x) === false)
    .join("");
}
// console.log(shortcut("goodbye"));

/**
 * Remove execlamation marks from a given string
 * @param {string} string
 * @returns string
 */
function removeExeclamationMarks(string) {
  // let result = "";
  // for (let i in string) {
  //   if (string[i] === "!") {
  //     string.slice(i, i + 1);
  //   } else {
  //     result += string[i];
  //   }
  // }
  // return result;

  return string.replace(/[!]/g, "");
}
// console.log(removeExeclamationMarks("s!se!"));

/**
 * Reverses a given string
 * @param {string} str
 * @returns string
 */
function reverseString(str) {
  // return str.split("").reverse().join("");
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
// console.log(reverseString("hello"));

/**
 * Multiply all array numbers
 * @param {number[]} arr
 * @returns number
 */
function grow(arr) {
  // return arr.reduce((x, y) => x * y, 1);
  let product = 1;
  for (num of arr) {
    product *= num;
  }
  return product;
}
// console.log(grow([1, 2, 3]));

/**
 * Checks if a given string is a palindrome
 * @param {string} str
 * @returns string
 */
function isPalindrome(str) {
  str = str.toLocaleLowerCase();
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str ? true : false;
}
// console.log(isPalindrome("Madam"));

var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};
// console.log(summation(3));

function printArray(array) {
  return array.join(",");
}

//How many stairs will Suzuki climb in 20 years?
function stairsIn20(s) {
  return (
    s
      .map((x) => {
        return x.reduce((a, b) => a + b, 0);
      })
      .reduce((a, b) => a + b, 0) * 20
  );
}

function removeChar(str = "") {
  return str.slice(1, str.length - 1);
}
// console.log(removeChar("lalo"));

function squareSum(numbers) {
  return numbers.map((x) => Math.pow(x, 2)).reduce((a, b) => a + b, 0);
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let newArr = args.sort((a, b) => a - b);
    return newArr[0];
  }
}
// console.log(SmallestIntegerFinder.prototype.findSmallestInt([3, 7, 1, 9]));

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) return true;
  return false;
}

function fakeBin(x) {
  x = x.replace(/[0-4]/g, 0);
  x = x.replace(/[5-9]/g, 1);
  return x;
  //  return x
  //    .split("")
  //    .map((x) => (x < 5 ? "0" : "1"))
  //    .join("");
}
// console.log(fakeBin("45385593107843568"));

// Sum Numbers
function sum(numbers) {
  "use strict";
  return !numbers ? 0 : numbers.reduce((a, b) => a + b, 0);
}

//convert fom lowercase to uppercase
/**
 * Here is a function that does it (very old-school and manual) :

Loop through the string
If you encounter a lower case character, in other words, if you are at a character whose ASCII code is in the range [97,122], which is the range of the lower case alphabet characters, subtract 32 from it's ASCII code, because the difference between a lower case alpha-char and it's upper case form in ASCII is 32, then add it to a new string.
Else, add the character as is.

 */

function makeUpperCase(str = "") {
  let newstring = "";
  for (let i in str) {
    let thisChar = str.charCodeAt(i);
    if (thisChar >= 97 && thisChar <= 122) {
      newstring += String.fromCharCode(thisChar - 32);
    } else {
      newstring += str[i];
    }
  }
  return newstring;
}

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
function feast(beast, dish) {
  return (
    beast.charAt(0) === dish.charAt(0) &&
    beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
  );
}
function updateLight(current) {
  return current === "green" ? "yellow" : current === "red" ? "green" : "red";
}
function setAlarm(employed, vacation) {
  return employed && !vacation ? true : false;
}
const quarterOf = (month) => {
  return month >= 1 && month <= 3
    ? 1
    : month >= 4 && month <= 6
    ? 2
    : month >= 7 && month <= 9
    ? 3
    : 4;
};

function addLength(str) {
  // let arr = str.split(" ");
  // let result = [];
  // for (let item of arr) {
  //   result.push(`${item} ${item.length}`);
  // }
  // return result;
  return str.split(" ").map((x) => `${x} ${x.length}`);
}
// console.log(addLength("ki kki"));

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}
function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}
function correct(string) {
  string = string.replace(/[5]/g, "S");
  string = string.replace(/[0]/g, "O");
  string = string.replace(/[1]/g, "I");
  return string;
}

/**
 * Compare your score with your peers'score & return true if you're better
 * @param {number[]} classPoints
 * @param {number} yourPoints
 * @return boolean
 */
function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  return yourPoints > average ? true : false;
}
// console.log(betterThanAverage([1, 2, 3], 2));

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
// console.log(reverseWords("hello world!"));

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  return bmi <= 18.5
    ? "Underweight"
    : bmi <= 25.0
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
}
function divisibleBy(numbers, divisor) {
  return numbers.filter((x) => x % divisor === 0);
}

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}
function sumStr(a, b) {
  return (+a + +b).toString();
}
// console.log(sumStr("1", "2"));

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
// console.log(
//   twoSort([
//     "bitcoin",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps",
//   ])
// );

function expressionMatter(a, b, c) {
  let try1 = a + b + c;
  let try2 = a * b * c;
  let try3 = c * (a + b);
  let try4 = a * (b + c);
  let arr = [try1, try2, try3, try4];
  return arr.sort((a, b) => a - b)[arr.length - 1];
}
// console.log(expressionMatter(3, 5, 7));

function testEven(n) {
  return n % 2 === 0;
}

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((x) => geese.includes(x) !== true);
}
// console.log(
//   gooseFilter([
//     "Mallard",
//     "Hook Bill",
//     "African",
//     "Crested",
//     "Pilgrim",
//     "Toulouse",
//     "Blue Swedish",
//   ])
// );

function between(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}
function move(position, roll) {
  return position + roll * 2;
}
function distinct(a) {
  return [...new Set(a)];
}
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return [laLigaGoals, copaDelReyGoals, championsLeagueGoals].reduce(
    (a, b) => a + b,
    0
  );
}
function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

//check for minSalary & maxSalary in the input objects
//compare them
/*return true if candidate's salary is 
less than or equal maxSalary of th job */

function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) {
    throw Error("Error");
  }
  return (
    candidate.minSalary - (candidate.minSalary * 10) / 100 <= job.maxSalary
  );
}

function isOpposite(s1, s2) {
  let str = "";
  for (let i in s1) {
    if (s1[i].toLowerCase() === s1[i]) {
      str += s1[i].toUpperCase();
    } else {
      str += s1[i].toLowerCase();
    }
  }
  if (!s1 && !s2) return false;
  return str === s2;
}
function removeEveryOther(arr) {
  return arr.filter((a, index) => index % 2 === 0);
}

function stringy(size) {
  let string = "";

  for (let i = 1; i <= size; i++) {
    if (i % 2 !== 0) {
      string += 1;
    } else {
      string += 0;
    }
  }
  return string;
}
function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      arr.push(i);
    }
  }
  return arr;
}
function pipeFix(numbers) {
  let arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
}
/**
 * Create an application that will display the number of
 *  kilometers per liter (output) based on the number of 
 * miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata:

1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres
 */
function converter(mpg) {
  return +(mpg * (1.609344 / 4.54609188)).toFixed(2);
}

/**
 * Converts binary to decimal number
 * @param {number} bin
 * @returns number
 */
function binToDec(bin) {
  return parseInt(bin, 2);
}

function lowercaseCount(str) {
  let num = 0;
  for (let i in str) {
    if (/[a-z]/g.test(str[i])) {
      num++;
    }
  }
  return num;
}
// console.log(lowercaseCount("abcABC123"));

function drawStairs(n) {
  let str = "";
  let result = "";
  for (let i = 0; i < n; i++) {
    i === 0 ? (str += "") : (str += " ");
    i === n - 1 ? (result += `${str}I`) : (result += `${str}I\n`);
  }
  return result;
}
// console.log(drawStairs(3));

solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  let mass = givenMass1 / molarMass1 + givenMass2 / molarMass2;
  return (mass * 0.082 * (temp + 273.15)) / volume;
};

function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((x) => x.split("").join(separator))
    .join(" ");
}
// console.log(splitAndMerge("My name is John", "-"));

function sumMul(n, m) {
  console.log(n, m);
  if (m <= 0 || n <= 0) return "INVALID";
  let sum = 0;
  for (let i = n; i < m; i++) {
    if (i % n === 0) {
      sum += i;
    }
  }
  return sum;
}
function greet(language) {
  let langs = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  return Object.keys(langs).includes(language)
    ? langs[language]
    : langs["english"];
}
// console.log(greet("irish"));

function capitalizeWord(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}
// console.log(capitalizeWord("world"));

function cookie(x) {
  return typeof x === "string"
    ? `Who ate the last cookie? It was Zach!`
    : x === +x
    ? `Who ate the last cookie? It was Monica!`
    : `Who ate the last cookie? It was the dog!`;
}
// console.log(cookie(true));

function whoIsPaying(name) {
  return name.length < 3 ? [`${name}`] : [`${name}`, `${name.slice(0, 2)}`];
}

function dutyFree(normPrice, discount, hol) {
  let savingsPerBott = normPrice * (discount / 100);
  return Math.floor(hol / savingsPerBott);
}
function noBoringZeros(n) {
  let num = String(n);
  while (num[num.length - 1] === "0") {
    num = num.slice(0, -1);
  }
  return Number(num);
}
// console.log(noBoringZeros(102000));

const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : (l + w) * 2;
};

function strCount(str, letter) {
  let count = 0;
  for (let i in str) {
    str[i] === letter ? count++ : count;
  }
  return count;
}

function enough(cap, on, wait) {
  let passCantGo = cap - (on + wait);
  return passCantGo > 0 ? 0 : Math.abs(passCantGo);
}
// console.log(enough(20, 5, 5));

function tripleTrouble(one, two, three) {
  let i = 0;
  let str = "";
  let arr = [];
  while (i < one.length) {
    str += one[i];
    str += two[i];
    str += three[i];
    arr.push(str);
    str = "";
    i++;
  }
  return arr.join("");
}
// console.log(tripleTrouble("aaaa", "bbbb", "cccc"));

function position(letter) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alpha.indexOf(letter) + 1}`;
}
// console.log(position("a"));

function getChar(c) {
  return String.fromCharCode(c);
}
// console.log(getChar(55));

function peopleWithAgeDrink(old) {
  return old < 14
    ? "drink toddy"
    : old < 18
    ? "drink coke"
    : old < 21
    ? "drink beer"
    : "drink whisky";
}
function findAverage(array) {
  return array.length > 0 ? array.reduce((a, b) => a + b, 0) / array.length : 0;
}
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}
// console.log(seatsInTheater(16, 11, 5, 3));

function findNeedle(haystack) {
  return (
    haystack.includes("needle") &&
    `found the needle at position ${haystack.indexOf("needle")}`
  );
}

function mango(quantity, price) {
  let total = quantity - Math.floor(quantity / 3);
  return total * price;
}
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : m * n;
}
function booleanToString(b) {
  return `${b}`;
}
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}
function contamination(text, char) {
  if (text === "" || char === "") return "";
  return text.split("").fill(char).join("");
}

function pillars(numPill, dist, width) {
  if (numPill <= 1) return 0;
  let d = (numPill - 1) * dist * 100 + numPill * width;
  return d - width * 2;
}
function find(array = [], element) {
  return array.includes(element) ? array.indexOf(element) : "Not found";
}
// console.log(find([1, 2, 3], 2));

function validateHello(greetings) {
  let res = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/gi.test(greetings);
  return res;
}
const getFactorial = (num) => {
  if (num <= 1n) return 1n;
  return num * getFactorial(num - 1n);
};

function amIWilson(p) {
  p = BigInt(p);
  let fac = getFactorial(p - 1n);
  let wilsonNum = (fac + 1n) / (p * p);
  // console.log(wilsonNum);
  return wilsonNum === parseInt(wilsonNum) ? true : false;
}
// console.log(amIWilson(563));

function oddCount(n) {
  let arr = [];
  for (let i = n - 1; i >= 1; i--) {
    if (i % 2 == 0) {
      continue;
    }
    arr.push(i);
  }
  console.log(arr);
  return arr.length;
}
// console.log(oddCount(7));
function doubleChar(str) {
  return str
    .split("")
    .map((x) => x.repeat(2))
    .join("");
}

