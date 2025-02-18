class Solution {
       public static int[] solution(int[] arr, int[][] queries) {
        int[] result = new int[queries.length];
           
        for (int q = 0; q < queries.length; q++) {
            int s = queries[q][0];
            int e = queries[q][1];
            int k = queries[q][2];
            int answer = -1;
            for (int i = s; i <= e; i++) {
                if (arr[i] > k) {
                    if (answer == -1 || arr[i] < answer) {
                        answer = arr[i];
                    }
                }
            }
            result[q] = answer;
        }

        return result;
    }
}