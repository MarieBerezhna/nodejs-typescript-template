"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'express' module
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
// Create an Express application
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// Set the port number for the server
var port = 3000;
// Define a route for the root path ('/')
app.get('/', routes_1.default);
// Start the server and listen on the specified port
app.listen(port, function () {
    // Log a message when the server is successfully running
    console.log("Server is running on http://localhost:".concat(port));
});
