function solution(my_string, n) {
  return my_string.split('').slice(my_string.length - n).join('');
}