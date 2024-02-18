import { IoSearch } from "react-icons/io5";

export default function SearchBar({ userName, setUserName, searchUser }: { userName: string, setUserName: React.Dispatch<React.SetStateAction<string>>, searchUser: () => Promise<void> }) {
    return (
        <div className="flex items-center mb-4">
            <input
                type="text"
                placeholder="Search users..."
                className="rounded-md px-4 py-2 mx-1 outline-none bg-gray-300"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={searchUser} className="bg-blue-500 rounded-md px-4 py-3 text-center mx-1"><IoSearch /></button>
        </div>
    )
}
