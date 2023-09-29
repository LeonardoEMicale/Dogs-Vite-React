const axios = require('axios');
const {API_KEY} = process.env;
const {Dog, Temperament} = require('../../../db');


const cleanArray = (array) =>
    array.map((elem) => {
        if(isNaN(elem.id)) {
            return {
            id: elem.id,
            name: elem.name,
            image: elem.image,
            minHeight: elem.minHeight,
            maxHeight: elem.maxHeight,
            minWeight: elem.minWeight,
            maxWeight: elem.maxWeight,
            temperament: elem.dataValues.temperaments.map((elem) => elem.name).join(
                ", "
              ),
            life_span: elem.life_span,
            created: true
            }
        } else {
            return {
                id: elem.id,
            name: elem.name,
            image: `https://cdn2.thedogapi.com/images/${elem.reference_image_id}.jpg`,
            minHeight: parseInt(elem.height.metric.slice(0, 2).trim()),
            maxHeight: parseInt(elem.height.metric.slice(4).trim()),
            minWeight: parseInt(elem.weight.metric.slice(0, 2).trim()),
            maxWeight: parseInt(elem.weight.metric.slice(4).trim()),
            temperament: elem.temperament,
            life_span: elem.life_span,
            created: false
            }
        }
    });

const getAllDogs = async () => {
    const databaseDogs = await Dog.findAll({
        include: [{
            model: Temperament,
            attributes: ['name'], 
            through: {
                attributes: [],
            },
        }]
    });
    const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)).data
    const apiDogs = cleanArray(apiDogsRaw);
    const bdDogs = cleanArray(databaseDogs)

    return [...bdDogs, ...apiDogs];
};


module.exports = {getAllDogs, cleanArray};