const express = require("express");
const WebSocket = require("ws");

const app = express();
app.use(express.static("public"));
app.get("/", (req, res) => res.send("index.html"));
app.listen("3000", () =>
  console.log("Client listening on http://localhost:3000")
);

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", ws =>
  ws.on("message", message => console.log(`Received: ${message}`))
);
