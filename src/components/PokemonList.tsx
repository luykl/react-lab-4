import { useEffect, useState } from "react";
import { Species } from "../model/pokemon-model";
import { fetchAllPokemon } from "../service/PokemonApiService";

export default function PokemonList () {
    const [ pokemon, setPokemon ] = useState<Species[]>([]);
    useEffect(() => {
        fetchAllPokemon().then(data => {
            setPokemon(data);
        });
    }, []);

    return (
        <div className="PokemonList">
            
      <h2>Pokemon List</h2>
            <ol>
            {/* As usual, render array using .map */}
            {pokemon.map(species => 
                <li key={species.name}>{species.name}</li>
            )}
            </ol>
   

        </div>
    )
}