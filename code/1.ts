let a: null = null
let b: undefined = undefined

let c: boolean = true
let d: number = 1.23

let o: object = {}
let s: symbol = Symbol()

let e: number = 1
// e = 'string'
let e1: any = 1
e1 = 'string'

// let gender = 'man'
enum Gender {
  Man = 'm',
  Woman = 'w'
}
let gender: Gender = Gender.Man

function print(x): void {
  console.log(x)
}

// ts 里 null 和 undefined 是一样的
let n1: string = '1'
let n2: number = 1

{
  // let s: number = 123
  // let s1 = s.toString().split('')
  // console.log(s1)

  let s: any = '123'
  console.log((<string>s).split(''))
  // console.log((s as string).split(''))
}

{
  // 类型转换
  let a: number = 1
  let b: string = a.toString()

  let c: string = '1.2'
  let d: number = parseFloat(c)

  let e: string = 'false'
  let f: boolean = Boolean(e)

  if (e === undefined) {
  }

  let o:object = {name: 'xxx'}
  let s: string = JSON.stringify(o)
}
