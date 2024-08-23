function solution(common) {
  let arr = [];
  for (let i = common.length-1; i > 0; i--) {
    arr.push(common[i] - common[i-1])
  }
  return new Set(arr).size == 1 ? common[common.length-1] + arr[0] : common[common.length-1] * (common[1] / common[0])
}