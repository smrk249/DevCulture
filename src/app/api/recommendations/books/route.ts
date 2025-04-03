import { NextResponse } from "next/server"

export async function GET() {
  // Example data - in a real app, this would come from a database or external API
    const books = [
        {
        title: "Clean Code",
        author: "Robert C. Martin",
        tags: ["Programming", "Best Practices"],
        image: "/placeholder.svg?height=120&width=80",
        description: "A handbook of agile software craftsmanship that helps programmers write clean, maintainable code.",
        },
        {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt, David Thomas",
        tags: ["Programming", "Career"],
        image: "/placeholder.svg?height=120&width=80",
        description:
            "A collection of tips to improve the programming process, covering both individual and team development.",
        },
        {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        tags: ["System Design", "Data"],
        image: "/placeholder.svg?height=120&width=80",
        description:
            "A deep dive into the principles and practicalities of data systems, helping you make intelligent decisions about the technology you use.",
        },
        {
        title: "Refactoring",
        author: "Martin Fowler",
        tags: ["Programming", "Best Practices"],
        image: "/placeholder.svg?height=120&width=80",
        description: "A guide to improving the design of existing code through refactoring techniques.",
        },
        {
        title: "The Phoenix Project",
        author: "Gene Kim, Kevin Behr, George Spafford",
        tags: ["DevOps", "Novel"],
        image: "/placeholder.svg?height=120&width=80",
        description: "A novel about IT, DevOps, and helping your business win.",
        },
    ]

    return NextResponse.json(books)
}

