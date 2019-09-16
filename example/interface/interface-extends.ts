interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  slideLength: number
}

// let squre = {} as Square
let squre = <Square>{}
squre.color = 'blue'
squre.slideLength = 100
squre.penWidth = 3.0
