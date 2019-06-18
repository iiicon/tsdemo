#!/usr/bin/env ts-node
{
  class Person {
    public children: Person[] = []
    constructor(public name: string) {}
    addPerson(child: Person): void {
      this.children.push(child)
    }
    introduce(n?: number): void {
      n = n || 1
      const prefix = '--'.repeat(n - 1)
      console.log(`${prefix}${this.name}`)
      this.children.forEach((child: Person) => {
        child.introduce(n + 1)
      })
    }
  }

  const grandPa = new Person('爷爷')
  const child1 = new Person('大伯')
  const child2 = new Person('二伯')
  const child11 = new Person('大哥')
  const child12 = new Person('大姐')
  const child21 = new Person('二哥')
  const child22 = new Person('二姐')

  grandPa.addPerson(child1)
  child1.addPerson(child11)
  child1.addPerson(child12)
  grandPa.addPerson(child2)
  child2.addPerson(child21)
  child2.addPerson(child22)

  grandPa.introduce()
}
