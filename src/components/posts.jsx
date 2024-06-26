import { useEffect, useState } from 'react'
import Comments from './comments'

function Posts({ id, title, content, date }) {
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(false)

    const clickHandler = async () => {
        setShowComments(showComments == false ? true : false)
        setComments([]);
        try {
            await fetch(`http://localhost:3000/post/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    data.posts.map((comment) => {
                        setComments(comments => [...comments, {
                            id: comment._id,
                            content: comment.content,
                            date: comment.date
                        }])
                    })
                })
        } catch (err) {
            console.log(err.message)
        }
    }

    // TODO
    // Create comment under post
    // Manually add comment to array to force component rerender
    // Need to ensure API returns ID after created
    return <>
        <li className="card"
            id={id} >
            <h3>{title}</h3>
            <span>{content}</span>
            <br></br>
            <span>Published on date: {date}</span>
            <br></br>
            {showComments == false ? '' : <ol className="commentsContainer">
                {comments.map(element => (
                    <Comments
                        content={element.content}
                        id={element.id}
                        date={element.date}
                        key={element.id} />
                ))}
            </ol>}
            <button onClick={clickHandler}>{showComments == false ? 'Show comments' : 'Hide comments'}</button>
        </li>
    </>
}

export default Posts