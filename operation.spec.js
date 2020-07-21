const { getOneArgOperation, getTwoArgsOperation } = require("./operation");

describe("Operation getter", () => {
    it("should return addition function", () => {
        expect(getTwoArgsOperation("+").name).toBe("addition");
    });

    it("should return subtraction function", () => {
        expect(getTwoArgsOperation("-").name).toBe("subtraction");
    });

    it("should return multiplication function", () => {
        expect(getTwoArgsOperation("*").name).toBe("multiplication");
    });

    it("should return division function", () => {
        expect(getTwoArgsOperation("/").name).toBe("division");
    });

    it("should return exponentiation function", () => {
        expect(getTwoArgsOperation("^").name).toBe("exponentiation");
    });

    it("should return percent function", () => {
        expect(getTwoArgsOperation("%").name).toBe("percent");
    });

    it("should return square root function", () => {
        expect(getOneArgOperation("sqrt").name).toBe("squareRoot");
    });

    it("should return sinus function", () => {
        expect(getOneArgOperation("sin").name).toBe("sinus");
    });

    it("should return cosine function", () => {
        expect(getOneArgOperation("cos").name).toBe("cosine");
    });

    it("should return tangent function", () => {
        expect(getOneArgOperation("tg").name).toBe("tangent");
    });

    it("should return cotangent function", () => {
        expect(getOneArgOperation("ctg").name).toBe("cotangent");
    });
});   

describe("Two arguments operation", () => {
    it("addition", () => {
        expect(getTwoArgsOperation("+")(1, 2)).toBe(3);
    });

    it("subtraction", () => {
        expect(getTwoArgsOperation("-")(1, 2)).toBe(-1);
    });

    it("multiplication", () => {
        expect(getTwoArgsOperation("*")(11, 11)).toBe(121);
    });

    it("division", () => {
        expect(getTwoArgsOperation("/")(8, 4)).toBe(2);
    });

    it("exponentiation", () => {
        expect(getTwoArgsOperation("^")(4, 2)).toBe(16);
    });

    it("percent", () => {
        expect(getTwoArgsOperation("%")(10, 50)).toBe(5);
    });
});

describe("One argument operation", () => {
    it("squareRoot", () => {
        expect(getOneArgOperation("sqrt")(16)).toBe(4);
    });

    it("sinus", () => {
        expect(getOneArgOperation("sin")(2)).toBe(0.9092974268256817);
    });
    
    it("cosine", () => {
        expect(getOneArgOperation("cos")(2)).toBe(-0.4161468365471424);
    });

    it("tangent", () => {
        expect(getOneArgOperation("tg")(2)).toBe(-2.185039863261519);
    });

    it("cotangent", () => {
        expect(getOneArgOperation("ctg")(1)).toBe(0.6420926159343306);
    });
})

describe('Negative test',()=>{
    it('test addition error', () => {
        expect(getTwoArgsOperation("+")(2, "dd")).toBe("One of the arguments is NaN");
    });

    it('test subtraction error', () => {
        expect(getTwoArgsOperation("+")(2, "dd")).toBe("One of the arguments is NaN");
    });

    it('test multi error', () => {
        expect(getTwoArgsOperation("*")(2, "dd")).toBe("One of the arguments is NaN");
    });

    it('test div error', () => {
        expect(getTwoArgsOperation("/")(2, "dd")).toBe("One of the arguments is NaN");
    });

    it('test div error', () => {
        expect(getTwoArgsOperation("/")(2, 0)).toBe('Divider can\'t be zero');
    });

    it('test exp error', () => {
        expect(getTwoArgsOperation("^")(2, 'dd')).toBe("One of the arguments is NaN");
    });

    it('test percent error', () => {
        expect(getTwoArgsOperation("%")(2, 'dd')).toBe("One of the arguments is NaN");
    });

    it('test percent error', () => {
        expect(getTwoArgsOperation("%")(2, -1)).toBe('Percent can\'t be negative');
    });

    it('test sqrt error', () => {
        expect(getOneArgOperation("sqrt")('dd')).toBe("One of the arguments is NaN");
    });
    
    it('test sqrt error', () => {
        expect(getOneArgOperation("sqrt")(-1)).toBe('The argument cannot be negative.');
    });

    it('test sin error', () => {
        expect(getOneArgOperation("sin")('dd')).toBe("One of the arguments is NaN");
    });

    it('test cos error', () => {
        expect(getOneArgOperation("cos")('dd')).toBe("One of the arguments is NaN");
    });

    it('test tg error', () => {
        expect(getOneArgOperation("tg")('dd')).toBe("One of the arguments is NaN");
    });

    it('test ctg error', () => {
        expect(getOneArgOperation("ctg")('d')).toBe("One of the arguments is NaN");
    });

    it('test ctg error', () => {
        expect(getOneArgOperation("ctg")(0)).toBe('Argument can not be PI*k, k∈R');
    });
})
