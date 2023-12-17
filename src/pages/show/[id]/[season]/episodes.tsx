import { useLoaderData } from "react-router-dom";
import { EpisodesList } from "@/components/show/episodes/list";
import { Link, Params, useParams } from "@/router";
import { useShowsStore } from "@/store/shows";
import { TruncatedEpisode } from "@/types/episodes";
import { Button } from "@/components/ui/button";
import { NotFound } from "@/components/not-found";

export const Loader = ({
    params,
}: {
    params: Params["/show/:id/:season/episodes"];
}) => {
    const { season } = params;
    const { fetchEpisodes } = useShowsStore.getState();

    return fetchEpisodes(+season);
};

export default function EpisodesPage() {
    const { id } = useParams("/show/:id/:season/episodes");
    const episodes = useLoaderData() as TruncatedEpisode[];

    return (
        <div className="flex h-full w-full flex-col justify-center">
            <section className="space-y-4 flex flex-col">
                {episodes.length === 0 ? (
                    <>
                        <NotFound />
                        <Button className="mt-8" variant="secondary" asChild>
                            <Link to="/">Go to homepage</Link>
                        </Button>
                    </>
                ) : (
                    <>
                        <div className="flex flex-row justify-between">
                            <h3 className="font-semibold text-xl">
                                Episodes ({episodes.length})
                            </h3>

                            <Button>
                                <Link to="/show/:id/seasons" params={{ id }}>
                                    Back to seasons
                                </Link>
                            </Button>
                        </div>

                        <EpisodesList episodes={episodes} />
                    </>
                )}
            </section>
        </div>
    );
}
