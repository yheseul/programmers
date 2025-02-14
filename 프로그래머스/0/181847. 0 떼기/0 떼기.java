class Solution {
    public String solution(String n_str) {
        int num = 0;
        
        for (int i = 0; i < n_str.length(); i++) {
            if (n_str.charAt(i) == '0') {
                num += 1;
            } else {
                break;
            }
        }
        
        return num !=0 ? n_str.substring(num) : n_str;
    }
}