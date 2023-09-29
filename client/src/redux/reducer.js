import {
  GET_ALL_DOGS,
  GET_DOGS_BY_ID,
  GET_DOGS_BY_NAME,
  GET_ALL_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  FILTER_BY_SOURCE,
  FILTER_BY_TEMPERAMENTS,
  DELETE_DOG
} from "./actions";

const initialState = {
  allDogs: [],
  dogDetail: [],
  dogsFilter: [],
  Temperaments: [],
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state, 
        allDogs: action.payload, 
        dogsFilter: action.payload,
      };
    case GET_DOGS_BY_ID:
      return {
        ...state,
        dogDetail: action.payload,
      };
    case GET_DOGS_BY_NAME:
      return {
        ...state,
        dogsFilter: action.payload,
      };
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        Temperaments: action.payload,
      };
    case ORDER_BY_NAME:
      const sortOrder = action.payload === "U" ? 1 : -1;
      const sortName = [...state.dogsFilter].sort((a, b) => {
        return (a.name < b.name ? -1 : 1) * sortOrder;
      });
      return {
        ...state,
        dogsFilter: sortName,
      };
    case ORDER_BY_WEIGHT:
      const orderSort = action.payload === "U" ? 1 : -1;
      const sortWeight = [...state.dogsFilter].sort((a, b) => {
        if (a.minWeight !== null && b.minWeight !== null) {
          return (a.minWeight - b.minWeight) * orderSort;
        }
        return 0;
      });
      return {
        ...state,
        dogsFilter: sortWeight,
      };
    case FILTER_BY_SOURCE:
      const filterSource =
        action.payload === "All"
          ? [...state.allDogs]
          : [...state.allDogs].filter((dog) => {
              if (action.payload === "true") {
                return dog.created === true;
              }
              return dog.created === false;
            });
      return {
        ...state,
        dogsFilter: filterSource,
      };
    case FILTER_BY_TEMPERAMENTS:
        const filterTemperaments = action.payload === "All"
        ? [...state.allDogs]
        : [...state.allDogs].filter((dog) => {
        const apiTemperaments = dog.temperament ? dog.temperament.split(",").map((temp) => temp.trim()) : [];
        const bdTemperaments = Array.isArray(dog.temperaments) ? dog.temperaments.map((temp) => temp.name) : [];
        return apiTemperaments.includes(action.payload) || bdTemperaments.includes(action.payload);
      });
      return {
        ...state,
        dogsFilter: filterTemperaments,
      };
    case DELETE_DOG:
      const uAllDogs = state.allDogs.filter((dog) => dog.id !== action.payload);
      const uFilterDogs = state.dogsFilter.filter((dog) => dog.id !== action.payload);
      return { 
        ...state, 
        allDogs: uAllDogs,
        dogsFilter: uFilterDogs
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
