function solution(my_string) {
  const result = my_string.split(' ')
  let num = 0;
  for (let i = 0; i < result.length; i++) {
    if(i == 0) num = parseInt(result[i]);
    if(result[i] == '+'){
      num += parseInt(result[i+1]);
      i++;
    }
    if(result[i] == '-'){
      num -= parseInt(result[i+1]);
      i++;
    }
  }
  return num
}