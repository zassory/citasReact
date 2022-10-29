import { useState } from 'react';
import { 
    Header , 
    Formulario , 
    ListadoPacientes } from './components';

//------------------------------------------------->
export const App = () => {

  const [ pacientes , setPacientes  ] = useState([]);
  
  const [ paciente  , setPaciente ] = useState({});
    

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={ pacientes }
          setPacientes={ setPacientes }
          paciente={ paciente }
        />
        <ListadoPacientes 
          pacientes={ pacientes }
          setPaciente={ setPaciente }
        />
      </div>
    </div>
  )
}
