const getDogsByName = require('../../Controllers/Dogs/getDogsByName');
const {getAllDogs} = require('../../Controllers/Dogs/getAllDogs');

const getAllDogsHandler = async (req, res) => {
    const {name} = req.query;

    try {
        const results = 
    name 
    ? await getDogsByName(name) 
    : await getAllDogs();

    res.status(200).json(results);
    } catch (error) {
        res.status(400).json(error.message);
    }
    
};
    
    

module.exports = getAllDogsHandler;