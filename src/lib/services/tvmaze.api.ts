import { Episode } from "@/types/episodes";
import { Search } from "@/types/search";
import { Seasons } from "@/types/seasons";
import { Show } from "@/types/show";
import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_TV_MAZE_API_URL,
});

const getShows = (page: number) => {
    return apiClient.get<Show[]>(`/shows?page=${page - 1}`);
};

const getShow = (id: number) => apiClient.get<Show>(`/shows/${id}`);

const searchShows = (query: string) =>
    apiClient.get<Search[]>(`/search/shows?q=${query}`);

const getSeasonEpisodes = (seasonId: number) =>
    apiClient.get<Episode[]>(`/seasons/${seasonId}/episodes`);

const getShowSeasons = (id: number) =>
    apiClient.get<Seasons[]>(`/shows/${id}/seasons`);

export const api = {
    getShow,
    getShows,
    searchShows,
    getShowSeasons,
    getSeasonEpisodes,
};
