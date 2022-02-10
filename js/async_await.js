async function test() {
  return 0;
}

async function foo() {
  const a = await test();
  console.log(a);
}

foo();
