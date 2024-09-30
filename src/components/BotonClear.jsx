import PropTypes from 'prop-types';
import '../styles/BotonClear.css';

const BotonClear = props => {
  return (
    <div onClick={ props.reset } className='boton-clear'>
      {props.children}
    </div>
  )
};

BotonClear.propTypes = {
  children: PropTypes.any.isRequired,
  reset: PropTypes.func.isRequired,
};

export default BotonClear;
