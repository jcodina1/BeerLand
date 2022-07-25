import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchBar, getAllBeers } from '../../redux/actions/index';
import { useLocalStorege } from '../../Hooks/useLocalStorage';
import style from '../SearchBar/SearchBar.module.css'


export default function SearchBar() {
  const dispatch = useDispatch();
  const [value, setValue] = useLocalStorege('value', '')
  const allBeersx2 = useSelector(state => state.beers);

  const onChange = (e) => {           // handleInput
    e.preventDefault();
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {       //handleSubmit
    setValue(searchTerm)
    dispatch(searchBar(value));
    setValue('')
  };

  const onSearch2 = (payload) => {
    dispatch(searchBar(payload));
  }

  function handleBack() {
    dispatch(getAllBeers());
    //setPage(1);
  }
  console.log(value)
  return (
    <div className={style.searchBox}>
      <div>
        <input className={style.searchTxt} type="text" value={value} onChange={onChange} />
      </div>
      <div>
        <button className={style.searchBtn} onClick={() => onSearch(value)}></button>
      </div>
      <div>
        {allBeersx2?.filter((item) => {
          const searchTerm = value.toLowerCase();
          const beerName = item.name.toLowerCase();
          return (
            searchTerm &&
            beerName.startsWith(searchTerm) &&      //no termino de entender esto!
            beerName !== searchTerm
          );
        })
          .slice(0, 3)
          .map((item) => (
            <li
              onClick={() => onSearch2(item.name)}
              key={item.name}
            >
              {item.name}
            </li>
          ))}
      </div>
      <button className={style.cleanBtn} onClick={handleBack}>Clear</button>
    </div>
  );
}