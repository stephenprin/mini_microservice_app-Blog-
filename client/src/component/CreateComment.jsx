import React from 'react'
import axios from 'axios'

const CreateComment = ({postId}) => {
    const [comment, setComment] = React.useState('')
   

    const handleComment = (event) => { 
        setComment(event.target.value)
    }

    const handleSubmit = async (event) => { 
        event.preventDefault()
        await axios.post(`http://localhost:4001/posts/${postId}/comment`, {
            content: comment
        })
        setComment('')
    }

   
  return (
    <div>
          <form onSubmit={handleSubmit}>
              <div className='form-group'>
                  <label className='block text-[0.6rem]'>New Comment</label>
                    <input className="input input-bordered w-full mb-4 mt-6 max-w-xs value={comment} " onChange={handleComment}/>
              </div>
              <button className="btn btn-outline btn-accent">Post</button>
      </form>
    </div>
  )
}

export default CreateComment
