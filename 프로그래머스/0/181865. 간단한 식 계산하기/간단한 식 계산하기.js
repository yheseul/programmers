function solution(binomial) {
  const cal = binomial.split(' ')
  switch (cal[1]) {
    case '+': return +cal[0] + +cal[2]
    case '-': return +cal[0] - +cal[2]
    case '*': return +cal[0] * +cal[2]
  }
} 