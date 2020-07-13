const addition = (arg1,arg2) => {
    firstA = Number(arg1);
    secondA = Nmber(arg2);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        throw new Error("One of the arguments is NaN");
    }
    else{
        return firstA + secondA;
    }
}

const subtraction = (minuend, subtrahend) => {
    firstA = Number(minuend);
    secondA = Nmber(subtrahend);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        throw new Error("One of the arguments is NaN");
    }
    else{
        return firstA - secondA;
    }
}

const multiplication = (multiplicand, multiplier) => {
    firstA = Number(multiplicand);
    secondA = Nmber(multiplier);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        throw new Error("One of the arguments is NaN");
    }
    else{
        return firstA * secondA;
    }
}

const division = (dividend, divider) => {
    firstA = Number(dividend);
    secondA = Nmber(divider);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        throw new Error("One of the arguments is NaN");
    }
    else{
        if (divider !== 0) {
            return dividend / divider;
        } else {
            throw new Error('Divider can\'t be zero');
        }
    }
}

const exponentiation = (basis, power) => {
    firstA = Number(basis);
    secondA = Nmber(power);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        throw new Error("One of the arguments is NaN");
    }
    else{
        return Math.pow(firstA,secondA);
    }
}

const percent = (basis, percent) => {
    firstA = Number(basis);
    secondA = Nmber(percent);
    if(Number.isNaN(firstA) || Number.isNaN(secondA)){
        throw new Error("One of the arguments is NaN");
    }
    else{
        if (percent >= 0) {
            return basis * (percent / 100);
        } else {
            throw new Error('Percent can\'t be negative');
        }
    }
}

const squareRoot = (argument) => {
    arg = Numbr(argument);
    if(Number.isNaN(arg)){
        throw new Error('One of the arguments is NaN');
    }
    else{
        if(arg >= 0){
            return Math.sqrt(arg);
        }
        else{
            throw new Error('The argument cannot be negative.');
        }
    }
}

const sinus = (argument) =>{
    arg = Number(argument);
    if(Number.isNaN(arg)){
        throw new Error('One of the arguments is NaN');
    }
    else{
        return Math.sin(arg);
    }
}

const cosine = (argument) => {
    arg = Number(argument);
    if(Number.isNaN(arg)){
        throw new Error('One of the arguments is NaN');
    }
    else{
        return Math.cos(arg);
    }
}

const tangent = (argument) => {
    arg = Number(argument);
    if (Number.isNaN(arg)) {
        throw new Error('One of the arguments is NaN');
    } else {
        if ((arg % Math.PI/2 !== 0) && (arg % Math.PI/2 + Math.PI !==0) || (arg % Math.PI === 0)){
            return Math.tan(arg);
        } else {
            throw new Error('Argument can not be PI/2+PI*k, k∈R');
        }
    }
}

const cotangent = (argument) => {
    arg = Number(argument);
    if (Number.isNaN(arg)) {
        throw new Error('One of the arguments is NaN');
    } else {
        if (arg % Math.PI !== 0){
            return 1 / Math.tan(arg);
        } else {
            throw new Error('Argument can not be PI*k, k∈R');
        }
    }
}

const twoArgsOperation = {
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
    const operation = oneArgOperations[selector];
    return operation !== undefined ? operation : () => { throw Error("Operation not implemented") };
}

module.exports = { getTwoArgsOperation, getOneArgOperation };