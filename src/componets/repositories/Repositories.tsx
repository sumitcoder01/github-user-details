import { useState } from "react";
import { Repo } from "../../interfaces/repositories/repositories";
import SearchRepo from "./search/SearchRepo";
import Repository from "./Repository";

export default function Repositories({ repos }: { repos: Repo[] }) {
    const [query, setQuery] = useState<string>("");

    return (
        <div className="mt-5">
            <div className="flex  justify-center md:justify-start"><SearchRepo query={query} setQuery={setQuery} /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(query.length !== 0 ? repos.filter(repo => repo.name.toLowerCase().includes(query.toLowerCase())) : repos).map(repo => (
                    <Repository key={repo.id} repo={repo} />
                ))}
            </div>
            {query.length !== 0 && repos.filter(repo => repo.name.toLowerCase().includes(query.toLowerCase())).length === 0 && <div className='flex justify-center'>No repository found...</div>}
        </div>
    )
}
