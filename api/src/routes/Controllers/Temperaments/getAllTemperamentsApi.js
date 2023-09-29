const { API_KEY } = process.env;
const axios = require("axios");
const {Temperament} = require('../../../db');

const getAllTemperamentsApi = async () => {
    const response = (await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
      )).data;
    
      const responseFiltered = response.map((ele) => ele.temperament)
      .join(',') //uno todos los temps en un mismo string dentro del array;
      .toString() //convierto el array en un string;
      .split(',') //vuelvo a convertir el string en array pero esta vez con cada temp separado.
      .map((ele) => ele.trim()); //elimino espacios en blanco al principio y final.

    const allTemperaments = new Set(responseFiltered); //creo un nuevo array sin temps repetidos.
    
    //busco cada elemento de mi array en mi base de datos, si no esta, lo creo.
    allTemperaments.forEach((ele) => {
      Temperament.findOrCreate({
        where: {
          name: ele,
        }
      })
    });
      
};

module.exports = getAllTemperamentsApi;