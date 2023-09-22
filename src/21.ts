function punishmentNumber(n: number): number {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += getResult(i);
  }
  return ans;
}

function getResult(n: number): number {
  let ans = n * n;
  let str = ans.toString();
  let l = str.length;

  let bucket: number[] = [];

  function checkStr(bucket: number[], target: number): boolean {
    let i = bucket[bucket.length - 1] || 0;
    if (i === l) {
      let res = getBucketResult(bucket);
      return res === target;
    }
    for (let j = i + 1; j <= l; j++) {
      bucket.push(j);
      let result = checkStr(bucket, target);
      if (result) return true;
      bucket.pop();
    }
    return false;
  }

  function getBucketResult(bucket: number[]): number {
    let start = 0;
    let ans = 0;
    for (let end of bucket) {
      ans += Number(str.slice(start, end));
      start = end;
    }
    return ans;
  }

  if (checkStr(bucket, n)) {
    return ans;
  }
  return 0;
}

punishmentNumber(11);
