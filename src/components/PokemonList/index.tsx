import { useQuery } from "react-query";
import { fetchPokemons } from "../../services/fetchPokemons";

const PokemonList = () => {
  const { data: pokemonList, status} = useQuery('pokemonList', fetchPokemons)
  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error!</div>
  return (
    <>
     <ul>
      {
        pokemonList?.map(pokemon => {
          return <li key={pokemon.id}>
            <p>{pokemon.name}</p>
            <img src={pokemon.imageUrl} />
          </li>
        })
      }
     </ul>
    </>
  )
}

export default PokemonList;