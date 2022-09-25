import PokemonType from '../PokemonType';
import './styles.css'
import { PokemonResult } from '../../interfaces/types';
import { Link } from 'react-router-dom';

const PokemonGrid: React.FC<PokemonResult>  = ({ results }) => {
  return (
    <ul className="list-container-grid">
      {
        results?.map(pokemon => {
          return (
            <li key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`} state={{ pokemon }} className="grid-wrapper">
                <div className="avatar-wrapper-grid">
                  <img src={pokemon.imageUrl} className="avatar-grid"></img>
                </div>
                <p className="pokemon-name-grid">{pokemon.name}</p>
                <PokemonType type={pokemon.type} />
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default PokemonGrid;