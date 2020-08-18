import {Poke} from './pokemon';

export class Lista {
    count: number;
    next: string;
    previous: string | null;
    results: [
        {
            name:string,
            url:string
        }
    ];
}
export class ListaPoke {
    name:string;
    url:string;
    info?: Poke;
}
