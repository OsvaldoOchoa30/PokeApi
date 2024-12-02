import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNameTransform',
  standalone: true // Marca el Pipe como standalone
})
export class PokemonNameTransformPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    // Reemplazar 'a' y 'o' por 'x' y convertir a mayúsculas
    return value.replace(/[ao]/g, 'x').toUpperCase();
  }
}
