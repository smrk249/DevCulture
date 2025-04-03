import type { Metadata } from "next"

import { DashboardHeader } from "../../components/dashboard-header"
import { DashboardShell } from "../../components/dashboard-shell"
import { MovieRecommendations } from "../../components/movie-recommendations"
import { MovieDetails } from "../../components/movie-details"

export const metadata: Metadata = {
    title: "Entertainment | DevCulture Hub",
    description: "Developer-themed movies and series recommendations",
}

export default async function EntertainmentPage() {
    return (
        <DashboardShell>
        <DashboardHeader heading="Entertainment" text="Developer-themed movies and series recommendations." />
        <div className="grid gap-4 md:grid-cols-2">
            <MovieRecommendations />
            <MovieDetails />
        </div>
        </DashboardShell>
    )
}

