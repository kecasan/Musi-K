const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuração de conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'musik'
});

// Conectando ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Rota GET para listar todas as pessoas
app.get('/api/usuario', (req, res) => {
    db.query('SELECT * FROM usuario', (err, results) => {
        if (err) {
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erro ao buscar dados');
            return;
        }
        res.send(results);
    });
});

// Rota POST para adicionar uma nova pessoa
app.post('/api/usuario', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:', err);
            res.status(500).send('Erro ao inserir dados');
            return;
        }
        res.status(201).send('Pessoa adicionada com sucesso!');
    });
});

// Rota PUT para atualizar uma pessoa existente
app.put('/api/usuario/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const sql = 'UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id_usuario = ?';
    db.query(sql, [nome, email, senha, id], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar dados:', err);
            res.status(500).send('Erro ao atualizar dados');
            return;
        }
        res.send('Pessoa atualizada com sucesso!');
    });
});

// Rota DELETE para remover uma pessoa existente
app.delete('/api/usuario/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM usuario WHERE id_usuario = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erro ao deletar dados:', err);
            res.status(500).send('Erro ao deletar dados');
            return;
        }
        res.send('Pessoa deletada com sucesso!');
    });
});

app.get('/api/usuario', (req, res) => {
    db.query('Select email from usuario', (err, results) => {
        if (err) {
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erro ao buscar dados');
            return;
        }
        res.send(true);
    });
})

app.get('/api/usuario', (req, res) => {
    db.query('Select senha from usuario', (err, results) => {    
        if (err) {
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erro ao buscar dados');
            return;
        }
        res.send(true);
    });
})

// Iniciando o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});