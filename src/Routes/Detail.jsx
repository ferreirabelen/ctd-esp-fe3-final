import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentista, setDentista] = useState([]);
  const param = useParams();
  const params = parseInt(param.id)
  console.log(params)
  console.log(param)

  const getDentista = async () => {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${params}`);
    const data = await respuesta.json();
    console.log(data);
    setDentista(data)
  };

  useEffect(() => {
    getDentista();
  },[])
  return (
    <>
      <h1>Detail Dentist {dentista.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='cardDetail'>
      <img src="../images/doctor.jpg" alt="doctor" className="imgDoctor"/>
        <h2> {dentista.name}</h2>
        <p>Mail : {dentista.email}</p>
        <p>Phone : {dentista.phone}</p>
        <p>Web : {dentista.website}</p>
      </div>
    </>
  )
}

export default Detail