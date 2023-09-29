import React from "react";
import { useEffect, useState } from "react";
import style from "./Form.module.css";
import { getAllTemperaments } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import validate from "./Validate";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const temperaments = useSelector((state) => state.Temperaments).sort(
    (a, b) => {
      if (a < b) return -1;
      return 1;
    }
  );

  const [dogs, setDogs] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    temperaments: "",
    image: "",
  });

  const [disabled, setDisabled] = useState(true);

  const handleTemp = (event) => {
    setDogs({
      ...dogs,
      temperaments: [...dogs.temperaments, event.target.value],
    });
  };

  const deleteTemp = (tempDelete) => {
    setDogs({
      ...dogs,
      temperaments: dogs.temperaments.filter((temp) => temp !== tempDelete),
    });
  };

  const createDogConfirm = async (error) => {
    if (Object.keys(error).length === 0) setDisabled(false);
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    validate({
      ...dogs,
      [property]: value,
    });
    setDogs({
      ...dogs,
      [property]: value,
    });
    setErrors(
      validate({
        ...dogs,
        [property]: value,
      })
    );
    createDogConfirm(
      validate({
        ...dogs,
        [property]: value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/dogs", dogs);
      alert("Dog created successfully");
      navigate("/home");
    } catch (error) {
      alert(error.response.data.errors.join("\n"));
    }
  };

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  useEffect(() => {
    setErrors(validate(dogs));
    setDisabled(Object.keys(errors).length !== 0);
  }, [dogs]);

  return (
    <div className={style.bodyForm}>
      <div className={style.container}>
        <form className={style.Form} onSubmit={handleSubmit}>
          <div>
            <div>
              <label>name:</label>
              <input
                type="text"
                value={dogs.name}
                onChange={handleChange}
                name="name"
                className={!errors.name && dogs.name.length !== 0 ? style.success : null}
              />
              <span className={errors.name ? style.error : null}>
                {errors.name}
              </span>
            </div>


            <div>
              <label>minHeight (cm):</label>
              <input
                type="number"
                value={dogs.minHeight}
                onChange={handleChange}
                name="minHeight"
                className={!errors.minHeight && dogs.minHeight.length !== 0 ? style.success : null}
              />
            </div>
            <span className={errors.minHeight ? style.error : null}>
              {errors.minHeight}
            </span>

            <div>
              <label>maxHeight (cm):</label>
              <input
                type="number"
                value={dogs.maxHeight}
                onChange={handleChange}
                name="maxHeight"
                className={!errors.maxHeight && dogs.maxHeight.length !== 0 ? style.success : null}
              />
            </div>
            <span className={errors.maxHeight ? style.error : null}>
              {errors.maxHeight}
            </span>

            <div>
              <label>minWeight (kg):</label>
              <input
                type="number"
                value={dogs.minWeight}
                onChange={handleChange}
                name="minWeight"
                className={!errors.minWeight && dogs.minWeight.length !== 0 ? style.success : null}
              />
            </div>
            <span className={errors.minWeight ? style.error : null}>
              {errors.minWeight}
            </span>

            <div>
              <label>maxWeight (kg):</label>
              <input
                type="number"
                value={dogs.maxWeight}
                onChange={handleChange}
                name="maxWeight"
                className={!errors.maxWeight && dogs.maxWeight.length !== 0 ? style.success : null}
              />
            </div>
            <span className={errors.maxWeight ? style.error : null}>
              {errors.maxWeight}
            </span>

            <div>
              <label>life_span:</label>
              <input
                type="number"
                value={dogs.life_span}
                onChange={handleChange}
                name="life_span"
                className={!errors.life_span && dogs.life_span.length !== 0 ? style.success : null}
              />
            </div>
            <span className={errors.life_span ? style.error : null}>
              {errors.life_span}
            </span>

            <div className={style.image}>
              <label htmlFor="image">URL image:</label>
              <input
                type="url"
                value={dogs.image}
                onChange={handleChange}
                name="image"
                placeholder=""
                className={errors.image || !dogs.image ? null :  style.success}
              />
              <span className={errors.image ? style.error : null}>
                {errors.image}
              </span>
            </div>

            <div>
              <label>temperaments:</label>
              <select
                className={style.Select}
                onChange={(temp) => handleTemp(temp)}
              >
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
              
              <div>
                {dogs.temperaments.map((temp) => (
                  <div key={temp}>
                    <button
                      className={style.buttonDelete}
                      onClick={() => deleteTemp(temp)}
                    >
                      x
                    </button>
                    <span className={style.spanTemp}>{temp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={style.submit}>
              <button
                disabled={disabled}
                type="submit"
                className={
                  disabled ? style.buttonDisabled : style.buttonEnabled
                }
              >
                Create Dog
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
