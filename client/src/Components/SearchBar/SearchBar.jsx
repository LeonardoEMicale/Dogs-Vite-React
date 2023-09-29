import style from './SearchBar.module.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {getAllDogs, getDogsByName} from '../../redux/actions';

const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSearch = () => {
        name.length === 0
        ? dispatch(getAllDogs())
        : dispatch(getDogsByName(name));
        setName('');
    };


    return (
        <div className={style.SearchBar}>
            <input placeholder='Search by breed name' onChange={handleChange} type="search" value={name} />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
};


export default SearchBar;