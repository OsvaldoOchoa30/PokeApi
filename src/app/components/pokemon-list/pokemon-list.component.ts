import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IpokemonSummary } from '../../models/pokemon.model'; // Usar el modelo de resumen
import { PokemonService } from '../../services/poke.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PokemonNameTransformPipe } from '../../pipes/pokemon-name-transform.pipe';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule,PokemonNameTransformPipe],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: IpokemonSummary[] = []; // Usa el modelo de resumen aquí
  displayedColumns: string[] = ['name', 'url', 'favorite'];
  dataSource = this.pokemons; // Declara dataSource y asígnale el arreglo pokemons

  constructor(private serviceP: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.serviceP.getPokemonList().subscribe({
      next: (response) => {
        // Mapea los datos de la respuesta al modelo adecuado
        this.pokemons = response.results;
        this.dataSource = this.pokemons; // Asigna la lista de Pokémon a dataSource
      },
      error: (err) => console.error('Error al cargar Pokémon', err)
    });
  }

  isFavorite(pokemon: IpokemonSummary): boolean {
    return this.serviceP.isFavorite(pokemon); // Usar el método del servicio
  }

  toggleFavorite(pokemon: IpokemonSummary): void {
    this.serviceP.toggleFavorite(pokemon); // Usar el método del servicio
  }

  navigateToDetails(pokemonName: string): void {
    this.router.navigate(['/pokemon', pokemonName]); // Navega a la ruta de detalles del Pokémon
  }
  goToFavorites():void{
    this.router.navigate(['/favorites'])
  }
}
