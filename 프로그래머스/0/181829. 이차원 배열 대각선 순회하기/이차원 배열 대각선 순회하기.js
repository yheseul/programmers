function solution(board, k) {
  let arr = []
   for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      i + j <= k ? arr.push((board[i])[j]) : arr
    }
  }
  return arr.reduce((acc, cur) => acc + cur);
}