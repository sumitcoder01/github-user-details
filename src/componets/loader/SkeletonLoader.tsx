import RepositorySkeleton from "./RepositorySkeleton"
import UserProfileSkeleton from "./UserProfileSkeleton"

export default function SkeletonLoader() {
    return (
        <div className='mt-2'>
            <div>
                <UserProfileSkeleton />
                {[...Array(10)].map((_, index) => (
                    <RepositorySkeleton key={index} />
                ))}
            </div>
        </div>
    )
}
