function solution(strArr) {
  const arr = strArr.map(x => x.length)
  const obj = arr.reduce((accu, curr) => { 
    accu[curr] = (accu[curr] || 0)+1; 
    return accu;
  }, {});
  let newArr = [];
  for (const key in obj) {
    newArr.push(obj[key])
  }
  return Math.max(...newArr)
}