"use client"

import Link from "next/link"
import { Github, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
                <span className="inline-block font-bold">DevCulture Hub</span>
            </Link>
            <nav className="flex gap-6">
                <Link
                href="/"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                Dashboard
                </Link>
                <Link
                href="/github"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                GitHub
                </Link>
                <Link
                href="/entertainment"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                Entertainment
                </Link>
                <Link
                href="/books"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                Books
                </Link>
            </nav>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
                <ThemeToggle />
                <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                </Link>
                </Button>
            </nav>
            </div>
        </div>
        </header>
    )
}

function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}

