class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        for(int[] query : queries) {
            int x = query[0];
            int y = query[1];
            int z = arr[x];
            arr[x] = arr[y];
            arr[y] = z;
        }
        return arr;
    }
}