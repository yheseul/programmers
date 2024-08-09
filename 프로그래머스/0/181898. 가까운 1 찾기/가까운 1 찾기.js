function solution(arr, idx) {
  let a = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 1 && i >= idx) {
      a.push(i)
      break;
    } else{
      a.push(-1)
    }
  }

  return a[a.length-1]
}