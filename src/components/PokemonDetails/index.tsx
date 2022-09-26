import { useLocation, Link } from "react-router-dom"
import { useQuery } from "react-query";
import './styles.css'
import { getIndividualPokemon } from "../../services/fetchPokemons";
import PokemonType from "../PokemonType";
import LoadingScreen from "../Loading";

const PokemonDetails: React.FC = () => {
  const location = useLocation();
  const { data, status } = useQuery('pokemonDetails', () => getIndividualPokemon(location.pathname))
  if (status === "loading") return <LoadingScreen />
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
          <PokemonType type={data.types[0].type.name} />
        </div>
      </div>
      <Link className="back-button" to="/">Back</Link>
    </div>
  )
}

export default PokemonDetails