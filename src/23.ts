function sumDistance(nums: number[], s: string, d: number): number {
  let lefts: number[] = [];
  let rights: number[] = [];
  let l = nums.length;
  for (let i = 0; i < l; i++) {
    if (s[i] === "R") {
      rights.push(nums[i]);
      continue;
    }
    lefts.push(nums[i]);
  }
  let ret = getSubDistance(lefts);
  ret += getSubDistance(rights);
  let ll = lefts.length;
  let lr = rights.length;
  if (lr === 0 || ll === 0) return ret;
  for (let i = 0; i < lr; i++) {
    let subRet = 0;
    for (let j = 0; j < ll; j++) {
      let distance = rights[i] - lefts[j] + d * 2;
      subRet = incrementDistance(subRet, distance);
    }
    ret = incrementDistance(ret, subRet);
  }
  return ret;
}

function getSubDistance(nums: number[]) {
  let l = nums.length;
  let ret = 0;
  for (let i = 0; i < l - 1; i++) {
    for (let j = i + 1; j < l; j++) {
      ret = incrementDistance(ret, nums[i] - nums[j]);
    }
  }
  return ret;
}

function incrementDistance(old: number, num: number) {
  old += Math.abs(num);
  old %= 10 ** 9 + 7;
  return old;
}

sumDistance([-10, -13, 10, 14, 11], "LRLLR", 2);
