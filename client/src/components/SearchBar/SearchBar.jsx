import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBar, getAllBeers} from '../../redux/actions/index';

//function validation(payload){
//     let error = {};
    
//     if(!payload || isNaN(payload) !== true){
//         error.payload = 'thats not a dogito!'                             
//     }
//     return error;
// };

export default function SearchBar({setPage}){
const dispatch = useDispatch();
const [ payload, setSearch ] = useState('');
// const [ error, setError ] = useState({});

function handleInput(e){
    e.preventDefault();
    setSearch(e.target.value);
    // setError(validation(payload))
}

function handleSubmit(e){
    e.preventDefault();
    // setError(validation(payload));
    // const error = validation(payload);

    // if(Object.values(error).length === 0){
        dispatch(searchBar(payload));
        //setPage(1)
        setSearch('');
    //}else{
    //     alert('thats not a dog!')
    // }  
}

function handleBack(){
    dispatch(getAllBeers());
    //setPage(1);
}

    return (
        <div >
            <input  value={payload} type='text' placeholder='Search a beer...' onChange={(e) => handleInput(e)}/>
            <button type='submit' onClick={(e)=> handleSubmit(e)}>Search</button>
            <button onClick={handleBack}>Clean search</button>
        </div>
    )
}
