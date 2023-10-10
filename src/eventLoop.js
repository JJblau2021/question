setTimeout(console.log, 0, 1);
new Promise((res) => {
  console.log(2);
  res(3);
})
  .then((num) => {
    setTimeout(console.log, 0, num);
    console.log(4);
    return 5;
  })
  .then(console.log);
