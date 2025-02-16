import java.util.Arrays;

class Solution {
    public String solution(String my_string) {
        String lowerCase = my_string.toLowerCase();
        char[] answer = lowerCase.toCharArray();
        Arrays.sort(answer);
        return new String (answer);
    }
}