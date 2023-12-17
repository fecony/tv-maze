import { toast } from "sonner";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type FavoritesStore = {
    favourites: string[];
    isFavourited: (item: string) => boolean;
    addToFavourite: (item: string) => void;
    removeFromFavourite: (item: string) => void;
};

export const useFavouriteStore = create<FavoritesStore>()(
    devtools(
        persist(
            (set, get) => ({
                favourites: [],
                isFavourited: (item) =>
                    !!get().favourites.find((favourite) => favourite === item),
                addToFavourite: (item) => {
                    toast.success(`Saved "${item}" to favourite list`);

                    set((state) => ({
                        favourites: [...state.favourites, item],
                    }));
                },
                removeFromFavourite: (item) => {
                    toast.warning(`Removed "${item}" from favourite list`);

                    set((state) => ({
                        favourites: state.favourites.filter(
                            (show) => show !== item,
                        ),
                    }));
                },
            }),
            { name: "tv:favouriteStore" },
        ),
    ),
);
