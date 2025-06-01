"use client";

import { Competicao } from "@/types/competicao";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Competicao>[] = [
    {
        accessorKey: "nome",
        header: "Nome",
    },
    { accessorKey: "local", header: "Local" },
    {
        accessorKey: "data_inicio",
        header: "Data Inicio",
        cell: ({ row }) => {
            const data_inicio: Date = row.getValue("data_inicio");
            const data_inicio_formatada = data_inicio.toLocaleDateString();

            return data_inicio_formatada;
        },
    },
    {
        accessorKey: "data_fim",
        header: "Data Fim",
        cell: ({ row }) => {
            const data_fim: Date = row.getValue("data_fim");
            const data_fim_formatada = data_fim.toLocaleDateString();

            return data_fim_formatada;
        },
    },
];
