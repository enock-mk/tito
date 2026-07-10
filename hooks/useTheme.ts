"use client";

import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  // Optional: Resolve "system" to actual theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  return { theme, setTheme, systemTheme, currentTheme, mounted };
}
