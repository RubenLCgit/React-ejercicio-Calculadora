import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import logoApp from './images/logo.png';

const App = () => {

  const [Input, setInput] = useState('0');

  const partesOpAritm = Input.toString().split(/([x/+-])/);

  const obtenerValorPulsado = (event) => {
    const ultimoCaracter = Input.charAt(Input.length - 1);
    if (Input == '0') {
      setInput(event.target.innerText);
    } else if ((ultimoCaracter === 'x' || ultimoCaracter === '/' || ultimoCaracter === '+' || ultimoCaracter === '-') &&
      (event.target.innerText === 'x' || event.target.innerText === '/' || event.target.innerText === '+' || event.target.innerText === '-')) {
      alert('No puede haber dos operandos juntos');
    } else {
      setInput(Input + event.target.innerText);
    }
  };

  const resetInput = () => {
    setInput('0');
  };

  const calcularInput = () => {

    
    let result = 0;

    const realizarOperacion = (num1, operador, num2) => {
      switch (operador) {
        case 'x':
          return num1 * num2;
        
        case '/':
          return num1 / num2;
        
        case '+':
          return +num1 + +num2;
        
        case '-':
          return num1 - num2;
        
        default:
          return 0;
      }
    }

    const procesarOperacion = (operadores) => {
      let indice = 0;
      while (indice < partesOpAritm.length) {
        if (operadores.includes(partesOpAritm[indice])) {
          result = realizarOperacion(partesOpAritm[indice - 1], partesOpAritm[indice], partesOpAritm[indice + 1]);
          partesOpAritm.splice(indice - 1, 3, result.toString());
        } else {
          indice++;
        }
      }
    }

    procesarOperacion(['x', '/']);
    procesarOperacion(['+','-'])
    
    setInput(result.toString());
  }

  return (
    
    <div className='App'>
      <div className='logo-contenedor'>
        <img src={ logoApp } alt='Logo de la aplicación' className='logo' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input = { Input }/>
        <div className='fila'>
          <Boton valorPulsado = { obtenerValorPulsado } >1</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >2</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >3</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >+</Boton>
        </div>
        <div className='fila'>
          <Boton valorPulsado = { obtenerValorPulsado } >4</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >5</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >6</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >-</Boton>
        </div>
        <div className='fila'>
          <Boton valorPulsado = { obtenerValorPulsado } >7</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >8</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >9</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >x</Boton>
        </div>
        <div className='fila'>
          <Boton valorPulsado = { calcularInput } >=</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >0</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >.</Boton>
          <Boton valorPulsado = { obtenerValorPulsado } >/</Boton>
        </div>
        <div className='fila'>
          <BotonClear reset = { resetInput }>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
    
  )

};

export default App;
