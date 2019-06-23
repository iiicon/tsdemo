{
  abstract class Animal {
    abstract smile(): void
    protected kind: string
    constructor(kind: string) {
      this.kind = kind
    }
    move(): void {
      console.log('move')
    }
  }
  
  class Human extends Animal {
    static color = 'red'
    public name: string
    _age: number
    get age() {
      return this._age
    }
    set age(val: number) {
      if (val > 28) {
        this._age = 18
      } else {
        this._age = val
      }
    }
    private secret: number = 100
    constructor(name: string, kind: string, age = 18) {
      super(kind)
      this.name = name
      this.age = age
    }
    say(): string {
      this.move()
      console.log(this.kind)
      return 'i can move'
    }
    public smile() {
      console.log('smile')
    }
  }
  let Gerrit = new Human('Gerrit', 'man')
  Gerrit.age = 30
  console.log(Gerrit.smile())
}

// interface
{
  interface Human {
    name: string
    age: number
    move(): void
  }
  let Gerrit = {
    name: 'Gerrit',
    age: 18,
    move() {}
  }
}
