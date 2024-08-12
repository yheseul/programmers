function solution(arr) {
  if(arr.length === arr[0].length) return arr;
  if(arr.length > arr[0].length){
    const zero = '0'.repeat(arr.length - arr[0].length)
    const num = zero.split('').map(x => +x)
    arr.map(x => x.push(...num))
    return arr
  }
  if(arr.length < arr[0].length){
    const zero = '0'.repeat(arr[0].length)
    const num = zero.split('').map(x => +x)
    while(true) {
      arr.push([...num])
      if(arr.length === arr[0].length) break
    }
    return arr
  }
}