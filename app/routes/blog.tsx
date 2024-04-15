import React from 'react'
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs} from '@remix-run/node';
import { json } from '@remix-run/node';
import { gql } from 'graphql-request';
import { hygraph } from '~/utils/hygraph.server';
import type { Post } from '~/utils/interface';

interface AppProps {
    posts: Post;
}
export async function loader({}: LoaderFunctionArgs) {
    const query = gql`
    query Posts {
        posts {
          createdAt
          id
          overview
          slug
          title
          updatedAt
        }
      }
    
    `;
     const posts= await hygraph.request(query)
     
      return json({posts})
    
}
const Blog = () => {
    const {posts} = useLoaderData() as AppProps;
  return (
    <>
       <>
      
       <div className="py-8 px-4">
        <h1 className="text-3xl font-bold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mb-12">
      My BlogPost
    </h1>
        </div>
        <ul>
         {posts.posts.map((post) =>
        
            <li key={post.id}>
              <article className="p-4 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div>
                  <p className="text-base font-medium leading-6 dark:text-zinc-500 text-zinc-700">
                   {new Date(post.createdAt).toISOString().split('T')[0]}
                  </p>
                </div>

                <Link
                  to={`/post/${post.slug}`}
                  className="space-y-3 xl:col-span-3"
                  prefetch="intent"
                >
                  <div>
                    <h3 className="text-xl font-bold leading-6 tracking-tight text-gray-900 dark:text-gray-100">
                      {post.title}
                    </h3>
                  </div>
                  <div className="prose max-w-none text-gray-600 dark:text-gray-400">
                    {post.overview}
                  </div>
                </Link>
              </article>
            </li>
             )}
        
        </ul>
    
    </>
    </>
  )
}

export default Blog
