import Cards from "../Cards/Cards";
import style from "./CardsContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  getAllTemperaments,
  orderByName,
  orderByWeight,
  filterBySource,
  filterByTemperaments,
  deleteDog,
  getAllDogs
} from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import Paginate from "../Paginate/Paginate";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const dogsFilter = useSelector((state) => state.dogsFilter);
  const temperaments = useSelector((state) => state.Temperaments).sort(
    (a, b) => {
      if (a < b) return -1;
      return 1;
    }
  );

  const [filterName, setFilterName] = useState("");
  const [filterWeight, setFilterWeight] = useState("");
  const [filterSource, setFilterSource] = useState("All");
  const [filterTemps, setFilterTemps] = useState("All");

  //Handlers
  const handleDeletedDog = (id) => {
    dispatch(deleteDog(id));
    setCurrentPage(1);
  };

  const handleCleanFilters = () => {
    setFilterName('');
    setFilterWeight('');
    setFilterSource('All');
    setFilterTemps('All');
    setCurrentPage(1)
    dispatch(getAllDogs())
  };

  const handleOrderByName = (event) => {
    dispatch(orderByName(event.target.value));
    setFilterName(event.target.value);
    setCurrentPage(1);
  };

  const handleOrderByWeight = (event) => {
    dispatch(orderByWeight(event.target.value));
    setFilterWeight(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterBySource = (event) => {
    dispatch(filterBySource(event.target.value));
    setFilterSource(event.target.value);
    setCurrentPage(1);
  };
 
  const handleFilterByTemperaments = (event) => {
    dispatch(filterByTemperaments(event.target.value));
    setFilterTemps(event.target.value);
    setCurrentPage(1);
  };
//handlers

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  //paginate
  const cant = dogsFilter.length;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = dogsFilter.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDogs = dogsFilter.slice(startIndex, endIndex);
  //paginate
  return (
    <div>
      <div className={style.HomeComponents}>
        <div className={style.SearchBar}>
          <SearchBar />
        </div>
        <div className={style.Filtros}>
          <span>Order by name</span>
          <select onChange={handleOrderByName} 
            value={filterName}>
            <option value="U">Upward</option>
            <option value="D">Downward</option>

          </select>
          <span>Order by weight</span>
          <select onChange={handleOrderByWeight}
          value={filterWeight}>
            <option value="U">Upward</option>
            <option value="D">Downward</option>
          </select>
          <span>Filter by source</span>
          <select onChange={handleFilterBySource}
            value={filterSource}>
            <option value="All">All</option>
            <option value="false">Api</option>
            <option value="true">Data base</option>
          </select>
          <span>Filter by temperaments</span>
          <select onChange={(e) => handleFilterByTemperaments(e)}
          value={filterTemps}>
            <option value="All">All</option>
            {temperaments.map((temp) => {
              if (temp.trim() !== "") {
                return (
                  <option key={temp} name={temp}>
                    {temp}
                  </option>
                );
              }
            })}
          </select>
          <button onClick={handleCleanFilters} className={style.cleanFilters}>Clean Filters</button>
        </div>
      </div>
      <div className={style.CardsContainerStyle}>
        {currentDogs?.map((dog) => {
          let temperaments;

          if (typeof dog.temperament === "string") {
            temperaments = dog.temperament;
          } else if (
            Array.isArray(dog.temperaments) &&
            dog.temperaments.length > 0
          ) {
            temperaments = dog.temperaments.map((t) => t.name).join(", ");
          } else {
            temperaments = "";
          }
          return (
            <Cards
              key={dog.id}
              id={dog.id}
              name={dog.name}
              minWeight={dog.minWeight}
              maxWeight={dog.maxWeight}
              minHeight={dog.minHeight}
              maxHeight={dog.maxHeight}
              life_span={dog.life_span}
              image={dog.image}
              temperament={temperaments}
              deleteDog={handleDeletedDog}
            />
          );
        })}

        <Paginate
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <div className={style.cardsShown}>
          <h3>Cards shown {cant}</h3>
        </div>
      </div>
      <footer className={style.footer}>
        <a
          href="https://www.linkedin.com/in/leonardo-em/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Contact Us</h1>
          Developed by Leonardo Micale
          <i className="bx bxl-linkedin"></i>
        </a>
      </footer>
    </div>
  );
};

export default CardsContainer;
