"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Use resolvedTheme to get the actual theme (considering system preference)
  const currentTheme = resolvedTheme || 'dark';
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  const handleThemeChange = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme(nextTheme);
      setIsAnimating(false);
    }, 240); // Match this with the animation duration (reduced by 20%)
  };

  return (
    <button
      onClick={handleThemeChange}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      disabled={isAnimating}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isAnimating ? nextTheme : currentTheme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.24 }}
        >
          {isAnimating ? (
            // Show the icon for the mode they'll switch to during animation
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
        </motion.div>
      </AnimatePresence>
    </button>
  );
} 