function solution(arr1, arr2) {
  if(arr2.length == arr1.length){
    const sumArr1 = arr1.reduce((acc, cur) => acc + cur)
    const sumArr2 = arr2.reduce((acc, cur) => acc + cur)
    return sumArr2 > sumArr1 ? -1 : sumArr2 === sumArr1 ? 0 : 1
  }
  return arr2.length > arr1.length ? -1 : 1
}