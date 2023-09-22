function distMoney(money, children) {
  if (money < children) {
    return -1;
  }
  // let cnt = Math.floor(money / 8)
  // let rest = money % 8
  // let diff = children - cnt
  // if (diff <= 0) return children - Number(rest > 0 || diff < 0)
  // if (diff === 1) {
  //     if (rest === 4 || rest === 0) {
  //         return cnt - 1
  //     }
  //     return cnt
  // }
  // if (rest >= diff) return cnt
  // let restChildren = diff - rest
  // return cnt - Math.ceil(restChildren / 7)
  // let left = - 1
  let ans = 0;
  let lastChildMoney = 0;
  let oneCnt = 0;
  for (let i = 0; i < children; i++) {
    if (money >= 8) {
      ans++;
      money -= 8;
      // left ++
      lastChildMoney = 8;
      continue;
    }
    if (money === 4) {
      money -= 3;
      lastChildMoney = 3;
      // left ++
      continue;
    }
    if (money > 0) {
      if (lastChildMoney === 8 || lastChildMoney === 0) {
        lastChildMoney = money;
        // left ++
      }
      if (money === 1) {
        oneCnt++;
      }
      money = 0;
      continue;
    }
    oneCnt++;
    if (lastChildMoney === 5) {
      money++;
      lastChildMoney -= 2;
      continue;
    }
    if (lastChildMoney === 1 || lastChildMoney === 8) {
      ans--;
      lastChildMoney = 7;
      // left --
      continue;
    }
    if (lastChildMoney === 2) {
      oneCnt++;
    }
    lastChildMoney--;
  }
  if (money === 0 || oneCnt >= 0) {
    return ans;
  }
  if (lastChildMoney + money === 4 || lastChildMoney === 8) {
    return ans - 1;
  }
  return ans;
}

const a = distMoney(8, 2);
console.log("> %ca", "color: #218eff", " - ", a);
