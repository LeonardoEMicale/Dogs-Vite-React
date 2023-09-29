const {Dog} = require('../../../db');

const deleteDogsHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedDog = await Dog.destroy({where: {id}});
        if(deletedDog) return res.status(200).send('Dog deleted succesfully');
        throw new Error('No existen perros con ese ID en la base de datos.');
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
};


module.exports = deleteDogsHandler;