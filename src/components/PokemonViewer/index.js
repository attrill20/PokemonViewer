import React, {useEffect, useState} from "react";

function PokemonViewer({ id }) {

  const[pokemon, setPokemon] = useState()

  useEffect(()=>{
    async function pokemonFetch(){
        const res = await fetch ("https://pokeapi.co/api/v2/pokemon/1");
        const data =await res.json();
        console.log(data)
        setPokemon(data)
      }
      pokemonFetch()
  }
   ,[id]);

  return (
  <div className="pokemon-viewer">  
  {pokemon && (
        <>
          <h2> Name: {pokemon.name} </h2>
          <p> ID: {pokemon.id} </p>
          <p> Weight: {pokemon.weight} </p>
          </>
      )}
    </div>
  );
}

export default PokemonViewer;



  //TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1' and display the data

  // TODO: Task 2 - send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!