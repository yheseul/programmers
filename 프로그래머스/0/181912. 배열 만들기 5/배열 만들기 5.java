import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(String[] intStrs, int k, int s, int l) {
        List<Integer> answer = new ArrayList<>();
        for(String intStr : intStrs) {
            String subStr = intStr.substring(s, s+l);
            int num = Integer.parseInt(subStr);
                
            if(num > k) {
                answer.add(num);
            }
        }
        return answer.stream().mapToInt(i -> i).toArray();
    }
}