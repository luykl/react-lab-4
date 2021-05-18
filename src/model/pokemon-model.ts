import { StringLiteralLike } from "typescript";

export interface PokemonResponse {
    count:number;
    next:string|null;
    previous:string|null;
    results: Species[];
}

export interface Species {
    name:string;
    url:string;
}