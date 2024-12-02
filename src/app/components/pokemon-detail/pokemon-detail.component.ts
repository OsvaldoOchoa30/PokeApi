import { Component, OnInit } from '@angular/core';
import { Ipokemon } from '../../models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/poke.service';
import { TitleCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail: Ipokemon | null = null;

  ngOnInit(): void {
    const pokemonName = this.router.snapshot.paramMap.get('name');
    if (pokemonName){
      this.loadPokemonDetails(pokemonName);
    }
      
  }
  constructor (private router: ActivatedRoute, private service: PokemonService){}

  loadPokemonDetails(name: string):void{
    this.service.getPokemonDetails(name).subscribe({
      next: (response) => {
        console.log(response)
        this.pokemonDetail = response; // Asigna la respuesta a pokemonDetail
      },
      error: (err) => {
        console.error('Error al cargar los detalles del Pokémon:', err);
      }
    })

  }




}
