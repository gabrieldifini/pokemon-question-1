import { useEffect, useState } from 'react';

const apiEndpoint = "https://pokeapi.co/api/v2/pokemon";
const DEFAULT_LIMIT = 10;

type PokemonData = {
    name: string;
    url: string;
}

const usePokemon = (limit = DEFAULT_LIMIT) => {
    const [ pokemons, setPokemons ] = useState<PokemonData[]>([]);
    const [ isLoading, setIsLoading] = useState(true);
    const [ error, setError ] = useState('');

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const res = await fetch(`${apiEndpoint}?limit=${limit}`);
                const data = await res.json();
                setPokemons(data.results);
            } catch {
                setError('There was an error while fetching pokemons.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemons();
    }, [limit]);

    return { pokemons, isLoading, error };
}

export default usePokemon;