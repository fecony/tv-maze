import dayjs from "dayjs";
import ReactHtmlParser from "react-html-parser";
import { TruncatedEpisode } from "@/types/episodes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type EpisodeProps = {
    episode: TruncatedEpisode;
};

export const Episode = ({ episode }: EpisodeProps) => {
    return (
        <figure className="shrink-0 max-w-[300px]">
            <div className="overflow-hidden rounded-md relative">
                <Avatar className="aspect-[16/9] h-fit w-fit object-contain rounded">
                    <AvatarImage
                        className="object-contain"
                        src={episode.image?.original}
                        width={300}
                    />
                    <AvatarFallback>
                        <Skeleton className="w-[300px] h-[280px] rounded-md" />
                    </AvatarFallback>
                </Avatar>
            </div>

            <figcaption className="pt-2 text-xs text-muted-foreground">
                <div className="flex flex-col items-start justify-between ">
                    <span className="font-semibold text-foreground">
                        {episode.name || "-"}{" "}
                    </span>
                    {episode.airstamp &&
                        `(${dayjs(episode.airstamp).format(
                            "YYYY/MM/DD HH:mm",
                        )})`}
                </div>
            </figcaption>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                    value="item-1"
                    className="border-none"
                    disabled={!episode.summary}
                >
                    <AccordionTrigger
                        className={cn(
                            !episode.summary &&
                                "cursor-not-allowed hover:no-underline text-neutral-400",
                        )}
                    >
                        Read Episode Summary
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-wrap [&>*]:break-word [&>*]:whitespace-normal">
                        {ReactHtmlParser(episode.summary)}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </figure>
    );
};
