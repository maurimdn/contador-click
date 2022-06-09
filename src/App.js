
import './App.css';
import Boton from './componenetes/Boton'
import Contador from './componenetes/Contador'
import './componenetes/boton.css'
import './componenetes/contador.css'
import {useState} from 'react';



function App() {

  const [numClicks, setNumClicks] = useState(0)

 const sumarClick = () =>{
  setNumClicks(numClicks + 1)
 
 }

 const restarClick = () =>{
  setNumClicks(numClicks === 0  ? 0 :  numClicks - 1)
 
 }

 const reiniciarContador = () =>{
   setNumClicks(0)
 }
  return (
    <div className="App">
     <div className='contenedor-principal'>
       
       <Contador numClicks = {numClicks} />
       
       
       <Boton
       texto='Sumar'
       esBotonDeClick={true}
       manejarClick={sumarClick}
       />

      <Boton
       texto='Restar'
       esBotonDeClick={true}
       manejarClick={restarClick}
       />

      <Boton
       texto='Restablecer'
       esBotonDeClick={false}
       manejarClick={reiniciarContador}
       />
     </div>

    </div>
  );
}

export default App;
