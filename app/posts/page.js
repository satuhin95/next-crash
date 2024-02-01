import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import React from 'react'

export default async function Posts() {
    const posts = await getAllPosts();
   
  return (
    <div className='mt-6'>
        <h1>All Posts</h1>
        <div>
            <ul className='mt-6'>
                {posts.map((post)=>(
                    <li key={post.id} className='mt-2 color-blue-100'>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
