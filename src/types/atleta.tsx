import { Genero } from "./enums/genero";

export interface Atleta {
    id: number;
    nome: string;
    cpf: string;
    genero: Genero;
    data_nascimento: string; // ISO date string, e.g. "2025-06-01"
    nacionalidade: string;
}
