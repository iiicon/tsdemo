// 完整的函数类型
let add: (a: number, b: number) => number = (a, b) => a + b

// 剩余参数
function buildName(firstname: string, ...restOfName: string[]): string {
  return firstname + restOfName.join(' ')
}

console.log(buildName('xx', 'yy', 'zz'))
