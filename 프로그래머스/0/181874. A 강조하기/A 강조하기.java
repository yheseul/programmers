public class Solution {
    public String solution(String myString) {
        myString = myString.toLowerCase();

        StringBuilder result = new StringBuilder();

        for (int i = 0; i < myString.length(); i++) {
            char c = myString.charAt(i);
            if (c == 'a') {
                result.append('A');
            } else {
                result.append(c);
            }
        }

        return result.toString();
    }
}