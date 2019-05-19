enum Gender {
  Man,
  Woman
}
interface person {
  age: number,
  gender: Gender
}
function marry(a: person, b: person): [person, person] {
  if(a.gender!==b.gender) {
    return [a,b]
  } else {
    throw new Error('不能结婚')
  }
}
var c = marry({gender: Gender.Man, age: 28}, {gender: Gender.Woman, age: 18})
console.log(c)

// function sorted(a: number[]):number[] {
//   return a.sort((a, b) => b - a)
// }
// console.log(sorted([1,23,2,42,21]))

// function add(a: string, b: string): string
// function add(a: number, b: number): number
// function add(a: any, b: any): any {
//   return a + b
// }

// console.log(add(1, 2))

// function min(a: number, b: number): number {
//   if (a < b) {
//     return ;
//   } else {
//     return b;
//   }
// }

// var c = min(1, 2);
// console.log(c);
