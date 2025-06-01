export interface Competicao {
    id: number;
    nome: string;
    data_inicio: Date;
    data_fim: Date;
    local: string;
    ano?: number | null;
}
