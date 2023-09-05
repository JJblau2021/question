function tmp(s1, s2) {
  let l = s1.length;
  let right = 1;
  let maxL = 0;
  let res = "";
  for (let left = 0; left < l - 1; left++) {
    while (true) {
      right = Math.max(right, left + 1);
      if (right > l) {
        return res;
      }
      let subStr = s1.slice(left, right);
      if (s2.includes(subStr)) {
        if (subStr.length > maxL) {
          maxL = subStr.length;
          res = subStr;
        }
        right++;
      } else {
        break;
      }
    }
  }
  return res;
}

tmp("abcde", "cdex");
