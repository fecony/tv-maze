import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { useFavouriteStore } from "@/store/favorites";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { VariantProps, cva } from "class-variance-authority";

const favouriteButtonVariants = cva("", {
    variants: {
        variant: {
            default: "",
            positioned: "absolute bottom-1 right-1",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

interface FavouriteButtonProps
    extends VariantProps<typeof favouriteButtonVariants> {
    item: string;
}

export const FavouriteButton = ({ item, variant }: FavouriteButtonProps) => {
    const { addToFavourite, removeFromFavourite, isFavourited } =
        useFavouriteStore();

    return (
        <Toggle
            variant="favourite"
            className={cn(favouriteButtonVariants({ variant }))}
            size="sm"
            pressed={isFavourited(item)}
            onPressedChange={() => {
                isFavourited(item)
                    ? removeFromFavourite(item)
                    : addToFavourite(item);
            }}
            aria-label={`${
                isFavourited(item) ? "Unmark" : "Mark"
            } ${item} as Favourite Show`}
        >
            {isFavourited(item) ? (
                <IconStarFilled className="h-4 w-4" />
            ) : (
                <IconStar className="h-4 w-4" />
            )}
        </Toggle>
    );
};
