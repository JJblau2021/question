/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let courses = [];
  for (let i = 0; i < prerequisites.length; i++) {
    const [a, b] = prerequisites[i];
    let aNeed = courses[a];
    if (aNeed) {
      aNeed.add(b);
    } else {
      courses[a] = new Set([b]);
    }
    let bNeed = courses[b];
    if (!bNeed) {
      courses[b] = new Set();
    }
  }
  let stk = [];
  function checkCourse(course, index, stk, preIndex = -1) {
    let cSet = course[index];
    if (!cSet) return;
    if (preIndex !== -1) {
      cSet.delete(preIndex);
    }
    if (cSet.size === 0) {
      stk.push(index);
      course[index] = null;
    }
  }
  for (let i = 0; i < courses.length; i++) {
    checkCourse(courses, i, stk);
  }
  let res = 0;
  while (stk.length) {
    let c = stk.shift();
    res++;
    for (let i = 0; i < courses.length; i++) {
      checkCourse(courses, i, stk, c);
    }
  }
  return res >= numCourses;
};

canFinish(5, [
  [1, 4],
  [2, 4],
  [3, 1],
  [3, 2],
]);
