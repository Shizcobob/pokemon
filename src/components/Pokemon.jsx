import React from 'react'

const Pokemon = (props) => {

    const {mons} = props;

    console.log(mons)

  return (
    <div>
        <div>
        <ul>
        {mons.length>0 ? mons.map((pokemon) => (
            // if the length of mons (no results) is less than zero, (hasnt been clicked for the button), then it want appear here
            // Once clicked, the map function will execute and and provide the 
        <li key={pokemon.name}>{pokemon.name}</li>
        // With the Pokemon API, the only results that come back are the name and a URL
        // if more informtion is desired, there would need to be another "fetch" operation for the pokemon's specific URL to obtain the reminder of the informatoin
        // Each API return is unique at the amount provided on the first pull
            )):
            <p> click fetch</p>
            // This will Appear until Fetch em all button is clicked but will b replaced by the 
        }
        </ul>
        </div>
    </div>
  )
}

export default Pokemon