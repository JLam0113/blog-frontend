function Comments({ id, content, date }) {

    return <>
        <span>{content}</span>
        <br></br>
        <span>Posted on date {date}</span>
    </>
}
export default Comments