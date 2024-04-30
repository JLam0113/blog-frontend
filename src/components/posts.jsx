import { useEffect, useState } from 'react'
import Comments from './comments'

function Posts({ id, title, content, date }) {
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(false)

    useEffect(() => {
        const fetchComments = async (url) => {
            await fetch(url)
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
        }
        fetchComments('http://localhost:3000/post/' + id)
      }, []);

      const clickHandler = () => {
        setShowComments(showComments == false ? true : false)
      }

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
                    <Comments key={element.id}
                        content={element.content}
                        id={element.id}
                        date={element.date} />
                ))}
            </ol>}
            <button onClick={clickHandler}>{showComments == false ? 'Show comments' : 'Hide comments'}</button>

        </li>
    </>
}

export default Posts