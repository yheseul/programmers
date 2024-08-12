function solution(rank, attendance) {
  let arr = [];
  attendance.map((x, i) => {
    if(x){
      arr.push(rank[i])
    }
  })
  const rankArr = arr.sort((a, b) => a - b).map(x => rank.indexOf(x))
  return (10000 * rankArr[0]) + (100 * rankArr[1]) + rankArr[2]
}