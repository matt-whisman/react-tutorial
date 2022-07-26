import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState({});
  const [loadState, setLoadState] = useState("LOADING");

  /*     useEffect(() => {
        // Utilizes the setTimeout, to increment the value of count by 1 every 3 seconds
        setTimeout(() => {
            setCount(count+1)
        }, 3000)
    }, [count]) // You WILL need a dependency array */

  /*     useEffect(() => {
        console.log(count)
    }, [count]) */

  useEffect(() => {
    // https://pokeapi.co/api/v2/pokemon/{id or name}/
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
        setLoadState("LOADED");
      });
  }, [pokemonId]);

  return (
    <>
      <h1>Home</h1>
      <p>Current pokemon id: {pokemonId}</p>
      <div className="pokemon">
        {loadState === "LOADED" ? (
          <>
            <img src={pokemon.sprites.front_default} alt="" />
            <h2>{pokemon.name}</h2>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {pokemonId > 1 ? (
        <button onClick={() => setPokemonId(pokemonId - 1)}>
          Previous Pokemon
        </button>
      ) : (
        <></>
      )}
      {pokemonId < 10 ? (
        <button onClick={() => setPokemonId(pokemonId + 1)}>
          Next Pokemon
        </button>
      ) : (
        <></>
      )}
      {/* <button onClick={ () => setCount(count+1) }>Increment</button> */}
    </>
  );
}
