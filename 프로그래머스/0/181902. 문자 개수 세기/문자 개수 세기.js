function solution(my_string) {
  const capital = Array(26).fill().map((v, i) => String.fromCharCode(i + 65));
  const small = capital.map(x => x.toLowerCase())
  const alphabet = [...capital, ...small];
  let result = Array(52).fill(0);

  for (let i = 0; i < my_string.length; i++) {
    const arr = alphabet.filter(x => x === [...my_string][i]);
    const index = alphabet.indexOf([...my_string][i])
    result[index] += arr.length
  }
  return result
}