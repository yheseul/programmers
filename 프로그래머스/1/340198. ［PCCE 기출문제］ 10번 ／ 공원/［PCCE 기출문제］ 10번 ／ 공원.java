class Solution {
    public int solution(int[] mats, String[][] park) {
        int answer = -1;
        int rows = park.length;
        int cols = park[0].length;

        for (int matSize : mats) {
            for (int i = 0; i <= rows - matSize; i++) {
                for (int j = 0; j <= cols - matSize; j++) {

                    boolean canPlace = true;
                    for (int x = i; x < i + matSize; x++) {
                        for (int y = j; y < j + matSize; y++) {
                            if (!park[x][y].equals("-1")) {
                                canPlace = false;
                                break;
                            }
                        }
                        if (!canPlace) break;
                    }

                    if (canPlace) {
                        answer = Math.max(answer, matSize);
                    }
                }
            }
        }
        
        return answer;
    }
}
