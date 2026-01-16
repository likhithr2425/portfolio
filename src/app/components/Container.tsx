import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({children, className}: {
    children : React.ReactNode,
    className?: string;
}) => {
    return(
        <div className={cn("max-w-4xl mx-auto w-full bg-white dark:bg-black", className)}>
            {children}
        </div>
    )
}