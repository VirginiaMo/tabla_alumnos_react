import { useState } from "react";
import DatosTabla from '../pure/DatosTabla';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

export default function TablaOrdenada( { searchText }) {

	const[sortBy, setSortBy] = useState(null); 

	const requestSort = key => {
		let direction = 'ascending';
		if (sortBy && sortBy.key === key &&	sortBy.direction === 'ascending') {
		  direction = 'descending';
		}
		setSortBy({ key, direction });
	  }

    return (	
			<div className='containerTabla'>
	          <Table>
	            <thead>
	              <tr className='tabla'>
	                <th >NOMBRE <FontAwesomeIcon icon={faExchangeAlt} onClick={() => requestSort('nombre')} /></th>
	                <th>CIUDAD <FontAwesomeIcon icon={faExchangeAlt}  onClick={() => requestSort('ciudad')} /></th>
	                <th>PAÍS <FontAwesomeIcon icon={faExchangeAlt}  onClick={() => requestSort('país')} /></th>
	                <th>TELÉFONO </th>
	                <th>CORREO ELECTRÓNICO <FontAwesomeIcon icon={faExchangeAlt}  onClick={() => requestSort('email')} /></th>
                    <th>ETIQUETAS <FontAwesomeIcon icon={faExchangeAlt}  onClick={() => requestSort('etiquetas')} /></th>
	              </tr>
	            </thead> 

				<DatosTabla sortBy={sortBy} searchBy={searchText} />
	          </Table>
			</div>
	)
}