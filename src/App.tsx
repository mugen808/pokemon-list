import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PokemonList from './components/PokemonList';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PokemonList></PokemonList>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
