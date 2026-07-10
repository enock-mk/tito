"use client";

import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, currentTheme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  const activeTheme = theme === "system" ? currentTheme : theme;
  const nextTheme = activeTheme === "dark" ? "light" : "dark";

  return (
    <Button
      onClick={() => setTheme(nextTheme)}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800"
      variant="outline"
    >
      {activeTheme === "dark" ? "Light" : "Dark"} Mode
    </Button>
  );
}
