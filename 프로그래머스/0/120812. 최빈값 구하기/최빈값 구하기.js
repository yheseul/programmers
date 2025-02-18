function solution(array) {
    const frequency = {};
    
    for (const num of array) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    const max = Math.max(...Object.values(frequency));

    const mostFrequent = Object.keys(frequency).filter(key => frequency[key] === max);

    return mostFrequent.length === 1 ? parseInt(mostFrequent[0]) : -1;
}
