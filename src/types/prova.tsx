import { GeneroProva } from "./enums/genero-prova";
import { ModalidadeProva } from "./enums/modalidade-prova";
import { TempoOuColocacao } from "./enums/tempo-ou-colocacao";
import { TipoProva } from "./enums/tipo-prova";

export interface Prova {
    id: number;
    nome: string;
    tipo: TipoProva;
    modalidade: ModalidadeProva;
    tempo_ou_colocacao: TempoOuColocacao;
    genero: GeneroProva;
    categoria_etaria?: string | null;
}
