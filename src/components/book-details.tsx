import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BookDetails() {
  // This would be fetched from an API in a real implementation
    const book = {
        title: "Clean Code",
        author: "Robert C. Martin",
        publisher: "Prentice Hall",
        year: 2008,
        pages: 464,
        tags: ["Programming", "Best Practices"],
        image: "/placeholder.svg?height=300&width=200",
        description:
        "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way. Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship.",
    }

    return (
        <Card>
        <CardHeader>
            <CardTitle>Book Details</CardTitle>
            <CardDescription>Learn more about recommended developer books.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
            <img
                src={book.image || "/placeholder.svg"}
                alt={book.title}
                className="h-[300px] w-[200px] rounded-md object-cover mx-auto md:mx-0"
            />
            <div className="space-y-4">
                <div>
                <h3 className="text-xl font-medium">{book.title}</h3>
                <p className="text-sm text-muted-foreground">by {book.author}</p>
                </div>

                <div>
                <h4 className="font-medium">Publisher</h4>
                <p className="text-sm text-muted-foreground">
                    {book.publisher}, {book.year}
                </p>
                <p className="text-sm text-muted-foreground">{book.pages} pages</p>
                </div>

                <div>
                <h4 className="font-medium">Description</h4>
                <p className="text-sm text-muted-foreground">{book.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
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

