function solution(polynomial) {
    const terms = polynomial.split(' + ');
    
    let xCoeff = 0;
    let constant = 0;
    
    terms.forEach(term => {
        if (term.includes('x')) {
            if (term === 'x') {
                xCoeff += 1;
            } else if (term === '-x') {
                xCoeff -= 1;
            } else {
                let coeff = parseInt(term.replace('x', ''));
                xCoeff += coeff;
            }
        } else {
            constant += parseInt(term);
        }
    });
    
    let answer = '';
    
    if (xCoeff !== 0) {
        if (xCoeff === 1) {
            answer += 'x';
        } else if (xCoeff === -1) {
            answer += '-x';
        } else {
            answer += xCoeff + 'x';
        }
    }
    
    if (constant !== 0) {
        if (answer) answer += ' + ';
        answer += constant;
    }
    
    return answer;
}
