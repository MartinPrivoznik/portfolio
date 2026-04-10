"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CookiesProvider } from "react-cookie";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: React.ComponentProps<typeof NextThemesProvider>;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <CookiesProvider>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </HeroUIProvider>
    </CookiesProvider>
  );
}
