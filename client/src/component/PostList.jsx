import React, {useEffect} from 'react'
import axios from 'axios'
import CreateComment from './CreateComment'
import CommentList from './CommentList'

function PostList() {
    const [posts, setPosts] = React.useState({})

    const fetchPosts = async () => { 
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data)
       
    }

    useEffect(() => { 
        fetchPosts()
    }, [])

    const renderedPosts = Object.values(posts).map(post => { 
        return (
            <div className='card border border-sky-500 space-x-4 ' style={{ width: '40%', marginBottom: '20px'}} key={post.id}>
                <div className='card-body'>
                    <h3 className='transition duration-150 ease-out hover:scale-90 font-bold'>{post.title}</h3>
                    <CommentList postId={post.id}/>
                    < CreateComment postId={post.id}/>
                </div>
            </div>
        )
    } )

  return (
      <div className='flex flex-row flex-wrap justify-between '>{ renderedPosts}</div>
  )
}

export default PostList