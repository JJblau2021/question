function fn(nums: number[]) {
  let left = 0;
  let ans = {
    start: 0,
    end: 0,
    sum: 0,
  };
  let curSum = 0;

  for (let right = 0; right < nums.length; right++) {
    curSum = curSum + nums[right];
    if (curSum > ans.sum) {
      ans.sum = curSum;
      ans.end = right;
      ans.start = left;
    }
    if (curSum < 0) {
      left = right + 1;
      curSum = 0;
    }
  }
  console.log(ans.start + 1, ans.end + 1, ans.sum);
}

fn([1, 2, -3, 2, 0]);
