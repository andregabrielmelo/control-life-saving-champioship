import { columns } from "./columns";
import { DataTable } from "./data-table";

import { Competicao } from "@/types/competicao";

async function getData(): Promise<Competicao[]> {
    // Fetch data from your API here.
    return [
        {
            id: 1,
            nome: "Teste",
            local: "Itajai",
            data_inicio: new Date(),
            data_fim: new Date(),
        },
        // ...
    ];
}

export default async function VisualizarTorneiosPage() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
