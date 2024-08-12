function solution(picture, k) {
  let result = []
  picture.forEach(e => {
    const arr = e.split('').map(x => x.repeat(k)).join('');
    while(true){
      result.push(arr)
      if(!(result.length % k)) break
    }
  });
  return result
}