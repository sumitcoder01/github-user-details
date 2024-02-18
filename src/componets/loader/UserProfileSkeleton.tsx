export default function UserProfileSkeleton() {
    return (
        <div className="flex items-center mb-8 flex-col gap-5 md:flex-row md:gap-10 animate-pulse">
            <div className="w-56 h-56 rounded-full bg-gray-300 mr-4"></div>
            <div className="md:mx-3 space-y-2 md:space-y-1">
                <div className="w-32 h-6 bg-gray-300 rounded mb-2"></div>
                <div className="w-24 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-36 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-40 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-32 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-36 h-4 bg-gray-300 rounded"></div>
            </div>
        </div>
    )
}
