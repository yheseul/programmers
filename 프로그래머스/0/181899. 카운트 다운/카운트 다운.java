class Solution {
    public int[] solution(int start_num, int end_num) {
        int[] answer = new int[start_num - end_num + 1];

        for (int i = start_num, idx = 0; i >= end_num; i--, idx++) {
            answer[idx] = i;
        }
        
        return answer;
    }
}
