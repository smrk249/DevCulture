import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from 'lucide-react'

export function BookRecommendations() {
  // This would be fetched from an API in a real implementation
    const books = [
        {
        title: "Clean Code",
        author: "Robert C. Martin",
        tags: ["Programming", "Best Practices"],
        image: "/placeholder.svg?height=120&width=80"
        },
        {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt, David Thomas",
        tags: ["Programming", "Career"],
        image: "/placeholder.svg?height=120&width=80"
        },
        {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        tags: ["System Design", "Data"],
        image: "/placeholder.svg?height=120&width=80"
        }
    ]

    return (
        <Card>
        <CardHeader>
            <CardTitle>Book Recommendations</CardTitle>
            <CardDescription>
            Technical and non-technical books for developers.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-6">
            {books.map((book) => (
                <div key={book.title} className="flex space-x-4">
                <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="h-[120px] w-[80px] rounded-md object-cover"
                />
                <div className="space-y-2">
                    <div>
                    <h3 className="font-medium">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                    </div>
                    <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span className="text-sm">Recommended</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
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
