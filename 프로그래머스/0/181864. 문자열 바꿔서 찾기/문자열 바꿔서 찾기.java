public class Solution {
        public static int solution(String myString, String pat) {
        String stringArr = myString.replace('A', 'x').replace('B', 'A').replace('x', 'B');

        if (stringArr.contains(pat)) {
            return 1;
        } else {
            return 0;
        }
    }
}
