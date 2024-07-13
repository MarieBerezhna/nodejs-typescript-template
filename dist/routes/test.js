"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var testRoute = (0, express_1.Router)();
testRoute.get('/test', function (req, res) {
    res.send('test api route works');
});
exports.default = testRoute;
