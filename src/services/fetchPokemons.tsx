import { PokemonInfo } from "../interfaces/types";

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/?limit=10"

const fetchPokemons = async () => {
  let listOfPokemons: Array<PokemonInfo> = []
  const result = await fetch(`${POKEAPI_URL}`);
  const basicPokemonData = await result.json();
  console.log('basic pok', basicPokemonData);
  for (let pokemon of basicPokemonData.results) {
    const fetchPokemonDetails = await fetch(pokemon.url);
    const pokemonDetails = await fetchPokemonDetails.json();
    listOfPokemons.push({
      id: pokemonDetails.id,
      name: pokemonDetails.name,
      imageUrl: pokemonDetails.sprites.other.dream_world.front_default,
      type: pokemonDetails.types[0].type.name
    })
  }
  
  return listOfPokemons;
}

export { fetchPokemons };