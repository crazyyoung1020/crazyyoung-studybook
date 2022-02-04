let arr = [3, 2, 1, 1, 2, 4, 5, 2];

let res = [];

for (let e of arr) {
  setTimeout(() => {
    res.push(e);
  }, e * 10);
}
