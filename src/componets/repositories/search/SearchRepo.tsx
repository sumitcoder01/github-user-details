import searchIcon from '../../../assets/search/search.svg';

export default function SearchRepo({ query, setQuery }: { query: string, setQuery: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <div className='flex items-center mb-5'>
        <div className='bg-gray-300 flex items-center rounded-lg'>
           <img src={searchIcon} className='ml-3 h-6 w-6' alt="search" />
            <input
                type="text"
                placeholder="Search repository..."
                className="px-4 py-2 rounded-lg outline-none bg-gray-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
        </div>
    )
}
