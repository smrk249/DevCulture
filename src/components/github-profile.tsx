import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, BookOpen, GitFork } from "lucide-react"

interface GitHubProfileProps {
    className?: string
}

export function GitHubProfile({ className }: GitHubProfileProps) {
  // This would be fetched from GitHub API in a real implementation
    const user = {
        login: "devuser",
        name: "Developer User",
        avatar_url: "https://github.com/github.png",
        public_repos: 24,
        followers: 120,
        following: 80,
    }

    return (
        <Card className={className}>
        <CardHeader>
            <CardTitle>GitHub Profile</CardTitle>
            <CardDescription>Your GitHub profile information.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar_url} alt={user.name} />
                <AvatarFallback>{user.login.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-muted-foreground">@{user.login}</p>
            </div>
            <div className="flex w-full justify-between text-center">
                <div className="flex flex-col">
                <span className="text-2xl font-bold">{user.public_repos}</span>
                <span className="text-xs text-muted-foreground flex items-center justify-center">
                    <BookOpen className="h-3 w-3 mr-1" /> Repos
                </span>
                </div>
                <div className="flex flex-col">
                <span className="text-2xl font-bold">{user.followers}</span>
                <span className="text-xs text-muted-foreground flex items-center justify-center">
                    <Users className="h-3 w-3 mr-1" /> Followers
                </span>
                </div>
                <div className="flex flex-col">
                <span className="text-2xl font-bold">{user.following}</span>
                <span className="text-xs text-muted-foreground flex items-center justify-center">
                    <GitFork className="h-3 w-3 mr-1" /> Following
                </span>
                </div>
            </div>
            </div>
        </CardContent>
        </Card>
    )
}

