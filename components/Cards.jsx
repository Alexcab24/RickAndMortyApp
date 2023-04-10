
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useFetch } from '../src/hooks/useFetch';

const Cards = () => {

    const [counter, setCounter] = useState(1);
    const {api} = useFetch(`https://rickandmortyapi.com/api/character?page=${counter}`);



  return (
  <>

<div className="number">
       <h3>{counter}</h3>
     </div>
     <div className="buttons" >
  <Button  variant="primary" style = {{margin: '15px'}} onClick = {() => setCounter(counter - 1)} disabled={counter <= 1}> ← Prev</Button>
  <Button variant="primary" style = {{margin: '15px'}} onClick = {() => setCounter(counter + 1)} disabled={counter >= 42}> Next → </Button>
</div>


       <div className="inCards">
       {
         api.map((datos) => ( 
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
     <div className="number">
       <h3>{counter}</h3>
     </div>

  <div className="buttons" >
  <Button variant="primary" style = {{margin: '15px'}} onClick = {() => setCounter(counter - 1)} disabled={counter <= 1}> ← Prev</Button>
  <Button variant="primary" style = {{margin: '15px'}} onClick = {() => setCounter(counter + 1)} disabled={counter >= 42}> Next →</Button>
</div>


  </>
  )
}

export default Cards
