/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let l = nums.length;
  if (k === 0) return 0;
  if (l + 1 === 2 * k) {
    return nums.reduce(
      (prev, cur, index) => (index % 2 ? prev : prev + cur),
      0
    );
  }
  if (l + 1 < 2 * k) {
    return Number.MAX_SAFE_INTEGER;
  }
  let [first, second, ...rest] = nums;
  return Math.min(
    Math.max(first, minCapability(rest, k - 1)),
    minCapability([second, ...rest], k)
  );
};

const a = minCapability([1, 2, 3, 4], 2);
console.log("> %ca", "color: #218eff", " - ", a);
