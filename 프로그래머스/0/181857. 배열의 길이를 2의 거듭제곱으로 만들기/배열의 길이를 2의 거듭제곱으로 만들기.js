function solution(arr) {
  const n = arr.length;
  if(!(n & (n - 1))) return arr
  else{
    for (let i = 1; i <= 512; i++) {
      let d = !(n + i & (n + i - 1))
      arr.push(0 * i)
      if(d === true) break
    }
  }
  return arr
}