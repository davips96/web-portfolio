"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

type Theme = "light" | "dark" | "system";
type Attribute = "class" | "data-theme" | "data-mode";

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: Attribute;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({ 
  children, 
  ...props 
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 