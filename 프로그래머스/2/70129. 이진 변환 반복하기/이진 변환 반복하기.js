function solution(s) {
    let count = 0;
    let zeroCount = 0;
    
    while(s !== "1") {
        let oneCount = 0;
        
        for(let char of s) {
        if(char === "1") oneCount++;
        else zeroCount++;
        }
        
        s = oneCount.toString(2);
        
        count++
    }
    return [count, zeroCount]
}