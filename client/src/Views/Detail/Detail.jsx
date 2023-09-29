import { useEffect, useState } from "react";
import { getDogsById } from "../../redux/actions";
import { useDispatch } from "react-redux";
import CardsDetailContainer from "../../Components/CardsDetailContainer/CardsDetailContainer";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getDogsById(id))
    .then(() => setIsLoading(false))
    .catch(() => setIsLoading(false))

  }, [id]);

  return (
    <div className={style.Detail}>
      {isLoading ? <p>Loading</p>
      : <CardsDetailContainer />
}
    </div>
  );
};

export default Detail;
