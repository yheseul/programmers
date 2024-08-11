function solution(arr) {
  let result = 0
  let prevArr = arr
  while(true) {
      const newArr = prevArr.map(x => {
          if(x >= 50 && !(x % 2)) return x/2
          if(x < 50 && x % 2) return x*2+1
          return x
      }) 
      if(JSON.stringify(prevArr) === JSON.stringify(newArr)) break
      result += 1
      
      prevArr = newArr
  }
  return result
}