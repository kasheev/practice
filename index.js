const express = require("express");
const bodyParser = require('body-parser');
const { getTwoArgsOperation } = require("./operation");
const { getOneArgOperation} = require("./operation");

const app = express();
app.use(bodyParser.json());

app.post("/two-args", (request, response) => {
    const { firstArg, secondArg, operation } = request.body;
    try {
        response
            .status(200)
            .json(getTwoArgsOperation(operation)(firstArg, secondArg));
    } catch (e) {
        response.status(400).json(e.message);
    }
});

app.post("/one-arg", (request,response) => {
    const { oneArg, operation} = request.body;
    try{
        response
            .status(200)
            .json(getOneArgOperation(operation)(oneArg));
    } catch(e){
        response.status(400).json(e.message);
    }
}); 

module.exports = app;