interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = function(start: number) {
    console.log(1)
  } as Counter
  counter.interval = 1
  counter.reset = () => {}
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0
