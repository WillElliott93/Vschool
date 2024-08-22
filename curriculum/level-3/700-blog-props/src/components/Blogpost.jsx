


export default function BlogPost({title, subTitle, author, date}) {


    return(
        <div className="posts">
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
            <p>Posted by {author} on {date}</p>
        </div>
    )
}