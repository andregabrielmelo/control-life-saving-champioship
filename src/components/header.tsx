import Link from "next/link";

export function Header({ className }: { className?: string }) {
    return (
        <header
            className={
                className ??
                "flex justify-between items-center p-8 sticky top-0 transition-all backdrop-blur-xs bg-gradient-to-b from-(--color-background) via-(--color-background) via-35% to-(--color-background)/5"
            }
        >
            <Link href="/" title="Vá para a Home Page">
                Torneios Life Saving
            </Link>
            <nav className="flex gap-3 items-center">
                <ul className="flex gap-3">
                    <li>
                        <Link
                            className="text-muted-foreground hover:underline hover:underline-offset-4"
                            href="/sobre"
                        >
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-muted-foreground hover:underline hover:underline-offset-4"
                            href="/torneios"
                        >
                            Torneios
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-muted-foreground hover:underline hover:underline-offset-4"
                            href="/equipe"
                        >
                            Equipe
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
