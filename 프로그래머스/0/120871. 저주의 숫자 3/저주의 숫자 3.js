function solution(n) {
  let arr = []
  for (let i = 1; i <= 185; i++) {
    if((i % 3) && !(String(i).split('').includes("3"))){
      arr.push(i)
    }    
    if(arr.length === n) break;
  }
  return arr[arr.length -1];
}