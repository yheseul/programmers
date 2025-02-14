class Solution {
    public int solution(int[] num_list) {
        int product = 1;
        
        for(int num : num_list) {
            product *= num;
        }
        
        int sum = 0;
        for(int num : num_list) {
            sum += num;
        }
        
        int square = sum * sum;
        
        return product < square ? 1 : 0;
    }
}