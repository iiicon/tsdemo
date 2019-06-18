// 声明函数
{
  interface Add {
    (a: number, b: number): number
  }

  let add: Add = function(a, b) {
    return a + b
  }

  // console.log(add(1,2))
}

// 1. 没有参数的时候也不会报错
// 2. add:Add --> (a:any,b:any):number 而且默认是可选的？？？？？
// 后来证明又不是？

{
  // 函数的参数也是函数
  interface Add {
    (a: number, b: number): number
    // minus(c: number, d: number): number
  }

  let add: Add = ((): Add => {
    let x:any = function(a, b) {
      return a + b
    }
    x.minus = function(c: number, d: number): number {
      return c - d
    }
    return x
  })()

  // console.log(add(1, 2))
}

{
  interface StringArray {
    [index: number]: string;
  }
  let myArray: StringArray;
  myArray = ["Bob", "Fred"];

  let myStr: string = myArray[0];
  console.log(myStr)
}

