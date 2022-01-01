import './DatosTabla.css';
import React, {useEffect, useState} from "react";

export default function DatosTabla( { sortBy, searchBy }){

    const[datos, setDatos] = useState([]);
    const[sortedData, setSortedData] = useState([]);

    React.useMemo(() => {
        let sortedDatos = [...datos];
        if (sortBy !== null) {
            sortedDatos.sort((a, b) => {
                if (a[sortBy.key] < b[sortBy.key]) {
                  return sortBy.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortBy.key] > b[sortBy.key]) {
                  return sortBy.direction === 'ascending' ? 1 : -1;
                }
                return 0;
              });
          }
          setSortedData(sortedDatos);
        return sortedDatos;
    }, [datos, sortBy]);
	
	useEffect(() => { 
		fetch('/data/data.json')
		.then(response => {  return response.json(); })
		.then(datos => setDatos(datos))
	}, []);
    

	return 	(
		
		<tbody>
			{sortedData.filter((item)=>{
				if(searchBy == ""){
					return item
				}else if(item.nombre.toLowerCase().includes(searchBy.toLocaleLowerCase())
					|| item.ciudad.toLowerCase().includes(searchBy.toLocaleLowerCase())
					|| item.país.toLowerCase().includes(searchBy.toLocaleLowerCase())
					|| item.email.toLowerCase().includes(searchBy.toLocaleLowerCase())
					|| item.ciudad.toLowerCase().includes(searchBy.toLocaleLowerCase())){
					return item
				}
			}).map((item, index) => (
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
		)
}
