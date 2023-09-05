function tmp(str) {
  let l = str.length;
  let resStr = "";

  for (let left = 0; left < l; left++) {
    let cl = str[left];
    if (/[0-9]/.test(cl)) {
      let subStr = findSubStr(str, left + 2);
      left += subStr.length + 2;
      let tmpStr = tmp(subStr);
      for (let i = 0; i < Number(cl); i++) {
        resStr += tmpStr;
      }
      continue;
    }
    resStr += cl;
  }
  return resStr;
}

function findSubStr(str, start) {
  let l = str.length;
  let cnt = 1;
  for (let i = start; i < str.length; i++) {
    if (str[i] === "[") {
      cnt++;
      continue;
    }
    if (str[i] === "]") {
      cnt--;
      if (cnt === 0) {
        return str.slice(start, i);
      }
    }
  }
}

const a = tmp("3[c]2[a2[b]]");
console.log(a);
