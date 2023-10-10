/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let xSet = new Set();
    let ySet = new Set();
    let zSet = new Set();
    for (let j = 0; j < 9; j++) {
      let x = board[i][j];
      let y = board[j][i];
      let zm = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      let zn = (i % 3) * 3 + (j % 3);
      let z = board[zm][zn];
      if (!check(xSet, x) || !check(ySet, y) || !check(zSet, z)) {
        return false;
      }
    }
  }
  return true;
};

function check(set, val) {
  if (val === ".") {
    return true;
  }
  if (set.has(val)) {
    return false;
  }
  set.add(val);
  return true;
}

isValidSudoku([
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
]);
