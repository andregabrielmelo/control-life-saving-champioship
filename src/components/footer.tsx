import Link from "next/link";

import { buttonVariants } from "./ui/button";

import { Mail } from "lucide-react";

export function Footer({ className }: { className?: string }) {
    return (
        <footer
            className={className ?? "flex py-4 items-center max-w-5xl mx-auto"}
        >
            <p>
                &#169; {new Date().getFullYear()} Feito por André Melo, Matheus
                Thurow, Rafael Mecabô e Rodrigo Nicola
            </p>
            <div className="flex gap-2 ml-auto">
                <Link
                    href="mailto:andregabrielmelo@gmail.com"
                    className={buttonVariants({
                        variant: "ghost",
                        className: "transition-all",
                        size: "icon",
                    })}
                    title="E-mail"
                >
                    <Mail size={24} />
                </Link>
            </div>
        </footer>
    );
}
