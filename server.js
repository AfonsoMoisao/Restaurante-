
// Importa o módulo 'express' e cria uma instância da aplicação
const express = require('express');
const app = express();
// Define a porta em que o servidor vai escutar
const port = 3000;
// Define uma rota GET para '/time'
// Quando um cliente fizer uma solicitação GET para '/time', esta função será executada
app.get('/time', (req, res) => {
    // Cria uma nova instância da data com a data e hora atuais
    const now = new Date();

     // Obtém a hora atual no formato local (HH:MM:SS)
    const time = now.toLocaleTimeString();  

    // Envia uma resposta JSON com o objeto contendo a hora atual
    res.json({ time });
});

// Inicia o servidor e faz com que ele escute na porta definida
// Exibe uma mensagem no console informando que o servidor está rodando
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});