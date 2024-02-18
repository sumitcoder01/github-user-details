import { User } from "../../interfaces/users/user";

export default function UserProfile({ user }: { user: User }) {
    return (
        <div className="flex items-center mb-8 flex-col gap-5 md:flex-row md:gap-10">
            <img src={user.avatar_url} alt="Profile" className="w-56 h-56 rounded-full mr-4" />
            <div className="md:mx-3 space-y-2 md:space-y-1">
                <h2 className="text-2xl font-bold">{user.login}</h2>
                <p className="text-gray-600">{user.name}</p>
                <p className="text-gray-600">{user.bio}</p>
                <p className="text-gray-600">{user.location}</p>
                <div className="flex text-gray-600">
                    <span className="mr-2">Followers: {user.followers}</span>
                    <span>Following: {user.following}</span>
                </div>
            </div>
        </div>
    )
}
