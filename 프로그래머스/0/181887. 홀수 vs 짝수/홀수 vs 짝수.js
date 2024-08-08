function solution(num_list) {
  let odd = 0;
  let even = 0;
  num_list.map((x, i) => i % 2 ? odd += x : even += x)
  return odd >= even ? odd : even;
}