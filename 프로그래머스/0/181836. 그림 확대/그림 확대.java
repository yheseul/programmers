public class Solution {
    public String[] solution(String[] picture, int k) {
        int n = picture.length;
        int m = picture[0].length();
        
        String[] answer = new String[n * k];

        for (int i = 0; i < n; i++) {
            StringBuilder row = new StringBuilder();

            for (int j = 0; j < m; j++) {
                for (int t = 0; t < k; t++) {
                    row.append(picture[i].charAt(j));
                }
            }

            String rowStr = row.toString();
            for (int t = 0; t < k; t++) {
                answer[i * k + t] = rowStr;
            }
        }

        return answer;
    }
}
