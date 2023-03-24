import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import { useFetch } from '../hooks/useFetch';

export const HomePage = () => {


const [inputValue, setInputValue] = useState("");

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

   
    const {api} = useFetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)

  return (
<>

   <div className="grid-container">
   <div className="animate__animated animate__backInRight container1 ">
      <div className="tittle">
      <h1 >Rick And Morty App</h1>
      </div>
      </div>
   </div>
     <div className="cards">

     <div className="container">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">Seach: </span>
  </div>
  <input type="text" className="form-control" placeholder="Rick Sanchez" aria-label="Username" onChange={handleInputChange} aria-describedby="basic-addon1"/>

  
</div>
<br />
<br />
<br />
{inputValue === ''
? <Cards/>
:
<div className="inCards ">
{
  api.map(datos => ( 
   <div className="card mb-3 m-3 animate__animated animate__fadeIn"  key = {datos.id}>
   <div className="row g-0">
     <div className="col-md-4">
       <img src={datos.image} className="img-fluid rounded-start" alt="..."/>
     </div>
     <div className="col-md-8">
       <div className="card-body">
         <h3 className="card-title">{datos.name}</h3>
         <h6 className="card-text"><strong>Description: </strong>{datos.status} - {datos.species}</h6>
         <hr />
         <p className="card-text"> <strong>Origin-location: </strong>{datos.origin.name}</p>
         <p className="card-text"> <strong>Last known location: </strong>{datos.location.name}</p>
       
       </div>
     </div>
   </div>
 </div>
  ))
}
</div>


}


    
       </div>

     



     
     <div className="footer">
       <p>© 2023 Copyright: <a href="https://github.com/Alexcab24" style = {{color: '#cad9d7'}}>Alex Cabral</a></p>
       
     </div>
</>
  )
}

export default HomePage
