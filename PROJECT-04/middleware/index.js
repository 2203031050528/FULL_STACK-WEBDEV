const fs = require("fs");

function logReqres(filenme){
    return async (req, res, next) => {
        const startTime = Date.now();
        const logStr = `${req.method} - ${req.url} - ${startTime} - ${res.statusCode}\n`;
    }
}

module.exports = {
    logReqres,
}