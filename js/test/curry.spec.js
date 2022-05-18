import { currying } from '../curry';
describe('curry', ()=>{
  it('base', ()=>{
    const add = (x, y)=>{
      return x+y
    };
    // 基础使用
    expect(currying(add)(1)(2)).toBe(3);
  });
  it('more param',()=>{
    const add = (x, y, z, a, b)=>{
      return x+y+z+a+b
    };

    // 多个参数
    const curryAdd = currying(add);
    expect(curryAdd(1)(2)(3)(4)(5)).toBe(15);

    // 分断调用
    const curryAdd3 = curryAdd(1)(2)(3);
    expect(curryAdd3(4)(5)).toBe(15);
  })
})