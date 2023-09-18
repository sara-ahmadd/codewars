function kebabize(str) {
  str = str.replace(/([0-9])/g, "");
  str = str.split(/(?=[A-Z])/g).map((x) => x.toLowerCase());
  return str.join("-");
}
// console.log(kebabize("CamelsHave3ThreeHumps"));

function alignRight(text, width) {
  let s = "";
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    s += text[i];
    if (s.length === width) {
      if (s.endsWith(" ")) {
        s = s.slice(0, s.length - 1);
      }
      arr.push(s);
      s = "";
    }
  }
  arr.push(s);
  arr = arr.map((x) => x.padStart(width, " "));
  return arr.join("\n");
}
console.log(
  alignRight(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    62
  )
);
