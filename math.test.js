import { add, minus, multi } from './math.js';

test('测试加法3+7', () => { expect(add(3, 7)).toBe(10) });

test('测试减法3-3', () => { expect(minus(3, 3)).toBe(0) });

test('测试乘法3*3', () => { expect(multi(3, 3)).toBe(9) });