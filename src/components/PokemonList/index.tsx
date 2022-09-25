import { useQuery, UseQueryResult } from "react-query";
import { fetchPokemons } from "../../services/fetchPokemons";
import RowsList from "../RowsList";
import PokemonGrid from "../PokemonGrid";
import { PokemonResult } from "../../interfaces/types";
import './styles.css'
import { useState } from "react";
import { usePageContext } from "../../context/PageContext";
import PaginationButtons from "../PaginationButtons";

const PokemonList: React.FC = () => {
  const { page, setPage }= usePageContext();
  console.log(page)
  const handlePreviousPage = () => {
    setPage((previous: number) => previous -1)
  }
  const handleNextPage = () => {
    setPage((previous: number) => previous +1)
  }

  const [displayGrid, setDisplayGrid] = useState<boolean>(false);
  const { data, status }: UseQueryResult<PokemonResult, string> = useQuery(['pokemonList', page], () => fetchPokemons(page))
  
  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error!</div>
  const pokemonList = data;
  
  return (
    <section className="main-section">
      <button className="display-type-buttons" title="Grid display" onClick={() => setDisplayGrid(true)}>
        <img src="https://cdn-icons-png.flaticon.com/512/6800/6800764.png"/>
      </button>
      <button className="display-type-buttons" title="List display" onClick={() => setDisplayGrid(false)}>
        <img src="https://cdn-icons-png.flaticon.com/512/2931/2931805.png"/>
      </button>
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
