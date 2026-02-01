"use client";

import { cn } from "@/lib/utils";

interface ProgressProps {
    value: number;
    className?: string;
    showLabel?: boolean;
}

export function Progress({ value, className, showLabel = false }: ProgressProps) {
    return (
        <div className="w-full">
            <div className={cn("h-3 w-full overflow-hidden rounded-full bg-secondary", className)}>
                <div
                    className="h-full bg-gradient-to-r from-primary to-purple-600 transition-all duration-500 ease-out"
                    style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
                />
            </div>
            {showLabel && (
                <p className="mt-2 text-sm text-muted-foreground text-right">
                    {Math.round(value)}%
                </p>
            )}
        </div>
    );
}
