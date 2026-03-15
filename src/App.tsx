import { useState, useMemo } from 'react';
import usePokemon from './hooks/usePokemon';

function App() {
  const [ search, setSearch ] = useState('');
  const { pokemons, isLoading, error } = usePokemon(150);

  const filteredPokemons = useMemo(() => {
    if (!search) return pokemons;
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search))
  }, [pokemons, search])

  return (
    <div>
      <h1>Pokémon List</h1>
      <input
        type='text'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>There was an error while fetching pokémons.</p>}
      {filteredPokemons.length > 0 && (
        <ul>
          {filteredPokemons.map(pokemon => (
            <li key={pokemon.name}>
              <p style={{ textTransform: 'capitalize' }}>{pokemon.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
