

// String
  test('toMatch 匹配器', () => {
    let a = 'www.baidu.com';
   expect(a).toMatch('baidu'); 
  });

  // Array, Set
  test('toMatch 匹配器', () => {
    let arr = ['111','222','333'];
    const data = new Set(arr);
   expect(arr).toContain('111'); 
  });

  test('toThrow', () => {
    const throwNewErrorFunc = () => {
        throw new Error('this is a new error');
    }
   expect(throwNewErrorFunc).toThrow(/this is a new error/); 
  });