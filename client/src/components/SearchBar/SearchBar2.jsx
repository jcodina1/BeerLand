import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchBar, getAllBeers, searchBar2, getAllSellers } from '../../redux/actions/index';
import { useLocalStorege } from '../../Hooks/useLocalStorage';
import style from '../SearchBar/SearchBar.module.css'
import { setPage } from '../../redux/actions/index';


export default function SearchBar2() {
  const dispatch = useDispatch();
  const [value, setValue] = useLocalStorege('value', '')
  const allBeersx2 = useSelector(state => state.sellers);

  const onChange = (e) => {           // handleInput
    e.preventDefault();
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {       //handleSubmit
    setValue(searchTerm)
    dispatch(searchBar2(value));
    setValue('')
    dispatch(setPage(1))

  };

  const onSearch2 = (payload) => {
    dispatch(searchBar2(payload));
    dispatch(setPage(1))
    setValue('')
  }

  function handleBack() {
    dispatch(getAllSellers());
    setValue("")
    //setPage(1);
  }

  return (

    <div className={style.searchBox}>
      <div className={style.complete}>
        <input className={style.searchTxt} type="text" value={value} onChange={onChange} />

        <div className={style.autocomplete}>
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

      </div>
      <div className={style.buttonsAlign}>
        <button className={style.searchBtn} onClick={() => onSearch(value)}></button>
        <button className={style.cleanBtn} onClick={handleBack}>Clear</button>
      </div>

    </div>



  );
}