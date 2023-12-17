export type Show = {
    id: number;
    url: string;
    name: string;
    type: Type;
    language: Language;
    genres: string[];
    status: Status;
    runtime: number | null;
    averageRuntime: number | null;
    premiered: Date | null;
    ended: Date | null;
    officialSite: null | string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network | null;
    webChannel: Network | null;
    dvdCountry: null;
    externals: Externals;
    image: Image | null;
    summary: null | string;
    updated: number;
    _links: Links;
};

export const truncatedShowProperties = [
    "id",
    "name",
    "image",
    "genres",
    "rating",
    "premiered",
] as const;

export type TruncatedShowProperty = (typeof truncatedShowProperties)[number];

export type TruncatedShowData = Pick<Show, TruncatedShowProperty>;

type Links = {
    self: Previousepisode;
    previousepisode?: Previousepisode;
};

type Previousepisode = {
    href: string;
};

type Externals = {
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string;
};

type Image = {
    medium: string;
    original: string;
};

type Language = "English" | "Mongolian" | "Dutch";

type Network = {
    id: number;
    name: string;
    country: Country | null;
    officialSite: null | string;
};

type Country = {
    name: string;
    code: string;
    timezone: string;
};

type Rating = {
    average: number | null;
};

type Schedule = {
    time: string;
    days: string[];
};

type Status = "Ended" | "In Development";

type Type = "Scripted";
