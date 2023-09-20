/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  let ans = new Array(8).fill(null);
  let steps = [
    [1, 1],
    [1, 0],
    [1, -1],
    [0, 1],
    [0, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];
  for (let i = 0; i < queens.length; i++) {
    for (let j = 0; j < steps.length; j++) {
      let res = checkQueen(queens[i], j, ans, king, steps[j]);
      if (res) {
        break;
      }
    }
  }
  return ans.filter(Boolean);
};

function checkQueen(queen, index, ans, king, step) {
  let [kx, ky] = king;
  let [sx, sy] = step;
  let dx = queen[0] - king[0];
  let dy = queen[1] - king[1];
  if (dx * sx < 0 || dy * sy < 0) {
    return false;
  }
  let distanc = Math.abs(dx) || Math.abs(dy);
  if (dx * sy === sx * dy) {
    let oldQueen = ans[index];
    if (!oldQueen) {
      ans[index] = queen;
      return true;
    }
    let [qx1, qy1] = oldQueen;
    let distanc1 = Math.abs(qx1 - kx) || Math.abs(qy1 - ky);
    if (distanc < distanc1) {
      ans[index] = queen;
    }
    return true;
  }
  return false;
}

queensAttacktheKing(
  [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 4],
    [3, 5],
    [4, 4],
    [4, 5],
  ],
  [3, 3]
);
