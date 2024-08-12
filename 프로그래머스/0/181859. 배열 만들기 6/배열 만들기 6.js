function solution(arr) {
  let stk = [];
  arr.map(x => stk.length === 0 || stk[stk.length - 1] !== x ? stk.push(x) : stk.pop())
  return stk.length === 0 ? [-1] : stk;
}