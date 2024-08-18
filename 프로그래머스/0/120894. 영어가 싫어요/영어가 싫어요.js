function solution(numbers) {
  const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

  eng.map((x, i) => {
    numbers = numbers.replaceAll(x, i)
  })
  return parseInt(numbers);
}