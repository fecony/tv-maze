import { ShowList } from "@/components/show/list";
import { useSearchStore } from "@/store/search";
import { TruncatedShowData } from "@/types/show";
import { useLoaderData, useSearchParams } from "react-router-dom";

export const Loader = async ({ request }: { request: Request }) => {
    const q = new URL(request.url).searchParams.get("q");
    const search = useSearchStore.getState().search;

    return search(q!);
};

export const Error = () => {
    return <h1>Error</h1>;
};

export default function Search() {
    const [search] = useSearchParams();
    const shows = useLoaderData() as TruncatedShowData[];

    return (
        <div className="flex h-full w-full flex-col justify-center space-y-10">
            <h1 className="text-xl font-semibold md:text-2xl">Search</h1>

            <h4 className="mb-4 text-sm font-medium leading-none">
                Search results "{search.get("q")}"
            </h4>

            <ShowList shows={shows} />
        </div>
    );
}
