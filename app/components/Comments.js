import React from 'react'

export default async function Comments({promise}) {
    const comments = await promise;
  return (
    <div className='mt-5'>
        <h1>Comments</h1>
        <ul>
            {comments.map((comment)=>(
                <li className='mt-2' key={comment.id}>{comment.body}</li>
            ))}
        </ul>

   </div>
  )
}
