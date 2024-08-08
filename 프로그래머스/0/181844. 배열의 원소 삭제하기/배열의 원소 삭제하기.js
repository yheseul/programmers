function solution(arr, delete_list) {
  let result = [];
  delete_list.map(x => arr = arr.filter(y => y !== x))
  return result.length === 0 ? arr : result;
}