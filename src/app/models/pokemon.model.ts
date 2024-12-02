export interface Ipokemon {
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    sprites: {
      front_default: string;
      other: {
        official_artwork: {
          front_default: string;
        };
      };
    };
    abilities: Array<{
      ability: {
        name: string;
      };
    }>;
    game_indices: Array<{
      version: {
        name: string;
      };
    }>;
  }

  // pokemon-summary.model.ts
export interface IpokemonSummary {
    name: string;
    url: string;
  }
  
  