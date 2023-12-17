import { TruncatedSeasons } from "@/types/seasons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Season } from "@/components/show/seasons/item";

type SeasonsListProps = {
    seasons: TruncatedSeasons[];
};

export const SeasonsList = ({ seasons }: SeasonsListProps) => {
    return (
        <ScrollArea className="whitespace-nowrap rounded-md border w-full">
            <div className="flex w-max min-h-[336px] space-x-4 p-4">
                {seasons.map((season) => (
                    <Season key={season.number} season={season} />
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};
