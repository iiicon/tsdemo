{
  type LinkedList<T> = T & { next: LinkedList<T> }

  interface Person {
    name: string
  }

  var people: LinkedList<Person> = {
    name: '1',
    next: {
      name: '2',
      next: { name: '3', next: null }
    }
  }
  var s1 = people.name
  var s2 = people.next.name
  console.log(s1, s2)
}

{
  // type Alias = { num: number }
  // interface Interface {
  //   num: number
  // }
  // function aliased(arg: Alias): Alias {}
  // function interfaced(arg: Interface): Interface {}
}

{
  let x: never
  console.log(x === undefined)
}
