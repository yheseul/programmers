class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        for(int num : num_list) {
            int answer2 = 0;
            while (num != 1) {
                if(num % 2 ==0) {
                    num /= 2;
                }else{
                    num = (num -1) /2;
                }
                answer2++;
            }
            answer += answer2;
        }
        return answer;
    }
}