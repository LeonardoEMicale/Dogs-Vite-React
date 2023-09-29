const getDogsById = require('../../Controllers/Dogs/getDogsById');

const getDogsByIdHandler = async (req, res) => {
    const {id} = req.params;
    const source = isNaN(id) 
    ? "bdd"
    : "api"; 
    try {
        const dog = await getDogsById(id, source);
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getDogsByIdHandler;