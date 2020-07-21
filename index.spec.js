const app = require('./index');
const supertest = require('supertest');
const { response } = require('express');
const { json } = require('body-parser');
const request = supertest(app);

describe('API', () => {
    it('Sum request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "+"
                }
            )
            .expect('Content-type', /json/)
            .then(response => {
                expect(response.body).toBe(3);
            });
    });
    
    it('Sub request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "-"
                }
            )
            .expect('Content-type', /json/)
            .then(response => {
                expect(response.body).toBe(-1);
            });
    });

    it('Sub request',() => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 10,
                    secondArg: "5",
                    operation: "-"
                }
            )
            .expect('Content-type',/json/)
            .then(response => {
                expect(response.body).toBe(5)
            });
    })

    it('Sub request',() => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 10,
                    secondArg: "lol",
                    operation: "-"
                }
            )
            .expect('Content-type',/json/)
            .then(response => {
                expect(response.body).toBe("One of the arguments is NaN")
            });
    });

    it('Multi request',() =>{
        return request
        .post('/two-args')
        .send(
            {
                firstArg: 20,
                secondArg: 3,
                operation: "*"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe(60)
        })
    });

    it('Div request',() =>{
        return request
        .post('/two-args')
        .send(
            {
                firstArg: 20,
                secondArg: 2,
                operation: "/"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe(10)
        })
    });

    it('Div request',() =>{
        return request
        .post('/two-args')
        .send(
            {
                firstArg: 20,
                secondArg: 0,
                operation: "/"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe('Divider can\'t be zero')
        })
    });

    it('Exp request',() =>{
        return request
        .post('/two-args')
        .send(
            {
                firstArg: 2,
                secondArg: 10,
                operation: "^"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe(1024)
        })
    });

    it('Percent request',() =>{
        return request
        .post('/two-args')
        .send(
            {
                firstArg: 20,
                secondArg: 50,
                operation: "%"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe(10)
        })
    });

    it('Percent request',() =>{
        return request
        .post('/two-args')
        .send(
            {
                firstArg: 20,
                secondArg: -50,
                operation: "%"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe('Percent can\'t be negative')
        })
    });

    it('Sqrt request',() =>{
        return request
        .post('/one-arg')
        .send(
            {
                oneArg: 16,
                operation: "sqrt"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe(4)
        })
    });

    it('Sqrt request',() =>{
        return request
        .post('/one-arg')
        .send(
            {
                oneArg: -16,
                operation: "sqrt"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe('The argument cannot be negative.')
        })
    });

    it('Sin request',() =>{
        return request
        .post('/one-arg')
        .send(
            {
                oneArg: 2,
                operation: "sin"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe(0.9092974268256817)
        })
    });

    it('Cos request',() =>{
        return request
        .post('/one-arg')
        .send(
            {
                oneArg: 2,
                operation: "cos"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe(-0.4161468365471424)
        })
    });

    it('Tan request',() =>{
        return request
        .post('/one-arg')
        .send(
            {
                oneArg: 2,
                operation: "tg"
            }
        )
        .expect('Content-type',/json/)
        .expect(200)
        .then(response => {
            expect(response.body).toBe(-2.185039863261519)
        })
    });

    it('Cotan request',() =>{
        return request
        .post('/one-arg')
        .send(
            {
                oneArg: 0,
                operation: "ctg"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe("Argument can not be PI*k, k∈R")
        })
    });

    it('Cotan request',() =>{
        return request
        .post('/one-arg')
        .send(
            {
                oneArg: 1,
                operation: "ctg"
            }
        )
        .expect('Content-type',/json/)
        .then(response => {
            expect(response.body).toBe(0.6420926159343306)
        })
    });
});