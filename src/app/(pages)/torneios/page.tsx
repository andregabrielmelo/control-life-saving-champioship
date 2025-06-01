import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function TorneiosPage() {
    return (
        <>
            <h1 className="font-extrabold text-4xl">
                Bem vindo a tela de torneios
            </h1>
            <p>...</p>
            <div className="flex py-4 gap-4">
                <Button asChild>
                    <Link href="/torneios/visualizar">Visualizar torneios</Link>
                </Button>
                <Button asChild>
                    <Link href="/torneios/criar">Criar torneio</Link>
                </Button>
            </div>
        </>
    );
}
