import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> solution(String[] str_list) {
        List<String> result = new ArrayList<>();

        int lIndex = -1;
        int rIndex = -1;
        
        for (int i = 0; i < str_list.length; i++) {
            if (str_list[i].equals("l") && lIndex == -1) {
                lIndex = i;
            }
            if (str_list[i].equals("r") && rIndex == -1) {
                rIndex = i;
            }
        }

        if (lIndex != -1 && (rIndex == -1 || lIndex < rIndex)) {
            for (int i = 0; i < lIndex; i++) {
                result.add(str_list[i]);
            }
        } else if (rIndex != -1) {
            for (int i = rIndex + 1; i < str_list.length; i++) {
                result.add(str_list[i]);
            }
        }
        return result;
    }
}