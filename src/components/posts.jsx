function Posts({ id, title, content, date }) {

    return <>
        <li className="card" 
        id={id} >
            <h3>{title}</h3>
            <span>{content}</span>
            <br></br>
            <span>Published on date: {date}</span>
        </li>
    </>
}

export default Posts