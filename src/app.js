const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productosRoutes = require('./routes/productos.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/productos', productosRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;
