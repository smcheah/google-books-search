const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(cors());

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(3002, () => {
    console.log('http listening on port 3002');
});