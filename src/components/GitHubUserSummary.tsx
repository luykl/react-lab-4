import { User } from '../model/User';
import { useState } from 'react';
import { UserRepository } from '../model/UserRepository';
import Repository from './Repository';


interface Props {
    user:User;
    repos:UserRepository[];
}

function GitHubUserSummary ({user, repos}:Props) {
    const login:string = user.login;
    const name:string = user.name;
    const image:string = user.avatar_url;
    const link:string = user.html_url;


    return (
        <div className="GitHubUserSummary">
            
            <h1>{login} {user.name && <span>({name})</span>} </h1>
            <p>{user.avatar_url && <img src={image} alt="" />}</p>
            <p><a href={link}>View their GitHub profile</a></p>
            <ul>
            {repos.map((repo) => 
            <Repository repo={repo}/>
            )}
            </ul>

            
        </div>
    )
}

export default GitHubUserSummary;