import java.util.ArrayList;

class Solution {
    public String[] solution(String myStr) {
        ArrayList<String> answer = new ArrayList<>();
        
        String x = "";
        
        for (int i = 0; i < myStr.length(); i++) {
            char c = myStr.charAt(i);
            
            if (c == 'a' || c == 'b' || c == 'c') {
                if (x.length() > 0) {
                    answer.add(x);
                    x = "";
                }
            } else {
                x += c;
            }
        }
        if (x.length() > 0) {
            answer.add(x);
        }
        if (answer.isEmpty()) {
            return new String[] {"EMPTY"};
        }
        return answer.toArray(new String[0]);
    }
}
