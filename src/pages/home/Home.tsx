import { useState } from "react";
import { User } from "../../interfaces/users/user";
import { BASE_URL } from "../../constants/constant";
import { Repo } from "../../interfaces/repositories/repositories";
import SearchBar from "../../componets/search/SearchBar";
import SkeletonLoader from "../../componets/loader/SkeletonLoader";
import UserProfile from "../../componets/userProfile/UserProfile";
import Repositories from "../../componets/repositories/Repositories";

export default function Home() {
    const [userName, setUserName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [flag, setFlag] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [repos, setRepos] = useState<Repo[] | null>(null);

    const fetchUser = async (): Promise<void> => {
        try {
            const userResponse = await fetch(BASE_URL + userName);
            if (!userResponse.ok) {
                throw new Error('User not found');
            }
            const userData: User = await userResponse.json() as User;
            setUser(userData);
        } catch (error) {
            setUser(null);
            console.error('Error! User not found', error);
        }
    }
    
    const fetchRepos = async (): Promise<void> => {
        try {
            const reposResponse = await fetch(BASE_URL + userName + "/repos");
            if (!reposResponse.ok) {
                throw new Error('Repos not found');
            }
            const reposData: Repo[] = await reposResponse.json() as Repo[];
            setRepos(reposData);
        } catch (error) {
            setRepos(null);
            console.error('Error! Repos not found', error);
        }
    }
    

    const searchUser = async (): Promise<void> => {
        setLoading(true);
        setFlag(true);
        await fetchUser();
        await fetchRepos();
        setLoading(false);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex  justify-center md:justify-start"><SearchBar userName={userName} setUserName={setUserName} searchUser={searchUser} /></div>
            {loading ? <SkeletonLoader /> : (user && repos ? (
                <div className='mt-1'>
                    <UserProfile user={user} />
                    <Repositories repos={repos} />
                </div>
            ) : (
                <div>{userName.length !== 0 && flag ? "No User Found" : "Search For User"}</div>
            ))}
        </div>
    );
}
