import Comments from '@/app/components/Comments';
import getAllPosts from '@/lib/getAllPosts';
import getPost from '@/lib/getPost';
import getPostComment from '@/lib/getPostComment';
import React, { Suspense } from 'react'


export async function generateMetadata({params}){
    const {id} = params;
    const post = await getPost(id);
    return{
        title: post.title,
        description: post.body,
    }
}
export default async function PostPage({params}) {
    const {id} = params;
    const postPromise =  getPost(id);
    const commentsPromise =  getPostComment(id)
    
    // const [post,comments] = await Promise.all([postPromise,commentsPromise]);

    const post = await postPromise;
 
  return (
    <div className='mt-2'>

        <h2 className='text-blue-700'>{post.title}</h2>
        <p>{post.body}</p>
        <hr/>
        <Suspense fallback="<h1>Loading comments...</h1>">
          <Comments promise={commentsPromise}/>
        </Suspense>

    </div>
  )
}
export async function generateStaticParams(){
    const posts = await getAllPosts()
    return posts.map(post => ({
        id:post.id.toString(),
    }))
}
