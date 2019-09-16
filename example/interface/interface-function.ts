interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc = function(src: string, sub: string): boolean {
  return src.search(sub) > -1
}
 