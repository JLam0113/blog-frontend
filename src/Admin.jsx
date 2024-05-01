import Form from './components/form'
import Posts from './components/posts'
import { useEffect, useState } from 'react'

function Admin() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async (url) => {
      const requestOptions = {
        method: "GET",
        headers: { "Authorization": "Bearer " + localStorage.getItem('accessToken') },
      };
      console.log(requestOptions)
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
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
    getPosts('http://localhost:3000/post')
  }, []);

  return (
    <>
      {localStorage.getItem('accessToken') !== null ? '' : <Form />}
      <ol className="postsContainer">
        {posts.map(element => (
          <Posts title={element.title}
            content={element.content}
            id={element.id}
            date={element.date}
            key={element.id} />
        ))}
      </ol>
    </>
  )
}

export default Admin
