import PropTypes from 'prop-types';
import '../styles/Pantalla.css'

const Pantalla = ({ input }) => (

  <div className='input'>
    {input}
  </div>
  
);

Pantalla.propTypes = {
  input: PropTypes.any.isRequired,
};

export default Pantalla;