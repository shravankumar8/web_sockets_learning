import WebSocket, { WebSocketServer } from "ws";
import http from "http";
let count = 0;

const server = http.createServer(function (request: any, response: any) {
  console.log(new Date() + "request received for ", request.url);
  response.end("hi there");
});
const wss = new WebSocketServer({ server });
wss.on("connection", function connection(ws, client) {
  console.log(`connection from user ${client.url}`);
  ws.on("error", console.error);
  ws.on("message", function message(data) {
    count++
    console.log(`Received message ${data} from user ${client}`);
});
ws.send(`${count}Hello! Message From Serverddd!!`);
});
server.listen(8080, () => {
  console.log(new Date() + " Server is listening on port 8080");
});
