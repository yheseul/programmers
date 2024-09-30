function solution(A, B) {
  if (A === B) return 0;
  const arr = A.split("");
  let result;

  for (let i = 0; i < arr.length; i++) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
    if(arr.join("") === B) return result = i + 1;
  }
  return result === undefined ? -1 : result
}