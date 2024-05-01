function Comments({ id, content, date }) {

    return <>
        <li id={id}>
        <span>{content}</span>
        <br></br>
        <span>Posted on date {date}</span>
        </li>
    </>
}
export default Comments