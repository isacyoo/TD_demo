"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";

export function ThemeWrapper({ children }) {
    const pathname = usePathname();
    const isLightPage = pathname === "/api-reference/";

    return (
        <ThemeProvider
            forcedTheme={isLightPage  ? "light" : null}
        >
            {children}
        </ThemeProvider>
    );
}
