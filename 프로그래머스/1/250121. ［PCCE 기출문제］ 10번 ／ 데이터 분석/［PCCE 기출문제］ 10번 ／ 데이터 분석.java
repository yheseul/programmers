import java.util.*;

class Solution {
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        List<int[]> filteredData = new ArrayList<>();
        
        for (int[] entry : data) {
            int compareValue = 0;

            if (ext.equals("date")) {
                compareValue = entry[1];
            }

            else if (ext.equals("maximum")) {
                compareValue = entry[2];
            }

            else if (ext.equals("remain")) {
                compareValue = entry[3];
            }

            else if (ext.equals("code")) {
                compareValue = entry[0];
            }

            if (compareValue < val_ext) {
                filteredData.add(entry);
            }
        }

        filteredData.sort((entry1, entry2) -> {
            int compareIndex = 0;
            
            if (sort_by.equals("code")) {
                compareIndex = 0;
            } else if (sort_by.equals("date")) {
                compareIndex = 1;
            } else if (sort_by.equals("maximum")) {
                compareIndex = 2;
            } else if (sort_by.equals("remain")) {
                compareIndex = 3;
            }
            
            return Integer.compare(entry1[compareIndex], entry2[compareIndex]);
        });
        
        return filteredData.toArray(new int[filteredData.size()][]);
    }
}
