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
                    