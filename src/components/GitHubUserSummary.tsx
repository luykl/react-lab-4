import { useState, useEffect } from 'react';
import Repository from './Repository';
import { User } from '../model/User';
import { UserRepository } from '../model/UserRepository';
import { fetchUserProfile, fetchUserRepos } from '../service/GitHubApiService';


interface Props {
    username:string
}


function GitHubUserSummary ({username}:Props) {

    const [userProfile, setUserProfile] = useState<User|null>(null);
    const [userRepos, setUserRepos] = useState<UserRepository[]|null>(null);

        useEffect(() => {
        if (username){
            fetchUserProfile(username).then(data => {
                setUserProfile(data);
            });
        } else {
            setUserProfile(null)
        }
       
    }, [username]);

    useEffect(() => {
        if (username){
            fetchUserRepos(username).then(data => {
                setUserRepos(data);
            });
        } else {
            setUserRepos(null)
        }
  
        
    },[username]);

    


    return (
        <div className="GitHubUserSummary">
            {userProfile && <>
                <h1>{userProfile.login} {userProfile.name && <span>({userProfile.name})</span>} </h1>
                <p>{userProfile.avatar_url && <img src={userProfile.avatar_url} alt="" />}</p>
                {userProfile.html_url && <p className="profileLink"><a href={userProfile.html_url}>View their GitHub profile</a></p>}
            
                {userRepos && userRepos.length > 0 && <div className="repositories">
                    <h1>Repositories</h1>
                    <ul>
                    {userRepos.map((repo) => 
                    <Repository repo={repo} key={repo.name}/>
                    )}
                    </ul>
                </div>}
            </>}
            
        </div>
    )
}

export default GitHubUserSummary;