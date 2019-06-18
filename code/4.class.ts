{
  class A {
    a1: number
    a2() {
      console.log(this.a1)
    }
    constructor(a: number) {
      this.a1 = a
    }
  }

  class B extends A {
    b1: string
    b2(): void {
      console.log(this.b1)
    }
    constructor(v) {
      super(v)
    }
  }

  const bq = new B(1)
  console.log(bq)
}
