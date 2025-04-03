import type { Metadata } from "next"

import { DashboardHeader } from "../../components/dashboard-header"
import { DashboardShell } from "../../components/dashboard-shell"
import { BookRecommendations } from "../../components/book-recommendations"
import { BookDetails } from "../../components/book-details"

export const metadata: Metadata = {
    title: "Books | DevCulture Hub",
    description: "Technical and non-technical book recommendations for developers",
}

export default async function BooksPage() {
    return (
        <DashboardShell>
        <DashboardHeader heading="Books" text="Technical and non-technical book recommendations for developers." />
        <div className="grid gap-4 md:grid-cols-2">
            <BookRecommendations />
            <BookDetails />
        </div>
        </DashboardShell>
    )
}

