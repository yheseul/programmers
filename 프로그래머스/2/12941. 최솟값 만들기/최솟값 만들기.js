function solution(A,B){
    const aArr = A.sort((a,b) => a-b);
    const bArr = B.sort((a,b) => b-a);
    let answer = 0;

    for(let i = 0; i < A.length; i++) {
        answer += aArr[i] * bArr[i];
    }

    return answer;
}