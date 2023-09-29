import style from './CardsDetail.module.css';
import perritoImage from './perrito404.jpg'


const CardsDetail = (props) => {
    return(
        
        <div className={style.CardsDetail}>
            
             <img src={
                props.image
                ? props.image
                : perritoImage
                } alt=""/>
                <div className={style.info}>
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
    )
};


export default CardsDetail;