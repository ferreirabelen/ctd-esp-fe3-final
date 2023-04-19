import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import {ContextGlobal} from '../Components/utils/global.context'


const Favs = () => {

  const {state} = useContext(ContextGlobal)


  if (state.length === 0){
    return <h2 className="noFav">No hay favoritos guardados ⭐</h2>
}


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {
          state?.map((s) =>(
            <Card id={s.id} key={s.id} name={s.name} username={s.username} />
          ))
        }

        
      </div>
    </>
  );
};

export default Favs;
