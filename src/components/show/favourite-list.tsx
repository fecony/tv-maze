import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useFavouriteStore } from "@/store/favorites";
import { FavouriteButton } from "@/components/favourite-button";

export const FavouriteList = () => {
    const { favourites } = useFavouriteStore();

    if (!favourites.length) {
        return null;
    }

    return (
        <div className="flex w-full flex-col justify-center my-8">
            <h3 className="font-semibold text-xl mb-2">Favourite shows</h3>

            <ScrollArea className="whitespace-nowrap w-full">
                <div className="flex w-max space-x-4 py-4">
                    {favourites.map((show) => (
                        <div
                            key={show}
                            className="overflow-hidden rounded border px-3 py-2 relative space-x-4 flex items-center"
                        >
                            <span className="text-xs text-muted-foreground">
                                <span className="font-semibold text-foreground text-sm">
                                    {show}
                                </span>
                            </span>

                            <FavouriteButton item={show} />
                        </div>
                    ))}
                </div>

                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};
