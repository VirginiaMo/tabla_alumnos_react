import './Tabla.css';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from "react";


function DatosTabla(){
    const[datos, setDatos] = useState([])
useEffect(() => { 
    fetch('/data/data.json')
    .then(response => response.json())
    .then(datos => setDatos(datos))
}, [])

return datos
}



export default function Datos(){
    const jsonData = DatosTabla()

    return (	

	          <Table>
	            <thead>
	              <tr className='tabla'>
	                <th>NOMBRE <FontAwesomeIcon icon={faExchangeAlt} /></th>
	                <th>CIUDAD <FontAwesomeIcon icon={faExchangeAlt} /></th>
	                <th>PAÍS <FontAwesomeIcon icon={faExchangeAlt} /></th>
	                <th>TELÉFONO <FontAwesomeIcon icon={faExchangeAlt} /></th>
	                <th>CORREO ELECTRÓNICO <FontAwesomeIcon icon={faExchangeAlt} /></th>
                    <th>CORREO ETIQUETAS <FontAwesomeIcon icon={faExchangeAlt} /></th>
	              </tr>
	            </thead> 
	            <tbody>

	            {jsonData.map((item, index) => (

	              <tr key={index}>
                    <td>{item.nombre}</td>
	                <td>{item.ciudad}</td>
	                <td>{item.país}</td>
	                <td>{item.teléfono}</td>
	                <td>{item.email}</td>
                    <td>{item.etiquetas.map(etiqueta => { return <span className="btn-primary">{etiqueta}</span> })}</td>
	              </tr>

	            ))}
               
              

	            </tbody>

	          </Table>


	)

}