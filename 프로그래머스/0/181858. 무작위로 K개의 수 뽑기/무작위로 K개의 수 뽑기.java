import java.util.ArrayList;

class Solution {
    public static int[] solution(int[] arr, int k) {
        ArrayList<Integer> result = new ArrayList<>();
        ArrayList<Integer> seen = new ArrayList<>();
        
        for (int num : arr) {
            if (!seen.contains(num)) {
                result.add(num);
                seen.add(num);
            }
            if (result.size() == k) {
                break;
            }
        }

        while (result.size() < k) {
            result.add(-1);
        }

        int[] answer = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            answer[i] = result.get(i);
        }

        return answer;
    }
}