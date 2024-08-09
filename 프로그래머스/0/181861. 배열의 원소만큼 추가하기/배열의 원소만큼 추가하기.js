function solution(arr) {
  let X = [];
  
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    X.length += num;
    
    for (let j = 0; j < num; j++) {
      X[X.length - num + j] = num;
    }
  }

  return X;
}