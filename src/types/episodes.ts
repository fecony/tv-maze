export type Episode = {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: Type;
    airdate: Date;
    airtime: string;
    airstamp: Date;
    runtime: number;
    rating: Rating;
    image: Image;
    summary: string;
    _links: Links;
};

export const truncatedEpisodeProperties = [
    "id",
    "name",
    "summary",
    "image",
    "airstamp",
] as const;

export type TruncatedEpisodeProperty =
    (typeof truncatedEpisodeProperties)[number];

export type TruncatedEpisode = Pick<Episode, TruncatedEpisodeProperty>;

type Links = {
    self: Self;
    show: Self;
};

type Self = {
    href: string;
};

type Image = {
    medium: string;
    original: string;
};

type Rating = {
    average: number;
};

export type Type = "regular" | "significant_special" | "insignificant_special";
