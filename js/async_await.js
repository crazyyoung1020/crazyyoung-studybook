// async function test() {
//   return 0;
// }

// async function foo() {
//   const a = await test();
//   console.log(a);
// }

// foo();


const p1 = () => { return new Promise((res) => {
  setTimeout(() => {
      console.log('p1');
      res(2);
  }, 1000);
})};

function* p () {
  const p2 = yield p1();
  console.log(p2)
}

function asyncFunc(generator) {
  const gen = generator();
  function next(data) {
      const { value, done } = gen.next(data);
      if (done) {
          return value;
      } else if (!(value instanceof Promise)) {
          next(value);
      } else {
          value.then((data) => next(data));
      }
  }
  next();
}
asyncFunc(p);