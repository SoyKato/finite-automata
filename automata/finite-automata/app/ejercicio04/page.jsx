'use client'
import React, {useState} from 'react'


const Ejericio03 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado, setResultado] = useState('');
    

    const matriz = [
        [1, 2, 200],
        [1, 3, 200],
        [4, 2, 200],
        [1, 3, 200],
        [4, 2, 200]
    ]
    const analizar = () => {
        const c = palabra.split(''); //Palabra a analizar
        let i = 0; //iteracion para while

        let estado = 0; //variable estado que funcionara como estado inicial
        let caracter = 0;

        const resultado = document.querySelector('#resultado');

        //Crear patrones para analizar la palabra caracter por caracter
        const isA = new RegExp('[aA]');
        const isB = new RegExp('[bB]');


        while (i < c.length) {

        if (isA.test(c[i])) {
            caracter = 0
        } else if(isB.test(c[i])) {
            caracter = 1
        } else {
            caracter = 2
        }
        estado = matriz[estado][caracter]

        if (estado === 200) {
            setResultado('palabra invalida')
            resultado
            return
        }
        i++
    }
    if(estado === 1){
        setResultado('palabra aceptada')
        resultado     
    }else if(estado === 2){
        setResultado('palabra aceptada')
        resultado  
    }
    else{
      setResultado('palabra invalida')
      resultado
    }
}
  const limpiar = () => {

  setPalabra('');
  setResultado('');
  }
  return (
    <div className = 'max-w-lg mx-auto mt-5'>
      <h1 className = 'text-center uppercase'>Acepta todas las cadenas del Σ={a,b} donde la palabra inicia y termina en la misma letra.</h1>
      <div className = 'mt-5'>
        <input 
        className = 'w-full p-2 rounded'
        value = {palabra} onChange = {e => setPalabra(e.target.value)} id = 'variable' type="text" placeholder = 'Coloca la entrada'/>
      </div>
      <div>
        <button onClick={analizar}>analizar la entrada</button>
      </div>
      <div>
          <button onClick={limpiar}>Limpiar</button>
      </div>
      <div id = "resultado">
        {resultado}
      </div>
    </div>
  )
}

export default Ejericio03