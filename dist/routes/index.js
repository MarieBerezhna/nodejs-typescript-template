"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var main_1 = __importDefault(require("./main"));
var test_1 = __importDefault(require("./test"));
var routes = (0, express_1.Router)();
routes.use(test_1.default);
routes.use(main_1.default);
exports.default = routes;
