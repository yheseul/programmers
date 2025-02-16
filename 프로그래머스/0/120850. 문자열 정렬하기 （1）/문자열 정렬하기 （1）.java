import java.util.*;

class Solution {
    public List<Integer> solution(String my_string) {
        List<Integer> answer = new ArrayList<>();

        for (int i = 0; i < my_string.length(); i++) {
            char c = my_string.charAt(i);
            if (Character.isDigit(c)) {
                answer.add(c - '0');
            }
        }

        Collections.sort(answer);
        
        return answer;
    }
}
