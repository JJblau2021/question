// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function (matrix) {
//   let directions = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0],
//   ];
//   let l = matrix.length,
//     m = matrix[0].length;
//   let i = 0,
//     j = 0;
//   let dIndex = 0;
//   let num = matrix[i][j];
//   matrix[i][j] = null;
//   let ret = [num];

//   while (true) {
//     if (!addNextNum(dIndex)) {
//       dIndex = (dIndex + 1) % 4;
//       if (!addNextNum(dIndex)) {
//         return ret;
//       }
//     }
//   }

//   function addNextNum(dIndex) {
//     let [di, dj] = directions[dIndex];
//     let newi = i + di,
//       newj = j + dj;
//     if (matrix[newi] && (matrix[newi][newj] ?? "") !== "") {
//       ret.push(matrix[newi][newj]);
//       i = newi;
//       j = newj;
//       matrix[newi][newj] = null;
//       return true;
//     }
//     return false;
//   }
// };

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let upper = 0,
    right = matrix[0].length - 1,
    down = matrix.length - 1,
    left = 0;
  let ret = [];
  let i = 0,
    j = 0;
  while (true) {
    while (j < right) {
      ret.push(matrix[i][j]);
      j++;
    }
    if (upper++ === down) break;
    while (i < down) {
      ret.push(matrix[i][j]);
      i++;
    }
    if (right-- === left) break;
    while (j > left) {
      ret.push(matrix[i][j]);
      j--;
    }
    if (down-- === upper) break;
    while (i > upper) {
      ret.push(matrix[i][j]);
      i--;
    }
    if (left++ === right) break;
  }
  ret.push(matrix[i][j]);
  return ret;
};

spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
