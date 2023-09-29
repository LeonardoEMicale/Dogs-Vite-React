import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../../redux/actions";
import style from './Home.module.css';


const Home = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        dispatch(getAllDogs())
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false))
    }, [dispatch]);


    return(
        <div className={style.HomeStyle}>
            {
                isLoading ? <p>Loading</p>
                :<CardsContainer />
            }
        </div>
    )
};

export default Home;