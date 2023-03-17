import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CommentList = ({postId}) => {
    const [comments, setComments] = useState([])
    
    const fetchComments = async () => { 

        const res = await axios.get(`http://localhost:4001/posts/${postId}/comment`)
        setComments(res.data)
    }

    useEffect(() => { 
        fetchComments()
    } , [])


  return (
    <div>
          {comments.map(comment => { 
              return <li key={comment.id}>{comment.content}</li>
              
          })}
    </div>
  )
}

export default CommentList
