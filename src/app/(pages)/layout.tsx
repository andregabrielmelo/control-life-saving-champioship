import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header className="flex justify-between items-center p-8 sticky top-0 transition-all" />
            <main className="px-8">{children}</main>
            <Footer className="flex py-4 px-8 items-center" />
        </>
    );
}
