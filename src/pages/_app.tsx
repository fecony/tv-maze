import { Navbar } from "@/components/navbar";
import { Modals } from "@generouted/react-router";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

export default function App() {
    return (
        <>
            <section
                className={cn(
                    "mx-auto flex min-h-screen w-full flex-col items-center justify-center py-4 md:py-8",
                )}
            >
                <Navbar />

                <main className="container flex w-full max-w-4xl flex-1 flex-col justify-center items-center py-14">
                    <Outlet />
                </main>
            </section>

            <Modals />

            <Toaster
                position="bottom-right"
                theme="light"
                closeButton
                richColors
            />
        </>
    );
}
