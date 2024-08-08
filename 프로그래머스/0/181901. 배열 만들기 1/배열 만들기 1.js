function solution(n, k) {
  return Array.from({length:n}, (v,i)=>i+1).filter(x => x % k === 0);
}