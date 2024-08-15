function solution(s) {
  let result = [];
  const object = s.split('').reduce((accu, curr) => { 
    accu[curr] = (accu[curr] || 0)+1; 
    return accu;
  }, {});
  
  for (const key in object) {
    object[key] === 1 ? result.push(key) : result
  }
  return result.sort().join("")
}