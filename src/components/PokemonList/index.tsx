import { useQuery, UseQueryResult } from "react-query";
import { fetchPokemons } from "../../services/fetchPokemons";
import RowsList from "../RowsList";
import PokemonGrid from "../PokemonGrid";
import { PokemonResult } from "../../interfaces/types";
import './styles.css'
import { useState } from "react";

const PokemonList: React.FC = () => {
  const handlePreviousPage = () => {
    setPage(previous => previous -1)
  }
  const handleNextPage = () => {
    setPage(previous => previous +1)
  }

  const [page, setPage] = useState<number>((1));
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
      
      <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </section>
  )
}

export default PokemonList;
