// Modern navigation bar with theme switcher (NextUI/Tailwind)

"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function NavBar() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    setTheme(isDark ? "dark" : "light");
  }, [isDark, setTheme]);

  return (
    <Navbar maxWidth="xl" className="bg-black/70 backdrop-blur-lg shadow-lg mb-8 rounded-xl">
      <NavbarBrand>
        <span className="text-2xl font-extrabold tracking-tight text-white transition-all duration-500 hover:text-primary drop-shadow-xl-gradient">🚀 Docker Multi-Language</span>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="https://github.com/BradleyMatera/docker_multilang_project" target="_blank" className="text-white hover:text-accent transition-colors duration-300 font-semibold drop-shadow-card hover:scale-105">GitHub</Link>
        </NavbarItem>
        <NavbarItem>
          <Switch
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
            size="lg"
            color="primary"
            className="ml-4"
            thumbIcon={isDark ? <span>🌙</span> : <span>☀️</span>}
            aria-label="Toggle dark mode"
          >
            {isDark ? "Dark" : "Light"}
          </Switch>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
