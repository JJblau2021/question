function tmp(str, n) {
  if (n === 0) return "";
  let l = str.length;
  let res = l - n;
  let s = str[0];
  let start = 1;
  for (let i = 1; i < res - 1; i++) {
    if (str[i] < str[i - 1]) {
      s = str[i];
      start = i + 1;
    }
  }
  return s + tmp(str.slice(start), n - 1);
}

const a = tmp("214356", 3);
console.log(a);
