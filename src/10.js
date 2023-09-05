function tmp(nums) {
  let sum = nums.reduce((a, b) => a + b);
  if (sum % 2 === 1) return -1;
  let max = sum / 2;
  let sorted = nums.sort((a, b) => b - a);
  let bp = new Array(nums.length).fill(false);
  if (dfs(sorted, bp, max)) {
    return bp.reduce((a, b) => (b ? a + 1 : a), 0);
  }
  return -1;
}

function dfs(arr, bucket, sum) {
  if (sum === 0) {
    res = bucket;
    return true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (bucket[i]) continue;
    if (arr[i] > sum) continue;
    bucket[i] = true;
    if (dfs(arr, bucket, sum - arr[i])) return true;
    bucket[i] = false;
  }
  return false;
}

console.log(tmp([1, 5, 2, 2, 5, 1, 2]));
