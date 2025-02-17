class Solution {
        public int solution(String my_string) {
        String[] result = my_string.split(" ");
        int num = 0;
        num = Integer.parseInt(result[0]);

        for (int i = 1; i < result.length; i++) {
            if (result[i].equals("+")) {
                num += Integer.parseInt(result[i + 1]);
                i++;
            } else if (result[i].equals("-")) {
                num -= Integer.parseInt(result[i + 1]);
                i++;
            }
        }    
        return num;
    }
}