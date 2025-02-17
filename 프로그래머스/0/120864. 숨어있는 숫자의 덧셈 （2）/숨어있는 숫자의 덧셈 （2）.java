class Solution {
    public static int solution(String my_string) {
        int answer = 0;
        String a = "";

        for (int i = 0; i < my_string.length(); i++) {
            char c = my_string.charAt(i);
            if (Character.isDigit(c)) {
                a += c;
            } else {
                if (!a.equals("")) {
                    answer += Integer.parseInt(a);
                    a = "";
                }
            }
        }
        if (!a.equals("")) {
            answer += Integer.parseInt(a);
        }
        return answer;
    }
}