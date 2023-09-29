import axios from 'axios';
export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_DOGS_BY_ID = 'GET_DOGS_BY_ID';
export const GET_DOGS_BY_NAME = 'GET_DOGS_BY_NAME';
export const GET_ALL_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const FILTER_BY_SOURCE = 'FILTER_BY_SOURCE';
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
export const DELETE_DOG = 'DELETED_DOG'

export const getAllDogs = () => {
  try {
    return async (dispatch) => {
      const dogs = await axios.get('http://localhost:3001/dogs');
      dispatch({
        type: GET_ALL_DOGS,
        payload: dogs.data
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getDogsById = (id) => {
  try {
    return async (dispatch) => {
      const dogById = await axios.get(`http://localhost:3001/dogs/${id}`);
      dispatch({
        type: GET_DOGS_BY_ID,
        payload: dogById.data
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getDogsByName = (name) => {
  try {
    return async (dispatch) => {
      const dogByName = await axios.get(`http://localhost:3001/dogs/?name=${name}`);
      dispatch({
        type: GET_DOGS_BY_NAME,
        payload: dogByName.data,
      })
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllTemperaments = () => {
  try {
    return async (dispatch) => {
      const tempsApi = (await axios.get('http://localhost:3001/temperaments'));
      const allTemperaments = tempsApi
      .data
      .map((temp) => temp.name);
      dispatch({
        type: GET_ALL_TEMPERAMENTS,
        payload: allTemperaments,
      })
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteDog = (id) => {
  try {
    return async (dispatch) => {
      await axios.delete(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: DELETE_DOG,
        payload: id,
      })
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const orderByName = (order) => {
 return {type: ORDER_BY_NAME, payload: order}
};

export const orderByWeight = (orderByWeight) => {
  return {type: ORDER_BY_WEIGHT, payload: orderByWeight}
};

export const filterBySource = (created) => {
 return {type: FILTER_BY_SOURCE, payload: created}
};

export const filterByTemperaments = (temperament) => {
 return {type: FILTER_BY_TEMPERAMENTS, payload: temperament}
};

