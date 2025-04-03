import { NextResponse } from "next/server"

export async function GET() {
  // Example data - in a real app, this would come from a database or external API
    const movies = [
        {
        title: "The Social Network",
        year: 2010,
        rating: 7.7,
        tags: ["Biography", "Drama"],
        image: "/placeholder.svg?height=120&width=80",
        description:
            "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea.",
        },
        {
        title: "Silicon Valley",
        year: 2014,
        rating: 8.5,
        tags: ["Comedy", "TV Series"],
        image: "/placeholder.svg?height=120&width=80",
        description:
            "Follows the struggle of Richard Hendricks, a Silicon Valley engineer trying to build his own company called Pied Piper.",
        },
        {
        title: "Mr. Robot",
        year: 2015,
        rating: 8.5,
        tags: ["Drama", "Thriller"],
        image: "/placeholder.svg?height=120&width=80",
        description:
            "Elliot, a brilliant but highly unstable young cyber-security engineer, becomes involved in the underground hacker group fsociety.",
        },
        {
        title: "The Imitation Game",
        year: 2014,
        rating: 8.0,
        tags: ["Biography", "Drama", "Thriller"],
        image: "/placeholder.svg?height=120&width=80",
        description:
            "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.",
        },
        {
        title: "Ex Machina",
        year: 2014,
        rating: 7.7,
        tags: ["Drama", "Sci-Fi", "Thriller"],
        image: "/placeholder.svg?height=120&width=80",
        description:
            "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
        },
    ]

    return NextResponse.json(movies)
}

