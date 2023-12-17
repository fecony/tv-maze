import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { IconSearch } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useSearchStore } from "@/store/search";
import { useNavigate } from "@/router";

export const Search = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const searchQueries = useSearchStore((state) => state.searchQueries);

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();

        if (value.trim() === "") {
            toast.warning("Please write search query");
            return;
        }

        setValue("");
        navigate(
            {
                pathname: "/search",
                search: `?q=${value}`,
            },
            {},
        );
    };

    return (
        <form className="flex items-center space-x-2">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Input
                        role="combobox"
                        aria-expanded={open}
                        type="text"
                        placeholder="Search..."
                        className="w-[100px] lg:w-[300px]"
                        onChange={(event) => setValue(event.target.value)}
                        value={value}
                    />
                </PopoverTrigger>

                {searchQueries.length > 0 && (
                    <PopoverContent className="md:w-[100px] lg:w-[300px] p-0">
                        <Command>
                            <CommandGroup>
                                {searchQueries.map((searchQuery, index) => (
                                    <CommandItem
                                        key={`${index}:${searchQuery}`}
                                        value={searchQuery}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        {searchQuery}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                )}
            </Popover>

            <Button
                type="submit"
                size="icon"
                variant="outline"
                className="flex-shrink-0"
                onClick={handleSearch}
            >
                <IconSearch className="h-4 w-4" />
            </Button>
        </form>
    );
};
