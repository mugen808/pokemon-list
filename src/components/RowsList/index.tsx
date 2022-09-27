import PokemonType from '../PokemonType';
import './styles.css'
import { PokemonResult } from '../../interfaces';
import { Link } from 'react-router-dom';

const RowsList: React.FC<PokemonResult> = ({ results }) => {
  return (
    <ul className="list-container">
      {
        results?.map(pokemon => {
          return (
            <li className="list-item" key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`} state={{ pokemon }} className="row-wrapper">
                <div className="avatar-wrapper">
                  <img src={pokemon.imageUrl} className="avatar" alt={`${pokemon.name} avatar`}></img>
                </div>
                <div className="list-name-container">
                  <span className="pokemon-id">#{pokemon.id}</span>
                  <p className="pokemon-name">{pokemon.name}</p>
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

export default RowsList;
