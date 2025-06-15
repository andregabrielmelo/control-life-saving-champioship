"use client"

import { Atleta } from "@/types/atleta"
import { Prova } from "@/types/prova"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProvaPage() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const { id } = useParams()
    const [prova, setProva] = useState<Prova | null>(null)
    const [atletas, setAtletas] = useState<Array<Atleta> | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!id) return

        const fetchProva = async () => {
            try {
                const res = await fetch(`${API_URL}/api/Prova/${id}`)
                if (!res.ok) {
                    throw new Error(`Erro ${res.status}: ${res.statusText}`)
                }
                const data: Prova = await res.json()
                setProva(data)
            } catch (err: any) {
                console.error("Erro ao buscar prova:", err)
                setError(err.message)
            }
        }

        const fetchAtletas = async () => {
            try {
                console.log(`fetching ${API_URL}/api/ParticipacaoProva/${id}`)
                const res = await fetch(
                    `${API_URL}/api/ParticipacaoProva/${id}`
                )
                if (!res.ok) {
                    throw new Error(`Erro ${res.status}: ${res.statusText}`)
                }
                const data: Array<Atleta> = await res.json()
                console.log(data)
                setAtletas(data)
            } catch (err: any) {
                console.error("Erro ao buscar prova:", err)
                setError(err.message)
            }
        }

        fetchProva()
        fetchAtletas()
    }, [id])

    if (error) return <p>Erro: {error}</p>
    if (!prova || !atletas) return <p>Carregando...</p>

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Prova: {prova.nome}</h1>
            <ul className="space-y-2 text-lg">
                <li>
                    <strong>Tipo:</strong> {prova.tipo}
                </li>
                <li>
                    <strong>Modalidade:</strong> {prova.modalidade}
                </li>
                <li>
                    <strong>Gênero:</strong> {prova.genero}
                </li>
                <li>
                    <strong>Tempo ou Colocação:</strong>{" "}
                    {prova.tempoOuColocacao}
                </li>
                <li>
                    <strong>Categoria Etária:</strong>{" "}
                    {prova.categoria_etaria ?? "Não especificada"}
                </li>
            </ul>
            <h2>Atletas</h2>
            {atletas?.map((atleta) => {
                return <div key={atleta.id}>{JSON.stringify(atleta)}</div>
            })}
        </>
    )
}
