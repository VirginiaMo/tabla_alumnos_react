import Buscador from './Buscador/Buscador';
import TablaOrdenada from './TablaOrdenada';
import { useState } from "react";

const TablaYBuscador = () => {

    const [searchText, setSearchText] = useState('')

    return ( 
        <>
            <Buscador setSearchText={setSearchText} />
            <TablaOrdenada searchText={searchText} />
        </>
     );
}
 
export default TablaYBuscador;