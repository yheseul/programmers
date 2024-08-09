function solution(myString) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k']
  alphabet.map(x => myString = myString.replaceAll(x, 'l'))
  return myString
}