import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type TruncatedShowData } from "@/types/show";
import { FavouriteButton } from "@/components/favourite-button";
import { Skeleton } from "@/components/ui/skeleton";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { Link } from "@/router";
import { IconShare3 } from "@tabler/icons-react";

type ShowItemProps = {
    show: TruncatedShowData;
};

export const ShowItem = ({ show }: ShowItemProps) => {
    return (
        <figure className="shrink-0">
            <div className="overflow-hidden rounded-md relative">
                <Avatar className="aspect-[3/4] h-fit w-fit object-cover rounded">
                    <AvatarImage
                        src={show.image?.medium}
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
                        to="/show/:id/seasons"
                        params={{ id: String(show.id) }}
                    >
                        <IconShare3 className="h-4 w-4" />
                    </Link>
                </Button>
                <FavouriteButton item={show.name} variant="positioned" />
            </div>

            <figcaption className="pt-2 text-xs text-muted-foreground">
                <div className="flex flex-row items-center justify-between">
                    <span className="font-semibold text-foreground">
                        {show.name}{" "}
                        {show.premiered &&
                            `(${dayjs(show.premiered).format("YYYY")})`}
                    </span>
                    <span className="text-sm">{show.rating.average}</span>
                </div>
                {show.genres.join(", ")}
            </figcaption>
        </figure>
    );
};
