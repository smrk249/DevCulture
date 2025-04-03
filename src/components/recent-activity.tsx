import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitCommit, GitPullRequest, GitMerge } from "lucide-react"

interface RecentActivityProps {
    className?: string
}

export function RecentActivity({ className }: RecentActivityProps) {
  // This would be fetched from GitHub API in a real implementation
    const activities = [
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
    ]

    const getIcon = (type: string) => {
        switch (type) {
        case "commit":
            return <GitCommit className="h-4 w-4" />
        case "pr":
            return <GitPullRequest className="h-4 w-4" />
        case "merge":
            return <GitMerge className="h-4 w-4" />
        default:
            return <GitCommit className="h-4 w-4" />
        }
    }

    return (
        <Card className={className}>
        <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest GitHub activity.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-8">
            {activities.map((activity, index) => (
                <div key={index} className="flex items-center">
                <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    {getIcon(activity.type)}
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.repo}</p>
                    <p className="text-sm text-muted-foreground">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                </div>
            ))}
            </div>
        </CardContent>
        </Card>
    )
}

