function solution(chicken) {
  let mari = 0
  let coupon = chicken

  while (true) {
    mari += Math.floor(coupon / 10)
    coupon = Math.floor(coupon / 10) + coupon % 10 
    if(coupon < 10) break;
  }
  return mari
}