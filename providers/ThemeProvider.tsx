"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider
      attribute="class" // Adds class="dark" or class="light" to <html>
      defaultTheme="dark" // Uses system preference set to system
      enableSystem={true}
      disableTransitionOnChange // Prevents flicker
    >
      {children}
    </NextThemesProvider>
  );
}
