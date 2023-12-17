import { TruncatedShowData } from "@/types/show";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ShowItem } from "@/components/show/item";

type ShowListProps = {
    loading?: boolean;
    shows: TruncatedShowData[];
};

export const ShowList = ({ shows, loading = false }: ShowListProps) => {
    if (loading || !shows.length) return null;

    return (
        <ScrollArea className="whitespace-nowrap rounded-md border w-full">
            <div className="flex w-max min-h-[336px] space-x-4 p-4">
                {shows.map((show, index) => (
                    <ShowItem key={`${index}:${show.name}`} show={show} />
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};
