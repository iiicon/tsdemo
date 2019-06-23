{
  // function returnIt<T>(param: T): T {
  //   return param
  // }

  let returnIt: <U>(param: U) => U = <T>(param: T): T => param

  function returnArray<T>(arr: Array<T>): Array<T> {
    return arr
  }

  interface Human {
    name: string
    age: number
  }

  let s = returnIt<string>('hello')

  let p = returnIt({ name: 'zhangsan', age: 18 })

  let arr = returnArray(['1', '2'])
  console.log(s)
}

{
  interface add {
    (a: number, b: number): number
  }
  interface addAny<T> {
    (a: T, b: T): T
  }

  const add: add = (a, b) => a + b

  const addAny: addAny<string> = (a, b) => a + b
  console.log(addAny('1', '3'))
}

{
  function create<T>(c: { new (): T }) {
    return new c()
  }
  class Human {
    name: string
    age: number
  }

  console.log(create<Human>(Human))
}
