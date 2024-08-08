function solution(num_list) {
  let result = [];
  for (let i = 0; i < num_list.length; i++) {
    if(num_list[i] < 0){
      result.push(i);
    }
    if(result.length !== 0) break;
  }
  return result.length === 0 ? -1 : result[0]
}