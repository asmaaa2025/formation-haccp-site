"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
export function ThemeProvider({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
