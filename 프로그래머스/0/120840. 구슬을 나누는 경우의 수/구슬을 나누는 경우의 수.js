function solution(balls, share) {
  if (share > balls - share) share = balls - share;
  let numerator = 1;
  let denominator = 1;
  for (let i = 0; i < share; i++) {
    numerator *= (balls - i);
    denominator *= (i + 1);
  }
  return numerator / denominator;
}