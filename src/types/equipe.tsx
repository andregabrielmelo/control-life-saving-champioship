import { TipoEquipe } from "./enums/tipo-equipe";

export interface Equipe {
    id: number;
    nome: string;
    tipo: TipoEquipe;
    estado?: string | null;
    nacionalidade?: string | null;
}
