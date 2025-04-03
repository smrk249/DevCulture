import type { Metadata } from "next"

import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PopularRepos } from "@/components/popular-repos"
import { RecentActivity } from "@/components/recent-activity"
import { GitHubProfile } from "@/components/github-profile"

export const metadata: Metadata = {
    title: "GitHub | DevCulture Hub",
    description: "Track your GitHub activity and discover trending repositories",
}

export default async function GitHubPage() {
    return (
        <DashboardShell>
        <DashboardHeader
            heading="GitHub Insights"
            text="Track your GitHub activity and discover trending repositories."
        />
        <div className="grid gap-4 md:grid-cols-7">
            <GitHubProfile className="col-span-3" />
            <RecentActivity className="col-span-4" />
        </div>
        <div>
            <PopularRepos />
        </div>
        </DashboardShell>
    )
}

