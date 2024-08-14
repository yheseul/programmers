function solution(babbling) {
  const reg = /(aya|ye|woo|ma)/gi;
  return babbling.filter(x => x.replace(reg, '') === "").length
}