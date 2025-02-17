import java.util.Arrays;

public class Solution {
    public int solution(int[] arr) {
        int count = 0;
        int[] prevArr;
        
        while (true) {
            prevArr = arr.clone();
            
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] >= 50 && arr[i] % 2 == 0) {
                    arr[i] /= 2;
                } else if (arr[i] < 50 && arr[i] % 2 != 0) {
                    arr[i] = arr[i] * 2 + 1;
                }
            }
            
            count++; 
            if (Arrays.equals(arr, prevArr)) {
                count--;
                break;
            }
        }
        
        return count;
    }
}
