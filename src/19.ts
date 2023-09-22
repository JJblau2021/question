async function fn(source: (() => Promise<any>)[], max: number) {
  let s = new Set();
  let promises = source.map((p) => {
    let fn = () => p().then(() => s.delete(fn));
    return fn;
  });

  let i = 0;
  while (i < promises.length) {
    let fn = promises[i];
    if (s.size < max) {
      s.add(fn);
      fn();
      i++;
      continue;
    }
  }
  while (true) {
    if (s.size === 0) {
      console.log("end");
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
    let fn = promises[i];
    if (s.size < max) {
      s.add(fn);
      fn();
      i++;
      continue;
    }
  }
}

let source = Array.from(
  { length: 10 },
  (_, i) => () =>
    new Promise((res) =>
      setTimeout(() => {
        console.log(i);
        res(i);
      }, 1000)
    )
);
fn(source, 3);
