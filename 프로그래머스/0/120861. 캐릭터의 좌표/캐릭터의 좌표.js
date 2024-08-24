function solution(keyinput, board) {
  let [x, y] = [0, 0]
  let [row, col] = [Math.trunc(board[0] / 2), Math.trunc(board[1] / 2)]
  
  for (let i = 0; i < keyinput.length; i++) {
    if(keyinput[i] == 'left'){
      Math.abs(x - 1) > row ? x : x -= 1;
    }
    if(keyinput[i] == 'right'){
      Math.abs(x + 1) > row ? x : x += 1;
    }
    if(keyinput[i] == 'down'){
      Math.abs(y - 1) > col ? y : y -=1;
    }
    if(keyinput[i] == 'up'){
      Math.abs(y + 1) > col ? y : y += 1;
    }
  }
  return [x, y]
}