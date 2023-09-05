let ans = [];

function dfs(str, flags, i, res) {
  if (i === str.length) return ans.push(res.join(""));
  for (let j = 0; j < str.length; j++) {
    if (flags[j]) continue;
    if (j > 0 && str[j] === str[j - 1] && !flags[j - 1]) {
      continue;
    }
    flags[j] = true;
    res.push(str[j]);
    dfs(str, flags, i + 1, res);
    flags[j] = false;
    res.pop();
  }
}

function permutation(str) {
  let flags = new Array(str.length).fill(false);
  let res = [];
  dfs(str, flags, 0, res);
  return ans;
}

console.log(permutation("abbc"));
