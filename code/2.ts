interface Animal {
  run(): void
}
interface Shape {
  head: string
  body: string
}
interface Human {
  name: string
  // readonly name: string
  age: number
  shape: Shape
  likeGame?: Array<string>
  say(word: string): void
}

let person: Human = {
  name: 'gerritV',
  age: 18,
  shape: {
    head: 'head',
    body: 'body'
  },
  say(word) {
    console.log(`${this.name}:${word}`)
  }
  // likeGame: ['LOL', 'PUBG']
}

person.name = 'zhangsan'
person.say('xxx')

// 1 申明对象时的写法
// 2 属性是对象的写法
// 3 属性是函数的写法
// 4 非必须的属性
// 5 readonly的属性

interface RectOptions {
  width: number
  height: number
  // [propName: string]: any
}
let rectOptions = {
  width: 100,
  height: 100,
  color: 'red'
}

function createRect(rectOptions: RectOptions): void {}

createRect(rectOptions)

// 1 添加不存在的 color 没有一点问题
// 2 如果要规定 color 的类型，要写 [propName: string]: any


// interface 继承
// 1. interface Human extends Animal, CVV
// 2. 串形继承