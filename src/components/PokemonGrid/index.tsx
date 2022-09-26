import PokemonType from '../PokemonType';
import './styles.css'
import { PokemonResult } from '../../interfaces';
import { Link } from 'react-router-dom';

const PokemonGrid: React.FC<PokemonResult>  = ({ results }) => {
  return (
    <ul className="list-container-grid">
      {
        results?.map(pokemon => {
          return (
            <li className="grid-list-item" key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`} state={{ pokemon }} className="grid-wrapper">
                <div className="avatar-wrapper-grid">
                  <img src={pokemon.imageUrl} className="avatar-grid"></img>
                </div>
                <div className="grid-name-container">
                  <span className="grid-pokemon-id">#{pokemon.id}</span>
                  <p className="pokemon-name-grid">{pokemon.name}</p>
                </div>
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