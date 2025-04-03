import type { Metadata } from "next"
import Link from "next/link"
import { GithubIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "../components/dashboard-header"
import { DashboardShell } from "../components/dashboard-shell"
import { Overview } from "../components/overview"
import { RecentActivity } from "../components/recent-activity"
import { PopularRepos } from "../components/popular-repos"
import { MovieRecommendations } from "../components/movie-recommendations"
import { BookRecommendations } from "../components/book-recommendations"

export const metadata: Metadata = {
  title: "Dashboard | DevCulture Hub",
  description: "A personalized dashboard for developers' entertainment & learning",
}

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Your personalized developer culture hub.">
        <Button asChild>
          <Link href="https://github.com/login/oauth/authorize">
            <GithubIcon className="mr-2 h-4 w-4" />
            Connect GitHub
          </Link>
        </Button>
      </DashboardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Overview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <PopularRepos className="col-span-4" />
        <RecentActivity className="col-span-3" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <MovieRecommendations />
        <BookRecommendations />
      </div>
    </DashboardShell>
  )
}

