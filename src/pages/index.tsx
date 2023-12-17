import { Pagination } from "@/components/pagination";
import { FavouriteList } from "@/components/show/favourite-list";
import { ShowList } from "@/components/show/list";
import { Spinner } from "@/components/spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { usePaginationStore } from "@/store/pagination";
import { useShowsStore } from "@/store/shows";
import { TruncatedShowData } from "@/types/show";
import { IconExclamationMark } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Home() {
    const { fetchShows, isLoading, error } = useShowsStore();
    const { page, reset, nextPage, previousPage } = usePaginationStore();
    const [search, setSearch] = useSearchParams();
    const [shows, setShows] = useState<TruncatedShowData[]>([]);

    useEffect(() => {
        if (!search.get("page")) {
            reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchShows(page).then((response) => setShows(response));
        search.set("page", String(page));
        setSearch(search);
    }, [fetchShows, page, search, setSearch]);

    return (
        <div className="flex h-full w-full flex-col justify-center">
            <FavouriteList />

            <section className="space-y-4 flex flex-col">
                <h3 className="font-semibold text-xl ">Shows</h3>

                <Spinner loading={isLoading} />

                {error && (
                    <Alert variant="destructive">
                        <IconExclamationMark className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Something went wrong: {error}
                        </AlertDescription>
                    </Alert>
                )}

                <ShowList loading={isLoading} shows={shows} />

                <Pagination
                    page={page}
                    previousPage={previousPage}
                    nextPage={nextPage}
                />
            </section>
        </div>
    );
}
