import { useState } from 'react';
import { 
    Header , 
    Formulario , 
    ListadoPacientes } from './components';

//------------------------------------------------->
export const App = () => {

  const [ pacientes , setPacientes  ] = useState([]); //State de pacientes plural  n
  const   [ paciente  , setPaciente ] = useState({}); //State de paciente singular 1
    

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={ pacientes }
          setPacientes={ setPacientes }
        />
        <ListadoPacientes 
          pacientes={ pacientes }
          setPaciente={ setPaciente }
        />
      </div>
    </div>
  )
}
