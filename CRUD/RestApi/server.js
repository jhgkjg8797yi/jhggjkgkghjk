const { urlencoded } = require("body-parser");
const path = require("path");
var favicon = require("serve-favicon");

const express = require("express");
const WebSocket = require("ws");
const http = require("http");

const app = express();
const port = 8000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const sequelize = require("./../config/connection");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Upgrade", "Connection");
  res.header("websocket", "Upgrade");
  next();
});

let token = require("../host_name").token;

app.use(`/api/${token}`, require("./routes/api/inventory"));
app.use(`/api/${token}`, require("./routes/api/foods"));
app.use(`/api/${token}`, require("./routes/api/orders"));
app.use(`/api/${token}`, require("./routes/api/table_inventorys"));
app.use(`/api/${token}`, require("./routes/api/payment_response"));

app.post(`/report`, (req, res) => {
  if (req.params.ResCode === "0") {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(req.params.ResCode);
      }
    });
    res.json({ res: 200 });
  } else {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(req.params.ResCode);
      }
    });
    res.json({ res: 401 });
  }
});

app.get(`/rescode=:ResCode`, (req, res) => {
  if (req.params.ResCode === "0") {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(req.params.ResCode);
      }
    });
    res.json({ res: 200 });
  } else {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(req.params.ResCode);
      }
    });
    res.json({ res: 401 });
  }
});

app.post(`/`, (req, res) => {
  if (req.body.ResCode === "0") {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(req.body.ResCode);
      }
    });
    res.json({ res: 200 });
  } else {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(req.body.ResCode);
      }
    });
    res.json({ res: 401 });
  }
});

sequelize.sync();
server.listen(port, () => {
  console.log("server started on port 8000");
});
