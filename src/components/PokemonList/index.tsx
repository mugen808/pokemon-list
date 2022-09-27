import { useQuery, UseQueryResult } from "react-query";
import { fetchPokemons } from "../../services/fetchPokemons";
import RowsList from "../RowsList";
import GridList from "../GridList";
import { PokemonResult } from "../../interfaces";
import './styles.css'
import { usePageContext } from "../../context/PageContext";
import PaginationButtons from "../PaginationButtons";
import LoadingScreen from "../Loading";
import Error from "../Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faBorderAll } from "@fortawesome/free-solid-svg-icons"
const PokemonList: React.FC = () => {
  const { page, gridView, setGridView } = usePageContext();

  const { data: pokemonList, status }: UseQueryResult<PokemonResult, string> = useQuery(['pokemonList', page], () => fetchPokemons(page))
  
  if (status === 'loading') return <LoadingScreen />
  if (status === 'error') return <Error />

  return (
    <section className="main-section">
      <div className="display-type-container">
        <button className="display-type-buttons" title="Grid display" onClick={() => setGridView(true)}>
          <FontAwesomeIcon icon={faBorderAll} />
        </button>
        <button className="display-type-buttons" title="List display" onClick={() => setGridView(false)}>
          <FontAwesomeIcon icon={faList} />        
        </button>
      </div>
      {
        gridView === true
          ? <GridList results={pokemonList?.results} next={pokemonList?.next} previous={pokemonList?.previous}/>
          : <RowsList results={pokemonList?.results} next={pokemonList?.next} previous={pokemonList?.previous}/>
      }

      <PaginationButtons></PaginationButtons>
    </section>
  )
}

export default PokemonList;
