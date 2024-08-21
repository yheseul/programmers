function solution(spell, dic) {
  const str = spell.sort().join('')
  let arr = []
  dic.map(x => {
    if(x.length === spell.length) arr.push(x.split('').sort().join(''))
  })
  return arr.includes(str) ? 1 : 2
}