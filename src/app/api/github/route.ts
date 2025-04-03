import { NextResponse } from "next/server"

// This would be a real GitHub API integration in a production app
export async function GET() {
  // Example data - in a real app, this would come from GitHub API
    const data = {
        user: {
        login: "devuser",
        name: "Developer User",
        avatar_url: "https://github.com/github.png",
        public_repos: 24,
        followers: 120,
        following: 80,
        },
        repos: [
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
        ],
        activities: [
        {
            type: "commit",
            repo: "next-auth",
            message: "Fix authentication flow",
            time: "2 hours ago",
        },
        {
            type: "pr",
            repo: "react-query",
            message: "Add new caching strategy",
            time: "1 day ago",
        },
        {
            type: "merge",
            repo: "tailwindcss",
            message: "Merge PR #123: Update documentation",
            time: "3 days ago",
        },
        ],
    }

    return NextResponse.json(data)
}

