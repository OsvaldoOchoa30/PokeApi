import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IpokemonSummary } from "../models/pokemon.model";
import { Ipokemon } from "../models/pokemon.model"; // Para los detalles del Pokémon

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  private favorites: IpokemonSummary[] = []; // Arreglo para almacenar los favoritos

  constructor(private http: HttpClient) {}

  // Obtiene la lista de Pokémon (solo nombre y url)
  getPokemonList(): Observable<{ results: IpokemonSummary[] }> {
    return this.http.get<{ results: IpokemonSummary[] }>(`${this.apiUrl}/?offset=0&limit=20`);
  }

  // Obtiene los detalles completos de un Pokémon
  getPokemonDetails(name: string): Observable<Ipokemon> {
    return this.http.get<Ipokemon>(`${this.apiUrl}/${name}`);
  }

  // Verifica si un Pokémon es favorito (usando el modelo de resumen)
  isFavorite(pokemon: IpokemonSummary): boolean {
    return this.favorites.some(fav => fav.name === pokemon.name); // Verifica por nombre
  }

  // Alterna el estado de favorito de un Pokémon (usando el modelo de resumen)
  toggleFavorite(pokemon: IpokemonSummary): void {
    const index = this.favorites.findIndex(fav => fav.name === pokemon.name); // Compara por nombre
    if (index > -1) {
      this.favorites.splice(index, 1);
    } else {
      
      if (!(this.favorites.length === 5)){
        this.favorites.push(pokemon);
      }else{

      }
      
    }
  }
  getFavorites(): IpokemonSummary[] {
    return this.favorites;
  }
}
