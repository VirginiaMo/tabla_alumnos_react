import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Buscador.css'


const Buscador = ( { setSearchText }) => {
    

    return (  
        <div className='containerBuscador'>
            <p>Alumnos</p>
            <div className='iconoPlaceholder'>
            <FontAwesomeIcon icon={faSearch}  />
            <input className='buscador' placeholder='Buscar por Nombre, Email o Palabra clave...' type="search" 
            onChange={event =>{setSearchText(event.target.value)}}></input>
            </div>
        </div>
    );
}
 
export default Buscador;