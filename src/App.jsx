import { useEffect, useState } from 'react'
import Posts from './components/posts'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
//  const [total, setTotal] = useState(parseInt(history.state.total) > 0 ? parseInt(history.state.total) : 0)

  useEffect(() => {
    const getPosts = async (url) => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.posts.map((post) => {
            setPosts(posts => [...posts, {
              id: post._id,
              title: post.title,
              content: post.content,
              date: post.date
            }])
          })
        })
    }
    getPosts('http://localhost:3000/')
  }, []);

  return (
    <>
      <ol className="postsContainer">
        {posts.map(element => (
          <Posts title={element.title}
            content={element.content}
            id={element.id}
            date={element.date}
            key={element.id}/>
        ))}
      </ol>
    </>
  )
}

export default App
