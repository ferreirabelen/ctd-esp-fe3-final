import React, { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { ContextGlobal } from "./utils/global.context";



const Card = ({name, id,username, email}) => {

  const {state,dispatch} = useContext(ContextGlobal)
  const [isFav, setIsFav] = useState(false);


  const addFav = ()=>{
    dispatch( {type:"addFav", payload:{name,username,id} })
    setIsFav(true);
  }

  function isFavCard(){
    return state.some(fav => fav.id === id)

  }

  useEffect(() =>{
    setIsFav(isFavCard())
  },[state])

  return (
    <div className="card">
        
        <Link to={`/detail/${id}`}>
          <div key={id}>
            <img src="../images/doctor.jpg" alt="doctor" className="imgDoctor"/>
            <h1>{name}</h1>
            <h3>{username}</h3>
          </div>
          </Link>
          
          <button onClick={addFav} className="favButton" disabled={isFav}>add fav</button>
        
    </div>

  );
};

export default Card;
