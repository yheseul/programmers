function solution(n) {
    const b = n.toString(2).split("").filter(x => x === "1")
    for(let i = n+1; i <= 1000000; i++) {
       const a = i.toString(2).split("").filter(x => x === "1")
       if(a.length === b.length) return i;
    }
}