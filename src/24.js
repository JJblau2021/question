/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = height.length;
  let left = 0,
    right = l - 1;
  let ret = 0;
  while (left < right) {
    let h;
    if (height[left] < height[right]) {
      h = height[left];
      left++;
    } else {
      h = height[right];
      right--;
    }
    ret = Math.max(ret, h * (right - left + 1));
  }
  return ret;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
