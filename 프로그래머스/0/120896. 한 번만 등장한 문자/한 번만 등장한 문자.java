import java.util.Arrays;

class Solution {
        public static String solution(String s) {
        int[] count = new int[26];
            
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        StringBuilder answer = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (count[c - 'a'] == 1) {
                answer.append(c);
            }
        }
        char[] result = answer.toString().toCharArray();
        Arrays.sort(result);

        return new String(result);
    }
}