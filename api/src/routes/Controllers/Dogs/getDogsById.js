const axios = require('axios');
const {API_KEY} = process.env;
const {Dog, Temperament} = require('../../../db');
const {cleanArray} = require('./getAllDogs');

//tipo de id
//id que no exista
 const getDogsById = async (id, source) => {
   const dog =
   source === "api"
   ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`)).data 
   : await Dog.findByPk(id, {
    include: [{
      model: Temperament,
      attributes: ['name'], //atributos que quiero traer del modelo Temperament
      through: {
          attributes: [],//traer mediante los atributos del modelo
      },
  }]
   });
    return cleanArray([dog]);
 };

 module.exports = getDogsById;