class Solution {
    public int[] solution(int n) {
        int count = (n+1) / 2;
        int[] answer = new int[count];
        
        for(int i = 0, num = 1; num <= n; num += 2, i++) {
            answer[i] = num;
        }
        return answer;
    }
}