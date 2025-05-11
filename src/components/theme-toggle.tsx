"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Use resolvedTheme to get the actual theme (considering system preference)
  const currentTheme = resolvedTheme || 'dark';
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {isHovering ? (
        // Show the icon for the mode they'll switch to on hover
        nextTheme === "dark" ? (
          <FiMoon className="w-5 h-5" />
        ) : (
          <FiSun className="w-5 h-5" />
        )
      ) : (
        // Show the icon for the current mode
        currentTheme === "dark" ? (
          <FiMoon className="w-5 h-5" />
        ) : (
          <FiSun className="w-5 h-5" />
        )
      )}
    </button>
  );
} 