const express = require("express");
const bodyParser = require('body-parser');
const { getTwoArgsOperation } = require("./operations");
const { getOneArgOperation} = require("./operations");

const app = express();
app.use(bodyParser.json());

app.post("/two-args", function(request, response) {
    const { firstArg, secondArg, operation } = request.body;
    try {
        response
            .status(200)
            .json(getTwoArgsOperation(operation)(firstArg, secondArg));
    } catch (e) {
        response.status(400).json(e.message);
    }
});

app.post("/one-arg", function(request,response) {
    const { oneArg, opeation} = request.body;
    try{
        response
            .status(200)
            .json(getOneArgOperation(opeation)(oneArg));
    } catch(e){
        response.status(400).json(e.message);
    }
}); 

module.exports = app;