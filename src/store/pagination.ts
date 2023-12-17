import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { useShowsStore } from "@/store/shows";

type PaginationStore = {
    page: number;
    reset: () => void;
    previousPage: () => Promise<void>;
    nextPage: () => Promise<void>;
};

export const usePaginationStore = create<PaginationStore>()(
    devtools(
        persist(
            (set, get) => ({
                page: 1,
                reset: () => set(() => ({ page: 1 })),
                previousPage: async () => {
                    if (get().page > 0) {
                        set((state) => ({ page: state.page - 1 }));
                        await useShowsStore.getState().fetchShows(get().page);
                    }
                },
                nextPage: async () => {
                    set((state) => ({ page: state.page + 1 }));

                    await useShowsStore.getState().fetchShows(get().page);
                },
            }),
            { name: "tv:paginationStore" },
        ),
    ),
);
