function cal_gcd(a, b) {
  return a % b === 0 ? b : cal_gcd(b, a % b)
}

function solution(numer1, denom1, numer2, denom2) {
  let num = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;
  let gcd = cal_gcd(num, denom)
  
  return [num / gcd, denom / gcd]
}
