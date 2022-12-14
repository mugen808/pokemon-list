import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PageContextProvider } from './context/PageContext';
import { ReactQueryDevtools } from 'react-query/devtools'
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import Header from './components/Header';
import Error from './components/Error';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="main">
        <PageContextProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<PokemonList />} />
              <Route path="/pokemon/:id" element={<PokemonDetails />} />
              <Route path="*" element={<Error />}/>
            </Routes>
          </Router>
        </PageContextProvider>
      </main>
    </QueryClientProvider>
  )
}

export default App
