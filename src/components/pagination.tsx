import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";

type PaginationProps = {
    page: number;
    nextPage: () => void;
    previousPage: () => void;
};

export const Pagination = ({
    page,
    nextPage,
    previousPage,
}: PaginationProps) => {
    return (
        <nav className="flex flex-row space-x-2 self-end">
            <Button size="icon" disabled={page <= 1} onClick={previousPage}>
                <IconChevronLeft className="h-4 w-4" />
            </Button>

            <Badge variant="outline">Page {page}</Badge>

            <Button size="icon" onClick={nextPage}>
                <IconChevronRight className="h-4 w-4" />
            </Button>
        </nav>
    );
};
