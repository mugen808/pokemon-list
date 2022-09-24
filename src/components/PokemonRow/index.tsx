import PokemonType from '../PokemonType';
import './styles.css'
import { PokemonInfo } from '../../interfaces/types';

const PokemonRow: React.FC<PokemonInfo> = ({ imageUrl, name, type }) => {
  return (
    <div className="row-wrapper">
      <div className="avatar-wrapper">
        <img src={imageUrl} className="avatar"></img>
      </div>
      <p className="pokemon-name">{name}</p>
      <PokemonType type={type} />
    </div>
  )
}

export default PokemonRow;