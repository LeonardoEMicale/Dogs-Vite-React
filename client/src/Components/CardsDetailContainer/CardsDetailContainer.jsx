import CardsDetail from "../CardsDetail/CardsDetail";
import style from "./CardsDetailContainer.module.css";
import { useSelector } from "react-redux";

//estado vacio para mapear y crear el perro
//funcion cleaner para setear el estado nuevamente a 0; a utilizar a  home
//condicional si el estado esta en 0 retornar;
//validaciones de peso, nombre, demas; ademas validar en back y front.

//const [dog, setDog] = useState([]);



const CardsDetailContainer = () => {
  const dog = useSelector((state) => state.dogDetail);
  return (
    <div className={style.CardsDetailContainer}>
      {dog?.map((dog) => {
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
          <CardsDetail
            key={dog.id}
            id={dog.id}
            name={dog.name}
            minWeight={dog.minWeight}
            maxWeight={dog.maxWeight}
            minHeight={dog.minHeight}
            maxHeight={dog.maxHeight}
            image={dog.image}
            temperament={temperaments}
            life_span={dog.life_span}
          />
        );
      })}
    </div>
  );
};

export default CardsDetailContainer;
