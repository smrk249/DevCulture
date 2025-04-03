import type { ReactNode } from "react"

interface DashboardShellProps {
    children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
    return (
        <div className="flex min-h-screen flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">DevCulture Hub</h2>
            </div>
            <div className="flex-1 space-y-4">{children}</div>
        </div>
        </div>
    )
}

