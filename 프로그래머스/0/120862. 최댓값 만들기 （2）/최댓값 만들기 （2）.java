import java.util.Arrays;

class Solution {
    public int solution(int[] numbers) {
        Arrays.sort(numbers);
        int max = Math.max(numbers[0] * numbers[1], numbers[numbers.length-1] * numbers[numbers.length-2]);
        return max;
    }
}