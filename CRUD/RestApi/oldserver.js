// const { urlencoded } = require('body-parser');
// const express = require('express');

// const http = require('http');
// const WebSocket = require('ws');

// const sequelize = require('./../config/connection');
// const app = express();

// const server = http.createServer(app);

// //initialize the WebSocket server instance
// const wss = new WebSocket.Server({ server });

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use( (req,res, next) => {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-methods', 'GET,POST,PUT,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })

// let token = require('./../../host_name').token;

// app.use(`/api/${token}`, require('./routes/api/foods'));
// app.use(`/api/${token}`, require('./routes/api/orders'));
// app.use(`/api/${token}`, require('./routes/api/inventory'));
// app.use(`/api/${token}`, require('./routes/api/table_inventorys'));
// app.use(`/api/${token}`, require('./routes/api/payment_response'));

// app.get(`/api/${token}/ws`, async(req, res) => {
//     wss.on('connection', ws => {
//         ws.send('0');
//     })
//     res.send("<h1>WS SERVER :)</h1>")
// })

// // sequelize.sync({force: true});
// server.listen(8000, () => {
//     console.log('server started on port 8000');
// });
