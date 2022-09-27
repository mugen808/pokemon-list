import { PokemonGenericInfo, PokemonInfo, PokemonResult } from "../interfaces";

const POKEAPI_BASIC_LIST_URL = "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=";
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

const getPokemonsDetails = async (basicPokemonData: Array<PokemonGenericInfo>): Promise<PokemonInfo[]> => {
  let listOfPokemons: PokemonInfo[] = []
  for (let pokemon of basicPokemonData) {
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

const getIndividualPokemon = async (urlParameters: string) => {
  const response = await fetch(`${POKEAPI_BASE_URL}${urlParameters}`)
  const data = await response.json()
  return data;
}

const fetchPokemons = async (page: number): Promise<PokemonResult> => {
  const offset = page === 1 ? 0 : page * 10;
  const response = await fetch(`${POKEAPI_BASIC_LIST_URL}${offset}`);
  const { next, previous, results } = await response.json();
  const detailedPokemonData: PokemonInfo[] = await getPokemonsDetails(results)
  let detailedPokemonList: PokemonResult = { next, previous, results: detailedPokemonData }
  return detailedPokemonList;
}

export { fetchPokemons, getIndividualPokemon };