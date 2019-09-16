class Greeter {
  static standardGreeting = 'hello there'

  greeting: string

  constructor(message?: string) {
    this.greeting = message
  }

  greet() {
    if (this.greeting) {
      return 'hello' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}
let greeter: Greeter
greeter = new Greeter()
console.log(greeter.greet())

let GreeterMaker: typeof Greeter = Greeter
GreeterMaker.standardGreeting = 'hey june'

let greeter2: Greeter = new GreeterMaker()
console.log(greeter2)
