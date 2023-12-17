import { Button } from "@/components/ui/button";
import { Link } from "@/router";

export default function NotFound() {
    return (
        <>
            <p className="text-xl font-semibold md:text-2xl">404</p>

            <h1 className="mt-8 text-2xl font-semibold md:text-4xl">
                This page does not exist.
            </h1>

            <Button className="mt-8" asChild>
                <Link to="/">Go to homepage</Link>
            </Button>
        </>
    );
}
