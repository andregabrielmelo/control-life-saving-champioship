import { Button } from "@/components/ui/button"
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"

import Link from "next/link"

export default async function TorneiosPage() {
    let torneios = []
    try {
        console.log(`${process.env.API_URL}/api/Prova`)
        const data = await fetch(`${process.env.API_URL}/api/Prova`)
        if (!data.ok) {
            console.error("Erro no fetch: ", data.status)
        } else {
            torneios = await data.json()
            console.log(torneios)
        }
    } catch (error: any) {
        console.error("ERRO AO FAZER FETCH:")
        console.error("Mensagem:", error.message)
        console.error("Stack:", error.stack)
        console.error("Cause:", error.cause) // Node 18+
    }

    return (
        <>
            <div className="flex py-4 gap-4 justify-between">
                <h1 className="font-extrabold text-4xl">Torneios</h1>

                <Link href="/torneios/criar">
                    <Button>Adicionar torneio</Button>
                </Link>
            </div>

            <div className="container mx-auto">
                <DataTable
                    columns={columns}
                    data={torneios}
                />
            </div>
        </>
    )
}
