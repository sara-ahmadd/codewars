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
  let matched = [];
  let long = a.length > b.length ? a : b;
  let short = a.length < b.length ? a : b;

  for (let i = 0; i < long.length; i++) {
    let position = short.indexOf(long[i]);
    if (position >= 0) {
      matched.push(long[i]);
      short = short.split("");
      short.splice(position, 1);
      short = short.join("");
    }
  }
  for (let i = 0; i < matched.length; i++) {
    let position = long.indexOf(matched[i]);
    if (position >= 0) {
      long = long.split("");
      long.splice(position, 1);
      long = long.join("");
    }
  }
  return long.length;
}
console.log(levenshtein("kitten", "sitting"));
