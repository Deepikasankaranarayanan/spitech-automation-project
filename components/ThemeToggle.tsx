"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="fixed left-6 bottom-6 z-50 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 p-4 rounded-full shadow-2xl transition"
    >

      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-purple-600" />
      )}

    </button>
  );
}