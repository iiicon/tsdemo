#!/usr/bin/env ts-node
{
  console.log('hello world')
  const a = parseInt(process.argv[2])
  const b = parseInt(process.argv[3])

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log('参数必须是数字')
    process.exit(1)
  }
  console.log(a + b)
  process.exit(0)
}
