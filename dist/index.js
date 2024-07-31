"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const http_1 = __importDefault(require("http"));
let count = 0;
const server = http_1.default.createServer(function (request, response) {
    console.log(new Date() + "request received for ", request.url);
    response.end("hi there");
});
const wss = new ws_1.WebSocketServer({ server });
wss.on("connection", function connection(ws, client) {
    console.log(`connection from user ${client.url}`);
    ws.on("error", console.error);
    ws.on("message", function message(data) {
        count++;
        console.log(`Received message ${data} from user ${client}`);
    });
    ws.send(`${count}Hello! Message From Serverddd!!`);
});
server.listen(8080, () => {
    console.log(new Date() + " Server is listening on port 8080");
});
