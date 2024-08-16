function solution(numbers, k) {
  let arr = [];
  let result = [];
  const arrCount = Math.ceil((k * 2) / numbers.length)
  for (let i = 0; i < arrCount; i++) {
    arr.push(...numbers)
  }
  for (let j = 0; j < arr.length; j+=2) {
    result.push(arr[j])
  }
  return result[k-1]
}