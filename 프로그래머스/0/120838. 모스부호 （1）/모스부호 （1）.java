class Solution {
    public String solution(String letter) {
        String[] morse = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        
        StringBuilder answer = new StringBuilder();
        String[] codes = letter.split(" ");
        
        for(String code : codes) {
            for(int i = 0; i < morse.length; i++) {
                if(morse[i].equals(code)) {
                    answer.append((char) ('a' + i));
                    break;
                }
            }
        }
        return answer.toString();
    }
}