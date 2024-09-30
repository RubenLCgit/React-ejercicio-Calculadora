import PropTypes from 'prop-types';
import '../styles/Boton.css';

const Boton = props => {

  const esOperador = (value) => isNaN(+value) && (value != '.') && (value != '=');

  return (

    <div onClick={ props.valorPulsado } className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
      {props.children}
    </div>

  )
};

Boton.propTypes = {
  children: PropTypes.any.isRequired,
  valorPulsado: PropTypes.func.isRequired,
};

export default Boton;