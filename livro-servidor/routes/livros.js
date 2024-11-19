
const express = require('express');
const livroDAO = require('./livro-dao');

const router = express.Router();

// Rota para obter todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await livroDAO.obterLivros();
        res.json(livros);   

    } catch (error) {
        console.error('Erro ao obter livros:', error);
        res.status(500).json({   
 error: 'Erro ao buscar livros' });
    }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
    try {
        const novoLivro = await livroDAO.incluir(req.body);
        res.status(201).json({ mensagem: 'Livro criado com sucesso', livro: novoLivro });
    } catch (error) {
        console.error('Erro ao incluir livro:', error);
        res.status(400).json({ error: 'Erro ao criar livro' }); // 400 Bad Request para erros de validação
    }
});

// Rota para excluir um livro
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await livroDAO.excluir(id);
        res.status(204).send(); // 204 No Content
    } catch (error) {
        console.error('Erro ao excluir livro:', error);
        res.status(404).json({ error: 'Livro não encontrado' }); // 404 Not Found para livro não encontrado
    }
});

module.exports = router;