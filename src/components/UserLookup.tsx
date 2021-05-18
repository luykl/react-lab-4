import {useEffect, useState, FormEvent} from 'react';
import { User } from '../model/User';
import { UserRepository } from '../model/UserRepository';
import { fetchUserProfile, fetchUserRepos } from '../service/GitHubApiService';
import GitHubUserSummary from './GitHubUserSummary';

function UserLookup () {
    const [selectedUsername, setSelectedUsername] = useState("luykl");
    const [userProfile, setUserProfile] = useState<User|null>(null);
    const [userRepos, setUserRepos] = useState<UserRepository[]|null>(null);

    useEffect(() => {
        if (selectedUsername){
            fetchUserProfile(selectedUsername).then(data => {
                setUserProfile(data);
            });
        } else {
            setUserProfile(null)
        }
       
    }, [selectedUsername]);

    useEffect(() => {
        if (selectedUsername){
            fetchUserRepos(selectedUsername).then(data => {
                setUserRepos(data);
            });
        } else {
            setUserRepos(null)
        }
  
        
    },[selectedUsername]);

    function handleSubmit (e:FormEvent) {
        e.preventDefault();
        
    }

    

    return (
        <div className="UserLookup">
            <form onSubmit={handleSubmit}>
                <label>Enter a GitHub username:
                    <input type="text" value={selectedUsername} onChange={e => setSelectedUsername(e.target.value)}/>
                </label>
                <input type="submit" value="Show User"/>
            </form>
            
       
            {userProfile && userRepos && <p><GitHubUserSummary user={userProfile} repos={userRepos}/></p>}
       
        </div>



    )
}


export default UserLookup;
