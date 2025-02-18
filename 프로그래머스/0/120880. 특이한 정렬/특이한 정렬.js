function solution(numlist, n) {
    return numlist.sort((a, b) => {

        const dist1 = Math.abs(a - n);
        const dist2 = Math.abs(b - n);

        if (dist1 === dist2) {
            return b - a;
        }

        return dist1 - dist2;
    });
}
