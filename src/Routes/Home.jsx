import React, {useEffect, useState } from 'react'
import Card from '../Components/Card'
import "../index.css"



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const [dentistas, setDentistas] = useState([]);

  const getDentistas = async() => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respuesta.json()
    setDentistas(data)
  
  }

  useEffect(() => {
    getDentistas()
  },[])


  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid '>
        {
          dentistas.map(dentista => (
            <div key={dentista.id}>
              <Card name={dentista.name} username={dentista.username} email={dentista.email} id={dentista.id} key={dentista.id}/>
            </div>

          ))
        }
      </div>
    </main>
  )
}

export default Home

