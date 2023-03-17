import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CommentList = ({postId}) => {
    const [comments, setComments] = useState([])
    
    const fetchComments = async () => { 

       try {
        const res = await axios(`http://localhost:4001/posts/${postId}/comment`)
        setComments(res.data)
       } catch (error) {
        console.log(error)
       }
    }

    useEffect(() => { 
        fetchComments()
    } , [])


  return (
    <div>
          {comments.map(comment => { 
              return <li key={comment.id} className='text-xs'>{comment.content}</li>
              
          })}
    </div>
  )
}

export default CommentList
