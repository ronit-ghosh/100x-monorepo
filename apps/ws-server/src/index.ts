import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, request) {
    ws.on('message', function message() {
        ws.send('pong');
    });
});