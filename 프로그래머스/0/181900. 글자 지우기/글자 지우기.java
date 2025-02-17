class Solution {
    public String solution(String my_string, int[] indices) {
        char[] answer = my_string.toCharArray();
        
        for(int i = 0; i < indices.length; i++) {
            answer[indices[i]] = '*';
        }
        
        String result = "";
        for(int i = 0; i < answer.length; i++) {
            if(answer[i] != '*') {
            result += answer[i];
            }
        }
        return result;
    }
}