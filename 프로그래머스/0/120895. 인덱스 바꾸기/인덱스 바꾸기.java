class Solution {
    public String solution(String my_string, int num1, int num2) {
        char[] answer = my_string.toCharArray();
        
        char str = answer[num1];
        answer[num1] = answer[num2];
        answer[num2] = str;
        
        return new String(answer);
    }
}