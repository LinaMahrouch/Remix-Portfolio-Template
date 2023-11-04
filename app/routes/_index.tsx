import Profile from "~/components/Template/Profile";
import Me from "../../public/me.png";

import React from 'react';
import { Link, useLoaderData } from "@remix-run/react";
import { LoaderArgs, json } from '@remix-run/node';
import { gql } from 'graphql-request';
import { hygraph } from '~/utils/hygraph.server';
import type { Post } from '~/utils/interface';

interface AppProps {
    posts: Post;
}

export async function loader({}: LoaderArgs) {
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
    return json({posts});
}


export default function Index() {
  const {posts} = useLoaderData() as AppProps;
  return (
    <div >
      <Profile
        imageSrc={Me}
        name="Mahrouch Lina"
        description="Software Engineer who's obsessed with learning and building new things."
      />
      
        <h1 className="tracking-tighter font-bold dark:text-slate-300 text-slate-800 text-3xl md:text-4xl mx-auto m-6">
        My Recent Posts
      </h1>
      <ul>
         {posts.posts.slice(0, 3).map((post) => 
            <li key={post.id} className="py-4">
              <article className="space-y-2">
                <Link
                  to={`/post/${post.slug}`}
                  prefetch="intent"
                >
                  <h3 className="text-xl font-bold leading-6 tracking-tight mb-2 dark:text-slate-500">
                      {post.title}
                  </h3>
                  <div className="flex justify-between items-start ">
                    <div className="prose max-w-none w-3/4 dark:text-slate-300" >
                      {post.overview}
                    </div>
                    <p className="text-base font-medium leading-6 w-1/4 text-right">
                      {new Date(post.createdAt).toISOString().split('T')[0]}
                    </p>
                  </div>
                </Link>
              </article>
            </li>
          )}
      </ul>
    </div>
  );
}
