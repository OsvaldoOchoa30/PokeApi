import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { FavoritePokemonsComponent } from './components/Pokebola/favorite-components.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'',component:PokemonsComponent},
    {path:'pokemon/:name', component: PokemonDetailComponent},
    {path:'favorites',component:FavoritePokemonsComponent},
    { path: '**', component: NotFoundComponent }, // Ruta comodín para URLs no encontradas
];
