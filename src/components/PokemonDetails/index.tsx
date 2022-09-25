import { useLocation, Link, useParams } from "react-router-dom"
import { useQueryClient, useQuery, UseQueryResult } from "react-query";
import './styles.css'
import { getIndividualPokemon } from "../../services/fetchPokemons";


const PokemonDetails: React.FC = () => {
  const location = useLocation();
  const { data, status, error } = useQuery('pokemonDetails', () => getIndividualPokemon(location.pathname))
  if (status === "loading") return <div>Loading...</div>
  if (status === "error") return <div>Error</div>

  return (
    <div className="pokemon-details-container">
      <div className="pokemon-details-wrapper">
        <div className="image-wrapper">
          <img src={data.sprites.other["official-artwork"].front_default}></img>
        </div>
        <div className="text-details">
          <span>#{data.id}</span>
          <h3>{data.name}</h3>
          <p>{data.types[0].type.name}</p>
        </div>
      </div>
      <Link className="back-button" to="/">Back</Link>
    </div>
  )
}

export default PokemonDetails