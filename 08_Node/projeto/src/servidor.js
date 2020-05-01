const porta = 3003;
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// get geral
app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
});

// get por id
app.get('/produtos/:id', (req, res, next)=> {
    res.send(db.getProduto(req.params.id))
})

// post
app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
});

// delete por id
app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.excluirProduto(req.params.id);
    res.send(produto);
});

app.listen(porta , () => {
    console.log(`Servidor executando na porta ${porta}.`)
})