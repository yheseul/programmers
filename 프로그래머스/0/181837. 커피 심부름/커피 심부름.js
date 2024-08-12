function solution(order) {
  let price = 0;
  order.map(x => {
    x.includes('americano') || x.includes('anything') ? price += 4500 : price += 5000;
  })
  return price
}