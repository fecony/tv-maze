import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TruncatedEpisode } from "@/types/episodes";
import { Episode } from "@/components/show/episodes/item";

type EpisodesListProps = {
    episodes: TruncatedEpisode[];
};

export const EpisodesList = ({ episodes }: EpisodesListProps) => {
    return (
        <ScrollArea className="whitespace-nowrap rounded-md border w-full">
            <div className="flex w-max min-h-18 space-x-4 p-4">
                {episodes.map((episode) => (
                    <Episode key={episode.id} episode={episode} />
                ))}
            </div>

            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};
