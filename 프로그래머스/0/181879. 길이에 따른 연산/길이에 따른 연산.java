class Solution {
    public int solution(int[] num_list) {
        int answer = num_list.length;
        
        if(answer >= 11) {
            int sum = 0;
            for(int num : num_list) {
                sum += num;
            }
            return sum;
        } else {
            int product = 1;
            for(int num : num_list) {
                product *= num;
            }
            return product;
        }
    }
}