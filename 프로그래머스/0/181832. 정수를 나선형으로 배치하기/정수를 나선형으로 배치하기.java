class Solution {
        public static int[][] solution(int n) {
        int[][] matrix = new int[n][n];
        int[] dx = {0, 1, 0, -1};
        int[] dy = {1, 0, -1, 0};

        int x = 0, y = -1, dir = 0;
        for (int num = 1; num <= n * n; num++) {
            int nx = x + dx[dir];
            int ny = y + dy[dir];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n || matrix[nx][ny] != 0) {
                dir = (dir + 1) % 4;
                nx = x + dx[dir];
                ny = y + dy[dir];
            }

            matrix[nx][ny] = num;
            x = nx;
            y = ny;
        }

        return matrix;
    }
}