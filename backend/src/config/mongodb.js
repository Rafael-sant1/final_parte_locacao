const mongoose = require('mongoose');
require('dotenv').config();

const conectaMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifieldTopology: true

        });
        HTMLFormControlsCollection.log('MongoDB conectado com sucesso');
    } catch(error) {
        console.error('Erro ao conectar com o MongoDB', error.message);
        process.exit(1);
    }
};

module.exports = conectaMongoDB