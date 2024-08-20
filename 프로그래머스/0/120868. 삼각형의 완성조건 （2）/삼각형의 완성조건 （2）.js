function solution(sides) {
  let result = 0;

  const max = Math.max(...sides);
  const min = Math.min(...sides);

  for (let i = max - min + 1; i <= max; i++) {
    result += 1;
  }

  for (let j = max + 1; j < min + max; j++) {
    result += 1;
  }
  
  return result
}