import { useState, useEffect } from "react";

const apiEndpoint = "https://pokeapi.co/api/v2/pokemon";
const limit = 10;

interface Pokemon {
  name: string;
}

function App() {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch(`${apiEndpoint}?limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
    </div>
  );
}

export default App;
