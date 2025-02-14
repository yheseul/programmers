class Solution {
    public int[] solution(int[] num_list) {
        int end1 = num_list[num_list.length - 1];
        int end2 = num_list[num_list.length - 2];
        
        if(end1 > end2) {
            int[] result = new int[num_list.length + 1];
            System.arraycopy(num_list, 0, result, 0, num_list.length);
            result[num_list.length] = end1 - end2;
            return result;
        }
        
        else {
            int[] result = new int[num_list.length + 1];
            System.arraycopy(num_list, 0, result, 0, num_list.length);
            result[num_list.length] = end1 * 2;
            return result;
        }
        
    }
}