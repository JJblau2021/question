function fn(a, xSum) {
  let sorted = a.sort((a, b) => b - a);
  let l = sorted.length;
  let left = Math.floor(xSum / 4);
  let ans = 0;
  let cntEnd = 0;
  for (let right = 0; right < l; right++) {
    ans += sorted[right];
    if (right < left) {
      // step 1： 贪心分配
      ans += a[right] * 3 * 0.1;
      continue;
    }
    if (right === left) {
      let cnt = xSum % 4;
      if (cnt > 1) {
        // step 2： 贪心分配
        ans += a[right] * (cnt - 1) * 0.1;
        continue;
      }
      left--;
      continue;
    }
    if (cntEnd === 3) {
      left--;
      cntEnd = 0;
    }
    if (left < 0) {
      break;
    }
    if (a[right] * 2 > a[left]) {
      cntEnd++;
      ans -= a[left] * 0.1;
      continue;
    }
    ans -= a[right] * 0.2;
  }
  return ans;
}

fn([200, 300, 100], 15);
