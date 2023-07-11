import './App.css';
import axios from'axios';
import {useState} from 'react'
import Pokemon from './components/Pokemon'

function App() {

  const [pokemonData, setPokemonData] = useState([])
  // Use State Variable to store all pokemon data pulled from API and how to update the variable


  const getPokemonAxios = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0")
    .then(res=>setPokemonData(res.data.results))
    .catch(err=>console.log(err))
  }
// Fetch all the pokemon names and URL for that pokemon that containes more information and store it in the pokemonData Use sTate Variable 

  return (
    <div className="App">
      <button onClick={getPokemonAxios}>Fetch 'Em All</button>
      {/* the click of button will execute the getPokemonAxios funciton labeled above */}
      <Pokemon mons={pokemonData}/>
      {/* define the prop for pokemon data to be passed into the component child for use in the component */}
    </div>
  );
}

export default App;