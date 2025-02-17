class Solution {
    public String solution(String my_string, int s, int e) {
        String first = my_string.substring(0, s);
        String middle = my_string.substring(s, e+1);
        String last = my_string.substring(e+1);
        
        String reverseMiddle = new StringBuilder(middle).reverse().toString();
        return first+ reverseMiddle + last;
    }
}