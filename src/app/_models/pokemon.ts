export class Poke {
    id: number;
    name: string;
    abilities: [
      {
        ability: {
          name: string,
        }
      }
    ];
    types: [
      {
        type: {
          name: string,
        }
      }
    ];
    sprites: {
      front_default: string,
    };
    stats: [
      {
        base_stat: number,
        stat:  {
          name: string,
        }
      }

    ];
  }

