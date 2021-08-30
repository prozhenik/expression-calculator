function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let count = 0;
    expr = expr.split(' ').join('');

    for(let i=0; i<expr.length; i++){
        if(expr[i] === '(') count++;
        if(expr[i] === ')') count--;
    }
    if(count != 0) throw Error('ExpressionError: Brackets must be paired!');
    if(expr.includes('/0')) throw Error('TypeError: Division by zero.');
    return new Function(`return ${expr}`)();
}

module.exports = {
    expressionCalculator
}