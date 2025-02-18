function solution(lines) {
    let overlap = new Set();

    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < 3; j++) {
            let start1 = lines[i][0], end1 = lines[i][1];
            let start2 = lines[j][0], end2 = lines[j][1];

            let start = Math.max(start1, start2);
            let end = Math.min(end1, end2);
            
            if (start < end) {
                for (let k = start; k < end; k++) {
                    overlap.add(k); 
                }
            }
        }
    }

    return overlap.size;
}
