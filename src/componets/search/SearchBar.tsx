

export default function SearchBar() {
    return (
        <div>
            <input
                type="text"
                placeholder="Search repositories..."
                className="w-full rounded-md px-4 py-2 mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}
