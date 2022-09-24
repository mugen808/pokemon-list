import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PokemonList from './components/PokemonList';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <main className="main">
        <PokemonList />
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
