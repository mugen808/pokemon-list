import './styles.css'

const PokemonType: React.FC<{ type: string }> = ({ type }) => {
  return (
    <p className={`type ${type}`}>{ type }</p>
  )
}

export default PokemonType;