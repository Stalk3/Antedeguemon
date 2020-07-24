const axios = require('axios');
const crypto = require('crypto');
const connection = require('../database/connection');
module.exports = {
    async CepRequest(request, Response) {
        const { name, password, email, whatsapp, CepCliente } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        
        axios.get(`https://viacep.com.br/ws/${CepCliente}/json/`)
            .then(async response => {
                const { cep, logradouro, complemento, localidade, uf, unidade, ibge, gia } = response.data
                
                await connection('user').insert({
                    id,
                    password,
                    name,
                    email,
                    whatsapp,
                    localidade,
                    uf
                }) 
                return Response.json(`Conexão realiazada com sucesso seu id de acesso é: ${ id }`);
            });
        

        
    },
    async index(request, response) {
        const user = await connection('user').select('*');
    
        return response.json(user);
    }
    
}