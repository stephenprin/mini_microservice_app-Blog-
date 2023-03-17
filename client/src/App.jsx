import React from 'react'
import PostCreate from './component/PostCreate'
import PostList from './component/PostList'

function App() {
  return (
    <div className='m-4'>
      <h1 className='text-bold'>Create a Post</h1>
      <PostCreate />
      <hr  className='w-1/2'/>
      <h1 className='font-bold mt-6 text-xl'>Posts</h1>
      <PostList/>
    </div>
  )
}

export default App
