import { useQuery, UseQueryResult } from "react-query";
import { fetchPokemons } from "../../services/fetchPokemons";
import PokemonRow from "../PokemonRow";
import { PokemonInfo } from "../../interfaces/types";
import './styles.css'

const PokemonList: React.FC = () => {
  const { data, status}: UseQueryResult<PokemonInfo[], string> = useQuery('pokemonList', fetchPokemons)
  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error!</div>
  const pokemonList = data;

  return (
    <section className="pokemon-list">
     <ul className="ul">
      {
        pokemonList?.map(pokemon => {
          return (
            <li className="li" key={pokemon.id}>
              <PokemonRow
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                type={pokemon.type}
              />
            </li>
          )
        })
      }
     </ul>
    </section>
  )
}

export default PokemonList;