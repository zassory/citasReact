import { useState , useEffect } from 'react';
import { 
    Header , 
    Formulario , 
    ListadoPacientes } from './components';

//------------------------------------------------->
export const App = () => {

  const [ pacientes , setPacientes  ] = useState([]);
  const [ paciente  , setPaciente ] = useState({});

  useEffect(()=> {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; //Si no hay nada en LS agregale un arreglo vacio

      setPacientes(pacientesLS);
    }

    obtenerLS();

  },[]);//Se ejecuta una sola vez

  useEffect(()=> {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  },[ pacientes ]);

  const eliminarPaciente = ( id ) => {
     const pacientesActualizados = pacientes.filter( ( paciente ) =>{
       return paciente.id !== id
     });
    //const pacientesActualizados = pacientes.filter( paciente =>  paciente.id !== id );
    setPacientes( pacientesActualizados );    
  }
    
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={ pacientes }
          setPacientes={ setPacientes }
          paciente={ paciente }
          setPaciente={ setPaciente }
        />
        <ListadoPacientes 
          pacientes={ pacientes }
          setPaciente={ setPaciente }
          eliminarPaciente={ eliminarPaciente }
        />
      </div>
    </div>
  )
}
