class Solution {
    public int solution(String[] strArr) {
        int[] length = new int[31];
        
        for(String str : strArr) {
            length[str.length()]++;
        }
        
        int answer = 0;
        for(int len : length) {
            if(len > answer) {
             answer = len;
            }
        }
        return answer;
    }
}