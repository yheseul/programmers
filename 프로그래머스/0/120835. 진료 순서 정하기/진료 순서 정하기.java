import java.util.Arrays;

class Solution {
    public static int[] solution(int[] emergency) {
        int len = emergency.length;
        int[] arr = emergency.clone();
        Arrays.sort(arr);
        int[] answer = new int[len];

        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len; j++) {
                if (emergency[i] == arr[j]) {
                    answer[i] = len - j;
                    break;
                }
            }
        }
        
        return answer;
    }
}