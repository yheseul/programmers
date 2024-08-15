function solution(array, n) {
  const arr = [...array, n].sort((a, b) => a -b)
  if(arr.indexOf(n) === arr.length - 1) return arr[arr.length - 2];
  if(arr.indexOf(n) === 0) return arr[1];
  return n - arr[arr.indexOf(n) - 1] <= arr[arr.indexOf(n) + 1] - n ? arr[arr.indexOf(n) - 1] : arr[arr.indexOf(n) + 1]
}