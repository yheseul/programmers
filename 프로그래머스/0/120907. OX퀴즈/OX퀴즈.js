function solution(quiz) {
    return quiz.map(expression => {
        const parts = expression.split(' ');
        
        const x = parseInt(parts[0]);
        const operator = parts[1];
        const y = parseInt(parts[2]);
        const z = parseInt(parts[4]);

        let answer;
        if (operator === '+') {
            answer = x + y;
        } else if (operator === '-') {
            answer = x - y;
        }

        return answer === z ? 'O' : 'X';
    });
}
