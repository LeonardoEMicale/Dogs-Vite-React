const postDogs = require('../../Controllers/Dogs/postDogs');
const {Temperament, Dog} = require('../../../db');


const postDogsHandler = async (req, res) => {
    const {name, minHeight, maxHeight, minWeight, maxWeight, life_span, temperaments, image} = req.body;

    const errors = [];

    const existingDog = await Dog.findOne({
        where: {
            name: name
        }
    });

    if (existingDog) {
        errors.push('El nombre ya existe en la base de datos');
    }

    if (minHeight < 1 || minHeight > 150 || maxHeight < 1 || maxHeight > 150) {
        errors.push('La altura debe estar entre 1 y 150.');
    }
    if (minWeight < 1 || minWeight > 82 || maxWeight < 1 || maxWeight > 82) {
        errors.push('El peso debe estar entre 1 y 82.');
    }
    if (life_span < 1 || life_span > 20) {
        errors.push('life_span debe estar entre 1 y 20');
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    
    try {
        const newDog = await postDogs(name, minHeight, maxHeight, minWeight, maxWeight, life_span, image);
        const temperamentNames = temperaments.map((temp) => temp.trim());
        const temperamentDb = await Temperament.findAll({
            where: {
                name: temperamentNames,
            }
        });
        
        newDog.addTemperament(temperamentDb);
        return res.status(201).json(newDog);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};


module.exports = postDogsHandler;