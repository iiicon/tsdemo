// > 把类当做接口使用
// 接口是低配版的类，类是高配版的接口
{
  class Point {
    x: number
    y: number
  }

  interface Point3d extends Point {
    z: number
  }

  let point3d: Point3d = { x: 1, y: 2, z: 3 }
}

// 高级技巧
class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    }
    else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;  // 注意这句话
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());