const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar no MongoDB:', err));

const usuarioRoutes = require('./routes/usuarioRoutes');
const contatoRoutes = require('./routes/contatoRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/contatos', contatoRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/upload', uploadRoutes);

module.exports = app;