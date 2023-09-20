/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  let l = prerequisites.length;
  let courses = new Array(numCourses).fill(0).map(() => new Set());
  let isPre = new Array(numCourses)
    .fill(0)
    .map(() => new Array(numCourses).fill(false));
  for (let course of prerequisites) {
    let [a, b] = course;
    courses[b].add(a);
  }
  let list = [];
  for (let i = 0; i < numCourses; i++) {
    if (courses[i].size === 0) {
      list.push(i);
      courses[i] = null;
    }
  }
  while (list.length) {
    let courseNo = list.shift();
    for (let i = 0; i < numCourses; i++) {
      let course = courses[i];
      if (!course) {
        continue;
      }

      if (course.has(courseNo)) {
        isPre[courseNo][i] = true;
        for (let j = 0; j < numCourses; j++) {
          isPre[j][i] ||= isPre[j][courseNo];
        }
        course.delete(courseNo);
        if (course.size === 0) {
          courses[i] = null;
          list.push(i);
        }
      }
    }
  }
  for (let i = 0; i < queries.length; i++) {
    let [a, b] = queries[i];
    queries[i] = isPre[a][b];
  }
  return queries;
};

let a = checkIfPrerequisite(
  5,
  [
    [3, 4],
    [2, 3],
    [1, 2],
    [0, 1],
  ],
  [
    [0, 4],
    [4, 0],
    [1, 3],
    [3, 0],
  ]
);
console.log(a);
