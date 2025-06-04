const express = require('express');
const http = require('http');

//Inicializar Aplicação Express
const app = express();
const server = http.createServer(app);

//Inicializar Conexões
const inicializar = async () => {
    try{
        const PORT = 3000;
        server.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao inicializar o Servidor', error);
    }
};

//executar o inicializar
inicializar();

//exportar os modulos app, server
module.exports = { app, server };


