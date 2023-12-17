import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Show, TruncatedShowData, truncatedShowProperties } from "@/types/show";
import { createPersistStorage } from "@/store/storage";
import { api } from "@/lib/services/tvmaze.api";
import { pick } from "@/lib/utils";
import {
    Seasons,
    TruncatedSeasons,
    truncatedSeasonProperties,
} from "@/types/seasons";
import {
    Episode,
    TruncatedEpisode,
    truncatedEpisodeProperties,
} from "@/types/episodes";

type ShowsStore = {
    isLoading: boolean;
    error?: string | undefined;
    cachedShows: Map<number, TruncatedShowData[]>;
    cachedShowSeasons: Map<number, TruncatedSeasons[]>;
    cachedEpisodes: Map<number, TruncatedEpisode[]>;
    fetchShows: (page: number) => Promise<TruncatedShowData[]>;
    fetchSeasons: (showId: number) => Promise<TruncatedSeasons[]>;
    fetchEpisodes: (seasonId: number) => Promise<TruncatedEpisode[]>;
    clear: () => void;
};

const initialState = {
    cachedShows: new Map(),
    cachedShowSeasons: new Map(),
    cachedEpisodes: new Map(),
    isLoading: false,
    error: undefined,
};

export const useShowsStore = create<ShowsStore>()(
    devtools(
        persist(
            (set, get) => ({
                ...initialState,
                fetchShows: async (page) => {
                    const cachedShows = get().cachedShows;
                    const cachedShowsPage = cachedShows.get(page);
                    set(() => ({ isLoading: true, error: undefined }));

                    if (cachedShowsPage) {
                        console.log(`Using cached shows for page: ${page}`);
                        set(() => ({ isLoading: false }));
                        return cachedShowsPage;
                    }

                    try {
                        const { data } = await api.getShows(page);

                        console.log(`Fetched shows for page: ${page}`);

                        const result = data.map<TruncatedShowData>((shows) =>
                            pick<
                                Show,
                                typeof truncatedShowProperties,
                                TruncatedShowData
                            >(shows, truncatedShowProperties),
                        );

                        set(() => {
                            cachedShows.set(page, result);

                            return {
                                cachedShows,
                                isLoading: false,
                            };
                        });

                        return result;
                    } catch (error) {
                        console.error(
                            `Error while fetching shows:`,
                            (error as Error).message,
                        );
                        set(() => ({
                            isLoading: false,
                            error: (error as Error).message,
                        }));

                        return [];
                    }
                },
                fetchSeasons: async (showId) => {
                    const cachedSeasons = get().cachedShowSeasons;
                    const cachedShowSeasons = cachedSeasons.get(showId);

                    if (cachedShowSeasons) {
                        console.log(
                            `Using cached show seasons for show: ${showId}`,
                        );
                        return cachedShowSeasons;
                    }

                    try {
                        const { data } = await api.getShowSeasons(showId);

                        console.log(`Fetched show seasons for show: ${showId}`);

                        const result = data.map<TruncatedSeasons>((seasons) =>
                            pick<
                                Seasons,
                                typeof truncatedSeasonProperties,
                                TruncatedSeasons
                            >(seasons, truncatedSeasonProperties),
                        );

                        set(() => {
                            cachedSeasons.set(showId, result);

                            return {
                                cachedShowSeasons: cachedSeasons,
                            };
                        });

                        return result;
                    } catch (error) {
                        console.error(
                            `Error while fetching show seasons:`,
                            (error as Error).message,
                        );
                        return [];
                    }
                },
                fetchEpisodes: async (seasonId) => {
                    const cachedEpisodes = get().cachedEpisodes;
                    const cachedSeasonEpisodes = cachedEpisodes.get(seasonId);

                    if (cachedSeasonEpisodes) {
                        console.log(
                            `Using cached episodes for season: ${seasonId}`,
                        );

                        return cachedSeasonEpisodes;
                    }

                    try {
                        const { data } = await api.getSeasonEpisodes(seasonId);

                        console.log(`Fetched episodes for season: ${seasonId}`);

                        const result = data.map<TruncatedEpisode>((episodes) =>
                            pick<
                                Episode,
                                typeof truncatedEpisodeProperties,
                                TruncatedEpisode
                            >(episodes, truncatedEpisodeProperties),
                        );

                        set(() => {
                            cachedEpisodes.set(seasonId, result);

                            return { cachedEpisodes };
                        });

                        return result;
                    } catch (error) {
                        console.error(
                            `Error while fetching season episodes:`,
                            (error as Error).message,
                        );
                        return [];
                    }
                },
                clear: () => {
                    set(() => initialState);
                    localStorage.clear();
                },
            }),
            {
                name: "tv:showsStore",
                storage: createPersistStorage<ShowsStore>(),
            },
        ),
    ),
);
