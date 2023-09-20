class Data {
  constructor(data) {
    this.data = data;
  }
  where(cb) {
    let res = [];
    let l = this.data.length;
    for (let i = 0; i < l; i++) {
      let item = this.data[i];
      if (Array.isArray(item)) {
        res.push(item.filter(cb));
        continue;
      }
      if (cb(item, i)) {
        res.push(item);
      }
    }
    this.data = res;
    return this;
  }
  orderBy(key, desc) {
    function sortFn(obj1, obj2) {
      return (obj1[key] - obj2[key]) * (desc ? -1 : 1);
    }
    this.data.sort((a, b) => {
      if (Array.isArray(a)) {
        a = a.sort(sortFn);
        b = b.sort(sortFn);
        return 0;
      }
      return sortFn(a, b);
    });
    return this;
  }
  groupBy(key) {
    let keyMap = new Map();
    let lastIndex = -1;
    console.log(this.data.flat());
    this.data = this.data.flat().reduce((prev, cur) => {
      let curKey = cur[key];
      let curIndex = keyMap.get(curKey);
      if (curIndex !== void 0) {
        prev[curIndex].push(cur);
      } else {
        prev[++lastIndex] = [cur];
        keyMap.set(curKey, lastIndex);
      }
      return prev;
    }, []);
    return this;
  }
  execute() {
    return this.data;
  }
}

function query(data) {
  return new Data(data);
}

const data = [
  { name: "foo", age: 16, city: "shanghai" },
  { name: "bar", age: 24, city: "hangzhou" },
  { name: "fiz", age: 22, city: "shanghai" },
  { name: "baz", age: 19, city: "hangzhou" },
];

let a = query(data)
  .where((item) => item.age > 18)
  .orderBy("age")
  .groupBy("city")
  .execute();
console.log(JSON.stringify(a));
