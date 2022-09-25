import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PageContextProvider } from './context/PageContext';
import { useState } from 'react';
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="main">
      <PageContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </Router>
        </PageContextProvider>
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
