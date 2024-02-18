
export default function Repositories() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos
                .filter((repo) =>
                    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((repo) => (

                ))}
        </div>

    )
}
