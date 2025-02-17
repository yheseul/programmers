import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr) {
        int length1 = arr.length;
        int length2 = 1;
        
        while (length2 < length1) {
            length2 *= 2;
        }
        
        if(length2 == length1) {
            return arr;
        }
        
        int[] answer = Arrays.copyOf(arr, length2);
        return answer;
    }
}