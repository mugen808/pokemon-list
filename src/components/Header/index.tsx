import './styles.css'
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  return (
    <nav className="header-container">
      <Link to="/">
        <div className="header-wrapper">
          <img className="logo" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg" alt="" />
          <h1 className="page-title">THE POKEMON LIST</h1>
        </div>
      </Link>

    </nav>
  )
}

export default Header;