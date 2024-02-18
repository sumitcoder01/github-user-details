
export default function Repository() {
    return (
        <div className="border p-4 rounded-md">
            <h3 className="font-bold text-lg mb-2">{repo.name}</h3>
            <p className="text-gray-600 mb-2">{repo.description}</p>
            <p className="text-gray-600 mb-2">Language: {repo.language}</p>
            <p className="text-gray-600 mb-2">Created at: {repo.created_at}</p>
            <p className="text-gray-600 mb-2">Commits: {repo.commits}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                View
            </button>
        </div>

    )
}
