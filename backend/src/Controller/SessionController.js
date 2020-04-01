const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)// compara 
        .select('name')
        .first();// retorna apenas um nome e não um array de nomes

        if(!ong){
            return response.status(400).json({ error: 'Não existe ONG com este ID'});
        }
        return response.json(ong);
    }
}