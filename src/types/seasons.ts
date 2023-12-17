export type Seasons = {
    id: number;
    url: string;
    number: number;
    name: string;
    episodeOrder: number;
    premiereDate: Date;
    endDate: Date;
    network: Network;
    webChannel: null;
    image: Image;
    summary: string;
    _links: Links;
};

export const truncatedSeasonProperties = [
    "id",
    "name",
    "url",
    "number",
    "episodeOrder",
    "premiereDate",
    "image",
] as const;

export type TruncatedSeasonProperty =
    (typeof truncatedSeasonProperties)[number];

export type TruncatedSeasons = Pick<Seasons, TruncatedSeasonProperty>;

type Links = {
    self: Self;
};

type Self = {
    href: string;
};

type Image = {
    medium: string;
    original: string;
};

export type Network = {
    id: number;
    name: string;
    country: Country;
    officialSite: string;
};

type Country = {
    name: string;
    code: string;
    timezone: string;
};
