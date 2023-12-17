import { IconLoader2 } from "@tabler/icons-react";

export const Spinner = ({ loading = false }) => {
    if (!loading) return null;

    return (
        <div className="min-h-[21rem] flex flex-col border rounded-xl col-span-full p-4">
            <div className="flex flex-auto flex-col justify-center items-center">
                <div className="flex justify-center">
                    <IconLoader2 size={24} className="animate-spin" />
                </div>
            </div>
        </div>
    );
};
