/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  let l = courses.length;
  if (l < 3) {
    let ans = 0;
    for (let i = 0; i < l; i++) {
      if (courses[i][1] >= courses[i][0]) {
        ans++;
      }
    }
    return ans;
  }
  courses.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  let list = [];
  for (let i = 0; i < 2; i++) {
    let c = courses.shift();
    if (c[1] >= c[0]) {
      list.push(c);
    }
  }
  if (list.length < 2) {
    return list.length;
  }
  let ans = 0;
  let cost = 0;
  while (list.length) {
    let ret = learn(list);
    if (ret) {
      return ret;
    }
  }

  function learn(list) {
    let c = list.shift();
    ans++;
    let curCost = c[0];
    cost += curCost;
    if (courses.length === 0) {
      return ans + list.length;
    }
    let nextCourse = courses.shift();
    nextCourse[1] -= cost;
    if (nextCourse[1] < nextCourse[0]) {
      return ans + list.length;
    }
    if (list[0]) {
      list[0][0] -= curCost;
    }
    list.push(nextCourse);
  }
  return ans;
};

const a = scheduleCourse([
  [1, 2],
  [2, 13],
  [10, 13],
  [20, 32],
]);
