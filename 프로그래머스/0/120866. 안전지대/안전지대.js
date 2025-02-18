function solution(board) {
    const n = board.length;
    const dangerZone = Array.from({ length: n }, () => Array(n).fill(false)); 
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {

                dangerZone[i][j] = true;

                for (let [dx, dy] of directions) {
                    const nx = i + dx;
                    const ny = j + dy;
                    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                        dangerZone[nx][ny] = true;
                    }
                }
            }
        }
    }
    
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!dangerZone[i][j]) {
                safeCount++;
            }
        }
    }
    
    return safeCount;
}
