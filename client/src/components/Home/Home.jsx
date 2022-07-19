import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowBeers from '../ShowBeers/ShowBeers'


export default function Home(){
  const [userType, setUserType] = useState('')

  return (
    <div>
      <ShowBeers/>
    </div>
  );
}
