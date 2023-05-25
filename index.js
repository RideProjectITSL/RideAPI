const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
//
//Rutas
app.use('/api/v1/ping', (req, res) => {
    res.send('pong');
});
//Listen
const server = app.listen(3000, () => {
    
});