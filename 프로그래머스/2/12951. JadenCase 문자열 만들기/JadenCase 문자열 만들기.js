function solution(s) {
    const arr = s.split(" ");
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
            answer.push("");
            continue;
        }

        arr[i] = arr[i].toLowerCase();
        if (isNaN(parseInt(arr[i][0]))) {
            answer.push(arr[i].replace(arr[i][0], arr[i][0].toUpperCase()));
        } else {
            answer.push(arr[i]);
        }
    }
    return answer.join(" ");
}
