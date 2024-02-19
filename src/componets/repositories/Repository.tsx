import { useEffect, useState } from "react";
import { Repo } from "../../interfaces/repositories/repositories";

export default function Repository({ repo }: { repo: Repo }) {
    const [date, setDate] = useState<string>("");
    const getDate = (inputDate: string) => {
        const dateObj = new Date(inputDate);
        const dateString = dateObj.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", day: "numeric", month: "short", year: "numeric" });
        setDate(dateString)
    }

    useEffect(() => {
        getDate(repo.created_at);
    }, [repo.created_at])

    return (
        <div className="border p-4 rounded-md">
            <h3 className="font-bold text-lg mb-2">{repo.name}</h3>
            <p className="text-gray-600 mb-2">{repo.description}</p>
            <p className="text-gray-600 mb-2">Language: {repo.language}</p>
            <p className="text-gray-600 mb-2">Created at: {date}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View</a>
            </button>
        </div>
    )
}
