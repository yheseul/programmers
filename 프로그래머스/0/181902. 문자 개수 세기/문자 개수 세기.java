class Solution {
      public int[] solution(String my_string) {
        int[] result = new int[52];
        
        for (char c : my_string.toCharArray()) {
            if (c >= 'A' && c <= 'Z') {
                result[c - 'A']++;
            } else if (c >= 'a' && c <= 'z') {
                result[c - 'a' + 26]++;
            }
        }
        
        return result;
    }
}