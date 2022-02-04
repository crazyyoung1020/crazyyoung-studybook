function shuffle(a) {
  for (let i = 0; i < a.length; i++) {
    let j = Math.floor(Math.random() * a.length);
    [a[i], a[j]] = [a[j], a[i]];
  }
}

function isSorted(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i - 1] > a[i]) {
      return false;
    }
  }
  return true;
}

let arr = [1, 2, 34, 4, 5, 3, 23, 2, 1, 1, 3, 4, 3];

let count = 0;
while (!isSorted(arr)) {
  count++;
  shuffle(arr);
}
console.log(arr, count);
