function addition(firstArg, secondArg) {
    firstArg = Number(firstArg);
    secondArg = Number(secondArg);
    if (Number.isNaN(firstArg) || Number.isNaN(secondArg)) {
        return "One of the arguments is NaN";
    }
    return firstArg + secondArg;
}

const subtraction = (minuend, subtrahend) => {
    firstA = Number(minuend);
    secondA = Number(subtrahend);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        return "One of the arguments is NaN";
    }
        return firstA - secondA;
}

const multiplication = (multiplicand, multiplier) => {
    firstA = Number(multiplicand);
    secondA = Number(multiplier);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        return "One of the arguments is NaN";
    }
        return firstA * secondA;
}

const division = (dividend, divider) => {
    firstA = Number(dividend);
    secondA = Number(divider);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        return "One of the arguments is NaN";
    }
    else if (divider !== 0) {
            return dividend / divider;
        } 
    return 'Divider can\'t be zero';
}

const exponentiation = (basis, power) => {
    firstA = Number(basis);
    secondA = Number(power);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        return  "One of the arguments is NaN" ;
    }
        return Math.pow(firstA,secondA);
}

const percent = (basis, percent) => {
    firstA = Number(basis);
    secondA = Number(percent);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        return "One of the arguments is NaN" ;
    }
    else if (percent >= 0) {
            return basis * (percent / 100);
        }
    return 'Percent can\'t be negative' ;
}

const squareRoot = (argument) => {
    arg = Number(argument);
    if(Number.isNaN(arg)){
        return "One of the arguments is NaN" ;
    }
    else if(arg >= 0){
            return Math.sqrt(arg);
        }
        return 'The argument cannot be negative.' ;
}

const sinus = (argument) =>{
    arg = Number(argument);
    if(Number.isNaN(arg)){
        return "One of the arguments is NaN";
    }
        return Math.sin(arg);
 
}

const cosine = (argument) => {
    arg = Number(argument);
    if(Number.isNaN(arg)){
        return  "One of the arguments is NaN";
    }
        return Math.cos(arg);
}

const tangent = (argument) => {
    arg = Number(argument);
    if (Number.isNaN(arg)) {
        return  "One of the arguments is NaN" ;
    } else if ((arg % Math.PI/2 !== 0) && (arg % Math.PI/2 + Math.PI !==0) || (arg % Math.PI === 0)){
            return Math.tan(arg);
        }
        return  'Argument can not be PI/2+PI*k, k∈R';
}

const cotangent = (argument) => {
    arg = Number(argument);
    if (Number.isNaN(arg)) {
        return  "One of the arguments is NaN" ;
    } else if (arg % Math.PI !== 0){
            return 1 / Math.tan(arg);
        }
        return 'Argument can not be PI*k, k∈R' ;     
    
}

const twoArgsOperations = {
    "+": addition,
    "-": subtraction,
    "*": multiplication,
    "/": division,
    "^": exponentiation,
    "%": percent
}

const oneArgOperation = {
    "sqrt": squareRoot,
    "sin": sinus,
    "cos": cosine,
    "tg": tangent,
    "ctg": cotangent
}

const getTwoArgsOperation = (selector) => {
    const operation = twoArgsOperations[selector];
    return operation !== undefined ? operation : () => { throw Error("Operation not implemented") };
}

const getOneArgOperation = (selector) => {
    const operation = oneArgOperation[selector];
    return operation !== undefined ? operation : () => { throw Error("Operation not implemented") };
}

module.exports = { getTwoArgsOperation, getOneArgOperation };