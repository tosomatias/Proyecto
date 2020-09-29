import Axios from 'axios';
import React, { Fragment ,useEffect,useState} from 'react';
import Formulario from './components/Formulario';
import Canciones from './components/Canciones';


function App() {
  const [busquedaLetra,guardarBusquedaLetra] = useState({});
  const [letra,guardarLetra] = useState("");

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0 )return;
    const consultarApi = async() => {
      const {artista,cancion} = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const respuesta = await Axios.get(url);
      guardarLetra(respuesta.data.lyrics);
    

    } 
    consultarApi();
  },[busquedaLetra]);
  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}

      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Canciones 
              letra= {letra}
            />
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;
