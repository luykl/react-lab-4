import { User } from '../model/User';
import { UserRepository } from '../model/UserRepository';


const ghCredentials:string = process.env.REACT_APP_GITHUB_API_CREDENTIALS || "";
const credentials = btoa(ghCredentials);



export function fetchUserProfile (username:string): Promise<User> {
    return fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
        headers: {
            Authorization: `Basic ${credentials}`
        }
    })
    .then(res => res.json())
    .then((data:User) => {
        return data
    });    

}

export function fetchUserRepos (username:string): Promise<UserRepository[]> {
    return fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos`, {
        headers: {
            Authorization: `Basic ${credentials}`
        }
    })
    .then(res => res.json())
    .then((data:UserRepository[]) => {
        return data;
    });
}

