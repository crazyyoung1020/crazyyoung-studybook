function compare(a, b) {
    let len = Math.max(a.length, b.length);
    for (let i = 0; i < len; i++) {
      if (a[i] == undefined) {
        return 1;
      } else if (b[i] == undefined) {
        return -1;
      } else if (a[i].charCodeAt() > b[i].charCodeAt()) {
        return 1;
      } else if (a[i].charCodeAt() < b[i].charCodeAt()) {
        return -1;
      }
    }
  }