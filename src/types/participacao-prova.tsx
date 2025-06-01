export interface ParticipacaoProva {
    id: number;
    atleta_id: number;
    equipe_id: number;
    prova_id: number;
    competicao_id: number;
    tempo?: number | null;
    colocacao?: number | null;
}
