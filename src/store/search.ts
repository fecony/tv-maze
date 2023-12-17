import { Show, TruncatedShowData, truncatedShowProperties } from "@/types/show";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { api } from "@/lib/services/tvmaze.api";
import { createPersistStorage } from "@/store/storage";
import { pick } from "@/lib/utils";

type SearchStore = {
    searchResults: Map<string, TruncatedShowData[]>;
    searchQueries: string[];
    search: (query: string) => Promise<TruncatedShowData[]>;
    addSearchQuery: (query: string) => void;
};

export const useSearchStore = create<SearchStore>()(
    devtools(
        persist(
            (set, get) => ({
                searchResults: new Map(),
                searchQueries: [],
                search: async (query) => {
                    get().addSearchQuery(query);

                    const searchItems = get().searchResults;
                    const cachedResult = searchItems.get(query);

                    if (cachedResult) {
                        console.log(`Using cached results for query: ${query}`);
                        return cachedResult;
                    }

                    try {
                        const { data } = await api.searchShows(query);
                        console.log(`Fetched results for query: ${query}`);

                        const result = data.map<TruncatedShowData>((search) =>
                            pick<
                                Show,
                                typeof truncatedShowProperties,
                                TruncatedShowData
                            >(search.show, truncatedShowProperties),
                        );

                        set(() => {
                            searchItems.set(query, result);

                            return {
                                searchResults: searchItems,
                            };
                        });

                        return result;
                    } catch (error) {
                        console.error(
                            `Error searching for query ${query}:`,
                            (error as Error).message,
                        );
                        return [];
                    }
                },
                addSearchQuery: (query) =>
                    set((state) => ({
                        searchQueries: [query, ...state.searchQueries].slice(
                            0,
                            5,
                        ),
                    })),
            }),
            {
                name: "tv:searchStore",
                storage: createPersistStorage<SearchStore>(),
            },
        ),
    ),
);
