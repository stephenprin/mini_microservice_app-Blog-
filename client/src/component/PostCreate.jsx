import React, {
  useState
} from 'react'
import axios from 'axios'

const PostCreate = () => {
  const [title, setTitle] = useState('')
   
  const handleChange = (event) => { 
    setTitle(event.target.value)
  }
  const onSubmit = async (event) => { 
    event.preventDefault() 
    await axios.post('http://localhost:4000/posts', {
      title
    })
  }


  return (
      <div>
          <form className='mt-6' onSubmit={onSubmit}>
              <div className='form-group'>
                  <label className='block'>Title</label>
          <input className="input input-bordered w-full mb-4 mt-6 max-w-xs "
            type='text' placeholder='Write a post' onChange={handleChange} value={title} />
              </div>
                <button className='btn btn-primary'>Submit</button>
          </form>
    </div>
  )
}

export default PostCreate