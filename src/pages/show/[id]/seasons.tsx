import { NotFound } from "@/components/not-found";
import { SeasonsList } from "@/components/show/seasons/list";
import { Button } from "@/components/ui/button";
import { Link, Params } from "@/router";
import { useShowsStore } from "@/store/shows";
import { TruncatedSeasons } from "@/types/seasons";
import { useLoaderData } from "react-router-dom";

export const Loader = async ({
    params,
}: {
    params: Params["/show/:id/seasons"];
}) => {
    const { id } = params;
    const { fetchSeasons } = useShowsStore.getState();

    return fetchSeasons(+id);
};

export default function SeasonsPage() {
    const seasons = useLoaderData() as TruncatedSeasons[];

    return (
        <div className="flex h-full w-full flex-col justify-center">
            <section className="space-y-4 flex flex-col">
                {seasons.length === 0 ? (
                    <NotFound />
                ) : (
                    <>
                        <h3 className="font-semibold text-xl">
                            Seasons ({seasons.length})
                        </h3>

                        <SeasonsList seasons={seasons} />
                    </>
                )}

                <Button className="mt-8" variant="secondary" asChild>
                    <Link to="/">Go to homepage</Link>
                </Button>
            </section>
        </div>
    );
}
