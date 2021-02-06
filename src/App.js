import './App.css';
import React, {useState , useEffect} from "react"

function App() {
  const[ pokemon, setpokemon] = useState([]);

  const showNames= () =>{
      fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json()) 
      .then(response => setpokemon(response.results))
      console.log({pokemon})
    
  };

  return (
    <div className="App">
      <input type="submit" onClick={showNames} value="Fetch pokemon" />
      {
        pokemon.length>0 && pokemon.map((value,index)=> {
          return(
        <div key={index} > {value.name}</div>)
        })} 
    </div>
  );
}


export default App;
