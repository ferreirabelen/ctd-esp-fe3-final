import React from "react";
import { useState } from "react";


const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [msj, setMsj] = useState(false)


    function guardarNombre(e){
        setNombre(e.target.value)
    }

    function guardarEmail(e){
    setEmail(e.target.value)
    }

    function validarNombre(nombre){
        if(nombre.length >= 5){
            return true
        }else{
            alert("Por favor verifique su información nuevamente")
        }
    }

    function validarEmail(email){
        const validarEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return validarEmail.test(email)
        
    }

    function onSubmitFormulario(e){
        e.preventDefault()

        if(validarNombre(nombre) && validarEmail(email)){
            setMsj(`Gracias!!${nombre} te contactaremos cuando antes vía mail`)
        }else{
            alert("Por favor verifique su información nuevamente")
            
        }

    }

    return(
        <>
        
        <form onSubmit={onSubmitFormulario}>
        
            <input
            type="text"
            placeholder="Ingresar tu nombre"
            value={nombre}
            onChange={guardarNombre}
            
            />

            <input
            type="text"
            value={email}
            placeholder="Ingresar tu email de contacto!"
            onChange={guardarEmail}
            
            />

        <button type="submit" className="botonForm">Enviar</button>
        </form>
        


        { msj ? <div className="mensaje">Gracias!! {nombre} te contactaremos cuando antes vía mail</div> : null}

        </>
        

        
    )

};

export default Form;
