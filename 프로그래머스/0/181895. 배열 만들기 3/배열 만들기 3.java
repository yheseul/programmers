class Solution {
    public int[] solution(int[] arr, int[][] intervals) {
        int answer1 = intervals[0][1] - intervals[0][0] + 1;
        int answer2 = intervals[1][1] - intervals[1][0] + 1;
        
        int[] result = new int[answer1 + answer2];
        
        int idx = 0; 
        for(int i = intervals[0][0]; i <= intervals[0][1]; i++) {
            result[idx++] = arr[i];
        }
        for (int i = intervals[1][0]; i <= intervals[1][1]; i++) {
            result[idx++] = arr[i];
        }
        return result;
    }
}