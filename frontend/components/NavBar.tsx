// Premium navigation bar with theme switcher and smooth hover states.

"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { ThemeSwitch } from "./ThemeSwitch";

export function NavBar() {
  return (
    <Navbar
      maxWidth="xl"
      isBordered
      className="mb-10 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-xl-gradient"
    >
      <NavbarBrand className="gap-3">
        <span className="text-3xl" aria-hidden="true">🌀</span>
        <div className="flex flex-col">
          <span className="font-display text-lg font-semibold text-primary">Docker Multi-Language</span>
          <span className="text-sm text-foreground/60">Compose • Next.js • Bun • NextUI</span>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex" justify="center">
        <NavbarItem>
          <Link
            href="#languages"
            className="text-foreground/80 transition-all hover:text-primary hover:underline underline-offset-4"
          >
            Language demos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#workflow"
            className="text-foreground/80 transition-all hover:text-primary hover:underline underline-offset-4"
          >
            Workflow
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#resources"
            className="text-foreground/80 transition-all hover:text-primary hover:underline underline-offset-4"
          >
            Resources
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="https://github.com/BradleyMatera/docker_multilang_project"
            target="_blank"
            color="secondary"
            radius="full"
            className="font-semibold shadow-card"
          >
            View Repo
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
