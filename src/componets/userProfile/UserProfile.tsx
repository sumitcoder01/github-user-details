export default function UserProfile() {
    return (
        <div>
            {userData && (
                <div className="flex items-center mb-8">
                    <img src={userData.avatar_url} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                    <div>
                        <h2 className="text-2xl font-bold">{userData.login}</h2>
                        <p className="text-gray-600">{userData.name}</p>
                        <p className="text-gray-600">{userData.bio}</p>
                        <p className="text-gray-600">{userData.location}</p>
                        <p className="text-gray-600">Followers: {userData.followers}</p>
                        <p className="text-gray-600">Following: {userData.following}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
