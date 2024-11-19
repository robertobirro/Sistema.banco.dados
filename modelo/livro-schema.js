const mongoose = require('mongoose');
const banco = require('./conexao'); // Importa a conexão

const livroSchema = new banco.Schema({
  id: banco.Schema.Types.ObjectId,
  titulo: String,
  autor: String,
  codEditora: Number,
  autores:String,
  resumo: String
});

const Livro = banco.model('Livro', livroSchema);

module.exports = Livro;