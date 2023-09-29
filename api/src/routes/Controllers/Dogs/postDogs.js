const {Dog} = require('../../../db');

const postDogs = async (name, minHeight, maxHeight, minWeight, maxWeight, life_span, image) => 
await Dog.create({name, minHeight, maxHeight, minWeight, maxWeight, life_span, image});


module.exports = postDogs;