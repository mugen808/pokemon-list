import { useQuery, UseQueryResult } from "react-query";
import { fetchPokemons } from "../../services/fetchPokemons";
import RowsList from "../RowsList";
import PokemonGrid from "../PokemonGrid";
import { PokemonResult } from "../../interfaces";
import './styles.css'
import { useState } from "react";
import { usePageContext } from "../../context/PageContext";
import PaginationButtons from "../PaginationButtons";
import LoadingScreen from "../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faBorderAll } from "@fortawesome/free-solid-svg-icons"
const PokemonList: React.FC = () => {
  const { page, setPage } = usePageContext();

  const handlePreviousPage = () => {
    setPage((previous: number) => previous -1)
  }
  const handleNextPage = () => {
    setPage((previous: number) => previous +1)
  }

  const [displayGrid, setDisplayGrid] = useState<boolean>(false);
  const { data, status }: UseQueryResult<PokemonResult, string> = useQuery(['pokemonList', page], () => fetchPokemons(page))
  
  if (status === 'loading') return <LoadingScreen />
  if (status === 'error') return <div>Error!</div>
  const pokemonList = data;
  
  return (
    <section className="main-section">
      <div className="display-type-container">
        <button className="display-type-buttons" title="Grid display" onClick={() => setDisplayGrid(true)}>
          <FontAwesomeIcon icon={faBorderAll} />
        </button>
        <button className="display-type-buttons" title="List display" onClick={() => setDisplayGrid(false)}>
          <FontAwesomeIcon icon={faList} />        
        </button>
      </div>
      {
        displayGrid === true
        ? <PokemonGrid results={pokemonList?.results} next={pokemonList?.next} previous={pokemonList?.previous}/>
        : <RowsList results={pokemonList?.results} next={pokemonList?.next} previous={pokemonList?.previous}/>
      }
      
      <PaginationButtons></PaginationButtons>
    </section>
  )
}

export default PokemonList;
