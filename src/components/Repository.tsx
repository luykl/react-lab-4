import { UserRepository } from '../model/UserRepository';

interface Props {
    repo: UserRepository;
}

function Repository ({repo}:Props) {
    const name = repo.name;
    const link = repo.html_url;
    const description = repo.description;
    const lang = repo.language;
    const date = repo.updated_at;
    const hasPages = repo.has_pages;
    const owner = repo.owner;
    const page = "https://" + owner + ".github.io/" + name;


    return (
        <div className="Repository">
            <h2><a href={link}>{name}</a></h2>
            <p>{description}</p>
            <p>{lang}</p>
            <p>Last updated: {date}</p>
            {hasPages && <p><a href={page}>View GitHub Pages</a></p>}
            

        </div>
    )
}


export default Repository;