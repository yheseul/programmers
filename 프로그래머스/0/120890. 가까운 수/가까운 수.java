class Solution {
    public int solution(int[] array, int n) {
        int answer = array[0];
        
        for(int i = 0; i < array.length; i++) {
            int a = Math.abs(answer - n);
            int b = Math.abs(array[i] - n);
            
            if(b < a) {
                answer = array[i];
            } else if(a == b) {
                if(array[i] < answer) {
                    answer = array[i];
                }
            }
        }
        
        return answer;
    }
}