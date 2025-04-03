import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function MovieDetails() {
  // This would be fetched from an API in a real implementation
    const movie = {
        title: "The Social Network",
        year: 2010,
        rating: 7.7,
        director: "David Fincher",
        cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
        tags: ["Biography", "Drama"],
        image: "/placeholder.svg?height=300&width=200",
        description:
        "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
    }

    return (
        <Card>
        <CardHeader>
            <CardTitle>Movie Details</CardTitle>
            <CardDescription>Learn more about developer-themed entertainment.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
            <img
                src={movie.image || "/placeholder.svg"}
                alt={movie.title}
                className="h-[300px] w-[200px] rounded-md object-cover mx-auto md:mx-0"
            />
            <div className="space-y-4">
                <div>
                <h3 className="text-xl font-medium">
                    {movie.title} ({movie.year})
                </h3>
                <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                    <span>{movie.rating}/10</span>
                </div>
                </div>

                <div>
                <h4 className="font-medium">Director</h4>
                <p className="text-sm text-muted-foreground">{movie.director}</p>
                </div>

                <div>
                <h4 className="font-medium">Cast</h4>
                <p className="text-sm text-muted-foreground">{movie.cast.join(", ")}</p>
                </div>

                <div>
                <h4 className="font-medium">Description</h4>
                <p className="text-sm text-muted-foreground">{movie.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                {movie.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                    {tag}
                    </Badge>
                ))}
                </div>
            </div>
            </div>
        </CardContent>
        </Card>
    )
}

