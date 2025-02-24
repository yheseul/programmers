function solution(s) {
    const answer = s.split(" ").sort((a,b) => a-b);
    const arr = [answer[0], answer[answer.length -1]];
    return arr.join(" ");
}