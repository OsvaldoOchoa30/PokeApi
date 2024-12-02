import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/poke.service';
import { IpokemonSummary } from '../../models/pokemon.model';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonNameTransformPipe } from '../../pipes/pokemon-name-transform.pipe';

@Component({
  selector: 'app-favorite-pokemons',
  templateUrl: './favorite-components.component.html',
  standalone:true,
  imports: [MatTableModule, PokemonNameTransformPipe],
  styleUrls: ['./favorite-components.component.scss']
})
export class FavoritePokemonsComponent implements OnInit {
  favorites: IpokemonSummary[] = [];

  constructor(private service: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.favorites = this.service.getFavorites(); 
  }

  navigateToDetails(pokemonName: string): void {
    this.router.navigate(['/pokemon', pokemonName]); // Navega a la ruta de detalles del Pokémon
  }
}
