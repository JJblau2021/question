/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  function replaceStr(s, start, end) {
    let key = s.slice(start + 1, end);
    let value = "";
    for (let i = 0; i < knowledge.length; i++) {
      if (key === knowledge[i][0]) {
        value = knowledge[i][1];
        break;
      }
    }
    return s.replace(`(${key})`, value || "?");
  }

  let ans = s;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      let start = i;
      let end = i + 1;
      while (s[end] !== ")") {
        end++;
      }
      ans = replaceStr(ans, start, end);
      i = end;
    }
  }
  return s;
};

const a = evaluate("(name)is(age)yearsold", [
  ["name", "bob"],
  ["age", "two"],
]);
console.log("> %ca", "color: #218eff", " - ", a);
