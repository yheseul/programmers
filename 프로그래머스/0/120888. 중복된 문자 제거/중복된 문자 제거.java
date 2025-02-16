class Solution {
    public String solution(String my_string) {
        StringBuilder answer = new StringBuilder();
        
        for(int i = 0; i < my_string.length(); i++) {
            char current = my_string.charAt(i);
            if(answer.indexOf(String.valueOf(current)) == -1) {
                answer.append(current);
            }
        }
        
        return answer.toString();
    }
}