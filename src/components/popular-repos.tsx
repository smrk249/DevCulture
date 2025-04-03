import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, GitFork, Eye } from "lucide-react"

interface PopularReposProps {
    className?: string
}

export function PopularRepos({ className }: PopularReposProps) {
  // This would be fetched from GitHub API in a real implementation
    const repos = [
        {
        name: "next-auth",
        description: "Authentication for Next.js",
        stars: 1240,
        forks: 320,
        watchers: 45,
        language: "TypeScript",
        },
        {
        name: "react-query",
        description: "Hooks for fetching, caching and updating asynchronous data in React",
        stars: 980,
        forks: 210,
        watchers: 32,
        language: "TypeScript",
        },
        {
        name: "tailwindcss",
        description: "A utility-first CSS framework for rapid UI development",
        stars: 2340,
        forks: 450,
        watchers: 78,
        language: "CSS",
        },
    ]

    return (
        <Card className={className}>
        <CardHeader>
            <CardTitle>Popular Repositories</CardTitle>
            <CardDescription>Your most starred GitHub repositories.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
            {repos.map((repo) => (
                <div key={repo.name} className="flex items-center space-x-4">
                <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium leading-none">{repo.name}</p>
                    <p className="text-sm text-muted-foreground">{repo.description}</p>
                    <div className="flex items-center pt-2">
                    <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{repo.language}</span>
                    <div className="flex items-center ml-4 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        {repo.stars}
                    </div>
                    <div className="flex items-center ml-3 text-xs text-muted-foreground">
                        <GitFork className="h-3 w-3 mr-1" />
                        {repo.forks}
                    </div>
                    <div className="flex items-center ml-3 text-xs text-muted-foreground">
                        <Eye className="h-3 w-3 mr-1" />
                        {repo.watchers}
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </CardContent>
        </Card>
    )
}

