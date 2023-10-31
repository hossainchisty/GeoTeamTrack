import http from 'http';
import { Server as SocketIoServer } from 'socket.io';
import express from 'express';
import bodyParser from 'body-parser';
import { applicationRoutes } from "./app/routes/routes";

const app = express();
const server = http.createServer(app);
const io = new SocketIoServer(server);

// Socket.io connection handling
io.on('connection', (event) => {
    console.log('Client connected');
    // Handle socket.io events
});

app.use(bodyParser.json());

// Application Route
app.use("/api/v1/", applicationRoutes);

export default app;
