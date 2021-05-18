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
            <p className="profileLink"><a href={link}>View their GitHub profile</a></p>
            <div className="repositories">
                <h1>Repositories</h1>
                <ul>
                {repos.map((repo) => 
                <li><Repository repo={repo}/></li>
                )}
                </ul>
            </div>

            
        </div>
    )
}

export default GitHubUserSummary;