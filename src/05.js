// function dfs(arr, bucket, ind, ave) {
//   if (ind === arr.length) {
//     return true;
//   }
//   for (let i = 0; i < bucket.length; i++) {
//     if (bucket[i] + arr[ind] <= ave) {
//       bucket[i] += arr[ind];
//       if (dfs(arr, bucket, ind + 1, ave)) {
//         return true;
//       }
//       bucket[i] -= arr[ind];
//     }
//   }
//   return false;
// }

// function splitArray(arr) {
//   const sum = arr.reduce((acc, cur) => acc + cur, 0);
//   const hi = Math.max(...arr);
//   for (let i = hi; i <= sum; i++) {
//     if (sum % i === 0) {
//       const lev = sum / i;
//       const bucket = new Array(lev).fill(0);
//       if (dfs(arr, bucket, 0, i)) {
//         return i;
//       }
//     }
//   }
//   return -1;
// }

function splitArr(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  let max = Math.max(...arr);
  for (let i = max; i <= sum; i++) {
    let bucket = new Array(i).fill(0);
    if (dfs(arr, bucket, 0, i)) {
      return i;
    }
  }
  return -1;
}

function dfs(arr, bucket, i, a) {
  if (i === arr.length) {
    return true;
  }
  for (let j = 0; j < bucket.length; j++) {
    if (bucket[j] + arr[i] <= a) {
      bucket[j] += arr[i];
      if (dfs(arr, bucket, i + 1, a)) {
        return true;
      }
      bucket[j] -= arr[i];
    }
  }
}
const arr = [1, 2, 3, 4, 5];
const k = 3;
console.log(splitArr(arr, k)); // 5
