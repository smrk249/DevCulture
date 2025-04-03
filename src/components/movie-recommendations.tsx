import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function MovieRecommendations() {
  // This would be fetched from an API in a real implementation
    const movies = [
        {
        title: "The Social Network",
        year: 2010,
        rating: 7.7,
        tags: ["Biography", "Drama"],
        image: "/placeholder.svg?height=120&width=80",
        },
        {
        title: "Silicon Valley",
        year: 2014,
        rating: 8.5,
        tags: ["Comedy", "TV Series"],
        image: "/placeholder.svg?height=120&width=80",
        },
        {
        title: "Mr. Robot",
        year: 2015,
        rating: 8.5,
        tags: ["Drama", "Thriller"],
        image: "/placeholder.svg?height=120&width=80",
        },
    ]

    return (
        <Card>
        <CardHeader>
            <CardTitle>Movie & Series Recommendations</CardTitle>
            <CardDescription>Developer-themed entertainment you might enjoy.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-6">
            {movies.map((movie) => (
                <div key={movie.title} className="flex space-x-4">
                <img
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    className="h-[120px] w-[80px] rounded-md object-cover"
                />
                <div className="space-y-2">
                    <div>
                    <h3 className="font-medium">{movie.title}</h3>
                    <p className="text-sm text-muted-foreground">{movie.year}</p>
                    </div>
                    <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                    <span className="text-sm">{movie.rating}/10</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                    {movie.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                        </Badge>
                    ))}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </CardContent>
        </Card>
    )
}

