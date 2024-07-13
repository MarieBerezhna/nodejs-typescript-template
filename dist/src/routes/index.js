"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mainRoute = (0, express_1.Router)();
mainRoute.get('/', function (req, res) {
    res.send('main api route works');
});
mainRoute.get('/test', function (req, res) {
    res.send('ttest api route works');
});
// optionally add more routes or create them in other files in this folder and import here
var routes = [
    mainRoute
];
exports.default = mainRoute;
