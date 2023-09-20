var repairCars = function (ranks, cars) {
  let bucket = new Array(ranks.length).fill(0);
  let cost = [...ranks];
  for (let car = 1; car <= cars; car++) {
    let target = 0;
    let min = cost[0];
    for (let i = 1; i < cost.length; i++) {
      if (cost[i] < min) {
        target = i;
        min = cost[i];
      }
    }
    bucket[target]++;
    cost[target] = ranks[target] * (bucket[target] + 1) ** 2;
  }
  let ans = bucket[0] ** 2 * ranks[0];
  for (let i = 1; i < ranks.length; i++) {
    ans = Math.min(bucket[i] ** 2 * ranks[i]);
  }
  return ans;
};

console.log(repairCars([1, 2, 3, 4], 10));
