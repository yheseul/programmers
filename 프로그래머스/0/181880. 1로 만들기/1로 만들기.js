function solution(num_list) {
  let result = 0;
  num_list.map(x => {
    let current = x;
    while (current > 1) {
      if (current % 2 === 1) {
        current = (current - 1) / 2;
      } else {
        current = current / 2;
      }
      result += 1;
    }
  })
  return result;
}