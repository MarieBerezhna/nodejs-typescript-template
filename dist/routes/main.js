"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mainRoute = (0, express_1.Router)();
mainRoute.get('/', function (req, res) {
    res.send('main api route works');
});
exports.default = mainRoute;
