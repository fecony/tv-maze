import { IconExclamationMark } from "@tabler/icons-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const NotFound = () => {
    return (
        <Alert variant="destructive">
            <IconExclamationMark className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Couldn't get data</AlertDescription>
        </Alert>
    );
};
