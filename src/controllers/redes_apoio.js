const db = require('../database/connection'); 

module.exports = {
    async listarRedes_apoio(request, response) {
        try {
            const sql = `
            SELECT
             redeapoio_id, redeapoio_nome, redeapoio_descricao, redeapoio_contato, 
             redeapoio_logo FROM redes_apoio;
            `;
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de rede-apoio', 
                dados: rows,
                itens: rows.lenghth
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarRedes_apoio(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de rede-apoio', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarRedes_apoio(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de rede-apoio', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarRedes_apoio(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de rede-apoio', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  