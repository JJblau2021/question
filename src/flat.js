function flat(array) {
  return array.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return [...prev, ...flat(cur)];
    }
    return [...prev, cur];
  }, []);
  // let ret = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (Array.isArray(array[i])) {
  //     let subArray = flat(array[i]);
  //     ret.push(...subArray);
  //     continue;
  //   }
  //   ret.push(array[i]);
  // }
  // return ret;
}

const exampleArray = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
  [10],
  11,
  [12, [13, [14, [15]]]],
];

const a = flat(exampleArray);
console.log("> %ca", "color: #218eff", " - ", a);
