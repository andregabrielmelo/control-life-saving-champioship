"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Prova } from "@/types/prova"
import Link from "next/link"

export const columns: ColumnDef<Prova>[] = [
    {
        accessorKey: "nome",
        header: () => <div className="font-bold">Nome</div>,
    },
    {
        accessorKey: "tipo",
        header: () => <div className="font-bold">Tipo</div>,
    },
    {
        accessorKey: "modalidade",
        header: () => <div className="font-bold">Modalidade</div>,
    },
    {
        accessorKey: "genero",
        header: () => <div className="font-bold">Gênero</div>,
    },
    {
        accessorKey: "categoriaEtaria",
        header: () => <div className="font-bold">Categoria Etária</div>,
    },
    {
        accessorKey: "tempoOuColocacao",
        header: () => <div className="font-bold">Tipo de Resultado</div>,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const dadosProva = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-0"
                        >
                            <span className="sr-only">Abrir menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href={`/torneios/${dadosProva.id}`}>
                                Visualizar prova
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
