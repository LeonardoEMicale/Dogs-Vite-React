const {Temperament} = require('../../../db');


//solicito todos los temps de mi base de datos y los retorno.

const getAllTemperamentsDb = async () => {
const allTemperamentsDataBase = await Temperament.findAll();
if(!allTemperamentsDataBase) throw new Error('La base de datos esta vacía');
return allTemperamentsDataBase;
}

module.exports = getAllTemperamentsDb;