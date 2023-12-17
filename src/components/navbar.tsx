import { IconDeviceTv } from "@tabler/icons-react";
import { Search } from "@/components/search";
import { Link } from "@/router";

export const Navbar = () => {
    return (
        <nav className="container absolute top-6 flex max-w-4xl items-center justify-between md:top-10">
            <div className="flex-none lg:flex-initial">
                <Link to="/" className="flex flex-row gap-2">
                    <IconDeviceTv className="text-gray-900" />
                    Not TV Maze
                </Link>
            </div>

            <div className="flex-1 flex items-center justify-between">
                <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                    <Search />
                </div>
            </div>
        </nav>
    );
};
