const db = require('../database/connection'); 

module.exports = {
    async listarLocalizacoes(request, response) {
        try {
            const sql = `
            SELECT
               lcz_id, psi_id, lcz_nome_clinica, lcz_cep, lcz_bairro, lcz_complemento, 
               lcz_cidade, lcz_estado FROM localizacoes;
            `;
            const[rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de localizações', 
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
    async cadastrarLocalizacoes(request, response) {
        try {
            const{psi_id, nome_clin, CEP, bairro, complemento, cidade, estado}= request.body;

            const sql= `
                INSERT INTO localizacoes 
                     (psi_id, lcz_nome_clinica, lcz_cep, lcz_bairro, lcz_complemento, lcz_cidade, lcz_estado) 
                VALUES
                     (?, ?, ?, ?, ?, ?, ?);
            `
            const values= [psi_id, nome_clin, CEP, bairro, complemento, cidade, estado];

            const [result]= await db.query(sql, values);

            const dados= {
                lcz_id: result.insertId,
                nome_clin,
                CEP, 
                bairro,
                complemento, 
                cidade, 
                estado
            };

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de localização', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarLocalizacoes(request, response) {
        try {
            const{psi_id, nome_clin, CEP, bairro, complemento, cidade, estado}= request.body;
            const {lcz_id} = request.params;

            const sql= `
                UPDATE localizacoes SET
                   psi_id = ?, lcz_nome_clinica = ?, lcz_cep= ?, lcz_bairro = ?, lcz_complemento = ?, lcz_cidade = ?, lcz_estado = ? 
                   WHERE 
                     lcz_id = ?;
            `
            const values= [nome, descricao, contato, logo,redeapoio_id];

            const [result]= await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de localização', 
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
    async apagarLocalizacoes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de localização', 
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