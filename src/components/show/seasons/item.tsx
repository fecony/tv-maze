import { TruncatedSeasons } from "@/types/seasons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { Link, useParams } from "@/router";
import { IconList } from "@tabler/icons-react";

type SeasonProps = {
    season: TruncatedSeasons;
};

export const Season = ({ season }: SeasonProps) => {
    const { id: showId } = useParams("/show/:id/seasons");

    return (
        <figure className="shrink-0">
            <div className="overflow-hidden rounded-md relative">
                <Avatar className="aspect-[3/4] h-fit w-fit object-cover rounded">
                    <AvatarImage
                        src={season.image?.medium}
                        width={300}
                        height={400}
                    />
                    <AvatarFallback>
                        <Skeleton className="w-[210px] h-[280px] rounded-md" />
                    </AvatarFallback>
                </Avatar>

                <Button
                    className="absolute bottom-1 left-1 h-8 w-8"
                    variant="secondary"
                    size="icon"
                    asChild
                >
                    <Link
                        to="/show/:id/:season/episodes"
                        params={{
                            id: showId,
                            season: String(season.id),
                        }}
                    >
                        <IconList className="h-4 w-4" />
                    </Link>
                </Button>
            </div>

            <figcaption className="pt-2 text-xs text-muted-foreground">
                <div className="flex flex-row items-center justify-between">
                    <span className="font-semibold text-foreground">
                        {season.name || "-"}{" "}
                        {season.premiereDate &&
                            `(${dayjs(season.premiereDate).format("YYYY")})`}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-sm">Season: {season.number}</span>
                    <span className="text-sm">
                        Episodes: {season.episodeOrder}
                    </span>
                </div>
            </figcaption>
        </figure>
    );
};
