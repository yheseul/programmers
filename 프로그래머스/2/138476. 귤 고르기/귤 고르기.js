function solution(k, tangerine) {
    const frequencyMap = new Map();

    for (const num of tangerine) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const sortedTangerines = [...frequencyMap].sort((a,b) => b[1] - a[1]);
    
    let count = k
    let typeCount = 0;
    
    for (const [_, amount] of sortedTangerines) {
        count -= amount;
        typeCount++
        
        if (count <= 0) break;
    }
    return typeCount
}