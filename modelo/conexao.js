pt
const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const banco = mongoose.connect('mongodb://localhost:27017/livraria', options);

module.exports = banco;