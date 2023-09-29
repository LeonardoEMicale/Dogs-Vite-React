import { useState } from "react";
import style from "./Cards.module.css";
import perritoImage from "./perrito404.jpg";

//renderizado condicional del boton para eliminar el perro creado
/*{
  isNaN(props.id)
  ? <button onClick={() => props.deleteDog(props.id)}>x</button>
  : null
}*/

const Cards = (props) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className={`${style.Cards} ${isFlipped ? style.Flipped: ''}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
     <div className={`${style.CardInner} ${isFlipped ? style.Back : ''}`}>
     <div className={style.Front}>
    
        <img src={props.image ? props.image : perritoImage} alt="" />
      
      <div className={style.info}>
        <h2>{props.name}</h2>
        <h3>Weight: {props.minWeight} - {props.maxWeight} Kg</h3>
        <h3>{props.temperament}</h3> 
        <div className={style.CardFooter}></div>
      </div>
    </div>
    <div className={style.Back}>
            <h2>ID:{props.id}</h2>
            <h2>Breed: {props.name}</h2>
            <h3>Min-Weight: {props.minWeight} Kg</h3>
            <h3>Max-Weight: {props.maxWeight} Kg</h3>
            <h3>Min-Height: {props.minHeight} Cm</h3>
            <h3>Max-Height: {props.maxHeight} Cm</h3>
            <h3>Temperaments: {props.temperament}</h3>
            <h3>Life span: {props.life_span}</h3>
    </div>
    </div>
    </div>
  );
};

export default Cards;
