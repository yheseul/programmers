function solution(my_string, is_suffix) {
  if(!(my_string.includes(is_suffix))) return 0
  else{
    return my_string.split('').map((_, i) => my_string.slice(i)).includes(is_suffix) ? 1 : 0
  }
}