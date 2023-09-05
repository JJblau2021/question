function dfs(nums, bucket, i, lSum) {
  if (i === nums.length) {
    return true;
  }
  for (let j = 0; j < bucket.length; j++) {
    if (bucket[j] + nums[i] > lSum) continue;
    bucket[j] += nums[i];
    if (dfs(nums, bucket, i + 1, lSum)) return true;
    bucket[j] -= nums[i];
  }
  return false;
}

function permutation(nums) {
  let lMax = nums.reduce((a, b) => a + b);
  let lMin = Math.max(...nums);
  for (let l = lMin; l <= lMax / 2; l++) {
    if (lMax % l !== 0) continue;
    let bucket = new Array(l).fill(0);
    if (dfs(nums, bucket, 0, l)) return l;
  }
  return -1;
}

console.log(permutation([1, 1, 2, 2, 3]));
